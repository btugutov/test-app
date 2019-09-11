import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, arr_diff } from '../object_validation.js';

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
  currentEng;
  currentEng_id;
  sorted_users = null;
  categories = null;
  categories_unsorted = null;
  currentUser;
  current_list = {};
  current_list_target;
  current_list_key;
  users_changes_bool = false;
  users_changes = {};
  modal_mesage_bool = false;
  modal_message = {
    'title': '',
    'body': ''
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
        this.currentUser = user;
        let obj = {
          'email': user.email,
          'eng_id': this.currentEng_id
        }
        this._ConnectorService.getQuizPermissions(obj).then(res => {
          console.log("RES =>", res)
          this.sorted_users = {};
          this.all_users_original = cloneDeep(res['response']['users']);
          this.sorted_users['all_users'] = cloneDeep(res['response']['users']);
          this.sorted_users['by_teams'] = groupBy(this.sorted_users['all_users'], 'team')
          this.sorted_users['by_title'] = groupBy(this.sorted_users['all_users'], 'title')

          this.by_teams = Object.keys(this.sorted_users['by_teams']);
          this.by_title = Object.keys(this.sorted_users['by_title']);
          this.categories_unsorted = switchKey(res['response']['categories'], 'topic_id');
          this.categories = groupByKey(res['response']['categories'], 'category', 'topic_id');
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
    this._ConnectorService.currentEng.subscribe(currentEng => {
      if (currentEng) {
        this.currentEng = currentEng;
      }
    })



  }

  ngOnInit() {
  }

  // LISTENERS ===========================
  selectList(target, key) {
    this.current_list_target = target;
    if(target == 'all_users'){
      this.current_list = this.sorted_users[this.current_list_target];
    }else{
      this.current_list_key = key;
      this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
    }
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
    let user = this.sorted_users.all_users[user_id];
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
    }
  }
  checkTopicForUser(user_id, topic_id){
    if(!this.sorted_users.all_users[user_id].topic_id.includes(topic_id)){
      this.sorted_users.all_users[user_id].topic_id.push(topic_id);
    }
  }

  checkChanges(){
    this.list_changes = {};
    let change_list = {};
    let new_list = this.sorted_users.all_users;
    let orig_list = this.all_users_original;
    for(let user in new_list){
      if( JSON.stringify(new_list[user]['topic_id'].sort(function(a, b){return a - b})) != JSON.stringify(orig_list[user]['topic_id'].sort(function(a, b){return a - b}))){
        change_list[user] = {
          added: [],
          removed: []
        }
        let arr_new = new_list[user]['topic_id'].sort(function(a, b){return a - b});
        let arr_old = orig_list[user]['topic_id'].sort(function(a, b){return a - b});
        let idx1 = 0;
        let idx2 = 0;
        // console.log(`DIFFERENT! USER ${user}`, arr_new, arr_old)
        while(idx1 < arr_new.length && idx2 < arr_old.length){
          let el1 = arr_new[idx1];
          let el2 = arr_old[idx2];
          // console.log(`comparing: ${el1} wtih ${el2}`)
          
          if(el1<el2){
            change_list[user].added.push(el1)
            idx1++;
          }else if(el1>el2){
            change_list[user].removed.push(el2)
            idx2++;
          }else{
            idx1++;
            idx2++;
          }
        }
        if(idx1 < arr_new.length){
          while(idx1 < arr_new.length){
            change_list[user].added.push( arr_new[idx1]);
            idx1++;
          }
        }else if(idx2 < arr_old.length){
          while(idx2 < arr_old.length){
            change_list[user].removed.push( arr_old[idx2]);
            idx2++;
          }
        }
      }
    }
    // console.log("CHANGE LIST =>", change_list)
    if(Object.keys(change_list).length > 0){
      this.list_changes = change_list;
      this.openModal('changes_list', this.list_changes)
    }
  }
  undoChangeAll(){
    for(let user in this.list_changes){
      // console.log("======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-")
      // console.log("user =>", user)
      // console.log("let's remove added topics")
      for(let topic_id in this.list_changes[user]['added']){
        // console.log(`loop topic_id => ${topic_id} of ${this.list_changes[user]['added'].length}` )
        this.uncheckTopicForUser(user, this.list_changes[user]['added'][topic_id]);
      }
      // console.log("let's put back removed topics now")
      for(let topic_id in this.list_changes[user]['removed']){
        // console.log(`loop topic_id => ${topic_id} of ${this.list_changes[user]['removed'].length}`)
        this.checkTopicForUser(user, this.list_changes[user]['removed'][topic_id]);
      }
    }
    this.list_changes = {};
    this.closeModal()
  }
  undoChange(user_id, topic_id){
    // console.log("---------")
    // console.log(`undo topic id ${topic_id} for user ${user_id}`) 
    if(this.sorted_users.all_users[user_id].topic_id.includes(topic_id)){
      this.uncheckTopicForUser(user_id, topic_id);   
      let arr = this.list_changes[user_id]['added'];
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
      this.checkTopicForUser(user_id, topic_id);
      let arr = this.list_changes[user_id]['removed'];
      // console.log("REMOVING FROM THE REMOVED LIST")
      for(let i = 0; i < arr.length; i++){
        // console.log("cur element =>", arr[i], "; target topic_id =>", topic_id)
        if(arr[i] == topic_id){
          // console.log("FOUND!")
          for(let k = i; k < arr.length; k++){
            arr[k] = arr[k + 1];
          }
          arr.pop();
          break;
        }
      }
    }
    // console.log(`this.list_changes[user_id]['added'].length => ${this.list_changes[user_id]['added'].length}, this.list_changes[user_id]['removed'].length => ${this.list_changes[user_id]['removed'].length}`)
    if(this.list_changes[user_id]['added'].length == 0 && this.list_changes[user_id]['removed'].length == 0){
      delete this.list_changes[user_id];
      console.log(`this.list_changes length => ${Object.keys(this.list_changes).length}`)
      if(Object.keys(this.list_changes).length<1){
        this.closeModal();
      }
    }
  }


  submitChanges(){
    console.log("this.list_changes =>", this.list_changes)
    let users = {};
    for(let user_id in this.list_changes){
      users[user_id] = this.sorted_users['all_users'][user_id];
      users[user_id]['removed_list'] =  this.list_changes[user_id]['removed']
      users[user_id]['added_list'] =  this.list_changes[user_id]['added']
    }
    this.list_changes = {};
    console.log("USERS FOR SUBMIT! =>", users)
    this.closeModal();
    this._ConnectorService.saveQuizPermissions(users, this.currentUser.email).then(res =>{
      console.log("RES =>", res)
      // console.log("this.all_users =>",this.sorted_users.all_users)
      // console.log("this.all_users_original =>",this.all_users_original)
      this.all_users_original = cloneDeep(this.sorted_users.all_users);
      console.log(this)
      this.openModal('message', 'success')
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
    // console.log(`BEFORE CHANGE => ${this.list_control[topic_id] }; LIST_COPY => ${this.list_control_copy[topic_id]}`)
    if(action == 'all'){
      this.list_control[topic_id] = true; 
    }else{
      this.list_control[topic_id] = 0; 
    }
    // console.log(`AFTER CHANGE => ${this.list_control[topic_id] } ; LIST_COPY => ${this.list_control_copy[topic_id]}`)
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
            if(typeof(row_values[value]) == "object" && row_values[value]['innerHTML'].toLowerCase().includes(key.toLowerCase())){
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

}
