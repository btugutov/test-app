import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import {Observable} from 'rxjs/Rx';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, arr_diff } from '../object_validation.js';

@Component({
  selector: 'app-admin-editengagements',
  templateUrl: './admin-editengagements.component.html',
  styleUrls: ['./admin-editengagements.component.css']
})

export class AdminEditengagementsComponent implements OnInit {
  currentEng_id;
  engagements;
  engagements_original;
  list_changes = {};
  currentUser;
  errors_length = 0;
  modal_mesage_bool = false;
  last_added = null;
  last_removed = null;
  modal_message = {
    'title': '',
    'body': '',
    'counter_start': 0,
    'counter_end': 0,
  };
  new_eng_form = {
    'background': null,
    'categories': {},
    'categories_length': 0,
    'engagement_name': '',
    'soft_delete': false,
    'topics_total_length': 0,
    'users_total_length': 0,
    'users_list': {},
    'status': 'new',
    'engagement_id': null
  }

  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) { 
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
    });
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        if(user.admin_owner || user.admin_permissions){
          // console.log("we are fine here!")
        }else{
          this.goBack();
        }
        this.currentUser = user;
        let obj = {
          'email': user.email,
          'eng_id': this.currentEng_id
        }
        this._ConnectorService.getAllEngagements(obj).then(res => {
          // console.log("RES =>", res);
          this.engagements = this.engagementFormat(cloneDeep(res['body']));
          this.engagements_original = this.engagementFormat(cloneDeep(res['body']))
          this.engagements['new'] = cloneDeep(this.new_eng_form);
          this.engagements_original['new'] = cloneDeep(this.new_eng_form);
          // console.log(this.engagements)
          
        }).catch(function (err) {
          // console.log("ERROR =>", err)
        })
      }
      if (user && !user.admin) {
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
    })
  }

  ngOnInit() {
  }
  

  // MODAL FUNCTIONS =====================
  openModal(target, message){
    this.modal_mesage_bool = true;
    this.modal_message.title = target;
    if(target == 'list_changes'){
      
    }else if(target == 'counter'){
      this.modal_message.counter_end = message;
    }else{
      this.modal_message.body = message;
      // console.log(this.modal_message)
    }
  }
  closeModal(){
      this.modal_mesage_bool = false;
      // this.list_control_changed_bool = false;
  }


  // LISTENERSFUNCTOINS =============
  actionButton(eng_id, key){
    // console.log(key == 'soft_delete', !this.engagements[eng_id][key])
    if(key == 'soft_delete' && !this.engagements[eng_id][key]){
      this.errorHandlerRemover(eng_id)
    }else if(key == 'soft_delete' && this.engagements[eng_id][key]){
      if(this.engagements[eng_id]['engagement_name'].length == 0){
        this.errorHandler(eng_id, 'engagement_name', 'Please enter a title')
      }else if(this.engagements[eng_id]['engagement_name'].length == 1){
        this.errorHandler(eng_id, 'engagement_name', 'Title is too short')
      }
    }
    this.engagements[eng_id][key] = !this.engagements[eng_id][key];
  }

  inputChanger(eng_id, key, input){
    let error_bool = false;
    if(input.value.length == 0){
      error_bool = true;
      this.errorHandler(eng_id, 'engagement_name', 'Please enter a title')
    }else if(input.value.length == 1){
      error_bool = true;
      this.errorHandler(eng_id, 'engagement_name', 'Title is too short')
    }else if(input.value.length > 1){
      for(let el in this.engagements){
        if(this.engagements[el]['engagement_name'] == input.value){
          error_bool = true;
          this.errorHandler(eng_id, 'engagement_name', 'Such title is already in use.')
          break;
        }
      }
    }
    if(!error_bool){
      this.errorHandlerRemover(eng_id)
    }
    this.engagements[eng_id][key] = input.value;
    // console.log(this.engagements[eng_id][key])
  }

  checkChanges(){
    this.list_changes = {};
    let cur_list = this.engagements;
    let old_list = this.engagements_original;
    for(let el in cur_list){
      if(el == 'new'){
        continue;
      }
      if(old_list[el]){
        if(cur_list[el]['background'] != old_list[el]['background']){
          this.list_changes[el] = cur_list[el];
          continue
        }
        // console.log(cur_list[el]['engagement_name'], old_list[el]['engagement_name'])
        if(cur_list[el]['engagement_name'] != old_list[el]['engagement_name']){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(cur_list[el]['soft_delete'] != old_list[el]['soft_delete']){
          this.list_changes[el] = cur_list[el];
          continue
        }
      }else{
        this.list_changes[el] = cur_list[el]
      }
    }
    if(Object.keys(this.list_changes).length > 0){
      this.openModal('list_changes', null);
    }
    // console.log(this.list_changes)
  }

  undoChanges(id, key) {
    if (key == 'remove') {
      if(this.engagements[id]['status'] == "new"){
        delete this.engagements[id];
      }else{
        this.engagements[id] = cloneDeep(this.engagements_original[id])
      }
      delete this.list_changes[id];
    } else {
      this.engagements[id][key] = cloneDeep(this.engagements_original[id][key])
      let diff_finder_bool = false;
      if (this.engagements_original[id]['background'] != this.engagements_original[id]['background']) {
        diff_finder_bool = true;
      } else if (this.engagements_original[id]['engagement_name'] != this.engagements_original[id]['engagement_name']) {
        diff_finder_bool = true;
      } else if (this.engagements_original[id]['soft_delete'] != this.engagements_original[id]['soft_delete']) {
        diff_finder_bool = true;
      }
      if (!diff_finder_bool) {
        // console.log("removing from the change list")
        delete this.list_changes[id];
      }
    }
    if (Object.keys(this.list_changes).length < 1) {
      this.closeModal();
    }
  }
  undoChangesAll(){
    for(let el in this.list_changes){
      this.undoChanges(el, 'remove')
    }
  }
  addBackground(eng_id, value){
    this._ConnectorService.imgToBase64(value).then(data => {
      // console.log("ADDING IMAGE FOR =>", eng_id)
      this.engagements[eng_id]['background'] = String(data);
    }).catch(function (err) {
      // console.log("ERROR =>", err)
      // this.errorHandler(q_id, "image_uploader", JSON.stringify(err))
    })
  }
  removeImg(eng_id){
    this.engagements[eng_id]['background'] = '';
  }

  addEng(){
    if(this.engagements['new'].engagement_name.length == 0){
      this.errorHandler('new', 'engagement_name', 'Please enter a title')
      return;
    }
    if(this.engagements['new'].engagement_name.length == 1){
      this.errorHandler('new', 'engagement_name', 'Title is too short')
      return;
    }
    let id = 'added1';
    for(let el in this.engagements){
      // console.log("EL =>", el, el.slice(0,5))
      if(el.slice(0,5) == 'added'){
        // console.log("awesome!")
        id = 'added' + (Number(el.slice(5)) + 1);
        // console.log("SETTING THIS ID =>", id)
      }
    }
    this.errorHandlerRemover('new')
    // console.log("new id! =>", id)
    this.last_added = id;
    if(this.engagements[id]){
      // console.log("FAILED!");
      return;
    }

    this.engagements[id] = cloneDeep(this.engagements['new']);
    this.engagements[id]['engagement_id'] = id;
    this.engagements['new'] = cloneDeep(this.new_eng_form);
  }
  deleteEng(eng_id){
    // this.last_removed = eng_id
    delete this.engagements[eng_id];
    this.errorHandlerRemover(eng_id);
    this.last_added = null;
  }

  submitChanges(){
    let obj = {
      'engs': this.list_changes,
      'email': this.currentUser.email,
    }
    this._ConnectorService.saveEngagements(obj).then(res => {
      // console.log('RESULT =>', res)
      this.engagements_original = cloneDeep(this.engagements);
      this.closeModal();
      this.list_changes = {};
        this.openModal('message', 'success')
    })
  }

  // MISC FUNCTIONS ======================
  checkState() {
    this.engagements['new'] = this.new_eng_form;
    // console.log(this)

  }

  sortType(key){
    // console.log(key)
  }
  
  goBack(){
    this.location.back();
  }

  differencesFinder() {

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
      // console.log("done!")
      return;
    }
  }

  getClassForUserStatus(){
  }

  engagementFormat(list){
    let res = {};
    let users = {};
    for(let el in list){
      let eng_id = list[el]['engagement_id'];
      let category = unescape(list[el]['category']);
      let topic_id = list[el]['topic_id'];

      // console.log("==========START==========")
      // console.log(`topic_id => ${topic_id}; category => ${category}; eng_id => ${eng_id}; `)
      if(!res[eng_id]){
        // console.log('new engagement!')
        res[eng_id] = {};
        res[eng_id]['soft_delete'] =  list[el]['soft_delete'];
        res[eng_id]['engagement_name'] =  unescape(list[el]['engagement_name']);
        res[eng_id]['categories'] = {};
        res[eng_id]['categories_length'] = 0;
        res[eng_id]['topics_total_length'] = 0;
        res[eng_id]['users_total_length'] = 0;
        res[eng_id]['users_list'] = {};
        res[eng_id]['background'] = unescape(list[el]['background']);
        res[eng_id]['status'] = 'existed';
        res[eng_id]['engagement_id'] = eng_id;
      }
      if(!list[el]['topic_id']){
        continue;
      }
      if(!res[eng_id]['categories'][category]){
        res[eng_id]['categories'][category] = {};
        res[eng_id]['categories'][category]['topics'] = {};
        res[eng_id]['categories'][category]['topic_length'] = 0;
        res[eng_id]['categories_length']++;
      }
      if(!res[eng_id]['categories'][category]['topics'][topic_id] ){
        res[eng_id]['categories'][category]['topics'][topic_id] = list[el];
        res[eng_id]['categories'][category]['topics'][topic_id]['topic'] = unescape(list[el]['topic']);
        res[eng_id]['categories'][category]['topics'][topic_id]['link'] = `/${eng_id}/AdminEditquiz/${list[el]['topic_id']}`;
        res[eng_id]['categories'][category]['topic_length']++;
        res[eng_id]['topics_total_length']++;
        res[eng_id]['categories'][category]['topics'][topic_id]['users_length'] = 0;
        res[eng_id]['categories'][category]['topics'][topic_id]['users'] = {};
      }
      if(!list[el]['profile_id']){
        continue;
      }
      res[eng_id]['categories'][category]['topics'][topic_id]['users_length']++;
      res[eng_id]['categories'][category]['topics'][topic_id]['users'][ list[el]['email']] = `${list[el]['first_name']} ${list[el]['last_name']}`
      
      if(!users[eng_id]){
        users[eng_id] = {};
      }
      if(!users[eng_id][list[el]['email']]){
        users[eng_id][list[el]['email']] = true;
        res[eng_id]['users_total_length']++;
        res[eng_id]['users_list'][list[el]['email']] = true
      }
      // console.log("==========END==========")
    }
    return res;
  }

  errorHandler(id, source, message) {
    // console.log(`WE GOT ERROR HERE! ID => ${id}, source => ${source}, message => ${message}`);
    if (!this.engagements[id + "_error"]) {
      this.errors_length++;
      this.engagements[id + "_error"] = {
        'error_bool': true,
        'errors': {
        },
        'target': id
      }
      if (id == 'new') {
        this.engagements[id + "_error"]['target'] = "New question form";
      }
      // this.clearErrorMessageTimer(id, 5000)
    }
    this.last_added = id + "_error";
    this.engagements[id + "_error"]['errors'][source] = message;
  }
  errorHandlerRemover(id) {
    this.last_added = null;
    try {
      if(this.engagements[id + '_error']){
        this.errors_length--;
        delete this.engagements[id + '_error'];
      }
    }
    catch (error) {
      // console.log(error)
    }
    return true
  }
  errorRemoveById(id) {
    this.last_added = null;
    try {
      if(this.engagements[id]){
        delete this.engagements[id];
        this.errors_length--;
      }
    }
    catch (error) {
      // console.log(error)
    }
    return true
  }
}
