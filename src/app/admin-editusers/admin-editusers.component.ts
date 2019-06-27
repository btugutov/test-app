import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import {Observable} from 'rxjs/Rx';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, arr_diff } from '../object_validation.js';

@Component({
  selector: 'app-admin-editusers',
  templateUrl: './admin-editusers.component.html',
  styleUrls: ['./admin-editusers.component.css']
})
export class AdminEditusersComponent implements OnInit {
  all_users_original = null;
  all_users = null;
  by_teams;
  by_title;
  currentEng_id;
  sorted_users = null;
  categories = null;
  topics_unsorted = null;
  currentUser;
  current_list:  {};
  current_list_target;
  current_list_key;
  current_list_properties = {
    'length': 0,
    'retake_topic': 0,
    'retake_topic_total_length': 0,
    'regrade_submission': 0,
    'regrade_submission_total_length': 0,
    'invalidate_submission': 0,
    'invalidate_submission_total_length': 0
  }
  default_list_properties = {
    'retake_topic_total_length': 0,
    'regrade_submission_total_length': 0,
    'invalidate_submission_total_length': 0
  }
  users_changes_bool = false;
  users_changes = {};
  modal_mesage_bool = false;
  modal_message = {
    'title': '',
    'body': '',
    'counter_start': 0,
    'counter_end': 0,
  };



  list_control = {};
  list_control_copy = {};
  list_control_changed_bool = false; 

