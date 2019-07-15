import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, arr_diff } from '../object_validation.js';


@Component({
  selector: 'app-connector',
  templateUrl: './connector.component.html',
  styleUrls: ['./connector.component.css']
})
export class ConnectorComponent implements OnInit {
  logs = [];
  cur_list = [];
  currentUser = null;
  curIndex = null;
  pages = 0;
  ready = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        let obj = {
          'email': user.email
        }
        console.log(new Date())
        this._ConnectorService.getEventLog(obj).then(res => {
          console.log(res)
          console.log(new Date())
          this.orginizeList(res['body'])
        }).catch(function (err) {
          console.log("ERROR =>", err)
        })


      }
      if (user && !user.admin) {
        this._r.navigate([`/oops`]);
      }
    })
   }

  ngOnInit() {
  }
  orginizeList(list){
    let counter = 1;
    let array = [];
    for(let el in list){
      this.curIndex++;
      this.logs[el] = {};
      this.cur_list[el] = {};
      this.logs[el].log_id = list[el]['log_id'];
      if(this.curIndex<100){
        this.cur_list[el].log_id = list[el]['log_id'];
      }
      this._ConnectorService.getEventLogByID(list[el]['log_id']).then(res =>{
        if(res && res['status'] == 'success'){
          // console.log(list[el]['log_id'])
          this.logs[el] = res['body'][0];
          this.logs[el]['log_event'] = unescape(this.logs[el]['log_event']);
          this.logs[el]['line_number'] = unescape(this.logs[el]['line_number']);
          this.ready[list[el]['log_id']] = true;
          // if(this.cur_list[Number(el)] && Number(el) < 100){
          //   console.log(el)
          //   this.cur_list[el] = this.logs[el];
          // }
        }
      })
    }
    console.log(this.logs)
    console.log(this.cur_list)
  }

}
