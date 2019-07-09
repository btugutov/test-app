import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import * as cloneDeep from 'lodash/cloneDeep';
import { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, arr_diff } from '../object_validation.js';


@Component({
  selector: 'app-admin-editquiz',
  templateUrl: './admin-editquiz.component.html',
  styleUrls: ['./admin-editquiz.component.css']
})
export class AdminEditquizComponent implements OnInit {
  currentUser = JSON.parse(localStorage['user']);
  topic_id;
  main_content;
  currentEng_id;
  engagements;
  engagements_obj;
  categories_list = null;
  topic_list = null;
  bucket_list;
  bucket_list_original;
  selected_category = null;
  selected_topic = null;
  selected_eng = null;

  topic_soft_delete = false;;
  topic_delete_confirm = false;

  original_category = null;
  original_topic = null;
  original_eng = null;

  submit_ready = false;
  topic_cat_eng_message = {
    'display': false,
    'status': "",
    'message': ""
  };
  temp_bucket_storage = {
    'answer_input': '',
    'bucket_id': null
  }

  list_of_questions = {};
  list_of_questions_bool = false;
  list_of_new_questions = {};
  list_of_deleted_questions = {};

  modal_mesage_bool = false;
  modal_message = {
    'title': '',
    'body': ''
  };
  bucket_list_confirm_bool = false;
  bucket_list_confirm_list = null;
  bucket_list_changes_bool = false;
  bucket_list_changes_list = {};
  bucketList_reloader = {
    'new_question': true
  };
  submit_status = {
    status: '',
    message: '',
    display: false
  }
  answer_delete_confirm_list = {};
  bucket_new = {
    bucket_name: ''
  }

  bucket_list_counter = {};
  time_limit = null;
  start_time = null;
  now: Date = new Date();

