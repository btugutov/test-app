import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { DynamicScriptLoaderServiceService } from '../dynamic-script-loader-service.service';
import { Question } from '../question';

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
  time_limit = null;
  start_time = null;
  expiration_time;
  expired_bool = false;
  submitting_bool = false;
  math = Math;
  constructor(private _ConnectorService: ConnectorService, private _r: Router, private location: Location, private _route: ActivatedRoute, private dynamicScriptLoader: DynamicScriptLoaderServiceService) {
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
    });

    
      setInterval(() => {
        if (this.question && this.question['time_limit'] && !this.completed) {
          if(this.expiration_time<0 && !this.completed){
            // this.timeExpired();
            this.expired_bool = true;
            // this.completed = true;
            this.submit();
          }else{
            this.expiration_time = (this.question['time_limit'] * 60)  -  (Math.floor((new Date().getTime() - new Date(this.question['start_time']).getTime())/60000 * 60));
          }
        }
      }, 800);

  }

  ngOnInit() {
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('quizQuestionRender').then(data => {
      // Script Loaded Successfully
    }).catch(error => {

      this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "loadScripts")
      console.log(error)
    }
      );
  }


  takeQuiz() {
    if(this.completed){
      return;
    }
    this._ConnectorService.takeQuiz(this.currentEng_id, this.currentUser.email, this.topic_id, this.quiz_id).then(data => {
      if(data['status'] == "failed"){
        console.log(`data['status'] == "failed"`)
        if(localStorage['user']){
          this._ConnectorService.update_user_session(localStorage['user']).then(res =>{
            this.takeQuiz();
          }).catch(function(error){
            this._r.navigateByUrl('/');
          });
        }else{
          this._r.navigateByUrl('/');
        }
        return;
      }
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
      this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "takeQuiz")
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
      console.log("getQuizLength response => ", res)
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
      this._ConnectorService.logEvent(err, "ERROR", "QuizComponent", "getQuizLength")
      console.log("ERROR =>", err)
    })
  }
  submit() {
    console.log('reading answer...')
    // if(this.completed){
    //   return;
    // }
    if(this.submitting_bool){
      console.log("CAN'T DO ANYTHING SINCE THE RESPONSE IS IN PROCESS")
      return;
    }
    if (this.question.question_type == 2) {
      // MANUAL INPUT ANSWER
      let input = document.getElementById('manual_input_field');
      // console.log(input['value'])
      let obj = {
        [this.question.pass_info]: input['value']
      }
      console.log("OBJ =>", obj)
      this.submitting_bool = true;
      this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
        this.question = data;
        
        console.log("NEW QUESTION =>",data)
        if (data['completed']) {
          this.completed = true;
          this.completed_link = `/${this.currentEng_id}/home`;
          return;
        }
        if (data) {
          this.submitting_bool = false;
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
        let answer_reponse = null;
        if (!answer && !this.expired_bool) {
          // alert("SELECT ANSWER!!!!!")
          return
        }else if(!answer && this.expired_bool){
          
        }else{
          answer_reponse = answer.id;
        }
        // console.log("ANSWER =>", answer.id)
        let obj = {
          [this.question.pass_info]: answer_reponse,
        }
        // console.log("OBJ =>", obj)
        this.submitting_bool = true;
        this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
          // console.log(data)
          this.question = data;
          if (data) {
            this.submitting_bool = false;
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
          this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer")
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
        if (answers.length < 1 && !this.expired_bool) {
          // alert("PLEASE CHECK ANYTHING!")
        } else {
          let obj = {
            [this.question.pass_info]: answers,
          }
          // console.log("OBJ =>", obj)
          this.submitting_bool = true;
          this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
            // console.log(data)
            this.question = data;
            if (data) {
              this.submitting_bool = false;
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
            this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer")
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
        this.submitting_bool = true;
        this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(data => {
          // console.log(data)
          this.question = data;
          if (data) {
            this.submitting_bool = false;
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
          this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer")
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
        if (Object.keys(submit_answers).length < 1 && !this.expired_bool) {
          // alert('please answer!')
          return;
        }
        this.submitting_bool = true;
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
            this.submitting_bool = false;
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
          this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer")
        })

      }
    }
  }
  timeExpired(){
    console.log("QUIZ IS EXPIRED!")
  }
}
