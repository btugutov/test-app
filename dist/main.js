(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _connector_connector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connector/connector.component */ "./src/app/connector/connector.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");






var routes = [
    { path: '', component: _connector_connector_component__WEBPACK_IMPORTED_MODULE_4__["ConnectorComponent"] },
    { path: 'auth/:display_name', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    // {path: ':other', component: AuthComponent},
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" id=\"singIngBox\">\n    <div class=\"leftContainer\">\n        <h1>Please Sign in</h1>\n        <button id=\"SignIn\" (click)=\"signIn()\">Sign In</button>\n    </div>\n    <div class=\"rightContainer\">\n        <pre id=\"json\"></pre>\n    </div>\n</div>\n<div *ngIf=\"true\">\n    <div style=\"text-align:center\" *ngIf=\"popup_error_message\">\n        <h1 style=\"color: red\">Please allow popups and reload the page.</h1>\n    </div>\n    <div style=\"text-align:center\">\n        <h1 *ngIf=\"user_obj\">\n            Welcome to {{ title }} {{user_obj | json}}!\n        </h1>\n        <h1>{{displayName}}</h1>\n        <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n\n    <div style=\"text-align:center\">\n        <h2>WELCOME TO ANGULAR TESTING. PLEASE STAND-BY </h2>\n        <button (click)='getCurrentUser()' class='btn btn-lg btn-success' type=\"button\">Get your account info</button>\n        <button (click)='getOSInfo()' class='btn btn-lg btn-primary' type=\"button\">Get backendInfo</button>\n        <a [routerLink]=\"['/.auth/login/aad/callback']\" routerLinkActive=\"router-link-active\" class='btn btn-lg btn-secondary'>Go to login page</a>\n        <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" class='btn btn-lg btn-secondary'>Go to home page</a>\n    </div>\n\n    <table class=\"table table-stripped\" *ngIf=\"response\">\n        <thead>\n            <tr>\n                <th scope=\"col\">Key</th>\n                <th scope=\"col\">Value</th>\n            </tr>\n\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of response['req.headers'] | keyvalue\">\n                <td>{{item.key}}</td>\n                <td>@{{item.value}}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <router-outlet></router-outlet>\n</div>\n<h1>USER => {{user}}</h1>\n<div *ngIf=\"user==null\">\n    <h1>No user!</h1>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connector.service */ "./src/app/connector.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_c) {
        var _this = this;
        this._c = _c;
        this.title = 'test-app';
        this.response = null;
        this.user_email = null;
        this.user = null;
        this.user_obj = null;
        this.user_displayName = "";
        this.display_name = null;
        this.token = null;
        this.myMSALObj = null;
        this.requestObj = null;
        this.graphConfig = null;
        this.msalConfig = null;
        this.popup_error_message = false;
        console.log("localStorage =>", localStorage);
        this._c.user.subscribe(function (user) {
            if (user && user['displayName']) {
                console.log('we got user!! =>', user);
                _this.user_obj = user;
                localStorage.setItem('user', JSON.stringify(user));
            }
        });
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
        console.log("this.myMSALObj =>", this.myMSALObj);
        // Register Callbacks for redirect flow
        // myMSALObj.handleRedirectCallbacks(acquireTokenRedirectCallBack, acquireTokenErrorRedirectCallBack);
        this.myMSALObj.handleRedirectCallback(this.authRedirectCallBack);
        console.log("THIS.user.obj =>", this.user_obj);
        if (!this.user_obj) {
            if (localStorage.user) {
                this.user_obj = JSON.parse(localStorage.user);
            }
            else {
                this.signIn();
            }
        }
    }
    AppComponent.prototype.signIn = function () {
        var that = this;
        this.myMSALObj.loginPopup(this.requestObj).then(function (loginResponse) {
            //Successful login
            // this.showWelcomeMessage();
            //Call MS Graph using the token in the response
            console.log("loginResponse =>", loginResponse);
            that.acquireTokenPopupAndCallMSGraph();
        }).catch(function (error) {
            //Please check the console for errors
            console.log(error);
        });
    };
    AppComponent.prototype.signOut = function () {
        this.myMSALObj.logout();
    };
    AppComponent.prototype.acquireTokenPopupAndCallMSGraph = function () {
        // console.log("STEP => acquireTokenPopupAndCallMSGraph()  ")
        var that = this;
        //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
        this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
            // console.log("STEP => myMSALObj.acquireTokenSilent(requestObj).then(function (tokenResponse)", tokenResponse)
            that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
                that.user_obj = data;
                that._c.storeUser(data);
            });
        }).catch(function (error) {
            console.log(error);
            // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
            // Call acquireTokenPopup(popup window) 
            if (that.requiresInteraction(error.errorCode)) {
                that.myMSALObj.acquireTokenPopup(that.requestObj).then(function (tokenResponse) {
                    that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
                        that.user_obj = data;
                        that._c.storeUser(data);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    };
    AppComponent.prototype.callMSGraph = function (theUrl, accessToken, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
                callback(JSON.parse(this.responseText));
        };
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
        xmlHttp.send();
    };
    AppComponent.prototype.graphAPICallback = function (data, it) {
        console.log("graphAPICallback(data) =>>>>", data);
        console.log("THIS=>", it);
    };
    AppComponent.prototype.showWelcomeMessage = function () {
        console.log("myMSALObj.getAccount() =>", this.myMSALObj.getAccount());
        return true;
    };
    AppComponent.prototype.getCurrentUser = function () {
        if (!this.user) {
        }
    };
    AppComponent.prototype.acquireTokenRedirectAndCallMSGraph = function () {
        //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
        this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
            console.log("tokenResponse =>>>>>>>>", tokenResponse);
            this.callMSGraph(this.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
                console.log("NEW DATA =>", data);
            });
        }).catch(function (error) {
            console.log(error);
            // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
            // Call acquireTokenRedirect
            if (this.requiresInteraction(error.errorCode)) {
                this.myMSALObj.acquireTokenRedirect(this.requestObj);
            }
        });
    };
    AppComponent.prototype.authRedirectCallBack = function (error, response) {
        if (error) {
            console.log(error);
        }
        else {
            if (response.tokenType === "access_token") {
                this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, function (data) {
                    console.log("NEW DATA =>", data);
                });
            }
            else {
                console.log("token type is:" + response.tokenType);
            }
        }
    };
    AppComponent.prototype.requiresInteraction = function (errorCode) {
        if (!errorCode || !errorCode.length) {
            return false;
        }
        return errorCode === "consent_required" ||
            errorCode === "interaction_required" ||
            errorCode === "login_required";
    };
    AppComponent.prototype.loginPage = function () {
        console.log("lol");
    };
    AppComponent.prototype.getInfo = function () {
        this._c.test().then(function (res) {
            alert(res);
        });
    };
    AppComponent.prototype.getOSInfo = function () {
        var _this = this;
        this._c.getOSInfo().then(function (res) {
            console.log(res);
            _this.response = res;
        }).catch(function (err) {
            console.log("ERROR =>", err);
            // this.response = err;
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_2__["ConnectorService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _connector_connector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connector/connector.component */ "./src/app/connector/connector.component.ts");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _connector_connector_component__WEBPACK_IMPORTED_MODULE_6__["ConnectorComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [
                _connector_service__WEBPACK_IMPORTED_MODULE_7__["ConnectorService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  auth works!\n</p>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthComponent = /** @class */ (function () {
    function AuthComponent(_route) {
        this._route = _route;
        this._route.paramMap.subscribe(function (params) {
            console.log("params.get('display_name') =>", params.get('display_name'));
        });
        console.log("AUTH IS HERE!");
    }
    AuthComponent.prototype.ngOnInit = function () {
        console.log("SUP");
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/connector.service.ts":
/*!**************************************!*\
  !*** ./src/app/connector.service.ts ***!
  \**************************************/
/*! exports provided: ConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorService", function() { return ConnectorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ConnectorService = /** @class */ (function () {
    function ConnectorService(http) {
        this.http = http;
        this.cur_user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.user = this.cur_user.asObservable();
    }
    ConnectorService.prototype.test = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.get('/api/test').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getOSInfo = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.get('/api/get_system_info_and_print_message').subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.storeUser = function (user) {
        var that = this;
        console.log("THIS IS CONNECTOR! Stroing user as =>", user);
        this.cur_user.next(user);
        return new Promise(function (resolve, reject) {
            that.http.post('/api/store_user', user).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ConnectorService);
    return ConnectorService;
}());



/***/ }),

/***/ "./src/app/connector/connector.component.css":
/*!***************************************************!*\
  !*** ./src/app/connector/connector.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nvbm5lY3Rvci9jb25uZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/connector/connector.component.html":
/*!****************************************************!*\
  !*** ./src/app/connector/connector.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  connector works!\n</p>\n"

/***/ }),

/***/ "./src/app/connector/connector.component.ts":
/*!**************************************************!*\
  !*** ./src/app/connector/connector.component.ts ***!
  \**************************************************/
/*! exports provided: ConnectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorComponent", function() { return ConnectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConnectorComponent = /** @class */ (function () {
    function ConnectorComponent() {
    }
    ConnectorComponent.prototype.ngOnInit = function () {
    };
    ConnectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connector',
            template: __webpack_require__(/*! ./connector.component.html */ "./src/app/connector/connector.component.html"),
            styles: [__webpack_require__(/*! ./connector.component.css */ "./src/app/connector/connector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConnectorComponent);
    return ConnectorComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Bazyr/Desktop/Coding/angular_node_azure_testing/test-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map