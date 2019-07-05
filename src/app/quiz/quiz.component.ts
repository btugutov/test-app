import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderServiceService } from '../dynamic-script-loader-service.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  currentEng_id = null;
  topic_id = null;
  quiz_id = null;
  currentUser = null;
  currentEng = null;
  question = null;
  completed = false;
  completed_link = ``;
  current_index;
  total_length;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private dynamicScriptLoader: DynamicScriptLoaderServiceService) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
      this.topic_id = params.get('topic_id');
      this.quiz_id = params.get('quiz_id')
      this._ConnectorService.user.subscribe(user => {
        this.currentUser = user;
        if (user) {
          // console.log("USER IS HERE!", this.currentEng_id)
        }
        if (user) {
          // console.log("TAKING A QUIZ!")
          this.takeQuiz()
        }
      });
    })
  }

  ngOnInit() {
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('quizQuestionRender').then(data => {
      // Script Loaded Successfully
    }).catch(error => 
      console.log(error)
      );
  }


  takeQuiz() {
    this._ConnectorService.takeQuiz(this.currentEng_id, this.currentUser.email, this.topic_id, this.quiz_id).then(data => {
      // console.log(data)
      this.question = data;
      if (data) {
        console.log(data)

        this.getQuizLength(this.topic_id);
        if (data['completed']) {
          this.completed = true;
          this.completed_link = `/${this.currentEng_id}/home`;
          return;
        }
        if (this.question.display_type == 4) {
          this.loadScripts()
        }
        
        this.reformatQuestion();
        
      }
    }).catch(function (error) {
      // console.log(error)
    })
  }
  reformatQuestion(){
    // console.log("reformatting question!", this.question.question_prompt)
    
    if(this.question.image_info == null || this.question.image_info == "null"){
      return;
    }
    if(this.question.image){
      if(this.question.base64.split(",").length == 1){
        this.question.base64 = `data:image/png;base64,${this.question.base64}`
      }
      // console.log(this.question.image.base64)
    }else if( this.question.image_info){
      if( this.question.image_info.split(',').length == 1){
        this.question.image_info = `data:image/png;base64,${ this.question.image_info}`
      }
    }
  }
  getQuizLength(quiz_id){
    // console.log("requestion quiz length for ", quiz_id)
    this._ConnectorService.getQuizLength(quiz_id).then(res => {
      // console.log("getQuizLength response => ", res)
      // console.log("this.question_id => ", this.question.question_id)
      let counter = 0;
      for(let el in res){
        if(res[el]['question_id']  ==  this.question.question_id){
          console.log("found!")
          this.current_index = counter;
          this.total_length = Object.keys(res).length;
          break;
        }
        counter++
      }
      // console.log("this.current_index =>", this.current_index)
      // console.log("this.total_length =>", this.total_length)
    }).catch(function(err){
      console.log("ERROR =>", err)
    })
  }
  submit() {
    // console.log('reading answer...')
    if (this.question.question_type == 2) {
      // MANUAL INPUT ANSWER
      let input = document.getElementById('manual_input_field');
      // console.log(input['value'])
      let obj = {
        [this.question.pass_info]: input['value']
      }
      // console.log("OBJ =>", obj)
      this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
        if (data['completed']) {
          this.completed = true;
          this.completed_link = `/${this.currentEng_id}/home`;
          return;
        }
        console.log("NEW QUESTION =>",data)
        this.question = data;
        if (data) {
          document.getElementById('manual_input_field')['value'] = '';
          if (this.question.display_type == 4) {
            this.loadScripts()
          }
        }
        this.getQuizLength(this.topic_id);
        this.reformatQuestion();
      }).catch(function (error) {
        console.log(error)
      })
    } else {
      if (this.question.display_type == 1) {
        let inputs = document.getElementsByClassName("radio_input")
        let answer = null;
        for (let el in inputs) {
          if (typeof (inputs[el]) == 'object') {
            if (inputs[el]['checked']) {
              answer = inputs[el];
              break;
            }
          }
        }
        if (!answer) {
          // alert("SELECT ANSWER!!!!!")
          return
        }
        // console.log("ANSWER =>", answer.id)
        let obj = {
          [this.question.pass_info]: answer.id,
        }
        // console.log("OBJ =>", obj)
        this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
          // console.log(data)
          this.question = data;
          if (data) {
            if (data['completed']) {
              this.completed = true;
              this.completed_link = `/${this.currentEng_id}/home`;
              return;
            }
            if (this.question.display_type == 4) {
              this.loadScripts()
            }
            this.getQuizLength(this.topic_id);
            this.reformatQuestion();
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
      if (this.question.display_type == 2) {
        let inputs = document.getElementsByClassName("checkbox_input");
        let answers = [];
        for (let el in inputs) {
          if (typeof (inputs[el]) == 'object') {
            if (inputs[el]['checked']) {
              answers.push(inputs[el]['id'])
            }
          }
        }
        if (answers.length < 1) {
          // alert("PLEASE CHECK ANYTHING!")
        } else {
          let obj = {
            [this.question.pass_info]: answers,
          }
          // console.log("OBJ =>", obj)
          this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
            // console.log(data)
            this.question = data;
            if (data) {
              if (data['completed']) {
                this.completed = true;
                this.completed_link = `/${this.currentEng_id}/home`;
                return;
              }
              if (this.question.display_type == 4) {
                this.loadScripts()
              }
              this.getQuizLength(this.topic_id);
              this.reformatQuestion();
            }
          }).catch(function (error) {
            console.log(error)
          })
        }
      }
      if (this.question.display_type == 3) {
        let inputs = document.getElementById("select_input")
        if (!inputs['value'] || inputs['value'].length < 1) {
          // alert('please select answer')
          return;
        }
        let obj = {
          [this.question.pass_info]: inputs['value'],
        }
        // console.log("OBJ =>", obj)
        this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
          // console.log(data)
          this.question = data;
          if (data) {
            if (data['completed']) {
              this.completed = true;
              this.completed_link = `/${this.currentEng_id}/home`;
              return;
            }
            if (this.question.display_type == 4) {
              this.loadScripts()
            }
            this.getQuizLength(this.topic_id);
            this.reformatQuestion();
          }
        }).catch(function (error) {
          console.log(error)
        })
      }
      if (this.question.display_type == 4) {
        let buckets = document.getElementsByClassName('bucket')
        let submit_answers = {};
        for (let b in buckets) {
          for (let el in buckets[b]['children']) {
            if (typeof (buckets[b]['children'][el]) === 'object') {
              submit_answers[buckets[b]['children'][el]['id']] = buckets[b]['id']
            }
          }
        }
        if (Object.keys(submit_answers).length < 1) {
          // alert('please answer!')
          return;
        }
        submit_answers['drag_and_drop'] = true;

        // somehow drag'n'drop questions have 'info' property as object. It has to be a string
        submit_answers['info'] = '';
        for (let el in this.question.pass_info) {
          submit_answers['info'] += this.question.pass_info[el] + ","
        }
        // console.log(submit_answers)
        /*
        {
          '785': '2',
          '786': '1',
          '787': '1',
          drag_and_drop: 'true',
          info: '3,4,727,1832,2019-05-09 23:34:10,413,' 
        }
        */
        this._ConnectorService.submitAnswer(this.currentEng_id, submit_answers).then(data => {
          // console.log(data)
          this.question = data;
          if (data) {
            if (data['completed']) {
              this.completed = true;
              this.completed_link = `/${this.currentEng_id}/home`;
              return;
            }
            if (this.question.display_type == 4) {
              this.loadScripts()
            }
            this.getQuizLength(this.topic_id);
            this.reformatQuestion();
          }
        }).catch(function (error) {
          console.log(error)
        })

      }
    }
  }

}
