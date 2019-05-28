import { Component, OnInit } from '@angular/core';
import { ConnectorService } from './connector.service'
import { DOCUMENT } from '@angular/common';
declare const Msal: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  popup_error_message = false;
  constructor(private _c: ConnectorService) {
    console.log("localStorage =>",localStorage)
    this._c.user.subscribe(user => {
      if(user && user['displayName']){
        console.log('we got user!! =>', user)
        this.user_obj = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
    })
    this.msalConfig = {
      auth: {
        clientId: "5f40551b-4ad5-4327-aead-858301bb6d90",
        authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    };

    this.graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
    };

    // create a request object for login or token request calls
    // In scenarios with incremental consent, the request object can be further customized
    this.requestObj = {
      scopes: ["user.read"]
    };

    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    console.log("this.myMSALObj =>", this.myMSALObj)
    // Register Callbacks for redirect flow
    // myMSALObj.handleRedirectCallbacks(acquireTokenRedirectCallBack, acquireTokenErrorRedirectCallBack);
    this.myMSALObj.handleRedirectCallback(this.authRedirectCallBack);
    console.log("THIS.user.obj =>", this.user_obj)
    if(!this.user_obj){
      if(localStorage.user){
        this.user_obj = JSON.parse(localStorage.user)
      }else{
        console.log("no user!!!")
        // this.signIn()
      }
    }

  }
  signIn() {
    let that = this;
    this.myMSALObj.loginPopup(this.requestObj).then(function (loginResponse) {
        //Successful login
        // this.showWelcomeMessage();
        //Call MS Graph using the token in the response
        console.log("loginResponse =>", loginResponse)
        that.acquireTokenPopupAndCallMSGraph();
    }).catch(function (error) {
        //Please check the console for errors
        console.log(error);
    });
}

signOut() {
    this.myMSALObj.logout();
}

acquireTokenPopupAndCallMSGraph() {
    // console.log("STEP => acquireTokenPopupAndCallMSGraph()  ")
    let that = this;
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
        // console.log("STEP => myMSALObj.acquireTokenSilent(requestObj).then(function (tokenResponse)", tokenResponse)
        that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function(data){
          that.user_obj = data;
          that._c.storeUser(data)
        });
    }).catch(function (error) {
        console.log(error);
        // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
        // Call acquireTokenPopup(popup window) 
        if (that.requiresInteraction(error.errorCode)) {
            that.myMSALObj.acquireTokenPopup(that.requestObj).then(function (tokenResponse) {
                that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function(data){
                  that.user_obj = data;
                  that._c.storeUser(data)
                });
            }).catch(function (error) {
                console.log(error);
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
  console.log("graphAPICallback(data) =>>>>", data)
  console.log("THIS=>", it)
}

showWelcomeMessage() {
  console.log("myMSALObj.getAccount() =>", this.myMSALObj.getAccount())
  return true;
}
  
  getCurrentUser() {
    if (!this.user) {
      
    }
  }
 acquireTokenRedirectAndCallMSGraph() {
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
        console.log("tokenResponse =>>>>>>>>", tokenResponse)
        this.callMSGraph(this.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function(data){
          console.log("NEW DATA =>", data)
        });
    }).catch(function (error) {
        console.log(error);
        // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
        // Call acquireTokenRedirect
        if (this.requiresInteraction(error.errorCode)) {
            this.myMSALObj.acquireTokenRedirect(this.requestObj);
        }
    });
}

authRedirectCallBack(error, response) {
    if (error) {
        console.log(error);
    } else {
        if (response.tokenType === "access_token") {
            this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, function(data){
              console.log("NEW DATA =>", data)
            });
        } else {
            console.log("token type is:" + response.tokenType);
        }
    }
}

requiresInteraction(errorCode) {
    if (!errorCode || !errorCode.length) {
        return false;
    }
    return errorCode === "consent_required" ||
        errorCode === "interaction_required" ||
        errorCode === "login_required";
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

