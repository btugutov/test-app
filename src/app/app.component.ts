import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'
import { OAuthService } from 'angular-oauth2-oidc';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  response = null;
  user = null;
  user_field = null;
  user_displayName = null;
  display_name = null;
  constructor(private _c: ConnectorService) {
    this.user_field = document.getElementById('WelcomeMessage');
    this.getCurrentUser();
  }
  getCurrentUser() {
    if (!this.user) {
      document.getElementById('SignIn').click();
      console.log("this.user_field =>", this.user_field.value)
      this.display_name = "loool"
      setTimeout(function(){
        this.user_displayName = document.getElementById('user_json')['value'];
        console.log("this.user_displayName =>", this.user_displayName)

      }, 500)
      // while(!this.user_displayName){
      //   this.user_displayName = document.getElementById('user_json')['value'];
      //   console.log("waiting...")
      // }
      console.log("lol")
      this.user = this.user_field.value;
    }
  }
  loginPage() {
    console.log("lol")
  }
  getInfo() {
    this._c.test().then(res => {
      alert(res)
    })
  }
  getOSInfo() {
    this._c.getOSInfo().then(res => {
      console.log(res)
      this.response = res;
    }).catch(function (err) {
      console.log("ERROR =>", err)
      // this.response = err;
    })
  }
}

