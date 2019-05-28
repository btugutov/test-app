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

  storeUser(user){
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


  // MISC FUNCTIONS
  objToToArray(obj){ // object has to be a list
    let result = [];
    for(let el in obj){
      result.push(obj[el])
    }
    return result
  };
}
