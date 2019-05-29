import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  private cur_user = new BehaviorSubject(null);
  user = this.cur_user.asObservable();
  private curEng = new BehaviorSubject(null);
  currentEng = this.curEng.asObservable();
  private engs = new BehaviorSubject(null);
  engagements = this.engs.asObservable();

  constructor(private http: HttpClient) { 

  }

  storeUser(user){
    console.log("storeUser(user): user =>", user)
    if(!user){
      return false;
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/store_user', user).subscribe(
        res => {
          that.getAvailableEngagements(res['profile_id']).then(engs => {
            console.log("===========engs =>", engs)
            res['engs'] = engs;
            that.engs.next(that.objToToArray(engs));
            that.cur_user.next(res);
            resolve(res)
          })
        },
        err => {
          reject(err)
        }
      );
    })
  }
  get_User(email) {
    email = {
      'email': email
    }
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.post('/api/get_User', email).subscribe(
        res => {
          console.log("RES =>", res)
          resolve(res)
        },
        err => {
          console.log("ERROR =>", err)
          reject(err)
        }
      );
    })
    console.log("done")
  }
   // ENGAGEMENT FUNCTIONS =========================================================
  getAvailableEngagements(profile_id){
    var that = this;
    profile_id ={
      'profile_id': profile_id
    }
    return new Promise(function (resolve, reject) {
      that.http.post('/api/get_availableEngagements', profile_id).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  };
  // ==============================================================================
    // QUIZ FUNCTIONS ===============================================================
    takeQuiz(eng, email, topic_id, quiz_id){
      let that = this;
      return new Promise(function (resolve, reject) {
        that.http.get(`/api/${eng}/topic/${topic_id}/user/${email}/quiz/${quiz_id}/question/1`).subscribe( // /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        );
      })
    }
  
    submitAnswer(eng_id, answer){
      let that = this;
      return new Promise(function (resolve, reject) {
        that.http.post(`/api/${eng_id}/success`, answer).subscribe( // /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        );
      })
    }
    // ==============================================================================
    // CATEGORIES FUNCTIONS =========================================================
    getAllCategoriesAndTopicsByProfileId(profile_id){
      var that = this;
      return new Promise(function (resolve, reject) {
        let obj = {
          'profile_id': profile_id
        }
        that.http.post('/api/getAllCategoriesAndTopicsByProfileId', obj).subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        );
      })
    }
    getCompletedQuizzesLength(profile_id, eng_id){
      var that = this;
      return new Promise(function (resolve, reject) {
        let obj = {
          'profile_id': profile_id,
          'eng_id': eng_id
        }
        that.http.post('/api/getCompletedQuizzesLength', obj).subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        );
      })
    }
    getCompletedQuizzes(profile_id, eng_id){
      var that = this;
      return new Promise(function (resolve, reject) {
        let obj = {
          'profile_id': profile_id,
          'eng_id': eng_id
        }
        that.http.post('/api/getCompletedQuizzes', obj).subscribe(
          res => {
            resolve(res)
          },
          err => {
            reject(err)
          }
        );
      })
    }
  // ==============================================================================

  // MISC FUNCTIONS
  objToToArray(obj){ // object has to be a list
    let result = [];
    for(let el in obj){
      result.push(obj[el])
    }
    return result
  };
  setMainInfo(obj){
    if(obj.currentUser){
      this.cur_user.next(obj.currentUser);
    }
    if(obj.currentEng){
      this.curEng.next(obj.currentEng);
      console.log('The curEng is updated =>', this.curEng)
    }
    if(obj.engagements){
      this.engs.next(obj.engagements);
    }
  }
  test(){
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.get('/api/test').subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
  getOSInfo(){
    var that = this;
    return new Promise(function (resolve, reject) {
      that.http.get('/api/get_system_info_and_print_message').subscribe(
        res => {
          res['current_engagement'] = that.curEng.value;
          res['current_user'] = that.cur_user.value;
          res['all_engagements'] = that.engs.value;
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
}
