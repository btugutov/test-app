import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes }  from '../object_validation.js';

@Component({
  selector: 'app-admin-editpermissions',
  templateUrl: './admin-editpermissions.component.html',
  styleUrls: ['./admin-editpermissions.component.css']
})
export class AdminEditpermissionsComponent implements OnInit {
  all_users_original = null;
  all_users = null;
  by_teams;
  by_title;
  currentEng_id;
  sorted_users = null;
  categories = null;
  currentUser;
  current_list = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        let obj = {
          'email': user.email,
          'eng_id': this.currentEng_id
        }
        this._ConnectorService.getQuizPermissions(obj).then(res => {
          console.log("RES =>", res)
          this.sorted_users = {};
          this.all_users_original = cloneDeep(res['response']['users']);
          this.sorted_users['all_users']  = cloneDeep(res['response']['users']);
          this.sorted_users['by_teams'] = groupBy(res['response']['users'], 'team')
          this.sorted_users['by_title'] = groupBy(res['response']['users'], 'title')

          this.by_teams = Object.keys(this.sorted_users['by_teams']);
          this.by_title = Object.keys(this.sorted_users['by_title']);
          this.categories = res['response']['categories'];

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
  }

  // LISTENERS ===========================
  selectList(target, key){
    if(target){

    }
    console.log("TARGET =>", target, "; KEY =>", key)
    this.current_list = this.sorted_users[target][key]
  }


  // MISC FUNCTIONS ======================
  checkState(){
    console.log(this)
  }
}
