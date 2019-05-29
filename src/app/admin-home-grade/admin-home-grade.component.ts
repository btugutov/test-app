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
  quizzes = null;
  quizzes_counter = {};
  currentEng_id = null;
  currentUser = null;
  your_list = null;
  your_list_length = 0;
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) { 
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    })
    this._ConnectorService.user.subscribe(user => {
      this.currentUser = user;
      if(user && (!user.admin_grader && !user.admin_owner)){
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
      if(user && user.profile_id){
        this._ConnectorService.getCompletedQuizzes(this.currentUser['profile_id'], this.currentEng_id).then(res => {
          this.quizzes = res;
          this.your_list = this.getCurrentGradingQuiz(res)
          this.your_list_length = Object.keys(this.your_list).length;
          console.log("getCompletedQuizzes =>", res)
        })
      }
    });
  }

  ngOnInit() {
  }
  getCurrentGradingQuiz(list) {
    let res = {};
    for (let c in list) {
      for(let t in list[c]){
        for(let single_t in list[c][t]){
          let current_submit =  list[c][t][single_t];
            if(this.quizzes_counter[current_submit['topic_id']]){
              this.quizzes_counter[current_submit['topic_id']]++;
            }else{
              this.quizzes_counter[current_submit['topic_id']] = 1;
            }
          if(!current_submit['graded'] && current_submit['graded_by'] == this.currentUser.profile_id){
              res[list[c][t][single_t]['submit_id']] = list[c][t][single_t];
            }
        }
      }
    }
    console.log("getCurrentGradingQuiz  return =>", res)
    console.log("quizzes_counter =>", this.quizzes_counter)
    return res;
}

}
