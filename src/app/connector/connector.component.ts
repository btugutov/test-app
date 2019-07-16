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
  ids = [];
  pages = 0;
  current_page = 1;
  ready = {};
  log_storage = {};
  highlights = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        let obj = {
          'email': user.email
        }
        this._ConnectorService.getEventLog(obj).then(res => {
          this.pages = Math.ceil(res['body'].length/100)
          console.log(res)
          console.log(res['body'].length)
          console.log(this.pages)
          this.ids = res['body'];
          this.orginizeList()
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
  orginizeList(){
    this.logs = [];
    let start = (this.current_page - 1) * 100;
    let end = this.current_page * 100;
    console.log("start =>", start, "; end =>", end)
    let index = 0;
    this.ready = {};
    while(start< end){
      if(!this.ids[start]){
        start++;
        continue;
      }
      let cur_target = this.ids[start];
      this.logs.push({
        log_id: cur_target.log_id
      })
      if(!this.log_storage[cur_target.log_id]){
        this._ConnectorService.getEventLogByID(cur_target.log_id).then(res =>{
              if(res && res['status'] == 'success'){
                this.bindLogObject( cur_target.log_id, res['body'][0]);
                this.log_storage[cur_target.log_id] = res['body'][0];
                if(res['body'][0]['log_event'].slice(0,9)=="Submit ID"){
                  console.log("storing at highlights", res['body'][0]['log_event'].split(":")[0])
                  if(!this.highlights[cur_target.log_id]){
                    this.highlights[cur_target.log_id] = {};
                  }
                  if(!this.highlights[cur_target.log_id]['submit_id']){
                    this.highlights[cur_target.log_id]['submit_id'] = [];
                  }
                  this.highlights[cur_target.log_id]['submit_id'][0] =  res['body'][0]['log_event'].split(":")[0]
                  this.highlights[cur_target.log_id]['submit_id'][1] =  res['body'][0]['log_event'].split(":")[1]
                }
              }
        });
      }else{
        this.bindLogObject( cur_target.log_id, this.log_storage[cur_target.log_id]);
      }
      start++;
    }
    
  }
  changePage(val){
    console.log("val =>", val)
    this.current_page = val;
    this.orginizeList();
  }

  bindLogObject(log_id, obj){
    for(let el in this.logs){
      if(this.logs[el]['log_id'] == log_id){
        this.logs[el] = obj;
        this.logs[el]['log_event'] = unescape(this.logs[el]['log_event']);
        this.logs[el]['line_number'] = unescape(this.logs[el]['line_number']);
        this.ready[log_id] = true;
        break;
      }
    }
  }
  getCurrentList(){
    
  }
}
