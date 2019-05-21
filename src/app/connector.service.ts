import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

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
}
