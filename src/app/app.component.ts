import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'test-app';
  constructor(private _c: ConnectorService){

  }
  // private async configureAuth(): Promise<void> {
  //   this.oauthService.loginUrl = 'https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e/oauth2/authorize'; 
  //   this.oauthService.clientId = '1f85af24-72ef-419c-a143-fc21201b1d5d';
  //   this.oauthService.resource = '';
  //   this.oauthService.logoutUrl = '';
  //   this.oauthService.redirectUri = window.location.origin + '/';
  //   this.oauthService.scope = 'openId';
  //   this.oauthService.setStorage(sessionStorage);

  // }
  // async ngOnInit(){
  //   await this.configureAuth();
  //   this.oauthService.tryLogin({});
  //   if(!this.oauthService.getAccessToken()){
  //     await this.oauthService.initImplicitFlow();
  //   }
  // console.log(this.oauthService.getAccessToken());
  // }
  getInfo(){
    this._c.test().then(res => {
      alert(res)
    })
  }
  getOSInfo(){
    var message = prompt("Please enter a message");
    let obj = {
      'message': message
    }
    this._c.getOSInfo(obj).then(res => {
      console.log(res)
      alert(res)
    })
  }
}

