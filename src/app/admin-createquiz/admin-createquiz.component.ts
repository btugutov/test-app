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
  temp_bucket_storage = {
    'answer_input': '',
    'bucket_id': null
  }
  list_of_questions = {
    'new_question': new Question()
  };

  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this._ConnectorService.getCatsTopsEngs(user.email).then(res => {
          console.log("RES =>", res)
          if (res['status'] == 'success') {
            this.engagements = res['engs']
            this.engagements_obj = this.sortCategoriesByEngs(this.orderByEngID(res['engs']), res['categories'])
            this.categories_list = this.engagements_obj[this.currentEng_id]['categories']
            this.bucket_list = res['bucket_list']
            this.selected_eng = this.currentEng_id;
          }
        }).catch(function (err) {
          console.log("ERROR =>", err)
        })
      }
      if (user && !user.admin) {
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
    })
  }

  ngOnInit() {
    this.list_of_questions.new_question.temp_bucket_storage = this.temp_bucket_storage;
  }

  // LISTENERS ===============================================================================================================================================================================================

  valueChanger(target, value) { // engagement/category/topic changer
    console.log(target, value)
    if (target == 'engagement') {
      if (this.selected_eng != value) {
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
    } else if (target == 'category') {
      if (this.selected_category != value) {
        this.selected_category = value;
        this.topic_list = this.engagements_obj[this.selected_eng]['categories'][value]
        document.getElementById('topic_selector')['value'] = '';
        this.topic_cat_eng_message.display = false;
      }
    } else if (target == 'topic') {
      this.selected_topic = value;
      let check_bool = false;
      for (let el in this.topic_list) {
        if (this.topic_list[el]['topic'] == value) {
          this.selected_topic = null;
          document.getElementById('topic_selector')['value'] = '';
          this.topic_cat_eng_message.display = true;
          this.topic_cat_eng_message.status = 'fail'
          this.topic_cat_eng_message.message = 'Such topic already exists. Please give it another name.'
          check_bool = true;
          break;
        }
      }
      if (!check_bool) {
        this.topic_cat_eng_message.display = true;
        this.topic_cat_eng_message.status = 'success'
        this.topic_cat_eng_message.message = 'Looks good!'
      }
    }
  }
  displayTypeChanger(target, value) {
    if (value === 'textfield input') {
      this.list_of_questions[target]['display_type_description'] = "Manual input";
      this.list_of_questions[target]['question_type_description'] = 'textfield input';
      this.list_of_questions[target]['display_type_id'] = 1;
    } else if (value === 'drag_and_drop') {
      this.list_of_questions[target]['display_type_description'] = value;
      this.list_of_questions[target]['question_type_description'] = value;
      this.list_of_questions[target]['display_type_id'] = 1;
    } else {
      this.list_of_questions[target]['question_type_description'] = "selected input";
      if (value === "Checkbox") {
        this.list_of_questions[target]['display_type_description'] = "Checkbox";
        this.list_of_questions[target]['display_type_id'] = 2;
      } else if (value === "Dropdown") {
        this.list_of_questions[target]['display_type_description'] = "Dropdown";
        this.list_of_questions[target]['display_type_id'] = 3;
        let one_found = false;
        // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
        // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
        // The loop bellow leaves only first found answer as correct.
        for (let el in this.list_of_questions[target]['answer_correct']) {
          if (this.list_of_questions[target]['answer_correct'][el]) {
            if (!one_found) {
              one_found = true
            } else {
              this.list_of_questions[target]['answer_correct'][el] = false
            }
          }
        }
      } else if (value === "Radio") {
        this.list_of_questions[target]['display_type_description'] = "Radio";
        this.list_of_questions[target]['display_type_id'] = 1;
        let one_found = false;
        // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
        // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
        // The loop bellow leaves only first found answer as correct.
        for (let el in this.list_of_questions[target]['answer_correct']) {
          if (this.list_of_questions[target]['answer_correct'][el]) {
            if (!one_found) {
              one_found = true
            } else {
              this.list_of_questions[target]['answer_correct'][el] = false
            }
          }
        }
      }
    }
  }
  addAnswer(target) {
    let value = document.getElementById(`newAnswerFor_${target}`)['value'];
    if (value.length < 1) {
      console.log("empty input");
      return;
    }
    document.getElementById(`newAnswerFor_${target}`)['value'] = '';
    let answers_list = this.list_of_questions[target]['answer_prompt'];
    for (let el in answers_list) {
      if (answers_list[el] == value) {
        this.errorHandler(target, "add_answer", "Such answer already exists")
        return;
      }
    }
    let key = 'added'
    if (Object.keys(answers_list).length > 0) {
      console.log("NEW NUMBER =>", Number(Object.keys(answers_list)[Object.keys(answers_list).length - 1].split('added')[1]) + 1)
      key += Number(Object.keys(answers_list)[Object.keys(answers_list).length - 1].split('added')[1]) + 1;
    } else {
      key += 1;
    }
    this.list_of_questions[target]['answer_prompt'][key] = value;
    this.list_of_questions[target]['answer_sort'][key] = 1;
    this.list_of_questions[target]['answer_correct'][key] = false;
    this.list_of_questions[target]['answer_soft_delete'][key] = false;
    this.clearErrors(target, 'add_answer');
  }

  inputEditor(target, q_id, q_key, a_id, value) {
    if (target == 'answer') {
      if (q_key == 'answer_soft_delete') {
        delete this.list_of_questions[q_id]['answer_prompt'][a_id];
        delete this.list_of_questions[q_id]['answer_correct'][a_id];
        delete this.list_of_questions[q_id]['answer_soft_delete'][a_id];
        delete this.list_of_questions[q_id]['answer_sort'][a_id];
        return;
      }
      let question_type = this.list_of_questions[q_id]['display_type_description'];
      if ((question_type == 'Dropdown' || question_type == 'Radio') && q_key == 'answer_correct') {
        for (let el in this.list_of_questions[q_id]['answer_correct']) {
          if (el == a_id) {
            this.list_of_questions[q_id]['answer_correct'][el] = true;
          } else {
            this.list_of_questions[q_id]['answer_correct'][el] = false;
          }
        }
        return;
      }
      this.list_of_questions[q_id][q_key][a_id] = value;
    } else if (target == 'img') { // image uploader
      if (value[0].size > 5242880) {
        this.errorHandler(q_id, "image_uploader","The image is too heavy. Upload limit is 5mb per image.")
        return;
      }
      this._ConnectorService.imgToBase64(value).then(data => {
        this.list_of_questions[q_id][q_key] = String(data);
        this.list_of_questions[q_id]['image'] = true;
        this.clearErrors(q_id, 'image_uploader')
      }).catch(function (err) {
        console.log("ERROR =>", err)
        this.errorHandler(q_id, "image_uploader", JSON.stringify(err))
      })
    } else if (target == 'drag_and_drop') { // drag and drop logic
      console.log(`target => ${target} | q_id => ${q_id} | q_key => ${q_key} | a_id => ${a_id} | value => ${value}`)
      if (value == 'add_edit') {
        a_id.value = '';
        alert("lol")
      }else{
        this.list_of_questions[q_id][q_key][a_id] = value;
      }
    } else {
      this.list_of_questions[q_id][q_key] = value;
    }
  }

  removeImg(q_id) {
    this.list_of_questions[q_id]['base64'] = '';
    this.list_of_questions[q_id]['image'] = false;
  }

  dragAndDropAdder(id) {
    console.log(this.list_of_questions[id]['temp_bucket_storage'])
    let input_val = this.list_of_questions[id]['temp_bucket_storage']['answer_input'];
    let bucket_val = this.list_of_questions[id]['temp_bucket_storage']['bucket_id'];
    this.clearErrors(id, 'bucket_input');
    this.clearErrors(id, 'bucket_list');
    if(!input_val || !bucket_val){
      if(!input_val){
        this.errorHandler(id, "bucket_input" ,"Please enter a bucket choice value.")
      }
      if(!bucket_val){
        this.errorHandler(id, "bucket_list","Please choose one of the buckets.")
      }
      console.log ("ERRORS!!")
      return;
    }
    let counter = 0;
    while (this.list_of_questions[id]['answer_prompt']['new' + counter]) {
      counter++;
    }
    let new_id = 'new' + counter; // new answer ID
    this.list_of_questions[id]['answer_prompt'][new_id] = input_val;
    this.list_of_questions[id]['answer_bucket_id'][new_id] = bucket_val;
    this.list_of_questions[id]['answer_soft_delete'][new_id] = false;
    this.list_of_questions[id]['answer_correct'][new_id] = false;
    this.list_of_questions[id]['temp_bucket_storage']['answer_input'] = null;
    this.list_of_questions[id]['temp_bucket_storage']['bucket_id'] = null;

    document.getElementById(`bucket_input_add_input_${id}`)['value'] = '';
    document.getElementById(`bucket_list_pick_${id}`)['value'] = '';


    // let value = document.getElementById(`bucket_input_add_input_${id}`)['value']
    // let bucket_id = document.getElementById(`bucket_list_pick_${id}`)['value']
    // console.log("BUCKET ID =>", document.getElementById(`bucket_list_pick_${id}`))
    // if (!value || !bucket_id || value.length < 1) {
    //   console.log("!value || !bucket_id || value.length < 1 ====>", (!value), (!bucket_id), (value.length < 1))
    //   return;
    // }
   
  }
  checkModuleLink(id){
    if(this.validURL(this.list_of_questions[id]['training_url'])){
      this.clearErrors(id, 'training_url')
      window.open(this.list_of_questions[id]['training_url'], "_blank")
    }else{
      console.log("NOT GOOD!")
      this.errorHandler(id, 'training_url', "Confluence link is invalid")
    }
  }
  inputTest(target) {
    console.log("=============================")
    console.log(target)
    console.log("=============================")
  }





  //  MISC ===========================================================================================================================================================================================

  errorHandler(id, source, message){
    if(!this.list_of_questions[id+"_error"]){
      this.list_of_questions[id+"_error"] = {
        'error_bool': true,
        'errors' : {
        }
      }
      // this.clearErrorMessageTimer(id, 5000)
    }
    this.list_of_questions[id+"_error"]['errors'][source] = message;
  }
  errorHandlerRemover(id){
    delete this.list_of_questions[id+'_error'];
    return true
  }
  clearErrors(id, source){
    try{
      delete this.list_of_questions[id+"_error"]['errors'][source]
      if(Object.keys(this.list_of_questions[id+"_error"]['errors']).length<1){
        delete this.list_of_questions[id+"_error"]
      }
    }
    catch(err){
      // console.log( `clearErrors : error =>`, err)
    }
  }
  clearErrorMessageTimer(id, time){
    let that = this;
    console.log('1st this =>', this)
    setTimeout(
      function(){
        delete that.list_of_questions[id+'_error'];
      }
      , time)
  }

  orderByEngID(engs) {
    let res = {};
    for (let el in engs) {
      if (engs[el]['soft_delete']) {
        continue;
      }
      res[engs[el]['engagement_id']] = engs[el]
    }
    console.log(`orderByEngID(engs) =>`, res)
    return res;
  }
  sortCategoriesByEngs(engs, list) {
    // engs and list are arrays
    for (let cat in list) {
      for (let topic in list[cat]) {
        let eng_id = list[cat][topic]['engagement_id'];
        if (!engs[eng_id]) {
          continue;
        }
        if (!engs[list[cat][topic]['engagement_id']]['categories']) {
          engs[list[cat][topic]['engagement_id']]['categories'] = {}
        }
        if (!engs[list[cat][topic]['engagement_id']]['categories'][cat]) {
          engs[list[cat][topic]['engagement_id']]['categories'][cat] = {}
        }
        engs[list[cat][topic]['engagement_id']]['categories'][cat][list[cat][topic]['topic_id']] = list[cat][topic]
      }
    }
    return engs;
  }

 validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }
}
