import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'test-app';
  response = null;
  user = null;
  constructor(private _c: ConnectorService){
    this.getCurrentUser();
  }
  getCurrentUser(){
    if(!this.user){
      window.location.href = `https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e/oauth2/authorize?response_type=id_token&redirect_uri=https%3A%2F%2Fbaz-angular-nodejs-azure-test.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=c601c2d6-1bf0-4820-a71b-0dd48cc68222&scope=openid+profile+email&response_mode=form_post&nonce=10624e1c5df14a23b719262088807b1e_20190521185133&state=redir%3D%252F3%252Fadmin`
    }
  }
  loginPage(){
    console.log("lol")
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
    this._c.getOSInfo().then(res => {
      console.log(res)
      this.response = res;
    }).catch(function(err){
      console.log("ERROR =>", err)
      // this.response = err;
    })
  }
}

