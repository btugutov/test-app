import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'
import { OAuthService } from 'angular-oauth2-oidc';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  response = null;
  user = null;
  constructor(private _c: ConnectorService) {
    // var token = this.adalSvc.acquireToken('http://adal.resource.com').subscribe((token: string) => {
    //   console.log(token);
    // });
    // this.getCurrentUser();
  }
  getCurrentUser() {
    if (!this.user) {
      let href = 'https://login.microsoftonline.com/common/oauth2/authorize?response_type=token&client_id=';
      href += '7b070d90-8ae5-46ca-859b-9c67facadc2b&resource=https://graph.windows.net&redirect_uri=http://localhost:3000/auth/';
      window.location.href = href;
      console.log("NO USER!")
      this.user = true;
      // window.location.href = `https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e/oauth2/v2.0/authorize?client_id=6da52693-8941-4d4f-a6b4-fd30e8297952&scope=openid&response_type=id_token`
    }
    console.log("THIS USER =>", this.user)
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

