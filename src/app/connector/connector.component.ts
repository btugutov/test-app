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
  [x: string]: any;
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
    DEBUG: { length: 0, list: [], percentage: 0 },
    ERROR: { length: 0, list: [], percentage: 0 },
    INFO: { length: 0, list: [], percentage: 0 },
    TESTING: { length: 0, list: [], percentage: 0 },
    WARNING: { length: 0, list: [], percentage: 0 },
    ALL: { length: 0, list: [], percentage: 0 }
  }
  current_level = 'ALL';
  levels_counter_class_idx = 0;
  modal_mesage_bool = false;
  modal_message = {
    'title': '',
    'body': ''
  }
  temp_obj = 0;
  new_logs = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        let obj = {
          'email': user.email
        }
        this._ConnectorService.getEventLog(obj).then(res => {
          this.ids = res['body'];
          this.first_request_status = true;
          this.levels_counter.ALL.list = res['body'];
          this.levels_counter.ALL.length = res['body'].length;
          this.pages = Math.ceil(res['body'].length / 100);
          this.filterList('ALL');
          this.getLevelData();
          // this.renderCurrentList()
        }).catch(function (err) {
          console.log("ERROR =>", err)
        })
      }
      if (user && !user.admin) {
        this._r.navigate([`/oops`]);
      }
    })
    setInterval(() => {
      console.log("REFRESHING!!!!")
      this.getNewLogs();
    }, 60000
    );
  }

  ngOnInit() {
  }
  filterList(target) {
    if(target == 'ALL'){
      console.log(target)
    }else{
      console.log(this.levels_counter[target])
    }
    let target_list = this.levels_counter[target];
    this.current_level = target;
    this.current_page = 1;
    this.pages = Math.ceil(target_list.length / 100);
    this.renderCurrentList();
  }
  renderCurrentList() {
    console.log("New logs =>", this.new_logs)
    let target_list = this.levels_counter[this.current_level]['list'];
    this.logs = [];
    let start = (this.current_page - 1) * 100;
    let end = this.current_page * 100;
    this.cur_num = 0;
    this.end_num = 100;
    this.ready = {};
    let counter = 0;
    while (start < end) {
      if (!target_list[start]) {
        start++;
        continue;
      }
      let cur_target = target_list[start];
      this.logs.push({
        log_id: cur_target.log_id,
        log_level: cur_target.log_level
      })
      if (!this.log_storage[cur_target.log_id]) {
        this._ConnectorService.getEventLogByID(cur_target.log_id).then(res => {
          if (res && res['status'] == 'success') {
            if (this.cur_num < this.end_num) {
              this.cur_num++;
            }
            this.bindLogObject(cur_target.log_id, res['body'][0]);
            this.log_storage[cur_target.log_id] = res['body'][0];
            if (res['body'][0]['log_event'].slice(0, 9) == "Submit ID") {
              // console.log("storing at highlights", res['body'][0]['log_event'].split(":")[0])
              if (!this.highlights[cur_target.log_id]) {
                this.highlights[cur_target.log_id] = {};
              }
              if (!this.highlights[cur_target.log_id]['submit_id']) {
                this.highlights[cur_target.log_id]['submit_id'] = [];
              }
              this.highlights[cur_target.log_id]['submit_id'][0] = res['body'][0]['log_event'].split(":")[0]
              this.highlights[cur_target.log_id]['submit_id'][1] = res['body'][0]['log_event'].split(":")[1]
            }
          }
        });
      } else {
        this.bindLogObject(cur_target.log_id, this.log_storage[cur_target.log_id]);
        if (this.cur_num < this.end_num) {
          this.cur_num++;
        }
      }
      start++;
      counter++;
    }
    this.end_num = counter;
    // console.log("this.ready =>" ,this.ready)
  }
  getNewLogs() {
    let last_id;

    if (this.levels_counter['ALL']['list'][0] ) {
      last_id = this.levels_counter['ALL']['list'][0];
    }else{
      return;
    }
    // last_id.log_id = 346862; // comment this out after testing!
    let obj = {
      email: this.currentUser.email,
      last_id: last_id.log_id
    }
    this._ConnectorService.getNewLogs(obj).then(res => {
      console.log(res)
      if (res && res['status'] == 'success' && res['body'].length > 0) {
        let new_logs = res['body'];
        for (let i = 0; i < new_logs.length; i++) {
          new_logs[i]['log_event'] = this.removeNewLines(unescape(new_logs[i]['log_event']))
          new_logs[i]['line_number'] = unescape(new_logs[i]['line_number']);
          new_logs[i]['details'] = unescape(new_logs[i]['details']);
          this.new_logs[new_logs[i]['log_id']] = true;
          this.ready[new_logs[i]['log_id']] = true;
          this.log_storage[new_logs[i]['log_id']] = new_logs[i]
        }
        this.levels_counter.ALL.list = new_logs.concat(this.levels_counter.ALL.list);
        // this.ids = res['body'].concat(this.ids)
        this.getLevelData();
        console.log('this.logs =>', this.logs)
        console.log("this.log_storage =>", this.log_storage)
        this.renderCurrentList();
      }
    })
    console.log("this.new_logs =>",this.new_logs)
    return;
  }
  changePage(val) {
    console.log("val =>", val)
    this.current_page = val;
    this.renderCurrentList();
  }

  bindLogObject(log_id, obj) {
    for (let el in this.logs) {
      if (this.logs[el]['log_id'] == log_id) {
        this.logs[el] = obj;
        this.logs[el]['log_event'] = this.removeNewLines(unescape(this.logs[el]['log_event']))
        this.logs[el]['line_number'] = unescape(this.logs[el]['line_number']);
        this.logs[el]['details'] = unescape(this.logs[el]['details']);
        this.ready[log_id] = true;
        break;
      }
    }
  }
  getLevelData() {
    let ids = this.levels_counter.ALL.list;
    let all_copy = cloneDeep(this.levels_counter["ALL"])
    this.levels_counter = {
      DEBUG: { length: 0, list: [], percentage: 0 },
      ERROR: { length: 0, list: [], percentage: 0 },
      INFO: { length: 0, list: [], percentage: 0 },
      TESTING: { length: 0, list: [], percentage: 0 },
      WARNING: { length: 0, list: [], percentage: 0 },
      ALL: all_copy
    };
    for (let el in ids) {
      if (!this.levels_counter[ids[el]['log_level']]) {
        this.levels_counter[ids[el]['log_level']] = {
          length: 0,
          list: [],
          percentage: (this.levels_counter[ids[el]['log_level']].length / ids.length) * 100
        }
      }
      let that = this;
      this.levels_counter[ids[el]['log_level']].length++;
      this.levels_counter[ids[el]['log_level']].percentage = Math.round((this.levels_counter[ids[el]['log_level']].length / ids.length) * 100);
      this.levels_counter[ids[el]['log_level']].list.push(ids[el]);
    }
    console.log(this.levels_counter)
  }
  level_counter_get_class() {
    let res = '';

    this.levels_counter_class_idx++;
    return res;
  }
  openModal(action, target_id) {
    this.modal_mesage_bool = true;
    this.modal_message.title = action;
    this.modal_message.body = target_id;
  }
  closeModal() {
    this.modal_mesage_bool = false;
  }

  removeNewLines(str) {
    return str.split("\\n").join("")
  }

  
}
