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
      let cur_target = this.ids[start];
      this.logs.push({
        log_id: cur_target.log_id
      })
      this._ConnectorService.getEventLogByID(cur_target.log_id).then(res =>{
            console.log("res =>",res)
            if(res && res['status'] == 'success'){
              this.bindLogObject( cur_target.log_id, res['body'][0]);
            }
      });
      start++;
    }
    // for(let el in this.ids){
    //   this.curIndex++;
    //   this.logs[el] = {};
    //   this.cur_list[el] = {};
    //   this.logs[el].log_id = this.ids[el]['log_id'];
    //   if(this.curIndex<100){
    //     this.cur_list[el].log_id = this.ids[el]['log_id'];
    //   }
    //   this._ConnectorService.getEventLogByID(this.ids[el]['log_id']).then(res =>{
    //     if(res && res['status'] == 'success'){
    //       this.ready = {};
    //       // console.log(list[el]['log_id'])
    //       this.logs[el] = res['body'][0];
    //       this.logs[el]['log_event'] = unescape(this.logs[el]['log_event']);
    //       this.logs[el]['line_number'] = unescape(this.logs[el]['line_number']);
    //       this.ready[this.ids[el]['log_id']] = true;
    //       // if(this.cur_list[Number(el)] && Number(el) < 100){
    //       //   console.log(el)
    //       //   this.cur_list[el] = this.logs[el];
    //       // }
    //     }
    //   })
    // }
    console.log(this.logs)
    console.log(this.cur_list)
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
