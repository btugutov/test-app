import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  private cur_user = new BehaviorSubject([]);
  user = this.cur_user.asObservable();
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
    console.log("THIS IS CONNECTOR! Stroing user as =>", user)
    this.cur_user.next(user);
    return new Promise(function (resolve, reject) {
      that.http.post('/api/store_user', user).subscribe(
        res => {
          resolve(res)
        },
        err => {
          reject(err)
        }
      );
    })
  }
}
