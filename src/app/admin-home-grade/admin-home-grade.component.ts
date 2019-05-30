import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-home-grade',
  templateUrl: './admin-home-grade.component.html',
  styleUrls: ['./admin-home-grade.component.css']
})
export class AdminHomeGradeComponent implements OnInit {
  quizzes = null; // all submitted (not graded yet) quizzes
  quizzes_counter = {};
  currentEng_id = null; // current engagement id
  currentUser = null;
  your_list = null; // list of your current grading quizzes
  your_list_length = 0;
  links = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    })
    this._ConnectorService.user.subscribe(user => {
      this.currentUser = user;
      if (user && (!user.admin_grader && !user.admin_owner)) {
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
      if (user && user.profile_id) {
        this._ConnectorService.getCompletedQuizzes(this.currentUser['profile_id'], this.currentEng_id).then(res => {
          for (let c in res) {
            for (let t in res[c]) {
              for (let el in res[c][t]) {
                if (!this.links[res[c][t][el]['topic']]) {
                  this.links[res[c][t][el]['topic']] = {
                    'topic_link': '',
                    'submit_list': {},
                    'topic_id': null
                  }
                }
                this.links[res[c][t][el]['topic']]['topic_link'] = `/${this.currentEng_id}/grade/${res[c][t][el]['topic_id']}/grade`;
                this.links[res[c][t][el]['topic']]['submit_list'][res[c][t][el]['submit_id']] = true;
                this.links[res[c][t][el]['topic']]['topic_id'] = res[c][t][el]['topic_id']
              }
            }
          }
          this.quizzes = res;
          this.your_list = this.getCurrentGradingQuiz(res)
          this.your_list_length = Object.keys(this.your_list).length;
          console.log("getCompletedQuizzes =>", this.quizzes)
        })
      }
    });
  }

  ngOnInit() {
  }
  getCurrentGradingQuiz(list) {
    let res = {};
    for (let c in list) {
      for (let t in list[c]) {
        for (let single_t in list[c][t]) {
          let current_submit = list[c][t][single_t];
          if (this.quizzes_counter[current_submit['topic_id']]) {
            this.quizzes_counter[current_submit['topic_id']]++;
          } else {
            this.quizzes_counter[current_submit['topic_id']] = 1;
          }
          if (!current_submit['graded'] && current_submit['graded_by'] == this.currentUser.profile_id) {
            list[c][t][single_t]['continue_link'] = `/${this.currentEng_id}/grade/${list[c][t][single_t]['submit_id']}/continue`
            list[c][t][single_t]['release_link'] = `/${this.currentEng_id}/grade/${list[c][t][single_t]['submit_id']}/release`
            res[list[c][t][single_t]['topic_id']] = list[c][t][single_t];

          }
        }
      }
    }
    console.log("getCurrentGradingQuiz  return =>", res)
    console.log("quizzes_counter =>", this.quizzes_counter)
    return res;
  }
  releaseQuiz(submit_id, topic_id){
    // console.log("releasing  submit_id=>", submit_id, "; topic_id =>", topic_id)
    // console.log("yourList =>", this.your_list[topic_id])
    this._ConnectorService.releaseSubmittedQuiz(submit_id, topic_id, this.currentUser.email).then(res =>{
      console.log("RES =>",res)
      delete this.your_list[topic_id];
      this.your_list_length--;
    }).catch(function(err){
      console.log("ERROR =>", err)
    })
  }
  releaseAllSubmittedQuiz(){
    let ids = [];
    for(let el in this.your_list){
      ids.push(this.your_list[el]['submit_id'])
    }
    this._ConnectorService.releaseAllSubmittedQuiz(ids, this.currentUser.email).then(res =>{
      console.log("RES =>",res)
      if(res['status'] == "success"){
        this.your_list = {};
        this.your_list_length = 0;
      }else{
        console.log(res['message'])
        alert("Error. Please contact developers." + res['message'])
      }
    }).catch(function(err){
      console.log("ERROR =>", err)
    })
  }

}