  list_changes = {};
  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) { 
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        if(user.admin_owner || user.admin_permissions){
          console.log("we are fine here!")
        }else{
          this.goBack();
        }
        this.currentUser = user;
        let obj = {
          'email': user.email,
          'eng_id': this.currentEng_id
        }
        this._ConnectorService.getUserPermissions(obj).then(res => {
          console.log("RES =>", res)
          this.sorted_users = {};
          this.all_users_original = cloneDeep(res['response']['users']);
          this.sorted_users['all_users'] = cloneDeep(res['response']['users']);
          this.sorted_users['by_teams'] = groupBy(this.sorted_users['all_users'], 'team')
          this.sorted_users['by_title'] = groupBy(this.sorted_users['all_users'], 'title')
          this.topics_unsorted = res['response']['topics']
          this.by_teams = Object.keys(this.sorted_users['by_teams']);
          this.by_title = Object.keys(this.sorted_users['by_title']);

          this.current_list_target = "by_teams";
          this.current_list_key = Object.keys(this.sorted_users[this.current_list_target])[0];
          this.current_list = this.sorted_users[this.current_list_target][this.current_list_key]
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
  selectList(target, key) {
    this.current_list_target = target;
    if(target == 'all_users'){
      this.current_list = this.sorted_users[this.current_list_target];
    }else if(key == 'admin'){
      this.current_list = {};
      for(let user in this.all_users_original){
        if(this.all_users_original[user][target]){
          this.current_list[user] = this.sorted_users.all_users[user]
        }
      }
    }else{
      this.current_list_key = key;
      this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
    }
    // this.current_list_properties_setter(this.current_list)
  }
  checkTopic(user_id, topic_id){
    let user = this.sorted_users.all_users[user_id]
    if(user.topic_id.includes(topic_id)){
      // remove topic_id from user's list of allowed topics
      let arr = user.topic_id;
      for(let i = 0; i < arr.length; i++){
        if(arr[i] == topic_id){
          for(let k = i; k < arr.length; k++){
            arr[k] = arr[k + 1];
          }
          arr.pop();
          break;
        }
      }

    }else{
      user.topic_id.push(topic_id)
    }
  }
  uncheckTopicForUser(user_id, topic_id){
    
  }
  actionButton(user_id, target, value){
    if(target == "admin_owner" && !this.currentUser.admin_owner){
      return;
    }
    if(value === true){
      this.sorted_users.all_users[user_id][target] = true;
    }else if(value === false){
      this.sorted_users.all_users[user_id][target] = false;
    }else{
      this.sorted_users.all_users[user_id][target] = !this.sorted_users.all_users[user_id][target];
    }
    if(this.sorted_users.all_users[user_id][target]){
      this.current_list_properties[target]++;
    }else{
      this.current_list_properties[target]--;
    }
  }

  checkTopicForUser(user_id, topic_id){
    if(!this.sorted_users.all_users[user_id].topic_id.includes(topic_id)){
      this.sorted_users.all_users[user_id].topic_id.push(topic_id);
    }
  }

  checkChanges(){
    this.differencesFinder();
    console.log("CHANGE LIST =>", this.list_changes)
    if(Object.keys(this.list_changes).length > 0){
      this.openModal('changes_list', null)
    }
  }
  undoChangeAll(){
    for(let user in this.list_changes){
      console.log("user =>", user)
      this.sorted_users.all_users[user]['admin_grader'] = cloneDeep(this.all_users_original[user]['admin_grader']);
      this.sorted_users.all_users[user]['admin_editor'] = cloneDeep(this.all_users_original[user]['admin_editor']);
      this.sorted_users.all_users[user]['admin_permissions'] = cloneDeep(this.all_users_original[user]['admin_permissions']);
      this.sorted_users.all_users[user]['admin_owner'] = cloneDeep(this.all_users_original[user]['admin_owner']);
    }
    this.list_changes = {};
    // this.current_list_properties_setter(this.current_list);
    this.closeModal()
  }
  undoChange(user_id, topic_id){
    this.actionButton(user_id, topic_id, null);
    this.differencesFinder();
    if(Object.keys(this.list_changes).length < 1){
      this.closeModal();
    }
  }
  listChanger(key){
    let value = true;
    if(this.current_list_properties[`${key}`] >= this.current_list_properties[`${key}_total_length`]){
      value = false;
    }
    for(let el in this.current_list){
      this.actionButton(el, key, value)
    }
    // this.current_list_properties_setter(this.current_list)
  }

  submitChanges(){
    console.log("this.list_changes =>", this.list_changes)
    let users = {};
    for(let user_id in this.list_changes){
      users[user_id] = this.sorted_users['all_users'][user_id];
      users[user_id]['removed_list'] =  this.list_changes[user_id]['removed']
      users[user_id]['added_list'] =  this.list_changes[user_id]['added']
    }
    
    console.log("USERS FOR SUBMIT! =>", users)
    this.closeModal();
    let obj = {
      'users': users,
      'email': this.currentUser.email,
      'eng_id': this.currentEng_id
    }
    // this.loadingMessage(Object.keys(users).length)
    this._ConnectorService.saveUserPermissions(obj).then(res =>{
      this.all_users_original = cloneDeep(this.sorted_users.all_users)
      this.closeModal();
      console.log(new Date())
      console.log("RES =>", res)
      if(res['status'] == 'success'){
        // if(res['response']['users']){
        //   for(let el in this.list_changes){
        //     console.log(res['response']['users'][el])
        //     this.sorted_users.all_users[el] = cloneDeep(res['response']['users'][el]);
        //     this.all_users_original[el] = cloneDeep(res['response']['users'][el])
        //   }
        // }
        this.list_changes = {};
        this.openModal('message', 'success')
      }else{
        this.openModal('message', 'fail')
      }
    }).catch(function(err){
      console.log(err)
      this.openModal('message', 'fail')
    })
  }

  // MODAL FUNCTIONS =====================
  openModal(target, message){
    this.modal_mesage_bool = true;
    this.modal_message.title = target;
    if(target == 'list_control'){
      if(this.current_list_target == "by_teams"){
        this.modal_message.body = message + ` team ${this.current_list_key}`;
      }else if(this.current_list_target == "by_title"){
        this.modal_message.body = message + ` title ${this.current_list_key}`;
      }else{
        this.modal_message.body = message + ` everyone`;
      }
      this.generateListControl();
      console.log(this.list_control)
    }else if(target == 'counter'){
      this.modal_message.counter_end = message;
    }else{
      this.modal_message.body = message;
      console.log(this.modal_message)
    }
  }
  closeModal(){
      this.modal_mesage_bool = false;
      this.list_control_changed_bool = false;
  }


  // LIST CONTROL FUNCTOINS =============
  generateListControl(){
    this.list_control_changed_bool = false;
    let list = {};
    for(let user in this.current_list){
      let cur_user = this.current_list[user];
      // console.log("let's check this user =>", cur_user)
      for(let topic in cur_user['topic_id']){
        if(!list[cur_user['topic_id'][topic]]){
          list[cur_user['topic_id'][topic]] = 1;
        }else{
          list[cur_user['topic_id'][topic]]++;
        }
        // console.log('topic =>', topic)
        if(list[cur_user['topic_id'][topic]] == Object.keys(this.current_list).length){
          // console.log("all cur_users have ", cur_user['topic_id'][topic], " => ", list[cur_user['topic_id'][topic]], list[cur_user['topic_id'][topic]])
          list[cur_user['topic_id'][topic]] = true
        }
      }
    }
    this.list_control = cloneDeep(list);
    this.list_control_copy = cloneDeep(list);
  }
  listControlChanger(topic_id, action){
    console.log(`BEFORE CHANGE => ${this.list_control[topic_id] }; LIST_COPY => ${this.list_control_copy[topic_id]}`)
    if(action == 'all'){
      this.list_control[topic_id] = true; 
    }else{
      this.list_control[topic_id] = 0; 
    }
    console.log(`AFTER CHANGE => ${this.list_control[topic_id] } ; LIST_COPY => ${this.list_control_copy[topic_id]}`)
    let changes_bool = false;
    for(let el in this.list_control){
      // console.log("this.list_control[el] != this.list_control_copy[el]", JSON.stringify(this.list_control[el]), JSON.stringify(this.list_control_copy[el]), JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el]))
      if(JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el])){
        if(!this.list_control_copy[el] && this.list_control[el] == 0){
          continue;
        }
        console.log("found a difference!")
        changes_bool = true;
        break;
      }
    }
    if(changes_bool){
      this.list_control_changed_bool = true;
    }else{
      this.list_control_changed_bool = false;
    }
  }
  listControlCancel(){
    this.list_control = {};
    for(let user in this.current_list){
      for(let topic in this.current_list[user]['topic_id']){
        if(!this.list_control[this.current_list[user]['topic_id'][topic]]){
          this.list_control[this.current_list[user]['topic_id'][topic]] = 1;
        }else{
          this.list_control[this.current_list[user]['topic_id'][topic]]++;
        }
        if(this.list_control[this.current_list[user]['topic_id'][topic]] == Object.keys(this.current_list).length){
          this.list_control[this.current_list[user]['topic_id'][topic]] = true
        }
      }
    }
  }
  listControlSubmit(){
    console.log(this.list_control);
    let topic_list = this.list_control;
    let topic_list_original = this.list_control_copy;
    let cur_users = this.current_list;
    for(let el in topic_list){
      if(JSON.stringify(topic_list_original[el]) !== JSON.stringify(topic_list[el])){
        if(topic_list[el] === true){
          for(let user in cur_users){
            this.checkTopicForUser(cur_users[user]['profile_id'], Number(el));
          }
        }else if(topic_list[el] == 0){
          for(let user in cur_users){
            this.uncheckTopicForUser(cur_users[user]['profile_id'], Number(el));
          }
        }
      }
    }
    this.closeModal();
  }


  // MISC FUNCTIONS ======================
  checkState() {
    console.log(this)
  }

  sortType(key){
    console.log(key)
  }
  searchKey(){
    let key = document.getElementById('searchInput')['value'];
    if(key.length< 0){
      return;
    }
    if(this.current_list_target == 'all_users'){
      this.current_list = this.sorted_users[this.current_list_target];
    }else{
      this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
    }

    let activeList = [];
    let table_body_target = document.getElementById('table_body_target').querySelectorAll('tr')
    console.log("table_body_target => ", table_body_target)
    for(let el in table_body_target){
      if(table_body_target[el]){
        if(typeof(table_body_target[el]) == "object"){
          let row_values = table_body_target[el].getElementsByClassName('tr_string')
          let bool = false;
          for(let value in row_values){
            if(typeof(row_values[value]) == "object" && row_values[value]['innerHTML'].toLowerCase().includes(key)){
              bool = true;
              table_body_target[el].classList.remove('hidden')
              break;
            }
          }
          if(!bool){
            table_body_target[el].classList.add('hidden')
          }
        }
      }
    }
  }
  goBack(){
    this.location.back();
  }

  differencesFinder() {
    let res = {};
    for (let u in this.sorted_users.all_users) {
      if ((this.sorted_users.all_users[u]['admin_grader'] !== this.all_users_original[u]['admin_grader']) || this.sorted_users.all_users[u]['admin_editor'] !== this.all_users_original[u]['admin_editor'] || this.sorted_users.all_users[u]['admin_permissions'] !== this.all_users_original[u]['admin_permissions'] || this.sorted_users.all_users[u]['admin_owner'] !== this.all_users_original[u]['admin_owner']) {
        res[u] = this.sorted_users.all_users[u];
      } 
    }
    this.list_changes = res;
  }

  current_list_properties_setter(list){
    this.current_list_properties = {
      'length': 0,
      'retake_topic': 0,
      'retake_topic_total_length': 0,
      'regrade_submission': 0,
      'regrade_submission_total_length': 0,
      'invalidate_submission': 0,
      'invalidate_submission_total_length': 0
    }
    for(let el in list){
      // console.log(el, list[el]['retake_topic'] )
      if(list[el]['invalidate_submission']){
        this.current_list_properties.invalidate_submission++;
      }

      if(list[el]['regrade_submission'] && !this.all_users_original[el]['regrade_submission']){
        this.current_list_properties.regrade_submission++;
      }
      if(!this.all_users_original[el]['regrade_submission']){
        this.current_list_properties.regrade_submission_total_length++;
      }

      if(list[el]['retake_topic'] && !this.all_users_original[el]['retake_topic']){
        this.current_list_properties.retake_topic++;
      }
      if(!this.all_users_original[el]['retake_topic']){
        this.current_list_properties.retake_topic_total_length++;
      }
    }
    this.current_list_properties.length = Object.keys(list).length;
    this.current_list_properties.invalidate_submission_total_length = Object.keys(list).length;
    console.log("NEW current_list_properties =>", this.current_list_properties)
  }

  loadingMessage(count){
    this.openModal('counter', count);
    this.loadingMessageLoop(0,count)
  }
  loadingMessageLoop(start, end){
    if(start < end){
      this.modal_message.counter_start = start;
      let new_start = start + 1;
      let that = this;
      setTimeout(function () {
       return that.loadingMessageLoop(new_start, end)
     }, 100);
      
    } else{
      console.log("done!")
      return;
    }
  }

  getClassForUserStatus(user_id){
    if(this.current_list[user_id]['admin_owner']){
      return 'alert-warning'
    }else if(this.current_list[user_id]['admin_permissions']){
      return "alert-secondary"
    }else if(this.current_list[user_id]['admin_editor']){
      return "alert-info"
    }else if(this.current_list[user_id]['admin_grader']){
      return "alert-success"
    }
  }
}
