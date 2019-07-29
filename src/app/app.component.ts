import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

declare const Msal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-app';
  response = null;
  user_email = null;
  user = null;
  user_obj = null;
  user_displayName = "";
  display_name = null;
  token = null;
  myMSALObj = null;
  requestObj = null;
  graphConfig = null;
  msalConfig = null;
  popup_error_message = '';
  engagements;
  currentEng;
  cur_url = {};
  constructor(private location: Location, private _r: Router, private _route: ActivatedRoute, private _c: ConnectorService) {

    this._c.user.subscribe(user => {
      if (user) {
        this.user_obj = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
    })
    this._c.currentEng.subscribe(currentEng => {
      if (currentEng) {
        // console.log('we got currentEng!! =>', currentEng)
        this.currentEng = currentEng;
      }
    })
    this._c.engagements.subscribe(engagements => {
      if (engagements) {
        // console.log('we got engagements!! =>', engagements)
        this.engagements = engagements;
      }
    })
    let auth = {
      clientId: "a1cbc100-5eed-4d33-b6fd-68856bb28b34",
      authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
    };
    console.log(`window.location.hostname.split("//") =>`, window.location.hostname.split("//"))
    console.log(`window.location.hostname.split("//")[0].slice(0,14) =>`, window.location.hostname.split("//")[0].slice(0, 14))
    if (window.location.hostname.split("//").length > 0 && window.location.hostname.split("//")[0].slice(0, 14) == "blueprintkadev") {
      console.log("DEV version detected")
      auth = {
        clientId: "bdb30407-5d2e-47e0-a40e-41aead5bc297",
        authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
      }
    } else if (window.location.hostname.split("//").length > 0 && window.location.hostname.split("//")[0].slice(0, 14) == "blueprintka") {
      console.log("Release version detected")
      auth = {
        clientId: "cff4c334-7d7f-4058-a2f5-2a496ddfff05",
        authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
      }
    } else {
      console.log("no version detected")
    }
    this.cur_url = auth;
    this.msalConfig = {
      auth: auth,
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    };
    // 
    // this.msalConfig = { // OLD VERSION
    //   auth: {
    //     clientId: "5f40551b-4ad5-4327-aead-858301bb6d90",
    //     authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
    //   },
    //   cache: {
    //     cacheLocation: "localStorage",
    //     storeAuthStateInCookie: true
    //   }
    // };

    this.graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
    };

    // create a request object for login or token request calls
    // In scenarios with incremental consent, the request object can be further customized
    this.requestObj = {
      scopes: ["user.read"]
    };

    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    // Register Callbacks for redirect flow
    // myMSALObj.handleRedirectCallbacks(acquireTokenRedirectCallBack, acquireTokenErrorRedirectCallBack);
    this.myMSALObj.handleRedirectCallback(this.authRedirectCallBack);
    // console.log("THIS.user.obj =>", this.user_obj)
    if (!this.user_obj) {
      // console.log("let's get user than")
      if (localStorage.user) {
        this.user_obj = JSON.parse(localStorage.user)
        if (this.user_obj) {
          this._c.storeUser(this.user_obj);
        }
      } else {
        // console.log("no user anywhere!!!")
        // this.signIn()
      }
    }

  }

  // ========================= AUTH FUNCTIONS ======================================
  signIn() {
    let that = this;
    this._r.navigateByUrl('/')
    this.myMSALObj.loginPopup(this.requestObj).then(function (loginResponse) {
      that.acquireTokenPopupAndCallMSGraph();
    }).catch(function (error) {
      that.popup_error_message = error;
      // console.log(error);
      that._c.logEvent(error, "ERROR", "app.component", "signIn")
    });
  }

  signOut() {
    this.myMSALObj.logout();
    localStorage['user'] = null;
    this._c.user = null;
  }

  acquireTokenPopupAndCallMSGraph() {
    let that = this;
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
      that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
        that.user_obj = data;
        that._c.storeUser(data)
      });
    }).catch(function (error) {
      this._c.logEvent(error, "ERROR", "app.component", "acquireTokenPopupAndCallMSGraph")
      // console.log(error);
      // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
      // Call acquireTokenPopup(popup window) 
      if (that.requiresInteraction(error.errorCode)) {
        that.myMSALObj.acquireTokenPopup(that.requestObj).then(function (tokenResponse) {
          that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
            // console.log("THIS.USER_OBJECT =>", data)
            that.user_obj = data;
            that._c.storeUser(data)
          });
        }).catch(function (error) {
          // console.log(error);
          this._c.logEvent(error, "ERROR", "app.component", "that.myMSALObj.acquireTokenPopup")
        });
      }
    });
  }
  callMSGraph(theUrl, accessToken, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200)
        callback(JSON.parse(this.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xmlHttp.send();
  }

  graphAPICallback(data, it) {
    // console.log("graphAPICallback(data) =>>>>", data)
    // console.log("THIS=>", it)
  }

  showWelcomeMessage() {
    // console.log("myMSALObj.getAccount() =>", this.myMSALObj.getAccount())
    return true;
  }

  getCurrentUser() {
    if (!this.user) {

    }
  }
  acquireTokenRedirectAndCallMSGraph() {
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
      // console.log("tokenResponse =>>>>>>>>", tokenResponse)
      this.callMSGraph(this.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
        // console.log("NEW DATA =>", data)
      });
    }).catch(function (error) {
      // console.log(error);
      // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
      // Call acquireTokenRedirect
      this._c.logEvent(error, "ERROR", "app.component", "acquireTokenRedirectAndCallMSGraph")
      if (this.requiresInteraction(error.errorCode)) {
        this.myMSALObj.acquireTokenRedirect(this.requestObj);
      }
    });
  }

  authRedirectCallBack(error, response) {
    if (error) {
      // console.log(error);
      this._c.logEvent(error, "ERROR", "app.component", "authRedirectCallBack")
    } else {
      if (response.tokenType === "access_token") {
        this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, function (data) {
          // console.log("NEW DATA =>", data)
        });
      } else {
        // console.log("token type is:" + response.tokenType);
      }
    }
  }

  requiresInteraction(errorCode) {
    if (!errorCode || !errorCode.length) {
      return false;
    }
    this._c.logEvent(errorCode, "ERROR", "app.component", "requiresInteraction")
    return errorCode === "consent_required" ||
      errorCode === "interaction_required" ||
      errorCode === "login_required";
  }

  loginPage() {
    // console.log("lol")
  }

  // ======================== END OF AUTH FUNCTIONS =============

  // ======================== ENGAGEMENT FUNCTIONS ==============

  switchEng(eng_id) {
    let loc = location.href.split('/');
    loc[3] = eng_id;
    let new_loc = '';
    for (let i = 3; i < loc.length; i++) {
      new_loc += "/" + loc[i];
    }
    // console.log(loc)
    // this._r.navigate([new_loc]);
    this._r.navigateByUrl(`/${eng_id}/home`)
  }



  // ======================== END OF ENGAGEMENT FUNCTIONS =======

  // ========================= MISC FUNCTIONS ===================
  getInfo() {
    this._c.test().then(res => {
      alert(res)
    })
  }
  getOSInfo() {
    this._c.getOSInfo().then(res => {
      if (!res['current_user']) {
        res['current_user'] = JSON.parse(localStorage.user)
      }
      // console.log(res)
      this.response = res;
    }).catch(function (err) {
      // console.log("ERROR =>", err)
      // this.response = err;
    })
  }
  ngOnInit() {
    // console.log("App component is here! this.currentEng =>", this.currentEng)
    let loc = location.href.split('/');
    // console.log("THIS LOCATION =>", loc)
    if (loc[3]) {
      if (localStorage['cur_eng'] && this.user_obj) {
        if (localStorage['cur_eng']['engagement_id'] != loc[3]) {
          this._c.getAvailableEngagements(this.user_obj.profile_id, this.user_obj.email).then(res => {
            for (let el in res) {
              if (res[el]['engagement_id'] == loc[3]) {
                this.currentEng = res[el];
                localStorage['cur_eng'] = res[el];
                this._c.setMainInfo({ 'currentEng': res[el] });
                // console.log("NEW ENGAGEMENT WAS DETECTED =>", res[el])
                return;
              }
            }
          })
        }
      } else {
        if (!this.user_obj || !this.user_obj.profile_id) {
          console.log("NO USER!");
          this._r.navigate([''])
          return;
        }
        this._c.getAvailableEngagements(this.user_obj.profile_id, this.user_obj.email).then(res => {
          for (let el in res) {
            if (res[el]['engagement_id'] == loc[3]) {
              this.currentEng = res[el];
              localStorage['cur_eng'] = res[el];
              this._c.setMainInfo({ 'currentEng': res[el] });
              // console.log("SETTING A NEW ENGAGEMENT")
              return;
            }
          }
          alert("ERROR! No SUCH ENGAGEMENT WAS FOUND!")
          this._r.navigateByUrl('/');
        })
          .catch(function (err) {
            this._c.logEvent(err, "ERROR", "app.component", "getAvailableEngagements")
            // console.log( "ERR =>", err)
          })
      }
    }

  }
  //========================= END OF MISC FUNCTIONS =============
}

