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
  first_request_status = false;
  cur_num = 0;
  end_num = 0;
  levels_counter = {
    DEBUG: {length: 0, list: {}},
    ERROR: {length: 0, list: {}},
    INFO: {length: 0, list: {}},
    TESTING: {length: 0, list: {}},
    WARNING: {length: 0, list: {}},
  }
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        let obj = {
          'email': user.email
        }
        this._ConnectorService.getEventLog(obj).then(res => {
          this.first_request_status = true;
          this.pages = Math.ceil(res['body'].length/100)
          console.log(res)
          console.log(res['body'].length)
          console.log(this.pages)
          this.ids = res['body'];
          this.getLevelData();
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
    this.cur_num = 0;
    this.end_num = 100;
    this.ready = {};
    let counter = 0;
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
            if(this.cur_num<this.end_num){
              this.cur_num++;
            }
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
        if(this.cur_num<this.end_num){
          this.cur_num++;
        }
      }
      start++;
      counter++;
    }
    this.end_num = counter;
    
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
  getLevelData(){
    /*
'INFO': {
      length: 0,
      list: {}
    },
    */
    for(let el in this.ids ){
      if( !this.levels_counter[this.ids[el]['log_level']]){
        this.levels_counter[this.ids[el]['log_level']] = {
          length: 0,
          list:{}
        }
      }
      let that = this;
      this.levels_counter[this.ids[el]['log_level']].length++;
      this.levels_counter[this.ids[el]['log_level']].list[this.ids[el]['log_id']] = this.ids[el]['log_id'];
    }
    console.log(this.levels_counter)
  }
}
