import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-grade',
  templateUrl: './admin-grade.component.html',
  styleUrls: ['./admin-grade.component.css']
})
export class AdminGradeComponent implements OnInit {
  currentEng_id;
  target;
  action;
  currentUser;
  quiz;
  quiz_name;
  quiz_names;
  submit_id;
  grade_data = {};
  release_status = 'no';
  topic_id;
  grading_done_bool = false;
  grades_submitted = false;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    // this._ConnectorService.quizz_names.subscribe(quiz_names => {
    //   this.quiz_names = quiz_names;
    // })
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
      this.target = params.get('target_id');
      this.action = params.get('action');
      this._ConnectorService.user.subscribe(user => {
        this.currentUser = user;
        if (user && (!user.admin_grader && !user.admin_owner)) {
          this._r.navigate([`/${this.currentEng_id}/home`]);
        }
        if (user && user.profile_id ) {
          if(this.action == 'grade'){
            this._ConnectorService.getQuizForGrading(this.currentUser.email, this.target).then(res => {
              if(res['status'] == 'success'){
                this.quiz = this.filterQuiz(res['quiz'])
                console.log("RESPONSE =>", res)
                this.quiz_name = unescape(res['quiz_name']['quiz_name'])
                this.submit_id = res['submit_id']
                // console.log("QUIZ =>", this.quiz)
              }else{
                // console.log("error!")
                // console.log(res)
              }
            }).catch(function(error){
              // console.log(error)
            })
          }else if(this.action == 'continue'){
            // console.log("CONTINUE!!!", this.target)
            this._ConnectorService.continueGradeQuiz(this.currentUser.email, this.target).then(res =>{
              // console.log("res =>", res)
              if(res['status'] == 'success'){
                this.quiz = this.filterQuiz(res['quiz'])
                console.log("RESPONSE =>", res)
                this.quiz_name = unescape(res['quiz_name']['quiz_name'])
                this.submit_id = this.target;
                // console.log("QUIZ =>", this.quiz)
              }else{
                // console.log("error!")
                // console.log(res)
              }
            }).catch(function(err){
              // console.log("ERROR =>", err)
            })
          }
        }
      })
    })
  }

  ngOnInit() {
  }
  filterQuiz(quiz){
    let new_result  = [];
    for(let el in quiz){
      if(!this.topic_id){
        this.topic_id = quiz[el]['quiz_id']
      }
      if(quiz[el]['input_value']){
        if(quiz[el]['base64']){
          let new_base64 = `data:image/png;base64,${quiz[el]['base64']}`;
          quiz[el]['base64'] = new_base64;
        }
        new_result.push(quiz[el]);
      }
    }
    return new_result;
  }

  scaleButton(target){
    console.log("hey", target.name, target.value)
    if(!this.grade_data[target.name]){
      this.grade_data[target.name] = {
        'grader_comment': ''
      };
    }
    this.grade_data[target.name]['point'] = target.value;
    if(Object.keys(this.grade_data).length == Object.keys(this.quiz).length){
      // console.log("ALL DONE!")
      this.grading_done_bool = true;
      // console.log(this.grade_data)
    }
  }
  adminCommentInput(target){
    if(!this.grade_data[target.id]){
      this.grade_data[target.id] = {};
    }
    this.grade_data[target.id]['grader_comment'] = target.value;
  }
  submitGrades(){
    // console.log(this.grade_data)
    let obj = {
      "submission_id": this.submit_id
    };
    for(let el in this.grade_data){
      obj[el] = [this.grade_data[el]['point'], this.grade_data[el]['grader_comment']]
    }
    this._ConnectorService.submitGrades(obj, this.currentUser.email).then(res =>{
      // console.log("RES =>", res)
      if(res['status']=="success"){
        let obj = {
          'success': true,
          'message': ''
        }
        obj.message = `Thank you for submitting grades for quiz ${unescape(this.quiz_name)} #${this.submit_id} `;
        this._ConnectorService.setMainInfo({'message': obj});
        this._r.navigateByUrl(`${this.currentEng_id}/adminhomegrade`)
      }else{
        let obj = {
          'success': false,
          'message': res['message']
        }
        this._r.navigateByUrl(`${this.currentEng_id}/adminhomegrade`)
        alert(res['message'])
      }
    }).catch(function(err){
      // console.log(err)
      alert(err)
    })
    /*
    obj { 
      '404': [ '1', '1st question' ],
      '405': [ '0.8', 'second question' ],
      submission_id: '1825' 
    }
    */
  }
  release(status){
    this.release_status = status;
    if(status == 'yes'){
      this._ConnectorService.releaseSubmittedQuiz(this.submit_id, this.topic_id, this.currentUser.email).then(data =>{
        if(data['status'] == 'failed'){
          // console.log("data after release =>", data)
        }else{
          this._r.navigateByUrl(`${this.currentEng_id}/adminhomegrade`)
        }
      }).catch(function(err){
        // console.log("error after release =>", err)
      })
    }
    // console.log(status)
  }
}
