import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';

@Component({
  selector: 'app-admin-createquiz',
  templateUrl: './admin-createquiz.component.html',
  styleUrls: ['./admin-createquiz.component.css']
})
export class AdminCreatequizComponent implements OnInit {
  currentUser = JSON.parse(localStorage['user']);
  currentEng_id;
  engagements;
  engagements_obj;
  categories_list = null;
  topic_list = null;
  bucket_list;
  selected_category = null;
  selected_topic = null;
  selected_eng = null;
  topic_cat_eng_message = {
    'display': false,
    'status': "",
    'message': ""
  };

  list_of_questions = {
    'new_question': new Question()
  };
  
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      if(user){
        this.currentUser = user;
        this._ConnectorService.getCatsTopsEngs(user.email).then(res =>{
          console.log("RES =>",res)
          if(res['status'] == 'success'){
            this.engagements = res['engs']
            this.engagements_obj = this.sortCategoriesByEngs(this.orderByEngID(res['engs']), res['categories'])
            this.categories_list = this.engagements_obj[this.currentEng_id]['categories']
            this.bucket_list = res['bucket_list']
            this.selected_eng = this.currentEng_id;
          }
        }).catch(function(err){
          console.log("ERROR =>", err)
        })
      }
      if(user && !user.admin){
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
    })
   }

  ngOnInit() {
  }

  // LISTENERS ===============================================================================================================================================================================================
  
  valueChanger(target, value){ // engagement/category/topic changer
    console.log(target, value)
    if(target == 'engagement'){
      if(this.selected_eng != value){
        console.log("this.engagements_obj =>", this.engagements_obj);
        console.log(`this.engagements_obj[target] =>`, this.engagements_obj[value]);
        this.categories_list = this.engagements_obj[value]['categories'];
        this.topic_list = null;
        this.selected_topic = null;
        this.selected_category = null;
        this.selected_eng = value;
        document.getElementById('category_selector')['value'] = '';
        document.getElementById('topic_selector')['value'] = '';
        this.topic_cat_eng_message.display = false;
      }
    }else if(target == 'category'){
      if(this.selected_category != value){
        this.selected_category = value;
        this.topic_list = this.engagements_obj[this.selected_eng]['categories'][value]
        document.getElementById('topic_selector')['value'] = '';
        this.topic_cat_eng_message.display = false;
      }
    }else if(target == 'topic'){
      this.selected_topic = value;
      let check_bool = false;
      for(let el in this.topic_list){
        if(this.topic_list[el]['topic'] == value){
          this.selected_topic = null;
          document.getElementById('topic_selector')['value'] = '';
          this.topic_cat_eng_message.display = true;
          this.topic_cat_eng_message.status = 'fail'
          this.topic_cat_eng_message.message = 'Such topic already exists. Please give it another name.'
          check_bool = true;
          break;
        }
      }
      if(!check_bool){
        this.topic_cat_eng_message.display = true;
        this.topic_cat_eng_message.status = 'success'
        this.topic_cat_eng_message.message = 'Looks good!'
      }
    }
  }
  displayTypeChanger(target, value){
    // this.list_of_questions['new_question']
    // this.list_of_questions[target]
    
    // console.log("displayTypeChanger(target, value) => ", target, value)
      if (value === 'textfield input') {
          // console.log("manual")
          this.list_of_questions[target]['display_type_description'] = "Manual input";
          this.list_of_questions[target]['question_type_description'] = 'textfield input';
          this.list_of_questions[target]['display_type_id'] = 1;
      } else if (value === 'drag_and_drop') {
        // console.log('drag_and_drop')
          this.list_of_questions[target]['display_type_description'] = value;
          this.list_of_questions[target]['question_type_description'] = value;
          this.list_of_questions[target]['display_type_id'] = 1;
      } else {
          // console.log("selected input")
          this.list_of_questions[target]['question_type_description'] = "selected input";
          if (value === "Checkbox") {
              this.list_of_questions[target]['display_type_description'] = "Checkbox";
              this.list_of_questions[target]['display_type_id'] = 2;
          } else if (value === "Dropdown") {
              this.list_of_questions[target]['display_type_description'] = "Dropdown";
              this.list_of_questions[target]['display_type_id'] = 3;

          } else if (value === "Radio") {
              this.list_of_questions[target]['display_type_description'] = "Radio";
              this.list_of_questions[target]['display_type_id'] = 1;
          }
      }
      // console.log(`this.list_of_questions[target] =>`, this.list_of_questions[target])
  }
  addAnswer(target){
    let value = document.getElementById(`newAnswerFor_${target}`)['value'];
    if(value.length<1){
      console.log("empty input");
      return;
    }
    document.getElementById(`newAnswerFor_${target}`)['value'] = '';
    let answers_list = this.list_of_questions[target]['answer_prompt'];
    for(let el in answers_list){
      if(answers_list[el] == value){
        console.log("Such answer already exists")
        return;
      }
    }
    let key = 'added'
    if(Object.keys(answers_list).length > 0){
      console.log("NEW NUMBER =>", Number( Object.keys(answers_list)[Object.keys(answers_list).length - 1].split('added')[1]) + 1)
      key+= Number( Object.keys(answers_list)[Object.keys(answers_list).length - 1].split('added')[1]) + 1;
    }else{
      key+=1;
    }
    this.list_of_questions[target]['answer_prompt'][key] = value;
    this.list_of_questions[target]['answer_sort'][key] = 1;
    this.list_of_questions[target]['answer_correct'][key] = false;
    this.list_of_questions[target]['answer_soft_delete'][key] = false;
  }
  answerEditor(q_id, q_key, a_id, value){
    if(q_key == 'answer_soft_delete'){
      delete this.list_of_questions[q_id]['answer_prompt'][a_id];
      delete this.list_of_questions[q_id]['answer_correct'][a_id];
      delete this.list_of_questions[q_id]['answer_soft_delete'][a_id];
      delete this.list_of_questions[q_id]['answer_sort'][a_id];
      return;
    }
    console.log(`q_id => ${q_id}, q_key => ${q_key}, a_id => ${a_id}, value => ${value}`)
    console.log('this.list_of_questions[q_id][q_key][a_id] =>',this.list_of_questions[q_id][q_key][a_id])
    this.list_of_questions[q_id][q_key][a_id] = value;
  }
  inputTest(target){
    console.log(`inputTest function: target => ${target}`)
  }




  //  MISC ===========================================================================================================================================================================================
  orderByEngID(engs){
    let res = {};
    for(let el in engs){
      if(engs[el]['soft_delete']){
        continue;
      }
      res[engs[el]['engagement_id']] = engs[el]
    }
    console.log(`orderByEngID(engs) =>`, res)
    return res;
  }
  sortCategoriesByEngs(engs, list){
    // engs and list are arrays
    for(let cat in list){
      for(let topic in list[cat]){
        let eng_id =list[cat][topic]['engagement_id'];
        if(!engs[eng_id]){
          continue;
        }
        if(!engs[list[cat][topic]['engagement_id']]['categories']){
          engs[list[cat][topic]['engagement_id']]['categories'] = {}
        }
        if(!engs[list[cat][topic]['engagement_id']]['categories'][cat]){
          engs[list[cat][topic]['engagement_id']]['categories'][cat] = {}
        }
        engs[list[cat][topic]['engagement_id']]['categories'][cat][ list[cat][topic]['topic_id']] = list[cat][topic]
      }
    }
    return engs;
  }
}
