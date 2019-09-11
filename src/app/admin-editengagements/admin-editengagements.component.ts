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
  currentEng;
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
    'company_address': '',
    'company_name': '',
    'company_phone_number': '',
    'soft_delete': false,
    'topics_total_length': 0,
    'users_total_length': 0,
    'users_list': {},
    'status': 'new',
    'engagement_id': null,
    'contact_length': 0,
    'contacts': []
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
          console.log("RES =>", res);
          this.engagements = this.engagementFormat(cloneDeep(res['body']));
          this.engagements_original = this.engagementFormat(cloneDeep(res['body']))
          this.engagements['new'] = cloneDeep(this.new_eng_form);
          this.engagements_original['new'] = cloneDeep(this.new_eng_form);
          this.get_agents_for_engagements();
          this.get_contacts_for_engagements();
          
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
        this.currentEng = currentEng
      }
    })
  }

  ngOnInit() {
  }
  

  // MODAL FUNCTIONS =====================
  openModal(target, message){
    this.modal_mesage_bool = true;
    this.modal_message.title = target;
    console.log("OPEN MODAL TARGET, MESSAGE", target, message)
    if(target == 'list_changes'){
      
    }else if(target == 'counter'){
      this.modal_message.counter_end = message;
    }else{
      this.modal_message.body = message;
      console.log("this.modal_message", this.modal_message)
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
        if(this.checkValues(cur_list[el]['background'], old_list[el]['background'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        // console.log(cur_list[el]['engagement_name'], old_list[el]['engagement_name'])
        if(this.checkValues(cur_list[el]['engagement_name'], old_list[el]['engagement_name'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkValues(cur_list[el]['soft_delete'], old_list[el]['soft_delete'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkValues(cur_list[el]['company_address'] , old_list[el]['company_address'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkValues(cur_list[el]['company_name'], old_list[el]['company_name'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkValues(cur_list[el]['company_phone_number'], old_list[el]['company_phone_number'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkValues(cur_list[el]['main_text'], old_list[el]['main_text'])){
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(!old_list[el]['contacts']){
          // console.log(!old_list[el]['contacts'], cur_list[el]['contacts'].length != old_list[el]['contacts'], cur_list[el]['contact_length'].length != old_list[el]['contact_length'])
          this.list_changes[el] = cur_list[el];
          continue
        }
        if(this.checkContacts(cur_list[el]['contacts'], old_list[el]['contacts'])){
          this.list_changes[el] = cur_list[el];
          continue;
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
  checkValues(val1, val2){
      if(val1 != val2){
        // console.log(val1, val2, "NO MATCH!")
      }
      return (val1 == val2 ? false : true);
  }
  checkContacts(list1, list2){
    for(let c in list1){
      if(list1[c]['status'] == 'new' && list1[c]['soft_delete']){
        continue;
      }
      // console.log("comparing =>", list1[c], list2[c])
      if(list2[c] && list1[c]['contact_id'] == list2[c]['contact_id']){
        if(list1[c]['contact_id'] != list2[c]['contact_id']){
          return true
        }else if(list1[c]['email'] != list2[c]['email']){
          return true
        }else if(list1[c]['full_name'] != list2[c]['full_name']){
          return true
        }else if(list1[c]['soft_delete'] != list2[c]['soft_delete']){
          return true
        }
      }else{
        return true;
      }
    }
    return false;
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
      }else if (this.engagements_original[id]['main_text'] != this.engagements_original[id]['main_text']) {
        diff_finder_bool = true;
      }else if (this.engagements_original[id]['company_name'] != this.engagements_original[id]['company_name']) {
        diff_finder_bool = true;
      }else if (this.engagements_original[id]['company_address'] != this.engagements_original[id]['company_address']) {
        diff_finder_bool = true;
      }else if (this.engagements_original[id]['company_phone_number'] != this.engagements_original[id]['company_phone_number']) {
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
    console.log("submitChanges =>", obj)
    this._ConnectorService.saveEngagements(obj).then(result => {
      if (result) {
        this.closeModal();
        this.list_changes = {};
        this.openModal('message', 'success')
        this._ConnectorService.getAllEngagements(obj).then(res => {
          // console.log("RES =>", res);
          this.engagements = this.engagementFormat(cloneDeep(res['body']));
          this.engagements_original = this.engagementFormat(cloneDeep(res['body']))
          this.engagements['new'] = cloneDeep(this.new_eng_form);
          this.engagements_original['new'] = cloneDeep(this.new_eng_form);
          this.get_agents_for_engagements();
          this.get_contacts_for_engagements();
        }).catch(function (err) {
          console.log("ERROR =>", err)
        })
      }

    })
  }

  // EDIT CONTACTS ======================
  edit_contacts(eng_id){
    this.closeModal();
    this.engagements[eng_id]['new_contact'] = {
      full_name: '',
      email: '',
      soft_delete: false,
      status: 'new',
      engagement_id: eng_id
    }
    this.openModal('edit_contacts', eng_id)
  }
  edit_contact(contact_id, eng_id, key, value) {
    if (contact_id == 'new') {
      this.engagements[eng_id]['new_contact'][key] = value;
    } else {
      let contacts = this.engagements[eng_id]['contacts'];
      for (let el in contacts) {
        if (contacts[el]['contact_id'] == contact_id) {
          contacts[el][key] = value;
          break;
        }
      }
    }
  }
  soft_delete_contact(contact_id, eng_id){
    let target =  this.engagements[eng_id]['contacts']
    for(let el in target){
      if(target[el]['contact_id'] == contact_id){
        if(target[el]['soft_delete']){
          this.engagements[eng_id]['contact_length']++;
        }else{
          this.engagements[eng_id]['contact_length']--;
        }
        target[el]['soft_delete'] = !target[el]['soft_delete'];

        break;
      }
    }
  }
  add_new_contact(eng_id){
    let target = this.engagements[eng_id];
    let new_id = 1;
    for(let el in target['contacts']){
      if(typeof(target['contacts'][el]['contact_id']) == 'string' && target['contacts'][el]['contact_id'].includes('new')){
        new_id++;
      }
    }
    target['new_contact']['contact_id'] = "new" + new_id;
    target['contacts'].push(cloneDeep(target['new_contact']));
    this.engagements[eng_id]['new_contact'] = {
      full_name: '',
      email: '',
      soft_delete: false,
      status: 'new',
      engagement_id: eng_id
    }
    target['contact_length']++;
    console.log(target['contacts'])
  }
  contacts_cancel_all_changes(eng_id){
    if(!this.engagements_original[eng_id]){
      this.engagements[eng_id]['contacts'] = [];
      this.engagements[eng_id]['contact_length'] = 0;
    }else{
      let old_values = this.engagements_original[eng_id]['contacts']
      console.log("old_values", old_values)
      this.engagements[eng_id]['contacts'] = cloneDeep(this.engagements_original[eng_id]['contacts'])
      console.log("this.engagements[eng_id] =>", this.engagements[eng_id])
      this.engagements[eng_id]['contact_length'] = this.engagements[eng_id]['contacts'].length;
    }
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
      res[eng_id]['main_text'] = unescape(list[el]['main_text']);
      res[eng_id]['company_name'] = unescape(list[el]['company_name']);
      res[eng_id]['company_address'] = unescape(list[el]['company_address']);
      res[eng_id]['company_phone_number'] = unescape(list[el]['company_phone_number']);
      res[eng_id]['company_phone_number'] = unescape(list[el]['company_phone_number']);
      res[eng_id]['contacts'] = {};
      res[eng_id]['contact_length'] = 0;
    
      // if(!list[el]['topic_id']){
      //   continue;
      // }
      // if(!res[eng_id]['categories'][category]){
      //   res[eng_id]['categories'][category] = {};
      //   res[eng_id]['categories'][category]['topics'] = {};
      //   res[eng_id]['categories'][category]['topic_length'] = 0;
      //   res[eng_id]['categories_length']++;
      // }
      // if(!res[eng_id]['categories'][category]['topics'][topic_id] ){
      //   res[eng_id]['categories'][category]['topics'][topic_id] = list[el];
      //   res[eng_id]['categories'][category]['topics'][topic_id]['topic'] = unescape(list[el]['topic']);
      //   res[eng_id]['categories'][category]['topics'][topic_id]['link'] = `/${eng_id}/AdminEditquiz/${list[el]['topic_id']}`;
      //   res[eng_id]['categories'][category]['topic_length']++;
      //   res[eng_id]['topics_total_length']++;
      //   res[eng_id]['categories'][category]['topics'][topic_id]['users_length'] = 0;
      //   res[eng_id]['categories'][category]['topics'][topic_id]['users'] = {};
      // }
      // if(!list[el]['profile_id']){
      //   continue;
      // }
      // res[eng_id]['categories'][category]['topics'][topic_id]['users_length']++;
      // res[eng_id]['categories'][category]['topics'][topic_id]['users'][ list[el]['email']] = `${list[el]['first_name']} ${list[el]['last_name']}`
      
      // if(!users[eng_id]){
      //   users[eng_id] = {};
      // }
      // if(!users[eng_id][list[el]['email']]){
      //   users[eng_id][list[el]['email']] = true;
      //   res[eng_id]['users_total_length']++;
      //   res[eng_id]['users_list'][list[el]['email']] = true
      // }
      // console.log("==========END==========")
    }
    return res;
  }
  get_agents_for_engagements(){
    let engs = this.engagements;
    for(let el in engs){
      if(!engs[el]['engagement_id']){
        continue;
      }
      let eng_id = engs[el]['engagement_id']
      let obj = {
        eng_id: eng_id,
        email: this.currentUser.email
      };
      this._ConnectorService.get_engagement_agents_by_eng_id(obj).then(res =>{
        // console.log("get_engagement_agents_by_eng_id(obj). ENG_ID =>",eng_id,"; RES =>", res)
        let categories = {};
        let categories_length = 0;
        let topics_length = 0;
        let users_list = {};
        let users_length = 0;
        let data: any = res['body'];
        for(let el in data){
          let target = data[el]
          if(!categories[target.category]){
            categories[target.category] = {
              topics: {},
              topics_length: 0,
              users_length: 0,
              name: target.category
            };
            categories_length++;
          }
          
          if(!categories[target.category]['topics'][target.topic]){
            categories[target.category]['topics'][target.topic] = {
              topic_id: target.topic_id,
              soft_delete: target.topic_soft_delete,
              name: target.topic,
              users_length: 0,
              users: {},
              link: `/${eng_id}/AdminEditquiz/${target.topic_id}`
            };
            categories[target.category]['topics_length']++;
            topics_length++;
          }
          if(!categories[target.category]['topics'][target.topic]['users'][target.profile_id]){
            categories[target.category]['topics'][target.topic]['users'][target.profile_id] = {
              first_name: target.first_name,
              last_name: target.last_name,
              profile_id: target.profile_id
            }
            categories[target.category]['topics'][target.topic]['users_length']++;
            categories[target.category]['users_length']++;
          }
          if(!users_list[target.profile_id]){
            users_list[target.profile_id] = {
              first_name: target.first_name,
              last_name: target.last_name,
              profile_id: target.profile_id,
            }
            users_length++;
          }
        }
        this.engagements[eng_id]['categories'] = categories;
        this.engagements[eng_id]['categories_length'] = categories_length;
        this.engagements[eng_id]['topics_total_length'] = topics_length;
        this.engagements[eng_id]['users_list'] = users_list;
        this.engagements[eng_id]['users_total_length'] = users_length;
        this.engagements_original[eng_id]['categories'] = categories;
        this.engagements_original[eng_id]['categories_length'] = categories_length;
        this.engagements_original[eng_id]['topics_total_length'] = topics_length;
        this.engagements_original[eng_id]['users_list'] = users_list;
        this.engagements_original[eng_id]['users_total_length'] = users_length;
      }).catch(function(error){
        console.log("ERROR", error)
      })
    }
  };
  get_contacts_for_engagements(){
    let engs = this.engagements;
    for(let el in engs){
      if(!engs[el]['engagement_id']){
        continue;
      }
      let eng_id = engs[el]['engagement_id']
      let obj = {
        eng_id: eng_id,
        email: this.currentUser.email
      };
      this._ConnectorService.get_contacts_by_eng_id(obj).then(res =>{
        let data: any = res['body'];
        for(let el in data){
          data[el]['soft_delete'] = false;
        }
        this.engagements[eng_id]['contact_length'] = data.length;
        this.engagements[eng_id]['contacts'] = data;
        this.engagements_original[eng_id]['contact_length'] = cloneDeep(data.length);
        this.engagements_original[eng_id]['contacts'] = cloneDeep(data);
      }).catch(function(error){
        console.log("ERROR", error)
      })
    }
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
  checkKeyValueDiff(eng_id, key){
    // console.log(key,this.engagements[eng_id][key],this.engagements_original[eng_id][key] ,this.engagements[eng_id][key] == this.engagements_original[eng_id][key] )
    return (this.engagements[eng_id][key] == this.engagements_original[eng_id][key] ? false : true);
  }
}
