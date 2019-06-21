import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Location } from '@angular/common';
import { Question } from './../question';
import * as cloneDeep from 'lodash/cloneDeep';

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
            this.bucket_list = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
            this.main_content['bucket_list'] = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
            this.bucket_list_original = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
            console.log(this.bucket_list)
            this.selected_eng = this.currentEng_id;
            this._ConnectorService.getQuizByTopicIdForEdit(user.email, this.topic_id).then(res => {
              console.log("RES =>", res)
              this.topic_soft_delete = res['quiz1']['topic_soft_delete'];
              if (res) {
                console.log("got it!")
              }
              if (res['status'] == 'success') {
                console.log(res)
                for (let el in res['quiz1']) {
                  if (res['quiz1'][el]['prompt']) {
                    if (res['quiz1'][el]['base64'] && res['quiz1'][el]['base64'].slice(0, 5) != 'data:') {
                      res['quiz1'][el]['base64'] = "data:image/png;base64," + res['quiz1'][el]['base64'];
                    }
                    this.list_of_questions[el] = res['quiz1'][el];
                  } else if (el == "topic") {
                    this.selected_topic = res['quiz1'][el];
                    this.original_topic = res['quiz1'][el];
                  } else if (el == "category") {
                    this.selected_category = res['quiz1'][el];
                    this.original_category = res['quiz1'][el];
                    this.topic_list = this.engagements_obj[this.selected_eng]['categories'][this.selected_category]
                  } else if (el == 'engagement_id') {
                    this.selected_eng = res['quiz1'][el];
                    this.original_eng = res['quiz1'][el];
                  }
                }
                this.topic_cat_eng_message.status = 'success'
                this.list_of_questions['new_question'] = new Question();
                console.log("this.list_of_questions =>", this.list_of_questions)
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
    quiz['engagement_id'] = this.selected_eng;
    quiz['bucket_list'] = this.differenceFinderBuckets(this.bucket_list, this.main_content.bucket_list);
    quiz['topic'] = this.selected_topic;
    quiz['category'] = this.selected_category;
    quiz['topic_id'] = this.topic_id;
    quiz['topic_soft_delete'] = this.topic_soft_delete;
    quiz['list_of_deleted_questions'] = this.list_of_deleted_questions;
    console.log("=======================FETCHING CHANGES=======================")
    console.log(quiz)
    console.log("==============================================================")
    this._ConnectorService.saveEditedQuiz(this.escapingQuiz(quiz), this.currentUser.email).then(res => {
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
    }
  }

  displayTypeChanger(target, value) {
    if (this.list_of_questions[target]['question_soft_delete']) {
      console.log("disabled????")
      return;
    }
    this.cancelSubmitQuiz()
    if (value === 'textfield input') {
      this.list_of_questions[target]['display_type_description'] = "Manual input";
      this.list_of_questions[target]['question_type_description'] = 'textfield input';
      this.list_of_questions[target]['display_type_id'] = 1;
    } else if (value === 'drag_and_drop') {
      this.list_of_questions[target]['display_type_description'] = value;
      this.list_of_questions[target]['question_type_description'] = value;
      this.list_of_questions[target]['display_type_id'] = 1;
    } else {
      this.list_of_questions[target]['question_type_description'] = "selected input";
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
        delete this.list_of_questions[q_id]['answer_prompt'][a_id];
        delete this.list_of_questions[q_id]['answer_correct'][a_id];
        delete this.list_of_questions[q_id]['answer_soft_delete'][a_id];
        delete this.list_of_questions[q_id]['answer_sort'][a_id];
        return;
      }
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
      if (value == 'add_edit') {
        document.getElementById(`bucket_list_pick_${q_id}`)['value'] = '';
        this.modal_message.title = "Edit/Remove Buckets";

        this.modal_mesage_bool = true;
      } else {
        this.list_of_questions[q_id][q_key][a_id] = value;
      }
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
    }
    let counter = 0;
    let temp_id = 'new0'
    for (let el in this.list_of_questions[id]['answer_prompt']) {
      if (el.includes('new')) {
        temp_id = el
      }
    }
    temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1)
    let new_id = temp_id; // new answer ID
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
      console.log(this.list_of_questions[id])
      console.log("document.getElementById(`bucket_list_pick_${id}`)['value']  =>", document.getElementById(`bucket_list_pick_${id}`))
      // there was a weird bug with the choose bucket dropdown. It just didn't reset the old value after adding a new bucket choice
      // so, by calling "  this.bucketList_reloader[id] = false " we delete the choose bucket dropdown ...
      let that = this;
      setTimeout(function () {
        // ... and put it back after 50 miliseconds
        that.bucketList_reloader[id] = true;
      }, 50)
    }
    catch (error) {
      console.log("ERROR =>", error)
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
    delete this.list_of_questions[id]
    if (this.list_of_new_questions[id]) {
      delete this.list_of_new_questions[id]
    } else {
      this.list_of_deleted_questions[id] = true;
    }
  }
  removeDragAndDropChoice(id, c_id) { // id = question_id, c_id = choice id
    this.cancelSubmitQuiz()
    console.log(id, c_id)
    try {
      delete this.list_of_questions[id]['answer_prompt'][c_id]
      delete this.list_of_questions[id]['answer_correct'][c_id]
      delete this.list_of_questions[id]['answer_soft_delete'][c_id]
      delete this.list_of_questions[id]['answer_bucket_id'][c_id]
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
  bucketListEditor(index, key, value) {
    this.bucket_list[index][key] = value;
    this.bucket_list_changes_bool = (Object.keys(this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)).length > 0);
    console.log("counter =>", this.bucket_list_changes_bool)
  }
  bucketListEditorConfirm() {
    this.bucket_list_confirm_bool = true;
    this.bucket_list_confirm_list = this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)
  }
  bucketListEditorSave() {
    this.cancelSubmitQuiz()
    this.bucket_list_confirm_bool = false;
    this.bucket_list_original = cloneDeep(this.bucket_list);
    this.closeModal();
    this.bucket_list_changes_bool = false;
  }
  bucketListEditorCancel() {
    this.bucket_list_confirm_bool = false;
    this.bucket_list_changes_bool = false;
    this.bucket_list = cloneDeep(this.bucket_list_original);
  }
  bucketListEditorClose() {
    this.bucketListEditorCancel();
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

  // VALIDATORS ========================================================================================================================================================================================

  validateQuestion(id) {
    this.errorHandlerRemover(id)
    let res = {
      'status': "success",
      'body': {}
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
      if (target.display_type_description != "Manual input" && target.display_type_id != 1) {
        if (Object.keys(target.answer_prompt).length < 1) {
          res.body['answers'] = "Please add answers.";
        } else if (Object.keys(target.answer_prompt).length < 2) {
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
    return res;
  }
  validateAllQuestions() {
    let list = this.list_of_questions;
    let res = {};
    for (let el in list) {
      if (el == 'new_question' || el['error_bool']) {
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

  validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
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
      if (arr1[bucket]['bucket_name'] != arr2[bucket]['bucket_name']) {
        if (!res[arr1[bucket]['bucket_id']]) {
          res[arr1[bucket]['bucket_id']] = {
            'index': bucket,
            'bucket_name': arr2[bucket]['bucket_name']
          };
        }
        res[arr1[bucket]['bucket_id']]['New Bucket name'] = arr1[bucket]['bucket_name']
        res[arr1[bucket]['bucket_id']]['Old Bucket name'] = arr2[bucket]['bucket_name']
      }
      if (arr1[bucket]['soft_delete'] != arr2[bucket]['soft_delete']) {
        if (!arr1[bucket]['soft_delete'] && !arr2[bucket]['soft_delete']) {
          continue;
        }
        if (!res[arr1[bucket]['bucket_id']]) {
          res[arr1[bucket]['bucket_id']] = {
            'index': bucket,
            'bucket_name': arr2[bucket]['bucket_name']
          };
        }
        if (arr1[bucket]['soft_delete']) {
          res[arr1[bucket]['bucket_id']]['status'] = "Disabled"
        } else if (!arr1[bucket]['soft_delete']) {
          res[arr1[bucket]['bucket_id']]['status'] = "Enabled"
        }
        res[arr1[bucket]['bucket_id']]['soft_delete'] = arr1[bucket]['soft_delete']
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
    this._ConnectorService.deleteQuiz(this.topic_id, this.currentUser.email).then(res => {
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


  checkState() {
    console.log(this)
    console.log("====================================================================================================================")
    console.log(this.list_of_questions)
    console.log("====================================================================================================================")
  }
}