  constructor(private _ConnectorService: ConnectorService, private location: Location, private _route: ActivatedRoute, private _r: Router) {
    this.list_of_questions = {};
    this._route.paramMap.subscribe(params => {
      this.currentEng_id = params.get('eng');
      this.topic_id = params.get('topicID');
    });
    this._ConnectorService.user.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this._ConnectorService.getCatsTopsEngs(user.email).then(res => {
          console.log("RES =>", res)
          if (res['status'] == 'success') {
            this.main_content = cloneDeep(res);
            this.engagements = res['engs'];
            this.main_content['engs'] = this.sortCategoriesByEngs(this.orderByEngID(res['engs']), res['categories'])
            this.engagements_obj = this.sortCategoriesByEngs(this.orderByEngID(res['engs']), res['categories']);
            this.categories_list = this.engagements_obj[this.currentEng_id]['categories'];
            console.log(this.bucket_list)
            this.selected_eng = this.currentEng_id;
            this._ConnectorService.getQuizByTopicIdForEdit(user.email, this.topic_id).then(quiz => {
              console.log("quiz =>", quiz)
              this.topic_soft_delete = quiz['quiz1']['topic_soft_delete'];
              if (quiz) {
                console.log("got it!")
              }
              if (quiz['status'] == 'success') {
                console.log(quiz)
                for (let el in quiz['quiz1']) {
                  // console.log("============")
                  // console.log("el =>", el)
                  if(!quiz['quiz1'][el]){
                    continue;
                  }
                  if (quiz['quiz1'][el]['prompt']) {
                    if (quiz['quiz1'][el]['base64'] && quiz['quiz1'][el]['base64'].slice(0, 5) != 'data:') {
                      quiz['quiz1'][el]['base64'] = "data:image/png;base64," + quiz['quiz1'][el]['base64'];
                    }
                    this.list_of_questions[el] = quiz['quiz1'][el];
                  } else if (el == "topic") {
                    console.log("TOPIC =>", quiz['quiz1'][el])
                    this.selected_topic = quiz['quiz1'][el];
                    this.original_topic = quiz['quiz1'][el];
                  } else if (el == "category") {
                    this.selected_category = quiz['quiz1'][el];
                    this.original_category = quiz['quiz1'][el];
                    this.topic_list = this.engagements_obj[this.selected_eng]['categories'][this.selected_category]
                  } else if (el == 'engagement_id') {
                    this.selected_eng = quiz['quiz1'][el];
                    this.original_eng = quiz['quiz1'][el];
                  }else if(el == 'time_limit'){
                    this.time_limit = quiz['quiz1'][el];
                  }else if(el == 'start_time'){
                    this.start_time = quiz['quiz1'][el];
                  }
                }
                this.topic_cat_eng_message.status = 'success'
                this.list_of_questions['new_question'] = new Question();
                console.log("this.list_of_questions =>", this.list_of_questions)
                this.bucket_list = cloneDeep(switchKey(cloneDeep(quiz['buckets']), 'bucket_id'));
                this.main_content['bucket_list'] = switchKey(cloneDeep(quiz['buckets']), 'bucket_id');
                this.bucket_list_original =  cloneDeep(switchKey(cloneDeep(quiz['buckets']), 'bucket_id'));
                // this.bucket_list = cloneDeep(switchKey(cloneDeep(res['bucket_list']), 'bucket_id'));
                // this.main_content['bucket_list'] = switchKey(cloneDeep(res['bucket_list']), 'bucket_id');
                // this.bucket_list_original =  cloneDeep(switchKey(cloneDeep(res['bucket_list']), 'bucket_id'));
                this.list_of_questions_bool = true;
                this.bucket_list_counter_updater();
                this.selected_topic = cloneDeep(quiz['quiz1']['quiz_name']);
                this.original_topic = cloneDeep(quiz['quiz1']['quiz_name']);
                console.log("this.selected_topic =>", this.selected_topic)
                console.log("this.original_topic =>", this.original_topic)
              } else {

              }
            }).catch(function (err) {
              console.log("ERROR =>", err)
            })
          }
        }).catch(function (err) {
          console.log("ERROR =>", err)
        })


      }
      if (user && !user.admin) {
        this._r.navigate([`/${this.currentEng_id}/home`]);
      }
    })
    setInterval(() => {
      this.now = new Date();
    }, 1);


  }

  ngOnInit() {
  }
  addNewQuestion() {
    console.log(this.list_of_questions)
  }
  validateQuiz() {
    let errors = this.validateAllQuestions();
    if (Object.keys(errors).length > 0 || this.topic_cat_eng_message.status != 'success') {
      if (this.topic_cat_eng_message.status != 'success') {
        console.log("ENGAGEMENT_CATEGORY_TOPIC ERROR!")
        this.topic_cat_eng_message.display = true;
        this.topic_cat_eng_message.message = "Please select engagement, category, topic.";
        this.topic_cat_eng_message.status = 'fail';
      }

      console.log("SUBMIT errors =>", errors)
      for (let error in errors) {
        console.log("ERROR =>", errors[error]['body'])
        for (let el in errors[error]['body']) {
          console.log("EL =>", el)
          //errors[error]['body'][el]
          this.errorHandler(error, el, errors[error]['body'][el])
        }
      }
    } else if (Object.keys(this.list_of_questions).length > 1) {
      console.log("ALL GOOD!")
      this.submit_ready = true;
    }
  }
  cancelSubmitQuiz() {
    this.submit_ready = false;
  }
  submitQuiz() {
    console.log("SUBMITTED1");
    let quiz = this.removeUnusedANswers(cloneDeep(this.list_of_questions));
    delete quiz['new_question'];

    let object_to_send = {
      'questions': quiz,
    }
    object_to_send['engagement_id'] = this.selected_eng;
    object_to_send['bucket_list'] = this.bucket_list;
    object_to_send['topic'] = this.selected_topic;
    object_to_send['category'] = this.selected_category;
    object_to_send['topic_id'] = this.topic_id;
    object_to_send['topic_soft_delete'] = this.topic_soft_delete;
    object_to_send['list_of_deleted_questions'] = this.list_of_deleted_questions;
    object_to_send['answer_delete_confirm_list'] = this.answer_delete_confirm_list;
    object_to_send['time_limit'] = this.time_limit;
    console.log("=======================FETCHING CHANGES=======================")
    console.log(quiz)
    console.log("==============================================================")
    if(this.topic_soft_delete){
      this._ConnectorService.disableQuiz(this.topic_id, this.currentUser.email).then(res => {
        console.log("res =>", res)
        this.submit_ready = false;
        if (res['status'] == 'success') {
          this.submit_status.display = true;
          this.submit_status.status = 'success'
        } else {
          this.submit_status.display = true;
          this.submit_status.status = 'fail';
          this.submit_status.message = res['message'];
        }
      })
    }else{
      this._ConnectorService.saveEditedQuiz(object_to_send, this.currentUser.email).then(res => {
        console.log("res =>", res)
        this.submit_ready = false;
        if (res['status'] == 'success') {
          this.submit_status.display = true;
          this.submit_status.status = 'success'
        } else {
          this.submit_status.display = true;
          this.submit_status.status = 'fail';
          this.submit_status.message = res['message'];
        }
      })
    }
  }


  // LISTENERS ========================================================================================================================================================================================

  valueChanger(target, value) { // engagement/category/topic changer
    console.log(target, value)
    this.cancelSubmitQuiz()
    if (target == 'engagement') {
      if (this.selected_eng != value) {
        console.log("this.engagements_obj =>", this.engagements_obj);
        console.log(`this.engagements_obj[target] =>`, this.engagements_obj[value]);
        this.categories_list = this.engagements_obj[value]['categories'];
        this.topic_list = null;
        this.selected_topic = null;
        this.selected_category = null;
        this.selected_eng = value;
        document.getElementById('category_selector')['value'] = '';
        document.getElementById('topic_selector')['value'] = '';
        this.topic_cat_eng_message.display = false;
      }
    } else if (target == 'category') {
      if (this.selected_category != value) {
        this.selected_category = value;
        this.topic_list = this.engagements_obj[this.selected_eng]['categories'][value]
        document.getElementById('topic_selector')['value'] = '';
        this.topic_cat_eng_message.display = false;
      }
    } else if (target == 'topic') {
      if (value.length < 1) {
        this.topic_cat_eng_message.display = true;
        this.topic_cat_eng_message.status = 'fail'
        this.topic_cat_eng_message.message = 'Please enter new topic name.'
      } else if (value == this.selected_topic) {
        this.topic_cat_eng_message.display = false;
        this.topic_cat_eng_message.status = 'success'
        this.topic_cat_eng_message.message = 'Looks good!'
        return;
      } else {
        this.selected_topic = value;
        if (this.original_topic == this.selected_topic) {
          this.topic_cat_eng_message.display = false;
          this.topic_cat_eng_message.status = 'success'
          this.topic_cat_eng_message.message = 'Looks good!'
          return;
        }
        let check_bool = false;
        for (let el in this.topic_list) {
          if (this.topic_list[el]['topic'] == value) {
            this.selected_topic = null;
            document.getElementById('topic_selector')['value'] = '';
            this.topic_cat_eng_message.display = true;
            this.topic_cat_eng_message.status = 'fail'
            this.topic_cat_eng_message.message = 'Such topic already exists. Please give it another name.'
            check_bool = true;
            break;
          }
        }
        if (!check_bool) {
          this.topic_cat_eng_message.display = true;
          this.topic_cat_eng_message.status = 'success'
          this.topic_cat_eng_message.message = 'Looks good!'
        }
      }
    }else if(target == 'time_limit'){
      console.log(value);
      this.time_limit = value;
    }
  }

  displayTypeChanger(target, value) {
    if (this.list_of_questions[target]['question_soft_delete']) {
      console.log("disabled????")
      return;
    }
    this.cancelSubmitQuiz()
    if (value === 'textfield input') {
      console.log('text!')
      this.list_of_questions[target]['display_type_description'] = "Manual input";
      this.list_of_questions[target]['question_type_description'] = 'textfield input';
      this.list_of_questions[target]['question_type_id'] = 2;
    } else if (value === 'drag_and_drop') {
      this.list_of_questions[target]['display_type_description'] = value;
      this.list_of_questions[target]['question_type_description'] = value;
      this.list_of_questions[target]['question_type_id'] = 3;
      this.list_of_questions[target]['display_type_id'] = 4;
    } else {
      console.log("selected input")
      this.list_of_questions[target]['question_type_description'] = "selected input";
      this.list_of_questions[target]['question_type_id'] = 1;
      if (value === "Checkbox") {
        this.list_of_questions[target]['display_type_description'] = "Checkbox";
        this.list_of_questions[target]['display_type_id'] = 2;
      } else if (value === "Dropdown") {
        this.list_of_questions[target]['display_type_description'] = "Dropdown";
        this.list_of_questions[target]['display_type_id'] = 3;
        let one_found = false;
        // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
        // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
        // The loop bellow leaves only first found answer as correct.
        for (let el in this.list_of_questions[target]['answer_correct']) {
          if (this.list_of_questions[target]['answer_correct'][el]) {
            if (!one_found) {
              one_found = true
            } else {
              this.list_of_questions[target]['answer_correct'][el] = false
            }
          }
        }
      } else if (value === "Radio") {
        this.list_of_questions[target]['display_type_description'] = "Radio";
        this.list_of_questions[target]['display_type_id'] = 1;
        let one_found = false;
        // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
        // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
        // The loop bellow leaves only first found answer as correct.
        for (let el in this.list_of_questions[target]['answer_correct']) {
          if (this.list_of_questions[target]['answer_correct'][el]) {
            if (!one_found) {
              one_found = true
            } else {
              this.list_of_questions[target]['answer_correct'][el] = false
            }
          }
        }
      }
    }
    console.log(this.list_of_questions[target])
  }

  addAnswer(target) {
    this.cancelSubmitQuiz()
    console.log('add answer for =>', target)
    let value = document.getElementById(`newAnswerFor_${target}`)['value'];
    console.log("document.getElementById(`newAnswerFor_${target}`) =>", document.getElementById(`newAnswerFor_${target}`))
    if (value.length < 1) {
      console.log("empty input");
      return;
    }
    console.log("Value =>", value)
    document.getElementById(`newAnswerFor_${target}`)['value'] = '';
    let answers_list = this.list_of_questions[target]['answer_prompt'];
    for (let el in answers_list) {
      if (answers_list[el] == value) {
        this.errorHandler(target, "add_answer", "Such answer already exists")
        return;
      }
    }
    let counter = 0;
    let temp_id = 'new0'
    for (let el in this.list_of_questions[target]['answer_prompt']) {
      if (el.includes('new')) {
        temp_id = el
      }
    }
    temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1)
    this.list_of_questions[target]['answer_prompt'][temp_id] = value;
    this.list_of_questions[target]['answer_sort'][temp_id] = 1;
    this.list_of_questions[target]['answer_correct'][temp_id] = false;
    this.list_of_questions[target]['answer_soft_delete'][temp_id] = false;
    this.clearErrors(target, 'add_answer');
  }

  inputEditor(target, q_id, q_key, a_id, value) {
    this.cancelSubmitQuiz()
    console.log("SERVING QUESTION WITH ID =>", q_id)
    if (this.list_of_questions[q_id]['question_soft_delete']) {
      console.log("disabled????")
      return;
    }
    if (target == 'answer') {
      if (q_key == 'answer_soft_delete') {
        if(a_id.includes('new')){
          delete this.list_of_questions[q_id]['answer_soft_delete'][a_id]
          delete this.list_of_questions[q_id]['answer_bucket_id'][a_id]
          delete this.list_of_questions[q_id]['answer_correct'][a_id]
          delete this.list_of_questions[q_id]['answer_prompt'][a_id]
          delete this.list_of_questions[q_id]['answer_sort'][a_id]

        }else{
          this.list_of_questions[q_id]['answer_soft_delete'][a_id] = value
        }
      }else if(q_key == 'answer_hard_delete'){
        if(!this.list_of_questions[q_id]['answer_hard_delete']){
          this.list_of_questions[q_id]['answer_hard_delete'] = {};
        }
        this.list_of_questions[q_id]['answer_hard_delete'][a_id] = value;
        this.answer_delete_confirm_list[a_id] = value;

      }else{
        let question_type = this.list_of_questions[q_id]['display_type_description'];
        if ((question_type == 'Dropdown' || question_type == 'Radio') && q_key == 'answer_correct') {
          for (let el in this.list_of_questions[q_id]['answer_correct']) {
            if (el == a_id) {
              this.list_of_questions[q_id]['answer_correct'][el] = true;
            } else {
              this.list_of_questions[q_id]['answer_correct'][el] = false;
            }
          }
          return;
        }
        this.list_of_questions[q_id][q_key][a_id] = value;
      }
    } else if (target == 'img') { // image uploader
      if (value[0].size > 5242880) {
        this.errorHandler(q_id, "image_uploader", "The image is too heavy. Upload limit is 5mb per image.")
        return;
      }
      this._ConnectorService.imgToBase64(value).then(data => {
        console.log("ADDING IMAGE FOR =>", q_id)
        this.list_of_questions[q_id][q_key] = String(data);
        this.list_of_questions[q_id]['image'] = true;
        this.clearErrors(q_id, 'image_uploader')
      }).catch(function (err) {
        console.log("ERROR =>", err)
        this.errorHandler(q_id, "image_uploader", JSON.stringify(err))
      })
    } else if (target == 'drag_and_drop') { // drag and drop logic
      // console.log("CHOSEN BUCKET =>", value)
      // console.log(target, q_id, q_key, a_id, value)
      // if(q_key == "answer_bucket_id" || a_id == "bucket_id"){
      //   value = Number(value);
      // }
      if(q_key == "temp_bucket_storage"){
        if(!this.list_of_questions[q_id]['temp_bucket_storage']){
          this.list_of_questions[q_id]['temp_bucket_storage'] = {
            answer_input: null,
            bucket_id: null,
          }
        }
        this.list_of_questions[q_id]['temp_bucket_storage'][a_id] = value;
      }
      else{
        this.list_of_questions[q_id][q_key][a_id] = value;
      }
      // console.log(this.list_of_questions[q_id])

    } else {
      this.list_of_questions[q_id][q_key] = value;
    }
  }

  removeImg(q_id) {
    this.cancelSubmitQuiz()
    this.list_of_questions[q_id]['base64'] = '';
    this.list_of_questions[q_id]['image'] = false;
  }

  dragAndDropAdder(id) {
    this.cancelSubmitQuiz()
    console.log(this.list_of_questions[id]['temp_bucket_storage'])
    let input_val = this.list_of_questions[id]['temp_bucket_storage']['answer_input'];
    let bucket_val = this.list_of_questions[id]['temp_bucket_storage']['bucket_id'];
    this.clearErrors(id, 'bucket_input');
    this.clearErrors(id, 'bucket_list');
    if (!input_val || !bucket_val) {
      if (!input_val) {
        this.errorHandler(id, "bucket_input", "Please enter a bucket choice value.")
      }
      if (!bucket_val) {
        this.errorHandler(id, "bucket_list", "Please choose one of the buckets.")
      }
      return;
    }else{
      let counter = 0;
      let temp_id = 'new0'
      for (let el in this.list_of_questions[id]['answer_prompt']) {
        if (el.includes('new')) {
          temp_id = el
        }
      }
      temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1)
      let new_id = temp_id; // new answer ID
      console.log("new answerId =>", new_id)
      try {
        console.log("this.list_of_questions[id]['answer_prompt'] =>", this.list_of_questions[id]['answer_prompt'])
        this.list_of_questions[id]['answer_prompt'][new_id] = input_val
        this.list_of_questions[id]['answer_bucket_id'][new_id] = bucket_val;
        this.list_of_questions[id]['answer_soft_delete'][new_id] = false;
        this.list_of_questions[id]['answer_correct'][new_id] = false;
        this.list_of_questions[id]['answer_sort'][new_id] = 1;
        this.list_of_questions[id]['temp_bucket_storage']['answer_input'] = null;
        this.list_of_questions[id]['temp_bucket_storage']['bucket_id'] = null;
        this.bucketList_reloader[id] = false;
        document.getElementById(`bucket_input_add_input_${id}`)['value'] = '';
  
        // document.getElementById(`bucket_list_pick_${id}`)['selectedIndex'] = -1;
        var options = document.querySelectorAll(`#bucket_list_pick_${id} option`);
        for (var i = 0, l = options.length; i < l; i++) {
            options[i]['selected'] = options[i]['defaultSelected'];
        }
  
        console.log(this.list_of_questions[id])
  
        // there was a weird bug with the choose bucket dropdown. It just didn't reset the old value after adding a new bucket choice
        // so, by calling "  this.bucketList_reloader[id] = false " we delete the choose bucket dropdown ...
        // let that = this;
        // setTimeout(function () {
        //   // ... and put it back after 50 miliseconds
        //   that.bucketList_reloader[id] = true;
        // }, 50)
      }
      catch (error) {
        console.log("ERROR =>", error)
      }
    }

  }

  checkModuleLink(id) {
    if (this.validURL(this.list_of_questions[id]['training_url'])) {
      this.clearErrors(id, 'training_url')
      window.open(this.list_of_questions[id]['training_url'], "_blank")
    } else {
      console.log("NOT GOOD!")
      this.errorHandler(id, 'training_url', "Confluence link is invalid")
    }
  }

  addQuestion() {
    this.cancelSubmitQuiz()
    let errs = this.validateQuestion("new_question");
    if (errs.status == 'fail') {
      for (let el in errs.body) {
        this.errorHandler('new_question', el, errs.body[el])
      }
      return;
    } else {
      this.errorHandlerRemover("new_question")
    }
    let counter = 1;
    for (let el in this.list_of_questions) {
      console.log("EL =>>>>", el)
      if (el.includes('added_')) {
        console.log("added is already here!", el.split('_')[1])
        counter = Number(el.split('_')[1]) + 1;
      }
    }

    let new_id = 'added_' + counter;
    console.log("New ID =>", new_id)
    this.list_of_questions[new_id] = this.list_of_questions['new_question'];
    this.list_of_new_questions[new_id] = true;
    this.bucketList_reloader[new_id] = true;
    this.list_of_questions['new_question'] = new Question();
  }
  disableQuestion(id) {
    this.list_of_questions[id]['question_soft_delete'] = true;
    let counter = 0;
    for (let el in this.list_of_questions) {
      if (this.list_of_questions[el]['question_soft_delete']) {
        counter++;
      }
    }
    if (counter == Object.keys(this.list_of_questions).length - 1) {
      this.topic_soft_delete = true;
    }
  }
  enableQuestion(id) {
    this.list_of_questions[id]['question_soft_delete'] = false;
    this.topic_soft_delete = false;
  }
  removeQuestion(id) {
    this.cancelSubmitQuiz()
    console.log("ID =>", id)
    this.list_of_questions[id]['question_hard_delete'] = true
    // delete this.list_of_questions[id]
    // if (this.list_of_new_questions[id]) {
    //   delete this.list_of_new_questions[id]
    // } else {
    //   this.list_of_deleted_questions[id] = true;
    // }
  }
  restoreQuestion(id){
    this.cancelSubmitQuiz()
    console.log("ID =>", id)
    this.list_of_questions[id]['question_hard_delete'] = false
    // delete this.list_of_questions[id]
    // if (this.list_of_new_questions[id]) {
    //   delete this.list_of_new_questions[id]
    // } else {
    //   this.list_of_deleted_questions[id] = true;
    // }
  }
  removeDragAndDropChoice(id, c_id) { // id = question_id, c_id = choice id
    this.cancelSubmitQuiz()
    console.log(id, c_id)
    try {
      // delete this.list_of_questions[id]['answer_prompt'][c_id]
      // delete this.list_of_questions[id]['answer_correct'][c_id]
      // delete this.list_of_questions[id]['answer_soft_delete'][c_id]
      // delete this.list_of_questions[id]['answer_bucket_id'][c_id]
      this.list_of_questions[id]['answer_soft_delete'][c_id] = true;
    }
    catch (err) {

    }
  }
  inputTest(target) {
    console.log("=============================")
    console.log(target)
    console.log("=============================")
  }

  
  
  // MODAL FUNCTIONS ==================================================================================================================================================================================
  
  closeModal() {
    this.modal_mesage_bool = false;
  }
  
  openBucketEditor(){
    this.bucket_list_counter_updater();
    this.modal_message.title = "Bucket editor";
    this.modal_mesage_bool = true;
  }
  bucketListEditor(index, key, value) {
    if(typeof(index) == 'string' && index.slice(0,3) == 'new'){
      delete this.bucket_list[index]
      return;
    }
    this.bucket_list[index][key] = value;
    this.bucket_list_changes_bool = (Object.keys(this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)).length > 0);
    console.log("counter =>", this.bucket_list_changes_bool)
  }
                    
  bucketListEditorConfirm() {
    this.bucket_list_confirm_bool = true;
    this.bucket_list_confirm_list = this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)
  }
  bucketListEditorSave() {
    this.cancelSubmitQuiz();
    let obj = this.bucket_list;
    
    this.bucket_list_changes_bool = false;
    for(let el in this.bucket_list){
      if(this.bucket_list[el].confirmed == false || this.bucket_list[el]['bucket_name'] !=  this.bucket_list_original[el]['bucket_name'] || this.bucket_list[el]['soft_delete'] !=  this.bucket_list_original[el]['soft_delete']){
        let obj = this.bucket_list[el];
        if(obj.soft_delete){
          console.log('deleting element!')
        }
        this._ConnectorService.saveOneBucket(obj).then(res =>{
          console.log("saveOneBucket response =>", res)
          if(res['status'] == 'success' && el.slice(0,3)=="new"){
            console.log(`bukcet ${el} will have ID => `, res['body']['recordsets'][0][0][''])
            let new_id = res['body']['recordsets'][0][0][''];
            this.bucket_list[el].confirmed = true;
            this.bucket_list[el].bucket_id = new_id;
            this.bucket_list[new_id] = cloneDeep(this.bucket_list[el]);
            this.bucket_list_original[new_id] = cloneDeep(this.bucket_list[el]);
            delete this.bucket_list[el];
          }else if(res['status'] == 'success' && el.slice(0,3)!="new"){
            if(this.bucket_list[el]['soft_delete']){
              delete this.bucket_list_original[el]
              delete this.bucket_list[el]
            }
            this.bucket_list_original[el] = this.bucket_list[el];
          }
          console.log(this.bucket_list)
        }).catch(function(err){
          console.log("ERROR =>", err)
        })
      }
    }
    console.log(this.bucket_list)
  }
  bucketListEditorCancel() {
    this.bucket_list_changes_bool = false;
    this.bucket_list = cloneDeep(this.bucket_list_original)
    console.log(this.bucket_list)
  }
  bucketListEditorClose() {
    // this.bucketListEditorCancel();
    this.bucket_list_changes_bool = false;
    this.modal_mesage_bool = false;
  }
  bucketUndoOne(id, index) {
    this.bucket_list[index] = cloneDeep(this.bucket_list_original[index])
    delete this.bucket_list_confirm_list[id];
    if (Object.keys(this.bucket_list_confirm_list).length < 1) {
      this.bucket_list_confirm_bool = false;
      this.bucket_list_confirm_list = null;
    }
  }
  addNewBucket(){
    let new_id = "new";
    let counter = 1;
    for(let el in this.bucket_list){
      if(this.bucket_list[el]['bucket_name'] == this.bucket_new.bucket_name){
        return;
      }else if( el.includes("new")){
        counter = Number(el.slice(3)) + 1;
      }
    }
    this.bucket_list_changes_bool = true;
    new_id+=counter;
    this.bucket_list[new_id] = {
      bucket_id: new_id,
      bucket_name: this.bucket_new.bucket_name,
      question_id: null,
      quiz_id: this.topic_id,
      soft_delete: false,
      confirmed: false
    }
    this.bucket_new.bucket_name = "";
  }

  // VALIDATORS ========================================================================================================================================================================================

  validateQuestion(id) {
    this.errorHandlerRemover(id)
    let res = {
      'status': "success",
      'body': {}
    }
    if(this.list_of_questions[id]['question_soft_delete'] || this.list_of_questions[id]['question_hard_delete'] || this.topic_soft_delete){
      return res;
    }
    let target = this.list_of_questions[id];

    // Question order value
    if (!target.question_sort || target.question_sort < 1) {
      res.body['order number'] = "Invalid order number.";
    }

    // Prompt
    if (!target.prompt || target.prompt.length < 1) {
      res.body['Question prompt'] = "Question prompt is missing.";
    } else if (escape(target.prompt).length > 3500) {
      res.body['prompt'] = "Question prompt is too long.";
    }

    // Question type
    if (!target.display_type_description) {
      res.body['type'] = "Please select question display type.";
    }

    // Answers' validation
    if (!res.body['type']) {
      if (target.question_type_id == 1) {
        console.log("question_type_id =>", target.question_type_id, "; target id =>", id)
        if (Object.keys(target.answer_prompt).length < 1) {
          res.body['answers'] = "Please add answers.";
        } else if (Object.keys(target.answer_prompt).length < 2) {
          console.log("āaaaaaaaaaa")
          res.body['answers'] = "Please add more answers.";
        } else {
          for (let el in target.answer_prompt) {
            if (target.answer_prompt[el].length < 1) {
              res.body['answers_length'] = 'Some answers have no inputs at all.'
            }
          }
          // drag and drop bucket count
          if (target.display_type_description == "drag_and_drop") {
            if (Object.keys(target.answer_bucket_id).length < 2) {
              res.body['answers'] = "Please add buckets."
            }
          } else {
            // find number of right answers
            let counter = 0;
            for (let el in target.answer_correct) {
              if (target.answer_correct[el] == true) {
                counter++;
              }
            }
            if (counter == 0) {
              res.body['answers'] = "Please mark the right answers."
            }
          }
        }
      }else if(target.question_type_id == 3){
        let counter = 0;
        for(let el in target.answer_prompt){
          if(!target.answer_bucket_id[el]){
            res.body['answers_length'] = 'Some answers have no inputs at all.'
            break;
          }else if( !this.bucket_list[ target.answer_bucket_id[el]]){
            res.body['answers_length'] = `Bucket is missing for answer "${target.answer_prompt[el]}".`
            break;
          }
        }

      }

    }

    // Confluence link
    if (target.training_url && !this.validURL(target.training_url)) {
      res.body['type'] = "Confluence link is invalid. Please check URL syntax.";
    }

    // Question value
    if (!target.point_value) {
      res.body['type'] = "Invalid question value.";
    } else if (target.point_value < 1 || target.point_value > 10) {
      res.body['type'] = "Please enter question value between 1 to 10.";
    }

    if (Object.keys(res.body).length > 0) {
      res.status = "fail";
    }
    // if(target.question_type_id == 3){
    //   for(let el in target.answer_bucket_id){
    //     if(target.answer_prompt[el]){
    //       console.log(` ${this.bucket_list[ target.answer_bucket_id[el] ]['bucket_name']} is for questionId ${id}`)
    //       this.bucket_list[ target.answer_bucket_id[el]]['question_id'] = id;
    //       this.bucket_list[ target.answer_bucket_id[el]]['quiz_id'] = this.topic_id;
    //     }
    //   }
    // }
    return res;
  }
  validateAllQuestions() {
    let list = this.list_of_questions;
    let res = {};
    for (let el in list) {
      console.log("=============================")
      console.log("EL =>", el, "el['error_bool'] =>", list[el]['error_bool'])
      console.log("=============================")
      if (el == 'new_question' || list[el]['error_bool']) {
        continue;
      }
      this.errorHandlerRemover(el);
      let temp_res = this.validateQuestion(el);
      if (temp_res.status == 'fail') {
        res[el] = temp_res;
      }
    }
    return res;
  }

  //  MISC ============================================================================================================================================================================================

  errorHandler(id, source, message) {
    console.log(`WE GOT ERROR HERE! ID => ${id}, source => ${source}, message => ${message}`);
    if (!this.list_of_questions[id + "_error"]) {
      this.list_of_questions[id + "_error"] = {
        'error_bool': true,
        'errors': {
        },
        'target': id
      }
      if (id == 'new_question') {
        this.list_of_questions[id + "_error"]['target'] = "New question form";
      }
      // this.clearErrorMessageTimer(id, 5000)
    }
    this.list_of_questions[id + "_error"]['errors'][source] = message;
  }
  errorHandlerRemover(id) {
    try {
      delete this.list_of_questions[id + '_error'];
    }
    catch (error) {
      console.log(error)
    }
    return true
  }
  errorRemoveById(id) {
    try {
      delete this.list_of_questions[id];
    }
    catch (error) {
      console.log(error)
    }
    return true
  }

  clearErrors(id, source) {
    try {
      delete this.list_of_questions[id + "_error"]['errors'][source]
      if (Object.keys(this.list_of_questions[id + "_error"]['errors']).length < 1) {
        delete this.list_of_questions[id + "_error"]
      }
    }
    catch (err) {
      // console.log( `clearErrors : error =>`, err)
    }
  }
  clearErrorMessageTimer(id, time) {
    let that = this;
    console.log('1st this =>', this)
    setTimeout(
      function () {
        delete that.list_of_questions[id + '_error'];
      }
      , time)
  }

  orderByEngID(engs) {
    let res = {};
    for (let el in engs) {
      if (engs[el]['soft_delete']) {
        continue;
      }
      res[engs[el]['engagement_id']] = engs[el]
    }
    console.log(`orderByEngID(engs) =>`, res)
    return res;
  }
  sortCategoriesByEngs(engs, list) {
    // engs and list are arrays
    for (let cat in list) {
      for (let topic in list[cat]) {
        let eng_id = list[cat][topic]['engagement_id'];
        if (!engs[eng_id]) {
          continue;
        }
        if (!engs[list[cat][topic]['engagement_id']]['categories']) {
          engs[list[cat][topic]['engagement_id']]['categories'] = {}
        }
        if (!engs[list[cat][topic]['engagement_id']]['categories'][cat]) {
          engs[list[cat][topic]['engagement_id']]['categories'][cat] = {}
        }
        engs[list[cat][topic]['engagement_id']]['categories'][cat][list[cat][topic]['topic_id']] = list[cat][topic]
      }
    }
    return engs;
  }

  validURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  }
  arrayToList(list, key, type) {
    let res = {};
    for (let el in list) {
      res[Number(list[el][key])] = list[el]
    }
    return res;
  }
  bucketListSoftdeleteChecker(list) {
    for (let el in list) {
      if (!list[el]['soft_delete']) {
        list[el]['soft_delete'] = false;
      }
    }
    return list;
  }
  differenceFinderBuckets(arr1, arr2) {
    // array1 and array2 should by copies of each other
    let res = {};
    for (let bucket in arr1) {
      let el1 = JSON.stringify(arr1[bucket])
      let el2 = JSON.stringify(arr2[bucket])
      console.log
      if(el1 != el2){
        res[arr1[bucket]['bucket_id']] = arr1[bucket];
      }
    }
    return res;
  }

  escapingList(list) { // escaping a map/dictionary
    for (let el in list) {
      list[el] = escape(list[el]);
    }
    return list;
  }
  escapingBucketList(list) {
    for (let el in list) {
      list[el]['bucket_name'] = escape(list[el]['bucket_name']);
    }
    return list;
  }
  escapingQuiz(q) {
    for (let el in q) {
      if (el == "new_question" || (typeof (q[el]) != 'object')) {
        continue;
      } else if (el == "bucket_list") {
        q[el] = this.escapingBucketList(q[el])
        continue;
      }
      console.log("EL =>", el)
      q[el]['prompt'] = escape(q[el]['prompt']);
      q[el]['training_url'] = escape(q[el]['training_url']);
      q[el]['training_module'] = escape(q[el]['training_module']);
      q[el]['expected_response'] = escape(q[el]['expected_response']);
      for (let a in q[el]['answer_prompt']) {
        q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a])
      }
    }
    q['topic'] = escape(q['topic'])
    q['category'] = escape(q['category'])
    return q;
  }
  bucketListDifferencesFinder() {
    let original_list = this.main_content;
    let current_list = this.bucket_list;
  }
  removeUnusedANswers(list) {
    for (let question in list) {
      if (question == "new_question") {
        continue;
      }
      for (let el in list[question]['answer_bucket_id']) {
        if (!list[question]['answer_prompt'][el]) {
          delete list[question]['answer_bucket_id'][el]
        }
      }
      for (let el in list[question]['answer_sort']) {
        if (!list[question]['answer_prompt'][el]) {
          delete list[question]['answer_sort'][el]
        }
      }
      for (let el in list[question]['answer_soft_delete']) {
        if (!list[question]['answer_prompt'][el]) {
          delete list[question]['answer_soft_delete'][el]
        }
      }
      for (let el in list[question]['answer_correct']) {
        if (!list[question]['answer_prompt'][el]) {
          delete list[question]['answer_correct'][el]
        }
      }
    }
    // since all used/existed questions are stored in 'answer_prompt' list, we should check other lists to remove junk ids;
    return list;
  }
  goBack() {
    this.location.back();
  }

  deleteQuiz() {
    console.log("DELETING QUIZ!!")
    let obj = {
      'questions': cloneDeep(this.list_of_questions),
      'topic_id': this.topic_id
    }
    delete obj.questions['new_question']
    this._ConnectorService.deleteQuiz(obj, this.currentUser.email).then(res => {
      console.log("res =>", res)
      this.list_of_questions = {};
      this.submit_ready = false;
      if (res['status'] == 'success') {
        this.submit_status.display = true;
        this.submit_status.status = 'success'
      } else {
        this.submit_status.display = true;
        this.submit_status.status = 'fail';
        this.submit_status.message = res['message'];
      }
    })
  }



  checkState() {
    console.log(this)
    console.log("====================================================================================================================")
    console.log(this.list_of_questions)
    console.log("====================================================================================================================")
  }

  bucket_list_counter_updater(){
    console.log("bucket_list_counter_updater")
    this.bucket_list_counter = {};
    for(let q in this.list_of_questions){
      let question = this.list_of_questions[q];
      for(let ans in question['answer_prompt']){
        if(question['answer_bucket_id'][ans]){
          let bucket_id = question['answer_bucket_id'][ans];
          if(!this.bucket_list_counter[bucket_id]){
            this.bucket_list_counter[bucket_id] = 0
          }
          this.bucket_list_counter[bucket_id]++;
        }
      }
    }
  }

  /*
  bucket_list reserve copy
  {"1":{"bucket_id":1,"bucket_name":"Verify Ownership","soft_delete":false,"question_id":null,"quiz_id":null},"2":{"bucket_id":2,"bucket_name":"No verification necessary","soft_delete":false,"question_id":null,"quiz_id":null},"3":{"bucket_id":3,"bucket_name":"Confluence","soft_delete":false,"question_id":null,"quiz_id":null},"4":{"bucket_id":4,"bucket_name":"Ticketmaster","soft_delete":false,"question_id":null,"quiz_id":null},"5":{"bucket_id":5,"bucket_name":"Support Tool","soft_delete":false,"question_id":null,"quiz_id":null},"6":{"bucket_id":6,"bucket_name":"1 - Ticket ID","soft_delete":false,"question_id":null,"quiz_id":null},"7":{"bucket_id":7,"bucket_name":"2 - Ticket origin","soft_delete":false,"question_id":null,"quiz_id":null},"8":{"bucket_id":8,"bucket_name":"3 - User provided info","soft_delete":false,"question_id":null,"quiz_id":null},"9":{"bucket_id":9,"bucket_name":"4 - User provided message","soft_delete":false,"question_id":null,"quiz_id":null},"10":{"bucket_id":10,"bucket_name":"5 - Attachments","soft_delete":false,"question_id":null,"quiz_id":null},"11":{"bucket_id":11,"bucket_name":"6 - Related account","soft_delete":false,"question_id":null,"quiz_id":null},"12":{"bucket_id":12,"bucket_name":"7 - Note from agent","soft_delete":false,"question_id":null,"quiz_id":null},"13":{"bucket_id":13,"bucket_name":"8 - Response from agent","soft_delete":false,"question_id":null,"quiz_id":null},"14":{"bucket_id":14,"bucket_name":"Purchases & Billing","soft_delete":false,"question_id":null,"quiz_id":null},"15":{"bucket_id":15,"bucket_name":"Activity","soft_delete":false,"question_id":null,"quiz_id":null},"16":{"bucket_id":16,"bucket_name":"Security","soft_delete":false,"question_id":null,"quiz_id":null},"17":{"bucket_id":17,"bucket_name":"Security > Two Factor","soft_delete":false,"question_id":null,"quiz_id":null},"18":{"bucket_id":18,"bucket_name":"Security > Phone Number","soft_delete":false,"question_id":null,"quiz_id":null},"19":{"bucket_id":19,"bucket_name":"Security > Steam Guard","soft_delete":false,"question_id":null,"quiz_id":null},"20":{"bucket_id":20,"bucket_name":"Re-categorize","soft_delete":false,"question_id":null,"quiz_id":null},"21":{"bucket_id":21,"bucket_name":"Escalate","soft_delete":false,"question_id":null,"quiz_id":null},"22":{"bucket_id":22,"bucket_name":"Assist the user","soft_delete":false,"question_id":null,"quiz_id":null},"23":{"bucket_id":23,"bucket_name":"1.","soft_delete":false,"question_id":null,"quiz_id":null},"24":{"bucket_id":24,"bucket_name":"2.","soft_delete":false,"question_id":null,"quiz_id":null},"25":{"bucket_id":25,"bucket_name":"3.","soft_delete":false,"question_id":null,"quiz_id":null},"26":{"bucket_id":26,"bucket_name":"4.","soft_delete":false,"question_id":null,"quiz_id":null},"27":{"bucket_id":27,"bucket_name":"5.","soft_delete":false,"question_id":null,"quiz_id":null},"28":{"bucket_id":28,"bucket_name":"Not a part of the process","soft_delete":false,"question_id":null,"quiz_id":null},"33":{"bucket_id":33,"bucket_name":"Send closing response, close ticket","soft_delete":false,"question_id":null,"quiz_id":null},"35":{"bucket_id":35,"bucket_name":"Respond, don't close ticket yet","soft_delete":false,"question_id":null,"quiz_id":null},"36":{"bucket_id":36,"bucket_name":"Accounts","soft_delete":false,"question_id":null,"quiz_id":null},"37":{"bucket_id":37,"bucket_name":"Billing","soft_delete":false,"question_id":null,"quiz_id":null},"38":{"bucket_id":38,"bucket_name":"Tech/Games","soft_delete":false,"question_id":null,"quiz_id":null},"39":{"bucket_id":39,"bucket_name":"Confirm","soft_delete":false,"question_id":null,"quiz_id":null},"40":{"bucket_id":40,"bucket_name":"Set expectations","soft_delete":false,"question_id":null,"quiz_id":null},"41":{"bucket_id":41,"bucket_name":"Assure","soft_delete":false,"question_id":null,"quiz_id":null},"42":{"bucket_id":42,"bucket_name":"Relate","soft_delete":false,"question_id":null,"quiz_id":null}}
  */
}
