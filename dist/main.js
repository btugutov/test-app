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

/***/ "./src/app/admin-createquiz/admin-createquiz.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-createquiz/admin-createquiz.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-create-quiz {\n    /* margin-top: 50px; */\n    margin-bottom: 50px;\n    width: 100%;\n}\n\n.admin-create-quiz-title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-create-quiz-body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-create-quiz-body-topic-cat-eng-box {\n    /* max-width: 400px; */\n}\n\n.admin-create-quiz-body-topic-cat-eng-box-select-box {\n    margin: 0px 10px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.thead-light {\n    background: #e9ecef;\n    color: #7f8082;\n}\n\n.select-label {\n    margin-bottom: 0px !important;\n    margin-left: 5px;\n}\n\n.table-row {\n    /* padding: 0px 0px !important; */\n    /* display: ; */\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.create_form_img_box {\n    width: 15%;\n}\n\n.create_form_answer_add {\n    width: 100%;\n    padding: 0px 0px !important;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\n.custom-file-upload {\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n}\n\n.create_form_input_shadow {\n    box-shadow: 0 0 0 1px rgba(179, 182, 185, 0.25);\n    border-radius: 0px;\n}\n\n.create_form_input_shadow:focus {\n    box-shadow: 0 0 0 1px #4f91cd59;\n    /* background-color: none repeat scroll 0 0 rgba(0, 0, 0, 0.01); */\n}\n\n.btn-shadow {\n    box-shadow: 0 0 0 0.2rem rgba(179, 182, 185, 0.25);\n}\n\n.create_form_input_shadowless {\n    box-shadow: none;\n    border-radius: 0px;\n    border: none;\n}\n\n.create_form_input_shadowless:focus {\n    box-shadow: none;\n    border: none;\n    /* background-color: none repeat scroll 0 0 rgba(0, 0, 0, 0.01); */\n}\n\n.answer_order_edit {\n    padding: 0px 0px !important\n}\n\n.btn-success.focus,\n.btn-success:focus {\n    box-shadow: none !important\n}\n\n.focus,\n.active {\n    box-shadow: none !important\n}\n\n.btn:focus {\n    box-shadow: none !important\n}\n\n.btn-image-remove {\n    position: absolute;\n    top: 15px;\n    right: 0%;\n    height: 25px;\n    width: 25px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    cursor: pointer;\n    padding: 0px 0px;\n    text-align: center;\n}\n\n.bucket_list_pick {\n    border-radius: 0px;\n}\n\n.errorHandlerBox {\n    border-bottom: 1px solid silver;\n    padding: 15px 0px !important;\n}\n\n.errorHandler {\n    width: 70%;\n    max-width: 500px;\n    margin: 0px auto;\n}\n\n.create_form_row {\n    border: none !important;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5);\n    margin-top: -120px;\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 700px;\n    /* height: 100px; */\n}\n\n.fixed_header tbody{\n    display:block;\n    overflow:auto;\n    height:200px;\n    width:100%;\n  }\n\n.fixed_header thead tr{\n    display:block;\n  }\n\n.alert-error{\n    color: #ffffff;\n    background-color: #fd5665;\n    border-color: #ff001b;\n  }\n\n.modal-width-full{\n    width: 100% !important;\n    max-width: 100% !important;\n    height: 100% !important;\n}\n\n.modal-img{\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: flex-start;\n}\n\n.border-top{\n    border-top: 1px dotted silver !important;\n}\n\n.table{\n    width: 98%;\n    margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tY3JlYXRlcXVpei9hZG1pbi1jcmVhdGVxdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0NBQStDO0lBQy9DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtFQUFrRTtBQUN0RTs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtFQUNaOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7Q0FDaEIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFDQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1jcmVhdGVxdWl6L2FkbWluLWNyZWF0ZXF1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1jcmVhdGUtcXVpeiB7XG4gICAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRtaW4tY3JlYXRlLXF1aXotdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZG1pbi1jcmVhdGUtcXVpei1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYWRtaW4tY3JlYXRlLXF1aXotYm9keS10b3BpYy1jYXQtZW5nLWJveCB7XG4gICAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cbn1cblxuLmFkbWluLWNyZWF0ZS1xdWl6LWJvZHktdG9waWMtY2F0LWVuZy1ib3gtc2VsZWN0LWJveCB7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udGhlYWQtbGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgY29sb3I6ICM3ZjgwODI7XG59XG5cbi5zZWxlY3QtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50YWJsZS1yb3cge1xuICAgIC8qIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDsgKi9cbiAgICAvKiBkaXNwbGF5OiA7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZV9mb3JtX2ltZ19ib3gge1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbi5jcmVhdGVfZm9ybV9hbnN3ZXJfYWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmVhdGVfZm9ybV9pbnB1dF9zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDE3OSwgMTgyLCAxODUsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvdzpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM0ZjkxY2Q1OTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMCwgMCwgMCwgMC4wMSk7ICovXG59XG5cbi5idG4tc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxNzksIDE4MiwgMTg1LCAwLjI1KTtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvd2xlc3Mge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvd2xlc3M6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgwLCAwLCAwLCAwLjAxKTsgKi9cbn1cblxuLmFuc3dlcl9vcmRlcl9lZGl0IHtcbiAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnRcbn1cblxuLmJ0bi1zdWNjZXNzLmZvY3VzLFxuLmJ0bi1zdWNjZXNzOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcbn1cblxuLmZvY3VzLFxuLmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxufVxuXG4uYnRuLWltYWdlLXJlbW92ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idWNrZXRfbGlzdF9waWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5lcnJvckhhbmRsZXJCb3gge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XG4gICAgcGFkZGluZzogMTVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9ySGFuZGxlciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5jcmVhdGVfZm9ybV9yb3cge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWxfbWVzc2FnZV9ib3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1MDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMTgyLCAxODUsIDAuNSk7XG4gICAgbWFyZ2luLXRvcDogLTEyMHB4O1xufVxuXG4ubW9kYWxfbWVzc2FnZSB7XG4gICAgbWF4LWhlaWdodDogNTJ2aDtcbn1cblxuLm1vZGFsLWVkaXQtcmVtb3ZlLWJ1Y2tldHtcbiAgICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1vZGFsLWVkaXQtcmVtb3ZlLWJ1Y2tldCB0ZHtcbiAgICAvKiBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7ICovXG59XG4ubW9kYWwtZGlhbG9ne1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xufVxuLmZpeGVkX2hlYWRlciB0Ym9keXtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIG92ZXJmbG93OmF1dG87XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLmZpeGVkX2hlYWRlciB0aGVhZCB0cntcbiAgICBkaXNwbGF5OmJsb2NrO1xuICB9XG4gIC5hbGVydC1lcnJvcntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ1NjY1O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmMDAxYjtcbiAgfVxuICAubW9kYWwtd2lkdGgtZnVsbHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWltZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYm9yZGVyLXRvcHtcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIHNpbHZlciAhaW1wb3J0YW50O1xufVxuLnRhYmxle1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-createquiz/admin-createquiz.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-createquiz/admin-createquiz.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between;\n            background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218))\">\n    <div class=\"admin-create-quiz component-gradient element-animation-fadeIn\" *ngIf=\"currentUser && engagements\">\n        <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\"\n            (click)=\"closeModal_background_click($event.target)\" id=\"modal_message_box\">\n            <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\" [ngClass]=\"{\n                            'modal-width-full': modal_message.title == 'Image'\n                        }\">\n                <!-- EDIT/REMOVE BUCKET LIST -->\n                <div class=\"modal-content shadow-lg\" *ngIf=\"modal_message.title == 'Bucket editor'\">\n                    <div>\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalCenteredLabel\">{{modal_message.title}}</h5>\n                            <button type=\"button\" class=\"close\" (click)=\"bucketListEditorClose()\" data-dismiss=\"modal\"\n                                aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body modal-edit-remove-bucket\" style=\"padding: 0px 1rem\">\n                            <table [hidden]=\"bucket_list_confirm_bool\" class=\"table table-borderless table-sm\">\n                                <thead class=\"thead-light\">\n                                    <tr>\n                                        <th class=\"text-center\">ID</th>\n                                        <th>Bucket Title</th>\n                                        <th class=\"text-center\">Delete</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let b of bucket_list | keyvalue\" [ngClass]=\"{\n                                                        'alert-danger': b.value.soft_delete\n                                                    }\">\n                                        <th class=\"\" scope=\"row\">{{b.value.bucket_id}}</th>\n                                        <td>\n                                            <input type=\"text\" [disabled]=\"b.value.soft_delete\"\n                                                class=\"form-control openBucketListSettings_inputs create_form_input_shadow\"\n                                                (change)=\"bucketListEditor( b.key,  'bucket_name',$event.target.value)\"\n                                                value={{b.value.bucket_name}}>\n                                        </td>\n                                        <td class=\"text-center\" [hidden]=\"bucket_list_counter[b.key]\">\n                                            <button (click)=\"bucketListEditor(b.key, 'soft_delete', true)\"\n                                                class='btn btn-outline-danger btn-action-borderless'\n                                                *ngIf=\"!b.value.soft_delete\" style=\"width: 100%\">Delete</button>\n                                        </td>\n                                        <td class=\"text-center alert-warning\" [hidden]=\"!bucket_list_counter[b.key]\">\n                                            <p *ngIf=\"bucket_list_counter[b.key]\"\n                                                style=\"font-size: 12px; margin-bottom: 0px\">\n                                                {{bucket_list_counter[b.key]}} answer(s) </p>\n                                            <p *ngIf=\"bucket_list_counter[b.key]\"\n                                                style=\"font-size: 12px;margin-bottom: 0px\">are using this bucket</p>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div style=\"width: 100%\" [hidden]=\"bucket_list_confirm_bool\">\n                                <div class=\"input-group shadow\">\n                                    <input type=\"text\"\n                                        class=\"form-control create_form_input_shadow openBucketListSettings_inputs\"\n                                        id=\"updatable_bucket_list_newBucket\" placeholder=\"Add a new bucket\"\n                                        value={{bucket_new.bucket_name}}\n                                        (change)=\"bucket_new.bucket_name = $event.target.value\">\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-success btn-action-borderless\"\n                                            id=\"updatable_bucket_list_add\" (click)=\"addNewBucket()\">Add</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <table [hidden]=\"!bucket_list_confirm_bool\" class=\"table table-borderless table-sm \">\n                                <thead class=\"thead-light\">\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>Bucket Name</th>\n                                        <th>Bucket change</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let b of bucket_list_confirm_list | keyvalue\">\n                                        <th scope=\"row\">{{b.key}}</th>\n                                        <td>{{b.value['bucket_name']}}</td>\n                                        <td>\n                                            <p *ngIf=\"b.value['New Bucket name']\">New name: <span\n                                                    class=\"text-success\">{{b.value['New Bucket name']}}</span></p>\n                                            <p *ngIf=\"b.value['status']\">Now is\n                                                <span *ngIf=\"!b.value['soft_delete']\"\n                                                    class=\"text-success\">{{b.value['status']}}</span>\n                                                <span *ngIf=\"b.value['soft_delete']\"\n                                                    class=\"text-danger\">{{b.value['status']}}</span>\n                                            </p>\n                                        </td>\n                                        <td>\n                                            <button (click)=\"bucketUndoOne(b.key, b.value['index'])\"\n                                                class='btn btn-outline-warning btn-action-borderless'>Undo</button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-action-borderless btn-outline-info\"\n                                (click)=\"bucketListEditorClose()\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                    </div>\n                </div>\n                <!-- IMAGE VIEWER -->\n                <div class=\"modal-content shadow-lg\" *ngIf=\"modal_message.title == 'Image'\">\n                    <div>\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalCenteredLabel\">{{modal_message.title}}</h5>\n                            <button type=\"button\" class=\"close\" (click)=\"bucketListEditorClose()\" data-dismiss=\"modal\"\n                                aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body modal-img\" style=\"padding: 0px 1rem\">\n                            <img src=\"{{modal_message.body}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin-create-quiz-title\">\n            <h1>Create a new quiz</h1>\n        </div>\n        <div class=\"admin-create-quiz-body\">\n            <div class=\"admin-create-quiz-body-topic-cat-eng-box\">\n                <div class=\"input-group\">\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Engagement</span>\n                        <select class=\"custom-select shadow\" style=\"border-radius: 0px;\"\n                            (change)=\"valueChanger('engagement', $event.target.value)\">\n                            <option *ngFor=\"let eng of engagements\" [selected]=\"eng.engagement_id==currentEng_id\"\n                                [disabled]=\"eng.soft_delete\" value={{eng.engagement_id}}>{{eng.engagement_name}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Category</span>\n                        <input [disabled]=\"!selected_eng\" style=\"border-radius: 0px;\" class=\"custom-select shadow\"\n                            type=\"text\" id=\"category_selector\" list=\"categories\"\n                            (change)=\"valueChanger('category', $event.target.value)\" />\n                        <datalist id=\"categories\">\n                            <select class=\"custom-select\">\n                                <option *ngFor=\"let c of categories_list | keyvalue\" [value]=\"c.key\"></option>\n                            </select>\n                        </datalist>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Topic</span>\n                        <input [disabled]=\"!selected_category\" style=\"border-radius: 0px;\" id=\"topic_selector\"\n                            class=\"custom-select shadow\" type=\"text\" list=\"topics\"\n                            (change)=\"valueChanger('topic', $event.target.value)\" />\n                        <datalist id=\"topics\">\n                            <select class=\"custom-select\">\n                                <option *ngFor=\"let t of topic_list | keyvalue\" [value]=\"t.value['topic']\">(Already\n                                    exists)\n                                </option>\n                            </select>\n                        </datalist>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Time limit</span>\n                        <select class=\"custom-select shadow\" style=\"border-radius: 0px;\"\n                            (change)=\"valueChanger('time_limit', $event.target.value)\">\n                            <option value=null>No limit</option>\n                            <option value=\"15\">15 minutes</option>\n                            <option value=\"30\">30 minutes</option>\n                            <option value=\"45\">45 minutes</option>\n                            <option value=\"60\">60 minutes</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n\n            <div style=\"margin-top: 15px\">\n                <!-- <button class=\"btn btn-lg shadow\" (click)=\"checkState()\">Check State</button> -->\n                <button class=\"btn btn-lg btn-action-borderless btn-secondary shadow\"\n                    (click)=\"openBucketEditor()\">Add/Edit Buckets</button>\n            </div>\n            <div [hidden]=\"!submit_ready\" class=\"alert alert-success text-center shadow\"\n                style=\"width: 500px; margin: 50px auto;\" role=\"alert\">\n                <strong>All questions are good!</strong>\n            </div>\n            <div *ngIf=\"topic_cat_eng_message.display && !submit_ready\" style=\"margin-top: 15px\">\n                <div *ngIf=\"topic_cat_eng_message.status == 'fail'\" class=\"alert alert-warning shadow\" role=\"alert\">\n                    <strong>Warning!</strong> {{topic_cat_eng_message.message}}\n                </div>\n                <div *ngIf=\"topic_cat_eng_message.status == 'success'\" class=\"alert alert-success shadow\" role=\"alert\">\n                    <strong>Nice!</strong> {{topic_cat_eng_message.message}}\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center\" *ngIf=\"!submit_status.display\" style=\"margin-top: 50px\">\n                <button [hidden]=\"submit_ready\" class=\"btn btn-lg btn-info btn-action-borderless shadow\"\n                    (click)=\"validateQuiz()\">Validate</button>\n                <div [hidden]=\"!submit_ready\" class=\"shadow btn-group btn-group-lg \" role=\"group\">\n                    <button class=\"btn btn-lg btn-success btn-action-borderless\" (click)=\"submitQuiz()\">Submit</button>\n                    <button class=\"btn btn-lg btn-warning btn-action-borderless\"\n                        (click)=\"cancelSubmitQuiz()\">Cancel</button>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\"\n                *ngIf=\"submit_status.display && submit_status.status == 'success'\" style=\"margin-top: 50px; \">\n                <div class=\"alert alert-success shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Well done!</h4>\n                    You successfully created a new quiz.\n                    <br>\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-outline-light btn-action-borderless \"\n                        (click)=\"goBack()\">Click here to go back to the admin portal</a>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\" *ngIf=\"submit_status.display && submit_status.status == 'fail'\"\n                style=\"margin-top: 50px;\">\n                <div class=\"alert alert-error shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">New quiz failed</h4>\n                    Something went wrong on the backend.\n                    {{submit_status.message}}\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-link btn-action-borderless \" (click)=\"goBack()\">Click here\n                        to go back to the admin portal</a>\n                </div>\n            </div>\n        </div>\n\n\n        <div class='admin-create-quiz-form' style=\"margin-top: 25px;\">\n            <table class=\"table table-borderless shadow\">\n                <thead class=\"thead-dark sticky-top\">\n                    <tr style=\"height: 50px\">\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 5%\">\n                            ID/Order\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Question prompt</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Image</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 7%\">Display\n                            Type\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">List of choices/Expected\n                            Answer\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Admin notes</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 5%\">Action\n                        </th>\n                    </tr>\n                </thead>\n                <tbody style=\"background: white\">\n                    <tr *ngFor='let q of list_of_questions | keyvalue'\n                        [ngClass]=\"{'border-top': !q.value['error_bool']}\" class=\"create_form_row\">\n                        <!-- QUESTIONS -->\n                        <td *ngIf=\"!q.value['error_bool']\" class='text-center table-row'>\n                            <p>{{q.key}}</p>\n                            <div>\n                                <input style=\"width: 100%; padding: 0px 0px !important\"\n                                    (change)=\"inputEditor('question_sort', q.key, 'question_sort', null, $event.target.value)\"\n                                    class=\"edit_sort_value form-control create_form_input_shadow\" min=1 max=99\n                                    type=\"number\" value=1 title=\"Set Question Priority\" data-toggle=\"tooltip\"\n                                    data-placement=\"bottom\" title=\"Tooltip on bottom\"\n                                    value=\"{{list_of_questions[q.key]['question_sort']}}\">\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\" style=\"padding: 0px 3px !important;\">\n                            <textarea class='textAreaPrompt form-control create_form_input_shadow'\n                                (change)=\"inputEditor('prompt', q.key, 'prompt', null, $event.target.value)\" rows=4\n                                name='questionPromts' id='questionPromt_{{q.key}}'\n                                value=\"{{q.value['prompt']}}\"></textarea>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\" class='create_form_img_box' align=\"center\">\n                            <div *ngIf=\"!q.value['image']\">\n                                <label for=\"file-upload{{q.key}}\" style=\"width: 100%;\"\n                                    class=\"custom-file-upload btn btn-sm btn-outline-secondary btn-action-borderless\">\n                                    &#8682; Upload Picture\n                                </label>\n                                <input id=\"file-upload{{q.key}}\" type=\"file\"\n                                    (change)=\"inputEditor('img', q.key, 'base64', null, $event.target.files)\"\n                                    accept=\"image/*\" />\n                            </div>\n                            <div *ngIf=\"q.value['image']\" style=\"position: relative\">\n                                <img src=\"{{q.value['base64']}}\" class=\"img-fluid\" (click)=\"imageZoom(q.key)\"\n                                    alt=\"Responsive image\">\n                                <button class=\"btn btn-sm btn-outline-danger btn-image-remove\"\n                                    (click)=\"removeImg(q.key)\">x</button>\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <div class=\"btn-group-vertical btn-group-toggle\" data-toggle=\"buttons\">\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.question_type_id == 2 }\"\n                                    (click)=\"displayTypeChanger(q.key, 'textfield input')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"manual_input\" value=\"textfield input\" checked=\"checked\"> Manual Input</button>\n\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.display_type_id == 1 && q.value.question_type_id == 1 }\"\n                                    (click)=\"displayTypeChanger(q.key, 'Radio')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"radio \" value=\"Radio\"> Radio</button>\n\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.display_type_id == 2 && q.value.question_type_id == 1 }\"\n                                    (click)=\"displayTypeChanger(q.key, 'Checkbox')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew \"\n                                    id=\"checkbox \" value=\"Checkbox \"> Checkbox</button>\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary \"\n                                    [ngClass]=\"{ 'active': q.value.question_type_id == 3  }\"\n                                    (click)=\"displayTypeChanger( q.key, 'drag_and_drop')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"drag_and_drop\" value=\"drag_and_drop\">Drag'n'Drop</button>\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <!-- NOT SELECTED -->\n                            <div *ngIf=\"!q.value['question_type_description']\">\n                                <p align=\"center\" class='text-muted'>Please check type of question.</p>\n                            </div>\n\n\n                            <!-- MANUAL INPUT -->\n                            <div style=\"padding: 0px 3px !important;\" [hidden]=\"q.value['question_type_id'] != 2\">\n                                <textarea\n                                    (change)=\"inputEditor('expected_response', q.key, 'expected_response', null, $event.target.value)\"\n                                    class='textAreaExpectedAnswer form-control create_form_input_shadow' rows=4\n                                    placeholder=\"Expected answer (optional)\"\n                                    value=\"{{q.value['expected_response']}}\"></textarea>\n                            </div>\n\n\n                            <!-- DRAG AND DROP  -->\n                            <div class=\"input-group mt-2\" [hidden]=\"q.value['question_type_id'] != 3\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"input-group mt-1\">\n                                    <input type=\"text\"\n                                        (change)=\"inputEditor('drag_and_drop', q.key, 'answer_prompt', ans.key, $event.target.value)\"\n                                        class=\"form-control bucket_input_edit bucket_input_edit_question_{{q.key}}\"\n                                        id=\"bucket_input_edit_{{q.key}}\" placeholder='Add a choice'\n                                        style=\"padding: 0px;\" value=\"{{ans.value}}\">\n                                    <select list=\"bucket_list\"\n                                        (change)=\"inputEditor('drag_and_drop', q.key, 'answer_bucket_id', ans.key, $event.target.value)\"\n                                        class=\"form-control bucket_list_pick\" id=\"bucket_list_pick_{{q.key}}\"\n                                        placeholder='Bucket' style=\"padding: 0px;\">\n                                        <option disabled style=\"margin-top:8px; border-top:1px solid #666; padding:0;\">\n                                            ____________</option>\n                                        <ng-container *ngFor=\"let b of bucket_list | keyvalue\">\n                                            <option\n                                                [selected]=\"q.value['answer_bucket_id'][ans.key] == b.value.bucket_id\"\n                                                value=\"{{b.value.bucket_id}}\">{{b.value.bucket_name}}</option>\n                                        </ng-container>\n                                    </select>\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class='btn btn-danger'\n                                            (click)=\"removeDragAndDropChoice(q.key, ans.key)\">-</button>\n                                    </div>\n                                </div>\n                                <div class=\"input-group-prepend\">\n                                    <button\n                                        class=\"btn btn-outline-success bucket_input_add_button btn-action-borderless\"\n                                        (click)=\"dragAndDropAdder(q.key)\" style=\"font-size: smaller; padding: 8px;\"\n                                        id='bucket_input_add_button_{{q.key}}' type=\"button\">+</button>\n                                </div>\n                                <input type=\"text\"\n                                    (change)=\"inputEditor('drag_and_drop', q.key, 'temp_bucket_storage', 'answer_input', $event.target.value)\"\n                                    class=\"form-control bucket_input_add\" id=\"bucket_input_add_input_{{q.key}}\"\n                                    placeholder='Add a choice' style=\"padding: 0px;\">\n                                <select *ngIf=\"bucketList_reloader[q.key]\" list=\"bucket_list\" type=\"text\"\n                                    (change)=\"inputEditor('drag_and_drop', q.key, 'temp_bucket_storage', 'bucket_id', $event.target.value)\"\n                                    class=\"form-control bucket_list_pick\" id=\"bucket_list_pick_{{q.key}}\"\n                                    placeholder='Bucket' style=\"padding: 0px;\">\n                                    <option value=\"\" selected disabled class=\"text-muted\">Choose bucket</option>\n                                    <option disabled style=\"margin-top:8px; border-top:1px solid #666; padding:0;\">\n                                        ____________</option>\n                                    <ng-container *ngFor=\"let b of bucket_list | keyvalue\">\n                                        <option *ngIf=\"!b.value.soft_delete\" value=\"{{b.value.bucket_id}}\">\n                                            {{b.value.bucket_name}}</option>\n                                    </ng-container>\n                                </select>\n                            </div>\n\n\n                            <!-- CHECKBOX  -->\n                            <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 2\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\">\n                                    <div>\n                                        <input class=\"answerChoice\" style=\"margin: 5px\"\n                                            (change)=\"inputEditor('answer', q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\"\n                                            [checked]=q.value.answer_correct[ans.key] type=\"checkbox\"\n                                            id=\"checkbox_{{ans.key}}\"\n                                            title=\"Select the right answer. You can chose multiple.\" />\n                                        <label for=\"checkbox_{{ans.key}}\" style=\"margin:0px 0px; width:92%\">\n                                            <div class=\"input-group mb-1\">\n                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                    <input type=\"number\"\n                                                        (change)=\"inputEditor('answer', q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                        class=\"answer_order_edit form-control create_form_input_shadow\"\n                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                        title=\"Set priority of the answer.\">\n                                                </div>\n                                                <input class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                    value='{{ans.value}}'\n                                                    (change)=\"inputEditor('answer', q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                <div class=\"input-group-append\">\n                                                    <button class=\"btn btn-outline-danger buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, true)\"\n                                                        [hidden]=\"q.value['answer_soft_delete'][ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                </div>\n                                            </div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <!-- DROPDOWN/SELECT -->\n                            <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 3\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"custom-radio\">\n                                    <div>\n                                        <input class=\"answerChoice\" style=\"margin: 5px\"\n                                            (change)=\"inputEditor('answer',q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\"\n                                            [checked]=q.value.answer_correct[ans.key] type=\"radio\"\n                                            id=\"checkbox_{{ans.key}}\"\n                                            title=\"Select the right answer. You can chose only one answer.\"\n                                            name=\"radio_answer_for_question_{{q.key}}\" />\n                                        <label for=\"checkbox_{{ans.key}}\" style=\"margin:0px 0px; width:92%\">\n                                            <div class=\"input-group mb-1\">\n                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                    <input type=\"number\"\n                                                        (change)=\"inputEditor('answer',q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                        class=\"form-control answer_order_edit create_form_input_shadow\"\n                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                        title=\"Set priority of the answer.\">\n                                                </div>\n                                                <input class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                    value='{{ans.value}}'\n                                                    (change)=\"inputEditor('answer',q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                <div class=\"input-group-append\">\n                                                    <button class=\"btn btn-outline-danger buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer',q.key, 'answer_soft_delete', ans.key, true)\"\n                                                        [hidden]=\"q.value['answer_soft_delete'][ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                </div>\n                                            </div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <!-- RADIO -->\n                            <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 1\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"custom-radio\">\n                                    <div>\n                                        <input class=\"answerChoice\" style=\"margin: 5px\"\n                                            (change)=\"inputEditor('answer',q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\"\n                                            [checked]=q.value.answer_correct[ans.key] type=\"radio\"\n                                            id=\"checkbox_{{ans.key}}\"\n                                            title=\"Select the right answer. You can chose only one answer.\"\n                                            name=\"radio_answer_for_question_{{q.key}}\" />\n                                        <label for=\"checkbox_{{ans.key}}\" style=\"margin:0px 0px; width:92%\">\n                                            <div class=\"input-group mb-1\">\n                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                    <input type=\"number\"\n                                                        (change)=\"inputEditor('answer',q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                        class=\"form-control answer_order_edit create_form_input_shadow\"\n                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                        title=\"Set priority of the answer.\">\n                                                </div>\n                                                <input class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                    value='{{ans.value}}'\n                                                    (change)=\"inputEditor('answer',q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                <div class=\"input-group-append\">\n                                                    <button class=\"btn btn-outline-danger buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer',q.key, 'answer_soft_delete', ans.key, true)\"\n                                                        [hidden]=\"q.value['answer_soft_delete'][ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                </div>\n                                            </div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <!-- ADD ANSWER FORM -->\n                            <div style=\"padding-right: 3px !important;\"\n                                class=\"input-group mb-3 create_form_input_shadow\"\n                                [hidden]=\"q.value['question_type_id'] != 1\">\n                                <div class=\"input-group-prepend\" style=\"width: 25px\">\n                                    <button class=\"btn btn-success create_form_answer_add btn-action-borderless\"\n                                        id='buttonAddNewAnswer_{{q.key}}' type=\"button\"\n                                        (click)=\"addAnswer(q.key)\">+</button>\n                                </div>\n                                <input type=\"text\"\n                                    class=\"form-control create_form_input_shadowless  edit_quiz_input_text_add\"\n                                    id=\"newAnswerFor_{{q.key}}\" placeholder='Add an answer'\n                                    aria-describedby=\"basic-addon2\">\n                            </div>\n\n                        </td>\n\n                        <!-- ADMIN NOTES -->\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <div class=\"input-group\">\n                                <input class=\"create_form_input_shadow form-control \"\n                                    value=\"{{list_of_questions[q.key]['training_url']}}\" type=\"text\"\n                                    placeholder=\"Confluence link (optional)\"\n                                    (change)=\"inputEditor(null, q.key, 'training_url', null, $event.target.value)\">\n                                <div class=\"input-group-append\">\n                                    <button type='button' class='buttonConfluenceLink btn btn-xs  btn-outline-secondary'\n                                        id='buttonConfluenceLinkForQuestion${id}'\n                                        (click)=\"checkModuleLink(q.key)\">Check</button>\n                                </div>\n                            </div>\n                            <div id='module_field${id}'>\n                                <input class=\"create_form_input_shadow form-control\"\n                                    value=\"{{list_of_questions[q.key]['training_module']}}\"\n                                    (change)=\"inputEditor('training_module', q.key,'training_module', null, $event.target.value)\"\n                                    id='editModuleForQuestionId${id}' type=\"text\" placeholder=\"Module note (optional)\">\n                            </div>\n                            <div class=\"input-group  mb-3\" style=\"width: 185px;\">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text bg-secondary text-white\" id=\"basic-addon3\">Question\n                                        value</span>\n                                </div>\n                                <input class=\"form-control create_form_input_shadow\"\n                                    value=\"{{list_of_questions[q.key]['point_value']}}\"\n                                    (change)=\"inputEditor('point_value', q.key,'point_value', null, $event.target.value)\"\n                                    type=\"number\" min=\"1\" max=\"10\" style=\"padding: 0px 5px;\">\n                            </div>\n                        </td>\n\n                        <!-- ACTION BUTTONS -->\n                        <td style='text-align: center' *ngIf=\"!q.value['error_bool']\">\n                            <div>\n                                <button *ngIf=\"q.key == 'new_question'\"\n                                    class='btn btn-outline-success btn-action-borderless' (click)=\"addQuestion()\"\n                                    style=\"width: 100%\">+ Add</button>\n                                <button *ngIf=\"q.key != 'new_question'\"\n                                    class='btn btn-outline-danger btn-action-borderless' (click)=\"removeQuestion(q.key)\"\n                                    style=\"width: 100%\">Remove</button>\n                            </div>\n                        </td>\n\n                        <!-- ERROR -->\n                        <td colspan=\"7\" *ngIf=\"q.value['error_bool']\" style=\"padding: 10px 10px !important\">\n                            <div class=\"alert alert-warning shadow\" role=\"alert\"\n                                style=\"width: 500px; margin: 0px auto;\">\n                                <button type=\"button\" class=\"close\" (click)=\"errorRemoveById(q.key)\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                                <p class=\"text-center \"><strong>{{q.value['target']}} error(s):</strong></p>\n                                <p *ngFor=\"let error of q.value['errors'] | keyvalue\" class=\"text-center\"\n                                    style=\"margin-bottom: 0px !important\">{{error.value}}</p>\n                            </div>\n                        </td>\n\n\n                    </tr>\n                </tbody>\n            </table>\n            <div [hidden]=\"!submit_ready\" class=\"alert alert-success text-center shadow\"\n                style=\"width: 500px; margin: 50px auto;\" role=\"alert\">\n                <strong>All questions are good!</strong>\n            </div>\n            <div class=\"d-flex justify-content-center\" *ngIf=\"!submit_status.display\" style=\"margin-top: 50px\">\n                <button [hidden]=\"submit_ready\" class=\"btn btn-lg btn-info btn-action-borderless shadow\"\n                    (click)=\"validateQuiz()\">Validate</button>\n                <div [hidden]=\"!submit_ready\" class=\"shadow btn-group btn-group-lg \" role=\"group\">\n                    <button class=\"btn btn-lg btn-success btn-action-borderless\" (click)=\"submitQuiz()\">Submit</button>\n                    <button class=\"btn btn-lg btn-warning btn-action-borderless\"\n                        (click)=\"cancelSubmitQuiz()\">Cancel</button>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\"\n                *ngIf=\"submit_status.display && submit_status.status == 'success'\" style=\"margin-top: 50px; \">\n                <div class=\"alert alert-success shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Well done!</h4>\n                    You successfully created a new quiz.\n                    <br>\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-outline-light btn-action-borderless \"\n                        (click)=\"goBack()\">Click here to go back to the admin portal</a>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\" *ngIf=\"submit_status.display && submit_status.status == 'fail'\"\n                style=\"margin-top: 50px;\">\n                <div class=\"alert alert-error shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">New quiz failed</h4>\n                    Something went wrong on the backend.\n                    {{submit_status.message}}\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-link btn-action-borderless \" (click)=\"goBack()\">Click here\n                        to go back to the admin portal</a>\n                </div>\n            </div>\n\n\n\n        </div>\n\n    </div>\n    <div *ngIf=\"  !currentUser || !engagements \" class=\" loading_box component-gradient element-animation-fadeIn\"\n        style=\" padding-top: 100px;height: 300px;\">\n        <h2>Loading...</h2>\n        <div class=\"spinner-border\" role=\"status\">\n            <span class=\"sr-only\"></span>\n        </div>\n    </div>\n\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row \" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\" style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-createquiz/admin-createquiz.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-createquiz/admin-createquiz.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminCreatequizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCreatequizComponent", function() { return AdminCreatequizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../question */ "./src/app/question.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__);







var AdminCreatequizComponent = /** @class */ (function () {
    function AdminCreatequizComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.currentUser = JSON.parse(localStorage['user']);
        this.categories_list = null;
        this.topic_list = null;
        this.bucket_list = {};
        this.selected_category = null;
        this.selected_topic = null;
        this.selected_eng = null;
        this.submit_ready = false;
        this.topic_cat_eng_message = {
            'display': false,
            'status': "",
            'message': ""
        };
        this.temp_bucket_storage = {
            'answer_input': '',
            'bucket_id': null
        };
        this.list_of_questions = {
            'new_question': new _question__WEBPACK_IMPORTED_MODULE_5__["Question"]()
        };
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': ''
        };
        this.bucket_list_confirm_bool = false;
        this.bucket_list_confirm_list = null;
        this.bucket_list_changes_bool = false;
        this.bucket_list_changes_list = {};
        this.bucketList_reloader = {
            'new_question': true
        };
        this.submit_status = {
            status: '',
            message: '',
            display: false
        };
        this.bucket_list_counter = {};
        this.bucket_new = {
            bucket_name: ''
        };
        this.time_limit = null;
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                _this._ConnectorService.getCatsTopsEngs(user.email).then(function (res) {
                    // console.log("RES =>", res)
                    if (res['status'] == 'success') {
                        _this.main_content = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(res);
                        _this.engagements = res['engs'];
                        _this.main_content['engs'] = _this.sortCategoriesByEngs(_this.orderByEngID(res['engs']), res['categories']);
                        _this.engagements_obj = _this.sortCategoriesByEngs(_this.orderByEngID(res['engs']), res['categories']);
                        _this.categories_list = _this.engagements_obj[_this.currentEng_id]['categories'];
                        // this.bucket_list = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
                        // this.main_content['bucket_list'] = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
                        // this.bucket_list_original = this.bucketListSoftdeleteChecker(cloneDeep(res['bucket_list']));
                        // console.log(this.bucket_list)
                        _this.selected_eng = _this.currentEng_id;
                    }
                }).catch(function (err) {
                    this._ConnectorService.logEvent(err, "ERROR", "AdminCreatequizComponent", "getCatsTopsEngs");
                    // console.log("ERROR =>", err)
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    AdminCreatequizComponent.prototype.ngOnInit = function () {
        this.list_of_questions.new_question.temp_bucket_storage = this.temp_bucket_storage;
    };
    // SUBMIT  ==========================================================================================================================================================================================
    AdminCreatequizComponent.prototype.validateQuiz = function () {
        var errors = this.validateAllQuestions();
        if (Object.keys(errors).length > 0 || this.topic_cat_eng_message.status != 'success') {
            if (this.topic_cat_eng_message.status != 'success') {
                // console.log("ENGAGEMENT_CATEGORY_TOPIC ERROR!")
                this.topic_cat_eng_message.display = true;
                this.topic_cat_eng_message.message = "Please select engagement, category, topic.";
                this.topic_cat_eng_message.status = 'fail';
            }
            // console.log("SUBMIT errors =>", errors)
            for (var error in errors) {
                // console.log("ERROR =>", errors[error]['body'])
                for (var el in errors[error]['body']) {
                    // console.log("EL =>", el)
                    //errors[error]['body'][el]
                    this.errorHandler(error, el, errors[error]['body'][el]);
                }
            }
        }
        else if (Object.keys(this.list_of_questions).length > 1) {
            // console.log("ALL GOOD!")
            this.submit_ready = true;
        }
    };
    AdminCreatequizComponent.prototype.cancelSubmitQuiz = function () {
        this.submit_ready = false;
    };
    AdminCreatequizComponent.prototype.submitQuiz = function () {
        var _this = this;
        // console.log("SUBMITTED1");
        var quiz = {
            questions: this.escapingQuestions(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.list_of_questions)),
            engagement_id: this.selected_eng,
            bucket_list: this.escapingBuckets(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list)),
            topic: this.escapingBuckets(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.selected_topic)),
            category: this.escapingBuckets(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.selected_category)),
            time_limit: this.time_limit
        };
        delete quiz.questions['new_question'];
        this._ConnectorService.createQuiz(quiz, this.currentUser.email).then(function (res) {
            // console.log("res =>", res)
            _this.submit_ready = false;
            if (res['status'] == 'success') {
                _this.submit_status.display = true;
                _this.submit_status.status = 'success';
                // this._ConnectorService.logEvent("Quiz was created", "INFO", "AdminCreatequizComponent", "submitQuiz")
            }
            else {
                _this.submit_status.display = true;
                _this.submit_status.status = 'fail';
                _this.submit_status.message = res['message'];
                _this._ConnectorService.logEvent(res['message'], "ERROR", "AdminCreatequizComponent", "submitQuiz");
            }
        }).catch(function (err) {
            this._ConnectorService.logEvent(err, "ERROR", "AdminCreatequizComponent", "submitQuiz");
        });
    };
    // LISTENERS ========================================================================================================================================================================================
    AdminCreatequizComponent.prototype.valueChanger = function (target, value) {
        // console.log(target, value)
        this.cancelSubmitQuiz();
        if (target == 'engagement') {
            if (this.selected_eng != value) {
                // console.log("this.engagements_obj =>", this.engagements_obj);
                // console.log(`this.engagements_obj[target] =>`, this.engagements_obj[value]);
                this.categories_list = this.engagements_obj[value]['categories'];
                this.topic_list = null;
                this.selected_topic = null;
                this.selected_category = null;
                this.selected_eng = value;
                document.getElementById('category_selector')['value'] = '';
                document.getElementById('topic_selector')['value'] = '';
                this.topic_cat_eng_message.display = false;
            }
        }
        else if (target == 'category') {
            if (this.selected_category != value) {
                this.selected_category = value;
                this.topic_list = this.engagements_obj[this.selected_eng]['categories'][value];
                document.getElementById('topic_selector')['value'] = '';
                this.topic_cat_eng_message.display = false;
            }
        }
        else if (target == 'topic') {
            this.selected_topic = value;
            var check_bool = false;
            for (var el in this.topic_list) {
                if (this.topic_list[el]['topic'] == value) {
                    this.selected_topic = null;
                    document.getElementById('topic_selector')['value'] = '';
                    this.topic_cat_eng_message.display = true;
                    this.topic_cat_eng_message.status = 'fail';
                    this.topic_cat_eng_message.message = 'Such topic already exists. Please give it another name.';
                    check_bool = true;
                    break;
                }
            }
            if (!check_bool) {
                this.topic_cat_eng_message.display = true;
                this.topic_cat_eng_message.status = 'success';
                this.topic_cat_eng_message.message = 'Looks good!';
            }
        }
    };
    AdminCreatequizComponent.prototype.displayTypeChanger = function (target, value) {
        this.cancelSubmitQuiz();
        if (value === 'textfield input') {
            // console.log('text!')
            this.list_of_questions[target]['display_type_description'] = "Manual input";
            this.list_of_questions[target]['question_type_description'] = 'textfield input';
            this.list_of_questions[target]['question_type_id'] = 2;
        }
        else if (value === 'drag_and_drop') {
            this.list_of_questions[target]['display_type_description'] = value;
            this.list_of_questions[target]['question_type_description'] = value;
            this.list_of_questions[target]['question_type_id'] = 3;
            this.list_of_questions[target]['display_type_id'] = 4;
        }
        else {
            // console.log("selected input")
            this.list_of_questions[target]['question_type_description'] = "selected input";
            this.list_of_questions[target]['question_type_id'] = 1;
            if (value === "Checkbox") {
                this.list_of_questions[target]['display_type_description'] = "Checkbox";
                this.list_of_questions[target]['display_type_id'] = 2;
            }
            else if (value === "Dropdown") {
                this.list_of_questions[target]['display_type_description'] = "Dropdown";
                this.list_of_questions[target]['display_type_id'] = 3;
                var one_found = false;
                // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
                // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
                // The loop bellow leaves only first found answer as correct.
                for (var el in this.list_of_questions[target]['answer_correct']) {
                    if (this.list_of_questions[target]['answer_correct'][el]) {
                        if (!one_found) {
                            one_found = true;
                        }
                        else {
                            this.list_of_questions[target]['answer_correct'][el] = false;
                        }
                    }
                }
            }
            else if (value === "Radio") {
                this.list_of_questions[target]['display_type_description'] = "Radio";
                this.list_of_questions[target]['display_type_id'] = 1;
                var one_found = false;
                // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
                // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
                // The loop bellow leaves only first found answer as correct.
                for (var el in this.list_of_questions[target]['answer_correct']) {
                    if (this.list_of_questions[target]['answer_correct'][el]) {
                        if (!one_found) {
                            one_found = true;
                        }
                        else {
                            this.list_of_questions[target]['answer_correct'][el] = false;
                        }
                    }
                }
            }
        }
    };
    AdminCreatequizComponent.prototype.addAnswer = function (target) {
        this.cancelSubmitQuiz();
        // console.log('add answer for =>', target)
        var value = document.getElementById("newAnswerFor_" + target)['value'];
        // console.log("document.getElementById(`newAnswerFor_${target}`) =>", document.getElementById(`newAnswerFor_${target}`) )
        if (value.length < 1) {
            // console.log("empty input");
            return;
        }
        // console.log("Value =>", value)
        document.getElementById("newAnswerFor_" + target)['value'] = '';
        var answers_list = this.list_of_questions[target]['answer_prompt'];
        for (var el in answers_list) {
            if (answers_list[el] == value) {
                this.errorHandler(target, "add_answer", "Such answer already exists");
                return;
            }
        }
        var counter = 0;
        var temp_id = 'new0';
        for (var el in this.list_of_questions[target]['answer_prompt']) {
            if (el.includes('new')) {
                temp_id = el;
            }
        }
        temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1);
        this.list_of_questions[target]['answer_prompt'][temp_id] = value;
        this.list_of_questions[target]['answer_sort'][temp_id] = 1;
        this.list_of_questions[target]['answer_correct'][temp_id] = false;
        this.list_of_questions[target]['answer_soft_delete'][temp_id] = false;
        this.clearErrors(target, 'add_answer');
    };
    AdminCreatequizComponent.prototype.inputEditor = function (target, q_id, q_key, a_id, value) {
        var _this = this;
        this.cancelSubmitQuiz();
        if (target == 'answer') {
            if (q_key == 'answer_soft_delete') {
                delete this.list_of_questions[q_id]['answer_prompt'][a_id];
                delete this.list_of_questions[q_id]['answer_correct'][a_id];
                delete this.list_of_questions[q_id]['answer_soft_delete'][a_id];
                delete this.list_of_questions[q_id]['answer_sort'][a_id];
                return;
            }
            var question_type = this.list_of_questions[q_id]['display_type_description'];
            if ((question_type == 'Dropdown' || question_type == 'Radio') && q_key == 'answer_correct') {
                for (var el in this.list_of_questions[q_id]['answer_correct']) {
                    if (el == a_id) {
                        this.list_of_questions[q_id]['answer_correct'][el] = true;
                    }
                    else {
                        this.list_of_questions[q_id]['answer_correct'][el] = false;
                    }
                }
                return;
            }
            this.list_of_questions[q_id][q_key][a_id] = value;
        }
        else if (target == 'img') { // image uploader
            if (value[0].size > 5242880) {
                this.errorHandler(q_id, "image_uploader", "The image is too heavy. Upload limit is 5mb per image.");
                return;
            }
            this._ConnectorService.imgToBase64(value).then(function (data) {
                _this.list_of_questions[q_id][q_key] = String(data);
                _this.list_of_questions[q_id]['image'] = true;
                _this.clearErrors(q_id, 'image_uploader');
            }).catch(function (err) {
                // console.log("ERROR =>", err)
                this.errorHandler(q_id, "image_uploader", JSON.stringify(err));
            });
        }
        else if (target == 'drag_and_drop') { // drag and drop logic
            if (value == 'add_edit') {
                document.getElementById("bucket_list_pick_" + q_id)['value'] = '';
                this.modal_message.title = "Edit/Remove Buckets";
                this.modal_mesage_bool = true;
            }
            else {
                this.list_of_questions[q_id][q_key][a_id] = value;
            }
        }
        else {
            this.list_of_questions[q_id][q_key] = value;
        }
    };
    AdminCreatequizComponent.prototype.removeImg = function (q_id) {
        this.cancelSubmitQuiz();
        this.list_of_questions[q_id]['base64'] = '';
        this.list_of_questions[q_id]['image'] = false;
    };
    AdminCreatequizComponent.prototype.dragAndDropAdder = function (id) {
        this.cancelSubmitQuiz();
        // console.log(this.list_of_questions[id]['temp_bucket_storage'])
        var input_val = this.list_of_questions[id]['temp_bucket_storage']['answer_input'];
        var bucket_val = this.list_of_questions[id]['temp_bucket_storage']['bucket_id'];
        this.clearErrors(id, 'bucket_input');
        this.clearErrors(id, 'bucket_list');
        if (!input_val || !bucket_val) {
            if (!input_val) {
                this.errorHandler(id, "bucket_input", "Please enter a bucket choice value.");
            }
            if (!bucket_val) {
                this.errorHandler(id, "bucket_list", "Please choose one of the buckets.");
            }
            return;
        }
        var counter = 0;
        var temp_id = 'new0';
        for (var el in this.list_of_questions[id]['answer_prompt']) {
            if (el.includes('new')) {
                temp_id = el;
            }
        }
        temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1);
        var new_id = temp_id; // new answer ID
        try {
            // console.log("this.list_of_questions[id]['answer_prompt'] =>",this.list_of_questions[id]['answer_prompt'])
            this.list_of_questions[id]['answer_prompt'][new_id] = input_val;
            this.list_of_questions[id]['answer_bucket_id'][new_id] = bucket_val;
            this.list_of_questions[id]['answer_soft_delete'][new_id] = false;
            this.list_of_questions[id]['answer_correct'][new_id] = false;
            this.list_of_questions[id]['answer_sort'][new_id] = 1;
            this.list_of_questions[id]['temp_bucket_storage']['answer_input'] = null;
            this.list_of_questions[id]['temp_bucket_storage']['bucket_id'] = null;
            this.bucketList_reloader[id] = false;
            document.getElementById("bucket_input_add_input_" + id)['value'] = '';
            // console.log(this.list_of_questions[id])
            // console.log("document.getElementById(`bucket_list_pick_${id}`)['value']  =>", document.getElementById(`bucket_list_pick_${id}`)  )
            // there was a weird bug with the choose bucket dropdown. It just didn't reset the old value after adding a new bucket choice
            // so, by calling "  this.bucketList_reloader[id] = false " we delete the choose bucket dropdown ...
            var that_1 = this;
            setTimeout(function () {
                // ... and put it back after 50 miliseconds
                that_1.bucketList_reloader[id] = true;
            }, 50);
        }
        catch (error) {
            // console.log("ERROR =>", error)
        }
    };
    AdminCreatequizComponent.prototype.checkModuleLink = function (id) {
        if (this.validURL(this.list_of_questions[id]['training_url'])) {
            this.clearErrors(id, 'training_url');
            window.open(this.list_of_questions[id]['training_url'], "_blank");
        }
        else {
            // console.log("NOT GOOD!")
            this.errorHandler(id, 'training_url', "Confluence link is invalid");
        }
    };
    AdminCreatequizComponent.prototype.addQuestion = function () {
        this.cancelSubmitQuiz();
        var errs = this.validateQuestion("new_question");
        if (errs.status == 'fail') {
            for (var el in errs.body) {
                this.errorHandler('new_question', el, errs.body[el]);
            }
            return;
        }
        else {
            this.errorHandlerRemover("new_question");
        }
        var counter = 1;
        for (var el in this.list_of_questions) {
            // console.log("EL =>>>>", el)
            if (el.includes('added_')) {
                // console.log("added is already here!", el.split('_')[1])
                counter = Number(el.split('_')[1]) + 1;
            }
        }
        var new_id = 'added_' + counter;
        // console.log("New ID =>", new_id)
        this.list_of_questions[new_id] = this.list_of_questions['new_question'];
        this.bucketList_reloader[new_id] = true;
        this.list_of_questions['new_question'] = new _question__WEBPACK_IMPORTED_MODULE_5__["Question"]();
    };
    AdminCreatequizComponent.prototype.removeQuestion = function (id) {
        this.cancelSubmitQuiz();
        // console.log("ID =>", id)
        delete this.list_of_questions[id];
    };
    AdminCreatequizComponent.prototype.removeDragAndDropChoice = function (id, c_id) {
        this.cancelSubmitQuiz();
        // console.log(id, c_id)
        try {
            delete this.list_of_questions[id]['answer_prompt'][c_id];
            delete this.list_of_questions[id]['answer_correct'][c_id];
            delete this.list_of_questions[id]['answer_soft_delete'][c_id];
            delete this.list_of_questions[id]['answer_bucket_id'][c_id];
        }
        catch (err) {
        }
    };
    AdminCreatequizComponent.prototype.inputTest = function (target) {
        // console.log("=============================")
        // console.log(target)
        // console.log("=============================")
    };
    AdminCreatequizComponent.prototype.imageZoom = function (q_id) {
        // console.log(this.list_of_questions[q_id])
        this.modal_message.title = "Image";
        this.modal_message.body = this.list_of_questions[q_id]['base64'];
        this.modal_mesage_bool = true;
    };
    // MODAL FUNCTIONS ==================================================================================================================================================================================
    AdminCreatequizComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
    };
    AdminCreatequizComponent.prototype.openBucketEditor = function () {
        this.bucket_list_counter_updater();
        this.modal_message.title = "Bucket editor";
        this.modal_mesage_bool = true;
        // console.log("OPEN MODAL")
    };
    AdminCreatequizComponent.prototype.bucketListEditor = function (index, key, value) {
        if (key == 'soft_delete') {
            delete this.bucket_list[index];
            return;
        }
        this.bucket_list[index][key] = value;
        // this.bucket_list_changes_bool = ( Object.keys(this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)).length > 0);
        // console.log("counter =>", this.bucket_list_changes_bool)
    };
    AdminCreatequizComponent.prototype.bucketListEditorConfirm = function () {
        this.bucket_list_confirm_bool = true;
        this.bucket_list_confirm_list = this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original);
    };
    AdminCreatequizComponent.prototype.bucketListEditorSave = function () {
        this.cancelSubmitQuiz();
        this.bucket_list_confirm_bool = false;
        this.bucket_list_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list);
        this.closeModal();
        this.bucket_list_changes_bool = false;
    };
    AdminCreatequizComponent.prototype.bucketListEditorCancel = function () {
        this.bucket_list_confirm_bool = false;
        this.bucket_list_changes_bool = false;
        this.bucket_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list_original);
    };
    AdminCreatequizComponent.prototype.bucketListEditorClose = function () {
        this.bucket_list_changes_bool = false;
        this.modal_mesage_bool = false;
    };
    AdminCreatequizComponent.prototype.bucketUndoOne = function (id, index) {
        this.bucket_list[index] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list_original[index]);
        delete this.bucket_list_confirm_list[id];
        if (Object.keys(this.bucket_list_confirm_list).length < 1) {
            this.bucket_list_confirm_bool = false;
            this.bucket_list_confirm_list = null;
        }
    };
    AdminCreatequizComponent.prototype.addNewBucket = function () {
        var new_id = "new";
        var counter = 1;
        for (var el in this.bucket_list) {
            if (this.bucket_list[el]['bucket_name'] == this.bucket_new.bucket_name) {
                return;
            }
            else if (el.includes("new")) {
                counter = Number(el.slice(3)) + 1;
            }
        }
        this.bucket_list_changes_bool = true;
        new_id += counter;
        this.bucket_list[new_id] = {
            bucket_id: new_id,
            bucket_name: this.bucket_new.bucket_name,
            question_id: null,
            quiz_id: null,
            soft_delete: false,
            confirmed: false
        };
        this.bucket_new.bucket_name = "";
    };
    AdminCreatequizComponent.prototype.closeModal_background_click = function (target) {
        // console.log(target.id)
        if (this.modal_message.title == "Image" && target.id == "modal_message_box") {
            this.closeModal();
        }
    };
    // VALIDATORS ========================================================================================================================================================================================
    AdminCreatequizComponent.prototype.validateQuestion = function (id) {
        this.errorHandlerRemover(id);
        var res = {
            'status': "success",
            'body': {}
        };
        var target = this.list_of_questions[id];
        // Question order value
        if (!target.question_sort || target.question_sort < 1) {
            res.body['order number'] = "Invalid order number.";
        }
        // Prompt
        if (!target.prompt || target.prompt.length < 1) {
            res.body['Question prompt'] = "Question prompt is missing.";
        }
        else if (escape(target.prompt).length > 3500) {
            res.body['prompt'] = "Question prompt is too long.";
        }
        // Question type
        if (!target.display_type_description) {
            res.body['type'] = "Please select question display type.";
        }
        // Answers' validation
        if (!res.body['type']) {
            if (target.display_type_description != "Manual input") {
                if (Object.keys(target.answer_prompt).length < 1) {
                    res.body['answers'] = "Please add answers.";
                }
                else if (Object.keys(target.answer_prompt).length < 2) {
                    res.body['answers'] = "Please add more answers.";
                }
                else {
                    for (var el in target.answer_prompt) {
                        if (target.answer_prompt[el].length < 1) {
                            res.body['answers_length'] = 'Some answers have no inputs at all.';
                        }
                    }
                    // drag and drop bucket count
                    if (target.display_type_description == "drag_and_drop") {
                        if (Object.keys(target.answer_bucket_id).length < 2) {
                            res.body['answers'] = "Please add buckets.";
                        }
                    }
                    else {
                        // find number of right answers
                        var counter = 0;
                        for (var el in target.answer_correct) {
                            if (target.answer_correct[el] == true) {
                                counter++;
                            }
                        }
                        if (counter == 0) {
                            res.body['answers'] = "Please mark the right answers.";
                        }
                    }
                }
            }
        }
        // Confluence link
        if (target.training_url && !this.validURL(target.training_url)) {
            res.body['type'] = "Confluence link is invalid. Please check URL syntax.";
        }
        // Question value
        if (!target.point_value) {
            res.body['type'] = "Invalid question value.";
        }
        else if (target.point_value < 1 || target.point_value > 10) {
            res.body['type'] = "Please enter question value between 1 to 10.";
        }
        if (Object.keys(res.body).length > 0) {
            res.status = "fail";
        }
        return res;
    };
    AdminCreatequizComponent.prototype.validateAllQuestions = function () {
        var list = this.list_of_questions;
        var res = {};
        if (Object.keys(list).length <= 1) {
            res['new_question'] = {};
            res['new_question']['body'] = {};
            res['new_question']['body']['no_questions_found'] = "Please add questions.";
            console.log(res);
            return res;
        }
        for (var el in list) {
            if (el == 'new_question' || el['error_bool']) {
                continue;
            }
            this.errorHandlerRemover(el);
            var temp_res = this.validateQuestion(el);
            if (temp_res.status == 'fail') {
                res[el] = temp_res;
            }
        }
        return res;
    };
    //  MISC ============================================================================================================================================================================================
    AdminCreatequizComponent.prototype.errorHandler = function (id, source, message) {
        // console.log(`WE GOT ERROR HERE! ID => ${id}, source => ${source}, message => ${message}`);
        if (!this.list_of_questions[id + "_error"]) {
            this.list_of_questions[id + "_error"] = {
                'error_bool': true,
                'errors': {},
                'target': id
            };
            if (id == 'new_question') {
                this.list_of_questions[id + "_error"]['target'] = "New question form";
            }
            // this.clearErrorMessageTimer(id, 5000)
        }
        this.list_of_questions[id + "_error"]['errors'][source] = message;
    };
    AdminCreatequizComponent.prototype.errorHandlerRemover = function (id) {
        try {
            delete this.list_of_questions[id + '_error'];
        }
        catch (error) {
            // console.log(error)
        }
        return true;
    };
    AdminCreatequizComponent.prototype.errorRemoveById = function (id) {
        try {
            delete this.list_of_questions[id];
        }
        catch (error) {
            // console.log(error)
        }
        return true;
    };
    AdminCreatequizComponent.prototype.clearErrors = function (id, source) {
        try {
            delete this.list_of_questions[id + "_error"]['errors'][source];
            if (Object.keys(this.list_of_questions[id + "_error"]['errors']).length < 1) {
                delete this.list_of_questions[id + "_error"];
            }
        }
        catch (err) {
            // console.log( `clearErrors : error =>`, err)
        }
    };
    AdminCreatequizComponent.prototype.clearErrorMessageTimer = function (id, time) {
        var that = this;
        // console.log('1st this =>', this)
        setTimeout(function () {
            delete that.list_of_questions[id + '_error'];
        }, time);
    };
    AdminCreatequizComponent.prototype.orderByEngID = function (engs) {
        var res = {};
        for (var el in engs) {
            if (engs[el]['soft_delete']) {
                continue;
            }
            res[engs[el]['engagement_id']] = engs[el];
        }
        // console.log(`orderByEngID(engs) =>`, res)
        return res;
    };
    AdminCreatequizComponent.prototype.sortCategoriesByEngs = function (engs, list) {
        // engs and list are arrays
        for (var cat in list) {
            for (var topic in list[cat]) {
                var eng_id = list[cat][topic]['engagement_id'];
                if (!engs[eng_id]) {
                    continue;
                }
                if (!engs[list[cat][topic]['engagement_id']]['categories']) {
                    engs[list[cat][topic]['engagement_id']]['categories'] = {};
                }
                if (!engs[list[cat][topic]['engagement_id']]['categories'][cat]) {
                    engs[list[cat][topic]['engagement_id']]['categories'][cat] = {};
                }
                engs[list[cat][topic]['engagement_id']]['categories'][cat][list[cat][topic]['topic_id']] = list[cat][topic];
            }
        }
        return engs;
    };
    AdminCreatequizComponent.prototype.validURL = function (str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(str);
    };
    AdminCreatequizComponent.prototype.arrayToList = function (list, key, type) {
        var res = {};
        for (var el in list) {
            res[Number(list[el][key])] = list[el];
        }
        return res;
    };
    AdminCreatequizComponent.prototype.bucketListSoftdeleteChecker = function (list) {
        for (var el in list) {
            if (!list[el]['soft_delete']) {
                list[el]['soft_delete'] = false;
            }
        }
        return list;
    };
    AdminCreatequizComponent.prototype.differenceFinderBuckets = function (arr1, arr2) {
        // array1 and array2 should by copies of each other
        var res = {};
        for (var bucket in arr1) {
            if (arr1[bucket]['bucket_name'] != arr2[bucket]['bucket_name']) {
                if (!res[arr1[bucket]['bucket_id']]) {
                    res[arr1[bucket]['bucket_id']] = {
                        'index': bucket,
                        'bucket_name': arr2[bucket]['bucket_name']
                    };
                }
                res[arr1[bucket]['bucket_id']]['New Bucket name'] = arr1[bucket]['bucket_name'];
                res[arr1[bucket]['bucket_id']]['Old Bucket name'] = arr2[bucket]['bucket_name'];
            }
            if (arr1[bucket]['soft_delete'] != arr2[bucket]['soft_delete']) {
                if (!arr1[bucket]['soft_delete'] && !arr2[bucket]['soft_delete']) {
                    continue;
                }
                if (!res[arr1[bucket]['bucket_id']]) {
                    res[arr1[bucket]['bucket_id']] = {
                        'index': bucket,
                        'bucket_name': arr2[bucket]['bucket_name']
                    };
                }
                if (arr1[bucket]['soft_delete']) {
                    res[arr1[bucket]['bucket_id']]['status'] = "Disabled";
                }
                else if (!arr1[bucket]['soft_delete']) {
                    res[arr1[bucket]['bucket_id']]['status'] = "Enabled";
                }
                res[arr1[bucket]['bucket_id']]['soft_delete'] = arr1[bucket]['soft_delete'];
            }
        }
        return res;
    };
    AdminCreatequizComponent.prototype.escapingList = function (list) {
        for (var el in list) {
            list[el] = escape(list[el]);
        }
        return list;
    };
    AdminCreatequizComponent.prototype.escapingBucketList = function (list) {
        for (var el in list) {
            list[el]['bucket_name'] = escape(list[el]['bucket_name']);
        }
        return list;
    };
    AdminCreatequizComponent.prototype.escapingQuiz = function (q) {
        for (var el in q) {
            if (el == "new_question" || (typeof (q[el]) != 'object')) {
                continue;
            }
            else if (el == "bucket_list") {
                q[el] = this.escapingBucketList(q[el]);
                continue;
            }
            // console.log("EL =>", el)
            q[el]['prompt'] = escape(q[el]['prompt']);
            q[el]['training_url'] = escape(q[el]['training_url']);
            q[el]['training_module'] = escape(q[el]['training_module']);
            q[el]['expected_response'] = escape(q[el]['expected_response']);
            for (var a in q[el]['answer_prompt']) {
                q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a]);
            }
        }
        q['topic'] = escape(q['topic']);
        q['category'] = escape(q['category']);
        return q;
    };
    AdminCreatequizComponent.prototype.escapingQuestions = function (q) {
        for (var el in q) {
            if (el == "new_question" || (typeof (q[el]) != 'object')) {
                continue;
            }
            else if (el == "bucket_list") {
                q[el] = this.escapingBucketList(q[el]);
                continue;
            }
            // console.log("EL =>", el)
            q[el]['prompt'] = escape(q[el]['prompt']);
            q[el]['training_url'] = escape(q[el]['training_url']);
            q[el]['training_module'] = escape(q[el]['training_module']);
            q[el]['expected_response'] = escape(q[el]['expected_response']);
            for (var a in q[el]['answer_prompt']) {
                q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a]);
            }
        }
        q['topic'] = escape(q['topic']);
        q['category'] = escape(q['category']);
        return q;
    };
    AdminCreatequizComponent.prototype.escapingBuckets = function (q) {
        for (var el in q) {
            if ((typeof (q[el]) != 'object')) {
                continue;
            }
            q[el]['bucket_name'] = escape(q[el]['bucket_name']);
        }
        return q;
    };
    AdminCreatequizComponent.prototype.bucketListDifferencesFinder = function () {
        var original_list = this.main_content;
        var current_list = this.bucket_list;
    };
    AdminCreatequizComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminCreatequizComponent.prototype.checkState = function () {
        // console.log(this)
    };
    AdminCreatequizComponent.prototype.bucket_list_counter_updater = function () {
        // console.log("bucket_list_counter_updater")
        this.bucket_list_counter = {};
        for (var q in this.list_of_questions) {
            var question = this.list_of_questions[q];
            for (var ans in question['answer_prompt']) {
                if (question['answer_bucket_id'][ans]) {
                    var bucket_id = question['answer_bucket_id'][ans];
                    if (!this.bucket_list_counter[bucket_id]) {
                        this.bucket_list_counter[bucket_id] = 0;
                    }
                    this.bucket_list_counter[bucket_id]++;
                }
            }
        }
    };
    AdminCreatequizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-createquiz',
            template: __webpack_require__(/*! ./admin-createquiz.component.html */ "./src/app/admin-createquiz/admin-createquiz.component.html"),
            styles: [__webpack_require__(/*! ./admin-createquiz.component.css */ "./src/app/admin-createquiz/admin-createquiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminCreatequizComponent);
    return AdminCreatequizComponent;
}());



/***/ }),

/***/ "./src/app/admin-editengagements/admin-editengagements.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin-editengagements/admin-editengagements.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-quiz-permission {\n  width: 100%;\n  margin-top: 50px;\n}\n\n.admin-quiz-permission-title {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n}\n\n.admin-quiz-permission-body {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: center;\n}\n\n.admin-quiz-permission-list_buttons {\n  margin: 0px auto;\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.admin-quiz-permission-by_teams {\n  margin: 50px 50px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\n.admin-quiz-permission-table_box {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.EditQuizPermissions_categoryBox {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  /* z-index: 0;\n    transition: 0.5s;\n    box-shadow: none; */\n  margin: 5px 5px;\n  padding: 5px 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n}\n\n.EditQuizPermissions_categoryBox p {\n  transition: 0.5s;\n}\n\n.EditQuizPermissions_categoryBox:hover {\n  /* z-index: 1;\n    box-shadow: 5px 10px 18px #888888;\n    background: white */\n}\n\n.EditQuizPermissions_categoryBox:hover p {\n  color: #4f91cd;\n}\n\n.modal-content{\n  max-width: 100%;\n}\n\n.modal_message_box {\n  position: fixed;\n  z-index: 50;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(179, 182, 185, 0.5);\n  margin-top: -120px;\n}\n\n.modal_message {\n  max-height: 52vh;\n}\n\n.modal-edit-remove-bucket {\n  height: 50vh !important;\n  overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td {\n  /* padding: 0px 0px !important; */\n}\n\n.modal-dialog {\n  width: 1000px;\n  max-width: 1000px !important;\n  /* height: 100px; */\n}\n\n.toggle-red::before {\n  border-color: #a71212 !important;\n  background-color: #f56f6f !important;\n}\n\ninput[type=\"checkbox\"].switch_1 {\n  font-size: 30px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  width: 2.2em;\n  height: 1em;\n  background: #ddd;\n  border-radius: 3em;\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  transition: all .2s ease-in-out;\n}\n\ninput[type=\"checkbox\"].switch_1:checked {\n  background: #0ebeff;\n}\n\ninput[type=\"checkbox\"].switch_1:after {\n  position: absolute;\n  content: \"\";\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  background: #fff;\n  box-shadow: 0 0 .25em rgba(0, 0, 0, .3);\n  -webkit-transform: scale(.7);\n  transform: scale(.7);\n  left: 0;\n  transition: all .2s ease-in-out;\n}\n\ninput[type=\"checkbox\"].switch_1:checked:after {\n  left: calc(100% - 1em);\n}\n\ninput[type=\"checkbox\"].switch_1:disabled {\n  -webkit-filter: brightness(65%);\n          filter: brightness(65%);\n}\n\n.outerDivFull {\n  margin: 50px;\n}\n\n.switchToggle input[type=checkbox] {\n  height: 0;\n  width: 0;\n  visibility: hidden;\n  position: absolute;\n}\n\n.switchToggle label {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 100px;\n  max-width: 100px !important;\n  height: 30px;\n  background: #d1d1d1;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n}\n\n.switchToggle label:after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 26px;\n  height: 26px;\n  background: #fff;\n  border-radius: 90px;\n  transition: 0.3s;\n}\n\n.switchToggle input:checked+label, .switchToggle input:checked+input+label {\n  background: #3e98d3;\n}\n\n.switchToggle input+label:before, .switchToggle input+input+label:before {\n  content: 'Disabled';\n  position: absolute;\n  top: 5px;\n  left: 35px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle input:checked+label:before, .switchToggle input:checked+input+label:before {\n  content: 'Enabled';\n  position: absolute;\n  top: 5px;\n  left: 10px;\n  width: 26px;\n  height: 26px;\n  border-radius: 90px;\n  transition: 0.3s;\n  text-indent: 0;\n  color: #fff;\n}\n\n.switchToggle input:checked+label:after, .switchToggle input:checked+input+label:after {\n  left: calc(100% - 2px);\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n\n.switchToggle label:active:after {\n  width: 60px;\n}\n\n.toggle-switchArea {\n  margin: 10px 0 10px 0;\n}\n\nthead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n}\n\ninput[type=\"file\"] {\n  display: none;\n}\n\n.btn-image-remove {\n  position: absolute;\n  top: 15px;\n  right: 0%;\n  height: 25px;\n  width: 25px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  cursor: pointer;\n  padding: 0px 0px;\n  text-align: center;\n}\n\n/* ============ COLLAPSE BOX ================== */\n\n.wrap-collabsible {\n  margin-bottom: 1.2rem 0;\n}\n\ninput[type='checkbox'] {\n  display: none;\n}\n\n.lbl-toggle {\n  display: block;\n  font-family: monospace;\n  text-transform: uppercase;\n  cursor: pointer;\n  border-radius: 0px;\n  transition: all 0.25s ease-out;\n}\n\n.lbl-toggle:hover {\n  color: #7C5A0B;\n}\n\n.lbl-toggle::before {\n  content: ' ';\n  display: inline-block;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid #212528;\n  vertical-align: middle;\n  margin-right: .7rem;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n  transition: -webkit-transform .2s ease-out;\n  transition: transform .2s ease-out;\n  transition: transform .2s ease-out, -webkit-transform .2s ease-out;\n}\n\n.toggle:checked+.lbl-toggle::before {\n  -webkit-transform: rotate(90deg) translateX(-3px);\n          transform: rotate(90deg) translateX(-3px);\n}\n\n.collapsible-content {\n  height: 0px;\n  overflow: hidden;\n  transition: max-height .25s ease;\n}\n\n.toggle:checked+.lbl-toggle+.collapsible-content {\n  height: 100%;\n}\n\n.toggle:checked+.lbl-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.content-inner {\n  background: rgba(250, 224, 66, .2);\n  border-bottom: 1px solid rgba(250, 224, 66, .45);\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n  padding: .5rem 1rem;\n}\n\n/* ============== END OF COLLAPSE BOX ============== */\n\n.switchToggle{\n  margin-top: 15px;\n}\n\n.changes_box{\n  padding: 3px 3px;\n  border: 1px solid silver;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZWRpdGVuZ2FnZW1lbnRzL2FkbWluLWVkaXRlbmdhZ2VtZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtFQUFuQix3QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekI7O3VCQUVxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTs7dUJBRXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUViLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBRWhCLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLE9BQU87RUFFUCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSxpREFBaUQ7O0FBRWpEO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsb0NBQW9DO0VBQ3BDLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMENBQWtDO0VBQWxDLGtDQUFrQztFQUFsQyxrRUFBa0M7QUFDcEM7O0FBRUE7RUFDRSxpREFBeUM7VUFBekMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdEQUFnRDtFQUNoRCw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQSxzREFBc0Q7O0FBRXREO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWVkaXRlbmdhZ2VtZW50cy9hZG1pbi1lZGl0ZW5nYWdlbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1xdWl6LXBlcm1pc3Npb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi1ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLWxpc3RfYnV0dG9ucyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi1ieV90ZWFtcyB7XG4gIG1hcmdpbjogNTBweCA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi10YWJsZV9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAvKiB6LWluZGV4OiAwO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYm94LXNoYWRvdzogbm9uZTsgKi9cbiAgbWFyZ2luOiA1cHggNXB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveCBwIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3g6aG92ZXIge1xuICAvKiB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODg4ODtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAqL1xufVxuXG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveDpob3ZlciBwIHtcbiAgY29sb3I6ICM0ZjkxY2Q7XG59XG5cbi5tb2RhbC1jb250ZW50e1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ubW9kYWxfbWVzc2FnZV9ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDUwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTc5LCAxODIsIDE4NSwgMC41KTtcbiAgbWFyZ2luLXRvcDogLTEyMHB4O1xufVxuXG4ubW9kYWxfbWVzc2FnZSB7XG4gIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQge1xuICBoZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm1vZGFsLWVkaXQtcmVtb3ZlLWJ1Y2tldCB0ZCB7XG4gIC8qIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDsgKi9cbn1cblxuLm1vZGFsLWRpYWxvZyB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XG4gIC8qIGhlaWdodDogMTAwcHg7ICovXG59XG5cbi50b2dnbGUtcmVkOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNhNzEyMTIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NmY2ZiAhaW1wb3J0YW50O1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uc3dpdGNoXzEge1xuICBmb250LXNpemU6IDMwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMi4yZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpjaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzBlYmVmZjtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLnN3aXRjaF8xOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAuMjVlbSByZ2JhKDAsIDAsIDAsIC4zKTtcbiAgYm94LXNoYWRvdzogMCAwIC4yNWVtIHJnYmEoMCwgMCwgMCwgLjMpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC43KTtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uc3dpdGNoXzE6Y2hlY2tlZDphZnRlciB7XG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDFlbSk7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpkaXNhYmxlZCB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg2NSUpO1xufVxuXG4ub3V0ZXJEaXZGdWxsIHtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uc3dpdGNoVG9nZ2xlIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zd2l0Y2hUb2dnbGUgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtaW5kZW50OiAtOTk5OXB4O1xuICB3aWR0aDogMTAwcHg7XG4gIG1heC13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDFkMWQxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnN3aXRjaFRvZ2dsZSBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAycHg7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCtsYWJlbCwgLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkK2lucHV0K2xhYmVsIHtcbiAgYmFja2dyb3VuZDogIzNlOThkMztcbn1cblxuLnN3aXRjaFRvZ2dsZSBpbnB1dCtsYWJlbDpiZWZvcmUsIC5zd2l0Y2hUb2dnbGUgaW5wdXQraW5wdXQrbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogJ0Rpc2FibGVkJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgbGVmdDogMzVweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgdGV4dC1pbmRlbnQ6IDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQrbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQraW5wdXQrbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogJ0VuYWJsZWQnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0ZXh0LWluZGVudDogMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCtsYWJlbDphZnRlciwgLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkK2lucHV0K2xhYmVsOmFmdGVyIHtcbiAgbGVmdDogY2FsYygxMDAlIC0gMnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnN3aXRjaFRvZ2dsZSBsYWJlbDphY3RpdmU6YWZ0ZXIge1xuICB3aWR0aDogNjBweDtcbn1cblxuLnRvZ2dsZS1zd2l0Y2hBcmVhIHtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAwO1xufVxuXG50aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4taW1hZ2UtcmVtb3ZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAwJTtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qID09PT09PT09PT09PSBDT0xMQVBTRSBCT1ggPT09PT09PT09PT09PT09PT09ICovXG5cbi53cmFwLWNvbGxhYnNpYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtIDA7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGJsLXRvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0O1xufVxuXG4ubGJsLXRvZ2dsZTpob3ZlciB7XG4gIGNvbG9yOiAjN0M1QTBCO1xufVxuXG4ubGJsLXRvZ2dsZTo6YmVmb3JlIHtcbiAgY29udGVudDogJyAnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMyMTI1Mjg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogLjdyZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dDtcbn1cblxuLnRvZ2dsZTpjaGVja2VkKy5sYmwtdG9nZ2xlOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgtM3B4KTtcbn1cblxuLmNvbGxhcHNpYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuMjVzIGVhc2U7XG59XG5cbi50b2dnbGU6Y2hlY2tlZCsubGJsLXRvZ2dsZSsuY29sbGFwc2libGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvZ2dsZTpjaGVja2VkKy5sYmwtdG9nZ2xlIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5jb250ZW50LWlubmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDIyNCwgNjYsIC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjUwLCAyMjQsIDY2LCAuNDUpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG59XG5cbi8qID09PT09PT09PT09PT09IEVORCBPRiBDT0xMQVBTRSBCT1ggPT09PT09PT09PT09PT0gKi9cblxuLnN3aXRjaFRvZ2dsZXtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5jaGFuZ2VzX2JveHtcbiAgcGFkZGluZzogM3B4IDNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-editengagements/admin-editengagements.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin-editengagements/admin-editengagements.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between;\n            background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218))\">\n\n  <div [hidden]=\"engagements\" class=\" loading_box element-animation-fadeIn\" style=\" margin-top: 100px;height: 300px;\">\n    <h2>Loading...</h2>\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\"></span>\n    </div>\n  </div>\n\n  <div [hidden]=\"!engagements\" class=\"admin-quiz-permission element-animation-fadeIn\" style=\"margin-bottom: 50px\">\n    <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\">\n      <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\">\n        <!-- CHANGE LIST -->\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'list_changes'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">List of\n              changes\n            </h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"height: 50vh !important; overflow-y: scroll;\">\n            <table class=\"table table-borderless\">\n              <thead class=\"thead-dark shadow\">\n                <tr>\n                  <th class=\"text-center\">ID</th>\n                  <th class=\"text-center\">Name and Footer Text</th>\n                  <th class=\"text-center\">Company Info</th>\n                  <th class=\"text-center\">Background</th>\n                  <th class=\"text-center\">Contacts</th>\n                  <th class=\"text-center\">Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let eng of list_changes | keyvalue\" [ngClass]=\"{'alert-success': eng.value.status=='new' }\">\n                  <th scope=\"row\" class=\"\">\n                    <div style=\"display: flex;\n                                            flex-direction: column;\n                                            flex-wrap: nowrap;\n                                            justify-content: flex-start;\n                                            align-items: center;\n                                            align-content: stretch;\">\n                      {{eng.key}}\n                      <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChanges(eng.key, 'remove')\">Cancel</button>\n                    </div>\n                  </th>\n                  <!-- ENGAGEMENT NAME -->\n                  <td>\n                    <div class=\"text-sm-center\"\n                      [ngClass]=\"{' alert alert-warning': eng.value.status=='existed' && eng.value.engagement_name != engagements_original[eng.key].engagement_name}\">\n                      Engagement name\n                      <span\n                        *ngIf=\"eng.value.status=='existed' && eng.value.engagement_name != engagements_original[eng.key].engagement_name\">\n                        <br>\"{{engagements_original[eng.key].engagement_name}}\"<br>\n                        changed to <br></span>\n                      <span class=\" font-weight-bold\">\"{{eng.value.engagement_name}}\"</span>\n                      <button\n                        *ngIf=\"eng.value.status=='existed' && eng.value.engagement_name != engagements_original[eng.key].engagement_name\"\n                        class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChanges(eng.key, 'engagement_name')\">Undo</button>\n                    </div>\n                    <div class=\"text-sm-center \" [ngClass]=\"{\n                      'alert alert-warning': eng.value.status=='existed' && checkValues(engagements_original[eng.key].main_text, eng.value['main_text']),\n                      'alert alert-success': eng.value.status=='new'\n                    }\">\n                      <span\n                        *ngIf=\"eng.value.status=='existed' && checkValues(engagements_original[eng.key].main_text, eng.value['main_text'])\">Footer\n                        text <br>\"{{engagements_original[eng.key].main_text}}\"<br>\n                        changed to <br></span> <span\n                        *ngIf=\"eng.value.status=='existed' && checkValues(engagements_original[eng.key].main_text, eng.value['main_text'])\"\n                        class=\"font-weight-bold\">\"{{eng.value.main_text}}\"</span> <button\n                        *ngIf=\"eng.value.status=='existed' && checkValues(engagements_original[eng.key].main_text, eng.value['main_text'])\"\n                        class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChanges(eng.key, 'main_text')\">Undo</button>\n                      <span *ngIf=\"eng.value.status=='new'\">Footer Text: <span\n                          class=\"font-weight-bold\">\"{{eng.value.main_text}}\"</span></span>\n                    </div>\n\n\n                  </td>\n                  <!-- COMPANY INFO -->\n                  <td>\n                    <div class=\"text-sm-center\">\n                      <div class=\"alert-warning alert\"\n                        *ngIf=\"eng.value.status=='existed' && checkKeyValueDiff(eng.key, 'company_name')\">\n                        Company's Name\n                        <br>\n                        \"{{engagements_original[eng.key].company_name}}\"\n                        <br>\n                        changed to <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_name}}\"</span>\n                        <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChanges(eng.key, 'company_name')\">Undo</button>\n                      </div>\n                      <div class=\"'alert-success alert\" *ngIf=\"eng.value.status=='new'\">\n                        Company's Name <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_name}}\"</span>\n                      </div>\n                    </div>\n                    <div class=\"text-sm-center \">\n                      <div class=\"alert-warning alert\"\n                        *ngIf=\"eng.value.status=='existed' && checkKeyValueDiff(eng.key, 'company_address')\">\n                        Company's Address\n                        <br>\n                        \"{{engagements_original[eng.key].company_address}}\"\n                        <br>\n                        changed to <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_address}}\"</span>\n                        <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChanges(eng.key, 'company_address')\">Undo</button>\n                      </div>\n                      <div class=\"alert-success alert\" *ngIf=\"eng.value.status=='new'\">\n                        Company's Address <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_address}}\"</span>\n                      </div>\n                    </div>\n                    <div class=\"text-sm-center \">\n                      <div class=\"alert-warning alert\"\n                        *ngIf=\"eng.value.status=='existed' && checkKeyValueDiff(eng.key, 'company_phone_number')\">\n                        Company's Phone Number\n                        <br>\n                        \"{{engagements_original[eng.key].company_phone_number}}\"\n                        <br>\n                        changed to <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_phone_number}}\"</span>\n                        <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChanges(eng.key, 'company_phone_number')\">Undo</button>\n                      </div>\n                      <div class=\"alert-success alert\" *ngIf=\"eng.value.status=='new'\">\n                        Company's Address <br>\n                        <span class=\"font-weight-bold\">\"{{eng.value.company_phone_number}}\"</span>\n                      </div>\n                    </div>\n\n                  </td>\n                  <!-- BACKGROUND -->\n                  <td [ngClass]=\"{\n                                            'alert alert-warning': (eng.value.status=='existed' && (engagements_original[eng.key].background != eng.value['background']))\n                                          }\">\n                    <div\n                      *ngIf=\"eng.value.status=='existed' && eng.value['background'] && engagements_original[eng.key].background != eng.value['background']\"\n                      style=\"position: relative\">\n                      <img src=\"{{eng.value['background']}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                      <button class=\"btn btn-sm btn-danger btn-image-remove\" [disabled]=\"eng.value.soft_delete\"\n                        (click)=\"undoChangess(eng.key, 'background')\">x</button>\n                    </div>\n                    <div\n                      *ngIf=\"eng.value.status=='existed' && !eng.value['background'] && engagements_original[eng.key].background\"\n                      class=\"default-background\" style=\"position: relative\">\n                      <!-- <img src=\"{{eng.value['background']}}\" class=\"img-fluid default-background\" alt=\"Responsive image\"> -->\n                      <button class=\"btn btn-sm btn-danger btn-image-remove\" [disabled]=\"eng.value.soft_delete\"\n                        (click)=\"undoChangess(eng.key, 'background')\">x</button>\n                    </div>\n                    <div *ngIf=\"eng.value.status=='new' && eng.value['background']\" style=\"position: relative\">\n                      <img src=\"{{eng.value['background']}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                    </div>\n                    <div *ngIf=\"eng.value.status=='new' && !eng.value['background']\" class=\"default-background\"\n                      style=\"position: relative\">\n                    </div>\n\n                  </td>\n                  <!-- CONTACTS -->\n                  <td>\n                    <div class=\"text-sm-center\">\n                      <div *ngFor=\"let el of eng.value.contacts | keyvalue\">\n                        <span\n                          *ngIf=\"engagements_original[eng.key] && engagements_original[eng.key]['contacts'][el.key]\">\n                          <div *ngIf=\"engagements_original[eng.key]['contacts'][el.key].full_name != el.value.full_name\"\n                            class=\"alert alert-warning\">\n                            {{engagements_original[eng.key]['contacts'][el.key].full_name}} changed name to <span\n                              class=\"font-weight-bold\">{{el.value.full_name}}</span>\n                          </div>\n                          <div *ngIf=\"engagements_original[eng.key]['contacts'][el.key].email != el.value.email\"\n                            class=\"alert alert-warning\">\n                            {{el.value.full_name}}'s email {{engagements_original[eng.key]['contacts'][el.key].email}}\n                            updated to <span class=\"font-weight-bold\">{{el.value.email}}</span>\n                          </div>\n                          <div *ngIf=\"el.value.soft_delete\" class=\"alert alert-warning\">\n                            {{el.value.full_name}} will be <span class=\"font-weight-bold\">removed</span> from the list.\n                          </div>\n                        </span>\n                        <div\n                          *ngIf=\"!engagements_original[eng.key] || !engagements_original[eng.key]['contacts'][el.key]\"\n                          class=\"alert alert-success\">\n                          New contact: {{el.value.full_name}} {{el.value.email}}\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n                  <!-- STATUS -->\n                  <td\n                    [ngClass]=\"{'alert alert-warning': (eng.value.status=='existed' && (engagements_original[eng.key].soft_delete != eng.value.soft_delete))}\">\n                    <p class=\"text-sm-center font-weight-bold\">\n\n                      <span\n                        *ngIf=\"eng.value.status=='existed' && !eng.value.soft_delete && engagements_original[eng.key].soft_delete\">Enabled\n                        <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChanges(eng.key, 'soft_delete')\">Undo</button></span>\n                      <span\n                        *ngIf=\"eng.value.status=='existed' && eng.value.soft_delete && !engagements_original[eng.key].soft_delete\">Disabled\n                        <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChanges(eng.key, 'soft_delete')\">Undo</button></span>\n                      <span *ngIf=\"eng.value.status=='new'\">New </span>\n                    </p>\n                  </td>\n\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"submitChanges()\" class=\"btn btn-success  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Submit changes</button>\n              <button type=\"button\" (click)=\"undoChangesAll()\" class=\"btn btn-danger  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Cancel All</button>\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n        <!-- MESSAGE -->\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'message'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'success'\">\n            <h4 class=\"alert-heading text-center\">Well done!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Your changes have been saved!</p>\n            <button class=\"btn btn-primary btn-action-borderless shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click\n              here to go back to the admin portal</button>\n          </div>\n          <div class=\"alert alert-danger text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'fail'\">\n            <h4 class=\"alert-heading text-center\">Oops!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Something went wrong. Please try again later or contact developers.</p>\n            <button class=\"btn btn-primary btn-action-borderless shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click\n              here to go back to the admin portal</button>\n          </div>\n        </div>\n        <!-- COUNTER -->\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'counter'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\">\n\n            <p>Saving changes {{modal_message.counter_start }} of {{modal_message.counter_end }}</p>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\"\n                [attr.aria-valuenow]=\"modal_message.counter_start\" [attr.aria-valuemin]=\"0\"\n                [attr.aria-valuemax]=\"modal_message.counter_end\"\n                [style.width.%]=\"( (modal_message.counter_start/modal_message.counter_end) * 100)\"></div>\n            </div>\n          </div>\n        </div>\n        <!-- EDIT CONTACTS -->\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'edit_contacts'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">Edit contacts\n              ({{engagements[modal_message.body]['contact_length']}} total)</h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"overflow-y: scroll; height:500px;\">\n            <table class=\"table table-borderless\" style=\"width: 100%;\n              max-width: 700px;\n              margin: 0px auto;\n              box-shadow: 1px 1px 15px silver;\">\n              <thead class=\"thead-dark shadow\">\n                <tr>\n                  <th>Full name</th>\n                  <th>Email</th>\n                  <th style=\"width: 110px;\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let contact of engagements[modal_message.body]['contacts'] | keyvalue\" [ngClass]=\"{\n                    'alert-secondary': contact.value.soft_delete\n                  }\">\n                  <td>\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <input type=\"text\" [disabled]='contact.value.soft_delete'\n                        class=\"form-control input_border-0-radius\"\n                        (input)=\"edit_contact(contact.value.contact_id, modal_message.body, 'full_name', $event.target.value)\"\n                        value=\"{{contact.value.full_name}}\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <input type=\"text\" [disabled]='contact.value.soft_delete'\n                        class=\"form-control input_border-0-radius\"\n                        (input)=\"edit_contact(contact.value.contact_id, modal_message.body, 'email', $event.target.value)\"\n                        value=\"{{contact.value.email}}\">\n                    </div>\n                  </td>\n                  <td style=\"vertical-align: middle\">\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <button *ngIf=\"!contact.value.soft_delete\"\n                        (click)=\"soft_delete_contact(contact.value.contact_id, modal_message.body)\"\n                        class='btn btn-sm btn-outline-danger btn-action-borderless' style=\"width: 100px\">Remove</button>\n                      <button *ngIf=\"contact.value.soft_delete\"\n                        (click)=\"soft_delete_contact(contact.value.contact_id, modal_message.body)\"\n                        class='btn btn-sm btn-warning btn-action-borderless' style=\"width: 100px\">Restore</button>\n                    </div>\n                  </td>\n                </tr>\n                <tr class=\"alert-success\">\n                  <td>\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <input type=\"text\" class=\"form-control input_border-0-radius\"\n                        value=\"{{engagements[modal_message.body]['new_contact']['full_name']}}\"\n                        (input)=\"edit_contact('new', modal_message.body, 'full_name', $event.target.value)\">\n                    </div>\n                  </td>\n                  <td>\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <input type=\"text\" class=\"form-control input_border-0-radius\"\n                        value=\"{{engagements[modal_message.body]['new_contact']['email']}}\"\n                        (input)=\"edit_contact('new', modal_message.body, 'email', $event.target.value)\">\n                    </div>\n                  </td>\n                  <td style=\"vertical-align: middle\">\n                    <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px; padding: 5px 5px;\">\n                      <button\n                        [disabled]=\"engagements[modal_message.body]['new_contact']['email'].length < 3 || engagements[modal_message.body]['new_contact']['full_name'].length < 3\"\n                        class='btn btn-sm btn-success btn-action-borderless'\n                        (click)=\"add_new_contact(modal_message.body)\" style=\"width: 100px\">Add</button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <!-- <button type=\"button\" (click)=\"submitChanges()\" class=\"btn btn-success  btn-action-borderless shadow\"\n                  style=\"margin: 0px 20px\">Change</button> -->\n              <button type=\"button\" (click)=\"contacts_cancel_all_changes(modal_message.body)\"\n                class=\"btn btn-danger  btn-action-borderless shadow\" style=\"margin: 0px 20px\">Cancel all\n                changes</button>\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-title\">\n      <h1>Engagement Editor</h1>\n      <button [hidden]=\"errors_length > 0\" class=\"btn btn-success btn-action-borderless btn-lg shadow\"\n        (click)=\"checkChanges()\">Check Changes</button>\n      <button [hidden]=\"errors_length == 0\" class=\"btn btn-danger btn-action-borderless btn-lg shadow\" disabled>Please\n        fix\n        errors bellow</button>\n\n\n\n\n\n      <div class=\"admin-quiz-permission-table_box\" style=\"padding-top: 25px\">\n\n        <table class=\"table table-borderless shadow-lg\" style=\"width: 1000px;\">\n          <thead class=\"thead-dark shadow-lg\">\n            <tr>\n              <th>ID</th>\n              <th>Engagement</th>\n              <th>Company</th>\n              <th>Categories and topics</th>\n              <th>Background</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody id=\"table_body_target\" style=\"background: white\">\n            <tr style=\"border-top: none !important\" *ngFor=\"let eng of engagements | keyvalue\" [ngClass]=\"{\n                              'alert-secondary': eng.value.soft_delete,\n                              'element-animation-fadeIn': last_added == eng.key,\n                              'alert-info': eng.key == 'new' && eng.value.status == 'new',\n                              'alert-success': eng.key != 'new' && eng.value.status == 'new'\n                            }\">\n              <th *ngIf=\"!eng.value['error_bool']\" scope=\"row\" class=\"font-weight-bold  text-center  tr_string\">\n                {{eng.key}}</th>\n              <td *ngIf=\"!eng.value['error_bool']\" class=\"tr_string\">\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"engagement_name_{{eng.value.engagement_id}}\"\n                    style=\"margin-bottom: 0px; font-size: smaller;\" class=\"text-secondary\">Engagement name:</label>\n                  <input id=\"engagement_name_{{eng.value.engagement_id}}\" class=\"form-control input_border-0-radius\"\n                    type=\"text\" [disabled]=\"eng.value.soft_delete\" placeholder=\"\" minlength=\"2\"\n                    (change)=\"inputChanger(eng.key, 'engagement_name', $event.target)\"\n                    value='{{eng.value.engagement_name}}'>\n                </div>\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"engagement_text_{{eng.value.engagement_id}}\"\n                    style=\"margin-bottom: 0px; font-size: smaller;\" class=\"text-secondary\">Footer text</label>\n                  <input id=\"engagement_text_{{eng.value.engagement_id}}\" class=\"form-control input_border-0-radius\"\n                    type=\"text\" [disabled]=\"eng.value.soft_delete\" placeholder=\"\" minlength=\"2\"\n                    (change)=\"inputChanger(eng.key, 'main_text', $event.target)\" value='{{eng.value.main_text}}'>\n                </div>\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"engagement_contact_{{eng.value.engagement_id}}\"\n                    style=\"margin-bottom: 0px; font-size: smaller;\" class=\"text-secondary\">Support/Assistance</label>\n                  <button id=\"engagement_contact_{{eng.value.engagement_id}}\"\n                    (click)=\"edit_contacts(eng.value.engagement_id)\"\n                    class=\"form-control btn btn-secondary btn-action-borderless\"\n                    [disabled]=\"eng.value.soft_delete || eng.key == 'new'\">\n                    {{eng.value.contact_length}} contact<span *ngIf=\"eng.value.contact_length != 1\">s</span>\n                  </button>\n                </div>\n              </td>\n              <td *ngIf=\"!eng.value['error_bool']\" class=\"tr_string\">\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"company_name_{{eng.value.engagement_id}}\" style=\"margin-bottom: 0px; font-size: smaller;\"\n                    class=\"text-secondary\">Company name:</label>\n                  <input id=\"company_name_{{eng.value.engagement_id}}\" class=\"form-control input_border-0-radius\"\n                    type=\"text\" [disabled]=\"eng.value.soft_delete\" placeholder=\"\" minlength=\"2\"\n                    (change)=\"inputChanger(eng.key, 'company_name', $event.target)\" value='{{eng.value.company_name}}'>\n                </div>\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"company_address_{{eng.value.engagement_id}}\"\n                    style=\"margin-bottom: 0px; font-size: smaller;\" class=\"text-secondary\">Address:</label>\n                  <input id=\"company_address_{{eng.value.engagement_id}}\" class=\"form-control input_border-0-radius\"\n                    type=\"text\" [disabled]=\"eng.value.soft_delete\" placeholder=\"\" minlength=\"2\"\n                    (change)=\"inputChanger(eng.key, 'company_address', $event.target)\"\n                    value='{{eng.value.company_address}}'>\n                </div>\n                <div class=\"form-group\" style=\"margin-bottom: 1px; margin: 0px 2px;\">\n                  <label for=\"company_phone_{{eng.value.engagement_id}}\" style=\"margin-bottom: 0px; font-size: smaller;\"\n                    class=\"text-secondary\">Phone number:</label>\n                  <input id=\"company_phone_{{eng.value.engagement_id}}\" class=\"form-control input_border-0-radius\"\n                    type=\"text\" [disabled]=\"eng.value.soft_delete\" placeholder=\"\" minlength=\"2\"\n                    (change)=\"inputChanger(eng.key, 'company_phone_number', $event.target)\"\n                    value='{{eng.value.company_phone_number}}'>\n                </div>\n              </td>\n              <td *ngIf=\"!eng.value['error_bool']\">\n                <div class=\"wrap-collabsible\">\n                  <input id=\"collapsible_{{eng.value.engagement_name}}\"\n                    [ngClass]=\"{'toggle': eng.value.topics_total_length > 0, 'text-center': eng.value.topics_total_length == 0}\"\n                    type=\"checkbox\">\n                  <label for=\"collapsible_{{eng.value.engagement_name}}\" class=\"lbl-toggle\">\n                    <span *ngIf=\"eng.value.users_total_length>0\">{{eng.value.users_total_length}} user<span\n                        *ngIf=\"eng.value.users_total_length != 1\">s</span>,</span>\n                    <span *ngIf=\"eng.value.categories_length>0\"> {{eng.value.categories_length}} categor<span\n                        *ngIf=\"eng.value.categories_length == 1\">y</span><span\n                        *ngIf=\"eng.value.categories_length != 1\">ies</span></span>\n                    <span *ngIf=\"eng.value.topics_total_length>0\">, and {{eng.value.topics_total_length}} topic<span\n                        *ngIf=\"eng.value.topics_total_length!=1\">s</span></span>\n                    <span *ngIf=\"eng.value.topics_total_length == 0\">No topics and categories</span>\n\n                  </label>\n                  <div class=\"collapsible-content shadow\" *ngIf=\"eng.value.topics_total_length>0\">\n                    <div class=\"content-inner\">\n                      <div class=\"wrap-collabsible\" *ngFor=\"let cat of eng.value.categories | keyvalue\">\n                        <input id=\"collapsible_{{eng.value.engagement_name}}_{{cat.key}}\" class=\"toggle\"\n                          type=\"checkbox\">\n                        <label for=\"collapsible_{{eng.value.engagement_name}}_{{cat.key}}\" class=\"lbl-toggle\">\n                          <span *ngIf=\"cat.value.topics_length > 0\">{{cat.key}} ({{cat.value.topics_length}} topic<span\n                              *ngIf=\"cat.value.topics_length != 1\">s</span>)</span>\n                          <span *ngIf=\"cat.value.topics_length < 1\">No topics</span>\n                        </label>\n                        <div class=\"collapsible-content shadow\">\n                          <div class=\"content-inner \">\n                            <p class=\" small\" [ngClass]=\"{\n                                                        'alert-danger': topic.value.topic_soft_delete\n                                                      }\" style=\"margin-bottom: 0px;\"\n                              *ngFor=\"let topic of cat.value.topics | keyvalue\"><a target=\"_blank\"\n                                [routerLink]=\"topic.value.link\"> #{{topic.value.topic_id}} {{topic.value.name}}\n                                ({{topic.value.users_length}} users have access)</a></p>\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </td>\n              <td *ngIf=\"!eng.value['error_bool']\">\n                <div *ngIf=\"eng.value['background'] && eng.value['background'] != 'null'\" style=\"position: relative\">\n                  <img src=\"{{eng.value['background']}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                  <button class=\"btn btn-sm btn-outline-danger btn-image-remove shadow\"\n                    [disabled]=\"eng.value.soft_delete\" (click)=\"removeImg(eng.key)\">x</button>\n                </div>\n                <div *ngIf=\"!eng.value['background'] || eng.value['background'] == 'null'\" class=\"default-background\"\n                  style=\"position: relative\">\n                  <!-- <img src=\"{{eng.value['background']}}\" class=\"img-fluid default-background\" alt=\"Responsive image\"> -->\n                  <!-- <button class=\"btn btn-sm btn-outline-danger btn-image-remove\" [disabled]=\"eng.value.soft_delete\" (click)=\"removeImg(eng.key)\">x</button> -->\n                </div>\n                <div>\n                  <label for=\"file-upload{{eng.key}}\" style=\"width: 100%;\"\n                    class=\"custom-file-upload btn btn-sm btn-outline-secondary btn-action-borderless\">\n                    &#8682; Upload Picture\n                  </label>\n                  <input id=\"file-upload{{eng.key}}\" type=\"file\" [disabled]=\"eng.value.soft_delete\"\n                    (change)=\"addBackground(eng.key, $event.target.files)\" accept=\"image/*\" />\n                </div>\n              </td>\n              <td *ngIf=\"!eng.value['error_bool']\" align=\"center\" class=\"tr_string\">\n                <div class=\"switchToggle\" *ngIf=\"eng.value.status == 'existed' && eng.key != 'new'\">\n                  <input type=\"checkbox\" id=\"soft_delete_{{eng.key}}\"\n                    (click)=\"actionButton(eng.key,'soft_delete', null)\" [checked]='!eng.value.soft_delete'>\n                  <label for=\"soft_delete_{{eng.key}}\" [ngClass]=\"{\n                                        'shadow': true,\n                                        'switchToggle_checked_green': engagements_original[eng.key]['soft_delete'] && !eng.value.soft_delete,\n                                        'switchToggle_checked_red': !engagements_original[eng.key]['soft_delete'] && eng.value.soft_delete\n                                      }\"></label>\n                </div>\n                <div class=\"switchToggle\" *ngIf=\"eng.value.status == 'new' && eng.key == 'new'\">\n                  <button class='btn btn-success btn-action-borderless shadow' (click)=\"addEng()\"\n                    [disabled]=\"engagements['new']['engagement_name'].length < 2\">Add</button>\n                </div>\n                <div class=\"switchToggle\" *ngIf=\"eng.value.status == 'new' && eng.key != 'new'\">\n                  <button class='btn btn-danger btn-action-borderless' (click)=\"deleteEng(eng.key)\">Delete</button>\n                </div>\n              </td>\n              <td colspan=\"7\" *ngIf=\"eng.value['error_bool']\" style=\"padding: 10px 10px !important\" [ngClass]=\"{\n                'alert-info': eng.value['target'] == 'New question form'\n              }\">{{eng.key}}\n                <div class=\"alert alert-warning shadow\" role=\"alert\" style=\"width: 500px; margin: 0px auto;\">\n                  <p class=\"text-center \"><strong>#{{eng.value['target']}} has error(s):</strong></p>\n                  <p *ngFor=\"let error of eng.value['errors'] | keyvalue\" class=\"text-center\"\n                    style=\"margin-bottom: 0px !important\">{{error.value}}</p>\n                </div>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n        <button [hidden]=\"errors_length > 0\" class=\"btn btn-success btn-action-borderless btn-lg shadow\"\n          (click)=\"checkChanges()\">Check Changes</button>\n      </div>\n    </div>\n  </div>\n  <div\n    style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n    <div class=\"index_row  \" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n      <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n        <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n          <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n          <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n            target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n            style=\"margin-left: 15px\">\n            <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n          </a>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n        <div class=\"text-center\">\n          <p class=\"mt-3\">{{currentEng.main_text}}</p>\n          <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n              href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n        <div class=\"text-center  bp-box shadow\">\n          <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_name}}</h4>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_address}}</h5>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_phone_number}}\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-editengagements/admin-editengagements.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-editengagements/admin-editengagements.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminEditengagementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditengagementsComponent", function() { return AdminEditengagementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);






var AdminEditengagementsComponent = /** @class */ (function () {
    function AdminEditengagementsComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.list_changes = {};
        this.errors_length = 0;
        this.modal_mesage_bool = false;
        this.last_added = null;
        this.last_removed = null;
        this.modal_message = {
            'title': '',
            'body': '',
            'counter_start': 0,
            'counter_end': 0,
        };
        this.new_eng_form = {
            'background': null,
            'categories': {},
            'categories_length': 0,
            'engagement_name': '',
            'company_address': '',
            'company_name': '',
            'company_phone_number': '',
            'soft_delete': false,
            'topics_total_length': 0,
            'users_total_length': 0,
            'users_list': {},
            'status': 'new',
            'engagement_id': null,
            'contact_length': 0,
            'contacts': []
        };
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                if (user.admin_owner || user.admin_permissions) {
                    // console.log("we are fine here!")
                }
                else {
                    _this.goBack();
                }
                _this.currentUser = user;
                var obj = {
                    'email': user.email,
                    'eng_id': _this.currentEng_id
                };
                _this._ConnectorService.getAllEngagements(obj).then(function (res) {
                    console.log("RES =>", res);
                    _this.engagements = _this.engagementFormat(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['body']));
                    _this.engagements_original = _this.engagementFormat(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['body']));
                    _this.engagements['new'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.new_eng_form);
                    _this.engagements_original['new'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.new_eng_form);
                    _this.get_agents_for_engagements();
                    _this.get_contacts_for_engagements();
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    AdminEditengagementsComponent.prototype.ngOnInit = function () {
    };
    // MODAL FUNCTIONS =====================
    AdminEditengagementsComponent.prototype.openModal = function (target, message) {
        this.modal_mesage_bool = true;
        this.modal_message.title = target;
        console.log("OPEN MODAL TARGET, MESSAGE", target, message);
        if (target == 'list_changes') {
        }
        else if (target == 'counter') {
            this.modal_message.counter_end = message;
        }
        else {
            this.modal_message.body = message;
            console.log("this.modal_message", this.modal_message);
        }
    };
    AdminEditengagementsComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
        // this.list_control_changed_bool = false;
    };
    // LISTENERSFUNCTOINS =============
    AdminEditengagementsComponent.prototype.actionButton = function (eng_id, key) {
        // console.log(key == 'soft_delete', !this.engagements[eng_id][key])
        if (key == 'soft_delete' && !this.engagements[eng_id][key]) {
            this.errorHandlerRemover(eng_id);
        }
        else if (key == 'soft_delete' && this.engagements[eng_id][key]) {
            if (this.engagements[eng_id]['engagement_name'].length == 0) {
                this.errorHandler(eng_id, 'engagement_name', 'Please enter a title');
            }
            else if (this.engagements[eng_id]['engagement_name'].length == 1) {
                this.errorHandler(eng_id, 'engagement_name', 'Title is too short');
            }
        }
        this.engagements[eng_id][key] = !this.engagements[eng_id][key];
    };
    AdminEditengagementsComponent.prototype.inputChanger = function (eng_id, key, input) {
        var error_bool = false;
        if (input.value.length == 0) {
            error_bool = true;
            this.errorHandler(eng_id, 'engagement_name', 'Please enter a title');
        }
        else if (input.value.length == 1) {
            error_bool = true;
            this.errorHandler(eng_id, 'engagement_name', 'Title is too short');
        }
        else if (input.value.length > 1) {
            for (var el in this.engagements) {
                if (this.engagements[el]['engagement_name'] == input.value) {
                    error_bool = true;
                    this.errorHandler(eng_id, 'engagement_name', 'Such title is already in use.');
                    break;
                }
            }
        }
        if (!error_bool) {
            this.errorHandlerRemover(eng_id);
        }
        this.engagements[eng_id][key] = input.value;
        // console.log(this.engagements[eng_id][key])
    };
    AdminEditengagementsComponent.prototype.checkChanges = function () {
        this.list_changes = {};
        var cur_list = this.engagements;
        var old_list = this.engagements_original;
        for (var el in cur_list) {
            if (el == 'new') {
                continue;
            }
            if (old_list[el]) {
                if (this.checkValues(cur_list[el]['background'], old_list[el]['background'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                // console.log(cur_list[el]['engagement_name'], old_list[el]['engagement_name'])
                if (this.checkValues(cur_list[el]['engagement_name'], old_list[el]['engagement_name'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkValues(cur_list[el]['soft_delete'], old_list[el]['soft_delete'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkValues(cur_list[el]['company_address'], old_list[el]['company_address'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkValues(cur_list[el]['company_name'], old_list[el]['company_name'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkValues(cur_list[el]['company_phone_number'], old_list[el]['company_phone_number'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkValues(cur_list[el]['main_text'], old_list[el]['main_text'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (!old_list[el]['contacts']) {
                    // console.log(!old_list[el]['contacts'], cur_list[el]['contacts'].length != old_list[el]['contacts'], cur_list[el]['contact_length'].length != old_list[el]['contact_length'])
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
                if (this.checkContacts(cur_list[el]['contacts'], old_list[el]['contacts'])) {
                    this.list_changes[el] = cur_list[el];
                    continue;
                }
            }
            else {
                this.list_changes[el] = cur_list[el];
            }
        }
        if (Object.keys(this.list_changes).length > 0) {
            this.openModal('list_changes', null);
        }
        // console.log(this.list_changes)
    };
    AdminEditengagementsComponent.prototype.checkValues = function (val1, val2) {
        if (val1 != val2) {
            // console.log(val1, val2, "NO MATCH!")
        }
        return (val1 == val2 ? false : true);
    };
    AdminEditengagementsComponent.prototype.checkContacts = function (list1, list2) {
        for (var c in list1) {
            if (list1[c]['status'] == 'new' && list1[c]['soft_delete']) {
                continue;
            }
            // console.log("comparing =>", list1[c], list2[c])
            if (list2[c] && list1[c]['contact_id'] == list2[c]['contact_id']) {
                if (list1[c]['contact_id'] != list2[c]['contact_id']) {
                    return true;
                }
                else if (list1[c]['email'] != list2[c]['email']) {
                    return true;
                }
                else if (list1[c]['full_name'] != list2[c]['full_name']) {
                    return true;
                }
                else if (list1[c]['soft_delete'] != list2[c]['soft_delete']) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    };
    AdminEditengagementsComponent.prototype.undoChanges = function (id, key) {
        if (key == 'remove') {
            if (this.engagements[id]['status'] == "new") {
                delete this.engagements[id];
            }
            else {
                this.engagements[id] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.engagements_original[id]);
            }
            delete this.list_changes[id];
        }
        else {
            this.engagements[id][key] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.engagements_original[id][key]);
            var diff_finder_bool = false;
            if (this.engagements_original[id]['background'] != this.engagements_original[id]['background']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['engagement_name'] != this.engagements_original[id]['engagement_name']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['soft_delete'] != this.engagements_original[id]['soft_delete']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['main_text'] != this.engagements_original[id]['main_text']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['company_name'] != this.engagements_original[id]['company_name']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['company_address'] != this.engagements_original[id]['company_address']) {
                diff_finder_bool = true;
            }
            else if (this.engagements_original[id]['company_phone_number'] != this.engagements_original[id]['company_phone_number']) {
                diff_finder_bool = true;
            }
            if (!diff_finder_bool) {
                // console.log("removing from the change list")
                delete this.list_changes[id];
            }
        }
        if (Object.keys(this.list_changes).length < 1) {
            this.closeModal();
        }
    };
    AdminEditengagementsComponent.prototype.undoChangesAll = function () {
        for (var el in this.list_changes) {
            this.undoChanges(el, 'remove');
        }
    };
    AdminEditengagementsComponent.prototype.addBackground = function (eng_id, value) {
        var _this = this;
        this._ConnectorService.imgToBase64(value).then(function (data) {
            // console.log("ADDING IMAGE FOR =>", eng_id)
            _this.engagements[eng_id]['background'] = String(data);
        }).catch(function (err) {
            // console.log("ERROR =>", err)
            // this.errorHandler(q_id, "image_uploader", JSON.stringify(err))
        });
    };
    AdminEditengagementsComponent.prototype.removeImg = function (eng_id) {
        this.engagements[eng_id]['background'] = '';
    };
    AdminEditengagementsComponent.prototype.addEng = function () {
        if (this.engagements['new'].engagement_name.length == 0) {
            this.errorHandler('new', 'engagement_name', 'Please enter a title');
            return;
        }
        if (this.engagements['new'].engagement_name.length == 1) {
            this.errorHandler('new', 'engagement_name', 'Title is too short');
            return;
        }
        var id = 'added1';
        for (var el in this.engagements) {
            // console.log("EL =>", el, el.slice(0,5))
            if (el.slice(0, 5) == 'added') {
                // console.log("awesome!")
                id = 'added' + (Number(el.slice(5)) + 1);
                // console.log("SETTING THIS ID =>", id)
            }
        }
        this.errorHandlerRemover('new');
        // console.log("new id! =>", id)
        this.last_added = id;
        if (this.engagements[id]) {
            // console.log("FAILED!");
            return;
        }
        this.engagements[id] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.engagements['new']);
        this.engagements[id]['engagement_id'] = id;
        this.engagements['new'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.new_eng_form);
    };
    AdminEditengagementsComponent.prototype.deleteEng = function (eng_id) {
        // this.last_removed = eng_id
        delete this.engagements[eng_id];
        this.errorHandlerRemover(eng_id);
        this.last_added = null;
    };
    AdminEditengagementsComponent.prototype.submitChanges = function () {
        var _this = this;
        var obj = {
            'engs': this.list_changes,
            'email': this.currentUser.email,
        };
        console.log("submitChanges =>", obj);
        this._ConnectorService.saveEngagements(obj).then(function (result) {
            if (result) {
                _this.closeModal();
                _this.list_changes = {};
                _this.openModal('message', 'success');
                _this._ConnectorService.getAllEngagements(obj).then(function (res) {
                    // console.log("RES =>", res);
                    _this.engagements = _this.engagementFormat(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['body']));
                    _this.engagements_original = _this.engagementFormat(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['body']));
                    _this.engagements['new'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.new_eng_form);
                    _this.engagements_original['new'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.new_eng_form);
                    _this.get_agents_for_engagements();
                    _this.get_contacts_for_engagements();
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
        });
    };
    // EDIT CONTACTS ======================
    AdminEditengagementsComponent.prototype.edit_contacts = function (eng_id) {
        this.closeModal();
        this.engagements[eng_id]['new_contact'] = {
            full_name: '',
            email: '',
            soft_delete: false,
            status: 'new',
            engagement_id: eng_id
        };
        this.openModal('edit_contacts', eng_id);
    };
    AdminEditengagementsComponent.prototype.edit_contact = function (contact_id, eng_id, key, value) {
        if (contact_id == 'new') {
            this.engagements[eng_id]['new_contact'][key] = value;
        }
        else {
            var contacts = this.engagements[eng_id]['contacts'];
            for (var el in contacts) {
                if (contacts[el]['contact_id'] == contact_id) {
                    contacts[el][key] = value;
                    break;
                }
            }
        }
    };
    AdminEditengagementsComponent.prototype.soft_delete_contact = function (contact_id, eng_id) {
        var target = this.engagements[eng_id]['contacts'];
        for (var el in target) {
            if (target[el]['contact_id'] == contact_id) {
                if (target[el]['soft_delete']) {
                    this.engagements[eng_id]['contact_length']++;
                }
                else {
                    this.engagements[eng_id]['contact_length']--;
                }
                target[el]['soft_delete'] = !target[el]['soft_delete'];
                break;
            }
        }
    };
    AdminEditengagementsComponent.prototype.add_new_contact = function (eng_id) {
        var target = this.engagements[eng_id];
        var new_id = 1;
        for (var el in target['contacts']) {
            if (typeof (target['contacts'][el]['contact_id']) == 'string' && target['contacts'][el]['contact_id'].includes('new')) {
                new_id++;
            }
        }
        target['new_contact']['contact_id'] = "new" + new_id;
        target['contacts'].push(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(target['new_contact']));
        this.engagements[eng_id]['new_contact'] = {
            full_name: '',
            email: '',
            soft_delete: false,
            status: 'new',
            engagement_id: eng_id
        };
        target['contact_length']++;
        console.log(target['contacts']);
    };
    AdminEditengagementsComponent.prototype.contacts_cancel_all_changes = function (eng_id) {
        if (!this.engagements_original[eng_id]) {
            this.engagements[eng_id]['contacts'] = [];
            this.engagements[eng_id]['contact_length'] = 0;
        }
        else {
            var old_values = this.engagements_original[eng_id]['contacts'];
            console.log("old_values", old_values);
            this.engagements[eng_id]['contacts'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.engagements_original[eng_id]['contacts']);
            console.log("this.engagements[eng_id] =>", this.engagements[eng_id]);
            this.engagements[eng_id]['contact_length'] = this.engagements[eng_id]['contacts'].length;
        }
    };
    // MISC FUNCTIONS ======================
    AdminEditengagementsComponent.prototype.checkState = function () {
        this.engagements['new'] = this.new_eng_form;
        // console.log(this)
    };
    AdminEditengagementsComponent.prototype.sortType = function (key) {
        // console.log(key)
    };
    AdminEditengagementsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminEditengagementsComponent.prototype.differencesFinder = function () {
    };
    AdminEditengagementsComponent.prototype.loadingMessage = function (count) {
        this.openModal('counter', count);
        this.loadingMessageLoop(0, count);
    };
    AdminEditengagementsComponent.prototype.loadingMessageLoop = function (start, end) {
        if (start < end) {
            this.modal_message.counter_start = start;
            var new_start_1 = start + 1;
            var that_1 = this;
            setTimeout(function () {
                return that_1.loadingMessageLoop(new_start_1, end);
            }, 100);
        }
        else {
            // console.log("done!")
            return;
        }
    };
    AdminEditengagementsComponent.prototype.getClassForUserStatus = function () {
    };
    AdminEditengagementsComponent.prototype.engagementFormat = function (list) {
        var res = {};
        var users = {};
        for (var el in list) {
            var eng_id = list[el]['engagement_id'];
            var category = unescape(list[el]['category']);
            var topic_id = list[el]['topic_id'];
            res[eng_id] = {};
            res[eng_id]['soft_delete'] = list[el]['soft_delete'];
            res[eng_id]['engagement_name'] = unescape(list[el]['engagement_name']);
            res[eng_id]['categories'] = {};
            res[eng_id]['categories_length'] = 0;
            res[eng_id]['topics_total_length'] = 0;
            res[eng_id]['users_total_length'] = 0;
            res[eng_id]['users_list'] = {};
            res[eng_id]['background'] = unescape(list[el]['background']);
            res[eng_id]['status'] = 'existed';
            res[eng_id]['engagement_id'] = eng_id;
            res[eng_id]['main_text'] = unescape(list[el]['main_text']);
            res[eng_id]['company_name'] = unescape(list[el]['company_name']);
            res[eng_id]['company_address'] = unescape(list[el]['company_address']);
            res[eng_id]['company_phone_number'] = unescape(list[el]['company_phone_number']);
            res[eng_id]['company_phone_number'] = unescape(list[el]['company_phone_number']);
            res[eng_id]['contacts'] = {};
            res[eng_id]['contact_length'] = 0;
            // if(!list[el]['topic_id']){
            //   continue;
            // }
            // if(!res[eng_id]['categories'][category]){
            //   res[eng_id]['categories'][category] = {};
            //   res[eng_id]['categories'][category]['topics'] = {};
            //   res[eng_id]['categories'][category]['topic_length'] = 0;
            //   res[eng_id]['categories_length']++;
            // }
            // if(!res[eng_id]['categories'][category]['topics'][topic_id] ){
            //   res[eng_id]['categories'][category]['topics'][topic_id] = list[el];
            //   res[eng_id]['categories'][category]['topics'][topic_id]['topic'] = unescape(list[el]['topic']);
            //   res[eng_id]['categories'][category]['topics'][topic_id]['link'] = `/${eng_id}/AdminEditquiz/${list[el]['topic_id']}`;
            //   res[eng_id]['categories'][category]['topic_length']++;
            //   res[eng_id]['topics_total_length']++;
            //   res[eng_id]['categories'][category]['topics'][topic_id]['users_length'] = 0;
            //   res[eng_id]['categories'][category]['topics'][topic_id]['users'] = {};
            // }
            // if(!list[el]['profile_id']){
            //   continue;
            // }
            // res[eng_id]['categories'][category]['topics'][topic_id]['users_length']++;
            // res[eng_id]['categories'][category]['topics'][topic_id]['users'][ list[el]['email']] = `${list[el]['first_name']} ${list[el]['last_name']}`
            // if(!users[eng_id]){
            //   users[eng_id] = {};
            // }
            // if(!users[eng_id][list[el]['email']]){
            //   users[eng_id][list[el]['email']] = true;
            //   res[eng_id]['users_total_length']++;
            //   res[eng_id]['users_list'][list[el]['email']] = true
            // }
            // console.log("==========END==========")
        }
        return res;
    };
    AdminEditengagementsComponent.prototype.get_agents_for_engagements = function () {
        var _this = this;
        var engs = this.engagements;
        var _loop_1 = function (el) {
            if (!engs[el]['engagement_id']) {
                return "continue";
            }
            var eng_id = engs[el]['engagement_id'];
            var obj = {
                eng_id: eng_id,
                email: this_1.currentUser.email
            };
            this_1._ConnectorService.get_engagement_agents_by_eng_id(obj).then(function (res) {
                // console.log("get_engagement_agents_by_eng_id(obj). ENG_ID =>",eng_id,"; RES =>", res)
                var categories = {};
                var categories_length = 0;
                var topics_length = 0;
                var users_list = {};
                var users_length = 0;
                var data = res['body'];
                for (var el_1 in data) {
                    var target = data[el_1];
                    if (!categories[target.category]) {
                        categories[target.category] = {
                            topics: {},
                            topics_length: 0,
                            users_length: 0,
                            name: target.category
                        };
                        categories_length++;
                    }
                    if (!categories[target.category]['topics'][target.topic]) {
                        categories[target.category]['topics'][target.topic] = {
                            topic_id: target.topic_id,
                            soft_delete: target.topic_soft_delete,
                            name: target.topic,
                            users_length: 0,
                            users: {},
                            link: "/" + eng_id + "/AdminEditquiz/" + target.topic_id
                        };
                        categories[target.category]['topics_length']++;
                        topics_length++;
                    }
                    if (!categories[target.category]['topics'][target.topic]['users'][target.profile_id]) {
                        categories[target.category]['topics'][target.topic]['users'][target.profile_id] = {
                            first_name: target.first_name,
                            last_name: target.last_name,
                            profile_id: target.profile_id
                        };
                        categories[target.category]['topics'][target.topic]['users_length']++;
                        categories[target.category]['users_length']++;
                    }
                    if (!users_list[target.profile_id]) {
                        users_list[target.profile_id] = {
                            first_name: target.first_name,
                            last_name: target.last_name,
                            profile_id: target.profile_id,
                        };
                        users_length++;
                    }
                }
                _this.engagements[eng_id]['categories'] = categories;
                _this.engagements[eng_id]['categories_length'] = categories_length;
                _this.engagements[eng_id]['topics_total_length'] = topics_length;
                _this.engagements[eng_id]['users_list'] = users_list;
                _this.engagements[eng_id]['users_total_length'] = users_length;
                _this.engagements_original[eng_id]['categories'] = categories;
                _this.engagements_original[eng_id]['categories_length'] = categories_length;
                _this.engagements_original[eng_id]['topics_total_length'] = topics_length;
                _this.engagements_original[eng_id]['users_list'] = users_list;
                _this.engagements_original[eng_id]['users_total_length'] = users_length;
            }).catch(function (error) {
                console.log("ERROR", error);
            });
        };
        var this_1 = this;
        for (var el in engs) {
            _loop_1(el);
        }
    };
    ;
    AdminEditengagementsComponent.prototype.get_contacts_for_engagements = function () {
        var _this = this;
        var engs = this.engagements;
        var _loop_2 = function (el) {
            if (!engs[el]['engagement_id']) {
                return "continue";
            }
            var eng_id = engs[el]['engagement_id'];
            var obj = {
                eng_id: eng_id,
                email: this_2.currentUser.email
            };
            this_2._ConnectorService.get_contacts_by_eng_id(obj).then(function (res) {
                var data = res['body'];
                for (var el_2 in data) {
                    data[el_2]['soft_delete'] = false;
                }
                _this.engagements[eng_id]['contact_length'] = data.length;
                _this.engagements[eng_id]['contacts'] = data;
                _this.engagements_original[eng_id]['contact_length'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(data.length);
                _this.engagements_original[eng_id]['contacts'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(data);
            }).catch(function (error) {
                console.log("ERROR", error);
            });
        };
        var this_2 = this;
        for (var el in engs) {
            _loop_2(el);
        }
    };
    AdminEditengagementsComponent.prototype.errorHandler = function (id, source, message) {
        // console.log(`WE GOT ERROR HERE! ID => ${id}, source => ${source}, message => ${message}`);
        if (!this.engagements[id + "_error"]) {
            this.errors_length++;
            this.engagements[id + "_error"] = {
                'error_bool': true,
                'errors': {},
                'target': id
            };
            if (id == 'new') {
                this.engagements[id + "_error"]['target'] = "New question form";
            }
            // this.clearErrorMessageTimer(id, 5000)
        }
        this.last_added = id + "_error";
        this.engagements[id + "_error"]['errors'][source] = message;
    };
    AdminEditengagementsComponent.prototype.errorHandlerRemover = function (id) {
        this.last_added = null;
        try {
            if (this.engagements[id + '_error']) {
                this.errors_length--;
                delete this.engagements[id + '_error'];
            }
        }
        catch (error) {
            // console.log(error)
        }
        return true;
    };
    AdminEditengagementsComponent.prototype.errorRemoveById = function (id) {
        this.last_added = null;
        try {
            if (this.engagements[id]) {
                delete this.engagements[id];
                this.errors_length--;
            }
        }
        catch (error) {
            // console.log(error)
        }
        return true;
    };
    AdminEditengagementsComponent.prototype.checkKeyValueDiff = function (eng_id, key) {
        // console.log(key,this.engagements[eng_id][key],this.engagements_original[eng_id][key] ,this.engagements[eng_id][key] == this.engagements_original[eng_id][key] )
        return (this.engagements[eng_id][key] == this.engagements_original[eng_id][key] ? false : true);
    };
    AdminEditengagementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editengagements',
            template: __webpack_require__(/*! ./admin-editengagements.component.html */ "./src/app/admin-editengagements/admin-editengagements.component.html"),
            styles: [__webpack_require__(/*! ./admin-editengagements.component.css */ "./src/app/admin-editengagements/admin-editengagements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminEditengagementsComponent);
    return AdminEditengagementsComponent;
}());



/***/ }),

/***/ "./src/app/admin-editgrade/admin-editgrade.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-editgrade/admin-editgrade.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWVkaXRncmFkZS9hZG1pbi1lZGl0Z3JhZGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin-editgrade/admin-editgrade.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-editgrade/admin-editgrade.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-editgrade works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin-editgrade/admin-editgrade.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-editgrade/admin-editgrade.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminEditgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditgradeComponent", function() { return AdminEditgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminEditgradeComponent = /** @class */ (function () {
    function AdminEditgradeComponent() {
    }
    AdminEditgradeComponent.prototype.ngOnInit = function () {
    };
    AdminEditgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editgrade',
            template: __webpack_require__(/*! ./admin-editgrade.component.html */ "./src/app/admin-editgrade/admin-editgrade.component.html"),
            styles: [__webpack_require__(/*! ./admin-editgrade.component.css */ "./src/app/admin-editgrade/admin-editgrade.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminEditgradeComponent);
    return AdminEditgradeComponent;
}());



/***/ }),

/***/ "./src/app/admin-editpermissions/admin-editpermissions.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin-editpermissions/admin-editpermissions.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-quiz-permission {\n    margin-top: 50px;\n}\n\n.admin-quiz-permission-title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-list_buttons {\n    margin: 0px auto;\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-by_teams{\n    margin: 50px 50px;\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n.admin-quiz-permission-table_box{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n.EditQuizPermissions_categoryBox {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    /* z-index: 0;\n    transition: 0.5s;\n    box-shadow: none; */\n    margin: 5px 5px;\n    padding: 5px 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-radius: 5px;\n}\n\n.EditQuizPermissions_categoryBox p {\n    transition: 0.5s;\n}\n\n.EditQuizPermissions_categoryBox:hover {\n    /* z-index: 1;\n    box-shadow: 5px 10px 18px #888888;\n    background: white */\n}\n\n.EditQuizPermissions_categoryBox:hover p {\n    color: #4f91cd;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5);\n    margin-top: -120px;\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 1000px;\n    max-width: 1000px !important;\n    /* height: 100px; */\n}\n\nthead th\n{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZWRpdHBlcm1pc3Npb25zL2FkbWluLWVkaXRwZXJtaXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCOzt1QkFFbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7O3VCQUVtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLG1CQUFtQjtBQUN2Qjs7QUFDQTs7SUFFSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1lZGl0cGVybWlzc2lvbnMvYWRtaW4tZWRpdHBlcm1pc3Npb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tcXVpei1wZXJtaXNzaW9uIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLWJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLWxpc3RfYnV0dG9ucyB7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLWJ5X3RlYW1ze1xuICAgIG1hcmdpbjogNTBweCA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmFkbWluLXF1aXotcGVybWlzc2lvbi10YWJsZV9ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC8qIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBib3gtc2hhZG93OiBub25lOyAqL1xuICAgIG1hcmdpbjogNXB4IDVweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3ggcCB7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3g6aG92ZXIge1xuICAgIC8qIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICovXG59XG5cbi5FZGl0UXVpelBlcm1pc3Npb25zX2NhdGVnb3J5Qm94OmhvdmVyIHAge1xuICAgIGNvbG9yOiAjNGY5MWNkO1xufVxuLm1vZGFsX21lc3NhZ2VfYm94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE4MiwgMTg1LCAwLjUpO1xuICAgIG1hcmdpbi10b3A6IC0xMjBweDtcbn1cblxuLm1vZGFsX21lc3NhZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXR7XG4gICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQgdGR7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbn1cbnRoZWFkIHRoXG57XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDBweDtcbiAgICB6LWluZGV4OiAxO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-editpermissions/admin-editpermissions.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin-editpermissions/admin-editpermissions.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n\n  <!-- align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) -->\n  <div [hidden]=\"sorted_users\" class=\" loading_box element-animation-fadeIn\" style=\" margin-top: 100px;height: 300px;\">\n    <h2>Loading...</h2>\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\"></span>\n    </div>\n  </div>\n  <div [hidden]=\"!sorted_users\" class=\"admin-quiz-permission element-animation-fadeIn\">\n    <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\">\n      <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\">\n        <!-- EDIT/REMOVE BUCKET LIST -->\n        <div class=\"modal-content \" *ngIf=\"modal_message.title == 'list_control'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">Grant multiple\n              permissions for <span class=\"font-weight-bolder\">{{modal_message.body}}</span></h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"team_control_panel\">\n            <div class='team_control_panel_category' *ngFor=\"let cat of categories | keyvalue\">\n              <h4 style='width: 100%' align='center'>{{cat.key}}</h4>\n              <div class=\"shadow\"\n                style=\"display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; align-items: center; align-content: flex-start;\">\n                <div class=\"btn-group btn-group-sm control-list-btn-group\" *ngFor=\"let topic of cat.value | keyvalue\">\n                  <button type=\"button\" (click)=\"listControlChanger(topic.value.topic_id, 'all')\"\n                    class=\"btn btn-xs  btn-action-borderlesss \"\n                    [ngClass]=\"{'btn-success': list_control[topic.value.topic_id] === true , 'btn-secondary': list_control[topic.value.topic_id] !== true}\"\n                    style=\"border-radius: 0px\"> &ensp; &ensp; All &ensp; &ensp; </button>\n                  <input type=\"text\" class=\"control-list-btn-group-children\" placeholder=\"{{topic.value.topic}}\"\n                    readonly disabled>\n                  <button type=\"button\" (click)=\"listControlChanger(topic.value.topic_id, 'no_one')\"\n                    class=\"btn btn-xs  btn-action-borderlesss \"\n                    [ngClass]=\"{'btn-danger': !list_control[topic.value.topic_id] || list_control[topic.value.topic_id] == 0, 'btn-secondary': list_control[topic.value.topic_id] && list_control[topic.value.topic_id] > 0}\"\n                    style=\"border-radius: 0px\">No one</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"listControlSubmit()\" [disabled]=\"!list_control_changed_bool\"\n                class=\"btn btn-success  btn-action-borderless shadow\" style=\"margin: 0px 20px\">Apply</button>\n              <button type=\"button\" (click)=\"generateListControl()\" [hidden]=\"!list_control_changed_bool\"\n                class=\"btn btn-danger  btn-action-borderless shadow\" style=\"margin: 0px 20px\">Cancel</button>\n              <button type=\"button\" (click)=\"closeModal()\" [hidden]=\"list_control_changed_bool\"\n                class=\"btn btn-warning  btn-action-borderless shadow\" style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'changes_list'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">List of\n              changes</h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"height: 50vh !important; overflow-y: scroll;\">\n            <table class=\"table table-striped table-borderless\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Name</th>\n                  <th>Added</th>\n                  <th>Removed</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of modal_message.body | keyvalue\">\n                  <th scope=\"row\" class=\"\">{{user.key}}</th>\n                  <td>{{sorted_users.all_users[user.key]['first_name']}}\n                    {{sorted_users.all_users[user.key]['last_name']}}</td>\n                  <td [ngClass]=\"{'alert alert-success': user.value.added.length > 0}\">\n                    <p class=\"card-text\" *ngFor=\"let added_topic of user.value.added\">\n                      {{categories_unsorted[added_topic]['topic']}} <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, added_topic)\">Undo</button>\n                    </p>\n                  </td>\n                  <td [ngClass]=\"{'alert alert-danger': user.value.removed.length > 0}\">\n                    <p class=\"card-text\" *ngFor=\"let removed_topic of user.value.removed\">\n                      {{categories_unsorted[removed_topic]['topic']}} <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, removed_topic)\">Undo</button>\n                    </p>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"submitChanges()\" class=\"btn btn-success  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Submit changes</button>\n              <button type=\"button\" (click)=\"undoChangeAll()\" class=\"btn btn-danger  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Cancel</button>\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'message'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'success'\">\n            <h4 class=\"alert-heading text-center\">Well done!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Your changes have been saved!</p>\n            <button class=\"btn btn-primary btn-action-borderless  shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click here to go back to the admin portal</button>\n          </div>\n          <div class=\"alert alert-danger\" style=\"margin-bottom: 0px\" role=\"alert\" *ngIf=\"modal_message.body == 'fail'\">\n            <h4 class=\"alert-heading\">Oops!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Something went wrong. Please try again later or contact developers.</p>\n            <button class=\"btn btn-primary btn-action-borderless \" [routerLink]=\"['/',currentEng_id, 'admin']\">Click\n              here to go back to the admin portal</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"admin-quiz-permission-title\">\n      <h1>Quiz Permission Table</h1>\n      <!-- <button (click)=\"checkState()\">state</button> -->\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_teams' }\">Teams</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless \"\n          [ngClass]=\"{'active shadow': current_list_target == 'by_teams' && current_list_key == team }\"\n          *ngFor=\"let team of by_teams\" (click)=\"selectList('by_teams',team)\">{{team}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_title' }\">Titles</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless \"\n          [ngClass]=\"{'active shadow': current_list_target == 'by_title' && current_list_key == title }\"\n          *ngFor=\"let title of by_title\" (click)=\"selectList('by_title',title)\">{{title}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important shadow': current_list_target == 'all_users' }\"\n          (click)=\"selectList('all_users', null)\">All employees</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-secondary btn-lg btn-action-borderless shadow-lg\"\n          (click)=\"openModal('list_control', '')\">List control</button>\n      </div>\n\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <label>\n          Search in\n          <span *ngIf=\"current_list_target == 'by_teams'\">team # {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'by_title'\">title {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'all_users'\">all users</span>:\n          <div class=\"input-group shadow\">\n            <input type=\"text\" class=\"form-control form-control-bp-shadow\" id=\"searchInput\" placeholder=\"\" aria-label=\"\"\n              style=\"border-radius: 0px\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-info bp-button-important btn-outline-bp-hover-side-shadow\" type=\"button\"\n                (click)=\"searchKey()\" style=\"border-color: #2675a3; border-radius: 0px\">Filter</button>\n            </div>\n          </div>\n        </label>\n      </div>\n    </div>\n\n    <div class=\"admin-quiz-permission-table_box\">\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-bottom: 50px;\"\n        (click)=\"checkChanges()\">Check\n        Changes</button>\n      <table class=\"table table-borderless table-striped shadow\" style=\"width: 98%; margin: 0px auto;\">\n        <thead class=\"thead-dark shadow\">\n          <tr>\n            <th style=\"font-size: 10px; text-align: center;  width: 5%\" (click)=\"sortType('profile_id')\">Profile\n              Permission ID</th>\n            <th style='width: 15%'>Email</th>\n            <th style='width: 20%'>Name</th>\n            <th style='width: 10%'>Team</th>\n            <th style='width: 10%'>Title</th>\n            <th style='width: 10%'>Specialization</th>\n            <th style='text-align: center'>Quiz Permission</th>\n          </tr>\n        </thead>\n        <tbody id=\"table_body_target\" style=\"background: white\">\n          <tr *ngFor=\"let user of current_list | keyvalue \">\n            <th scope=\"row\" class=\"font-weight-bold  text-center  tr_string\">{{user.key}}</th>\n            <td class=\"tr_string\">{{user.value.email}}</td>\n            <td class=\"tr_string\">{{user.value.first_name}} {{user.value.last_name}}</td>\n            <td class=\"tr_string\">{{user.value.team}}</td>\n            <td class=\"font-weight-bold   tr_string\">{{user.value.title}}</td>\n            <td class=\"display_column_align_baseline tr_string\">\n              {{user.value.specialization}}\n              {{user.value.specialization2}}\n              {{user.value.specialization3}}\n            </td>\n            <td>\n              <div class=\"card-columns\">\n                <div class=\"card hover-shadow\" *ngFor=\"let cat of categories | keyvalue\">\n                  <div class=\"EditQuizPermissions_categoryBox \">\n                    <p class=\"font-weight-bold \" align=\"center\">{{cat.key}}</p>\n                    <span *ngFor=\"let topic of cat.value | keyvalue\">\n                      <input type=\"checkbox\" class=\"font-weight-light checkTopic\" id='checkTopic{{cat.value}}'\n                        [checked]=\"user.value.topic_id.indexOf(topic.value.topic_id) >= 0\"\n                        (click)=\"checkTopic(user.key, topic.value.topic_id)\"> {{topic.value.topic}}\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-top: 50px;\"\n        (click)=\"checkChanges()\">Check\n        Changes</button>\n    </div>\n  </div>\n\n  <div\n    style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n    <div class=\"index_row \" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n      <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n        <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n          <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n          <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n            target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n            style=\"margin-left: 15px\">\n            <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n          </a>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n        <div class=\"text-center\">\n          <p class=\"mt-3\">{{currentEng.main_text}}</p>\n          <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n              href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n        <div class=\"text-center  bp-box shadow\">\n          <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_name}}</h4>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_address}}</h5>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_phone_number}}\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-editpermissions/admin-editpermissions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-editpermissions/admin-editpermissions.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminEditpermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditpermissionsComponent", function() { return AdminEditpermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../object_validation.js */ "./src/app/object_validation.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__);







var AdminEditpermissionsComponent = /** @class */ (function () {
    function AdminEditpermissionsComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.all_users_original = null;
        this.all_users = null;
        this.sorted_users = null;
        this.categories = null;
        this.categories_unsorted = null;
        this.current_list = {};
        this.users_changes_bool = false;
        this.users_changes = {};
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': ''
        };
        this.list_control = {};
        this.list_control_copy = {};
        this.list_control_changed_bool = false;
        this.list_changes = {};
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                var obj = {
                    'email': user.email,
                    'eng_id': _this.currentEng_id
                };
                _this._ConnectorService.getQuizPermissions(obj).then(function (res) {
                    console.log("RES =>", res);
                    _this.sorted_users = {};
                    _this.all_users_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['all_users'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['by_teams'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'team');
                    _this.sorted_users['by_title'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'title');
                    _this.by_teams = Object.keys(_this.sorted_users['by_teams']);
                    _this.by_title = Object.keys(_this.sorted_users['by_title']);
                    _this.categories_unsorted = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["switchKey"])(res['response']['categories'], 'topic_id');
                    _this.categories = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupByKey"])(res['response']['categories'], 'category', 'topic_id');
                    _this.current_list_target = "by_teams";
                    _this.current_list_key = Object.keys(_this.sorted_users[_this.current_list_target])[0];
                    _this.current_list = _this.sorted_users[_this.current_list_target][_this.current_list_key];
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    AdminEditpermissionsComponent.prototype.ngOnInit = function () {
    };
    // LISTENERS ===========================
    AdminEditpermissionsComponent.prototype.selectList = function (target, key) {
        this.current_list_target = target;
        if (target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else {
            this.current_list_key = key;
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
    };
    AdminEditpermissionsComponent.prototype.checkTopic = function (user_id, topic_id) {
        var user = this.sorted_users.all_users[user_id];
        if (user.topic_id.includes(topic_id)) {
            // remove topic_id from user's list of allowed topics
            var arr = user.topic_id;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == topic_id) {
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
        else {
            user.topic_id.push(topic_id);
        }
    };
    AdminEditpermissionsComponent.prototype.uncheckTopicForUser = function (user_id, topic_id) {
        var user = this.sorted_users.all_users[user_id];
        if (user.topic_id.includes(topic_id)) {
            // remove topic_id from user's list of allowed topics
            var arr = user.topic_id;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == topic_id) {
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
    };
    AdminEditpermissionsComponent.prototype.checkTopicForUser = function (user_id, topic_id) {
        if (!this.sorted_users.all_users[user_id].topic_id.includes(topic_id)) {
            this.sorted_users.all_users[user_id].topic_id.push(topic_id);
        }
    };
    AdminEditpermissionsComponent.prototype.checkChanges = function () {
        this.list_changes = {};
        var change_list = {};
        var new_list = this.sorted_users.all_users;
        var orig_list = this.all_users_original;
        for (var user in new_list) {
            if (JSON.stringify(new_list[user]['topic_id'].sort(function (a, b) { return a - b; })) != JSON.stringify(orig_list[user]['topic_id'].sort(function (a, b) { return a - b; }))) {
                change_list[user] = {
                    added: [],
                    removed: []
                };
                var arr_new = new_list[user]['topic_id'].sort(function (a, b) { return a - b; });
                var arr_old = orig_list[user]['topic_id'].sort(function (a, b) { return a - b; });
                var idx1 = 0;
                var idx2 = 0;
                // console.log(`DIFFERENT! USER ${user}`, arr_new, arr_old)
                while (idx1 < arr_new.length && idx2 < arr_old.length) {
                    var el1 = arr_new[idx1];
                    var el2 = arr_old[idx2];
                    // console.log(`comparing: ${el1} wtih ${el2}`)
                    if (el1 < el2) {
                        change_list[user].added.push(el1);
                        idx1++;
                    }
                    else if (el1 > el2) {
                        change_list[user].removed.push(el2);
                        idx2++;
                    }
                    else {
                        idx1++;
                        idx2++;
                    }
                }
                if (idx1 < arr_new.length) {
                    while (idx1 < arr_new.length) {
                        change_list[user].added.push(arr_new[idx1]);
                        idx1++;
                    }
                }
                else if (idx2 < arr_old.length) {
                    while (idx2 < arr_old.length) {
                        change_list[user].removed.push(arr_old[idx2]);
                        idx2++;
                    }
                }
            }
        }
        // console.log("CHANGE LIST =>", change_list)
        if (Object.keys(change_list).length > 0) {
            this.list_changes = change_list;
            this.openModal('changes_list', this.list_changes);
        }
    };
    AdminEditpermissionsComponent.prototype.undoChangeAll = function () {
        for (var user in this.list_changes) {
            // console.log("======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-======-=-=-=-=-=-=-=-=-")
            // console.log("user =>", user)
            // console.log("let's remove added topics")
            for (var topic_id in this.list_changes[user]['added']) {
                // console.log(`loop topic_id => ${topic_id} of ${this.list_changes[user]['added'].length}` )
                this.uncheckTopicForUser(user, this.list_changes[user]['added'][topic_id]);
            }
            // console.log("let's put back removed topics now")
            for (var topic_id in this.list_changes[user]['removed']) {
                // console.log(`loop topic_id => ${topic_id} of ${this.list_changes[user]['removed'].length}`)
                this.checkTopicForUser(user, this.list_changes[user]['removed'][topic_id]);
            }
        }
        this.list_changes = {};
        this.closeModal();
    };
    AdminEditpermissionsComponent.prototype.undoChange = function (user_id, topic_id) {
        // console.log("---------")
        // console.log(`undo topic id ${topic_id} for user ${user_id}`) 
        if (this.sorted_users.all_users[user_id].topic_id.includes(topic_id)) {
            this.uncheckTopicForUser(user_id, topic_id);
            var arr = this.list_changes[user_id]['added'];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == topic_id) {
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
        else {
            this.checkTopicForUser(user_id, topic_id);
            var arr = this.list_changes[user_id]['removed'];
            // console.log("REMOVING FROM THE REMOVED LIST")
            for (var i = 0; i < arr.length; i++) {
                // console.log("cur element =>", arr[i], "; target topic_id =>", topic_id)
                if (arr[i] == topic_id) {
                    // console.log("FOUND!")
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
        // console.log(`this.list_changes[user_id]['added'].length => ${this.list_changes[user_id]['added'].length}, this.list_changes[user_id]['removed'].length => ${this.list_changes[user_id]['removed'].length}`)
        if (this.list_changes[user_id]['added'].length == 0 && this.list_changes[user_id]['removed'].length == 0) {
            delete this.list_changes[user_id];
            console.log("this.list_changes length => " + Object.keys(this.list_changes).length);
            if (Object.keys(this.list_changes).length < 1) {
                this.closeModal();
            }
        }
    };
    AdminEditpermissionsComponent.prototype.submitChanges = function () {
        var _this = this;
        console.log("this.list_changes =>", this.list_changes);
        var users = {};
        for (var user_id in this.list_changes) {
            users[user_id] = this.sorted_users['all_users'][user_id];
            users[user_id]['removed_list'] = this.list_changes[user_id]['removed'];
            users[user_id]['added_list'] = this.list_changes[user_id]['added'];
        }
        this.list_changes = {};
        console.log("USERS FOR SUBMIT! =>", users);
        this.closeModal();
        this._ConnectorService.saveQuizPermissions(users, this.currentUser.email).then(function (res) {
            console.log("RES =>", res);
            // console.log("this.all_users =>",this.sorted_users.all_users)
            // console.log("this.all_users_original =>",this.all_users_original)
            _this.all_users_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.sorted_users.all_users);
            console.log(_this);
            _this.openModal('message', 'success');
        }).catch(function (err) {
            console.log(err);
            this.openModal('message', 'fail');
        });
    };
    // MODAL FUNCTIONS =====================
    AdminEditpermissionsComponent.prototype.openModal = function (target, message) {
        this.modal_mesage_bool = true;
        this.modal_message.title = target;
        if (target == 'list_control') {
            if (this.current_list_target == "by_teams") {
                this.modal_message.body = message + (" team " + this.current_list_key);
            }
            else if (this.current_list_target == "by_title") {
                this.modal_message.body = message + (" title " + this.current_list_key);
            }
            else {
                this.modal_message.body = message + " everyone";
            }
            this.generateListControl();
            console.log(this.list_control);
        }
        else {
            this.modal_message.body = message;
            console.log(this.modal_message);
        }
    };
    AdminEditpermissionsComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
        this.list_control_changed_bool = false;
    };
    // LIST CONTROL FUNCTOINS =============
    AdminEditpermissionsComponent.prototype.generateListControl = function () {
        this.list_control_changed_bool = false;
        var list = {};
        for (var user in this.current_list) {
            var cur_user = this.current_list[user];
            // console.log("let's check this user =>", cur_user)
            for (var topic in cur_user['topic_id']) {
                if (!list[cur_user['topic_id'][topic]]) {
                    list[cur_user['topic_id'][topic]] = 1;
                }
                else {
                    list[cur_user['topic_id'][topic]]++;
                }
                // console.log('topic =>', topic)
                if (list[cur_user['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    // console.log("all cur_users have ", cur_user['topic_id'][topic], " => ", list[cur_user['topic_id'][topic]], list[cur_user['topic_id'][topic]])
                    list[cur_user['topic_id'][topic]] = true;
                }
            }
        }
        this.list_control = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
        this.list_control_copy = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
    };
    AdminEditpermissionsComponent.prototype.listControlChanger = function (topic_id, action) {
        // console.log(`BEFORE CHANGE => ${this.list_control[topic_id] }; LIST_COPY => ${this.list_control_copy[topic_id]}`)
        if (action == 'all') {
            this.list_control[topic_id] = true;
        }
        else {
            this.list_control[topic_id] = 0;
        }
        // console.log(`AFTER CHANGE => ${this.list_control[topic_id] } ; LIST_COPY => ${this.list_control_copy[topic_id]}`)
        var changes_bool = false;
        for (var el in this.list_control) {
            // console.log("this.list_control[el] != this.list_control_copy[el]", JSON.stringify(this.list_control[el]), JSON.stringify(this.list_control_copy[el]), JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el]))
            if (JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el])) {
                if (!this.list_control_copy[el] && this.list_control[el] == 0) {
                    continue;
                }
                console.log("found a difference!");
                changes_bool = true;
                break;
            }
        }
        if (changes_bool) {
            this.list_control_changed_bool = true;
        }
        else {
            this.list_control_changed_bool = false;
        }
    };
    AdminEditpermissionsComponent.prototype.listControlCancel = function () {
        this.list_control = {};
        for (var user in this.current_list) {
            for (var topic in this.current_list[user]['topic_id']) {
                if (!this.list_control[this.current_list[user]['topic_id'][topic]]) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = 1;
                }
                else {
                    this.list_control[this.current_list[user]['topic_id'][topic]]++;
                }
                if (this.list_control[this.current_list[user]['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = true;
                }
            }
        }
    };
    AdminEditpermissionsComponent.prototype.listControlSubmit = function () {
        console.log(this.list_control);
        var topic_list = this.list_control;
        var topic_list_original = this.list_control_copy;
        var cur_users = this.current_list;
        for (var el in topic_list) {
            if (JSON.stringify(topic_list_original[el]) !== JSON.stringify(topic_list[el])) {
                if (topic_list[el] === true) {
                    for (var user in cur_users) {
                        this.checkTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
                else if (topic_list[el] == 0) {
                    for (var user in cur_users) {
                        this.uncheckTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
            }
        }
        this.closeModal();
    };
    // MISC FUNCTIONS ======================
    AdminEditpermissionsComponent.prototype.checkState = function () {
        console.log(this);
    };
    AdminEditpermissionsComponent.prototype.sortType = function (key) {
        console.log(key);
    };
    AdminEditpermissionsComponent.prototype.searchKey = function () {
        var key = document.getElementById('searchInput')['value'];
        if (key.length < 0) {
            return;
        }
        if (this.current_list_target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else {
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
        var activeList = [];
        var table_body_target = document.getElementById('table_body_target').querySelectorAll('tr');
        console.log("table_body_target => ", table_body_target);
        for (var el in table_body_target) {
            if (table_body_target[el]) {
                if (typeof (table_body_target[el]) == "object") {
                    var row_values = table_body_target[el].getElementsByClassName('tr_string');
                    var bool = false;
                    for (var value in row_values) {
                        if (typeof (row_values[value]) == "object" && row_values[value]['innerHTML'].toLowerCase().includes(key.toLowerCase())) {
                            bool = true;
                            table_body_target[el].classList.remove('hidden');
                            break;
                        }
                    }
                    if (!bool) {
                        table_body_target[el].classList.add('hidden');
                    }
                }
            }
        }
    };
    AdminEditpermissionsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminEditpermissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editpermissions',
            template: __webpack_require__(/*! ./admin-editpermissions.component.html */ "./src/app/admin-editpermissions/admin-editpermissions.component.html"),
            styles: [__webpack_require__(/*! ./admin-editpermissions.component.css */ "./src/app/admin-editpermissions/admin-editpermissions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminEditpermissionsComponent);
    return AdminEditpermissionsComponent;
}());



/***/ }),

/***/ "./src/app/admin-editquiz/admin-editquiz.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-editquiz/admin-editquiz.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-create-quiz {\n    width: 100%;\n    margin-top: 50px;\n}\n\n.admin-create-quiz-title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-create-quiz-body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-create-quiz-body-topic-cat-eng-box {\n    /* max-width: 400px; */\n}\n\n.admin-create-quiz-body-topic-cat-eng-box-select-box {\n    margin: 0px 10px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.thead-light {\n    background: #e9ecef;\n    color: #7f8082;\n}\n\n.select-label {\n    margin-bottom: 0px !important;\n    margin-left: 5px;\n}\n\n.table-row {\n    /* padding: 0px 0px !important; */\n    /* display: ; */\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.create_form_img_box {\n    width: 15%;\n}\n\n.create_form_answer_add {\n    width: 100%;\n    padding: 0px 0px !important;\n}\n\ninput[type=\"file\"] {\n    display: none;\n}\n\n.custom-file-upload {\n    border: 1px solid #ccc;\n    display: inline-block;\n    padding: 6px 12px;\n    cursor: pointer;\n}\n\n.create_form_input_shadow {\n    box-shadow: 0 0 0 1px rgba(179, 182, 185, 0.25);\n    border-radius: 0px;\n}\n\n.create_form_input_shadow:focus {\n    box-shadow: 0 0 0 1px #4f91cd59;\n    /* background-color: none repeat scroll 0 0 rgba(0, 0, 0, 0.01); */\n}\n\n.btn-shadow {\n    box-shadow: 0 0 0 0.2rem rgba(179, 182, 185, 0.25);\n}\n\n.create_form_input_shadowless {\n    box-shadow: none;\n    border-radius: 0px;\n    border: none;\n}\n\n.create_form_input_shadowless:focus {\n    box-shadow: none;\n    border: none;\n    /* background-color: none repeat scroll 0 0 rgba(0, 0, 0, 0.01); */\n}\n\n.answer_order_edit {\n    padding: 0px 0px !important\n}\n\n.btn-success.focus,\n.btn-success:focus {\n    box-shadow: none !important\n}\n\n.focus,\n.active {\n    box-shadow: none !important\n}\n\n.btn:focus {\n    box-shadow: none !important\n}\n\n.btn-image-remove {\n    position: absolute;\n    top: 15px;\n    right: 0%;\n    height: 25px;\n    width: 25px;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    cursor: pointer;\n    padding: 0px 0px;\n    text-align: center;\n}\n\n.bucket_list_pick {\n    border-radius: 0px;\n}\n\n.errorHandlerBox {\n    border-bottom: 1px solid silver;\n    padding: 15px 0px !important;\n}\n\n.errorHandler {\n    width: 70%;\n    max-width: 500px;\n    margin: 0px auto;\n}\n\n.create_form_row {\n    border: none !important;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5)\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 700px;\n    /* height: 100px; */\n}\n\n.fixed_header tbody{\n    display:block;\n    overflow:auto;\n    height:200px;\n    width:100%;\n  }\n\n.fixed_header thead tr{\n    display:block;\n  }\n\n.alert-error{\n    color: #ffffff;\n    background-color: #fd5665;\n    border-color: #ff001b;\n  }\n\nthead th{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n\n}\n\n.element_hard_deleted input{\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n.element_hard_deleted textarea{\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n.element_hard_deleted .input-group-prepend{\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n.element_hard_deleted select{\n    -webkit-filter: blur(5px);\n    -moz-filter: blur(5px);\n    -o-filter: blur(5px);\n    -ms-filter: blur(5px);\n    filter: blur(5px);\n}\n\n.modal-width-full{\n    width: 100% !important;\n    max-width: 100% !important;\n    height: 100% !important;\n}\n\n.modal-img{\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: flex-start;\n}\n\n.border-top{\n    border-top: 1px dotted silver !important;\n}\n\n.table{\n    width: 98%;\n    margin: 0px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZWRpdHF1aXovYWRtaW4tZWRpdHF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrRUFBa0U7QUFDdEU7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7RUFDWjs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIscUJBQXFCO0VBQ3ZCOztBQUVGO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsVUFBVTs7QUFFZDs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGFBQWE7Q0FDaEIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHlCQUF5QjtBQUMxQjs7QUFDQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1lZGl0cXVpei9hZG1pbi1lZGl0cXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWNyZWF0ZS1xdWl6IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4uYWRtaW4tY3JlYXRlLXF1aXotdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZG1pbi1jcmVhdGUtcXVpei1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYWRtaW4tY3JlYXRlLXF1aXotYm9keS10b3BpYy1jYXQtZW5nLWJveCB7XG4gICAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cbn1cblxuLmFkbWluLWNyZWF0ZS1xdWl6LWJvZHktdG9waWMtY2F0LWVuZy1ib3gtc2VsZWN0LWJveCB7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4udGhlYWQtbGlnaHQge1xuICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgY29sb3I6ICM3ZjgwODI7XG59XG5cbi5zZWxlY3QtbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50YWJsZS1yb3cge1xuICAgIC8qIHBhZGRpbmc6IDBweCAwcHggIWltcG9ydGFudDsgKi9cbiAgICAvKiBkaXNwbGF5OiA7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZV9mb3JtX2ltZ19ib3gge1xuICAgIHdpZHRoOiAxNSU7XG59XG5cbi5jcmVhdGVfZm9ybV9hbnN3ZXJfYWRkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jcmVhdGVfZm9ybV9pbnB1dF9zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDE3OSwgMTgyLCAxODUsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvdzpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICM0ZjkxY2Q1OTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHJnYmEoMCwgMCwgMCwgMC4wMSk7ICovXG59XG5cbi5idG4tc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxNzksIDE4MiwgMTg1LCAwLjI1KTtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvd2xlc3Mge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmNyZWF0ZV9mb3JtX2lucHV0X3NoYWRvd2xlc3M6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDAgcmdiYSgwLCAwLCAwLCAwLjAxKTsgKi9cbn1cblxuLmFuc3dlcl9vcmRlcl9lZGl0IHtcbiAgICBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnRcbn1cblxuLmJ0bi1zdWNjZXNzLmZvY3VzLFxuLmJ0bi1zdWNjZXNzOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcbn1cblxuLmZvY3VzLFxuLmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxufVxuXG4uYnRuLWltYWdlLXJlbW92ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICByaWdodDogMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idWNrZXRfbGlzdF9waWNrIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5lcnJvckhhbmRsZXJCb3gge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBzaWx2ZXI7XG4gICAgcGFkZGluZzogMTVweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9ySGFuZGxlciB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi5jcmVhdGVfZm9ybV9yb3cge1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWxfbWVzc2FnZV9ib3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1MDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMTgyLCAxODUsIDAuNSlcbn1cblxuLm1vZGFsX21lc3NhZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXR7XG4gICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQgdGR7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbn1cbi5maXhlZF9oZWFkZXIgdGJvZHl7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIGhlaWdodDoyMDBweDtcbiAgICB3aWR0aDoxMDAlO1xuICB9XG4gIC5maXhlZF9oZWFkZXIgdGhlYWQgdHJ7XG4gICAgZGlzcGxheTpibG9jaztcbiAgfVxuICAuYWxlcnQtZXJyb3J7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNTY2NTtcbiAgICBib3JkZXItY29sb3I6ICNmZjAwMWI7XG4gIH1cbiAgXG50aGVhZCB0aHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMHB4O1xuICAgIHotaW5kZXg6IDE7XG5cbn1cbi5lbGVtZW50X2hhcmRfZGVsZXRlZCBpbnB1dHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xufVxuLmVsZW1lbnRfaGFyZF9kZWxldGVkIHRleHRhcmVhe1xuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgLW1vei1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtbXMtZmlsdGVyOiBibHVyKDVweCk7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG59XG4uZWxlbWVudF9oYXJkX2RlbGV0ZWQgLmlucHV0LWdyb3VwLXByZXBlbmR7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cbi5lbGVtZW50X2hhcmRfZGVsZXRlZCBzZWxlY3R7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICAtbW96LWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1vLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIC1tcy1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcbn1cbi5tb2RhbC13aWR0aC1mdWxse1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubW9kYWwtaW1ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cbi5ib3JkZXItdG9we1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgc2lsdmVyICFpbXBvcnRhbnQ7XG59XG4udGFibGV7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-editquiz/admin-editquiz.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-editquiz/admin-editquiz.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div class=\"admin-create-quiz element-animation-fadeIn\"\n        *ngIf=\"currentUser && engagements && list_of_questions_bool\">\n        <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\"\n            (click)=\"closeModal_background_click($event.target)\" id=\"modal_message_box\">\n            <div class=\"modal-dialog modal-dialog-centered modal_message\" id=\"modal_main\" role=\"document\" [ngClass]=\"{\n                            'modal-width-full': modal_message.title == 'Image'\n                        }\">\n                <!-- EDIT/REMOVE BUCKET LIST -->\n                <div class=\"modal-content shadow-lg\" *ngIf=\"modal_message.title == 'Bucket editor'\">\n                    <div>\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalCenteredLabel\">{{modal_message.title}}</h5>\n                            <!-- <button type=\"button\" class=\"close\" (click)=\"bucketListEditorClose()\" data-dismiss=\"modal\" aria-label=\"Close\">\n                                              <span aria-hidden=\"true\">&times;</span>\n                                            </button> -->\n                        </div>\n                        <div class=\"modal-body modal-edit-remove-bucket\" style=\"padding: 0px 1rem\">\n                            <table [hidden]=\"bucket_list_confirm_bool\" class=\"table table-borderless table-sm\">\n                                <thead class=\"thead-light\">\n                                    <tr>\n                                        <th class=\"text-center\">ID</th>\n                                        <th>Bucket Title</th>\n                                        <th class=\"text-center\">Delete</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let b of bucket_list | keyvalue\" [ngClass]=\"{\n                                                    'alert-danger': b.value.soft_delete\n                                                }\">\n                                        <th class=\"\" scope=\"row\">{{b.value.bucket_id}}</th>\n                                        <td>\n                                            <input type=\"text\" [disabled]=\"b.value.soft_delete\"\n                                                class=\"form-control openBucketListSettings_inputs create_form_input_shadow\"\n                                                (change)=\"bucketListEditor( b.key,  'bucket_name',$event.target.value)\"\n                                                value={{b.value.bucket_name}}>\n                                        </td>\n                                        <td class=\"text-center\" [hidden]=\"bucket_list_counter[b.key]\">\n                                            <button (click)=\"bucketListEditor(b.key, 'soft_delete', true)\"\n                                                class='btn btn-outline-danger btn-action-borderless'\n                                                *ngIf=\"!b.value.soft_delete\" style=\"width: 100%\">Delete</button>\n                                            <button (click)=\"bucketListEditor(b.key, 'soft_delete', false)\"\n                                                class='btn btn-outline-success btn-action-borderless'\n                                                *ngIf=\"b.value.soft_delete\" style=\"width: 100%\">Restore</button>\n                                        </td>\n                                        <td class=\"text-center alert-warning\" [hidden]=\"!bucket_list_counter[b.key]\">\n                                            <p *ngIf=\"bucket_list_counter[b.key]\"\n                                                style=\"font-size: 12px; margin-bottom: 0px\">\n                                                {{bucket_list_counter[b.key]}} answer(s) </p>\n                                            <p *ngIf=\"bucket_list_counter[b.key]\"\n                                                style=\"font-size: 12px;margin-bottom: 0px\">are using this bucket</p>\n                                        </td>\n                                        <!-- <td *ngIf=\"b.value.soft_delete\" class=\"table-secondary\">\n                                                        <input type=\"text\" disabled class=\"form-control openBucketListSettings_inputs\"\n                                                            (change)=\"bucketListEditor(i, 'bucket_name', $event.target.value)\" value={{b.value.bucket_name}}>\n                                                    </td>\n                                                    <td *ngIf=\"b.value.soft_delete\" class=\"table-secondary\">\n                                                        <button *ngIf=\"b.value.soft_delete\" (click)=\"bucketListEditor(i, 'soft_delete', false)\"\n                                                            class='btn btn-outline-success btn-action-borderless'>Enable</button>\n                                                    </td> -->\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <div style=\"width: 100%\" [hidden]=\"bucket_list_confirm_bool\">\n                                <div class=\"input-group shadow\">\n                                    <input type=\"text\"\n                                        class=\"form-control create_form_input_shadow openBucketListSettings_inputs\"\n                                        id=\"updatable_bucket_list_newBucket\" placeholder=\"Add a new bucket\"\n                                        value={{bucket_new.bucket_name}}\n                                        (change)=\"bucket_new.bucket_name = $event.target.value\">\n                                    <div class=\"input-group-append\">\n                                        <button type=\"button\" class=\"btn btn-success btn-action-borderless\"\n                                            id=\"updatable_bucket_list_add\" (click)=\"addNewBucket()\">Add</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <table [hidden]=\"!bucket_list_confirm_bool\" class=\"table table-borderless table-sm \">\n                                <thead class=\"thead-light\">\n                                    <tr>\n                                        <th>ID</th>\n                                        <th>Bucket Name</th>\n                                        <th>Bucket change</th>\n                                        <th>Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let b of bucket_list_confirm_list | keyvalue\">\n                                        <th scope=\"row\">{{b.key}}</th>\n                                        <td>{{b.value['bucket_name']}}</td>\n                                        <td>\n                                            <p *ngIf=\"b.value['New Bucket name']\">New name: <span\n                                                    class=\"text-success\">{{b.value['New Bucket name']}}</span></p>\n                                            <p *ngIf=\"b.value['status']\">Now is\n                                                <span *ngIf=\"!b.value['soft_delete']\"\n                                                    class=\"text-success\">{{b.value['status']}}</span>\n                                                <span *ngIf=\"b.value['soft_delete']\"\n                                                    class=\"text-danger\">{{b.value['status']}}</span>\n                                            </p>\n                                        </td>\n                                        <td>\n                                            <button (click)=\"bucketUndoOne(b.key, b.value['index'])\"\n                                                class='btn btn-outline-warning btn-action-borderless'>Undo</button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" *ngIf=\"bucket_list_changes_bool\"\n                                class=\"btn btn-action-borderless btn-outline-danger\" (click)=\"bucketListEditorCancel()\"\n                                data-dismiss=\"modal\">Cancel changes</button>\n                            <button type=\"button\" *ngIf=\"!bucket_list_changes_bool\"\n                                class=\"btn btn-action-borderless btn-outline-info\" (click)=\"bucketListEditorClose()\"\n                                data-dismiss=\"modal\">Close</button>\n                            <!-- <button type=\"button\" [hidden]=\"bucket_list_confirm_bool\" class=\"btn btn-action-borderless btn-outline-warning\" (click)=\"bucketListEditorConfirm()\">Confirm</button> -->\n                            <button type=\"button\" [disabled]=\"!bucket_list_changes_bool\"\n                                class=\"btn btn-action-borderless btn-outline-success\"\n                                (click)=\"bucketListEditorSave()\">Save</button>\n                        </div>\n                    </div>\n                </div>\n                <!-- IMAGE VIEWER -->\n                <div class=\"modal-content shadow-lg\" *ngIf=\"modal_message.title == 'Image'\">\n                    <div>\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalCenteredLabel\">{{modal_message.title}}</h5>\n                            <button type=\"button\" class=\"close\" (click)=\"bucketListEditorClose()\" data-dismiss=\"modal\"\n                                aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body modal-img\" style=\"padding: 0px 1rem\">\n                            <img src=\"{{modal_message.body}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"admin-create-quiz-title\" role=\"group\">\n            <h1>Edit a quiz #{{topic_id}}</h1>\n            <div class=\"btn-group-vertical\" style=\"margin: 20px auto\" role=\"group\" aria-label=\"\">\n                <!-- <button (click)=\"checkState()\">Check state</button> -->\n                <button class=\"btn btn-warning shadow btn-action-borderless btn-outline-warning-hover-side-shadow\"\n                    *ngIf='!topic_soft_delete' (click)=\"topic_soft_delete = true\">Disable Quiz</button>\n                <button class=\"btn btn-success shadow btn-action-borderless\"\n                    *ngIf='topic_soft_delete && !topic_delete_confirm' (click)=\"topic_soft_delete = false\">Enable\n                    Quiz</button>\n                <button class=\"btn btn-danger shadow btn-action-borderless\"\n                    *ngIf='topic_soft_delete && !topic_delete_confirm' (click)=\"topic_delete_confirm = true\">Delete\n                    Quiz</button>\n            </div>\n            <div class=\"admin-create-quiz-title\" style=\"margin: 20px auto\" *ngIf=\"topic_delete_confirm\">\n                <p class=''>Are you sure to delete this quiz?</p>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"\">\n                    <button type=\"button\" (click)=\"deleteQuiz()\" class=\"btn btn-danger \">Yes</button>\n                    <button type=\"button\" (click)=\"topic_delete_confirm = false\"\n                        class=\"btn btn-warning \">Cancel</button>\n                </div>\n            </div>\n        </div>\n        <div class=\"admin-create-quiz-body\" style=\"margin: 20px auto\">\n            <div class=\"admin-create-quiz-body-topic-cat-eng-box\">\n                <div class=\"input-group\">\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Engagement</span>\n                        <select style=\"border-radius: 0px;\" class=\"custom-select shadow\"\n                            (change)=\"valueChanger('engagement', $event.target.value)\" [disabled]=\"topic_soft_delete\">\n                            <option *ngFor=\"let eng of engagements\" [selected]=\"eng.engagement_id==selected_eng\"\n                                [disabled]=\"eng.soft_delete\" value={{eng.engagement_id}}>{{eng.engagement_name}}\n                            </option>\n                        </select>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Category</span>\n                        <input style=\"border-radius: 0px;\" [disabled]=\"!selected_eng || topic_soft_delete\"\n                            class=\"custom-select shadow\" type=\"text\" id=\"category_selector\" list=\"categories\"\n                            value=\"{{selected_category}}\" (change)=\"valueChanger('category', $event.target.value)\" />\n                        <datalist id=\"categories\">\n                            <select class=\"custom-select\">\n                                <option *ngFor=\"let c of categories_list | keyvalue\"\n                                    [selected]=\"c.key == selected_category\" [value]=\"c.key\"><span\n                                        *ngIf=\"c.key == original_category\">(Original)</span></option>\n                            </select>\n                        </datalist>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Topic</span>\n                        <input style=\"border-radius: 0px;\" [disabled]=\"!selected_category || topic_soft_delete\"\n                            id=\"topic_selector\" class=\"custom-select shadow\" type=\"text\" list=\"topics\"\n                            value=\"{{selected_topic}}\" (change)=\"valueChanger('topic', $event.target.value)\" />\n                        <datalist id=\"topics\">\n                            <select class=\"custom-select\">\n                                <option *ngFor=\"let t of topic_list | keyvalue\" [value]=\"t.value['topic']\">\n                                    <span *ngIf=\"t.value['topic'] != original_topic\">(Already exists)</span>\n                                    <span *ngIf=\"t.value['topic'] == original_topic\">(Original)</span>\n                                </option>\n                            </select>\n                        </datalist>\n                    </div>\n                    <div class=\"admin-create-quiz-body-topic-cat-eng-box-select-box\">\n                        <span class=\"text-muted\">Time limit</span>\n                        <select style=\"border-radius: 0px;\" [disabled]=\"topic_soft_delete\" class=\"custom-select shadow\"\n                            (change)=\"valueChanger('time_limit', $event.target.value)\">\n                            <option value=null [selected]=\"!time_limit\">No limit</option>\n                            <option value=\"15\" [selected]=\"time_limit == 15\">15 minutes</option>\n                            <option value=\"30\" [selected]=\"time_limit == 30\">30 minutes</option>\n                            <option value=\"45\" [selected]=\"time_limit == 45\">45 minutes</option>\n                            <option value=\"60\" [selected]=\"time_limit == 60\">60 minutes</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n\n            <div style=\"margin-top: 15px\">\n                <button class=\"btn btn-lg btn-action-borderless btn-secondary shadow\" [disabled]=\"topic_soft_delete\"\n                    (click)=\"openBucketEditor()\">Add/Edit Buckets</button>\n            </div>\n            <div [hidden]=\"!submit_ready\" class=\"alert alert-success text-center shadow\"\n                style=\"width: 500px; margin: 50px auto;\" role=\"alert\">\n                <strong>All questions are good!</strong>\n            </div>\n            <div *ngIf=\"topic_cat_eng_message.display && !submit_ready\" style=\"margin-top: 15px\">\n                <div *ngIf=\"topic_cat_eng_message.status == 'fail'\" class=\"alert alert-warning shadow\" role=\"alert\">\n                    <strong>Warning!</strong> {{topic_cat_eng_message.message}}\n                </div>\n                <div *ngIf=\"topic_cat_eng_message.status == 'success'\" class=\"alert alert-success shadow\" role=\"alert\">\n                    <strong>Nice!</strong> {{topic_cat_eng_message.message}}\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center\" *ngIf=\"!submit_status.display\"\n                style=\"margin-top: 50px; margin-bottom: 50px;\">\n                <button [hidden]=\"submit_ready\" class=\"btn btn-lg btn-info btn-action-borderless shadow\"\n                    (click)=\"validateQuiz()\">Validate</button>\n                <div [hidden]=\"!submit_ready\" class=\"shadow btn-group btn-group-lg \" role=\"group\">\n                    <button class=\"btn btn-lg btn-success btn-action-borderless\" (click)=\"submitQuiz()\">Submit</button>\n                    <button class=\"btn btn-lg btn-warning btn-action-borderless\"\n                        (click)=\"cancelSubmitQuiz()\">Cancel</button>\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center\"\n                *ngIf=\"submit_status.display && submit_status.status == 'success'\"\n                style=\"margin-top: 50px; margin-bottom: 100px;\">\n                <div class=\"alert alert-success shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Well done!</h4>\n                    You successfully edited the quiz.\n                    <br>\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-outline-light btn-action-borderless \"\n                        (click)=\"goBack()\">Click here to go back to the admin portal</a>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\" *ngIf=\"submit_status.display && submit_status.status == 'fail'\"\n                style=\"margin-top: 50px; margin-bottom: 100px;\">\n                <div class=\"alert alert-error shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Quiz updating failed</h4>\n                    Something went wrong on the backend.\n                    {{submit_status.message}}\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-link btn-action-borderless \" (click)=\"goBack()\">Click here\n                        to go back to the admin portal</a>\n                </div>\n            </div>\n\n        </div>\n\n        <div class='admin-create-quiz-form' style=\"margin-top: 25px;\">\n            <table class=\"table table-borderless shadow\">\n                <thead class=\"thead-dark sticky-top\">\n                    <tr style=\"height: 50px\">\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 5%\">\n                            ID/Priority\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Question prompt</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Image</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 7%\">Display\n                            Type\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">List of choices/Expected\n                            Answer\n                        </th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Admin notes</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\" style=\"width: 5%\">Action\n                        </th>\n                    </tr>\n                </thead>\n                <tbody style=\"background: white\">\n                    <tr *ngFor='let q of list_of_questions | keyvalue' class=\"create_form_row\" [ngClass]=\"{ \n                                    'border border-success': q.key == 'new_question',\n                                    'element_hard_deleted': q.value['question_hard_delete'], \n                                    'border-top': !q.value['error_bool'],\n                                    'alert-secondary': q.value['question_soft_delete'] || topic_soft_delete }\">\n                        <!-- QUESTIONS -->\n                        <td *ngIf=\"!q.value['error_bool']\" class='text-center table-row'>\n                            <p class=\"\" [ngClass]=\"{ 'text-success': q.key == 'new_question' }\">{{q.key}}</p>\n                            <div>\n                                <input style=\"width: 100%; padding: 0px 0px !important\"\n                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    (change)=\"inputEditor('question_sort', q.key, 'question_sort', null, $event.target.value)\"\n                                    class=\"edit_sort_value form-control create_form_input_shadow\" min=1 max=99\n                                    type=\"number\" value=1 title=\"Set Question Priority\" data-toggle=\"tooltip\"\n                                    data-placement=\"bottom\" title=\"Tooltip on bottom\"\n                                    value=\"{{list_of_questions[q.key]['question_sort']}}\">\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\" style=\"padding: 0px 3px !important;\">\n                            <textarea class='textAreaPrompt form-control create_form_input_shadow'\n                                [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                (change)=\"inputEditor('prompt', q.key, 'prompt', null, $event.target.value)\" rows=4\n                                name='questionPromts' id='questionPromt_{{q.key}}'\n                                value=\"{{q.value['prompt']}}\"></textarea>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\" class='create_form_img_box' align=\"center\">\n                            <div *ngIf=\"!q.value['image']\">\n                                <label for=\"file-upload{{q.key}}\" style=\"width: 100%;\"\n                                    class=\"custom-file-upload btn btn-sm btn-outline-secondary btn-action-borderless\">\n                                    &#8682; Upload Picture\n                                </label>\n                                <input id=\"file-upload{{q.key}}\" type=\"file\"\n                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    (change)=\"inputEditor('img', q.key, 'base64', null, $event.target.files)\"\n                                    accept=\"image/*\" />\n                            </div>\n                            <div *ngIf=\"q.value['image']\" style=\"position: relative\">\n                                <img src=\"{{q.value['base64']}}\" class=\"img-fluid\" alt=\"Responsive image\"\n                                    (click)=\"imageZoom(q.key)\">\n                                <button class=\"btn btn-sm btn-outline-danger btn-image-remove\"\n                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    (click)=\"removeImg(q.key)\">x</button>\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <div class=\"btn-group-vertical btn-group-toggle\" data-toggle=\"buttons\"\n                                [hidden]='q.value.question_soft_delete || topic_soft_delete'>\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.question_type_id == 2, 'shadow':  q.value.question_type_id == 2}\"\n                                    (click)=\"displayTypeChanger(q.key, 'textfield input')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"manual_input\" value=\"textfield input\" checked=\"checked\"> Manual Input</button>\n\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.display_type_id == 1 && q.value.question_type_id == 1, 'shadow': q.value.display_type_id == 1 && q.value.question_type_id == 1 }\"\n                                    (click)=\"displayTypeChanger(q.key, 'Radio')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"radio \" value=\"Radio\"> Radio</button>\n\n                                <!-- <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary \"\n                                                [disabled]=\"q.value.question_soft_delete\"\n                                                [ngClass]=\"{ 'active': q.value.display_type_id == 3 && q.value.question_type_id == 1 }\" \n                                                (click)=\"displayTypeChanger( q.key, 'Dropdown')\" type=\"radio\" name=\"displayTypeNew\" \n                                                id=\"dropdown\" value=\"Dropdown\"> Dropdown</button> -->\n\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.display_type_id == 2 && q.value.question_type_id == 1, 'shadow': q.value.display_type_id == 2 && q.value.question_type_id == 1 }\"\n                                    (click)=\"displayTypeChanger(q.key, 'Checkbox')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew \"\n                                    id=\"checkbox \" value=\"Checkbox \"> Checkbox</button>\n                                <button class=\"btn btn-sm btn-action-borderless btn-outline-secondary\"\n                                    [ngClass]=\"{ 'active': q.value.question_type_id == 3, 'shadow':q.value.question_type_id == 3 }\"\n                                    (click)=\"displayTypeChanger( q.key, 'drag_and_drop')\"\n                                    [disabled]=\"q.value.question_soft_delete\" type=\"radio\" name=\"displayTypeNew\"\n                                    id=\"drag_and_drop\" value=\"drag_and_drop\">Drag'n'Drop</button>\n                            </div>\n                            <div class=\"btn-group-vertical btn-group-toggle bg-secondary text-white create_form_input_shadow\"\n                                style=\"text-align: center;\"\n                                [hidden]='!q.value.question_soft_delete || topic_soft_delete || q.value.question_hard_delete'\n                                role=\"alert\">\n                                Question is disabled\n                            </div>\n                            <div class=\"btn-group-vertical btn-group-toggle bg-danger text-white create_form_input_shadow shadow\"\n                                style=\"text-align: center;\" [hidden]='!q.value.question_hard_delete' role=\"alert\">\n                                Question will be deleted\n                            </div>\n                        </td>\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <!-- NOT SELECTED -->\n                            <div *ngIf=\"!q.value['question_type_description']\">\n                                <p align=\"center\" class='text-muted'>Please check type of question.</p>\n                            </div>\n                            <!-- <p>hide text input => {{q.value['question_type_id'] != 2}}</p>\n                                        <p>hide drag and drop => {{q.value['question_type_id'] != 3}}</p>\n                                        <p>hide radio => {{q.value['question_type_id'] != 1}} {{q.value['display_type_id'] != 1}}</p>\n                                        <p></p> -->\n\n                            <!-- MANUAL INPUT -->\n                            <div style=\"padding: 0px 3px !important;\" [hidden]=\"q.value['question_type_id'] != 2\">\n                                <textarea [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    (change)=\"inputEditor('expected_response', q.key, 'expected_response', null, $event.target.value)\"\n                                    class='textAreaExpectedAnswer form-control create_form_input_shadow' rows=4\n                                    placeholder=\"Expected answer (optional)\"\n                                    value=\"{{q.value['expected_response']}}\"></textarea>\n                            </div>\n\n\n                            <!-- DRAG AND DROP  -->\n                            <div class=\"input-group mt-2\" [hidden]=\"q.value['question_type_id'] != 3\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"input-group mt-1\"\n                                    [ngClass]=\"{\n                                                'alert-secondary': q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key],\n                                                'element_hard_deleted': answer_delete_confirm_list[ans.key]\n                                                }\">\n                                    <input type=\"text\"\n                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                        (change)=\"inputEditor('drag_and_drop', q.key, 'answer_prompt', ans.key, $event.target.value)\"\n                                        class=\"form-control bucket_input_edit bucket_input_edit_question_{{q.key}}\"\n                                        id=\"bucket_input_edit_{{q.key}}\" placeholder='Add a choice'\n                                        style=\"padding: 0px; border-radius: 0px;\" value=\"{{ans.value}}\">\n                                    <select list=\"bucket_list\"\n                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                        (change)=\"inputEditor('drag_and_drop', q.key, 'answer_bucket_id', ans.key, $event.target.value)\"\n                                        class=\"form-control bucket_list_pick\" id=\"bucket_list_pick_{{q.key}}\"\n                                        placeholder='Bucket' style=\"padding: 0px; border-radius: 0px;\">\n                                        <!-- <option *ngFor=\"let b of bucket_list\" value=\"{{b.bucket_id}}\"\n                                                            [selected]=\"q['answer_bucket_id'][ans.key] == b.bucket_id\">\n                                                            {{b.bucket_name}}</option> -->\n                                        <option disabled>\n                                            Choose Bucket</option>\n\n                                        <ng-container *ngFor=\"let b of bucket_list | keyvalue\">\n                                            <option *ngIf=\"!b.value.soft_delete\"\n                                                [selected]=\"q.value['answer_bucket_id'][ans.key] == b.key\"\n                                                value=\"{{b.key}}\">{{b.value.bucket_name}}</option>\n                                        </ng-container>\n                                    </select>\n                                    <div class=\"input-group-append\">\n                                        <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                            class=\"btn btn-warning\"\n                                            (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, false)\"\n                                            *ngIf=\"answer_delete_confirm_list[ans.key] \" id='buttonRemoveAnswer${i}'\n                                            type=\"button\">Restore</button>\n                                        <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                            class=\"btn btn-danger\"\n                                            (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, true)\"\n                                            *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                            id='buttonRemoveAnswer${i}' type=\"button\">Delete</button>\n                                        <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                            class=\"btn btn-outline-success buttonRemoveAnswer\"\n                                            (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, false)\"\n                                            *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                            id='buttonRemoveAnswer${i}' type=\"button\">+</button>\n                                        <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                            class=\"btn btn-outline-warning buttonRemoveAnswer\"\n                                            (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, true)\"\n                                            *ngIf=\"!q.value['answer_soft_delete'][ans.key]\" id='buttonRemoveAnswer${i}'\n                                            type=\"button\">-</button>\n                                    </div>\n                                </div>\n                                <div class=\"input-group-prepend\">\n                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                        class=\"btn btn-outline-success bucket_input_add_button btn-action-borderless\"\n                                        (click)=\"dragAndDropAdder(q.key)\" style=\"font-size: smaller; padding: 8px;\"\n                                        id='bucket_input_add_button_{{q.key}}' type=\"button\">+</button>\n                                </div>\n                                <input style=\"border-radius: 0px;\" type=\"text\"\n                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    (change)=\"inputEditor('drag_and_drop', q.key, 'temp_bucket_storage', 'answer_input', $event.target.value)\"\n                                    class=\"form-control bucket_input_add\" id=\"bucket_input_add_input_{{q.key}}\"\n                                    placeholder='Add a choice' style=\"padding: 0px;\">\n                                <select [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    list=\"bucket_list\" type=\"text\"\n                                    (change)=\"inputEditor('drag_and_drop', q.key, 'temp_bucket_storage', 'bucket_id', $event.target.value)\"\n                                    class=\"form-control bucket_list_pick\" id=\"bucket_list_pick_{{q.key}}\"\n                                    placeholder='Bucket' style=\"padding: 0px; border-radius: 0px !important;\">\n                                    <option style=\"border-radius: 0px !important;\" value=\"\" selected disabled\n                                        class=\"text-muted\">Choose bucket</option>\n                                    <option disabled\n                                        style=\"margin-top:8px; border-top:1px solid #666; padding:0; border-radius: 0px !important;\">\n                                        ____________</option>\n                                    <ng-container *ngFor=\"let b of bucket_list | keyvalue\">\n                                        <option *ngIf=\"!b.value.soft_delete\" value=\"{{b.key}}\"\n                                            style=\"border-radius: 0px !important;\">{{b.value.bucket_name}}</option>\n                                    </ng-container>\n                                </select>\n                            </div>\n\n\n                            <!-- CHECKBOX  -->\n                            <!-- {{q.value['display_type_description'] == 'Checkbox'}} {{q.value['question_type_description'] == 'selected input'}} {{ q.value.display_type_id == 1}} -->\n\n                            <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 2\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" [ngClass]=\"{\n                                                'alert-secondary': q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key],\n                                                'element_hard_deleted': answer_delete_confirm_list[ans.key]\n                                                }\">\n                                    <div>\n                                        <input\n                                            [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                            class=\"answerChoice\" style=\"margin: 5px\"\n                                            (change)=\"inputEditor('answer', q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\"\n                                            [checked]=q.value.answer_correct[ans.key] type=\"checkbox\"\n                                            id=\"checkbox_{{ans.key}}\"\n                                            title=\"Select the right answer. You can chose multiple.\" />\n                                        <label for=\"checkbox_{{ans.key}}\" onclick=\"return false;\"\n                                            style=\"margin:0px 0px; width:92%\">\n                                            <div class=\"input-group mb-1\">\n                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                    <input\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                                        type=\"number\"\n                                                        (change)=\"inputEditor('answer', q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                        class=\"answer_order_edit form-control create_form_input_shadow\"\n                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                        title=\"Set priority of the answer.\">\n                                                </div>\n                                                <input\n                                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                                    class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                    value='{{ans.value}}'\n                                                    (change)=\"inputEditor('answer', q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                <div class=\"input-group-append\">\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-warning\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, false)\"\n                                                        *ngIf=\"answer_delete_confirm_list[ans.key] \"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">Restore</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-danger\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, true)\"\n                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">Delete</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-outline-success buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, false)\"\n                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">+</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-outline-warning buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, true)\"\n                                                        *ngIf=\"!q.value['answer_soft_delete'][ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                </div>\n                                            </div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <!-- DROPDOWN/SELECT -->\n                            <!-- <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 3\">\n                                            <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"custom-radio\" [ngClass]=\"{\n                                                'alert-secondary': q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key],\n                                                'element_hard_deleted': answer_delete_confirm_list[ans.key]\n                                                }\">\n                                                <div>\n                                                        {{q.value.answer_correct | json}}\n                                                    <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\" \n                                                            class=\"answerChoice\" \n                                                            style=\"margin: 5px\" \n                                                            (change)=\"inputEditor('answer',q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\" \n                                                            [checked]=q.value.answer_correct[ans.key] \n                                                            type=\"radio\" \n                                                            id=\"checkbox_{{ans.key}}\" \n                                                            title=\"Select the right answer. You can chose only one answer.\"\n                                                            name=\"radio_answer_for_question_{{q.key}}\" />\n                                                    <label for=\"checkbox_{{ans.key}}\" onclick=\"return false;\" style=\"margin:0px 0px; width:92%\">\n                                                            <div class=\"input-group mb-1\">\n                                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                                    <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\" \n                                                                        type=\"number\"\n                                                                        (change)=\"inputEditor('answer',q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                                        class=\"form-control answer_order_edit create_form_input_shadow\"\n                                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                                        title=\"Set priority of the answer.\">\n                                                                </div>\n                                                                <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\" class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                                    value='{{ans.value}}'\n                                                                    (change)=\"inputEditor('answer',q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                                <div class=\"input-group-append\">\n                                                                        <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" class=\"btn btn-warning\"\n                                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, false)\"\n                                                                        *ngIf=\"answer_delete_confirm_list[ans.key] \"\n                                                                        id='buttonRemoveAnswer${i}' type=\"button\">Restore</button>\n                                                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" class=\"btn btn-danger\"\n                                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, true)\"\n                                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                                        id='buttonRemoveAnswer${i}' type=\"button\">Delete</button>\n                                                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" class=\"btn btn-outline-success buttonRemoveAnswer\"\n                                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, false)\"\n                                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                                        id='buttonRemoveAnswer${i}' type=\"button\">+</button>\n                                                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" class=\"btn btn-outline-warning buttonRemoveAnswer\"\n                                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, true)\"\n                                                                        *ngIf=\"!q.value['answer_soft_delete'][ans.key]\"\n                                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                                </div>\n                                                            </div>\n                                                        </label>\n                                                </div>\n                                            </div>\n                                        </div> -->\n\n\n                            <!-- RADIO -->\n                            <div [hidden]=\"q.value['question_type_id'] != 1 || q.value['display_type_id'] != 1\">\n                                <div *ngFor=\"let ans of q.value['answer_prompt'] | keyvalue\" class=\"custom-radio\"\n                                    [ngClass]=\"{\n                                                'alert-secondary': q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key],\n                                                'element_hard_deleted': answer_delete_confirm_list[ans.key]\n                                                }\">\n                                    <div>\n                                        <input\n                                            [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                            class=\"answerChoice\" style=\"margin: 5px\"\n                                            (change)=\"inputEditor('answer',q.key, 'answer_correct', ans.key, !q.value['answer_correct'][ans.key])\"\n                                            [checked]=q.value.answer_correct[ans.key] type=\"radio\"\n                                            id=\"checkbox_{{ans.key}}\"\n                                            title=\"Select the right answer. You can chose only one answer.\"\n                                            name=\"radio_answer_for_question_{{q.key}}\" />\n                                        <label for=\"checkbox_{{ans.key}}\" onclick=\"return false;\"\n                                            style=\"margin:0px 0px; width:92%\">\n                                            <div class=\"input-group mb-1\">\n                                                <div class=\"input-group-prepend\" style=\"width: 15%;\">\n                                                    <input\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                                        type=\"number\"\n                                                        (change)=\"inputEditor('answer',q.key, 'answer_sort', ans.key, $event.target.value)\"\n                                                        class=\"form-control answer_order_edit create_form_input_shadow\"\n                                                        min=\"1\" id=\"answer_order_edit_{{ans.key}}\" style=\"width: 90%;\"\n                                                        value=\"{{q.value['answer_sort'][ans.key] }}\"\n                                                        data-toggle=\"tooltip\" data-placement=\"bottom\"\n                                                        title=\"Set priority of the answer.\">\n                                                </div>\n                                                <input\n                                                    [disabled]=\"q.value.question_soft_delete || topic_soft_delete || q.value.answer_soft_delete[ans.key]\"\n                                                    class=\"form-control create_form_input_shadow\" type=\"text\"\n                                                    id=\"answerId${id}\" value=\"\" aria-describedby=\"basic-addon2\"\n                                                    value='{{ans.value}}'\n                                                    (change)=\"inputEditor('answer',q.key, 'answer_prompt', ans.key, $event.target.value)\" />\n                                                <div class=\"input-group-append\">\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-warning\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, false)\"\n                                                        *ngIf=\"answer_delete_confirm_list[ans.key] \"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">Restore</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-danger\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_hard_delete', ans.key, true)\"\n                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">Delete</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-outline-success buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, false)\"\n                                                        *ngIf=\"q.value['answer_soft_delete'][ans.key] && !answer_delete_confirm_list[ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">+</button>\n                                                    <button\n                                                        [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                                        class=\"btn btn-outline-warning buttonRemoveAnswer\"\n                                                        (click)=\"inputEditor('answer', q.key, 'answer_soft_delete', ans.key, true)\"\n                                                        *ngIf=\"!q.value['answer_soft_delete'][ans.key]\"\n                                                        id='buttonRemoveAnswer${i}' type=\"button\">-</button>\n                                                </div>\n                                            </div>\n                                        </label>\n                                    </div>\n                                </div>\n                            </div>\n\n\n                            <!-- ADD ANSWER FORM -->\n                            <div style=\"padding-right: 3px !important;\"\n                                class=\"input-group mb-3 create_form_input_shadow\"\n                                [hidden]=\"q.value['question_type_id'] != 1\">\n                                <div class=\"input-group-prepend\" style=\"width: 25px\">\n\n                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                        class=\"btn btn-success create_form_answer_add btn-action-borderless\"\n                                        id='buttonAddNewAnswer_{{q.key}}' type=\"button\"\n                                        (click)=\"addAnswer(q.key)\">+</button>\n                                </div>\n                                <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" type=\"text\"\n                                    class=\"form-control create_form_input_shadowless  edit_quiz_input_text_add\"\n                                    id=\"newAnswerFor_{{q.key}}\" placeholder='Add an answer'\n                                    aria-describedby=\"basic-addon2\">\n                            </div>\n\n                        </td>\n\n                        <!-- ADMIN NOTES -->\n                        <td *ngIf=\"!q.value['error_bool']\">\n                            <div class=\"input-group\">\n                                <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete \"\n                                    class=\"create_form_input_shadow form-control \"\n                                    value=\"{{list_of_questions[q.key]['training_url']}}\" type=\"text\"\n                                    placeholder=\"Confluence link (optional)\"\n                                    (change)=\"inputEditor(null, q.key, 'training_url', null, $event.target.value)\"\n                                    style=\"border-radius: 0px\">\n                                <div class=\"input-group-append\">\n                                    <button [disabled]=\"q.value.question_soft_delete || topic_soft_delete\" type='button'\n                                        class='buttonConfluenceLink btn btn-xs  btn-outline-secondary'\n                                        id='buttonConfluenceLinkForQuestion${id}' (click)=\"checkModuleLink(q.key)\"\n                                        style=\"border-radius: 0px\">Check</button>\n                                </div>\n                            </div>\n                            <div id='module_field${id}'>\n                                <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    class=\"create_form_input_shadow form-control\"\n                                    value=\"{{list_of_questions[q.key]['training_module']}}\"\n                                    (change)=\"inputEditor('training_module', q.key,'training_module', null, $event.target.value)\"\n                                    id='editModuleForQuestionId${id}' type=\"text\" placeholder=\"Module note (optional)\">\n                            </div>\n                            <div class=\"input-group  mb-3\" style=\"width: 185px;\">\n                                <div class=\"input-group-prepend input-group-text bg-secondary text-white\">\n                                    Question value\n                                </div>\n                                <input [disabled]=\"q.value.question_soft_delete || topic_soft_delete\"\n                                    class=\"form-control create_form_input_shadow\"\n                                    value=\"{{list_of_questions[q.key]['point_value']}}\"\n                                    (change)=\"inputEditor('point_value', q.key,'point_value', null, $event.target.value)\"\n                                    type=\"number\" min=\"1\" max=\"10\" style=\"padding: 0px 5px;\">\n                            </div>\n                        </td>\n\n                        <!-- ACTION BUTTONS -->\n                        <td style='text-align: center' *ngIf=\"!q.value['error_bool']\">\n                            <div [hidden]=\"topic_soft_delete\">\n                                <!-- <button class='btn btn-outline-primary btn-action-borderless' disabled style=\"width: 100%\">🔍 Preview</button> -->\n                                <button *ngIf=\"q.key == 'new_question'\"\n                                    class='btn btn-outline-success btn-action-borderless' (click)=\"addQuestion()\"\n                                    style=\"width: 100%\">+ Add</button>\n                                <button\n                                    *ngIf=\"q.key != 'new_question' && q.value['question_soft_delete'] && !list_of_new_questions[q.key] &&  !q.value['question_hard_delete']\"\n                                    class='btn btn-outline-success btn-action-borderless'\n                                    (click)=\"enableQuestion(q.key)\" style=\"width: 100%\">Enable</button>\n                                <button\n                                    *ngIf=\"q.key != 'new_question' &&  !q.value['question_hard_delete'] && q.value['question_soft_delete'] || list_of_new_questions[q.key]\"\n                                    class='btn btn-danger btn-action-borderless' (click)=\"removeQuestion(q.key)\"\n                                    style=\"width: 100%\">Remove</button>\n                                <button\n                                    *ngIf=\"q.key != 'new_question' && !q.value['question_soft_delete'] && !list_of_new_questions[q.key]\"\n                                    class='btn btn-outline-warning btn-action-borderless'\n                                    (click)=\"disableQuestion(q.key)\" style=\"width: 100%\">Disable</button>\n\n                                <button *ngIf=\"q.key != 'new_question' && q.value['question_hard_delete']\"\n                                    class='btn btn-warning btn-action-borderless' (click)=\"restoreQuestion(q.key)\"\n                                    style=\"width: 100%\">Restore</button>\n\n                            </div>\n                        </td>\n\n                        <!-- ERROR -->\n                        <td colspan=\"7\" *ngIf=\"q.value['error_bool']\" style=\"padding: 10px 10px !important\">\n                            <div class=\"alert alert-warning shadow\" role=\"alert\"\n                                style=\"width: 500px; margin: 0px auto;\">\n                                <button type=\"button\" class=\"close\" (click)=\"errorRemoveById(q.key)\">\n                                    <span aria-hidden=\"true\">&times;</span>\n                                </button>\n                                <p class=\"text-center \"><strong>{{q.value['target']}} error(s):</strong></p>\n                                <p *ngFor=\"let error of q.value['errors'] | keyvalue\" class=\"text-center\"\n                                    style=\"margin-bottom: 0px !important\">{{error.value}}</p>\n                            </div>\n                        </td>\n\n\n                    </tr>\n                    <!-- <tr *ngIf=\"list_of_questions.new_question_error\" class=\"create_form_row\">\n                                    <td colspan=\"7\" (click)=\"errorHandlerRemover('new_question')\" class=\"errorHandlerBox\">\n                                        <div class=\"alert alert-danger shadow errorHandler\" role=\"alert\">\n                                            <p class=\"text-center\" *ngFor=\"let el of list_of_questions.new_question_error.errors | keyvalue\">\n                                                {{el.value}}\n                                            </p>\n                                        </div>\n                                    </td>\n                                </tr> -->\n                </tbody>\n            </table>\n            <div [hidden]=\"!submit_ready\" class=\"alert alert-success text-center shadow\"\n                style=\"width: 500px; margin: 50px auto;\" role=\"alert\">\n                <strong>All questions are good!</strong>\n            </div>\n            <div class=\"d-flex justify-content-center\" *ngIf=\"!submit_status.display\"\n                style=\"margin-top: 50px; margin-bottom: 100px;\">\n                <button [hidden]=\"submit_ready\" class=\"btn btn-lg btn-info btn-action-borderless shadow\"\n                    (click)=\"validateQuiz()\">Validate</button>\n                <div [hidden]=\"!submit_ready\" class=\"shadow btn-group btn-group-lg \" role=\"group\">\n                    <button class=\"btn btn-lg btn-success btn-action-borderless\" (click)=\"submitQuiz()\">Submit</button>\n                    <button class=\"btn btn-lg btn-warning btn-action-borderless\"\n                        (click)=\"cancelSubmitQuiz()\">Cancel</button>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\"\n                *ngIf=\"submit_status.display && submit_status.status == 'success'\"\n                style=\"margin-top: 50px; margin-bottom: 100px;\">\n                <div class=\"alert alert-success shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Well done!</h4>\n                    You successfully edited the quiz.\n                    <br>\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-outline-light btn-action-borderless \"\n                        (click)=\"goBack()\">Click here to go back to the admin portal</a>\n                </div>\n            </div>\n\n            <div class=\"d-flex justify-content-center\" *ngIf=\"submit_status.display && submit_status.status == 'fail'\"\n                style=\"margin-top: 50px; margin-bottom: 100px;\">\n                <div class=\"alert alert-error shadow\" role=\"alert\"\n                    style=\"display: flex; align-items: center; flex-direction: column;\">\n                    <h4 class=\"alert-heading\">Quiz updating failed</h4>\n                    Something went wrong on the backend.\n                    {{submit_status.message}}\n                    <a [hidden]=\"submit_ready\" class=\"btn btn-link btn-action-borderless \" (click)=\"goBack()\">Click here\n                        to go back to the admin portal</a>\n                </div>\n            </div>\n            <!-- <button class=\"btn btn-lg shadow\" (click)=\"checkState()\">Check State</button> -->\n\n\n        </div>\n    </div>\n\n    <div *ngIf=\"!list_of_questions_bool\" class=\" loading_box element-animation-fadeIn\"\n        style=\" margin-top: 100px;height: 300px;\">\n        <h2>Loading...</h2>\n        <div class=\"spinner-border\" role=\"status\">\n            <span class=\"sr-only\"></span>\n        </div>\n    </div>\n\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-editquiz/admin-editquiz.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-editquiz/admin-editquiz.component.ts ***!
  \************************************************************/
/*! exports provided: AdminEditquizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditquizComponent", function() { return AdminEditquizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../question */ "./src/app/question.ts");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../object_validation.js */ "./src/app/object_validation.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_object_validation_js__WEBPACK_IMPORTED_MODULE_7__);








var AdminEditquizComponent = /** @class */ (function () {
    function AdminEditquizComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.currentUser = JSON.parse(localStorage['user']);
        this.categories_list = null;
        this.topic_list = null;
        this.selected_category = null;
        this.selected_topic = null;
        this.selected_eng = null;
        this.topic_soft_delete = false;
        this.topic_delete_confirm = false;
        this.original_category = null;
        this.original_topic = null;
        this.original_eng = null;
        this.submit_ready = false;
        this.topic_cat_eng_message = {
            'display': false,
            'status': "",
            'message': ""
        };
        this.temp_bucket_storage = {
            'answer_input': '',
            'bucket_id': null
        };
        this.list_of_questions = {};
        this.list_of_questions_bool = false;
        this.list_of_new_questions = {};
        this.list_of_deleted_questions = {};
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': ''
        };
        this.bucket_list_confirm_bool = false;
        this.bucket_list_confirm_list = null;
        this.bucket_list_changes_bool = false;
        this.bucket_list_changes_list = {};
        this.bucketList_reloader = {
            'new_question': true
        };
        this.submit_status = {
            status: '',
            message: '',
            display: false
        };
        this.answer_delete_confirm_list = {};
        this.bucket_new = {
            bucket_name: ''
        };
        this.bucket_list_counter = {};
        this.time_limit = null;
        this.start_time = null;
        this.now = new Date();
        this.quiz_info = {
            statuses: {
                info: 'loading',
                questions: 'loading',
                buckets: 'loading'
            },
            questions: {}
        };
        this.list_of_questions = {};
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
            _this.topic_id = params.get('topicID');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                // let that = this;
                // this._ConnectorService.getQuizInfoById(this.topic_id, this.currentUser['email']).then(function(data) {
                //   console.log("data =>",data);
                //   if(data['status'] == 'success'){
                //     that.quiz_info.questions = data['body']['questions'];
                //     that.quiz_info['category'] = data['body']['quiz_info'][0].category;
                //     that.quiz_info['engagement_id'] = data['body']['quiz_info'][0].engagement_id;
                //     that.quiz_info['engagement_name'] = data['body']['quiz_info'][0].engagement_name;
                //     that.quiz_info['hard_delete'] = data['body']['quiz_info'][0].hard_delete;
                //     that.quiz_info['soft_delete'] = data['body']['quiz_info'][0].soft_delete;
                //     that.quiz_info['time_limit'] = data['body']['quiz_info'][0].time_limit;
                //     that.quiz_info['topic'] = data['body']['quiz_info'][0].topic;
                //     that.quiz_info['topic_id'] = data['body']['quiz_info'][0].topic_id;
                //     that.quiz_info.statuses.info = 'done';
                //     for(let el in that.quiz_info.questions){
                //     }
                //     that.quiz_info.statuses.questions = 'done';
                //     console.log(that.quiz_info)
                //   }else{
                //     console.log("ERROR")
                //   }
                // }).catch(function(error) {
                //   console.log("getQuizInfoById error =>", error);
                // });
                _this._ConnectorService.getCatsTopsEngs(user.email).then(function (res) {
                    console.log("RES =>", res);
                    if (res['status'] == 'success') {
                        _this.main_content = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(res);
                        _this.engagements = res['engs'];
                        _this.main_content['engs'] = _this.sortCategoriesByEngs(_this.orderByEngID(res['engs']), res['categories']);
                        _this.engagements_obj = _this.sortCategoriesByEngs(_this.orderByEngID(res['engs']), res['categories']);
                        _this.categories_list = _this.engagements_obj[_this.currentEng_id]['categories'];
                        console.log(_this.bucket_list);
                        _this.selected_eng = _this.currentEng_id;
                        _this._ConnectorService.getQuizByTopicIdForEdit(user.email, _this.topic_id).then(function (quiz) {
                            console.log("quiz =>", quiz);
                            _this.topic_soft_delete = quiz['quiz1']['topic_soft_delete'];
                            if (quiz) {
                                console.log("got it!");
                            }
                            if (quiz['status'] == 'success') {
                                console.log(quiz);
                                for (var el in quiz['quiz1']) {
                                    // console.log("============")
                                    // console.log("el =>", el)
                                    if (!quiz['quiz1'][el]) {
                                        continue;
                                    }
                                    if (quiz['quiz1'][el]['prompt']) {
                                        if (quiz['quiz1'][el]['base64'] && quiz['quiz1'][el]['base64'].slice(0, 5) != 'data:') {
                                            quiz['quiz1'][el]['base64'] = "data:image/png;base64," + quiz['quiz1'][el]['base64'];
                                        }
                                        _this.list_of_questions[el] = quiz['quiz1'][el];
                                    }
                                    else if (el == "topic") {
                                        console.log("TOPIC =>", quiz['quiz1'][el]);
                                        _this.selected_topic = quiz['quiz1'][el];
                                        _this.original_topic = quiz['quiz1'][el];
                                    }
                                    else if (el == "category") {
                                        _this.selected_category = quiz['quiz1'][el];
                                        _this.original_category = quiz['quiz1'][el];
                                        _this.topic_list = _this.engagements_obj[_this.selected_eng]['categories'][_this.selected_category];
                                    }
                                    else if (el == 'engagement_id') {
                                        _this.selected_eng = quiz['quiz1'][el];
                                        _this.original_eng = quiz['quiz1'][el];
                                    }
                                    else if (el == 'time_limit') {
                                        _this.time_limit = quiz['quiz1'][el];
                                    }
                                    else if (el == 'start_time') {
                                        _this.start_time = quiz['quiz1'][el];
                                    }
                                }
                                _this.topic_cat_eng_message.status = 'success';
                                _this.list_of_questions['new_question'] = new _question__WEBPACK_IMPORTED_MODULE_5__["Question"]();
                                console.log("this.list_of_questions =>", _this.list_of_questions);
                                _this.bucket_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_7__["switchKey"])(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(quiz['buckets']), 'bucket_id'));
                                _this.main_content['bucket_list'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_7__["switchKey"])(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(quiz['buckets']), 'bucket_id');
                                _this.bucket_list_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_7__["switchKey"])(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(quiz['buckets']), 'bucket_id'));
                                // this.bucket_list = cloneDeep(switchKey(cloneDeep(res['bucket_list']), 'bucket_id'));
                                // this.main_content['bucket_list'] = switchKey(cloneDeep(res['bucket_list']), 'bucket_id');
                                // this.bucket_list_original =  cloneDeep(switchKey(cloneDeep(res['bucket_list']), 'bucket_id'));
                                _this.list_of_questions_bool = true;
                                _this.bucket_list_counter_updater();
                                _this.selected_topic = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(quiz['quiz1']['quiz_name']);
                                _this.original_topic = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(quiz['quiz1']['quiz_name']);
                                console.log("this.selected_topic =>", _this.selected_topic);
                                console.log("this.original_topic =>", _this.original_topic);
                            }
                            else {
                            }
                        }).catch(function (err) {
                            console.log("ERROR =>", err);
                        });
                    }
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
        setInterval(function () {
            _this.now = new Date();
        }, 1);
    }
    ;
    AdminEditquizComponent.prototype.ngOnInit = function () {
    };
    // RENDER QUIZ =====================================================================================================================================================================================
    // =================================================================================================================================================================================================
    AdminEditquizComponent.prototype.addNewQuestion = function () {
        console.log(this.list_of_questions);
    };
    AdminEditquizComponent.prototype.validateQuiz = function () {
        var errors = this.validateAllQuestions();
        if (Object.keys(errors).length > 0 || this.topic_cat_eng_message.status != 'success') {
            if (this.topic_cat_eng_message.status != 'success') {
                console.log("ENGAGEMENT_CATEGORY_TOPIC ERROR!");
                this.topic_cat_eng_message.display = true;
                this.topic_cat_eng_message.message = "Please select engagement, category, topic.";
                this.topic_cat_eng_message.status = 'fail';
            }
            console.log("SUBMIT errors =>", errors);
            for (var error in errors) {
                console.log("ERROR =>", errors[error]['body']);
                for (var el in errors[error]['body']) {
                    console.log("EL =>", el);
                    //errors[error]['body'][el]
                    this.errorHandler(error, el, errors[error]['body'][el]);
                }
            }
        }
        else if (Object.keys(this.list_of_questions).length > 1) {
            console.log("ALL GOOD!");
            this.submit_ready = true;
        }
    };
    AdminEditquizComponent.prototype.cancelSubmitQuiz = function () {
        this.submit_ready = false;
    };
    AdminEditquizComponent.prototype.submitQuiz = function () {
        var _this = this;
        console.log("SUBMITTED1");
        var quiz = this.removeUnusedANswers(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.list_of_questions));
        delete quiz['new_question'];
        var object_to_send = {
            'questions': quiz,
        };
        object_to_send['engagement_id'] = this.selected_eng;
        object_to_send['bucket_list'] = this.bucket_list;
        object_to_send['topic'] = this.selected_topic;
        object_to_send['category'] = this.selected_category;
        object_to_send['topic_id'] = this.topic_id;
        object_to_send['topic_soft_delete'] = this.topic_soft_delete;
        object_to_send['list_of_deleted_questions'] = this.list_of_deleted_questions;
        object_to_send['answer_delete_confirm_list'] = this.answer_delete_confirm_list;
        object_to_send['time_limit'] = this.time_limit;
        console.log("=======================FETCHING CHANGES=======================");
        console.log(quiz);
        console.log("==============================================================");
        if (this.topic_soft_delete) {
            this._ConnectorService.disableQuiz(this.topic_id, this.currentUser.email).then(function (res) {
                if (res) {
                    console.log("IF RES =>", res);
                }
                console.log("res =>", res);
                _this.submit_ready = false;
                if (res['status'] == 'success') {
                    _this.submit_status.display = true;
                    _this.submit_status.status = 'success';
                }
                else {
                    _this.submit_status.display = true;
                    _this.submit_status.status = 'fail';
                    _this.submit_status.message = res['message'];
                }
            });
        }
        else {
            this._ConnectorService.saveEditedQuiz(object_to_send, this.currentUser.email).then(function (res) {
                console.log("res =>", res);
                _this.submit_ready = false;
                if (res['status'] == 'success') {
                    _this.submit_status.display = true;
                    _this.submit_status.status = 'success';
                }
                else {
                    _this.submit_status.display = true;
                    _this.submit_status.status = 'fail';
                    _this.submit_status.message = res['message'];
                }
            });
        }
    };
    // LISTENERS ========================================================================================================================================================================================
    AdminEditquizComponent.prototype.valueChanger = function (target, value) {
        console.log(target, value);
        this.cancelSubmitQuiz();
        if (target == 'engagement') {
            if (this.selected_eng != value) {
                console.log("this.engagements_obj =>", this.engagements_obj);
                console.log("this.engagements_obj[target] =>", this.engagements_obj[value]);
                this.categories_list = this.engagements_obj[value]['categories'];
                this.topic_list = null;
                this.selected_topic = null;
                this.selected_category = null;
                this.selected_eng = value;
                document.getElementById('category_selector')['value'] = '';
                document.getElementById('topic_selector')['value'] = '';
                this.topic_cat_eng_message.display = false;
            }
        }
        else if (target == 'category') {
            if (this.selected_category != value) {
                this.selected_category = value;
                this.topic_list = this.engagements_obj[this.selected_eng]['categories'][value];
                document.getElementById('topic_selector')['value'] = '';
                this.topic_cat_eng_message.display = false;
            }
        }
        else if (target == 'topic') {
            if (value.length < 1) {
                this.topic_cat_eng_message.display = true;
                this.topic_cat_eng_message.status = 'fail';
                this.topic_cat_eng_message.message = 'Please enter new topic name.';
            }
            else if (value == this.selected_topic) {
                this.topic_cat_eng_message.display = false;
                this.topic_cat_eng_message.status = 'success';
                this.topic_cat_eng_message.message = 'Looks good!';
                return;
            }
            else {
                this.selected_topic = value;
                if (this.original_topic == this.selected_topic) {
                    this.topic_cat_eng_message.display = false;
                    this.topic_cat_eng_message.status = 'success';
                    this.topic_cat_eng_message.message = 'Looks good!';
                    return;
                }
                var check_bool = false;
                for (var el in this.topic_list) {
                    if (this.topic_list[el]['topic'] == value) {
                        this.selected_topic = null;
                        document.getElementById('topic_selector')['value'] = '';
                        this.topic_cat_eng_message.display = true;
                        this.topic_cat_eng_message.status = 'fail';
                        this.topic_cat_eng_message.message = 'Such topic already exists. Please give it another name.';
                        check_bool = true;
                        break;
                    }
                }
                if (!check_bool) {
                    this.topic_cat_eng_message.display = true;
                    this.topic_cat_eng_message.status = 'success';
                    this.topic_cat_eng_message.message = 'Looks good!';
                }
            }
        }
        else if (target == 'time_limit') {
            console.log(value);
            this.time_limit = value;
        }
    };
    AdminEditquizComponent.prototype.displayTypeChanger = function (target, value) {
        if (this.list_of_questions[target]['question_soft_delete']) {
            console.log("disabled????");
            return;
        }
        this.cancelSubmitQuiz();
        if (value === 'textfield input') {
            console.log('text!');
            this.list_of_questions[target]['display_type_description'] = "Manual input";
            this.list_of_questions[target]['question_type_description'] = 'textfield input';
            this.list_of_questions[target]['question_type_id'] = 2;
        }
        else if (value === 'drag_and_drop') {
            this.list_of_questions[target]['display_type_description'] = value;
            this.list_of_questions[target]['question_type_description'] = value;
            this.list_of_questions[target]['question_type_id'] = 3;
            this.list_of_questions[target]['display_type_id'] = 4;
        }
        else {
            console.log("selected input");
            this.list_of_questions[target]['question_type_description'] = "selected input";
            this.list_of_questions[target]['question_type_id'] = 1;
            if (value === "Checkbox") {
                this.list_of_questions[target]['display_type_description'] = "Checkbox";
                this.list_of_questions[target]['display_type_id'] = 2;
            }
            else if (value === "Dropdown") {
                this.list_of_questions[target]['display_type_description'] = "Dropdown";
                this.list_of_questions[target]['display_type_id'] = 3;
                var one_found = false;
                // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
                // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
                // The loop bellow leaves only first found answer as correct.
                for (var el in this.list_of_questions[target]['answer_correct']) {
                    if (this.list_of_questions[target]['answer_correct'][el]) {
                        if (!one_found) {
                            one_found = true;
                        }
                        else {
                            this.list_of_questions[target]['answer_correct'][el] = false;
                        }
                    }
                }
            }
            else if (value === "Radio") {
                this.list_of_questions[target]['display_type_description'] = "Radio";
                this.list_of_questions[target]['display_type_id'] = 1;
                var one_found = false;
                // In case if there are multiple correct answers (in example: as 'checkbox' question has multiple correct answers, in case if swithing to 'radio' or 'dropdown'),
                // we need to make sure that there are no more thatn 1 right answer in the 'answer_correct' list.
                // The loop bellow leaves only first found answer as correct.
                for (var el in this.list_of_questions[target]['answer_correct']) {
                    if (this.list_of_questions[target]['answer_correct'][el]) {
                        if (!one_found) {
                            one_found = true;
                        }
                        else {
                            this.list_of_questions[target]['answer_correct'][el] = false;
                        }
                    }
                }
            }
        }
        console.log(this.list_of_questions[target]);
    };
    AdminEditquizComponent.prototype.addAnswer = function (target) {
        this.cancelSubmitQuiz();
        console.log('add answer for =>', target);
        var value = document.getElementById("newAnswerFor_" + target)['value'];
        console.log("document.getElementById(`newAnswerFor_${target}`) =>", document.getElementById("newAnswerFor_" + target));
        if (value.length < 1) {
            console.log("empty input");
            return;
        }
        console.log("Value =>", value);
        document.getElementById("newAnswerFor_" + target)['value'] = '';
        var answers_list = this.list_of_questions[target]['answer_prompt'];
        for (var el in answers_list) {
            if (answers_list[el] == value) {
                this.errorHandler(target, "add_answer", "Such answer already exists");
                return;
            }
        }
        var counter = 0;
        var temp_id = 'new0';
        for (var el in this.list_of_questions[target]['answer_prompt']) {
            if (el.includes('new')) {
                temp_id = el;
            }
        }
        temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1);
        this.list_of_questions[target]['answer_prompt'][temp_id] = value;
        this.list_of_questions[target]['answer_sort'][temp_id] = 1;
        this.list_of_questions[target]['answer_correct'][temp_id] = false;
        this.list_of_questions[target]['answer_soft_delete'][temp_id] = false;
        this.clearErrors(target, 'add_answer');
    };
    AdminEditquizComponent.prototype.inputEditor = function (target, q_id, q_key, a_id, value) {
        var _this = this;
        this.cancelSubmitQuiz();
        console.log("SERVING QUESTION WITH ID =>", q_id);
        if (this.list_of_questions[q_id]['question_soft_delete']) {
            console.log("disabled????");
            return;
        }
        if (target == 'answer') {
            if (q_key == 'answer_soft_delete') {
                if (a_id.includes('new')) {
                    delete this.list_of_questions[q_id]['answer_soft_delete'][a_id];
                    delete this.list_of_questions[q_id]['answer_bucket_id'][a_id];
                    delete this.list_of_questions[q_id]['answer_correct'][a_id];
                    delete this.list_of_questions[q_id]['answer_prompt'][a_id];
                    delete this.list_of_questions[q_id]['answer_sort'][a_id];
                }
                else {
                    this.list_of_questions[q_id]['answer_soft_delete'][a_id] = value;
                }
            }
            else if (q_key == 'answer_hard_delete') {
                if (!this.list_of_questions[q_id]['answer_hard_delete']) {
                    this.list_of_questions[q_id]['answer_hard_delete'] = {};
                }
                this.list_of_questions[q_id]['answer_hard_delete'][a_id] = value;
                this.answer_delete_confirm_list[a_id] = value;
            }
            else {
                var question_type = this.list_of_questions[q_id]['display_type_description'];
                if ((question_type == 'Dropdown' || question_type == 'Radio') && q_key == 'answer_correct') {
                    for (var el in this.list_of_questions[q_id]['answer_correct']) {
                        if (el == a_id) {
                            this.list_of_questions[q_id]['answer_correct'][el] = true;
                        }
                        else {
                            this.list_of_questions[q_id]['answer_correct'][el] = false;
                        }
                    }
                    return;
                }
                this.list_of_questions[q_id][q_key][a_id] = value;
            }
        }
        else if (target == 'img') { // image uploader
            if (value[0].size > 5242880) {
                this.errorHandler(q_id, "image_uploader", "The image is too heavy. Upload limit is 5mb per image.");
                return;
            }
            this._ConnectorService.imgToBase64(value).then(function (data) {
                console.log("ADDING IMAGE FOR =>", q_id);
                _this.list_of_questions[q_id][q_key] = String(data);
                _this.list_of_questions[q_id]['image'] = true;
                _this.clearErrors(q_id, 'image_uploader');
            }).catch(function (err) {
                console.log("ERROR =>", err);
                this.errorHandler(q_id, "image_uploader", JSON.stringify(err));
            });
        }
        else if (target == 'drag_and_drop') { // drag and drop logic
            // console.log("CHOSEN BUCKET =>", value)
            // console.log(target, q_id, q_key, a_id, value)
            // if(q_key == "answer_bucket_id" || a_id == "bucket_id"){
            //   value = Number(value);
            // }
            if (q_key == "temp_bucket_storage") {
                if (!this.list_of_questions[q_id]['temp_bucket_storage']) {
                    this.list_of_questions[q_id]['temp_bucket_storage'] = {
                        answer_input: null,
                        bucket_id: null,
                    };
                }
                this.list_of_questions[q_id]['temp_bucket_storage'][a_id] = value;
            }
            else {
                this.list_of_questions[q_id][q_key][a_id] = value;
            }
            // console.log(this.list_of_questions[q_id])
        }
        else {
            this.list_of_questions[q_id][q_key] = value;
        }
    };
    AdminEditquizComponent.prototype.removeImg = function (q_id) {
        this.cancelSubmitQuiz();
        this.list_of_questions[q_id]['base64'] = '';
        this.list_of_questions[q_id]['image'] = false;
    };
    AdminEditquizComponent.prototype.dragAndDropAdder = function (id) {
        this.cancelSubmitQuiz();
        console.log(this.list_of_questions[id]['temp_bucket_storage']);
        var input_val = this.list_of_questions[id]['temp_bucket_storage']['answer_input'];
        var bucket_val = this.list_of_questions[id]['temp_bucket_storage']['bucket_id'];
        this.clearErrors(id, 'bucket_input');
        this.clearErrors(id, 'bucket_list');
        if (!input_val || !bucket_val) {
            if (!input_val) {
                this.errorHandler(id, "bucket_input", "Please enter a bucket choice value.");
            }
            if (!bucket_val) {
                this.errorHandler(id, "bucket_list", "Please choose one of the buckets.");
            }
            return;
        }
        else {
            var counter = 0;
            var temp_id = 'new0';
            for (var el in this.list_of_questions[id]['answer_prompt']) {
                if (el.includes('new')) {
                    temp_id = el;
                }
            }
            temp_id = temp_id.slice(0, 3) + (Number(temp_id.slice(3, 4)) + 1);
            var new_id = temp_id; // new answer ID
            console.log("new answerId =>", new_id);
            try {
                console.log("this.list_of_questions[id]['answer_prompt'] =>", this.list_of_questions[id]['answer_prompt']);
                this.list_of_questions[id]['answer_prompt'][new_id] = input_val;
                this.list_of_questions[id]['answer_bucket_id'][new_id] = bucket_val;
                this.list_of_questions[id]['answer_soft_delete'][new_id] = false;
                this.list_of_questions[id]['answer_correct'][new_id] = false;
                this.list_of_questions[id]['answer_sort'][new_id] = 1;
                this.list_of_questions[id]['temp_bucket_storage']['answer_input'] = null;
                this.list_of_questions[id]['temp_bucket_storage']['bucket_id'] = null;
                this.bucketList_reloader[id] = false;
                document.getElementById("bucket_input_add_input_" + id)['value'] = '';
                // document.getElementById(`bucket_list_pick_${id}`)['selectedIndex'] = -1;
                var options = document.querySelectorAll("#bucket_list_pick_" + id + " option");
                for (var i = 0, l = options.length; i < l; i++) {
                    options[i]['selected'] = options[i]['defaultSelected'];
                }
                console.log(this.list_of_questions[id]);
                // there was a weird bug with the choose bucket dropdown. It just didn't reset the old value after adding a new bucket choice
                // so, by calling "  this.bucketList_reloader[id] = false " we delete the choose bucket dropdown ...
                // let that = this;
                // setTimeout(function () {
                //   // ... and put it back after 50 miliseconds
                //   that.bucketList_reloader[id] = true;
                // }, 50)
            }
            catch (error) {
                console.log("ERROR =>", error);
            }
        }
    };
    AdminEditquizComponent.prototype.checkModuleLink = function (id) {
        if (this.validURL(this.list_of_questions[id]['training_url'])) {
            this.clearErrors(id, 'training_url');
            window.open(this.list_of_questions[id]['training_url'], "_blank");
        }
        else {
            console.log("NOT GOOD!");
            this.errorHandler(id, 'training_url', "Confluence link is invalid");
        }
    };
    AdminEditquizComponent.prototype.addQuestion = function () {
        this.cancelSubmitQuiz();
        var errs = this.validateQuestion("new_question");
        if (errs.status == 'fail') {
            for (var el in errs.body) {
                this.errorHandler('new_question', el, errs.body[el]);
            }
            return;
        }
        else {
            this.errorHandlerRemover("new_question");
        }
        var counter = 1;
        for (var el in this.list_of_questions) {
            console.log("EL =>>>>", el);
            if (el.includes('added_')) {
                console.log("added is already here!", el.split('_')[1]);
                counter = Number(el.split('_')[1]) + 1;
            }
        }
        var new_id = 'added_' + counter;
        console.log("New ID =>", new_id);
        this.list_of_questions[new_id] = this.list_of_questions['new_question'];
        this.list_of_new_questions[new_id] = true;
        this.bucketList_reloader[new_id] = true;
        this.list_of_questions['new_question'] = new _question__WEBPACK_IMPORTED_MODULE_5__["Question"]();
    };
    AdminEditquizComponent.prototype.disableQuestion = function (id) {
        this.list_of_questions[id]['question_soft_delete'] = true;
        var counter = 0;
        for (var el in this.list_of_questions) {
            if (this.list_of_questions[el]['question_soft_delete']) {
                counter++;
            }
        }
        if (counter == Object.keys(this.list_of_questions).length - 1) {
            this.topic_soft_delete = true;
        }
    };
    AdminEditquizComponent.prototype.enableQuestion = function (id) {
        this.list_of_questions[id]['question_soft_delete'] = false;
        this.topic_soft_delete = false;
    };
    AdminEditquizComponent.prototype.removeQuestion = function (id) {
        this.cancelSubmitQuiz();
        console.log("ID =>", id);
        this.list_of_questions[id]['question_hard_delete'] = true;
        // delete this.list_of_questions[id]
        // if (this.list_of_new_questions[id]) {
        //   delete this.list_of_new_questions[id]
        // } else {
        //   this.list_of_deleted_questions[id] = true;
        // }
    };
    AdminEditquizComponent.prototype.restoreQuestion = function (id) {
        this.cancelSubmitQuiz();
        console.log("ID =>", id);
        this.list_of_questions[id]['question_hard_delete'] = false;
        // delete this.list_of_questions[id]
        // if (this.list_of_new_questions[id]) {
        //   delete this.list_of_new_questions[id]
        // } else {
        //   this.list_of_deleted_questions[id] = true;
        // }
    };
    AdminEditquizComponent.prototype.removeDragAndDropChoice = function (id, c_id) {
        this.cancelSubmitQuiz();
        console.log(id, c_id);
        try {
            // delete this.list_of_questions[id]['answer_prompt'][c_id]
            // delete this.list_of_questions[id]['answer_correct'][c_id]
            // delete this.list_of_questions[id]['answer_soft_delete'][c_id]
            // delete this.list_of_questions[id]['answer_bucket_id'][c_id]
            this.list_of_questions[id]['answer_soft_delete'][c_id] = true;
        }
        catch (err) {
        }
    };
    AdminEditquizComponent.prototype.inputTest = function (target) {
        console.log("=============================");
        console.log(target);
        console.log("=============================");
    };
    AdminEditquizComponent.prototype.imageZoom = function (q_id) {
        console.log(this.list_of_questions[q_id]);
        this.modal_message.title = "Image";
        this.modal_message.body = this.list_of_questions[q_id]['base64'];
        this.modal_mesage_bool = true;
    };
    // MODAL FUNCTIONS ==================================================================================================================================================================================
    AdminEditquizComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
    };
    AdminEditquizComponent.prototype.openBucketEditor = function () {
        this.bucket_list_counter_updater();
        this.modal_message.title = "Bucket editor";
        this.modal_mesage_bool = true;
    };
    AdminEditquizComponent.prototype.bucketListEditor = function (index, key, value) {
        if (typeof (index) == 'string' && index.slice(0, 3) == 'new') {
            delete this.bucket_list[index];
            return;
        }
        this.bucket_list[index][key] = value;
        this.bucket_list_changes_bool = (Object.keys(this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original)).length > 0);
        console.log("counter =>", this.bucket_list_changes_bool);
    };
    AdminEditquizComponent.prototype.bucketListEditorConfirm = function () {
        this.bucket_list_confirm_bool = true;
        this.bucket_list_confirm_list = this.differenceFinderBuckets(this.bucket_list, this.bucket_list_original);
    };
    AdminEditquizComponent.prototype.bucketListEditorSave = function () {
        var _this = this;
        this.cancelSubmitQuiz();
        var obj = this.bucket_list;
        this.bucket_list_changes_bool = false;
        var _loop_1 = function (el) {
            if (this_1.bucket_list[el].confirmed == false || this_1.bucket_list[el]['bucket_name'] != this_1.bucket_list_original[el]['bucket_name'] || this_1.bucket_list[el]['soft_delete'] != this_1.bucket_list_original[el]['soft_delete']) {
                var obj_1 = this_1.bucket_list[el];
                if (obj_1.soft_delete) {
                    console.log('deleting element!');
                }
                this_1._ConnectorService.saveOneBucket(obj_1).then(function (res) {
                    console.log("saveOneBucket response =>", res);
                    if (res['status'] == 'success' && el.slice(0, 3) == "new") {
                        console.log("bukcet " + el + " will have ID => ", res['body']['recordsets'][0][0]['']);
                        var new_id = res['body']['recordsets'][0][0][''];
                        _this.bucket_list[el].confirmed = true;
                        _this.bucket_list[el].bucket_id = new_id;
                        _this.bucket_list[new_id] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(_this.bucket_list[el]);
                        _this.bucket_list_original[new_id] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(_this.bucket_list[el]);
                        delete _this.bucket_list[el];
                    }
                    else if (res['status'] == 'success' && el.slice(0, 3) != "new") {
                        if (_this.bucket_list[el]['soft_delete']) {
                            delete _this.bucket_list_original[el];
                            delete _this.bucket_list[el];
                        }
                        _this.bucket_list_original[el] = _this.bucket_list[el];
                    }
                    console.log(_this.bucket_list);
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
        };
        var this_1 = this;
        for (var el in this.bucket_list) {
            _loop_1(el);
        }
        console.log(this.bucket_list);
    };
    AdminEditquizComponent.prototype.bucketListEditorCancel = function () {
        this.bucket_list_changes_bool = false;
        this.bucket_list = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list_original);
        console.log(this.bucket_list);
    };
    AdminEditquizComponent.prototype.bucketListEditorClose = function () {
        // this.bucketListEditorCancel();
        this.bucket_list_changes_bool = false;
        this.modal_mesage_bool = false;
    };
    AdminEditquizComponent.prototype.bucketUndoOne = function (id, index) {
        this.bucket_list[index] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.bucket_list_original[index]);
        delete this.bucket_list_confirm_list[id];
        if (Object.keys(this.bucket_list_confirm_list).length < 1) {
            this.bucket_list_confirm_bool = false;
            this.bucket_list_confirm_list = null;
        }
    };
    AdminEditquizComponent.prototype.addNewBucket = function () {
        var new_id = "new";
        var counter = 1;
        for (var el in this.bucket_list) {
            if (this.bucket_list[el]['bucket_name'] == this.bucket_new.bucket_name) {
                return;
            }
            else if (el.includes("new")) {
                counter = Number(el.slice(3)) + 1;
            }
        }
        this.bucket_list_changes_bool = true;
        new_id += counter;
        this.bucket_list[new_id] = {
            bucket_id: new_id,
            bucket_name: this.bucket_new.bucket_name,
            question_id: null,
            quiz_id: this.topic_id,
            soft_delete: false,
            confirmed: false
        };
        this.bucket_new.bucket_name = "";
    };
    AdminEditquizComponent.prototype.closeModal_background_click = function (target) {
        console.log(target.id);
        if (this.modal_message.title == "Image" && target.id == "modal_message_box") {
            this.closeModal();
        }
    };
    // VALIDATORS ========================================================================================================================================================================================
    AdminEditquizComponent.prototype.validateQuestion = function (id) {
        this.errorHandlerRemover(id);
        var res = {
            'status': "success",
            'body': {}
        };
        if (this.list_of_questions[id]['question_soft_delete'] || this.list_of_questions[id]['question_hard_delete'] || this.topic_soft_delete) {
            return res;
        }
        var target = this.list_of_questions[id];
        // Question order value
        if (!target.question_sort || target.question_sort < 1) {
            res.body['order number'] = "Invalid order number.";
        }
        // Prompt
        if (!target.prompt || target.prompt.length < 1) {
            res.body['Question prompt'] = "Question prompt is missing.";
        }
        else if (escape(target.prompt).length > 3500) {
            res.body['prompt'] = "Question prompt is too long.";
        }
        // Question type
        if (!target.display_type_description) {
            res.body['type'] = "Please select question display type.";
        }
        // Answers' validation
        if (!res.body['type']) {
            if (target.question_type_id == 1) {
                console.log("question_type_id =>", target.question_type_id, "; target id =>", id);
                if (Object.keys(target.answer_prompt).length < 1) {
                    res.body['answers'] = "Please add answers.";
                }
                else if (Object.keys(target.answer_prompt).length < 2) {
                    console.log("āaaaaaaaaaa");
                    res.body['answers'] = "Please add more answers.";
                }
                else {
                    for (var el in target.answer_prompt) {
                        if (target.answer_prompt[el].length < 1) {
                            res.body['answers_length'] = 'Some answers have no inputs at all.';
                        }
                    }
                    // drag and drop bucket count
                    if (target.display_type_description == "drag_and_drop") {
                        if (Object.keys(target.answer_bucket_id).length < 2) {
                            res.body['answers'] = "Please add buckets.";
                        }
                    }
                    else {
                        // find number of right answers
                        var counter = 0;
                        for (var el in target.answer_correct) {
                            if (target.answer_correct[el] == true) {
                                counter++;
                            }
                        }
                        if (counter == 0) {
                            res.body['answers'] = "Please mark the right answer(s).";
                        }
                    }
                }
            }
            else if (target.question_type_id == 3) {
                var counter = 0;
                for (var el in target.answer_prompt) {
                    if (!target.answer_bucket_id[el]) {
                        res.body['answers_length'] = 'Some answers have no inputs at all.';
                        break;
                    }
                    else if (!this.bucket_list[target.answer_bucket_id[el]]) {
                        res.body['answers_length'] = "Bucket is missing for answer \"" + target.answer_prompt[el] + "\".";
                        break;
                    }
                }
            }
        }
        // Confluence link
        if (target.training_url && !this.validURL(target.training_url)) {
            res.body['type'] = "Confluence link is invalid. Please check URL syntax.";
        }
        // Question value
        if (!target.point_value) {
            res.body['type'] = "Invalid question value.";
        }
        else if (target.point_value < 1 || target.point_value > 10) {
            res.body['type'] = "Please enter question value between 1 to 10.";
        }
        if (Object.keys(res.body).length > 0) {
            res.status = "fail";
        }
        // if(target.question_type_id == 3){
        //   for(let el in target.answer_bucket_id){
        //     if(target.answer_prompt[el]){
        //       console.log(` ${this.bucket_list[ target.answer_bucket_id[el] ]['bucket_name']} is for questionId ${id}`)
        //       this.bucket_list[ target.answer_bucket_id[el]]['question_id'] = id;
        //       this.bucket_list[ target.answer_bucket_id[el]]['quiz_id'] = this.topic_id;
        //     }
        //   }
        // }
        return res;
    };
    AdminEditquizComponent.prototype.validateAllQuestions = function () {
        var list = this.list_of_questions;
        var res = {};
        for (var el in list) {
            console.log("=============================");
            console.log("EL =>", el, "el['error_bool'] =>", list[el]['error_bool']);
            console.log("=============================");
            if (el == 'new_question' || list[el]['error_bool']) {
                continue;
            }
            this.errorHandlerRemover(el);
            var temp_res = this.validateQuestion(el);
            if (temp_res.status == 'fail') {
                res[el] = temp_res;
            }
        }
        return res;
    };
    //  MISC ============================================================================================================================================================================================
    AdminEditquizComponent.prototype.errorHandler = function (id, source, message) {
        console.log("WE GOT ERROR HERE! ID => " + id + ", source => " + source + ", message => " + message);
        if (!this.list_of_questions[id + "_error"]) {
            this.list_of_questions[id + "_error"] = {
                'error_bool': true,
                'errors': {},
                'target': id
            };
            if (id == 'new_question') {
                this.list_of_questions[id + "_error"]['target'] = "New question form";
            }
            // this.clearErrorMessageTimer(id, 5000)
        }
        this.list_of_questions[id + "_error"]['errors'][source] = message;
    };
    AdminEditquizComponent.prototype.errorHandlerRemover = function (id) {
        try {
            delete this.list_of_questions[id + '_error'];
        }
        catch (error) {
            console.log(error);
        }
        return true;
    };
    AdminEditquizComponent.prototype.errorRemoveById = function (id) {
        try {
            delete this.list_of_questions[id];
        }
        catch (error) {
            console.log(error);
        }
        return true;
    };
    AdminEditquizComponent.prototype.clearErrors = function (id, source) {
        try {
            delete this.list_of_questions[id + "_error"]['errors'][source];
            if (Object.keys(this.list_of_questions[id + "_error"]['errors']).length < 1) {
                delete this.list_of_questions[id + "_error"];
            }
        }
        catch (err) {
            // console.log( `clearErrors : error =>`, err)
        }
    };
    AdminEditquizComponent.prototype.clearErrorMessageTimer = function (id, time) {
        var that = this;
        console.log('1st this =>', this);
        setTimeout(function () {
            delete that.list_of_questions[id + '_error'];
        }, time);
    };
    AdminEditquizComponent.prototype.orderByEngID = function (engs) {
        var res = {};
        for (var el in engs) {
            if (engs[el]['soft_delete']) {
                continue;
            }
            res[engs[el]['engagement_id']] = engs[el];
        }
        console.log("orderByEngID(engs) =>", res);
        return res;
    };
    AdminEditquizComponent.prototype.sortCategoriesByEngs = function (engs, list) {
        // engs and list are arrays
        for (var cat in list) {
            for (var topic in list[cat]) {
                var eng_id = list[cat][topic]['engagement_id'];
                if (!engs[eng_id]) {
                    continue;
                }
                if (!engs[list[cat][topic]['engagement_id']]['categories']) {
                    engs[list[cat][topic]['engagement_id']]['categories'] = {};
                }
                if (!engs[list[cat][topic]['engagement_id']]['categories'][cat]) {
                    engs[list[cat][topic]['engagement_id']]['categories'][cat] = {};
                }
                engs[list[cat][topic]['engagement_id']]['categories'][cat][list[cat][topic]['topic_id']] = list[cat][topic];
            }
        }
        return engs;
    };
    AdminEditquizComponent.prototype.validURL = function (string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null);
    };
    AdminEditquizComponent.prototype.arrayToList = function (list, key, type) {
        var res = {};
        for (var el in list) {
            res[Number(list[el][key])] = list[el];
        }
        return res;
    };
    AdminEditquizComponent.prototype.bucketListSoftdeleteChecker = function (list) {
        for (var el in list) {
            if (!list[el]['soft_delete']) {
                list[el]['soft_delete'] = false;
            }
        }
        return list;
    };
    AdminEditquizComponent.prototype.differenceFinderBuckets = function (arr1, arr2) {
        // array1 and array2 should by copies of each other
        var res = {};
        for (var bucket in arr1) {
            var el1 = JSON.stringify(arr1[bucket]);
            var el2 = JSON.stringify(arr2[bucket]);
            console.log;
            if (el1 != el2) {
                res[arr1[bucket]['bucket_id']] = arr1[bucket];
            }
        }
        return res;
    };
    AdminEditquizComponent.prototype.escapingList = function (list) {
        for (var el in list) {
            list[el] = escape(list[el]);
        }
        return list;
    };
    AdminEditquizComponent.prototype.escapingBucketList = function (list) {
        for (var el in list) {
            list[el]['bucket_name'] = escape(list[el]['bucket_name']);
        }
        return list;
    };
    AdminEditquizComponent.prototype.escapingQuiz = function (q) {
        for (var el in q) {
            if (el == "new_question" || (typeof (q[el]) != 'object')) {
                continue;
            }
            else if (el == "bucket_list") {
                q[el] = this.escapingBucketList(q[el]);
                continue;
            }
            console.log("EL =>", el);
            q[el]['prompt'] = escape(q[el]['prompt']);
            q[el]['training_url'] = escape(q[el]['training_url']);
            q[el]['training_module'] = escape(q[el]['training_module']);
            q[el]['expected_response'] = escape(q[el]['expected_response']);
            for (var a in q[el]['answer_prompt']) {
                q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a]);
            }
        }
        q['topic'] = escape(q['topic']);
        q['category'] = escape(q['category']);
        return q;
    };
    AdminEditquizComponent.prototype.bucketListDifferencesFinder = function () {
        var original_list = this.main_content;
        var current_list = this.bucket_list;
    };
    AdminEditquizComponent.prototype.removeUnusedANswers = function (list) {
        for (var question in list) {
            if (question == "new_question") {
                continue;
            }
            for (var el in list[question]['answer_bucket_id']) {
                if (!list[question]['answer_prompt'][el]) {
                    delete list[question]['answer_bucket_id'][el];
                }
            }
            for (var el in list[question]['answer_sort']) {
                if (!list[question]['answer_prompt'][el]) {
                    delete list[question]['answer_sort'][el];
                }
            }
            for (var el in list[question]['answer_soft_delete']) {
                if (!list[question]['answer_prompt'][el]) {
                    delete list[question]['answer_soft_delete'][el];
                }
            }
            for (var el in list[question]['answer_correct']) {
                if (!list[question]['answer_prompt'][el]) {
                    delete list[question]['answer_correct'][el];
                }
            }
        }
        // since all used/existed questions are stored in 'answer_prompt' list, we should check other lists to remove junk ids;
        return list;
    };
    AdminEditquizComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminEditquizComponent.prototype.deleteQuiz = function () {
        var _this = this;
        console.log("DELETING QUIZ!!");
        var obj = {
            'questions': lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_6__(this.list_of_questions),
            'topic_id': this.topic_id
        };
        delete obj.questions['new_question'];
        this._ConnectorService.deleteQuiz(obj, this.currentUser.email).then(function (res) {
            console.log("res =>", res);
            _this.list_of_questions = {};
            _this.submit_ready = false;
            if (res['status'] == 'success') {
                _this.submit_status.display = true;
                _this.submit_status.status = 'success';
            }
            else {
                _this.submit_status.display = true;
                _this.submit_status.status = 'fail';
                _this.submit_status.message = res['message'];
            }
        });
    };
    AdminEditquizComponent.prototype.checkState = function () {
        console.log(this);
        console.log("====================================================================================================================");
        console.log(this.list_of_questions);
        console.log("====================================================================================================================");
    };
    AdminEditquizComponent.prototype.bucket_list_counter_updater = function () {
        console.log("bucket_list_counter_updater");
        this.bucket_list_counter = {};
        for (var q in this.list_of_questions) {
            var question = this.list_of_questions[q];
            for (var ans in question['answer_prompt']) {
                if (question['answer_bucket_id'][ans]) {
                    var bucket_id = question['answer_bucket_id'][ans];
                    if (!this.bucket_list_counter[bucket_id]) {
                        this.bucket_list_counter[bucket_id] = 0;
                    }
                    this.bucket_list_counter[bucket_id]++;
                }
            }
        }
    };
    AdminEditquizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editquiz',
            template: __webpack_require__(/*! ./admin-editquiz.component.html */ "./src/app/admin-editquiz/admin-editquiz.component.html"),
            styles: [__webpack_require__(/*! ./admin-editquiz.component.css */ "./src/app/admin-editquiz/admin-editquiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminEditquizComponent);
    return AdminEditquizComponent;
}());



/***/ }),

/***/ "./src/app/admin-editsubmissions/admin-editsubmissions.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin-editsubmissions/admin-editsubmissions.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-quiz-permission {\n    margin-top: 50px;\n    width: 100%;\n}\n\n.admin-quiz-permission-title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-list_buttons {\n    margin: 0px auto;\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-by_teams{\n    margin: 50px 50px;\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n.admin-quiz-permission-table_box{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    margin-top: 50px;\n    margin-bottom: 50px;\n}\n\n.EditQuizPermissions_categoryBox {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    /* z-index: 0;\n    transition: 0.5s;\n    box-shadow: none; */\n    margin: 5px 5px;\n    padding: 5px 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-radius: 5px;\n}\n\n.EditQuizPermissions_categoryBox p {\n    transition: 0.5s;\n}\n\n.EditQuizPermissions_categoryBox:hover {\n    /* z-index: 1;\n    box-shadow: 5px 10px 18px #888888;\n    background: white */\n}\n\n.EditQuizPermissions_categoryBox:hover p {\n    color: #4f91cd;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5);\n    margin-top: -120px;\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 1000px;\n    max-width: 1000px !important;\n    /* height: 100px; */\n}\n\n.toggle-red::before{\n    border-color: #a71212 !important;\n    background-color: #f56f6f !important;\n}\n\ninput[type=\"checkbox\"].switch_1{\n\tfont-size: 30px;\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\twidth: 2.2em;\n\theight: 1em;\n\tbackground: #ddd;\n\tborder-radius: 3em;\n\tposition: relative;\n\tcursor: pointer;\n\toutline: none;\n\ttransition: all .2s ease-in-out;\n  }\n\ninput[type=\"checkbox\"].switch_1:checked{\n\tbackground: #0ebeff;\n  }\n\ninput[type=\"checkbox\"].switch_1:after{\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 1em;\n\theight: 1em;\n\tborder-radius: 50%;\n\tbackground: #fff;\n\tbox-shadow: 0 0 .25em rgba(0,0,0,.3);\n\t-webkit-transform: scale(.7);\n\t        transform: scale(.7);\n\tleft: 0;\n\ttransition: all .2s ease-in-out;\n  }\n\ninput[type=\"checkbox\"].switch_1:checked:after{\n\tleft: calc(100% - 1em);\n  }\n\ninput[type=\"checkbox\"].switch_1:disabled{\n    -webkit-filter: brightness(65%);\n            filter: brightness(65%);\n  }\n\n.outerDivFull { margin:50px; }\n\n.switchToggle input[type=checkbox]{height: 0; width: 0; visibility: hidden; position: absolute; }\n\n.switchToggle label {cursor: pointer; text-indent: -9999px; width: 70px; max-width: 70px; height: 30px; background: #d1d1d1; display: block; border-radius: 100px; position: relative; }\n\n.switchToggle label:after {content: ''; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; background: #fff; border-radius: 90px; transition: 0.3s; }\n\n.switchToggle input:checked + label, .switchToggle input:checked + input + label  {background: #3e98d3; }\n\n.switchToggle input + label:before, .switchToggle input + input + label:before {content: 'No'; position: absolute; top: 5px; left: 35px; width: 26px; height: 26px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }\n\n.switchToggle input:checked + label:before, .switchToggle input:checked + input + label:before {content: 'Yes'; position: absolute; top: 5px; left: 10px; width: 26px; height: 26px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }\n\n.switchToggle input:checked + label:after, .switchToggle input:checked + input + label:after {left: calc(100% - 2px); -webkit-transform: translateX(-100%); transform: translateX(-100%); }\n\n.switchToggle label:active:after {width: 60px; }\n\n.toggle-switchArea { margin: 10px 0 10px 0; }\n\nthead th\n{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZWRpdHN1Ym1pc3Npb25zL2FkbWluLWVkaXRzdWJtaXNzaW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7Q0FDaEIsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekI7O3VCQUVtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTs7dUJBRW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9DQUFvQztBQUN4Qzs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3QkFBd0I7SUFDckIscUJBQXFCO1NBQ2hCLGdCQUFnQjtDQUN4QixZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBRWIsK0JBQStCO0VBQzlCOztBQUVBO0NBQ0QsbUJBQW1CO0VBQ2xCOztBQUVBO0NBQ0Qsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FFUixvQ0FBb0M7Q0FDNUMsNEJBQTRCO1NBQ3BCLG9CQUFvQjtDQUM1QixPQUFPO0NBRVAsK0JBQStCO0VBQzlCOztBQUVBO0NBQ0Qsc0JBQXNCO0VBQ3JCOztBQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFFQSxnQkFBZ0IsV0FBVyxFQUFFOztBQUUvQixtQ0FBbUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRTs7QUFDaEcscUJBQXFCLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUU7O0FBQ3ZMLDJCQUEyQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFOztBQUNySyxtRkFBbUYsbUJBQW1CLEVBQUU7O0FBQ3hHLGdGQUFnRixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7O0FBQ3hPLGdHQUFnRyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7O0FBQ3pQLDhGQUE4RixzQkFBc0IsRUFBRSxvQ0FBNEIsRUFBNUIsNEJBQTRCLEVBQUU7O0FBQ3BKLGtDQUFrQyxXQUFXLEVBQUU7O0FBQy9DLHFCQUFxQixxQkFBcUIsRUFBRTs7QUFFNUM7O0lBRUksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tZWRpdHN1Ym1pc3Npb25zL2FkbWluLWVkaXRzdWJtaXNzaW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLXF1aXotcGVybWlzc2lvbiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkbWluLXF1aXotcGVybWlzc2lvbi1ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmFkbWluLXF1aXotcGVybWlzc2lvbi1saXN0X2J1dHRvbnMge1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuLmFkbWluLXF1aXotcGVybWlzc2lvbi1ieV90ZWFtc3tcbiAgICBtYXJnaW46IDUwcHggNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZG1pbi1xdWl6LXBlcm1pc3Npb24tdGFibGVfYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC8qIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBib3gtc2hhZG93OiBub25lOyAqL1xuICAgIG1hcmdpbjogNXB4IDVweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3ggcCB7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3g6aG92ZXIge1xuICAgIC8qIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICovXG59XG5cbi5FZGl0UXVpelBlcm1pc3Npb25zX2NhdGVnb3J5Qm94OmhvdmVyIHAge1xuICAgIGNvbG9yOiAjNGY5MWNkO1xufVxuLm1vZGFsX21lc3NhZ2VfYm94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE4MiwgMTg1LCAwLjUpO1xuICAgIG1hcmdpbi10b3A6IC0xMjBweDtcbn1cblxuLm1vZGFsX21lc3NhZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXR7XG4gICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQgdGR7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbn1cblxuLnRvZ2dsZS1yZWQ6OmJlZm9yZXtcbiAgICBib3JkZXItY29sb3I6ICNhNzEyMTIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU2ZjZmICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMXtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMi4yZW07XG5cdGhlaWdodDogMWVtO1xuXHRiYWNrZ3JvdW5kOiAjZGRkO1xuXHRib3JkZXItcmFkaXVzOiAzZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBub25lO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpjaGVja2Vke1xuXHRiYWNrZ3JvdW5kOiAjMGViZWZmO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uc3dpdGNoXzE6YWZ0ZXJ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDFlbTtcblx0aGVpZ2h0OiAxZW07XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgLjI1ZW0gcmdiYSgwLDAsMCwuMyk7XG5cdCAgICAgICAgYm94LXNoYWRvdzogMCAwIC4yNWVtIHJnYmEoMCwwLDAsLjMpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjcpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuXHRsZWZ0OiAwO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpjaGVja2VkOmFmdGVye1xuXHRsZWZ0OiBjYWxjKDEwMCUgLSAxZW0pO1xuICB9XG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpkaXNhYmxlZHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjUlKTtcbiAgfVxuXG4gIC5vdXRlckRpdkZ1bGwgeyBtYXJnaW46NTBweDsgfSBcblxuLnN3aXRjaFRvZ2dsZSBpbnB1dFt0eXBlPWNoZWNrYm94XXtoZWlnaHQ6IDA7IHdpZHRoOiAwOyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuLnN3aXRjaFRvZ2dsZSBsYWJlbCB7Y3Vyc29yOiBwb2ludGVyOyB0ZXh0LWluZGVudDogLTk5OTlweDsgd2lkdGg6IDcwcHg7IG1heC13aWR0aDogNzBweDsgaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kOiAjZDFkMWQxOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyLXJhZGl1czogMTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLnN3aXRjaFRvZ2dsZSBsYWJlbDphZnRlciB7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAycHg7IGxlZnQ6IDJweDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogOTBweDsgdHJhbnNpdGlvbjogMC4zczsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWwsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWwgIHtiYWNrZ3JvdW5kOiAjM2U5OGQzOyB9XG4uc3dpdGNoVG9nZ2xlIGlucHV0ICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0ICsgaW5wdXQgKyBsYWJlbDpiZWZvcmUge2NvbnRlbnQ6ICdObyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1cHg7IGxlZnQ6IDM1cHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpbnB1dCArIGxhYmVsOmJlZm9yZSB7Y29udGVudDogJ1llcyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1cHg7IGxlZnQ6IDEwcHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWw6YWZ0ZXIge2xlZnQ6IGNhbGMoMTAwJSAtIDJweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbi5zd2l0Y2hUb2dnbGUgbGFiZWw6YWN0aXZlOmFmdGVyIHt3aWR0aDogNjBweDsgfSBcbi50b2dnbGUtc3dpdGNoQXJlYSB7IG1hcmdpbjogMTBweCAwIDEwcHggMDsgfVxuXG50aGVhZCB0aFxue1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin-editsubmissions/admin-editsubmissions.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/admin-editsubmissions/admin-editsubmissions.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n\n  <div [hidden]=\"sorted_users\" class=\" loading_box element-animation-fadeIn\" style=\" margin-top: 100px;height: 300px;\">\n    <h2>Loading...</h2>\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\"></span>\n    </div>\n  </div>\n  <div [hidden]=\"!sorted_users\" class=\"admin-quiz-permission element-animation-fadeIn\">\n    <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\">\n      <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\">\n        <!-- CHANGE LIST -->\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'changes_list'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">List of\n              changes</h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"height: 50vh !important; overflow-y: scroll;\">\n            <table class=\"table table-striped table-borderless\">\n              <thead class=\"thead-dark\">\n                <tr>\n                  <th>Submit ID</th>\n                  <th>Name</th>\n                  <th>Category and Topic</th>\n                  <th>Changes</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of list_changes | keyvalue\">\n                  <th scope=\"row\" class=\"\">{{user.key}}</th>\n                  <td>{{user.value.first_name}} {{user.value.last_name}}</td>\n                  <td class=\"font-weight-bold   tr_string\">{{ topics_unsorted[user.value.quiz_id][\"category\"] }},\n                    {{user.value.topic}}</td>\n                  <td class=\"alert alert-warning\">\n                    <p *ngIf=\"user.value.retake_topic !== all_users_original[user.key]['retake_topic']\">\n                      Retake <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'retake_topic')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"user.value.regrade_submission !== all_users_original[user.key]['regrade_submission']\">\n                      Regrade <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'regrade_submission')\">Undo</button>\n                    </p>\n                    <p\n                      *ngIf=\"user.value.invalidate_submission !== all_users_original[user.key]['invalidate_submission']\">\n                      <span *ngIf=\"user.value.invalidate_submission\">\n                        Invalidate <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChange(user.key, 'invalidate_submission')\">Undo</button>\n                      </span>\n                      <span *ngIf=\"!user.value.invalidate_submission\">\n                        Do not invalidate <button class=\"btn-sm btn-xs btn-danger shadow \"\n                          (click)=\"undoChange(user.key, 'invalidate_submission')\">Undo</button>\n                      </span>\n                    </p>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"submitChanges()\" class=\"btn btn-success  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Submit changes</button>\n              <button type=\"button\" (click)=\"undoChangeAll()\" class=\"btn btn-danger  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Cancel</button>\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'message'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'success'\">\n            <h4 class=\"alert-heading text-center\">Well done!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Your changes have been saved!</p>\n            <button class=\"btn btn-primary btn-action-borderless  shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click here to go back to the admin portal</button>\n          </div>\n          <div class=\"alert alert-danger\" style=\"margin-bottom: 0px\" role=\"alert\" *ngIf=\"modal_message.body == 'fail'\">\n            <h4 class=\"alert-heading\">Oops!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Something went wrong. Please try again later or contact developers.</p>\n            <button class=\"btn btn-primary  btn-action-borderless \" [routerLink]=\"['/',currentEng_id, 'admin']\">Click\n              here to go back to the admin portal</button>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'counter'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\">\n\n            <p>Saving changes {{modal_message.counter_start }} of {{modal_message.counter_end }}</p>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\"\n                [attr.aria-valuenow]=\"modal_message.counter_start\" [attr.aria-valuemin]=\"0\"\n                [attr.aria-valuemax]=\"modal_message.counter_end\"\n                [style.width.%]=\"( (modal_message.counter_start/modal_message.counter_end) * 100)\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"admin-quiz-permission-title\">\n      <h1>Quiz Submission Log Table</h1>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_teams' }\">Teams</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless\"\n          [ngClass]=\"{'active shadow': current_list_target == 'by_teams' && current_list_key == team }\"\n          *ngFor=\"let team of by_teams\" (click)=\"selectList('by_teams',team)\">{{team}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_title' }\">Titles</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless\"\n          [ngClass]=\"{'active shadow': current_list_target == 'by_title' && current_list_key == title }\"\n          *ngFor=\"let title of by_title\" (click)=\"selectList('by_title',title)\">{{title}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-lg btn-action-borderless\"\n          [ngClass]=\"{'bp-button-important shadow': current_list_target == 'all_users' }\"\n          (click)=\"selectList('all_users', null)\">All employees</button>\n      </div>\n    </div>\n\n\n\n\n    <!--  -->\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <label>\n          Search in\n          <span *ngIf=\"current_list_target == 'by_teams'\">team # {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'by_title'\">title {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'all_users'\">all users</span>:\n          <div class=\"input-group shadow\">\n            <input type=\"text\" class=\"form-control form-control-bp-shadow\" id=\"searchInput\" placeholder=\"\" aria-label=\"\"\n              style=\"border-radius: 0px\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-info bp-button-important btn-outline-bp-hover-side-shadow\" type=\"button\"\n                (click)=\"searchKey()\" style=\"border-color: #2675a3; border-radius: 0px\">Filter</button>\n            </div>\n          </div>\n        </label>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <label>\n          Force Re-grade\n          <br>\n          <span>Hope you know what are you doing</span>\n          <div class=\"input-group shadow\">\n            <input type=\"text\" class=\"form-control form-control-bp-shadow\" id=\"forceRegrade\" placeholder=\"\"\n              aria-label=\"\" style=\"border-radius: 0px\" placeholder=\"Enter Submit ID\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-dark \" type=\"button\" (click)=\"forceRegrade()\"\n                style=\"border-color: #2675a3; border-radius: 0px\">Submit</button>\n            </div>\n          </div>\n          {{forceRegrade_message}}\n        </label>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\" [hidden]=\"!currentUser || currentUser.title != 'Web Developer'\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <label>\n          GRADING TESTING FIELD\n          <br>\n          <div class=\"input-group shadow\">\n            <input type=\"text\" class=\"form-control form-control-bp-shadow\" id=\"forceRegrade\" placeholder=\"\"\n              aria-label=\"\" style=\"border-radius: 0px\" placeholder=\"Enter Submit ID\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-dark \" type=\"button\" (click)=\"submitGradesForOneQuiz()\"\n                style=\"border-color: #2675a3; border-radius: 0px\">SEND</button>\n            </div>\n          </div>\n          {{forceRegrade_message}}\n        </label>\n      </div>\n      <button class=\"btn btn-danger btn-action-borderless\" (click)=\"regradeStuckedSubmissions()\">Regrade stucked\n        submissions</button>\n    </div>\n\n    <!-- <div class=\"admin-quiz-permission-by_teams\">\n                  <div class=\"admin-quiz-permission-list_buttons\"  role=\"group\" >\n                      <button class=\"btn btn-secondary btn-lg btn-action-borderless shadow-lg\" (click)=\"openModal('list_control', '')\">List control</button>\n                    </div>\n            \n              </div> -->\n    <div class=\"admin-quiz-permission-table_box\">\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-bottom: 50px\"\n        (click)=\"checkChanges()\">Check Changes</button>\n      <table class=\"table table-borderless table-hover shadow\" id=\"sub_table\" style=\"width: 98%; margin: 0px auto;\">\n        <thead class=\"thead-dark shadow\">\n          <tr>\n            <th style=\"font-size: 12px;   width: 5%; \">\n              <div class=\"btn-group-vertical text-center order-arrow-hover\" style=\"display: flex;\n                                                                        flex-direction: column;\n                                                                        flex-wrap: nowrap;\n                                                                        justify-content: center;\n                                                                        align-items: center;\n                                                                        align-content: space-between;\" role=\"group\"\n                aria-label=\"Basic example\">\n                <span>\n                  Submit ID\n                </span>\n                <span type=\"button\" class=\"btn btn-sm btn-light btn-action-borderless order-arrow-hover-target\"\n                  style=\"padding: 1px 2px;\" (click)=\"reverseTable()\">Order <span class=\"order-arrow-hover-target\"\n                    style=\"font-size: 19px\">&#x21F5;</span></span>\n              </div>\n            </th>\n            <th>Email</th>\n            <th>Name</th>\n            <th>Team</th>\n            <th>Title</th>\n            <th>Category</th>\n            <th>Quiz name</th>\n            <th style='text-align: center'>Time started</th>\n            <th style='text-align: center'>Time submitted</th>\n            <th style='text-align: center'> Total Minutes</th>\n            <th style='text-align: center'>Grade Score</th>\n            <th style='text-align: center'>Graded By</th>\n            <th style='text-align: center'>Grade Time</th>\n            <th>\n              <div style=\"text-align: center;\n                                          display: flex;\n                                          flex-direction: column;\n                                          flex-wrap: nowrap;\n                                          justify-content: flex-start;\n                                          align-items: center;\n                                          align-content: stretch;\">\n                {{current_list_properties.retake_topic}}/{{current_list_properties.retake_topic_total_length}}\n                <button class='btn btn-sm btn-action-borderless' [ngClass]=\"{\n                                      'btn-warning': (current_list_properties.retake_topic > 0 && current_list_properties.retake_topic < current_list_properties.retake_topic_total_length),\n                                      'btn-success': current_list_properties.retake_topic == current_list_properties.retake_topic_total_length,\n                                      'btn-danger': current_list_properties.retake_topic == 0\n                                      }\" (click)=\"listChanger('retake_topic')\">Retake</button>\n              </div>\n            </th>\n            <th>\n              <div style=\"text-align: center;\n                                          display: flex;\n                                          flex-direction: column;\n                                          flex-wrap: nowrap;\n                                          justify-content: flex-start;\n                                          align-items: center;\n                                          align-content: stretch;\">\n                {{current_list_properties.regrade_submission}}/{{current_list_properties.regrade_submission_total_length}}\n                <button class='btn btn-sm btn-action-borderless' [ngClass]=\"{\n                                      'btn-warning': (current_list_properties.regrade_submission > 0 && current_list_properties.regrade_submission < current_list_properties.regrade_submission_total_length),\n                                      'btn-success': current_list_properties.regrade_submission == current_list_properties.regrade_submission_total_length,\n                                      'btn-danger': current_list_properties.regrade_submission == 0\n                                      }\" (click)=\"listChanger('regrade_submission')\">Regrade</button>\n              </div>\n            </th>\n            <th>\n              <div style=\"text-align: center;\n                                        display: flex;\n                                        flex-direction: column;\n                                        flex-wrap: nowrap;\n                                        justify-content: flex-start;\n                                        align-items: center;\n                                        align-content: stretch;\">\n                {{current_list_properties.invalidate_submission}}/{{current_list_properties.invalidate_submission_total_length}}\n                <button class='btn btn-sm btn-action-borderless' [ngClass]=\"{\n                                      'btn-warning': (current_list_properties.invalidate_submission > 0 && current_list_properties.invalidate_submission < current_list_properties.invalidate_submission_total_length),\n                                      'btn-success': current_list_properties.invalidate_submission == current_list_properties.invalidate_submission_total_length,\n                                      'btn-danger': current_list_properties.invalidate_submission == 0\n                                      }\" (click)=\"listChanger('invalidate_submission')\">Invalidate</button>\n              </div>\n            </th>\n\n          </tr>\n        </thead>\n        <tbody id=\"table_body_target\" style=\"background: white\">\n          <tr *ngFor=\"let user of current_list | keyvalue\" [ngClass]=\"{\n                              'text-success': all_users_original[user.key].graded && !all_users_original[user.key].retake_topic && !all_users_original[user.key]['regrade_submission'], \n                              'text-secondary': !user.value.diffTime && !all_users_original[user.key]['regrade_submission'],\n                              'text-line-through':  user.value.retake_topic || user.value.invalidate_submission,\n                              'text-info': all_users_original[user.key]['regrade_submission']\n                            }\">\n            <th scope=\"row\" class=\"font-weight-bold  text-center  tr_string\">{{user.key}}</th>\n            <td class=\"tr_string\">{{user.value.email}}</td>\n            <td class=\"tr_string\">{{user.value.first_name}} {{user.value.last_name}}</td>\n            <td class=\"tr_string\">{{user.value.team}}</td>\n            <td class=\"tr_string\">{{user.value.title}}</td>\n            <td class=\"font-weight-bold   tr_string\">{{ topics_unsorted[user.value.quiz_id][\"category\"] }}</td>\n            <td class=\"font-weight-bold   tr_string\">{{user.value.topic}}</td>\n            <td class=\"text-muted tr_string text-center\">{{user.value.start_time | date : \"short\" }}</td>\n            <td class=\"text-muted tr_string text-center\">\n              <span\n                *ngIf=\"user.value.diffTime || user.value.diffTime  == 0\">{{user.value.stop_time | date: \"short\" }}</span>\n              <span *ngIf=\"!user.value.diffTime && user.value.diffTime  != 0\">DateTime mismatch</span>\n            </td>\n            <td class=\"text-muted tr_string text-center\">\n              <span *ngIf=\"user.value.diffTime || user.value.diffTime  == 0\">{{ user.value.diffTime }}</span>\n              <span *ngIf=\"!user.value.diffTime && user.value.diffTime  != 0\">DateTime mismatch </span>\n            </td>\n            <td class=\"tr_string text-center font-weight-bold  \">{{user.value.calculated_score * 100 | number:0}}</td>\n            <td class=\"text-muted tr_string text-center\">\n              <span\n                *ngIf=\"(user.value.graded || user.value.grader_full_name) && !all_users_original[user.key]['regrade_submission'] \">{{user.value.grader_full_name}}</span>\n              <span class=\"text-muted font-weight-light\" *ngIf=\"user.value.graded && !user.value.grader_full_name\">Auto\n                graded</span>\n              <span\n                *ngIf=\"!user.value.graded && !user.value.grader_full_name && !all_users_original[user.key]['regrade_submission']\">Not\n                graded yet</span>\n              <span *ngIf=\"all_users_original[user.key]['regrade_submission']\" class=\"text\">In re-grading queue</span>\n            </td>\n            <td class=\"text-muted tr_string text-center\">{{user.value.graded_time | date : \"short\"}}</td>\n\n            <td class=\"text-muted tr_string\">\n              <!-- all_users_original[user.key] and user.value -->\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"retake_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key, 'retake_topic', null)\" [checked]=\"(user.value.retake_topic)\"\n                  [disabled]=\"all_users_original[user.key]['retake_topic']\">\n                <label style=\"margin: 0px auto;\" class=\"shadow\" for=\"retake_for_{{user.key}}\" [ngClass]=\"{\n                                        'switchToggle_checked_disabled': all_users_original[user.key]['retake_topic'] ,\n                                        'switchToggle_checked_green': !all_users_original[user.key]['retake_topic'] && user.value.retake_topic\n                                      }\"></label>\n              </div>\n            </td>\n            <td class=\"text-muted tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"regrade_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key,'regrade_submission', null)\" [checked]='user.value.regrade_submission'\n                  [disabled]=\"all_users_original[user.key]['regrade_submission']\">\n                <label style=\"margin: 0px auto;\" class=\"shadow\" for=\"regrade_for_{{user.key}}\" [ngClass]=\"{\n                                        'switchToggle_checked_disabled': all_users_original[user.key]['regrade_submission'],\n                                        'switchToggle_checked_green': !all_users_original[user.key]['regrade_submission'] && user.value.regrade_submission\n                                      }\"></label>\n              </div>\n            </td>\n            <td class=\"text-muted tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"invalidate_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key, 'invalidate_submission', null)\"\n                  [checked]=\"(user.value.invalidate_submission)\">\n                <label style=\"margin: 0px auto;\" class=\"shadow\" for=\"invalidate_for_{{user.key}}\" [ngClass]=\"{\n                                          'switchToggle_checked_green': !all_users_original[user.key]['invalidate_submission'] && user.value.invalidate_submission, \n                                          'switchToggle_checked_red':  all_users_original[user.key]['invalidate_submission'] && !user.value.invalidate_submission\n                                        }\"></label>\n              </div>\n            </td>\n\n          </tr>\n\n        </tbody>\n      </table>\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-top: 50px\"\n        (click)=\"checkChanges()\">Check Changes</button>\n    </div>\n  </div>\n\n  <div\n    style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n    <div class=\"index_row\" style=\"display: flex;\n                                                                flex-direction: column;\n                                                                flex-wrap: nowrap;\n                                                                justify-content: center;\n                                                                align-items: center;\n                                                                align-content: space-between;\">\n      <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n        <div class=\"text-center\" style=\"display: flex;\n                  flex-direction: row;\n                  flex-wrap: wrap;\n                  justify-content: center;\n                  align-items: center;\n                  align-content: stretch;\">\n          <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n          <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n            target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n            style=\"margin-left: 15px\">\n            <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n          </a>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n        <div class=\"text-center\">\n          <p class=\"mt-3\">{{currentEng.main_text}}</p>\n          <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n              href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n        <div class=\"text-center  bp-box shadow\">\n          <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_name}}</h4>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_address}}</h5>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_phone_number}}\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-editsubmissions/admin-editsubmissions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin-editsubmissions/admin-editsubmissions.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminEditsubmissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditsubmissionsComponent", function() { return AdminEditsubmissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../object_validation.js */ "./src/app/object_validation.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__);







var AdminEditsubmissionsComponent = /** @class */ (function () {
    function AdminEditsubmissionsComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.all_users_original = null;
        this.all_users = null;
        this.sorted_users = null;
        this.categories = null;
        this.topics_unsorted = null;
        this.current_list_properties = {
            'length': 0,
            'retake_topic': 0,
            'retake_topic_total_length': 0,
            'regrade_submission': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission': 0,
            'invalidate_submission_total_length': 0
        };
        this.default_list_properties = {
            'retake_topic_total_length': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission_total_length': 0
        };
        this.users_changes_bool = false;
        this.users_changes = {};
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': '',
            'counter_start': 0,
            'counter_end': 0,
        };
        this.searchKeys = {
            team: [],
            title: [],
            all_employees: []
        };
        this.forceRegrade_message = '  ';
        this.submitGradesForOneQuiz_message = '  ';
        this.list_control = {};
        this.list_control_copy = {};
        this.list_control_changed_bool = false;
        this.list_changes = {};
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                console.log('CURRENT USER =>', user);
                var obj = {
                    'email': user.email,
                    'eng_id': _this.currentEng_id
                };
                _this._ConnectorService.getQuizSubmissions(obj).then(function (res) {
                    console.log("RES =>", res);
                    _this.sorted_users = {};
                    _this.all_users_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['all_users'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['by_teams'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'team');
                    _this.sorted_users['by_title'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'title');
                    _this.topics_unsorted = res['response']['topics'];
                    _this.by_teams = Object.keys(_this.sorted_users['by_teams']);
                    _this.by_title = Object.keys(_this.sorted_users['by_title']);
                    _this.current_list_target = "by_teams";
                    _this.current_list_key = Object.keys(_this.sorted_users[_this.current_list_target])[0];
                    _this.current_list = _this.sorted_users[_this.current_list_target][_this.current_list_key];
                    _this.current_list_properties_setter(_this.current_list);
                    _this.reverseTable();
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    AdminEditsubmissionsComponent.prototype.ngOnInit = function () {
    };
    // LISTENERS ===========================
    AdminEditsubmissionsComponent.prototype.selectList = function (target, key) {
        this.current_list_target = target;
        if (target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else {
            this.current_list_key = key;
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
        this.current_list_properties_setter(this.current_list);
        var that = this;
        setTimeout(function () {
            that.reverseTable();
        }, 200);
    };
    AdminEditsubmissionsComponent.prototype.checkTopic = function (user_id, topic_id) {
        var user = this.sorted_users.all_users[user_id];
        if (user.topic_id.includes(topic_id)) {
            // remove topic_id from user's list of allowed topics
            var arr = user.topic_id;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == topic_id) {
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
        else {
            user.topic_id.push(topic_id);
        }
    };
    AdminEditsubmissionsComponent.prototype.uncheckTopicForUser = function (user_id, topic_id) {
    };
    AdminEditsubmissionsComponent.prototype.actionButton = function (submit_id, target, value) {
        if (target != "invalidate_submission" && this.all_users_original[submit_id][target]) {
            return;
        }
        if (value === true) {
            this.sorted_users.all_users[submit_id][target] = true;
        }
        else if (value === false) {
            this.sorted_users.all_users[submit_id][target] = false;
        }
        else {
            this.sorted_users.all_users[submit_id][target] = !this.sorted_users.all_users[submit_id][target];
        }
        if (this.sorted_users.all_users[submit_id][target]) {
            this.current_list_properties[target]++;
        }
        else {
            this.current_list_properties[target]--;
        }
    };
    AdminEditsubmissionsComponent.prototype.checkTopicForUser = function (user_id, topic_id) {
        if (!this.sorted_users.all_users[user_id].topic_id.includes(topic_id)) {
            this.sorted_users.all_users[user_id].topic_id.push(topic_id);
        }
    };
    AdminEditsubmissionsComponent.prototype.checkChanges = function () {
        this.differencesFinder();
        console.log("CHANGE LIST =>", this.list_changes);
        if (Object.keys(this.list_changes).length > 0) {
            this.openModal('changes_list', null);
        }
    };
    AdminEditsubmissionsComponent.prototype.undoChangeAll = function () {
        for (var user in this.list_changes) {
            this.current_list[user]['retake_topic'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['retake_topic']);
            this.current_list[user]['regrade_submission'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['regrade_submission']);
            this.current_list[user]['invalidate_submission'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['invalidate_submission']);
        }
        this.list_changes = {};
        this.current_list_properties_setter(this.current_list);
        this.closeModal();
    };
    AdminEditsubmissionsComponent.prototype.undoChange = function (user_id, topic_id) {
        this.actionButton(user_id, topic_id, null);
        this.differencesFinder();
        if (Object.keys(this.list_changes).length < 1) {
            this.closeModal();
        }
    };
    AdminEditsubmissionsComponent.prototype.listChanger = function (key) {
        var value = true;
        if (this.current_list_properties["" + key] >= this.current_list_properties[key + "_total_length"]) {
            value = false;
        }
        for (var el in this.current_list) {
            this.actionButton(el, key, value);
        }
        this.current_list_properties_setter(this.current_list);
    };
    AdminEditsubmissionsComponent.prototype.submitChanges = function () {
        var _this = this;
        console.log("this.list_changes =>", this.list_changes);
        var users = {};
        for (var user_id in this.list_changes) {
            users[user_id] = this.sorted_users['all_users'][user_id];
            users[user_id]['removed_list'] = this.list_changes[user_id]['removed'];
            users[user_id]['added_list'] = this.list_changes[user_id]['added'];
        }
        console.log("USERS FOR SUBMIT! =>", users);
        this.closeModal();
        var obj = {
            'users': users,
            'email': this.currentUser.email,
            'eng_id': this.currentEng_id
        };
        this.loadingMessage(Object.keys(users).length);
        this._ConnectorService.saveQuizSubmissions(obj).then(function (res) {
            _this.closeModal();
            console.log(new Date());
            console.log("RES =>", res);
            if (res['status'] == 'success') {
                if (res['response']['users']) {
                    for (var el in _this.list_changes) {
                        console.log(res['response']['users'][el]);
                        _this.sorted_users.all_users[el] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users'][el]);
                        _this.all_users_original[el] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users'][el]);
                    }
                }
                _this.list_changes = {};
                _this.openModal('message', 'success');
            }
            else {
                _this.openModal('message', 'fail');
            }
        }).catch(function (err) {
            console.log(err);
            this.openModal('message', 'fail');
        });
    };
    // MODAL FUNCTIONS =====================
    AdminEditsubmissionsComponent.prototype.openModal = function (target, message) {
        this.modal_mesage_bool = true;
        this.modal_message.title = target;
        if (target == 'list_control') {
            if (this.current_list_target == "by_teams") {
                this.modal_message.body = message + (" team " + this.current_list_key);
            }
            else if (this.current_list_target == "by_title") {
                this.modal_message.body = message + (" title " + this.current_list_key);
            }
            else {
                this.modal_message.body = message + " everyone";
            }
            this.generateListControl();
            console.log(this.list_control);
        }
        else if (target == 'counter') {
            this.modal_message.counter_end = message;
        }
        else {
            this.modal_message.body = message;
            console.log(this.modal_message);
        }
    };
    AdminEditsubmissionsComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
        this.list_control_changed_bool = false;
    };
    // LIST CONTROL FUNCTOINS =============
    AdminEditsubmissionsComponent.prototype.generateListControl = function () {
        this.list_control_changed_bool = false;
        var list = {};
        for (var user in this.current_list) {
            var cur_user = this.current_list[user];
            // console.log("let's check this user =>", cur_user)
            for (var topic in cur_user['topic_id']) {
                if (!list[cur_user['topic_id'][topic]]) {
                    list[cur_user['topic_id'][topic]] = 1;
                }
                else {
                    list[cur_user['topic_id'][topic]]++;
                }
                // console.log('topic =>', topic)
                if (list[cur_user['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    // console.log("all cur_users have ", cur_user['topic_id'][topic], " => ", list[cur_user['topic_id'][topic]], list[cur_user['topic_id'][topic]])
                    list[cur_user['topic_id'][topic]] = true;
                }
            }
        }
        this.list_control = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
        this.list_control_copy = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
    };
    AdminEditsubmissionsComponent.prototype.listControlChanger = function (topic_id, action) {
        console.log("BEFORE CHANGE => " + this.list_control[topic_id] + "; LIST_COPY => " + this.list_control_copy[topic_id]);
        if (action == 'all') {
            this.list_control[topic_id] = true;
        }
        else {
            this.list_control[topic_id] = 0;
        }
        console.log("AFTER CHANGE => " + this.list_control[topic_id] + " ; LIST_COPY => " + this.list_control_copy[topic_id]);
        var changes_bool = false;
        for (var el in this.list_control) {
            // console.log("this.list_control[el] != this.list_control_copy[el]", JSON.stringify(this.list_control[el]), JSON.stringify(this.list_control_copy[el]), JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el]))
            if (JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el])) {
                if (!this.list_control_copy[el] && this.list_control[el] == 0) {
                    continue;
                }
                console.log("found a difference!");
                changes_bool = true;
                break;
            }
        }
        if (changes_bool) {
            this.list_control_changed_bool = true;
        }
        else {
            this.list_control_changed_bool = false;
        }
    };
    AdminEditsubmissionsComponent.prototype.listControlCancel = function () {
        this.list_control = {};
        for (var user in this.current_list) {
            for (var topic in this.current_list[user]['topic_id']) {
                if (!this.list_control[this.current_list[user]['topic_id'][topic]]) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = 1;
                }
                else {
                    this.list_control[this.current_list[user]['topic_id'][topic]]++;
                }
                if (this.list_control[this.current_list[user]['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = true;
                }
            }
        }
    };
    AdminEditsubmissionsComponent.prototype.listControlSubmit = function () {
        console.log(this.list_control);
        var topic_list = this.list_control;
        var topic_list_original = this.list_control_copy;
        var cur_users = this.current_list;
        for (var el in topic_list) {
            if (JSON.stringify(topic_list_original[el]) !== JSON.stringify(topic_list[el])) {
                if (topic_list[el] === true) {
                    for (var user in cur_users) {
                        this.checkTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
                else if (topic_list[el] == 0) {
                    for (var user in cur_users) {
                        this.uncheckTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
            }
        }
        this.closeModal();
    };
    // MISC FUNCTIONS ======================
    AdminEditsubmissionsComponent.prototype.checkState = function () {
        console.log(this);
    };
    AdminEditsubmissionsComponent.prototype.sortType = function (key) {
        console.log(key);
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("sub_table");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[key];
                y = rows[i + 1].getElementsByTagName("TD")[key];
                //check if the two rows should switch place:
                if (x.innerHTML < y.innerHTML) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    };
    AdminEditsubmissionsComponent.prototype.searchKey = function () {
        var key = document.getElementById('searchInput')['value'];
        if (key.length < 0) {
            return;
        }
        if (this.current_list_target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else {
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
        var activeList = [];
        var table_body_target = document.getElementById('table_body_target').querySelectorAll('tr');
        // console.log("table_body_target => ", table_body_target)
        for (var el in table_body_target) {
            if (table_body_target[el]) {
                if (typeof (table_body_target[el]) == "object") {
                    var row_values = table_body_target[el].getElementsByClassName('tr_string');
                    var bool = false;
                    for (var value in row_values) {
                        if (typeof (row_values[value]) == "object" && row_values[value]['innerHTML'].toLowerCase().includes(key.toLowerCase())) {
                            bool = true;
                            table_body_target[el].classList.remove('hidden');
                            break;
                        }
                    }
                    if (!bool) {
                        table_body_target[el].classList.add('hidden');
                    }
                }
            }
        }
    };
    AdminEditsubmissionsComponent.prototype.forceRegrade = function () {
        var key = document.getElementById('forceRegrade')['value'];
        if (this.all_users_original[key] && this.sorted_users.all_users[key]) {
            this.all_users_original[key]['regrade_submission'] = false;
            this.sorted_users.all_users[key]['regrade_submission'] = true;
            this.forceRegrade_message = "Change accepted";
            document.getElementById('forceRegrade')['value'] = '';
        }
        else {
            this.forceRegrade_message = "Wrong entry";
        }
        var that = this;
        setTimeout(function () {
            that.forceRegrade_message = '    ';
        }, 3000);
    };
    AdminEditsubmissionsComponent.prototype.submitGradesForOneQuiz = function () {
        var key = document.getElementById('forceRegrade')['value'];
        if (this.all_users_original[key] && this.sorted_users.all_users[key]) {
            this.all_users_original[key]['regrade_submission'] = false;
            this.sorted_users.all_users[key]['regrade_submission'] = true;
            this.submitGradesForOneQuiz_message = "ID accepted";
            var obj = {
                submit_id: key
            };
            this._ConnectorService.submitGradesForOneQuiz(obj).then(function (result) {
                console.log("submitGradesForOneQuiz RESULT", result);
            }).catch(function (err) {
                console.log("submitGradesForOneQuiz ERROR =>", err);
            });
            document.getElementById('forceRegrade')['value'] = '';
        }
        else {
            this.submitGradesForOneQuiz_message = "Wrong entry";
        }
        var that = this;
        setTimeout(function () {
            that.submitGradesForOneQuiz_message = '    ';
        }, 3000);
    };
    AdminEditsubmissionsComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminEditsubmissionsComponent.prototype.differencesFinder = function () {
        var res = {};
        for (var u in this.sorted_users.all_users) {
            // if(u == '1930'){
            //   this.all_users_original[u]['regrade_submission'] = false;
            //   this.sorted_users.all_users[u]['regrade_submission'] = true;
            // }
            if (this.sorted_users.all_users[u]['invalidate_submission'] !== this.all_users_original[u]['invalidate_submission']) {
                res[u] = this.sorted_users.all_users[u];
                continue;
            }
            else if (this.sorted_users.all_users[u]['regrade_submission'] !== this.all_users_original[u]['regrade_submission']) {
                res[u] = this.sorted_users.all_users[u];
                continue;
            }
            else if (this.sorted_users.all_users[u]['retake_topic'] !== this.all_users_original[u]['retake_topic']) {
                res[u] = this.sorted_users.all_users[u];
                continue;
            }
        }
        this.list_changes = res;
    };
    AdminEditsubmissionsComponent.prototype.current_list_properties_setter = function (list) {
        this.current_list_properties = {
            'length': 0,
            'retake_topic': 0,
            'retake_topic_total_length': 0,
            'regrade_submission': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission': 0,
            'invalidate_submission_total_length': 0
        };
        for (var el in list) {
            // console.log(el, list[el]['retake_topic'] )
            if (list[el]['invalidate_submission']) {
                this.current_list_properties.invalidate_submission++;
            }
            if (list[el]['regrade_submission'] && !this.all_users_original[el]['regrade_submission']) {
                this.current_list_properties.regrade_submission++;
            }
            if (!this.all_users_original[el]['regrade_submission']) {
                this.current_list_properties.regrade_submission_total_length++;
            }
            if (list[el]['retake_topic'] && !this.all_users_original[el]['retake_topic']) {
                this.current_list_properties.retake_topic++;
            }
            if (!this.all_users_original[el]['retake_topic']) {
                this.current_list_properties.retake_topic_total_length++;
            }
        }
        this.current_list_properties.length = Object.keys(list).length;
        this.current_list_properties.invalidate_submission_total_length = Object.keys(list).length;
        console.log("NEW current_list_properties =>", this.current_list_properties);
    };
    AdminEditsubmissionsComponent.prototype.loadingMessage = function (count) {
        this.openModal('counter', count);
        this.loadingMessageLoop(0, count);
    };
    AdminEditsubmissionsComponent.prototype.loadingMessageLoop = function (start, end) {
        if (start < end) {
            this.modal_message.counter_start = start;
            var new_start_1 = start + 1;
            var that_1 = this;
            setTimeout(function () {
                return that_1.loadingMessageLoop(new_start_1, end);
            }, 100);
        }
        else {
            console.log("done!");
            return;
        }
    };
    AdminEditsubmissionsComponent.prototype.regradeStuckedSubmissions = function () {
        for (var u in this.sorted_users.all_users) {
            if (this.sorted_users.all_users[u]['regrade_submission'] && this.all_users_original[u]['regrade_submission']) {
                this.all_users_original[u]['regrade_submission'] = false;
            }
        }
    };
    AdminEditsubmissionsComponent.prototype.reverseTable = function () {
        // console.log("lol")
        var table = document.getElementById("table_body_target");
        // console.log(table.childNodes)
        var childNodes_copy = [];
        if (table.childNodes.length < 3) {
            return;
        }
        for (var i = 2; i < table.childNodes.length; i++) {
            table.insertBefore(table.childNodes[i], table.childNodes[1]);
        }
    };
    AdminEditsubmissionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editsubmissions',
            template: __webpack_require__(/*! ./admin-editsubmissions.component.html */ "./src/app/admin-editsubmissions/admin-editsubmissions.component.html"),
            styles: [__webpack_require__(/*! ./admin-editsubmissions.component.css */ "./src/app/admin-editsubmissions/admin-editsubmissions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminEditsubmissionsComponent);
    return AdminEditsubmissionsComponent;
}());



/***/ }),

/***/ "./src/app/admin-editusers/admin-editusers.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-editusers/admin-editusers.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-quiz-permission {\n    margin-top: 50px;\n}\n\n.admin-quiz-permission-title {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-body {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-list_buttons {\n    margin: 0px auto;\n    width: 80%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.admin-quiz-permission-by_teams{\n    margin: 50px 50px;\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: center;\n}\n\n.admin-quiz-permission-table_box{\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.EditQuizPermissions_categoryBox {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: flex-start;\n    /* z-index: 0;\n    transition: 0.5s;\n    box-shadow: none; */\n    margin: 5px 5px;\n    padding: 5px 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    border-radius: 5px;\n}\n\n.EditQuizPermissions_categoryBox p {\n    transition: 0.5s;\n}\n\n.EditQuizPermissions_categoryBox:hover {\n    /* z-index: 1;\n    box-shadow: 5px 10px 18px #888888;\n    background: white */\n}\n\n.EditQuizPermissions_categoryBox:hover p {\n    color: #4f91cd;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5);\n    margin-top: -120px;\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 1000px;\n    max-width: 1000px !important;\n    /* height: 100px; */\n}\n\n.toggle-red::before{\n    border-color: #a71212 !important;\n    background-color: #f56f6f !important;\n}\n\ninput[type=\"checkbox\"].switch_1{\n\tfont-size: 30px;\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\twidth: 2.2em;\n\theight: 1em;\n\tbackground: #ddd;\n\tborder-radius: 3em;\n\tposition: relative;\n\tcursor: pointer;\n\toutline: none;\n\ttransition: all .2s ease-in-out;\n  }\n\ninput[type=\"checkbox\"].switch_1:checked{\n\tbackground: #0ebeff;\n  }\n\ninput[type=\"checkbox\"].switch_1:after{\n\tposition: absolute;\n\tcontent: \"\";\n\twidth: 1em;\n\theight: 1em;\n\tborder-radius: 50%;\n\tbackground: #fff;\n\tbox-shadow: 0 0 .25em rgba(0,0,0,.3);\n\t-webkit-transform: scale(.7);\n\t        transform: scale(.7);\n\tleft: 0;\n\ttransition: all .2s ease-in-out;\n  }\n\ninput[type=\"checkbox\"].switch_1:checked:after{\n\tleft: calc(100% - 1em);\n  }\n\ninput[type=\"checkbox\"].switch_1:disabled{\n    -webkit-filter: brightness(65%);\n            filter: brightness(65%);\n  }\n\n.outerDivFull { margin:50px; }\n\n.switchToggle input[type=checkbox]{height: 0; width: 0; visibility: hidden; position: absolute; }\n\n.switchToggle label {cursor: pointer; text-indent: -9999px; width: 70px; max-width: 70px; height: 30px; background: #d1d1d1; display: block; border-radius: 100px; position: relative; }\n\n.switchToggle label:after {content: ''; position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; background: #fff; border-radius: 90px; transition: 0.3s; }\n\n.switchToggle input:checked + label, .switchToggle input:checked + input + label  {background: #3e98d3; }\n\n.switchToggle input + label:before, .switchToggle input + input + label:before {content: 'No'; position: absolute; top: 5px; left: 35px; width: 26px; height: 26px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }\n\n.switchToggle input:checked + label:before, .switchToggle input:checked + input + label:before {content: 'Yes'; position: absolute; top: 5px; left: 10px; width: 26px; height: 26px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }\n\n.switchToggle input:checked + label:after, .switchToggle input:checked + input + label:after {left: calc(100% - 2px); -webkit-transform: translateX(-100%); transform: translateX(-100%); }\n\n.switchToggle label:active:after {width: 60px; }\n\n.toggle-switchArea { margin: 10px 0 10px 0; }\n\nthead th\n{\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0px;\n    z-index: 1;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZWRpdHVzZXJzL2FkbWluLWVkaXR1c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtDQUNoQixzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIscUJBQXFCO0FBQ3RCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekI7O3VCQUVtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTs7dUJBRW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9DQUFvQztBQUN4Qzs7QUFFQTtDQUNDLGVBQWU7Q0FDZix3QkFBd0I7SUFDckIscUJBQXFCO1NBQ2hCLGdCQUFnQjtDQUN4QixZQUFZO0NBQ1osV0FBVztDQUNYLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0NBRWIsK0JBQStCO0VBQzlCOztBQUVBO0NBQ0QsbUJBQW1CO0VBQ2xCOztBQUVBO0NBQ0Qsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FFUixvQ0FBb0M7Q0FDNUMsNEJBQTRCO1NBQ3BCLG9CQUFvQjtDQUM1QixPQUFPO0NBRVAsK0JBQStCO0VBQzlCOztBQUVBO0NBQ0Qsc0JBQXNCO0VBQ3JCOztBQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFFQSxnQkFBZ0IsV0FBVyxFQUFFOztBQUUvQixtQ0FBbUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRTs7QUFDaEcscUJBQXFCLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUU7O0FBQ3ZMLDJCQUEyQixXQUFXLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFOztBQUNySyxtRkFBbUYsbUJBQW1CLEVBQUU7O0FBQ3hHLGdGQUFnRixhQUFhLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7O0FBQ3hPLGdHQUFnRyxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUU7O0FBQ3pQLDhGQUE4RixzQkFBc0IsRUFBRSxvQ0FBNEIsRUFBNUIsNEJBQTRCLEVBQUU7O0FBQ3BKLGtDQUFrQyxXQUFXLEVBQUU7O0FBQy9DLHFCQUFxQixxQkFBcUIsRUFBRTs7QUFFNUM7O0lBRUksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsVUFBVTs7QUFFZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWVkaXR1c2Vycy9hZG1pbi1lZGl0dXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1xdWl6LXBlcm1pc3Npb24ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5hZG1pbi1xdWl6LXBlcm1pc3Npb24tdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hZG1pbi1xdWl6LXBlcm1pc3Npb24tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZG1pbi1xdWl6LXBlcm1pc3Npb24tbGlzdF9idXR0b25zIHtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hZG1pbi1xdWl6LXBlcm1pc3Npb24tYnlfdGVhbXN7XG4gICAgbWFyZ2luOiA1MHB4IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRtaW4tcXVpei1wZXJtaXNzaW9uLXRhYmxlX2JveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uRWRpdFF1aXpQZXJtaXNzaW9uc19jYXRlZ29yeUJveCB7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC8qIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICBib3gtc2hhZG93OiBub25lOyAqL1xuICAgIG1hcmdpbjogNXB4IDVweDtcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3ggcCB7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLkVkaXRRdWl6UGVybWlzc2lvbnNfY2F0ZWdvcnlCb3g6aG92ZXIge1xuICAgIC8qIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICovXG59XG5cbi5FZGl0UXVpelBlcm1pc3Npb25zX2NhdGVnb3J5Qm94OmhvdmVyIHAge1xuICAgIGNvbG9yOiAjNGY5MWNkO1xufVxuLm1vZGFsX21lc3NhZ2VfYm94IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNTA7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE4MiwgMTg1LCAwLjUpO1xuICAgIG1hcmdpbi10b3A6IC0xMjBweDtcbn1cblxuLm1vZGFsX21lc3NhZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXR7XG4gICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQgdGR7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIG1heC13aWR0aDogMTAwMHB4ICFpbXBvcnRhbnQ7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbn1cblxuLnRvZ2dsZS1yZWQ6OmJlZm9yZXtcbiAgICBib3JkZXItY29sb3I6ICNhNzEyMTIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU2ZjZmICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMXtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdCAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuXHR3aWR0aDogMi4yZW07XG5cdGhlaWdodDogMWVtO1xuXHRiYWNrZ3JvdW5kOiAjZGRkO1xuXHRib3JkZXItcmFkaXVzOiAzZW07XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdXRsaW5lOiBub25lO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpjaGVja2Vke1xuXHRiYWNrZ3JvdW5kOiAjMGViZWZmO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uc3dpdGNoXzE6YWZ0ZXJ7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDFlbTtcblx0aGVpZ2h0OiAxZW07XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgLjI1ZW0gcmdiYSgwLDAsMCwuMyk7XG5cdCAgICAgICAgYm94LXNoYWRvdzogMCAwIC4yNWVtIHJnYmEoMCwwLDAsLjMpO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjcpO1xuXHQgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuXHRsZWZ0OiAwO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpjaGVja2VkOmFmdGVye1xuXHRsZWZ0OiBjYWxjKDEwMCUgLSAxZW0pO1xuICB9XG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5zd2l0Y2hfMTpkaXNhYmxlZHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoNjUlKTtcbiAgfVxuXG4gIC5vdXRlckRpdkZ1bGwgeyBtYXJnaW46NTBweDsgfSBcblxuLnN3aXRjaFRvZ2dsZSBpbnB1dFt0eXBlPWNoZWNrYm94XXtoZWlnaHQ6IDA7IHdpZHRoOiAwOyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuLnN3aXRjaFRvZ2dsZSBsYWJlbCB7Y3Vyc29yOiBwb2ludGVyOyB0ZXh0LWluZGVudDogLTk5OTlweDsgd2lkdGg6IDcwcHg7IG1heC13aWR0aDogNzBweDsgaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kOiAjZDFkMWQxOyBkaXNwbGF5OiBibG9jazsgYm9yZGVyLXJhZGl1czogMTAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuLnN3aXRjaFRvZ2dsZSBsYWJlbDphZnRlciB7Y29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAycHg7IGxlZnQ6IDJweDsgd2lkdGg6IDI2cHg7IGhlaWdodDogMjZweDsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyLXJhZGl1czogOTBweDsgdHJhbnNpdGlvbjogMC4zczsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWwsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWwgIHtiYWNrZ3JvdW5kOiAjM2U5OGQzOyB9XG4uc3dpdGNoVG9nZ2xlIGlucHV0ICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0ICsgaW5wdXQgKyBsYWJlbDpiZWZvcmUge2NvbnRlbnQ6ICdObyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1cHg7IGxlZnQ6IDM1cHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlLCAuc3dpdGNoVG9nZ2xlIGlucHV0OmNoZWNrZWQgKyBpbnB1dCArIGxhYmVsOmJlZm9yZSB7Y29udGVudDogJ1llcyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiA1cHg7IGxlZnQ6IDEwcHg7IHdpZHRoOiAyNnB4OyBoZWlnaHQ6IDI2cHg7IGJvcmRlci1yYWRpdXM6IDkwcHg7IHRyYW5zaXRpb246IDAuM3M7IHRleHQtaW5kZW50OiAwOyBjb2xvcjogI2ZmZjsgfVxuLnN3aXRjaFRvZ2dsZSBpbnB1dDpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsIC5zd2l0Y2hUb2dnbGUgaW5wdXQ6Y2hlY2tlZCArIGlucHV0ICsgbGFiZWw6YWZ0ZXIge2xlZnQ6IGNhbGMoMTAwJSAtIDJweCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbi5zd2l0Y2hUb2dnbGUgbGFiZWw6YWN0aXZlOmFmdGVyIHt3aWR0aDogNjBweDsgfSBcbi50b2dnbGUtc3dpdGNoQXJlYSB7IG1hcmdpbjogMTBweCAwIDEwcHggMDsgfVxuXG50aGVhZCB0aFxue1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwcHg7XG4gICAgei1pbmRleDogMTtcblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-editusers/admin-editusers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-editusers/admin-editusers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n  <div [hidden]=\"sorted_users\" class=\" loading_box element-animation-fadeIn\" style=\" margin-top: 100px;height: 300px;\">\n    <h2>Loading...</h2>\n    <div class=\"spinner-border\" role=\"status\">\n      <span class=\"sr-only\"></span>\n    </div>\n  </div>\n  <div [hidden]=\"!sorted_users\" class=\"admin-quiz-permission element-animation-fadeIn\" style=\"margin-bottom: 50px;\">\n    <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\">\n      <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\">\n        <!-- CHANGE LIST -->\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'changes_list'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">List of\n              changes</h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"height: 50vh !important; overflow-y: scroll;\">\n            <table class=\"table table-striped table-borderless\">\n              <thead class=\"thead-dark shadow\">\n                <tr>\n                  <th>User ID</th>\n                  <th>Name</th>\n                  <th>Team and title</th>\n                  <th>Removed</th>\n                  <th>Granted</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let user of list_changes | keyvalue\">\n                  <th scope=\"row\" class=\"\">{{user.key}}</th>\n                  <td>{{user.value.first_name}} {{user.value.last_name}}</td>\n                  <td class=\"font-weight-bold   tr_string\">{{ user.value.team }}, {{user.value.title}}</td>\n                  <td [ngClass]=\"{\n                                          'alert-danger': (!user.value.admin_grader && all_users_original[user.key]['admin_grader']) || !user.value.admin_editor && all_users_original[user.key]['admin_editor'] || !user.value.admin_permissions && all_users_original[user.key]['admin_permissions'] || !user.value.admin_owner && all_users_original[user.key]['admin_owner']\n                                        }\">\n                    <p *ngIf=\"!user.value.admin_grader && all_users_original[user.key]['admin_grader']\">\n                      Grader <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_grader')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"!user.value.admin_editor && all_users_original[user.key]['admin_editor']\">\n                      Editor <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_editor')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"!user.value.admin_permissions && all_users_original[user.key]['admin_permissions']\">\n                      Admin<button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_permissions')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"!user.value.admin_owner && all_users_original[user.key]['admin_owner']\">\n                      Owner permissions <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_owner')\">Undo</button>\n                    </p>\n                  </td>\n                  <td [ngClass]=\"{\n                                          'alert-success': (user.value.admin_grader && !all_users_original[user.key]['admin_grader']) || user.value.admin_editor && !all_users_original[user.key]['admin_editor'] || user.value.admin_permissions && !all_users_original[user.key]['admin_permissions'] || user.value.admin_owner && !all_users_original[user.key]['admin_owner']\n                                        }\">\n                    <p *ngIf=\"user.value.admin_grader && !all_users_original[user.key]['admin_grader']\">\n                      Grader <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_grader')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"user.value.admin_editor && !all_users_original[user.key]['admin_editor']\">\n                      Editor <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_editor')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"user.value.admin_permissions && !all_users_original[user.key]['admin_permissions']\">\n                      Admin<button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_permissions')\">Undo</button>\n                    </p>\n                    <p *ngIf=\"user.value.admin_owner && !all_users_original[user.key]['admin_owner']\">\n                      Owner permissions <button class=\"btn-sm btn-xs btn-danger shadow \"\n                        (click)=\"undoChange(user.key, 'admin_owner')\">Undo</button>\n                    </p>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"submitChanges()\" class=\"btn btn-success  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Submit changes</button>\n              <button type=\"button\" (click)=\"undoChangeAll()\" class=\"btn btn-danger  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Cancel All</button>\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'message'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'success'\">\n            <h4 class=\"alert-heading text-center\">Well done!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Your changes have been saved!</p>\n            <button class=\"btn btn-primary btn-action-borderless  shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click here to go back to the admin portal</button>\n          </div>\n          <div class=\"alert alert-danger text-center\" style=\"margin-bottom: 0px\" role=\"alert\"\n            *ngIf=\"modal_message.body == 'fail'\">\n            <h4 class=\"alert-heading text-center\">Oops!</h4>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <p>Something went wrong. Please try again later or contact developers.</p>\n            <button class=\"btn btn-primary btn-action-borderless  shadow\"\n              [routerLink]=\"['/',currentEng_id, 'admin']\">Click here to go back to the admin portal</button>\n          </div>\n        </div>\n        <div class=\"modal-content modal-dialog-scrollable shadow\" *ngIf=\"modal_message.title == 'counter'\">\n          <div class=\"alert alert-success text-center\" style=\"margin-bottom: 0px\" role=\"alert\">\n\n            <p>Saving changes {{modal_message.counter_start }} of {{modal_message.counter_end }}</p>\n            <div class=\"progress\">\n              <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\"\n                [attr.aria-valuenow]=\"modal_message.counter_start\" [attr.aria-valuemin]=\"0\"\n                [attr.aria-valuemax]=\"modal_message.counter_end\"\n                [style.width.%]=\"( (modal_message.counter_start/modal_message.counter_end) * 100)\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"admin-quiz-permission-title\">\n      <h1>User Permission Table</h1>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_teams' }\">Teams</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless \"\n          [ngClass]=\"{'active': current_list_target == 'by_teams' && current_list_key == team }\"\n          *ngFor=\"let team of by_teams\" (click)=\"selectList('by_teams',team)\">{{team}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <h3 [ngClass]=\"{'bp-color': current_list_target == 'by_title' }\">Titles</h3>\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-action-borderless \"\n          [ngClass]=\"{'active': current_list_target == 'by_title' && current_list_key == title }\"\n          *ngFor=\"let title of by_title\" (click)=\"selectList('by_title',title)\">{{title}}</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <button class=\"btn btn-outline-secondary btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important': current_list_target == 'all_users' }\"\n          (click)=\"selectList('all_users', 'admin')\">All employees</button>\n        <button class=\"btn btn-outline-success btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important': current_list_target == 'admin_grader' }\"\n          (click)=\"selectList('admin_grader', 'admin')\">Graders</button>\n        <button class=\"btn btn-outline-info btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important': current_list_target == 'admin_editor' }\"\n          (click)=\"selectList('admin_editor', 'admin')\">Editors</button>\n        <button class=\"btn btn-outline-secondary btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important': current_list_target == 'admin_permissions' }\"\n          (click)=\"selectList('admin_permissions', 'admin')\">Admins</button>\n        <button class=\"btn btn-outline-warning btn-lg btn-action-borderless \"\n          [ngClass]=\"{'bp-button-important': current_list_target == 'admin_owner' }\"\n          (click)=\"selectList('admin_owner', 'admin')\">Owners</button>\n      </div>\n    </div>\n    <div class=\"admin-quiz-permission-by_teams\">\n      <div class=\"admin-quiz-permission-list_buttons\" role=\"group\">\n        <label>\n          Search in\n          <span *ngIf=\"current_list_target == 'by_teams'\">team # {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'by_title'\">title {{current_list_key}}</span>\n          <span *ngIf=\"current_list_target == 'all_users'\">all users</span>:\n          <div class=\"input-group shadow\">\n            <input type=\"text\" class=\"form-control form-control-bp-shadow\" id=\"searchInput\" placeholder=\"\" aria-label=\"\"\n              style=\"border-radius: 0px\" aria-describedby=\"basic-addon1\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-info bp-button-important btn-outline-bp-hover-side-shadow\" type=\"button\"\n                (click)=\"searchKey()\" style=\"border-color: #2675a3; border-radius: 0px\">Filter</button>\n            </div>\n          </div>\n        </label>\n      </div>\n    </div>\n    <!-- <div class=\"admin-quiz-permission-by_teams\">\n                  <div class=\"admin-quiz-permission-list_buttons\"  role=\"group\" >\n                      <button class=\"btn btn-secondary btn-lg btn-action-borderless shadow-lg\" (click)=\"openModal('list_control', '')\">List control</button>\n                    </div>\n            \n              </div> -->\n    <div class=\"admin-quiz-permission-table_box\">\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-bottom: 50px;\"\n        (click)=\"checkChanges()\">Check Changes</button>\n      <table class=\"table table-borderless shadow\" style=\"width: 98%; margin: 0px auto;\">\n        <thead class=\"thead-dark shadow-lg\">\n          <tr>\n            <th style=\"font-size: 10px; text-align: center;  width: 5%\" (click)=\"sortType('profile_id')\">User ID</th>\n            <th>Email</th>\n            <th>Name</th>\n            <th>Team</th>\n            <th>Title</th>\n            <th style='text-align: center'>Grader</th>\n            <th style='text-align: center'>Editor</th>\n            <th style='text-align: center'>Admin</th>\n            <th style='text-align: center'>Owner</th>\n\n          </tr>\n        </thead>\n        <tbody id=\"table_body_target\" style=\"background: white\">\n          <tr *ngFor=\"let user of current_list | keyvalue \" [ngClass]=\"getClassForUserStatus(user.key)\">\n            <th scope=\"row\" class=\"font-weight-bold  text-center  tr_string\">{{user.key}}</th>\n            <td class=\"tr_string\">{{user.value.email}}</td>\n            <td class=\"tr_string\">{{user.value.first_name}} {{user.value.last_name}}</td>\n            <td class=\"tr_string\">{{user.value.team}}</td>\n            <td class=\"tr_string\">{{user.value.title}}</td>\n\n            <td align=\"center\" class=\"tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"grader_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key,'admin_grader', null)\" [checked]='user.value.admin_grader'>\n                <label for=\"grader_for_{{user.key}}\" [ngClass]=\"{\n                                      'shadow': true,\n                                      'switchToggle_checked_green': !all_users_original[user.key]['admin_grader'] && user.value.admin_grader,\n                                      'switchToggle_checked_red': all_users_original[user.key]['admin_grader'] && !user.value.admin_grader\n                                    }\"></label>\n              </div>\n            </td>\n            <td align=\"center\" class=\"tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"editor_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key,'admin_editor', null)\" [checked]='user.value.admin_editor'>\n                <label for=\"editor_for_{{user.key}}\" [ngClass]=\"{\n                                      'shadow': true,\n                                      'switchToggle_checked_green': !all_users_original[user.key]['admin_editor'] && user.value.admin_editor,\n                                      'switchToggle_checked_red': all_users_original[user.key]['admin_editor'] && !user.value.admin_editor\n                                    }\"></label>\n              </div>\n            </td>\n            <td align=\"center\" class=\"tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"permissions_for_{{user.key}}\"\n                  (click)=\"actionButton(user.key,'admin_permissions', null)\" [checked]='user.value.admin_permissions'>\n                <label for=\"permissions_for_{{user.key}}\" [ngClass]=\"{\n                                      'shadow': true,\n                                      'switchToggle_checked_green': !all_users_original[user.key]['admin_permissions'] && user.value.admin_permissions,\n                                      'switchToggle_checked_red': all_users_original[user.key]['admin_permissions'] && !user.value.admin_permissions\n                                    }\"></label>\n              </div>\n            </td>\n            <td align=\"center\" class=\"tr_string\">\n              <div class=\"switchToggle\">\n                <input type=\"checkbox\" id=\"owner_for_{{user.key}}\" [disabled]=\"!currentUser.admin_owner\"\n                  (click)=\"actionButton(user.key,'admin_owner', null)\" [checked]='user.value.admin_owner'>\n                <label for=\"owner_for_{{user.key}}\" [ngClass]=\"{\n                                      'shadow': true,\n                                      'switchToggle_checked_green': !all_users_original[user.key]['admin_owner'] && user.value.admin_owner,\n                                      'switchToggle_checked_red': all_users_original[user.key]['admin_owner'] && !user.value.admin_owner\n                                    }\"></label>\n              </div>\n            </td>\n          </tr>\n\n        </tbody>\n      </table>\n      <button class=\"btn btn-success btn-action-borderless btn-lg shadow\" style=\"margin-top: 50px;\"\n        (click)=\"checkChanges()\">Check Changes</button>\n    </div>\n  </div>\n  <div\n    style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n    <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n      <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n        <div class=\"text-center\" style=\"display: flex;\n              flex-direction: row;\n              flex-wrap: wrap;\n              justify-content: center;\n              align-items: center;\n              align-content: stretch;\">\n          <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n          <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n            target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n            style=\"margin-left: 15px\">\n            <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n          </a>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n        <div class=\"text-center\">\n          <p class=\"mt-3\">{{currentEng.main_text}}</p>\n          <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n              href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n        </div>\n      </div>\n      <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n        <div class=\"text-center  bp-box shadow\">\n          <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_name}}</h4>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_address}}</h5>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">{{currentEng.company_phone_number}}\n          </h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-editusers/admin-editusers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-editusers/admin-editusers.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminEditusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditusersComponent", function() { return AdminEditusersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../object_validation.js */ "./src/app/object_validation.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__);







var AdminEditusersComponent = /** @class */ (function () {
    function AdminEditusersComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.all_users_original = null;
        this.all_users = null;
        this.sorted_users = null;
        this.categories = null;
        this.topics_unsorted = null;
        this.current_list_properties = {
            'length': 0,
            'retake_topic': 0,
            'retake_topic_total_length': 0,
            'regrade_submission': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission': 0,
            'invalidate_submission_total_length': 0
        };
        this.default_list_properties = {
            'retake_topic_total_length': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission_total_length': 0
        };
        this.users_changes_bool = false;
        this.users_changes = {};
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': '',
            'counter_start': 0,
            'counter_end': 0,
        };
        this.list_control = {};
        this.list_control_copy = {};
        this.list_control_changed_bool = false;
        this.list_changes = {};
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                if (user.admin_owner || user.admin_permissions) {
                    console.log("we are fine here!");
                }
                else {
                    _this.goBack();
                }
                _this.currentUser = user;
                var obj = {
                    'email': user.email,
                    'eng_id': _this.currentEng_id
                };
                _this._ConnectorService.getUserPermissions(obj).then(function (res) {
                    console.log("RES =>", res);
                    _this.sorted_users = {};
                    _this.all_users_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['all_users'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(res['response']['users']);
                    _this.sorted_users['by_teams'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'team');
                    _this.sorted_users['by_title'] = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_6__["groupBy"])(_this.sorted_users['all_users'], 'title');
                    _this.topics_unsorted = res['response']['topics'];
                    _this.by_teams = Object.keys(_this.sorted_users['by_teams']);
                    _this.by_title = Object.keys(_this.sorted_users['by_title']);
                    _this.current_list_target = "by_teams";
                    _this.current_list_key = Object.keys(_this.sorted_users[_this.current_list_target])[0];
                    _this.current_list = _this.sorted_users[_this.current_list_target][_this.current_list_key];
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    AdminEditusersComponent.prototype.ngOnInit = function () {
    };
    AdminEditusersComponent.prototype.selectList = function (target, key) {
        this.current_list_target = target;
        if (target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else if (key == 'admin') {
            this.current_list = {};
            for (var user in this.all_users_original) {
                if (this.all_users_original[user][target]) {
                    this.current_list[user] = this.sorted_users.all_users[user];
                }
            }
        }
        else {
            this.current_list_key = key;
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
        // this.current_list_properties_setter(this.current_list)
    };
    AdminEditusersComponent.prototype.checkTopic = function (user_id, topic_id) {
        var user = this.sorted_users.all_users[user_id];
        if (user.topic_id.includes(topic_id)) {
            // remove topic_id from user's list of allowed topics
            var arr = user.topic_id;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == topic_id) {
                    for (var k = i; k < arr.length; k++) {
                        arr[k] = arr[k + 1];
                    }
                    arr.pop();
                    break;
                }
            }
        }
        else {
            user.topic_id.push(topic_id);
        }
    };
    AdminEditusersComponent.prototype.uncheckTopicForUser = function (user_id, topic_id) {
    };
    AdminEditusersComponent.prototype.actionButton = function (user_id, target, value) {
        if (target == "admin_owner" && !this.currentUser.admin_owner) {
            return;
        }
        if (value === true) {
            this.sorted_users.all_users[user_id][target] = true;
        }
        else if (value === false) {
            this.sorted_users.all_users[user_id][target] = false;
        }
        else {
            this.sorted_users.all_users[user_id][target] = !this.sorted_users.all_users[user_id][target];
        }
        if (this.sorted_users.all_users[user_id][target]) {
            this.current_list_properties[target]++;
        }
        else {
            this.current_list_properties[target]--;
        }
    };
    AdminEditusersComponent.prototype.checkTopicForUser = function (user_id, topic_id) {
        if (!this.sorted_users.all_users[user_id].topic_id.includes(topic_id)) {
            this.sorted_users.all_users[user_id].topic_id.push(topic_id);
        }
    };
    AdminEditusersComponent.prototype.checkChanges = function () {
        this.differencesFinder();
        console.log("CHANGE LIST =>", this.list_changes);
        if (Object.keys(this.list_changes).length > 0) {
            this.openModal('changes_list', null);
        }
    };
    AdminEditusersComponent.prototype.undoChangeAll = function () {
        for (var user in this.list_changes) {
            console.log("user =>", user);
            this.sorted_users.all_users[user]['admin_grader'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['admin_grader']);
            this.sorted_users.all_users[user]['admin_editor'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['admin_editor']);
            this.sorted_users.all_users[user]['admin_permissions'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['admin_permissions']);
            this.sorted_users.all_users[user]['admin_owner'] = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.all_users_original[user]['admin_owner']);
        }
        this.list_changes = {};
        // this.current_list_properties_setter(this.current_list);
        this.closeModal();
    };
    AdminEditusersComponent.prototype.undoChange = function (user_id, topic_id) {
        this.actionButton(user_id, topic_id, null);
        this.differencesFinder();
        if (Object.keys(this.list_changes).length < 1) {
            this.closeModal();
        }
    };
    AdminEditusersComponent.prototype.listChanger = function (key) {
        var value = true;
        if (this.current_list_properties["" + key] >= this.current_list_properties[key + "_total_length"]) {
            value = false;
        }
        for (var el in this.current_list) {
            this.actionButton(el, key, value);
        }
        // this.current_list_properties_setter(this.current_list)
    };
    AdminEditusersComponent.prototype.submitChanges = function () {
        var _this = this;
        console.log("this.list_changes =>", this.list_changes);
        var users = {};
        for (var user_id in this.list_changes) {
            users[user_id] = this.sorted_users['all_users'][user_id];
            users[user_id]['removed_list'] = this.list_changes[user_id]['removed'];
            users[user_id]['added_list'] = this.list_changes[user_id]['added'];
        }
        console.log("USERS FOR SUBMIT! =>", users);
        this.closeModal();
        var obj = {
            'users': users,
            'email': this.currentUser.email,
            'eng_id': this.currentEng_id
        };
        // this.loadingMessage(Object.keys(users).length)
        this._ConnectorService.saveUserPermissions(obj).then(function (res) {
            _this.all_users_original = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(_this.sorted_users.all_users);
            _this.closeModal();
            console.log(new Date());
            console.log("RES =>", res);
            if (res['status'] == 'success') {
                console.log(res);
                _this.list_changes = {};
                _this.openModal('message', 'success');
            }
            else {
                console.log(res);
                _this.openModal('message', 'fail');
            }
        }).catch(function (err) {
            console.log(err);
            this.openModal('message', 'fail');
        });
    };
    // MODAL FUNCTIONS =====================
    AdminEditusersComponent.prototype.openModal = function (target, message) {
        this.modal_mesage_bool = true;
        this.modal_message.title = target;
        if (target == 'list_control') {
            if (this.current_list_target == "by_teams") {
                this.modal_message.body = message + (" team " + this.current_list_key);
            }
            else if (this.current_list_target == "by_title") {
                this.modal_message.body = message + (" title " + this.current_list_key);
            }
            else {
                this.modal_message.body = message + " everyone";
            }
            this.generateListControl();
            console.log(this.list_control);
        }
        else if (target == 'counter') {
            this.modal_message.counter_end = message;
        }
        else {
            this.modal_message.body = message;
            console.log(this.modal_message);
        }
    };
    AdminEditusersComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
        this.list_control_changed_bool = false;
    };
    // LIST CONTROL FUNCTOINS =============
    AdminEditusersComponent.prototype.generateListControl = function () {
        this.list_control_changed_bool = false;
        var list = {};
        for (var user in this.current_list) {
            var cur_user = this.current_list[user];
            // console.log("let's check this user =>", cur_user)
            for (var topic in cur_user['topic_id']) {
                if (!list[cur_user['topic_id'][topic]]) {
                    list[cur_user['topic_id'][topic]] = 1;
                }
                else {
                    list[cur_user['topic_id'][topic]]++;
                }
                // console.log('topic =>', topic)
                if (list[cur_user['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    // console.log("all cur_users have ", cur_user['topic_id'][topic], " => ", list[cur_user['topic_id'][topic]], list[cur_user['topic_id'][topic]])
                    list[cur_user['topic_id'][topic]] = true;
                }
            }
        }
        this.list_control = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
        this.list_control_copy = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(list);
    };
    AdminEditusersComponent.prototype.listControlChanger = function (topic_id, action) {
        console.log("BEFORE CHANGE => " + this.list_control[topic_id] + "; LIST_COPY => " + this.list_control_copy[topic_id]);
        if (action == 'all') {
            this.list_control[topic_id] = true;
        }
        else {
            this.list_control[topic_id] = 0;
        }
        console.log("AFTER CHANGE => " + this.list_control[topic_id] + " ; LIST_COPY => " + this.list_control_copy[topic_id]);
        var changes_bool = false;
        for (var el in this.list_control) {
            // console.log("this.list_control[el] != this.list_control_copy[el]", JSON.stringify(this.list_control[el]), JSON.stringify(this.list_control_copy[el]), JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el]))
            if (JSON.stringify(this.list_control[el]) !== JSON.stringify(this.list_control_copy[el])) {
                if (!this.list_control_copy[el] && this.list_control[el] == 0) {
                    continue;
                }
                console.log("found a difference!");
                changes_bool = true;
                break;
            }
        }
        if (changes_bool) {
            this.list_control_changed_bool = true;
        }
        else {
            this.list_control_changed_bool = false;
        }
    };
    AdminEditusersComponent.prototype.listControlCancel = function () {
        this.list_control = {};
        for (var user in this.current_list) {
            for (var topic in this.current_list[user]['topic_id']) {
                if (!this.list_control[this.current_list[user]['topic_id'][topic]]) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = 1;
                }
                else {
                    this.list_control[this.current_list[user]['topic_id'][topic]]++;
                }
                if (this.list_control[this.current_list[user]['topic_id'][topic]] == Object.keys(this.current_list).length) {
                    this.list_control[this.current_list[user]['topic_id'][topic]] = true;
                }
            }
        }
    };
    AdminEditusersComponent.prototype.listControlSubmit = function () {
        console.log(this.list_control);
        var topic_list = this.list_control;
        var topic_list_original = this.list_control_copy;
        var cur_users = this.current_list;
        for (var el in topic_list) {
            if (JSON.stringify(topic_list_original[el]) !== JSON.stringify(topic_list[el])) {
                if (topic_list[el] === true) {
                    for (var user in cur_users) {
                        this.checkTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
                else if (topic_list[el] == 0) {
                    for (var user in cur_users) {
                        this.uncheckTopicForUser(cur_users[user]['profile_id'], Number(el));
                    }
                }
            }
        }
        this.closeModal();
    };
    // MISC FUNCTIONS ======================
    AdminEditusersComponent.prototype.checkState = function () {
        console.log(this);
    };
    AdminEditusersComponent.prototype.sortType = function (key) {
        console.log(key);
    };
    AdminEditusersComponent.prototype.searchKey = function () {
        var key = document.getElementById('searchInput')['value'];
        if (key.length < 0) {
            return;
        }
        if (this.current_list_target == 'all_users') {
            this.current_list = this.sorted_users[this.current_list_target];
        }
        else {
            this.current_list = this.sorted_users[this.current_list_target][this.current_list_key];
        }
        var activeList = [];
        var table_body_target = document.getElementById('table_body_target').querySelectorAll('tr');
        console.log("table_body_target => ", table_body_target);
        for (var el in table_body_target) {
            if (table_body_target[el]) {
                if (typeof (table_body_target[el]) == "object") {
                    var row_values = table_body_target[el].getElementsByClassName('tr_string');
                    var bool = false;
                    for (var value in row_values) {
                        if (typeof (row_values[value]) == "object" && row_values[value]['innerHTML'].toLowerCase().includes(key.toLowerCase())) {
                            bool = true;
                            table_body_target[el].classList.remove('hidden');
                            break;
                        }
                    }
                    if (!bool) {
                        table_body_target[el].classList.add('hidden');
                    }
                }
            }
        }
    };
    AdminEditusersComponent.prototype.goBack = function () {
        this.location.back();
    };
    AdminEditusersComponent.prototype.differencesFinder = function () {
        var res = {};
        for (var u in this.sorted_users.all_users) {
            if ((this.sorted_users.all_users[u]['admin_grader'] !== this.all_users_original[u]['admin_grader']) || this.sorted_users.all_users[u]['admin_editor'] !== this.all_users_original[u]['admin_editor'] || this.sorted_users.all_users[u]['admin_permissions'] !== this.all_users_original[u]['admin_permissions'] || this.sorted_users.all_users[u]['admin_owner'] !== this.all_users_original[u]['admin_owner']) {
                res[u] = this.sorted_users.all_users[u];
            }
        }
        this.list_changes = res;
    };
    AdminEditusersComponent.prototype.current_list_properties_setter = function (list) {
        this.current_list_properties = {
            'length': 0,
            'retake_topic': 0,
            'retake_topic_total_length': 0,
            'regrade_submission': 0,
            'regrade_submission_total_length': 0,
            'invalidate_submission': 0,
            'invalidate_submission_total_length': 0
        };
        for (var el in list) {
            // console.log(el, list[el]['retake_topic'] )
            if (list[el]['invalidate_submission']) {
                this.current_list_properties.invalidate_submission++;
            }
            if (list[el]['regrade_submission'] && !this.all_users_original[el]['regrade_submission']) {
                this.current_list_properties.regrade_submission++;
            }
            if (!this.all_users_original[el]['regrade_submission']) {
                this.current_list_properties.regrade_submission_total_length++;
            }
            if (list[el]['retake_topic'] && !this.all_users_original[el]['retake_topic']) {
                this.current_list_properties.retake_topic++;
            }
            if (!this.all_users_original[el]['retake_topic']) {
                this.current_list_properties.retake_topic_total_length++;
            }
        }
        this.current_list_properties.length = Object.keys(list).length;
        this.current_list_properties.invalidate_submission_total_length = Object.keys(list).length;
        console.log("NEW current_list_properties =>", this.current_list_properties);
    };
    AdminEditusersComponent.prototype.loadingMessage = function (count) {
        this.openModal('counter', count);
        this.loadingMessageLoop(0, count);
    };
    AdminEditusersComponent.prototype.loadingMessageLoop = function (start, end) {
        if (start < end) {
            this.modal_message.counter_start = start;
            var new_start_1 = start + 1;
            var that_1 = this;
            setTimeout(function () {
                return that_1.loadingMessageLoop(new_start_1, end);
            }, 100);
        }
        else {
            console.log("done!");
            return;
        }
    };
    AdminEditusersComponent.prototype.getClassForUserStatus = function (user_id) {
        if (this.current_list[user_id]['admin_owner']) {
            return 'alert-warning';
        }
        else if (this.current_list[user_id]['admin_permissions']) {
            return "alert-secondary";
        }
        else if (this.current_list[user_id]['admin_editor']) {
            return "alert-info";
        }
        else if (this.current_list[user_id]['admin_grader']) {
            return "alert-success";
        }
    };
    AdminEditusersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-editusers',
            template: __webpack_require__(/*! ./admin-editusers.component.html */ "./src/app/admin-editusers/admin-editusers.component.html"),
            styles: [__webpack_require__(/*! ./admin-editusers.component.css */ "./src/app/admin-editusers/admin-editusers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminEditusersComponent);
    return AdminEditusersComponent;
}());



/***/ }),

/***/ "./src/app/admin-grade/admin-grade.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-grade/admin-grade.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grading_page {\n    width: 100%;\n    padding: 50px 25px;\n}\n\n.grading_page-title {}\n\n.grading_page-release_button {\n    border: none;\n    border-radius: 0px;\n}\n\n.grading_page-body {\n    margin-top: 50px;\n}\n\n/* \n\nnew*/\n\n.inline-radio {\n    display: flex;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 1px solid #b6b6b6;\n}\n\n.inline-radio div {\n    position: relative;\n    flex: 1;\n}\n\n.inline-radio input {\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n}\n\n.inline-radio label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #b6b6b6;\n    width: 100%;\n    height: 100%;\n    background: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    pointer-events: none;\n    border-right: 1px solid #b6b6b6;\n    -webkit-transform: ease 0.5s;\n            transform: ease 0.5s;\n}\n\n.inline-radio div:last-child label {\n    border-right: 0;\n}\n\n.inline-radio input:checked+label {\n    background: dimgrey;\n    font-weight: 500;\n    color: #fff;\n}\n\n.admin-radio-hover {}\n\n.modal-width-full{\n    width: 100% !important;\n    max-width: 100% !important;\n    height: 100% !important;\n}\n\n.modal_message_box {\n    position: fixed;\n    z-index: 50;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(179, 182, 185, 0.5)\n}\n\n.modal_message {\n    max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n    height: 50vh !important;\n    overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n    /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n    width: 700px;\n    /* height: 100px; */\n}\n\n.modal-img{\n    display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\talign-content: flex-start;\n}\n\n.selected_grade{\n    box-shadow: 0px 2px 15px rgba(0,0,0,0.6)!important;\n    z-index: 1;\n    -webkit-animation: fadein 0.9s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n         animation: fadein 0.9s;\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tZ3JhZGUvYWRtaW4tZ3JhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUEscUJBQXFCOztBQUVyQjtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBR0E7O0lBRUk7O0FBRUo7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQiw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxhQUFhO0NBQ2hCLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBQ0E7SUFDSSxrREFBa0Q7SUFDbEQsVUFBVTtJQUNWLDhCQUE4QixFQUFFLG9DQUFvQyxFQUN2QyxpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGlCQUFpQjtTQUN6QyxzQkFBc0I7QUFDL0I7O0FBR0E7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBTWpCLG9DQUFvQzs7QUFDcEM7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtBQUN2Qjs7QUFFQSxzQkFBc0I7O0FBTXRCLGlCQUFpQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWdyYWRlL2FkbWluLWdyYWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JhZGluZ19wYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1MHB4IDI1cHg7XG59XG5cbi5ncmFkaW5nX3BhZ2UtdGl0bGUge31cblxuLmdyYWRpbmdfcGFnZS1yZWxlYXNlX2J1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmdyYWRpbmdfcGFnZS1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG5cbi8qIFxuXG5uZXcqL1xuXG4uaW5saW5lLXJhZGlvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNmI2YjY7XG59XG5cbi5pbmxpbmUtcmFkaW8gZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMTtcbn1cblxuLmlubGluZS1yYWRpbyBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5pbmxpbmUtcmFkaW8gbGFiZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogI2I2YjZiNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I2YjZiNjtcbiAgICB0cmFuc2Zvcm06IGVhc2UgMC41cztcbn1cblxuLmlubGluZS1yYWRpbyBkaXY6bGFzdC1jaGlsZCBsYWJlbCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4uaW5saW5lLXJhZGlvIGlucHV0OmNoZWNrZWQrbGFiZWwge1xuICAgIGJhY2tncm91bmQ6IGRpbWdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmFkbWluLXJhZGlvLWhvdmVyIHt9XG5cbi5tb2RhbC13aWR0aC1mdWxse1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubW9kYWxfbWVzc2FnZV9ib3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA1MDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE3OSwgMTgyLCAxODUsIDAuNSlcbn1cblxuLm1vZGFsX21lc3NhZ2Uge1xuICAgIG1heC1oZWlnaHQ6IDUydmg7XG59XG5cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXR7XG4gICAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tb2RhbC1lZGl0LXJlbW92ZS1idWNrZXQgdGR7XG4gICAgLyogcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50OyAqL1xufVxuLm1vZGFsLWRpYWxvZ3tcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbn1cbi5tb2RhbC1pbWd7XG4gICAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnNlbGVjdGVkX2dyYWRle1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTVweCByZ2JhKDAsMCwwLDAuNikhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBGaXJlZm94IDwgMTYgKi9cbiAgICAgLW1zLWFuaW1hdGlvbjogZmFkZWluIDAuOXM7IC8qIEludGVybmV0IEV4cGxvcmVyICovXG4gICAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuOXM7XG59XG5cblxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbkAtbXMta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBPcGVyYSA8IDEyLjEgKi9cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-grade/admin-grade.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-grade/admin-grade.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div *ngIf='quiz' class=\"grading_page element-animation-fadeIn\">\n        <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\"\n            (click)=\"closeModal_background_click($event.target)\" id=\"modal_message_box\">\n            <div class=\"modal-dialog modal-dialog-centered modal_message\" id=\"modal_main\" role=\"document\" [ngClass]=\"{\n                                'modal-width-full': modal_message.title == 'Image'\n                            }\">\n                <div class=\"modal-content shadow-lg\" *ngIf=\"modal_message.title == 'Image'\">\n                    <div>\n                        <div class=\"modal-header\">\n                            <h5 class=\"modal-title\" id=\"exampleModalCenteredLabel\">{{modal_message.title}}</h5>\n                            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\"\n                                aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                        </div>\n                        <div class=\"modal-body modal-img\" style=\"padding: 0px 1rem\">\n                            <img src=\"{{modal_message.body}}\" class=\"img-fluid\" alt=\"Responsive image\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class='grading_page-title'>\n            <h1 class=\"text-center \">Please grade provided submitted quiz <span class=\" text-muted\">{{quiz_name}}\n                    #{{submit_id}}</span>\n            </h1>\n            <div class=\"d-flex justify-content-center\">\n                <button *ngIf=\"release_status == 'no'\"\n                    class=\"btn btn-warning btn-lg  grading_page-release_button justify-content-center shadow\"\n                    (click)=\"release('ask')\">Release</button>\n                <button *ngIf=\"release_status == 'ask'\"\n                    class=\"btn btn-warning btn-lg  grading_page-release_button shadow\"\n                    (click)=\"release('yes')\">Yes</button>\n                <button *ngIf=\"release_status == 'ask'\" class=\"btn btn-info btn-lg  grading_page-release_button shadow\"\n                    (click)=\"release('no')\">No</button>\n            </div>\n        </div>\n        <div class='grading_page-body'>\n            <table class=\"table table-striped table-borderless shadow\">\n                <thead class=\"thead-dark\">\n                    <tr>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Question</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Image</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Expected Answer</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">User's Answer</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Points</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Comment</th>\n                        <th class=\"border-0 text-uppercase small font-weight-bold text-center\">Annotation</th>\n                    </tr>\n                </thead>\n                <tbody style=\"background: white\">\n                    <tr *ngFor='let q of quiz'>\n                        <td class=\"text-break\" style=\"padding: 0px 5px !important\">{{q.prompt}}</td>\n                        <td style=\"padding: 0px 5px !important\">\n                            <img *ngIf='q.base64' class='image_question img-fluid' (click)=\"imageZoom(q.base64)\"\n                                src={{q.base64}} />\n                        </td>\n                        <td class=\"text-break\" style=\"padding: 0px 5px !important\">{{q.expected_response}}</td>\n                        <td class=\"text-break\" style=\"padding: 0px 5px !important\">{{q.input_value}}</td>\n                        <td style=\"width: 15%\">\n                            <div class=\"inline-radio\">\n                                <div *ngFor=\"let num of [0.0, 0.2, 0.4, 0.6, 0.8, 1.0]\" [ngClass]=\"{\n                                            'selected_grade': grade_data[q.question_id] && grade_data[q.question_id]['point'] == num\n                                        }\">\n                                    <input type=\"radio\" (click)=\"scaleButton($event.target)\" value=\"{{num}}\"\n                                        name=\"{{q.question_id}}\"><label class=\"admin-radio-hover \">{{num * 100}}</label>\n                                </div>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-check\">\n                                <textarea class=\"ui-autocomplete-input\" id=\"{{q.question_id}}\"\n                                    (input)=\"adminCommentInput($event.target)\" value=\"\" rows=\"2\" maxlength=\"500\"\n                                    placeholder=\"Leave a comment\" autocomplete=\"off\" role=\"textbox\"\n                                    aria-autocomplete=\"list\" aria-haspopup=\"true\" style=\"width:100%;\"></textarea>\n                            </div>\n                        </td>\n                        <td>\n                            <p>{{q.training_module}} </p>\n                            <a *ngIf=\"q.training_url\" href=\"{{q.training_url}}\" target='_blank'>Link</a>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"d-flex justify-content-center\">\n                <button *ngIf=\"!grading_done_bool\" class='btn btn-lg btn-success grading_page-release_button '\n                    (click)=\"submitGrades()\" [disabled]=\"!grading_done_bool\">Please grade all answers.</button>\n                <button *ngIf=\"grading_done_bool\" class='btn btn-lg btn-success grading_page-release_button  shadow'\n                    (click)=\"submitGrades()\" [disabled]=\"!grading_done_bool\">Submit grades</button>\n            </div>\n        </div>\n    </div>\n    <div *ngIf='quiz == null' class=\" loading_box element-animation-fadeIn\" style=\" margin-top: 100px;height: 300px;\">\n        <h2>Loading...</h2>\n        <div class=\"spinner-border\" role=\"status\">\n            <span class=\"sr-only\"></span>\n        </div>\n    </div>\n\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-grade/admin-grade.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-grade/admin-grade.component.ts ***!
  \******************************************************/
/*! exports provided: AdminGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGradeComponent", function() { return AdminGradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminGradeComponent = /** @class */ (function () {
    function AdminGradeComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.grade_data = {};
        this.release_status = 'no';
        this.grading_done_bool = false;
        this.grades_submitted = false;
        this.points_total_num = 0;
        this.points_one_value = 0;
        this.points_map = {};
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': ''
        };
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            _this.currentEng = currentEng;
        });
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
            _this.target = params.get('target_id');
            _this.action = params.get('action');
            _this._ConnectorService.user.subscribe(function (user) {
                _this.currentUser = user;
                if (user && (!user.admin_grader && !user.admin_owner)) {
                    _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
                }
                if (user && user.profile_id) {
                    if (_this.action == 'grade') {
                        _this._ConnectorService.getQuizForGrading(_this.currentUser.email, _this.target).then(function (res) {
                            if (res['status'] == 'success') {
                                _this.quiz = _this.filterQuiz(res['quiz']);
                                console.log("RESPONSE =>", res);
                                _this.quiz_name = unescape(res['quiz_name']['quiz_name']);
                                _this.submit_id = res['submit_id'];
                                for (var el in res['quiz']) {
                                    console.log(el);
                                    if (res['quiz'][el]['base64'] && res['quiz'][el]['base64'].slice(0, 5) != 'data:') {
                                        res['quiz'][el]['base64'] = "data:image/png;base64," + res['quiz'][el]['base64'];
                                    }
                                    else if (res['quiz'][el]['base64'] && res['quiz'][el]['base64'].split(',')[1].slice(0, 5) == "data:") {
                                        console.log("hey");
                                        res['quiz'][el]['base64'] = res['quiz'][el]['base64'].split(',')[1] + "," + res['quiz'][el]['base64'].split(',')[2];
                                    }
                                }
                                if (!_this.submit_id) {
                                    console.log("no submit-Id!");
                                    _this.submit_id = res['quiz'][0]['submit_id'][0];
                                }
                                else {
                                    console.log("SUBMIT ID =>", _this.submit_id);
                                }
                                // console.log("QUIZ =>", this.quiz)
                            }
                            else {
                                console.log("error!");
                                console.log(res);
                            }
                        }).catch(function (error) {
                            // console.log(error)
                        });
                    }
                    else if (_this.action == 'continue') {
                        // console.log("CONTINUE!!!", this.target)
                        _this._ConnectorService.continueGradeQuiz(_this.currentUser.email, _this.target).then(function (res) {
                            // console.log("res =>", res)
                            if (res['status'] == 'success') {
                                _this.quiz = _this.filterQuiz(res['quiz']);
                                console.log("RESPONSE =>", res);
                                _this.quiz_name = unescape(res['quiz_name']['quiz_name']);
                                _this.submit_id = _this.target;
                                for (var el in res['quiz']) {
                                    // console.log(el)
                                    if (res['quiz'][el]['base64'] && res['quiz'][el]['base64'].slice(0, 5) != 'data:') {
                                        res['quiz'][el]['base64'] = "data:image/png;base64," + res['quiz'][el]['base64'];
                                    }
                                    else if (res['quiz'][el]['base64'] && res['quiz'][el]['base64'].split(',')[1].slice(0, 5) == "data:") {
                                        // console.log("hey")
                                        res['quiz'][el]['base64'] = res['quiz'][el]['base64'].split(',')[1] + "," + res['quiz'][el]['base64'].split(',')[2];
                                    }
                                }
                                // console.log("QUIZ =>", this.quiz)
                            }
                            else {
                                // console.log("error!")
                                // console.log(res)
                            }
                        }).catch(function (err) {
                            // console.log("ERROR =>", err)
                        });
                    }
                }
            });
        });
    }
    AdminGradeComponent.prototype.ngOnInit = function () {
    };
    AdminGradeComponent.prototype.filterQuiz = function (quiz) {
        var new_result = [];
        for (var el in quiz) {
            if (!this.topic_id) {
                this.topic_id = quiz[el]['quiz_id'];
            }
            this.points_map[quiz[el]['question_id']] = quiz[el]['point_value'];
            this.points_total_num += quiz[el]['point_value'];
            if (quiz[el]['input_value'] != null) {
                if (quiz[el]['base64']) {
                    var new_base64 = "data:image/png;base64," + quiz[el]['base64'];
                    quiz[el]['base64'] = new_base64;
                }
                new_result.push(quiz[el]);
            }
        }
        this.points_one_value = 100 / this.points_total_num;
        console.log('===============================');
        console.log("this.points_one_value =>", this.points_one_value, "; this.points_total_num =>", this.points_total_num);
        console.log("this.points_map =>", this.points_map);
        console.log('===============================');
        return new_result;
    };
    AdminGradeComponent.prototype.scaleButton = function (target) {
        console.log("hey", target.name, target.value);
        if (!this.grade_data[target.name]) {
            this.grade_data[target.name] = {
                'grader_comment': ''
            };
        }
        this.grade_data[target.name]['point'] = target.value;
        if (Object.keys(this.grade_data).length == Object.keys(this.quiz).length) {
            // console.log("ALL DONE!")
            this.grading_done_bool = true;
            // console.log(this.grade_data)
        }
        console.log(this.grade_data);
    };
    AdminGradeComponent.prototype.adminCommentInput = function (target) {
        if (!this.grade_data[target.id]) {
            this.grade_data[target.id] = {};
        }
        this.grade_data[target.id]['grader_comment'] = target.value;
    };
    AdminGradeComponent.prototype.submitGrades = function () {
        var _this = this;
        // console.log(this.grade_data)
        var obj = {
            "submission_id": this.submit_id
        };
        // console.log("this.grade_data[el]['point'] * this.points_map[el] =>", this.grade_data[el]['point'] * this.points_map[el])
        for (var el in this.grade_data) {
            obj[el] = [this.grade_data[el]['point'], this.grade_data[el]['grader_comment'], this.grade_data[el]['point'] * this.points_map[el]];
        }
        this._ConnectorService.submitGrades(obj, this.currentUser.email).then(function (res) {
            console.log("RES =>", res);
            if (res['status'] == "success") {
                var obj_1 = {
                    'success': true,
                    'message': ''
                };
                obj_1.message = "Thank you for submitting grades for quiz " + unescape(_this.quiz_name) + " #" + _this.submit_id + " ";
                _this._ConnectorService.setMainInfo({ 'message': obj_1 });
                _this._r.navigateByUrl(_this.currentEng_id + "/adminhomegrade");
            }
            else {
                var obj_2 = {
                    'success': false,
                    'message': res['message']
                };
                _this._r.navigateByUrl(_this.currentEng_id + "/adminhomegrade");
                // alert(res['message'])
            }
        }).catch(function (err) {
            console.log(err);
            alert(err);
        });
        /*
        obj {
          '404': [ '1', '1st question' ],
          '405': [ '0.8', 'second question' ],
          submission_id: '1825'
        }
        */
    };
    AdminGradeComponent.prototype.release = function (status) {
        var _this = this;
        this.release_status = status;
        if (status == 'yes') {
            if (!this.submit_id) {
                alert("Something went wrong. Please reload the page or navigate back to the grading portal.");
            }
            this._ConnectorService.releaseSubmittedQuiz(this.submit_id, this.topic_id, this.currentUser.email).then(function (data) {
                if (data['status'] == 'failed') {
                    console.log("data after release =>", data);
                }
                else {
                    console.log("releaseSubmittedQuiz: data =>", data);
                    _this._r.navigateByUrl(_this.currentEng_id + "/adminhomegrade");
                }
            }).catch(function (err) {
                // console.log("error after release =>", err)
            });
        }
        // console.log(status)
    };
    // modal listeners
    AdminGradeComponent.prototype.imageZoom = function (q_id) {
        this.modal_message.title = "Image";
        this.modal_message.body = q_id;
        this.modal_mesage_bool = true;
        document.getElementById('body').style.background = "silver";
    };
    AdminGradeComponent.prototype.closeModal = function () {
        document.getElementById('body').style.background = "none";
        this.modal_mesage_bool = false;
    };
    AdminGradeComponent.prototype.closeModal_background_click = function (target) {
        console.log(target.id);
        if (this.modal_message.title == "Image" && target.id == "modal_message_box") {
            this.closeModal();
        }
    };
    AdminGradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-grade',
            template: __webpack_require__(/*! ./admin-grade.component.html */ "./src/app/admin-grade/admin-grade.component.html"),
            styles: [__webpack_require__(/*! ./admin-grade.component.css */ "./src/app/admin-grade/admin-grade.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGradeComponent);
    return AdminGradeComponent;
}());



/***/ }),

/***/ "./src/app/admin-home-edit/admin-home-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-home-edit/admin-home-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grade-home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.grade-home-category {\n    min-width: 250px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    box-shadow: 5px 10px 18px #888888;\n}\n\n.grade-home-category-title {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element a {\n    width: 100%\n}\n\n.grade-home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n.home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.home-category {\n    min-width: 250px;\n    width: 250px;\n    max-width: 280px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n}\n\n.home-category:hover {\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 5px 10px 18px #888888;\n}\n\n.home-category-element .btn {\n    white-space: normal !important;\n    word-wrap: break-word;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.home-category-title {\n    max-width: 250px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    font-weight: normal;\n}\n\n.home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element-inner-box {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element a {\n    width: 100%\n}\n\n.home-category-element-inner-box a {\n    width: 50%;\n    border-radius: 0px;\n}\n\n.home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n/* .home-category-element-hover {\n    background: linear-gradient(to right, #fbfbfb, #fbfbfb);\n    transition: all 0.3s\n}\n\n.home-category-element-hover:hover {\n    background: linear-gradient(to right, #fbfbfb, #c6c6c6)\n} */\n\n.home-category-element-hover {\n    position: relative;\n    background-image: linear-gradient( to right, #fbfbfb, #fbfbfb);\n    z-index: 1;\n}\n\n.home-category-element-hover::before {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient( to right, #fbfbfb, #c6c6c6);\n    z-index: -1;\n    transition: opacity 0.5s linear;\n    opacity: 0;\n}\n\n.home-category-element-hover:hover::before {\n    opacity: 1;\n}\n\n.cards-main{\n    margin:10px auto;\n    width: 80%;\n    max-width: 1266px;\n}\n\n.card-category{\n    border-radius: 0px;\n    margin: 25px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n    margin-bottom: 30px !important;\n}\n\n.card-category:hover{\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 5px 10px 18px #888888;\n}\n\n.card-body{\n    padding: 0px 0px;\n}\n\n.card-header{\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taG9tZS1lZGl0L2FkbWluLWhvbWUtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFHQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCw4REFBOEQ7SUFDOUQsV0FBVztJQUNYLCtCQUErQjtJQUMvQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4taG9tZS1lZGl0L2FkbWluLWhvbWUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRlLWhvbWUtbWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnkge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xufVxuXG4uZ3JhZGUtaG9tZS1jYXRlZ29yeS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmFkZS1ob21lLWNhdGVnb3J5LWVsZW1lbnQgYSB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ob21lLW1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5IHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xuICAgIGNvbG9yOiAjNzE2YzZjO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjMzUzNDM0MGY7XG59XG5cbi5ob21lLWNhdGVnb3J5OmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzg4ODg4ODtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCAuYnRuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ob21lLWNhdGVnb3J5LXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaW5uZXItYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50IGEge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaW5uZXItYm94IGEge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuXG4vKiAuaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYmZiZmIsICNmYmZiZmIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZiZmJmYiwgI2M2YzZjNilcbn0gKi9cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsICNmYmZiZmIsICNmYmZiZmIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXI6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsICNmYmZiZmIsICNjNmM2YzYpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3Zlcjpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZHMtbWFpbntcbiAgICBtYXJnaW46MTBweCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiAxMjY2cHg7XG59XG5cbi5jYXJkLWNhdGVnb3J5e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDI1cHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgdHJhbnNpdGlvbjogMC44cztcbiAgICBjb2xvcjogIzcxNmM2YztcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggIzM1MzQzNDBmO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWNhdGVnb3J5OmhvdmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xufVxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xufVxuLmNhcmQtaGVhZGVye1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-home-edit/admin-home-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-home-edit/admin-home-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div class=\"column_list element-animation-fadeIn\" id=\"body_fadeOut\">\n        <div *ngIf='popup_message' class=\"d-flex justify-content-center popup_message_slideIn\">\n            <div *ngIf='popup_message.success' class=\"alert alert-success\" role=\"alert\">\n                <strong>Well done!</strong> {{popup_message.message}}\n            </div>\n            <div *ngIf='!popup_message.success' class=\"alert alert-danger\" role=\"alert\">\n                <h4 class=\"alert-heading\">Oops! Please contact admin or developers!</h4>\n                {{popup_message.message | json}}\n            </div>\n        </div>\n        <div\n            style=\"display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: stretch; align-content: center; height: 10%;\">\n            <h1 style=\"margin: 0px auto\">Choose a category and topic to edit</h1>\n        </div>\n        <div class=\"card-columns cards-main\">\n            <div class=\"card card-category\" *ngFor=\"let c of quizzes | keyvalue \">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>{{c.key}}</h3>\n                </div>\n                <div *ngFor=\"let t of c.value | keyvalue \" class=\"home-category-element \">\n                    <a [routerLink]=\"[links[t.value.topic_id][ 'topic_link']] \">\n                        <button type=\"button \" class=\"btn btn-lg\" [ngClass]=\"{\n                                            'btn-outline-secondary': t.value.question_count > 5 && !t.value.topic_soft_delete, \n                                            'btn-outline-warning': t.value.question_count <= 5 && !t.value.topic_soft_delete, \n                                            'btn-outline-danger': t.value.topic_soft_delete\n                                        }\">\n                            {{t.value.topic}} ({{t.value.question_count}})</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row  \" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/admin-home-edit/admin-home-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-home-edit/admin-home-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminHomeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeEditComponent", function() { return AdminHomeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminHomeEditComponent = /** @class */ (function () {
    function AdminHomeEditComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.quizzes = null; // all submitted (not graded yet) quizzes
        this.quizzes_counter = {};
        this.currentEng_id = null; // current engagement id
        this.currentUser = null;
        this.your_list = null; // list of your current grading quizzes
        this.your_list_length = 0;
        this.links = {};
        this.popup_message = null;
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.pop_up_message.subscribe(function (message) {
            _this.popup_message = message;
            if (message) {
                _this._ConnectorService.setMainInfo({ 'message': null });
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
        this._ConnectorService.user.subscribe(function (user) {
            _this.currentUser = user;
            if (user && (!user.admin_grader && !user.admin_owner)) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
            if (user && user.profile_id) {
                _this._ConnectorService.getQuizzesForEdit(_this.currentUser['email'], _this.currentEng_id).then(function (res) {
                    // console.log("res => ", res)
                    if (res['status'] == 'success') {
                        _this._ConnectorService.setMainInfo({ "quizzes": res });
                        for (var c in res) {
                            for (var t in res[c]) {
                                for (var el in res[c][t]) {
                                    if (!_this.links[res[c][t][el]['topic_id']]) {
                                        _this.links[res[c][t][el]['topic_id']] = {
                                            'topic_link': '',
                                            'topic_id': null
                                        };
                                    }
                                    _this.links[res[c][t][el]['topic_id']]['topic_link'] = "/" + _this.currentEng_id + "/AdminEditquiz/" + res[c][t][el]['topic_id'];
                                    _this.links[res[c][t][el]['topic_id']]['topic_id'] = res[c][t][el]['topic_id'];
                                }
                            }
                        }
                        _this.quizzes = res['categories'];
                        console.log("RESPONSE =>", res);
                        console.log("LINKS =<", _this.links);
                    }
                    else if (res['status'] == 'fail') {
                        console.log(res);
                        alert(res['message']);
                    }
                });
            }
        });
    }
    AdminHomeEditComponent.prototype.ngOnInit = function () {
    };
    AdminHomeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home-edit',
            template: __webpack_require__(/*! ./admin-home-edit.component.html */ "./src/app/admin-home-edit/admin-home-edit.component.html"),
            styles: [__webpack_require__(/*! ./admin-home-edit.component.css */ "./src/app/admin-home-edit/admin-home-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminHomeEditComponent);
    return AdminHomeEditComponent;
}());



/***/ }),

/***/ "./src/app/admin-home-grade/admin-home-grade.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin-home-grade/admin-home-grade.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grade-home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.grade-home-category {\n    min-width: 250px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    box-shadow: 5px 10px 18px #888888;\n}\n\n.grade-home-category-title {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element a {\n    width: 100%\n}\n\n.grade-home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n.home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.home-category {\n    min-width: 250px;\n    width: 250px;\n    max-width: 280px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n}\n\n.home-category:hover {\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2)\n}\n\n.home-category-element .btn {\n    white-space: normal !important;\n    word-wrap: break-word;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.home-category-title {\n    max-width: 250px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    font-weight: normal;\n}\n\n.home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element-inner-box {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element a {\n    width: 100%\n}\n\n.home-category-element-inner-box a {\n    width: 50%;\n    border-radius: 0px;\n}\n\n.home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n/* .home-category-element-hover {\n    background: linear-gradient(to right, #fbfbfb, #fbfbfb);\n    transition: all 0.3s\n}\n\n.home-category-element-hover:hover {\n    background: linear-gradient(to right, #fbfbfb, #c6c6c6)\n} */\n\n.home-category-element-hover {\n    position: relative;\n    background-image: linear-gradient( to right, #fbfbfb, #fbfbfb);\n    z-index: 1;\n}\n\n.home-category-element-hover::before {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient( to right, #fbfbfb, #c6c6c6);\n    z-index: -1;\n    transition: opacity 0.5s linear;\n    opacity: 0;\n}\n\n.home-category-element-hover:hover::before {\n    opacity: 1;\n}\n\n.cards-main{\n    margin:10px auto;\n    width: 80%;\n    max-width: 1266px;\n}\n\n.card-category{\n    border: none;\n    border-radius: 0px;\n    margin: 25px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n    margin-bottom: 30px !important;\n}\n\n.card-category:hover{\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2);\n}\n\n.card-body{\n    padding: 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taG9tZS1ncmFkZS9hZG1pbi1ob21lLWdyYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFHQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCw4REFBOEQ7SUFDOUQsV0FBVztJQUNYLCtCQUErQjtJQUMvQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDJDQUEyQztBQUMvQzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvbWUtZ3JhZGUvYWRtaW4taG9tZS1ncmFkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRlLWhvbWUtbWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnkge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xufVxuXG4uZ3JhZGUtaG9tZS1jYXRlZ29yeS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmFkZS1ob21lLWNhdGVnb3J5LWVsZW1lbnQgYSB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ob21lLW1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5IHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xuICAgIGNvbG9yOiAjNzE2YzZjO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjMzUzNDM0MGY7XG59XG5cbi5ob21lLWNhdGVnb3J5OmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTVweCByZ2JhKDQsIDAsIDAsIDAuMilcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCAuYnRuIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5ob21lLWNhdGVnb3J5LXRpdGxlIHtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaW5uZXItYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50IGEge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaW5uZXItYm94IGEge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuXG4vKiAuaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYmZiZmIsICNmYmZiZmIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZiZmJmYiwgI2M2YzZjNilcbn0gKi9cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3ZlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsICNmYmZiZmIsICNmYmZiZmIpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXI6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggdG8gcmlnaHQsICNmYmZiZmIsICNjNmM2YzYpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3Zlcjpob3Zlcjo6YmVmb3JlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZHMtbWFpbntcbiAgICBtYXJnaW46MTBweCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiAxMjY2cHg7XG59XG5cbi5jYXJkLWNhdGVnb3J5e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiAyNXB4IDE1cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgIHRyYW5zaXRpb246IDAuOHM7XG4gICAgY29sb3I6ICM3MTZjNmM7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4ICMzNTM0MzQwZjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1jYXRlZ29yeTpob3ZlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTVweCByZ2JhKDQsIDAsIDAsIDAuMik7XG59XG4uY2FyZC1ib2R5e1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/admin-home-grade/admin-home-grade.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin-home-grade/admin-home-grade.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div class=\"column_list element-animation-fadeIn\" id=\"body_fadeOut\">\n        <div *ngIf='popup_message' class=\"d-flex justify-content-center popup_message_slideIn\">\n            <div *ngIf='popup_message.success' class=\"alert alert-success\" role=\"alert\">\n                <strong>Well done!</strong> {{popup_message.message}}\n            </div>\n            <div *ngIf='!popup_message.success' class=\"alert alert-danger\" role=\"alert\">\n                <h4 class=\"alert-heading\">Oops! Please contact admin or developers!</h4>\n                {{popup_message.message | json}}\n            </div>\n        </div>\n        <div\n            style=\"display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: center; align-items: stretch; align-content: center; height: 10%;\">\n            <h1 style=\"margin: 0px auto\">Choose a category and topic to grade</h1>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n            <button class=\"btn btn-warning  button_hover_expand\" *ngIf=\"your_list_length>1\" id=\"release_all\"\n                style=\"border-radius: 0px; width: 250px\" (click)=\"releaseAllSubmittedQuiz()\">Release all\n                {{your_list_length}} quizzes</button>\n            <button class=\"btn btn-warning  button_hover_expand\" *ngIf=\"your_list_length==1\" id=\"release_all\"\n                style=\"border-radius: 0px; width: 250px\" (click)=\"releaseOneSubmittedQuiz()\">Release the current\n                quiz</button>\n            <button class=\" btn btn-warning  button_hover_expand \" *ngIf=\"your_list_length<1 \" id=\"release_all \"\n                style=\"border-radius: 0px; width: 250px \" disabled>No current quizzes</button>\n        </div>\n        <div class=\"grade-home-main \" id=\"grade-home-main \" *ngIf=\"categories_length<=1\">\n            <div *ngFor=\"let c of quizzes | keyvalue \" class=\"home-category\">\n                <div class=\"card-header home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                    <h3>{{c.key}}</h3>\n                </div>\n                <div *ngFor=\"let t of c.value | keyvalue \" class=\"home-category-element \">\n                    <div *ngIf=\"your_list[links[t.key][ 'topic_id']] \" style=\"width:100%\" class=\"alert-warning \"\n                        align='center'>\n                        <span> <span unselectable=\"on \" class=\"font-weight-bolder \"> {{t.key}}</span> <span\n                                class=\"text-black-10  \">\n                                #{{your_list[links[t.key]['topic_id']]['submit_id']}}</span></span>\n                        <div class=\"home-category-element-inner-box\">\n                            <button class=\"btn btn-outline-info btn-sm \" style=\"border: none \"\n                                [routerLink]=\"[your_list[links[t.key][ 'topic_id']][ 'continue_link']] \">Continue</button>\n                            <button class=\"btn btn-outline-secondary btn-sm \" style=\"border: none \"\n                                (click)=\"releaseQuiz(your_list[links[t.key][ 'topic_id']][ 'submit_id'], links[t.key][ 'topic_id']) \">Release</button>\n                        </div>\n                    </div>\n                    <a *ngIf=\"your_list[links[t.key][ 'topic_id']]==n ull \"\n                        [routerLink]=\"[links[t.key][ 'topic_link']] \">\n                        <button type=\"button \" class=\"btn btn-outline-secondary\">{{t.key}}\n                            ({{  quizzes_counter[links[t.key]['topic_id']] }})\n                            {{your_list[links[t.key]['topic_id']]}}</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-columns cards-main\" *ngIf=\"categories_length>1\">\n            <div class=\"card card-category\" *ngFor=\"let c of quizzes | keyvalue \">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>{{c.key}}</h3>\n                </div>\n                <div *ngFor=\"let t of c.value | keyvalue \" class=\"home-category-element \">\n                    <div *ngIf=\"your_list[links[t.key][ 'topic_id']] \" class=\"alert-warning \" style=\"width:100%\"\n                        align='center'>\n                        <span> <span unselectable=\"on\" class=\"font-weight-bolder \"> {{t.key}}</span> <span\n                                class=\"text-black-10  \">\n                                #{{your_list[links[t.key]['topic_id']]['submit_id']}}</span></span>\n                        <div class=\"home-category-element-inner-box \">\n                            <button class=\"btn btn-outline-info btn-sm \" style=\"border: none \"\n                                [routerLink]=\"[your_list[links[t.key][ 'topic_id']][ 'continue_link']] \">Continue</button>\n                            <button class=\"btn btn-outline-secondary btn-sm \" style=\"border: none \"\n                                (click)=\"releaseQuiz(your_list[links[t.key][ 'topic_id']][ 'submit_id'], links[t.key][ 'topic_id']) \">Release</button>\n                        </div>\n                    </div>\n                    <a *ngIf=\"your_list[links[t.key][ 'topic_id']]==n ull \"\n                        [routerLink]=\"[links[t.key][ 'topic_link']] \">\n                        <button type=\"button \" class=\"btn btn-lg btn-outline-secondary\">{{t.key}}\n                            ({{  quizzes_counter[links[t.key]['topic_id']] }})\n                            {{your_list[links[t.key]['topic_id']]}}</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row \" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-home-grade/admin-home-grade.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin-home-grade/admin-home-grade.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminHomeGradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeGradeComponent", function() { return AdminHomeGradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminHomeGradeComponent = /** @class */ (function () {
    function AdminHomeGradeComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.quizzes = null; // all submitted (not graded yet) quizzes
        this.categories_length = 0;
        this.quizzes_counter = {};
        this.currentEng_id = null; // current engagement id
        this.currentUser = null;
        this.your_list = null; // list of your current grading quizzes
        this.your_list_length = 0;
        this.links = {};
        this.popup_message = null;
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.pop_up_message.subscribe(function (message) {
            _this.popup_message = message;
            if (message) {
                _this._ConnectorService.setMainInfo({ 'message': null });
            }
        });
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
        this._ConnectorService.user.subscribe(function (user) {
            _this.currentUser = user;
            if (user && (!user.admin_grader && !user.admin_owner)) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
            if (user && user.profile_id) {
                _this._ConnectorService.getCompletedQuizzes(_this.currentUser['profile_id'], _this.currentEng_id).then(function (res) {
                    // console.log("res => ", res)
                    _this._ConnectorService.setMainInfo({ "quizzes": res });
                    for (var c in res) {
                        for (var t in res[c]) {
                            for (var el in res[c][t]) {
                                if (!_this.links[res[c][t][el]['topic']]) {
                                    _this.links[res[c][t][el]['topic']] = {
                                        'topic_link': '',
                                        'submit_list': {},
                                        'topic_id': null
                                    };
                                }
                                _this.links[res[c][t][el]['topic']]['topic_link'] = "/" + _this.currentEng_id + "/grade/" + res[c][t][el]['topic_id'] + "/grade";
                                _this.links[res[c][t][el]['topic']]['submit_list'][res[c][t][el]['submit_id']] = true;
                                _this.links[res[c][t][el]['topic']]['topic_id'] = res[c][t][el]['topic_id'];
                            }
                        }
                    }
                    _this.quizzes = res;
                    _this.categories_length = Object.keys(res).length;
                    _this.your_list = _this.getCurrentGradingQuiz(res);
                    _this.your_list_length = Object.keys(_this.your_list).length;
                });
            }
        });
    }
    AdminHomeGradeComponent.prototype.ngOnInit = function () {
    };
    AdminHomeGradeComponent.prototype.getCurrentGradingQuiz = function (list) {
        var res = {};
        for (var c in list) {
            for (var t in list[c]) {
                for (var single_t in list[c][t]) {
                    var current_submit = list[c][t][single_t];
                    if (this.quizzes_counter[current_submit['topic_id']]) {
                        this.quizzes_counter[current_submit['topic_id']]++;
                    }
                    else {
                        this.quizzes_counter[current_submit['topic_id']] = 1;
                    }
                    if (!current_submit['graded'] && current_submit['graded_by'] == this.currentUser.profile_id) {
                        list[c][t][single_t]['continue_link'] = "/" + this.currentEng_id + "/grade/" + list[c][t][single_t]['submit_id'] + "/continue";
                        list[c][t][single_t]['release_link'] = "/" + this.currentEng_id + "/grade/" + list[c][t][single_t]['submit_id'] + "/release";
                        res[list[c][t][single_t]['topic_id']] = list[c][t][single_t];
                    }
                }
            }
        }
        // console.log("getCurrentGradingQuiz  return =>", res)
        // console.log("quizzes_counter =>", this.quizzes_counter)
        return res;
    };
    AdminHomeGradeComponent.prototype.releaseQuiz = function (submit_id, topic_id) {
        var _this = this;
        this._ConnectorService.releaseSubmittedQuiz(submit_id, topic_id, this.currentUser.email).then(function (res) {
            // console.log("RES =>",res)
            delete _this.your_list[topic_id];
            _this.your_list_length--;
        }).catch(function (err) {
            alert(err);
            // console.log("ERROR =>", err)
        });
    };
    AdminHomeGradeComponent.prototype.releaseAllSubmittedQuiz = function () {
        var _this = this;
        var ids = [];
        for (var el in this.your_list) {
            ids.push(this.your_list[el]['submit_id']);
        }
        this._ConnectorService.releaseAllSubmittedQuiz(ids, this.currentUser.email).then(function (res) {
            // console.log("RES =>",res)
            if (res['status'] == "success") {
                _this.your_list = {};
                _this.your_list_length = 0;
            }
            else {
                // console.log(res['message'])
                alert("Error. Please contact developers." + res['message']);
            }
        }).catch(function (err) {
            alert(err);
            // console.log("ERROR =>", err)
        });
    };
    AdminHomeGradeComponent.prototype.releaseOneSubmittedQuiz = function () {
        if (Object.keys(this.your_list).length > 1) {
            alert("Something is wrong.");
            return;
        }
        for (var i in this.your_list) {
            this.releaseQuiz(this.your_list[i]['submit_id'], this.your_list[i]['quiz_id']);
        }
    };
    AdminHomeGradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home-grade',
            template: __webpack_require__(/*! ./admin-home-grade.component.html */ "./src/app/admin-home-grade/admin-home-grade.component.html"),
            styles: [__webpack_require__(/*! ./admin-home-grade.component.css */ "./src/app/admin-home-grade/admin-home-grade.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminHomeGradeComponent);
    return AdminHomeGradeComponent;
}());



/***/ }),

/***/ "./src/app/admin-home/admin-home.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grade-home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.grade-home-category {\n    min-width: 250px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    box-shadow: 5px 10px 18px #888888;\n}\n\n.grade-home-category-title {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.grade-home-category-element a {\n    width: 100%\n}\n\n.grade-home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n.home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.home-category {\n    min-width: 250px;\n    width: 250px;\n    max-width: 280px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    background: rgba(255, 255, 255, 0.3);\n    transition: 0.5s;\n    color: #716c6c;\n}\n\n.home-category:hover {\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2)\n}\n\n.home-category-element .btn {\n    white-space: normal !important;\n    word-wrap: break-word;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.home-category-title {\n    max-width: 250px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    font-weight: normal;\n}\n\n.home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element-inner-box {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element a {\n    width: 100%\n}\n\n.home-category-element-inner-box a {\n    width: 50%;\n    border-radius: 0px;\n}\n\n.home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n/* .home-category-element-hover {\n    background: linear-gradient(to right, #fbfbfb, #fbfbfb);\n    transition: all 0.3s\n}\n\n.home-category-element-hover:hover {\n    background: linear-gradient(to right, #fbfbfb, #c6c6c6)\n} */\n\n.home-category-element-hover {\n    position: relative;\n    background-image: linear-gradient( to right, #fbfbfb, #fbfbfb);\n    z-index: 1;\n}\n\n.home-category-element-hover::before {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient( to right, #fbfbfb, #c6c6c6);\n    z-index: -1;\n    transition: opacity 0.5s linear;\n    opacity: 0;\n}\n\n.home-category-element-hover:hover::before {\n    opacity: 1;\n}\n\n.cards-main{\n    margin:10px auto;\n    width: 80%;\n    max-width: 1266px;\n}\n\n.card-category{\n    border: none;\n    border-radius: 0px;\n    margin: 25px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n    margin-bottom: 30px !important;\n}\n\n.card-category:hover{\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2);\n}\n\n.card-body{\n    padding: 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFHQTs7Ozs7OztHQU9HOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLDhEQUE4RDtJQUM5RCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCw4REFBOEQ7SUFDOUQsV0FBVztJQUNYLCtCQUErQjtJQUMvQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBS0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLDJDQUEyQztBQUMvQzs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYWRlLWhvbWUtbWFpbiB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnkge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxNXB4IDE1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjODg4ODg4O1xufVxuXG4uZ3JhZGUtaG9tZS1jYXRlZ29yeS10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmFkZS1ob21lLWNhdGVnb3J5LWVsZW1lbnQgYSB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLmdyYWRlLWhvbWUtY2F0ZWdvcnktZWxlbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ob21lLW1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5IHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGNvbG9yOiAjNzE2YzZjO1xufVxuXG4uaG9tZS1jYXRlZ29yeTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDE1cHggcmdiYSg0LCAwLCAwLCAwLjIpXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQgLmJ0biB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaG9tZS1jYXRlZ29yeS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWlubmVyLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCBhIHtcbiAgICB3aWR0aDogMTAwJVxufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWlubmVyLWJveCBhIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cblxuLyogLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmJmYmZiLCAjZmJmYmZiKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zc1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmYmZiZmIsICNjNmM2YzYpXG59ICovXG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCAjZmJmYmZiLCAjZmJmYmZiKTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyOjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHRvIHJpZ2h0LCAjZmJmYmZiLCAjYzZjNmM2KTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXI6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG5cblxuLmNhcmRzLW1haW57XG4gICAgbWFyZ2luOjEwcHggYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogMTI2NnB4O1xufVxuXG4uY2FyZC1jYXRlZ29yeXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1hcmdpbjogMjVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICB0cmFuc2l0aW9uOiAwLjhzO1xuICAgIGNvbG9yOiAjNzE2YzZjO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjMzUzNDM0MGY7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xufVxuLmNhcmQtY2F0ZWdvcnk6aG92ZXJ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDE1cHggcmdiYSg0LCAwLCAwLCAwLjIpO1xufVxuLmNhcmQtYm9keXtcbiAgICBwYWRkaW5nOiAwcHggMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div *ngIf='currentUser && currentUser.admin' class=\"quiz-selection element-animation-fadeIn\" align=\"center\"\n        id=\"body_fadeOut\">\n        <div style=\"height: 10%; justify-content: center; display: flex; flex-direction: column;flex-wrap: wrap;\">\n            <h1 class=\"text-center\">Welcome to the admin page, {{currentUser.first_name}} {{currentUser.last_name}}</h1>\n        </div>\n        <div class=\"home-main\" id=\"homeCategories\" *ngIf=\"false\">\n            <div class=\"home-category\">\n                <div class=\"home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                    <h2>Grader</h2>\n                </div>\n                <div class=\"home-category-element\">\n                    <a class=\"\" [routerLink]=\"['/', currentEng_id, 'adminhomegrade']\">\n                        <!-- btn-outline-success-hover-side-shadow -->\n                        <button *ngIf=\"gradings_counter>0\" class=\"btn btn-outline-success  btn-lg \"\n                            [disabled]=\"!currentUser.admin_grader && !currentUser.admin_owner\" type=\"button\">Grade a\n                            Quiz\n                            ({{gradings_counter}})</button>\n                        <button *ngIf=\"!gradings_counter || gradings_counter<1\" class=\"btn btn-outline-success btn-lg \"\n                            disabled type=\"button\">No quizzes to grade</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"home-category\">\n                <div class=\"home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                    <h2>Editor</h2>\n                </div>\n                <div class=\"home-category-element\">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'admincreatequiz']\">\n                        <!-- btn-outline-info-hover-side-shadow -->\n                        <button class=\"btn btn-outline-info btn-lg \" type=\"button\"\n                            [disabled]=\"!currentUser.admin_editor && !currentUser.admin_owner\">Create a Quiz</button>\n                    </a>\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'adminhomeedit']\">\n                        <button class=\"btn btn-lg btn-outline-info\" type=\"button\"\n                            [disabled]=\"!currentUser.admin_editor && !currentUser.admin_owner\">Edit a Quiz</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"home-category\">\n                <div class=\"home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                    <h2>Quiz Controls</h2>\n                </div>\n                <div class=\"home-category-element\">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditpermissions']\">\n                        <!-- btn-outline-secondary-hover-side-shadow -->\n                        <button class=\"btn btn-outline-secondary btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Quiz\n                            Permissions</button>\n                    </a>\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditsubmissions']\">\n                        <button class=\"btn btn-outline-secondary btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Quiz\n                            Submissions</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"home-category\">\n                <div class=\"home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                    <h2>Admin Controls</h2>\n                </div>\n                <div class=\"home-category-element\">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditusersComponent']\">\n                        <!-- btn-outline-warning-hover-side-shadow -->\n                        <button class=\"btn btn-outline-warning btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">User\n                            Permissions</button>\n                    </a>\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditengagements']\">\n                        <button class=\"btn btn-outline-warning btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Edit\n                            Engagements</button>\n                    </a>\n                    <a class=\"\" [routerLink]=\"['/', 'log_event']\">\n                        <button class=\"btn btn-outline-warning btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Event\n                            Log</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-columns cards-main\" *ngIf=\"currentEng\" style=\"display: flex;\n                                                                flex-wrap: nowrap;\n                                                                justify-content: space-around;\n                                                                align-items: baseline;\">\n            <div class=\"card card-category\">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>Grader</h3>\n                </div>\n                <div class=\"home-category-element \">\n                    <a class=\"\" [routerLink]=\"['/', currentEng_id, 'adminhomegrade']\">\n                        <!-- btn-outline-success-hover-side-shadow -->\n                        <button *ngIf=\"gradings_counter>0\" class=\"btn btn-outline-success  btn-lg \"\n                            [disabled]=\"!currentUser.admin_grader && !currentUser.admin_owner\" type=\"button\">Grade a\n                            Quiz\n                            ({{gradings_counter}})</button>\n                        <button *ngIf=\"!gradings_counter || gradings_counter<1\" class=\"btn btn-outline-success btn-lg \"\n                            disabled type=\"button\">No quizzes to grade</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"card card-category\">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>Editor</h3>\n                </div>\n                <div class=\"home-category-element \">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'admincreatequiz']\">\n                        <!-- btn-outline-info-hover-side-shadow -->\n                        <button class=\"btn btn-outline-info btn-lg \" type=\"button\"\n                            [disabled]=\"!currentUser.admin_editor && !currentUser.admin_owner\">Create a Quiz</button>\n                    </a>\n\n                </div>\n                <div class=\"home-category-element \">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'adminhomeedit']\">\n                        <button class=\"btn btn-lg btn-outline-info\" type=\"button\"\n                            [disabled]=\"!currentUser.admin_editor && !currentUser.admin_owner\">Edit a Quiz</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"card card-category\">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>Quiz Controls</h3>\n                </div>\n                <div class=\"home-category-element \">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditpermissions']\">\n                        <!-- btn-outline-secondary-hover-side-shadow -->\n                        <button class=\"btn btn-outline-secondary btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Quiz\n                            Permissions</button>\n                    </a>\n                </div>\n                <div class=\"home-category-element \">\n                    <a class=\"\" [routerLink]=\"['/',currentEng_id, 'AdminEditsubmissions']\">\n                        <button class=\"btn btn-outline-secondary btn-lg \"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\" type=\"button\">Quiz\n                            Submissions</button>\n                    </a>\n                </div>\n            </div>\n            <div class=\"card card-category\">\n                <div class=\"card-header text-center bg-dark text-white\">\n                    <h3>Admin Controls</h3>\n                </div>\n                <div class=\"home-category-element \">\n                    <a>\n                        <button class='btn btn-lg btn-outline-warning'\n                            [routerLink]=\"['/',currentEng_id, 'AdminEditusersComponent']\"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\">User\n                            Permissions</button>\n                    </a>\n                </div>\n                <div class=\"home-category-element \">\n                    <a>\n                        <button class='btn btn-lg btn-outline-warning'\n                            [routerLink]=\"['/',currentEng_id, 'AdminEditengagements']\"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\">Edit\n                            Engagements</button>\n                    </a>\n                </div>\n                <div class=\"home-category-element \">\n                    <a>\n                        <button class='btn btn-lg btn-outline-warning' [routerLink]=\"['/', 'log_event']\"\n                            [disabled]=\"!currentUser.admin_permissions && !currentUser.admin_owner\">Event Log</button>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-home/admin-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin-home/admin-home.component.ts ***!
  \****************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.currentEng_id = null;
        this.currentUser = null;
        this.gradings_counter = null;
        this.your_list = null;
        this.currentEng = null;
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
        });
        this._ConnectorService.user.subscribe(function (user) {
            console.log("admin-home: got the current user from connector service", user);
            _this.currentUser = user;
            if (user && !user.admin) {
                _this._r.navigate(["/" + _this.currentEng_id + "/home"]);
            }
            _this.gradings_counter = 0;
            if (user && user.profile_id) {
                _this._ConnectorService.getCompletedQuizzesLength(_this.currentUser['profile_id'], _this.currentEng_id).then(function (res) {
                    _this.gradings_counter = res;
                });
            }
        });
        this._ConnectorService.currentEng.subscribe(function (eng) {
            if (eng == null) {
                console.log('no engamement!');
            }
            else if (eng) {
                console.log("admin-home: got the current engagement from connector service", eng);
            }
            _this.currentEng = eng;
        });
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        console.log("welcome to the admin portal");
        console.log("admin-home: current user =>", this.currentUser);
        console.log("admin-home: current engagement =>", this.currentEng);
    };
    AdminHomeComponent.prototype.test = function () {
        console.log("currentEng_id =>", this.currentEng_id, "; currentUser =>", this.currentUser);
    };
    AdminHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/admin-home/admin-home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());



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
/* harmony import */ var _admin_createquiz_admin_createquiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-createquiz/admin-createquiz.component */ "./src/app/admin-createquiz/admin-createquiz.component.ts");
/* harmony import */ var _admin_editengagements_admin_editengagements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-editengagements/admin-editengagements.component */ "./src/app/admin-editengagements/admin-editengagements.component.ts");
/* harmony import */ var _admin_editpermissions_admin_editpermissions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-editpermissions/admin-editpermissions.component */ "./src/app/admin-editpermissions/admin-editpermissions.component.ts");
/* harmony import */ var _admin_editquiz_admin_editquiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-editquiz/admin-editquiz.component */ "./src/app/admin-editquiz/admin-editquiz.component.ts");
/* harmony import */ var _admin_editsubmissions_admin_editsubmissions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-editsubmissions/admin-editsubmissions.component */ "./src/app/admin-editsubmissions/admin-editsubmissions.component.ts");
/* harmony import */ var _admin_editusers_admin_editusers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-editusers/admin-editusers.component */ "./src/app/admin-editusers/admin-editusers.component.ts");
/* harmony import */ var _admin_grade_admin_grade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-grade/admin-grade.component */ "./src/app/admin-grade/admin-grade.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_home_edit_admin_home_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-home-edit/admin-home-edit.component */ "./src/app/admin-home-edit/admin-home-edit.component.ts");
/* harmony import */ var _admin_home_grade_admin_home_grade_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-home-grade/admin-home-grade.component */ "./src/app/admin-home-grade/admin-home-grade.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _oops_oops_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./oops/oops.component */ "./src/app/oops/oops.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");






















var routes = [
    { path: '', component: _index_index_component__WEBPACK_IMPORTED_MODULE_16__["IndexComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_21__["RegisterComponent"] },
    { path: ':eng/home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: ':eng/topic/:topic_id/user/:email/quiz/:quiz_id/question/:question_num', component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_18__["QuizComponent"] },
    { path: 'user/:id', component: _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"] },
    { path: ':eng/admin', component: _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_12__["AdminHomeComponent"] },
    { path: ':eng/adminhomegrade', component: _admin_home_grade_admin_home_grade_component__WEBPACK_IMPORTED_MODULE_14__["AdminHomeGradeComponent"] },
    { path: ':eng/adminhomeedit', component: _admin_home_edit_admin_home_edit_component__WEBPACK_IMPORTED_MODULE_13__["AdminHomeEditComponent"] },
    { path: ':eng/admincreatequiz', component: _admin_createquiz_admin_createquiz_component__WEBPACK_IMPORTED_MODULE_5__["AdminCreatequizComponent"] },
    { path: ':eng/AdminEditengagements', component: _admin_editengagements_admin_editengagements_component__WEBPACK_IMPORTED_MODULE_6__["AdminEditengagementsComponent"] },
    { path: ':eng/AdminEditpermissions', component: _admin_editpermissions_admin_editpermissions_component__WEBPACK_IMPORTED_MODULE_7__["AdminEditpermissionsComponent"] },
    { path: ':eng/AdminEditquiz/:topicID', component: _admin_editquiz_admin_editquiz_component__WEBPACK_IMPORTED_MODULE_8__["AdminEditquizComponent"] },
    { path: ':eng/AdminEditsubmissions', component: _admin_editsubmissions_admin_editsubmissions_component__WEBPACK_IMPORTED_MODULE_9__["AdminEditsubmissionsComponent"] },
    { path: ':eng/AdminEditusersComponent', component: _admin_editusers_admin_editusers_component__WEBPACK_IMPORTED_MODULE_10__["AdminEditusersComponent"] },
    { path: ':eng/grade/:target_id/:action', component: _admin_grade_admin_grade_component__WEBPACK_IMPORTED_MODULE_11__["AdminGradeComponent"] },
    { path: 'auth/login/aad/callback', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"] },
    { path: 'oops', component: _oops_oops_component__WEBPACK_IMPORTED_MODULE_17__["OopsComponent"] },
    { path: 'log_event', component: _connector_connector_component__WEBPACK_IMPORTED_MODULE_4__["ConnectorComponent"] },
    { path: '**', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_20__["NotfoundComponent"] }
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

module.exports = "#singIngBox {\n    background: #212528 !important;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n}\n\n#signIngBoxButtons {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    color: white;\n}\n\n.footer__btn {\n    color: #343945;\n    float: left;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    line-height: 35px;\n    margin-top: 20px;\n    position: relative;\n    text-decoration: none;\n    text-align: center;\n}\n\n.footer__btn>span {\n    color: #c6c9cc;\n    cursor: pointer;\n    pointer-events: none;\n    position: relative;\n    transition: color .6s ease;\n    z-index: 5;\n}\n\n.footer__btn-line {\n    bottom: -5px;\n    cursor: pointer;\n    height: 1px;\n    left: 0;\n    pointer-events: none;\n    position: absolute;\n    transition: -webkit-transform .5s cubic-bezier(.215, .61, .355, 1);\n    transition: transform .5s cubic-bezier(.215, .61, .355, 1);\n    transition: transform .5s cubic-bezier(.215, .61, .355, 1), -webkit-transform .5s cubic-bezier(.215, .61, .355, 1);\n    width: 100%;\n}\n\n.footer__btn-line-inner {\n    background-color: white;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform-origin: bottom center;\n    transform-origin: bottom center;\n    transition: -webkit-transform .7s cubic-bezier(.86, 0, .07, 1);\n    transition: transform .7s cubic-bezier(.86, 0, .07, 1);\n    transition: transform .7s cubic-bezier(.86, 0, .07, 1), -webkit-transform .7s cubic-bezier(.86, 0, .07, 1);\n    width: 100%;\n}\n\n.footer__btn:after {\n    background-color: #000;\n    bottom: -5px;\n    content: \"\";\n    height: 160%;\n    left: 0;\n    position: absolute;\n    -webkit-transform: scaleX(1.25) scaleY(0);\n    transform: scaleX(1.25) scaleY(0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    transition: -webkit-transform .7s cubic-bezier(.86, 0, .07, 1);\n    transition: transform .7s cubic-bezier(.86, 0, .07, 1);\n    transition: transform .7s cubic-bezier(.86, 0, .07, 1), -webkit-transform .7s cubic-bezier(.86, 0, .07, 1);\n    width: 100%;\n}\n\n.footer__btn:hover .footer__btn-line-inner,\n.footer__btn[data-trigger-animation=true] .footer__btn-line-inner {\n    -webkit-transform: scaleY(48);\n    transform: scaleY(48);\n    color: #000;\n}\n\n.footer__btn:hover .footer__btn-line,\n.footer__btn[data-trigger-animation=true] .footer__btn-line {\n    -webkit-transform: scaleX(1.4);\n    transform: scaleX(1.4);\n}\n\n.footer__btn:hover>span,\n.footer__btn[data-trigger-animation=true]>span {\n    color: #000;\n}\n\n@media screen and (max-width: 1500px) {\n    .btn-home2 {\n        letter-spacing: 0px;\n        font-size: 15px !important;\n    }\n    #eng_selector {\n        font-size: 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLDBEQUEwRDtJQUMxRCxrSEFBa0g7SUFDbEgsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDhEQUE4RDtJQUM5RCxzREFBc0Q7SUFDdEQsMEdBQTBHO0lBQzFHLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQiw4REFBOEQ7SUFDOUQsc0RBQXNEO0lBQ3RELDBHQUEwRztJQUMxRyxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpbmdJbmdCb3gge1xuICAgIGJhY2tncm91bmQ6ICMyMTI1MjggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4jc2lnbkluZ0JveEJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5mb290ZXJfX2J0biB7XG4gICAgY29sb3I6ICMzNDM5NDU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyX19idG4+c3BhbiB7XG4gICAgY29sb3I6ICNjNmM5Y2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNnMgZWFzZTtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4uZm9vdGVyX19idG4tbGluZSB7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwgLjYxLCAuMzU1LCAxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMjE1LCAuNjEsIC4zNTUsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsIC42MSwgLjM1NSwgMSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXJfX2J0bi1saW5lLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwgMCwgLjA3LCAxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsIDAsIC4wNywgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyX19idG46YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxNjAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMjUpIHNjYWxlWSgwKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwgMCwgLjA3LCAxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsIDAsIC4wNywgMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LCAwLCAuMDcsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwgMCwgLjA3LCAxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlcl9fYnRuOmhvdmVyIC5mb290ZXJfX2J0bi1saW5lLWlubmVyLFxuLmZvb3Rlcl9fYnRuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWxpbmUtaW5uZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoNDgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDQ4KTtcbiAgICBjb2xvcjogIzAwMDtcbn1cblxuLmZvb3Rlcl9fYnRuOmhvdmVyIC5mb290ZXJfX2J0bi1saW5lLFxuLmZvb3Rlcl9fYnRuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWxpbmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS40KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpO1xufVxuXG4uZm9vdGVyX19idG46aG92ZXI+c3Bhbixcbi5mb290ZXJfX2J0bltkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdPnNwYW4ge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgICAuYnRuLWhvbWUyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICNlbmdfc2VsZWN0b3Ige1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- {{cur_url | json}} -->\n<!-- <div *ngIf='popup_error_message'>\n    {{popup_error_message | json}}\n</div> -->\n<div id=\"singIngBox\" *ngIf=\"!user_obj\">\n    <div id=\"signIngBoxButtons\">\n        <h1>Welcome to Skill Assessment Portal</h1>\n        <a (click)=\"signIn()\" class=\"footer__btn\" data-footer-link=\"2\" style=\"width: 250px; font-size: 25px;\">\n            <span>Sign In</span>\n            <div class=\"footer__btn-line\">\n                <div class=\"footer__btn-line-inner\"></div>\n            </div>\n        </a>\n    </div>\n</div>\n<nav *ngIf=\"user_obj\" class=\"navbar text-center navbar-dark\" id=\"navigation\" style=\"background: white !important;\">\n    <div class=\"navbar-left-half\">\n        <a class=\"nav-link btn\" routerLink=\"/\" id=\"bpLogo\">\n            <img class=\"logo\" src=\"assets/bplogo.png\" />\n        </a>\n        <button *ngIf='user_obj && user_obj.admin' class=\"btn dropbtn btn-lg btn-outline-secondary btn-home2\" type=\"button\" onclick=\"window.open('https://blueprintconsultingservices.atlassian.net/wiki/spaces/VETECHDOC/pages/839974989/How-to+Knowledge+Assessment+WebApp')\"\n            formtarget=\"_blank\" id=\"confluence_button\">Confluence</button>\n        <button *ngIf='user_obj && user_obj.admin' class=\"btn dropbtn btn-lg btn-outline-secondary btn-home2\" type=\"button\" onclick=\"window.open('https://app.powerbi.com/groups/me/reports/e7c1bd81-a473-44fd-903b-e5a6bae657f7')\" formtarget=\"_blank\" id=\"bi_report_button\">BI Report</button>\n        <a *ngIf='currentEng' class='btn dropbtn btn-lg btn-outline-secondary btn-home2' id=\"engBtn\" [routerLink]=\"[currentEng['engagement_id'],'home']\"> {{currentEng.engagement_name}} </a>\n    </div>\n    <div class=\"navbar-right-half\">\n        <a *ngIf='user_obj && user_obj.admin && currentEng' class='btn dropbtn btn-lg btn-outline-secondary btn-home2' id=\"engBtn\" [routerLink]=\"[currentEng.engagement_id,'admin']\"> Admin Portal</a>\n        <select class=\"custom-select\" id=\"eng_selector\" (change)=\"switchEng($event.target.value)\" style=\"max-width: 250px; color: #4f91cd; \" *ngIf=\"engagements!=null && currentEng \">\n            <option value=\" \" selected=\"selected \" disabled=\"disabled \" hidden=\"hidden \">Select Engagement</option>\n            <option *ngFor=\"let e of engagements \" [value]=\"e.engagement_id \"\n                [attr.selected]=\"currentEng.engagement_id==e.engagement_id ? true : null \">\n                {{e.engagement_name}}\n            </option>\n        </select>\n        <button class=\"btn btn-home2\" *ngIf=\"user_obj!=null \">{{ user_obj.email }}</button>\n        <button class=\"btn btn-home2 \" type=\"button \" (click)=\"signOut() \">Logout</button>\n        <button (click)='getOSInfo()' class='btn btn-outline-primary' type=\"button \" *ngIf='user_obj.developer'>Get System Info</button>\n    </div>\n</nav>\n<router-outlet *ngIf=\"user_obj \"></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(location, _r, _route, _c) {
        var _this = this;
        this.location = location;
        this._r = _r;
        this._route = _route;
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
        this.popup_error_message = '';
        this.cur_url = {};
        this._c.user.subscribe(function (user) {
            if (user) {
                _this.user_obj = user;
                localStorage.setItem('user', JSON.stringify(user));
            }
        });
        this._c.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                // console.log('we got currentEng!! =>', currentEng)
                _this.currentEng = currentEng;
            }
        });
        this._c.engagements.subscribe(function (engagements) {
            if (engagements) {
                // console.log('we got engagements!! =>', engagements)
                _this.engagements = engagements;
            }
        });
        var auth = {
            clientId: "a1cbc100-5eed-4d33-b6fd-68856bb28b34",
            authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
        };
        console.log("window.location.hostname.split(\"//\") =>", window.location.hostname.split("//"));
        console.log("window.location.hostname.split(\"//\")[0].slice(0,14) =>", window.location.hostname.split("//")[0].slice(0, 14));
        try {
            if (window.location.hostname.split("//").length > 0) {
                console.log(window.location.hostname.split("//")[0].split(".")[0]);
                if (window.location.hostname.split("//")[0].split(".")[0] == "blueprintkadev") {
                    console.log("Dev version detected");
                    auth = {
                        clientId: "bdb30407-5d2e-47e0-a40e-41aead5bc297",
                        authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
                    };
                }
                else if (window.location.hostname.split("//")[0].split(".")[0] == "blueprintka") {
                    console.log("Release version detected");
                    auth = {
                        clientId: "eb56f376-ffc5-425d-9687-3dab76d4bbc6",
                        authority: "https://login.microsoftonline.com/12e2dd65-5024-44c2-83b5-3ca21c04ef0e"
                    };
                }
            }
            else {
                console.log("no version detected");
            }
        }
        catch (_a) {
            console.log("Can't read the current URL. No version detected.");
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
                this.user_obj = JSON.parse(localStorage.user);
                if (this.user_obj) {
                    // console.log("LINE 119: this.user_obj", this.user_obj)
                    this._c.storeUser(this.user_obj);
                }
            }
            else {
                // console.log("no user anywhere!!!")
                // this.signIn()
            }
        }
    }
    // ========================= AUTH FUNCTIONS ======================================
    AppComponent.prototype.signIn = function () {
        var that = this;
        this._r.navigateByUrl('/');
        this.myMSALObj.loginPopup(this.requestObj).then(function (loginResponse) {
            that.acquireTokenPopupAndCallMSGraph();
        }).catch(function (error) {
            that.popup_error_message = error;
            // console.log(error);
            that._c.logEvent(error, "ERROR", "app.component", "signIn");
        });
    };
    AppComponent.prototype.signOut = function () {
        this.myMSALObj.logout();
        localStorage['user'] = null;
        this._c.user = null;
    };
    AppComponent.prototype.acquireTokenPopupAndCallMSGraph = function () {
        var that = this;
        //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
        this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
            that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
                that.user_obj = data;
                that._c.storeUser(data);
            });
        }).catch(function (error) {
            this._c.logEvent(error, "ERROR", "app.component", "acquireTokenPopupAndCallMSGraph");
            // console.log(error);
            // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
            // Call acquireTokenPopup(popup window) 
            if (that.requiresInteraction(error.errorCode)) {
                that.myMSALObj.acquireTokenPopup(that.requestObj).then(function (tokenResponse) {
                    that.callMSGraph(that.graphConfig.graphMeEndpoint, tokenResponse.accessToken, function (data) {
                        // console.log("THIS.USER_OBJECT =>", data)
                        that.user_obj = data;
                        that._c.storeUser(data);
                    });
                }).catch(function (error) {
                    // console.log(error);
                    this._c.logEvent(error, "ERROR", "app.component", "that.myMSALObj.acquireTokenPopup");
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
        // console.log("graphAPICallback(data) =>>>>", data)
        // console.log("THIS=>", it)
    };
    AppComponent.prototype.showWelcomeMessage = function () {
        // console.log("myMSALObj.getAccount() =>", this.myMSALObj.getAccount())
        return true;
    };
    AppComponent.prototype.getCurrentUser = function () {
        if (!this.user) {
        }
    };
    AppComponent.prototype.acquireTokenRedirectAndCallMSGraph = function () {
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
            this._c.logEvent(error, "ERROR", "app.component", "acquireTokenRedirectAndCallMSGraph");
            if (this.requiresInteraction(error.errorCode)) {
                this.myMSALObj.acquireTokenRedirect(this.requestObj);
            }
        });
    };
    AppComponent.prototype.authRedirectCallBack = function (error, response) {
        if (error) {
            // console.log(error);
            this._c.logEvent(error, "ERROR", "app.component", "authRedirectCallBack");
        }
        else {
            if (response.tokenType === "access_token") {
                this.callMSGraph(this.graphConfig.graphMeEndpoint, response.accessToken, function (data) {
                    // console.log("NEW DATA =>", data)
                });
            }
            else {
                // console.log("token type is:" + response.tokenType);
            }
        }
    };
    AppComponent.prototype.requiresInteraction = function (errorCode) {
        if (!errorCode || !errorCode.length) {
            return false;
        }
        this._c.logEvent(errorCode, "ERROR", "app.component", "requiresInteraction");
        return errorCode === "consent_required" ||
            errorCode === "interaction_required" ||
            errorCode === "login_required";
    };
    AppComponent.prototype.loginPage = function () {
        // console.log("lol")
    };
    // ======================== END OF AUTH FUNCTIONS =============
    // ======================== ENGAGEMENT FUNCTIONS ==============
    AppComponent.prototype.switchEng = function (eng_id) {
        var loc = location.href.split('/');
        loc[3] = eng_id;
        var new_loc = '';
        for (var i = 3; i < loc.length; i++) {
            new_loc += "/" + loc[i];
        }
        // console.log(loc)
        // this._r.navigate([new_loc]);
        this._r.navigateByUrl("/" + eng_id + "/home");
        this._c.setMainInfo({ currentEng: eng_id });
    };
    // ======================== END OF ENGAGEMENT FUNCTIONS =======
    // ========================= MISC FUNCTIONS ===================
    AppComponent.prototype.getInfo = function () {
        this._c.test().then(function (res) {
            alert(res);
        });
    };
    AppComponent.prototype.getOSInfo = function () {
        var _this = this;
        this._c.getOSInfo().then(function (res) {
            if (!res['current_user']) {
                res['current_user'] = JSON.parse(localStorage.user);
            }
            // console.log(res)
            _this.response = res;
        }).catch(function (err) {
            // console.log("ERROR =>", err)
            // this.response = err;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("App component is here! this.currentEng =>", this.currentEng)
        var loc = location.href.split('/');
        // console.log("THIS LOCATION =>", loc)
        if (loc[3]) {
            if (localStorage['cur_eng'] && this.user_obj) {
                if (localStorage['cur_eng']['engagement_id'] != loc[3]) {
                    this._c.getAvailableEngagements(this.user_obj.profile_id, this.user_obj.email).then(function (res) {
                        for (var el in res) {
                            if (res[el]['engagement_id'] == loc[3]) {
                                _this.currentEng = res[el];
                                localStorage['cur_eng'] = res[el];
                                _this._c.setMainInfo({ 'currentEng': res[el] });
                                // console.log("NEW ENGAGEMENT WAS DETECTED =>", res[el])
                                return;
                            }
                        }
                    });
                }
            }
            else {
                if (!this.user_obj || !this.user_obj.profile_id) {
                    console.log("NO USER!");
                    this._r.navigate(['']);
                    return;
                }
                this._c.getAvailableEngagements(this.user_obj.profile_id, this.user_obj.email).then(function (res) {
                    for (var el in res) {
                        if (res[el]['engagement_id'] == loc[3]) {
                            _this.currentEng = res[el];
                            localStorage['cur_eng'] = res[el];
                            _this._c.setMainInfo({ 'currentEng': res[el] });
                            // console.log("SETTING A NEW ENGAGEMENT")
                            return;
                        }
                    }
                    alert("ERROR! No SUCH ENGAGEMENT WAS FOUND!");
                    _this._r.navigateByUrl('/');
                })
                    .catch(function (err) {
                    this._c.logEvent(err, "ERROR", "app.component", "getAvailableEngagements");
                    // console.log( "ERR =>", err)
                });
            }
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _connector_service__WEBPACK_IMPORTED_MODULE_2__["ConnectorService"]])
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
/* harmony import */ var _admin_createquiz_admin_createquiz_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-createquiz/admin-createquiz.component */ "./src/app/admin-createquiz/admin-createquiz.component.ts");
/* harmony import */ var _admin_editengagements_admin_editengagements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-editengagements/admin-editengagements.component */ "./src/app/admin-editengagements/admin-editengagements.component.ts");
/* harmony import */ var _admin_editpermissions_admin_editpermissions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-editpermissions/admin-editpermissions.component */ "./src/app/admin-editpermissions/admin-editpermissions.component.ts");
/* harmony import */ var _admin_editquiz_admin_editquiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-editquiz/admin-editquiz.component */ "./src/app/admin-editquiz/admin-editquiz.component.ts");
/* harmony import */ var _admin_editsubmissions_admin_editsubmissions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-editsubmissions/admin-editsubmissions.component */ "./src/app/admin-editsubmissions/admin-editsubmissions.component.ts");
/* harmony import */ var _admin_editusers_admin_editusers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-editusers/admin-editusers.component */ "./src/app/admin-editusers/admin-editusers.component.ts");
/* harmony import */ var _admin_editgrade_admin_editgrade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-editgrade/admin-editgrade.component */ "./src/app/admin-editgrade/admin-editgrade.component.ts");
/* harmony import */ var _admin_grade_admin_grade_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-grade/admin-grade.component */ "./src/app/admin-grade/admin-grade.component.ts");
/* harmony import */ var _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-home/admin-home.component */ "./src/app/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_home_edit_admin_home_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-home-edit/admin-home-edit.component */ "./src/app/admin-home-edit/admin-home-edit.component.ts");
/* harmony import */ var _admin_home_grade_admin_home_grade_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-home-grade/admin-home-grade.component */ "./src/app/admin-home-grade/admin-home-grade.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _oops_oops_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./oops/oops.component */ "./src/app/oops/oops.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dynamic-script-loader-service.service */ "./src/app/dynamic-script-loader-service.service.ts");





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _connector_connector_component__WEBPACK_IMPORTED_MODULE_6__["ConnectorComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"],
                _admin_createquiz_admin_createquiz_component__WEBPACK_IMPORTED_MODULE_10__["AdminCreatequizComponent"],
                _admin_editengagements_admin_editengagements_component__WEBPACK_IMPORTED_MODULE_11__["AdminEditengagementsComponent"],
                _admin_editpermissions_admin_editpermissions_component__WEBPACK_IMPORTED_MODULE_12__["AdminEditpermissionsComponent"],
                _admin_editquiz_admin_editquiz_component__WEBPACK_IMPORTED_MODULE_13__["AdminEditquizComponent"],
                _admin_editsubmissions_admin_editsubmissions_component__WEBPACK_IMPORTED_MODULE_14__["AdminEditsubmissionsComponent"],
                _admin_editusers_admin_editusers_component__WEBPACK_IMPORTED_MODULE_15__["AdminEditusersComponent"],
                _admin_editgrade_admin_editgrade_component__WEBPACK_IMPORTED_MODULE_16__["AdminEditgradeComponent"],
                _admin_grade_admin_grade_component__WEBPACK_IMPORTED_MODULE_17__["AdminGradeComponent"],
                _admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_18__["AdminHomeComponent"],
                _admin_home_edit_admin_home_edit_component__WEBPACK_IMPORTED_MODULE_19__["AdminHomeEditComponent"],
                _admin_home_grade_admin_home_grade_component__WEBPACK_IMPORTED_MODULE_20__["AdminHomeGradeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_22__["IndexComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_23__["NotfoundComponent"],
                _oops_oops_component__WEBPACK_IMPORTED_MODULE_24__["OopsComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_25__["QuizComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_26__["RegisterComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_27__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ],
            providers: [
                _connector_service__WEBPACK_IMPORTED_MODULE_7__["ConnectorService"],
                _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_28__["DynamicScriptLoaderServiceService"],
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
/* harmony import */ var rxjs_add_observable_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/merge */ "./node_modules/rxjs-compat/_esm5/add/observable/merge.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_7__);








var ConnectorService = /** @class */ (function () {
    function ConnectorService(http) {
        this.http = http;
        this.cur_user = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.user = this.cur_user.asObservable();
        this.curEng = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentEng = this.curEng.asObservable();
        this.engs = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.engagements = this.engs.asObservable();
        this.quizzes = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.quizz_names = this.quizzes.asObservable();
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.pop_up_message = this.message.asObservable();
    }
    ConnectorService.prototype.storeUser = function (user) {
        // console.log("storeUser(user): user =>", user)
        if (!user) {
            return false;
        }
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/store_user', user).subscribe(function (res) {
                that.getAvailableEngagements(res['profile_id'], res['email']).then(function (engs) {
                    // console.log("===========engs =>", engs)
                    if (engs) {
                        res['engs'] = engs;
                        that.engs.next(that.objToToArray(engs));
                        that.cur_user.next(res);
                        resolve(res);
                    }
                })
                    .catch(function (error) {
                    // console.log("ERROR! =>", error)
                });
            }, function (err) {
                // console.log("ERROR!", err)
                reject(err);
            });
        });
    };
    ConnectorService.prototype.update_user_session = function (user) {
        if (!user || user == null) {
            Object(q__WEBPACK_IMPORTED_MODULE_7__["reject"])(false);
        }
        var that = this;
        user = JSON.parse(user);
        // console.log("update_user_session =>", user)
        return new Promise(function (resolve, reject) {
            that.http.post('/api/store_user', user).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.get_User = function (email) {
        email = {
            'email': email
        };
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/get_User', email).subscribe(function (res) {
                console.log("RES =>", res);
                resolve(res);
            }, function (err) {
                console.log("ERROR =>", err);
                reject(err);
            });
        });
        console.log("done");
    };
    // ENGAGEMENT FUNCTIONS =========================================================
    ConnectorService.prototype.getAvailableEngagements = function (profile_id, email) {
        var that = this;
        var obj = {
            profile_id: profile_id,
            email: email
        };
        return new Promise(function (resolve, reject) {
            that.http.post('/api/get_availableEngagements', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    ConnectorService.prototype.getEngagementByEngId = function (engId) {
        var that = this;
        var obj = {
            eng_id: engId
        };
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getEngagementByEngId', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // QUIZ FUNCTIONS ===============================================================
    ConnectorService.prototype.takeQuiz = function (eng, email, topic_id, quiz_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.get("/api/" + eng + "/topic/" + topic_id + "/user/" + email + "/quiz/" + quiz_id + "/question/1").subscribe(// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            function (// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.submitAnswer = function (eng_id, answer) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post("/api/" + eng_id + "/success", answer).subscribe(// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            function (// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuizLength = function (quiz_id) {
        var that = this;
        var obj = {
            quiz_id: quiz_id
        };
        return new Promise(function (resolve, reject) {
            that.http.post("/api/getQuizLength", obj).subscribe(// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            function (// /3/topic/5/user/Bazyr-Tugutovs-Macbook-Pro.local/quiz/1/question/1
            res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // CATEGORIES FUNCTIONS =========================================================
    ConnectorService.prototype.getAllCategoriesAndTopicsByProfileId = function (profile_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'profile_id': profile_id
            };
            that.http.post('/api/getAllCategoriesAndTopicsByProfileId', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // GRADING FUNCTIONS ============================================================
    ConnectorService.prototype.getCompletedQuizzesLength = function (profile_id, eng_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'profile_id': profile_id,
                'eng_id': eng_id
            };
            that.http.post('/api/getCompletedQuizzesLength', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getCompletedQuizzes = function (profile_id, eng_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'profile_id': profile_id,
                'eng_id': eng_id
            };
            that.http.post('/api/getCompletedQuizzes', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.releaseSubmittedQuiz = function (submit_id, topic_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'submit_id': submit_id,
                'topic_id': topic_id,
                'email': email
            };
            that.http.post('/api/releaseSubmittedQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.releaseAllSubmittedQuiz = function (ids, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'ids': ids,
                'email': email
            };
            that.http.post('/api/releaseAllSubmittedQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuizForGrading = function (email, topic_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'topic_id': topic_id
            };
            that.http.post('/api/getQuizForGrading', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.continueGradeQuiz = function (email, submit_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'submit_id': submit_id,
                'email': email
            };
            that.http.post('/api/continue_grade', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.submitGrades = function (grades, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'grades': grades,
                'email': email
            };
            that.http.post('/api/submitGrades', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.submitGradesForOneQuiz = function (submit_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/submitGradesForOneQuiz', submit_id).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // CREATE QUIZ FUNCTIONS ========================================================
    ConnectorService.prototype.getCatsTopsEngs = function (email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email
            };
            that.http.post('/api/getCatsTopsEngs', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.createQuiz = function (quiz, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'quiz': quiz
            };
            that.http.post('/api/createQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT QUIZ FUNCTIONS ==========================================================
    ConnectorService.prototype.getQuizzesForEdit = function (email, eng_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'eng_id': eng_id
            };
            that.http.post('/api/getQuizzesForEdit', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuizByTopicIdForEdit = function (email, topic_id) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'topic_id': topic_id
            };
            console.log("getQuizByTopicIdForEdit");
            that.http.post('/api/getQuizByTopicIdForEdit', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveEditedQuiz = function (quiz, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'quiz': quiz
            };
            that.http.post('/api/saveEditedQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.disableQuiz = function (quiz_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'quiz_id': quiz_id
            };
            that.http.post('/api/disableQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.deleteQuiz = function (quiz, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'quiz': quiz
            };
            that.http.post('/api/deleteQuiz', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.deleteAnswer = function (quiz_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'quiz_id': quiz_id
            };
            that.http.post('/api/deleteAnswer', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.deleteQuestion = function (question_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'question_id': question_id
            };
            that.http.post('/api/deleteQuestion', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.deleteAnswersByQuestionId = function (question_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                'email': email,
                'question_id': question_id
            };
            that.http.post('/api/deleteAnswersByQuestionId', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuizInfoById = function (quiz_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                quiz_id: quiz_id,
                email: email
            };
            console.log("getQuizByTopicIdForEdit");
            that.http.post('/api/getQuizInfoById', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuestionIds = function (quiz_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                quiz_id: quiz_id,
                email: email
            };
            console.log("getQuizByTopicIdForEdit");
            that.http.post('/api/getQuestionIds', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getQuestionInfoById = function (question_id, email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            var obj = {
                question_id: question_id,
                email: email
            };
            console.log("getQuizByTopicIdForEdit");
            that.http.post('/api/getQuestionInfoById', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT QUIZ PERMISSIONS FUNCTIONS ==============================================
    ConnectorService.prototype.getQuizPermissions = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getQuizPermissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveQuizPermissions = function (users, email) {
        var obj = {
            'users': users,
            'email': email
        };
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveQuizPermissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT QUIZ SUBMISSION FUNCTIONS ==============================================
    ConnectorService.prototype.getQuizSubmissions = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getQuizSubmissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveQuizSubmissions = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveQuizSubmissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT USER PERMISSION FUNCTIONS ==============================================
    ConnectorService.prototype.getUserPermissions = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getUserPermissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveUserPermissions = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveUserPermissions', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT ENGAGEMENTS FUNCTIONS ===================================================
    ConnectorService.prototype.getAllEngagements = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/get_all_engagemets', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.get_engagement_agents_by_eng_id = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/get_engagement_agents_by_eng_id', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.get_contacts_by_eng_id = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/get_contacts_by_eng_id', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveEngagements = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveEngagements', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // EDIT ENGAGEMENTS FUNCTIONS ===================================================
    ConnectorService.prototype.saveBuckets = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveBuckets', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.saveOneBucket = function (obj) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/saveOneBucket', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    // ==============================================================================
    // MISC FUNCTIONS
    ConnectorService.prototype.objToToArray = function (obj) {
        var result = [];
        for (var el in obj) {
            result.push(obj[el]);
        }
        return result;
    };
    ;
    ConnectorService.prototype.setMainInfo = function (obj) {
        var _this = this;
        // console.log("setMainInfo(obj) =>", obj)
        if (obj.currentUser) {
            this.cur_user.next(obj.currentUser);
        }
        if (obj.currentEng) {
            // console.log("setMainInfo ENGAGEMENT UPDATED", obj.currentEng)
            var user_1;
            var eng_id_1 = obj.currentEng.engagement_id;
            if (!obj.currentEng.engagement_id) {
                eng_id_1 = obj.currentEng;
            }
            var new_eng_1 = obj.currentEng;
            // console.log("new_eng =>", new_eng)
            if (!new_eng_1[0] || !new_eng_1['contacts']) {
                // console.log("need to get more data")
                this.user.subscribe(function (u) {
                    if (u) {
                        user_1 = u;
                        var obj_1 = {
                            email: user_1.email,
                            eng_id: eng_id_1
                        };
                        // console.log("OBJECT TO SEND =>", obj)
                        _this.getEngagementByEngId(eng_id_1).then(function (eng) {
                            _this.get_contacts_by_eng_id(obj_1).then(function (data) {
                                if (data) {
                                    new_eng_1 = eng[0];
                                    new_eng_1.contacts = data['body'];
                                    console.log("new cur_eng =>", new_eng_1);
                                    _this.curEng.next(new_eng_1);
                                }
                            });
                        });
                    }
                });
            }
        }
        if (obj.engagements) {
            this.engs.next(obj.engagements);
        }
        if (obj.quizzes) {
            this.quizzes.next(obj.quizzes);
        }
        if (obj.message) {
            this.message.next(obj.message);
        }
    };
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
                res['current_engagement'] = that.curEng.value;
                res['current_user'] = that.cur_user.value;
                res['all_engagements'] = that.engs.value;
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.imgToBase64 = function (element) {
        return new Promise(function (resolve, reject) {
            var file = element[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    ConnectorService.prototype.logEvent = function (log_event, log_level, host, line) {
        //
        var that = this;
        //     [log_level]
        //     ,[log_time]
        //     ,[log_event]
        //     ,[pid]
        //     ,[webapp]
        //     ,[event_time]
        //     ,[host]
        //     ,[user_id]
        //     ,[line_number]
        var obj = {
            log_event: log_event,
            log_level: log_level,
            host: host,
            line: line,
            user_id: this.cur_user['user_id'],
            event_time: new Date()
        };
        return new Promise(function (resolve, reject) {
            that.http.post('/api/logEvent', obj).subscribe(function (res) {
                // console.log("/api/logEvent RESULT =>", res)
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getEventLog = function (user_email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getEventLog', user_email).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getEventLogByID = function (log_id) {
        var that = this;
        var obj = {
            log_id: log_id,
        };
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getEventLogByID', obj).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ConnectorService.prototype.getNewLogs = function (user_email) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that.http.post('/api/getNewLogs', user_email).subscribe(function (res) {
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

module.exports = ".logevent_main{\n  display: flex;\n\tflex-direction: column;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\talign-items: center;\n  align-content: flex-start;\n  margin-bottom: 50px;\n}\n\n@-webkit-keyframes placeHolderShimmer{\n    0%{\n        background-position: -468px 0\n    }\n    100%{\n        background-position: 468px 0\n    }\n}\n\n@keyframes placeHolderShimmer{\n    0%{\n        background-position: -468px 0\n    }\n    100%{\n        background-position: 468px 0\n    }\n}\n\n.linear-background {\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-name: placeHolderShimmer;\n            animation-name: placeHolderShimmer;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    background: #f6f7f8;\n    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);\n    background-size: 1000px 104px;\n    height: 200px;\n    position: relative;\n    overflow: hidden;\n}\n\n.inter-draw{\n  background: #FFF;\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  top: 100px;\n}\n\n.inter-right--top{\n  background: #FFF;\n  width: 100%;\n  height: 20px;\n  position: absolute;\n  top: 20px;\n  left: 100px;\n}\n\n.inter-right--bottom{\n  background: #FFF;\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  top: 60px;\n  left: 100px;\n}\n\n.inter-crop{\n  background: #FFF;\n  width: 20px;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 100px;\n}\n\n.inline-radio {\n  display: flex;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid #b6b6b6;\n}\n\n.inline-radio div {\n  position: relative;\n  flex: 1;\n}\n\n.inline-radio input {\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n\n.inline-radio label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #b6b6b6;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: none;\n  border-right: 1px solid #b6b6b6;\n  -webkit-transform: ease 0.5s;\n          transform: ease 0.5s;\n}\n\n.inline-radio div:last-child label {\n  border-right: 0;\n}\n\n.inline-radio input:checked+label {\n  background: dimgrey;\n  font-weight: 500;\n  color: #fff;\n}\n\n.selected_grade{\n  box-shadow: 0px 2px 15px rgba(0,0,0,0.6)!important;\n  z-index: 1;\n  -webkit-animation: fadein 0.9s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n       animation: fadein 0.9s;\n}\n\n@keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.modal_message_box {\n  position: fixed;\n  z-index: 50;\n  width: 100vw;\n  height: 110vh;\n  background: rgba(179, 182, 185, 0.5);\n  margin-top: -120px;\n}\n\n.modal_message {\n  max-height: 52vh;\n}\n\n.modal-edit-remove-bucket{\n  height: 50vh !important;\n  overflow-y: auto;\n}\n\n.modal-edit-remove-bucket td{\n  /* padding: 0px 0px !important; */\n}\n\n.modal-dialog{\n  width: 1000px;\n  max-width: 1000px !important;\n  /* height: 100px; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdG9yL2Nvbm5lY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtDQUNkLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsMkJBQTJCO0NBQzNCLG1CQUFtQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBUEE7SUFDSTtRQUNJO0lBQ0o7SUFDQTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIscUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLDBDQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMseUNBQWlDO1lBQWpDLGlDQUFpQztJQUNqQyxtQkFBbUI7SUFDbkIsMkVBQTJFO0lBQzNFLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQiw0QkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELFVBQVU7RUFDViw4QkFBOEIsRUFBRSxvQ0FBb0MsRUFDdkMsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixpQkFBaUI7T0FDekMsc0JBQXNCO0FBQzdCOztBQUdBO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUEsaUJBQWlCOztBQU1qQixvQ0FBb0M7O0FBQ3BDO0VBQ0UsT0FBTyxVQUFVLEVBQUU7RUFDbkIsT0FBTyxVQUFVLEVBQUU7QUFDckI7O0FBRUEsc0JBQXNCOztBQU10QixpQkFBaUI7O0FBS2pCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0b3IvY29ubmVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nZXZlbnRfbWFpbntcbiAgZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuQGtleWZyYW1lcyBwbGFjZUhvbGRlclNoaW1tZXJ7XG4gICAgMCV7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC00NjhweCAwXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDQ2OHB4IDBcbiAgICB9XG59XG5cbi5saW5lYXItYmFja2dyb3VuZCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogcGxhY2VIb2xkZXJTaGltbWVyO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kOiAjZjZmN2Y4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VlZWVlZSA4JSwgI2RkZGRkZCAxOCUsICNlZWVlZWUgMzMlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMDBweCAxMDRweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmludGVyLWRyYXd7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG59XG4uaW50ZXItcmlnaHQtLXRvcHtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDEwMHB4O1xufVxuLmludGVyLXJpZ2h0LS1ib3R0b217XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAxMDBweDtcbn1cbi5pbnRlci1jcm9we1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTAwcHg7XG59XG5cblxuLmlubGluZS1yYWRpbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcbn1cblxuLmlubGluZS1yYWRpbyBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG59XG5cbi5pbmxpbmUtcmFkaW8gaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5saW5lLXJhZGlvIGxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiAjYjZiNmI2O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiNmI2YjY7XG4gIHRyYW5zZm9ybTogZWFzZSAwLjVzO1xufVxuXG4uaW5saW5lLXJhZGlvIGRpdjpsYXN0LWNoaWxkIGxhYmVsIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuXG4uaW5saW5lLXJhZGlvIGlucHV0OmNoZWNrZWQrbGFiZWwge1xuICBiYWNrZ3JvdW5kOiBkaW1ncmV5O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlbGVjdGVkX2dyYWRle1xuICBib3gtc2hhZG93OiAwcHggMnB4IDE1cHggcmdiYSgwLDAsMCwwLjYpIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMC45czsgLyogRmlyZWZveCA8IDE2ICovXG4gICAtbXMtYW5pbWF0aW9uOiBmYWRlaW4gMC45czsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAtby1hbmltYXRpb246IGZhZGVpbiAwLjlzOyAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjlzO1xufVxuXG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogRmlyZWZveCA8IDE2ICovXG5ALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLyogU2FmYXJpLCBDaHJvbWUgYW5kIE9wZXJhID4gMTIuMSAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEludGVybmV0IEV4cGxvcmVyICovXG5ALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBPcGVyYSA8IDEyLjEgKi9cbkAtby1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbn1cbi5tb2RhbF9tZXNzYWdlX2JveCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMTB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgxNzksIDE4MiwgMTg1LCAwLjUpO1xuICBtYXJnaW4tdG9wOiAtMTIwcHg7XG59XG5cbi5tb2RhbF9tZXNzYWdlIHtcbiAgbWF4LWhlaWdodDogNTJ2aDtcbn1cblxuLm1vZGFsLWVkaXQtcmVtb3ZlLWJ1Y2tldHtcbiAgaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubW9kYWwtZWRpdC1yZW1vdmUtYnVja2V0IHRke1xuICAvKiBwYWRkaW5nOiAwcHggMHB4ICFpbXBvcnRhbnQ7ICovXG59XG4ubW9kYWwtZGlhbG9ne1xuICB3aWR0aDogMTAwMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweCAhaW1wb3J0YW50O1xuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/connector/connector.component.html":
/*!****************************************************!*\
  !*** ./src/app/connector/connector.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n\n  <div class=\"logevent_main element-animation-fadeIn\">\n    <div [hidden]=\"!modal_mesage_bool\" class=\"modal_message_box\">\n      <div class=\"modal-dialog modal-dialog-centered modal_message\" role=\"document\">\n        <div class=\"modal-content modal-dialog-scrollable\" *ngIf=\"modal_message.title == 'Details'\">\n          <div class=\"modal-header\">\n            <h3 class=\"modal-title  text-center\" id=\"exampleModalCenteredLabel\" style=\"margin: 0px auto;\">Details for\n              {{modal_message.body.log_id}}</h3>\n            <button type=\"button\" class=\"close\" (click)=\"closeModal()\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div style=\"height: 50vh !important; overflow-y: scroll;\" class=\"text-break\">\n            {{ modal_message.body | json}}\n          </div>\n          <div class=\"team_control_panel\">\n            <div style=\"height: 50px; margin-top: 25px;\">\n              <button type=\"button\" (click)=\"closeModal()\" class=\"btn btn-warning  btn-action-borderless shadow\"\n                style=\"margin: 0px 20px\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center\">\n      <h1>Event Log Page</h1>\n      <!-- {{ new_logs |json}} -->\n      <!-- <button (click)=\"getNewLogs()\">getNewLogs()</button> -->\n      <div class=\"spinner-border\" *ngIf=\"!first_request_status\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n      <button *ngIf=\"first_request_status\" class=\"btn btn-outline-dark btn-action-borderless\"\n        [ngClass]=\"{'active shadow': current_level == 'ALL'}\" (click)=\"filterList('ALL')\">\n        <h3>All {{ids.length}} entries </h3>\n      </button>\n\n      <div *ngIf=\"first_request_status\" style=\"margin: 10px auto\">\n        <span *ngFor=\"let el of levels_counter | keyvalue\">\n          <button *ngIf=\"el.key != 'ALL'\" class=\"btn btn-action-borderless font-weight-bold\" [ngClass]=\"{\n                      'btn-outline-info': el.key =='INFO',\n                      'btn-outline-warning': el.key == 'WARNING',\n                      'btn-outline-danger': el.key == 'ERROR',\n                      'btn-outline-secondary': el.key == 'DEBUG',\n                      'btn-outline-primary': el.key == 'TESTING',\n                      'active shadow': el.key == current_level\n                    }\" (click)=\"filterList(el.key)\">{{el.key}}: {{el.value.length}}\n            (~{{el.value.percentage}}%)</button>\n        </span>\n      </div>\n\n    </div>\n    <nav aria-label=\"...\" *ngIf=\"first_request_status\" style=\"margin: auto 0px\">\n      <ul class=\"pagination \">\n        <li class=\"page-item\" [ngClass]=\"{'disabled': current_page < 2}\">\n          <button class=\"btn btn-outline-secondary btn-action-borderless\" (click)=\"changePage(1)\"\n            [disabled]=\"current_page < 2\">\n            << </button> </li> <li class=\"page-item\" (click)=\"changePage(current_page - 2)\" [hidden]=\"current_page-2<1\">\n              <button class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page - 2}}</button></li>\n        <li class=\"page-item\" (click)=\"changePage(current_page - 1)\" [hidden]=\"current_page<2\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page - 1}}</button></li>\n        <li class=\"page-item active\">\n          <button class=\"btn btn-dark btn-action-borderless shadow\">{{current_page}}</button>\n        </li>\n        <li class=\"page-item\" (click)=\"changePage(current_page + 1)\" [hidden]=\"current_page+1 > pages\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page + 1}}</button></li>\n        <li class=\"page-item\" (click)=\"changePage(current_page + 2)\" [hidden]=\"current_page+2  > pages\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page + 2}}</button></li>\n        <li class=\"page-item\" [ngClass]=\"{'disabled': current_page == pages}\">\n          <button class=\"btn btn-outline-secondary btn-action-borderless\" (click)=\"changePage(pages)\"> >> </button>\n        </li>\n      </ul>\n    </nav>\n    <!-- {{cur_num}}/{{end_num}} -->\n\n    <div class=\"progress shadow\" *ngIf=\"first_request_status\" style=\"width: 95%; border-radius: 0px;\">\n      <div class=\"progress-bar shadow \" role=\"progressbar\" style=\"height: 35px;\"\n        [style.width.%]=\"( (cur_num/end_num) * 100)\" style=\"transition: width .1s ease; background-color: #4f91cd\">\n        {{cur_num}}/{{end_num}}</div>\n    </div>\n    <table class=\"table table-borderless shadow\" style=\"width: 95%\" *ngIf=\"first_request_status\">\n      <thead class=\"thead-dark shadow\">\n        <tr>\n          <th style=\"width: 120px;\">Event ID</th>\n          <th style=\"width: 100px;\">Level</th>\n          <th>Content</th>\n          <th>Host</th>\n          <th>Line</th>\n          <th>Details</th>\n          <th>Submit by</th>\n          <th>Time</th>\n        </tr>\n      </thead>\n      <tbody style=\"background: white\">\n        <tr *ngFor=\"let el of logs; let i = index\" [ngClass]=\"{\n                    'alert-warning': ready[el.log_id] && el.log_level == 'WARNING',\n                    'alert-danger': ready[el.log_id] && el.log_level == 'ERROR'\n                  }\">\n          <td *ngIf=\"!ready[el.log_id]\" colspan=\"8\">\n            <div class=\"alert text-center shadow\" [ngClass]=\"{\n                          'alert-info': el.log_level == 'INFO',\n                          'alert-warning': el.log_level == 'WARNING',\n                          'alert-danger': el.log_level == 'ERROR',\n                          'alert-secondary': el.log_level == 'DEBUG',\n                          'alert-primary': el.log_level == 'TESTING'\n                        }\">Loading </div>\n          </td>\n          <th scope=\"row\" *ngIf=\"ready[el.log_id]\" class=\"\">\n            ({{ (current_page - 1) * 100 + i + 1}})\n            <span *ngIf=\"ready[el.log_id] && new_logs[el.log_id]\" class=\"badge badge-success shadow\">\n              New\n              <br>\n              {{el.log_id}}\n            </span>\n            <span *ngIf=\"ready[el.log_id] && !new_logs[el.log_id]\">{{el.log_id}}</span></th>\n          <td *ngIf=\"ready[el.log_id]\">\n            <h4>\n              <span class=\"badge badge-info shadow btn-action-borderless\" *ngIf=\"el.log_level == 'INFO' \">INFO</span>\n              <span class=\"badge badge-warning shadow btn-action-borderless\"\n                *ngIf=\"el.log_level == 'WARNING' \">WARNING</span>\n              <span class=\"badge badge-danger shadow btn-action-borderless\"\n                *ngIf=\"el.log_level == 'ERROR' \">ERROR</span>\n              <span class=\"badge badge-secondary shadow btn-action-borderless\"\n                *ngIf=\"el.log_level == 'DEBUG' \">DEBUG</span>\n              <span class=\"badge badge-primary shadow btn-action-borderless\"\n                *ngIf=\"el.log_level != 'ERROR' && el.log_level != 'WARNING'  && el.log_level != 'INFO'  && el.log_level != 'DEBUG'\">{{el.log_level}}</span>\n            </h4>\n          </td>\n          <td *ngIf=\"ready[el.log_id] \" class=\"text-break\">\n            <span *ngIf=\"!highlights[el.log_id]\">\n              <span *ngIf=\"el.log_event && el.log_event.length > 50\">\n                {{el.log_event | slice:0:50}} ... <a style=\"cursor: pointer; color: black\"\n                  (click)=\"openModal('Details', el)\">(details)</a>\n              </span>\n              <span *ngIf=\"el.log_event && el.log_event.length <= 50\">\n                {{el.log_event}}\n              </span>\n            </span>\n            <span *ngIf=\"highlights[el.log_id] && highlights[el.log_id]['submit_id']\" class=\"alert-info shadow\">\n              {{highlights[el.log_id]['submit_id'][0]}}\n            </span>\n            <span *ngIf=\"highlights[el.log_id] && highlights[el.log_id]['submit_id']\">\n              {{highlights[el.log_id]['submit_id'][1]}}\n            </span>\n          </td>\n          <td *ngIf=\"ready[el.log_id]\" class=\"text-break\">{{el.host}}</td>\n          <td *ngIf=\"ready[el.log_id]\" class=\"text-break\">{{el.line_number}}</td>\n          <td *ngIf=\"ready[el.log_id]\"><button class=\"btn btn-secondary btn-action-borderless shadow\"\n              (click)=\"openModal('Details', el)\">Check details</button></td>\n          <td *ngIf=\"ready[el.log_id]\" class=\"text-break\">{{el.user_id}}</td>\n          <td *ngIf=\"ready[el.log_id]\" class=\"text-break\">{{el.event_time | date:'medium'}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <nav aria-label=\"...\" *ngIf=\"first_request_status\" style=\"margin: auto 0px\">\n      <ul class=\"pagination \">\n        <li class=\"page-item\" [ngClass]=\"{'disabled': current_page < 2}\">\n          <button class=\"btn btn-outline-secondary btn-action-borderless\" (click)=\"changePage(1)\"\n            [disabled]=\"current_page < 2\">\n            << </button> </li> <li class=\"page-item\" (click)=\"changePage(current_page - 2)\" [hidden]=\"current_page-2<1\">\n              <button class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page - 2}}</button></li>\n        <li class=\"page-item\" (click)=\"changePage(current_page - 1)\" [hidden]=\"current_page<2\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page - 1}}</button></li>\n        <li class=\"page-item active\">\n          <button class=\"btn btn-dark btn-action-borderless shadow\">{{current_page}}</button>\n        </li>\n        <li class=\"page-item\" (click)=\"changePage(current_page + 1)\" [hidden]=\"current_page+1 > pages\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page + 1}}</button></li>\n        <li class=\"page-item\" (click)=\"changePage(current_page + 2)\" [hidden]=\"current_page+2  > pages\"><button\n            class=\"btn btn-outline-secondary btn-action-borderless\">{{current_page + 2}}</button></li>\n        <li class=\"page-item\" [ngClass]=\"{'disabled': current_page == pages}\">\n          <button class=\"btn btn-outline-secondary btn-action-borderless\" (click)=\"changePage(pages)\"> >> </button>\n        </li>\n      </ul>\n    </nav>\n  </div>\n  <div\n    style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n    <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n      <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n        <div class=\"text-center\" style=\"display: flex;\n              flex-direction: row;\n              flex-wrap: wrap;\n              justify-content: center;\n              align-items: center;\n              align-content: stretch;\">\n          <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n          <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n            target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n            style=\"margin-left: 15px\">\n            <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-12 px-2\">\n        <div class=\"text-center\">\n          <p class=\"mt-3\">If you have questions, please contact the Training Team</p>\n          <p><a class=\"mt-3\" href=\"mailto:jennifer@bpcs.com?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\"> Jennifer Hollar</a></p>\n          <p><a class=\"mt-3\" href=\"mailto:nmelling@bpcs.com?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\"> Nigel Melling</a></p>\n          <p><a class=\"mt-3\" href=\"mailto:kjenson@bpcs.com?subject=Question regarding Skill Assessment\"\n              style=\"color: #4f91cd; cursor: pointer;\"> Kevin Jenson</a></p>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n        <div class=\"text-center  bp-box shadow\">\n          <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">Blueprint Consulting</h4>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">505 106th Ave NE, Third\n            Floor, Bellevue, WA 98004</h5>\n          <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">(206) 455-8326</h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);






var ConnectorComponent = /** @class */ (function () {
    function ConnectorComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.logs = [];
        this.cur_list = [];
        this.currentUser = null;
        this.curIndex = null;
        this.ids = [];
        this.pages = 0;
        this.current_page = 1;
        this.ready = {};
        this.log_storage = {};
        this.highlights = {};
        this.first_request_status = false;
        this.cur_num = 0;
        this.end_num = 0;
        this.levels_counter = {
            DEBUG: { length: 0, list: [], percentage: 0 },
            ERROR: { length: 0, list: [], percentage: 0 },
            INFO: { length: 0, list: [], percentage: 0 },
            TESTING: { length: 0, list: [], percentage: 0 },
            WARNING: { length: 0, list: [], percentage: 0 },
            ALL: { length: 0, list: [], percentage: 0 }
        };
        this.current_level = 'ALL';
        this.levels_counter_class_idx = 0;
        this.modal_mesage_bool = false;
        this.modal_message = {
            'title': '',
            'body': ''
        };
        this.temp_obj = 0;
        this.new_logs = {};
        this._ConnectorService.user.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
                var obj = {
                    'email': user.email
                };
                _this._ConnectorService.getEventLog(obj).then(function (res) {
                    _this.ids = res['body'];
                    _this.first_request_status = true;
                    _this.levels_counter.ALL.list = res['body'];
                    _this.levels_counter.ALL.length = res['body'].length;
                    _this.pages = Math.ceil(res['body'].length / 100);
                    _this.filterList('ALL');
                    _this.getLevelData();
                    // this.renderCurrentList()
                }).catch(function (err) {
                    console.log("ERROR =>", err);
                });
            }
            if (user && !user.admin) {
                _this._r.navigate(["/oops"]);
            }
        });
        setInterval(function () {
            console.log("REFRESHING!!!!");
            _this.getNewLogs();
        }, 60000);
    }
    ConnectorComponent.prototype.ngOnInit = function () {
    };
    ConnectorComponent.prototype.filterList = function (target) {
        if (target == 'ALL') {
            console.log(target);
        }
        else {
            console.log(this.levels_counter[target]);
        }
        var target_list = this.levels_counter[target];
        this.current_level = target;
        this.current_page = 1;
        this.pages = Math.ceil(target_list.length / 100);
        this.renderCurrentList();
    };
    ConnectorComponent.prototype.renderCurrentList = function () {
        var _this = this;
        console.log("New logs =>", this.new_logs);
        var target_list = this.levels_counter[this.current_level]['list'];
        this.logs = [];
        var start = (this.current_page - 1) * 100;
        var end = this.current_page * 100;
        this.cur_num = 0;
        this.end_num = 100;
        this.ready = {};
        var counter = 0;
        var _loop_1 = function () {
            if (!target_list[start]) {
                start++;
                return "continue";
            }
            var cur_target = target_list[start];
            this_1.logs.push({
                log_id: cur_target.log_id,
                log_level: cur_target.log_level
            });
            if (!this_1.log_storage[cur_target.log_id]) {
                this_1._ConnectorService.getEventLogByID(cur_target.log_id).then(function (res) {
                    if (res && res['status'] == 'success') {
                        if (_this.cur_num < _this.end_num) {
                            _this.cur_num++;
                        }
                        _this.bindLogObject(cur_target.log_id, res['body'][0]);
                        _this.log_storage[cur_target.log_id] = res['body'][0];
                        if (res['body'][0]['log_event'].slice(0, 9) == "Submit ID") {
                            // console.log("storing at highlights", res['body'][0]['log_event'].split(":")[0])
                            if (!_this.highlights[cur_target.log_id]) {
                                _this.highlights[cur_target.log_id] = {};
                            }
                            if (!_this.highlights[cur_target.log_id]['submit_id']) {
                                _this.highlights[cur_target.log_id]['submit_id'] = [];
                            }
                            _this.highlights[cur_target.log_id]['submit_id'][0] = res['body'][0]['log_event'].split(":")[0];
                            _this.highlights[cur_target.log_id]['submit_id'][1] = res['body'][0]['log_event'].split(":")[1];
                        }
                    }
                });
            }
            else {
                this_1.bindLogObject(cur_target.log_id, this_1.log_storage[cur_target.log_id]);
                if (this_1.cur_num < this_1.end_num) {
                    this_1.cur_num++;
                }
            }
            start++;
            counter++;
        };
        var this_1 = this;
        while (start < end) {
            _loop_1();
        }
        this.end_num = counter;
        // console.log("this.ready =>" ,this.ready)
    };
    ConnectorComponent.prototype.getNewLogs = function () {
        var _this = this;
        var last_id;
        if (this.levels_counter['ALL']['list'][0]) {
            last_id = this.levels_counter['ALL']['list'][0];
        }
        else {
            return;
        }
        // last_id.log_id = 346862; // comment this out after testing!
        var obj = {
            email: this.currentUser.email,
            last_id: last_id.log_id
        };
        this._ConnectorService.getNewLogs(obj).then(function (res) {
            console.log(res);
            if (res && res['status'] == 'success' && res['body'].length > 0) {
                var new_logs = res['body'];
                for (var i = 0; i < new_logs.length; i++) {
                    new_logs[i]['log_event'] = _this.removeNewLines(unescape(new_logs[i]['log_event']));
                    new_logs[i]['line_number'] = unescape(new_logs[i]['line_number']);
                    new_logs[i]['details'] = unescape(new_logs[i]['details']);
                    _this.new_logs[new_logs[i]['log_id']] = true;
                    _this.ready[new_logs[i]['log_id']] = true;
                    _this.log_storage[new_logs[i]['log_id']] = new_logs[i];
                }
                _this.levels_counter.ALL.list = new_logs.concat(_this.levels_counter.ALL.list);
                // this.ids = res['body'].concat(this.ids)
                _this.getLevelData();
                console.log('this.logs =>', _this.logs);
                console.log("this.log_storage =>", _this.log_storage);
                _this.renderCurrentList();
            }
        });
        console.log("this.new_logs =>", this.new_logs);
        return;
    };
    ConnectorComponent.prototype.changePage = function (val) {
        console.log("val =>", val);
        this.current_page = val;
        this.renderCurrentList();
    };
    ConnectorComponent.prototype.bindLogObject = function (log_id, obj) {
        for (var el in this.logs) {
            if (this.logs[el]['log_id'] == log_id) {
                this.logs[el] = obj;
                this.logs[el]['log_event'] = this.removeNewLines(unescape(this.logs[el]['log_event']));
                this.logs[el]['line_number'] = unescape(this.logs[el]['line_number']);
                this.logs[el]['details'] = unescape(this.logs[el]['details']);
                this.ready[log_id] = true;
                break;
            }
        }
    };
    ConnectorComponent.prototype.getLevelData = function () {
        var ids = this.levels_counter.ALL.list;
        var all_copy = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__(this.levels_counter["ALL"]);
        this.levels_counter = {
            DEBUG: { length: 0, list: [], percentage: 0 },
            ERROR: { length: 0, list: [], percentage: 0 },
            INFO: { length: 0, list: [], percentage: 0 },
            TESTING: { length: 0, list: [], percentage: 0 },
            WARNING: { length: 0, list: [], percentage: 0 },
            ALL: all_copy
        };
        for (var el in ids) {
            if (!this.levels_counter[ids[el]['log_level']]) {
                this.levels_counter[ids[el]['log_level']] = {
                    length: 0,
                    list: [],
                    percentage: (this.levels_counter[ids[el]['log_level']].length / ids.length) * 100
                };
            }
            var that = this;
            this.levels_counter[ids[el]['log_level']].length++;
            this.levels_counter[ids[el]['log_level']].percentage = Math.round((this.levels_counter[ids[el]['log_level']].length / ids.length) * 100);
            this.levels_counter[ids[el]['log_level']].list.push(ids[el]);
        }
        console.log(this.levels_counter);
    };
    ConnectorComponent.prototype.level_counter_get_class = function () {
        var res = '';
        this.levels_counter_class_idx++;
        return res;
    };
    ConnectorComponent.prototype.openModal = function (action, target_id) {
        this.modal_mesage_bool = true;
        this.modal_message.title = action;
        this.modal_message.body = target_id;
    };
    ConnectorComponent.prototype.closeModal = function () {
        this.modal_mesage_bool = false;
    };
    ConnectorComponent.prototype.removeNewLines = function (str) {
        return str.split("\\n").join("");
    };
    ConnectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-connector',
            template: __webpack_require__(/*! ./connector.component.html */ "./src/app/connector/connector.component.html"),
            styles: [__webpack_require__(/*! ./connector.component.css */ "./src/app/connector/connector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ConnectorComponent);
    return ConnectorComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-script-loader-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-script-loader-service.service.ts ***!
  \**********************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderServiceService", function() { return DynamicScriptLoaderServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScriptStore = [
    { name: 'quizQuestionRender', src: './assets/quizQuestionRender.js' },
];
var DynamicScriptLoaderServiceService = /** @class */ (function () {
    function DynamicScriptLoaderServiceService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    DynamicScriptLoaderServiceService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    DynamicScriptLoaderServiceService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.id = 'dragngdrop_logic';
                var script_text = document.createTextNode("$(document).ready(function() {\n          setTimeout(function(){dragAndDropLogic();}, 1000)\n          console.log(\"let's go\");\n          function dragAndDropLogic() { // Drag and drop functionality ================================================================\n              try {\n                  if (!document.querySelectorAll ||\n                      !('draggable' in document.createElement('span')) ||\n                      window.opera\n                  ) { return; }\n                  //console.log(\"==========================================dragAndDropLogic==========================================================\")\n                  //get the collection of draggable targets and add their draggable attribute\n                  for (var targets = document.querySelectorAll('[data-draggable=\"target\"]'), len = targets.length, i = 0; i < len; i++) {\n                      targets[i].setAttribute('aria-dropeffect', 'none');\n                  }\n      \n                  //get the collection of draggable items and add their draggable attributes\n                  for (var items = document.querySelectorAll('[data-draggable=\"item\"]'), len = items.length, i = 0; i < len; i++) {\n                      items[i].setAttribute('draggable', 'true');\n                      items[i].setAttribute('aria-grabbed', 'false');\n                      items[i].setAttribute('tabindex', '0');\n                  }\n      \n      \n      \n                  //dictionary for storing the selections data \n                  //comprising an array of the currently selected items \n                  //a reference to the selected items' owning container\n                  //and a refernce to the current drop target container\n                  var selections = {\n                      items: [],\n                      owner: null,\n                      droptarget: null\n                  };\n      \n                  //function for selecting an item\n                  function addSelection(item) {\n                      //console.log('addSelection')\n                      //if the owner reference is still null, set it to this item's parent\n                      //so that further selection is only allowed within the same container\n                      if (!selections.owner) {\n                          selections.owner = item.parentNode;\n                      }\n      \n                      //or if that's already happened then compare it with this item's parent\n                      //and if they're not the same container, return to prevent selection\n                      else if (selections.owner != item.parentNode) {\n                          return;\n                      }\n      \n                      //set this item's grabbed state\n                      item.setAttribute('aria-grabbed', 'true');\n      \n                      //add it to the items array\n                      selections.items.push(item);\n                  }\n      \n                  //function for unselecting an item\n                  function removeSelection(item) {\n                      //console.log('removeSelection')\n                      //reset this item's grabbed state\n                      item.setAttribute('aria-grabbed', 'false');\n      \n                      //then find and remove this item from the existing items array\n                      for (var len = selections.items.length, i = 0; i < len; i++) {\n                          if (selections.items[i] == item) {\n                              selections.items.splice(i, 1);\n                              break;\n                          }\n                      }\n                  }\n      \n                  //function for resetting all selections\n                  function clearSelections() {\n                      // //console.log('clearSelections')\n                      //if we have any selected items\n                      if (selections.items.length) {\n                          //reset the owner reference\n                          selections.owner = null;\n      \n                          //reset the grabbed state on every selected item\n                          for (var len = selections.items.length, i = 0; i < len; i++) {\n                              selections.items[i].setAttribute('aria-grabbed', 'false');\n                          }\n      \n                          //then reset the items array        \n                          selections.items = [];\n                      }\n                  }\n      \n                  //shorctut function for testing whether a selection modifier is pressed\n                  function hasModifier(e) {\n                      //console.log('hasModifier')\n                      return (e.ctrlKey || e.metaKey || e.shiftKey);\n                  }\n      \n      \n                  //function for applying dropeffect to the target containers\n                  function addDropeffects() {\n                      //console.log('addDropeffects')\n                      //apply aria-dropeffect and tabindex to all targets apart from the owner\n                      for (var len = targets.length, i = 0; i < len; i++) {\n                          if (\n                              targets[i] != selections.owner &&\n                              targets[i].getAttribute('aria-dropeffect') == 'none'\n                          ) {\n                              targets[i].setAttribute('aria-dropeffect', 'move');\n                              targets[i].setAttribute('tabindex', '0');\n                          }\n                      }\n      \n                      //remove aria-grabbed and tabindex from all items inside those containers\n                      for (var len = items.length, i = 0; i < len; i++) {\n                          if (\n                              items[i].parentNode != selections.owner &&\n                              items[i].getAttribute('aria-grabbed')\n                          ) {\n                              items[i].removeAttribute('aria-grabbed');\n                              items[i].removeAttribute('tabindex');\n                          }\n                      }\n                  }\n      \n                  //function for removing dropeffect from the target containers\n                  function clearDropeffects() {\n                      //console.log('clearDropeffects')\n                      //if we have any selected items\n                      if (selections.items.length) {\n                          //reset aria-dropeffect and remove tabindex from all targets\n                          for (var len = targets.length, i = 0; i < len; i++) {\n                              if (targets[i].getAttribute('aria-dropeffect') != 'none') {\n                                  targets[i].setAttribute('aria-dropeffect', 'none');\n                                  targets[i].removeAttribute('tabindex');\n                              }\n                          }\n      \n                          //restore aria-grabbed and tabindex to all selectable items \n                          //without changing the grabbed value of any existing selected items\n                          for (var len = items.length, i = 0; i < len; i++) {\n                              if (!items[i].getAttribute('aria-grabbed')) {\n                                  items[i].setAttribute('aria-grabbed', 'false');\n                                  items[i].setAttribute('tabindex', '0');\n                              } else if (items[i].getAttribute('aria-grabbed') == 'true') {\n                                  items[i].setAttribute('tabindex', '0');\n                              }\n                          }\n                      }\n                  }\n      \n                  //shortcut function for identifying an event element's target container\n                  function getContainer(element) {\n                      //console.log('getContainer')\n                      do {\n                          if (element.nodeType == 1 && element.getAttribute('aria-dropeffect')) {\n                              return element;\n                          }\n                      }\n                      while (element = element.parentNode);\n      \n                      return null;\n                  }\n      \n      \n      \n                  //mousedown event to implement single selection\n                  document.getElementById('dragAndDropContent').addEventListener('mousedown', function(e) {\n                      //if the element is a draggable item\n                      if (e.target.getAttribute('draggable')) {\n                          //console.log('MOUSEDOWN!')\n                          //clear dropeffect from the target containers\n                          clearDropeffects();\n      \n                          //if the multiple selection modifier is not pressed \n                          //and the item's grabbed state is currently false\n                          if (!hasModifier(e) &&\n                              e.target.getAttribute('aria-grabbed') == 'false'\n                          ) {\n                              //clear all existing selections\n                              clearSelections();\n      \n                              //then add this new selection\n                              addSelection(e.target);\n                          }\n                      }\n      \n                      //else [if the element is anything else]\n                      //and the selection modifier is not pressed \n                      else if (!hasModifier(e)) {\n                          //clear dropeffect from the target containers\n                          clearDropeffects();\n      \n                          //clear all existing selections\n                          clearSelections();\n                      }\n      \n                      //else [if the element is anything else and the modifier is pressed]\n                      else {\n                          //clear dropeffect from the target containers\n                          clearDropeffects();\n                      }\n      \n                  }, false);\n      \n                  //mouseup event to implement multiple selection\n                  document.getElementById('dragAndDropContent').addEventListener('mouseup', function(e) {\n                      //if the element is a draggable item \n                      //and the multipler selection modifier is pressed\n                      if (e.target.getAttribute('draggable') && hasModifier(e)) {\n                          //if the item's grabbed state is currently true\n                          if (e.target.getAttribute('aria-grabbed') == 'true') {\n                              //unselect this item\n                              removeSelection(e.target);\n      \n                              //if that was the only selected item\n                              //then reset the owner container reference\n                              if (!selections.items.length) {\n                                  selections.owner = null;\n                              }\n                          }\n      \n                          //else [if the item's grabbed state is false]\n                          else {\n                              //add this additional selection\n                              addSelection(e.target);\n                          }\n                      }\n      \n                  }, false);\n      \n                  //dragstart event to initiate mouse dragging\n                  document.getElementById('dragAndDropContent').addEventListener('dragstart', function(e) {\n                      //if the element's parent is not the owner, then block this event\n                      if (selections.owner != e.target.parentNode) {\n                          e.preventDefault();\n                          return;\n                      }\n      \n                      //[else] if the multiple selection modifier is pressed \n                      //and the item's grabbed state is currently false\n                      if (\n                          hasModifier(e) &&\n                          e.target.getAttribute('aria-grabbed') == 'false'\n                      ) {\n                          //add this additional selection\n                          addSelection(e.target);\n                      }\n      \n                      //we don't need the transfer data, but we have to define something\n                      //otherwise the drop action won't work at all in firefox\n                      //most browsers support the proper mime-type syntax, eg. \"text/plain\"\n                      //but we have to use this incorrect syntax for the benefit of IE10+\n                      e.dataTransfer.setData('text', '');\n      \n                      //apply dropeffect to the target containers\n                      addDropeffects();\n      \n                  }, false);\n      \n      \n      \n                  //keydown event to implement selection and abort\n                  document.getElementById('dragAndDropContent').addEventListener('keydown', function(e) {\n                      //if the element is a grabbable item \n                      if (e.target.getAttribute('aria-grabbed')) {\n                          //Space is the selection or unselection keystroke\n                          if (e.keyCode == 32) {\n                              //if the multiple selection modifier is pressed \n                              if (hasModifier(e)) {\n                                  //if the item's grabbed state is currently true\n                                  if (e.target.getAttribute('aria-grabbed') == 'true') {\n                                      //if this is the only selected item, clear dropeffect \n                                      //from the target containers, which we must do first\n                                      //in case subsequent unselection sets owner to null\n                                      if (selections.items.length == 1) {\n                                          clearDropeffects();\n                                      }\n      \n                                      //unselect this item\n                                      removeSelection(e.target);\n      \n                                      //if we have any selections\n                                      //apply dropeffect to the target containers, \n                                      //in case earlier selections were made by mouse\n                                      if (selections.items.length) {\n                                          addDropeffects();\n                                      }\n      \n                                      //if that was the only selected item\n                                      //then reset the owner container reference\n                                      if (!selections.items.length) {\n                                          selections.owner = null;\n                                      }\n                                  }\n      \n                                  //else [if its grabbed state is currently false]\n                                  else {\n                                      //add this additional selection\n                                      addSelection(e.target);\n      \n                                      //apply dropeffect to the target containers    \n                                      addDropeffects();\n                                  }\n                              }\n      \n                              //else [if the multiple selection modifier is not pressed]\n                              //and the item's grabbed state is currently false\n                              else if (e.target.getAttribute('aria-grabbed') == 'false') {\n                                  //clear dropeffect from the target containers\n                                  clearDropeffects();\n      \n                                  //clear all existing selections\n                                  clearSelections();\n      \n                                  //add this new selection\n                                  addSelection(e.target);\n      \n                                  //apply dropeffect to the target containers\n                                  addDropeffects();\n                              }\n      \n                              //else [if modifier is not pressed and grabbed is already true]\n                              else {\n                                  //apply dropeffect to the target containers    \n                                  addDropeffects();\n                              }\n      \n                              //then prevent default to avoid any conflict with native actions\n                              e.preventDefault();\n                          }\n      \n                          //Modifier + M is the end-of-selection keystroke\n                          if (e.keyCode == 77 && hasModifier(e)) {\n                              //if we have any selected items\n                              if (selections.items.length) {\n                                  //apply dropeffect to the target containers    \n                                  //in case earlier selections were made by mouse\n                                  addDropeffects();\n      \n                                  //if the owner container is the last one, focus the first one\n                                  if (selections.owner == targets[targets.length - 1]) {\n                                      targets[0].focus();\n                                  }\n      \n                                  //else [if it's not the last one], find and focus the next one\n                                  else {\n                                      for (var len = targets.length, i = 0; i < len; i++) {\n                                          if (selections.owner == targets[i]) {\n                                              targets[i + 1].focus();\n                                              break;\n                                          }\n                                      }\n                                  }\n                              }\n      \n                              //then prevent default to avoid any conflict with native actions\n                              e.preventDefault();\n                          }\n                      }\n      \n                      //Escape is the abort keystroke (for any target element)\n                      if (e.keyCode == 27) {\n                          //if we have any selected items\n                          if (selections.items.length) {\n                              //clear dropeffect from the target containers\n                              clearDropeffects();\n      \n                              //then set focus back on the last item that was selected, which is \n                              //necessary because we've removed tabindex from the current focus\n                              selections.items[selections.items.length - 1].focus();\n      \n                              //clear all existing selections\n                              clearSelections();\n      \n                              //but don't prevent default so that native actions can still occur\n                          }\n                      }\n      \n                  }, false);\n      \n      \n      \n                  //related variable is needed to maintain a reference to the \n                  //dragleave's relatedTarget, since it doesn't have e.relatedTarget\n                  var related = null;\n      \n                  //dragenter event to set that variable\n                  document.getElementById('dragAndDropContent').addEventListener('dragenter', function(e) {\n                      related = e.target;\n      \n                  }, false);\n      \n                  //dragleave event to maintain target highlighting using that variable\n                  document.getElementById('dragAndDropContent').addEventListener('dragleave', function(e) {\n                      //get a drop target reference from the relatedTarget\n                      var droptarget = getContainer(related);\n      \n                      //if the target is the owner then it's not a valid drop target\n                      if (droptarget == selections.owner) {\n                          droptarget = null;\n                      }\n      \n                      //if the drop target is different from the last stored reference\n                      //(or we have one of those references but not the other one)\n                      if (droptarget != selections.droptarget) {\n                          //if we have a saved reference, clear its existing dragover class\n                          if (selections.droptarget) {\n                              selections.droptarget.className =\n                                  selections.droptarget.className.replace(/ dragover/g, '');\n                          }\n      \n                          //apply the dragover class to the new drop target reference\n                          if (droptarget) {\n                              droptarget.className += ' dragover';\n                          }\n      \n                          //then save that reference for next time\n                          selections.droptarget = droptarget;\n                      }\n      \n                  }, false);\n      \n                  //dragover event to allow the drag by preventing its default\n                  document.getElementById('dragAndDropContent').addEventListener('dragover', function(e) {\n                      //if we have any selected items, allow them to be dragged\n                      if (selections.items.length) {\n                          e.preventDefault();\n                      }\n      \n                  }, false);\n      \n      \n      \n                  //dragend event to implement items being validly dropped into targets,\n                  //or invalidly dropped elsewhere, and to clean-up the interface either way\n                  document.getElementById('dragAndDropContent').addEventListener('dragend', function(e) {\n                      //if we have a valid drop target reference\n                      //(which implies that we have some selected items)\n                      if (selections.droptarget) {\n                          //append the selected items to the end of the target container\n                          for (var len = selections.items.length, i = 0; i < len; i++) {\n                              selections.droptarget.appendChild(selections.items[i]);\n                          }\n      \n                          //prevent default to allow the action            \n                          e.preventDefault();\n                      }\n      \n                      //if we have any selected items\n                      if (selections.items.length) {\n                          //clear dropeffect from the target containers\n                          clearDropeffects();\n      \n                          //if we have a valid drop target reference\n                          if (selections.droptarget) {\n                              //reset the selections array\n                              clearSelections();\n      \n                              //reset the target's dragover class\n                              selections.droptarget.className =\n                                  selections.droptarget.className.replace(/ dragover/g, '');\n      \n                              //reset the target reference\n                              selections.droptarget = null;\n                          }\n                      }\n      \n                  }, false);\n      \n      \n      \n                  //keydown event to implement items being dropped into targets\n                  document.getElementById('dragAndDropContent').addEventListener('keydown', function(e) {\n                      //if the element is a drop target container\n                      if (e.target.getAttribute('aria-dropeffect')) {\n                          //Enter or Modifier + M is the drop keystroke\n                          if (e.keyCode == 13 || (e.keyCode == 77 && hasModifier(e))) {\n                              //append the selected items to the end of the target container\n                              for (var len = selections.items.length, i = 0; i < len; i++) {\n                                  e.target.appendChild(selections.items[i]);\n                              }\n      \n                              //clear dropeffect from the target containers\n                              clearDropeffects();\n      \n                              //then set focus back on the last item that was selected, which is \n                              //necessary because we've removed tabindex from the current focus\n                              selections.items[selections.items.length - 1].focus();\n      \n                              //reset the selections array\n                              clearSelections();\n      \n                              //prevent default to to avoid any conflict with native actions\n                              e.preventDefault();\n                          }\n                      }\n      \n                  }, false);\n      \n              } catch (error) {\n                  console.log('WE GOT ERROR HERE!!! => ', error)\n              }\n      \n          }\n      });");
                script_1.appendChild(script_text);
                if (script_1.readyState) { //IE
                    console.log('script.readyState =>', script_1.readyState);
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            console.log("script.readyState === \"loaded\" || script.readyState === \"complete\" =>", script_1.readyState === "loaded" || script_1.readyState === "complete");
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                var head = document.getElementsByTagName('head')[0];
                for (var _i = 0, _a = head.children; _i < _a.length; _i++) {
                    var c = _a[_i];
                    if (c.id == "dragngdrop_logic") {
                        console.log("resintalling the script!");
                        head.removeChild(c);
                        console.log("parent.children after deleting child =>>>>", head.children);
                        location.reload();
                        // console.log("child after deleting from paretn =>>>", c)
                    }
                }
                head.appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    };
    DynamicScriptLoaderServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicScriptLoaderServiceService);
    return DynamicScriptLoaderServiceService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-main {\n    width: 80%;\n    margin: 0px auto;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: baseline;\n    align-content: center;\n}\n\n.home-category {\n    min-width: 250px;\n    width: 250px;\n    max-width: 280px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    margin: 15px 15px;\n    background: rgba(255, 255, 255, 0.3);\n    transition: 0.5s;\n    color: #716c6c;\n}\n\n.home-category:hover {\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2)\n}\n\n.home-category-element .btn {\n    white-space: normal !important;\n    word-wrap: break-word;\n    display: inline-block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.home-category-title {\n    max-width: 250px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    font-weight: normal;\n}\n\n.home-category-element {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element-inner-box {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n}\n\n.home-category-element a {\n    width: 100%\n}\n\n.home-category-element-inner-box a {\n    width: 50%;\n    border-radius: 0px;\n}\n\n.home-category-element button {\n    width: 100%;\n    border: none;\n    border-radius: 0px;\n}\n\n/* .home-category-element-hover {\n    background: linear-gradient(to right, #fbfbfb, #fbfbfb);\n    transition: all 0.3s\n}\n\n.home-category-element-hover:hover {\n    background: linear-gradient(to right, #fbfbfb, #c6c6c6)\n} */\n\n.home-category-element-hover {\n    position: relative;\n    background-image: linear-gradient( to right, #fbfbfb, #fbfbfb);\n    z-index: 1;\n}\n\n.home-category-element-hover::before {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-image: linear-gradient( to right, #fbfbfb, #c6c6c6);\n    z-index: -1;\n    transition: opacity 0.5s linear;\n    opacity: 0;\n}\n\n.home-category-element-hover:hover::before {\n    opacity: 1;\n}\n\n.cards-main{\n    margin:10px auto;\n    width: 80%;\n    max-width: 1266px;\n}\n\n.card-category{\n    border: none;\n    border-radius: 0px;\n    margin: 25px 15px;\n    background: rgba(255, 255, 255, 0.4);\n    transition: 0.8s;\n    color: #716c6c;\n    box-shadow: 1px 2px 10px #3534340f;\n    margin-bottom: 30px !important;\n}\n\n.card-category:hover{\n    color: black;\n    background: rgba(255, 255, 255, 0.8);\n    box-shadow: 8px 8px 15px rgba(4, 0, 0, 0.2);\n}\n\n.card-body{\n    padding: 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEM7QUFDSjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBR0E7Ozs7Ozs7R0FPRzs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQiw4REFBOEQ7SUFDOUQsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsOERBQThEO0lBQzlELFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG9DQUFvQztJQUNwQywyQ0FBMkM7QUFDL0M7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLW1haW4ge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5IHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMTVweCAxNXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIGNvbG9yOiAjNzE2YzZjO1xufVxuXG4uaG9tZS1jYXRlZ29yeTpob3ZlciB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBib3gtc2hhZG93OiA4cHggOHB4IDE1cHggcmdiYSg0LCAwLCAwLCAwLjIpXG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQgLmJ0biB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaG9tZS1jYXRlZ29yeS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWlubmVyLWJveCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQgYSB7XG4gICAgd2lkdGg6IDEwMCVcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1pbm5lci1ib3ggYSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ob21lLWNhdGVnb3J5LWVsZW1lbnQgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5cbi8qIC5ob21lLWNhdGVnb3J5LWVsZW1lbnQtaG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZiZmJmYiwgI2ZiZmJmYik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3Ncbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3Zlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmJmYmZiLCAjYzZjNmM2KVxufSAqL1xuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgI2ZiZmJmYiwgI2ZiZmJmYik7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmhvbWUtY2F0ZWdvcnktZWxlbWVudC1ob3Zlcjo6YmVmb3JlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCB0byByaWdodCwgI2ZiZmJmYiwgI2M2YzZjNik7XG4gICAgei1pbmRleDogLTE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uaG9tZS1jYXRlZ29yeS1lbGVtZW50LWhvdmVyOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJkcy1tYWlue1xuICAgIG1hcmdpbjoxMHB4IGF1dG87XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDEyNjZweDtcbn1cblxuLmNhcmQtY2F0ZWdvcnl7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDI1cHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgdHJhbnNpdGlvbjogMC44cztcbiAgICBjb2xvcjogIzcxNmM2YztcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggIzM1MzQzNDBmO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLWNhdGVnb3J5OmhvdmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm94LXNoYWRvdzogOHB4IDhweCAxNXB4IHJnYmEoNCwgMCwgMCwgMC4yKTtcbn1cbi5jYXJkLWJvZHl7XG4gICAgcGFkZGluZzogMHB4IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n    <div class=\"quiz-selection element-animation-fadeIn\"\n        style=\"background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important;\"\n        align=\"center\" id=\"quiz_selection\">\n        <div *ngIf='ready_bool'>\n            <div *ngIf=\"!cats_n_tops_bool\"\n                style='height: 25%; justify-content: center; display: flex; flex-direction: column; flex-wrap: wrap;'>\n                <h1 style=\"margin-top:200px;\">You have no permission to take any quiz...yet.</h1>\n                <h2>Please contact the training team if you feel this is an error.</h2>\n            </div>\n            <div *ngIf=\"cats_n_tops && cats_n_tops_bool\">\n                <div\n                    style='height: 10%; justify-content: center; display: flex; flex-direction: column; flex-wrap: wrap;'>\n                    <h1>Please select the test you would like to take</h1>\n\n                </div>\n                <!--  -->\n                <div class=\"card-columns cards-main\" *ngIf=\"categories_length>1\">\n                    <div class=\"card card-category\" *ngFor=\"let c of cats_n_tops | keyvalue \">\n                        <div class=\"card-header text-center bg-dark text-white\">\n                            <h3>{{c.key}}</h3>\n                        </div>\n                        <div *ngFor=\"let t of c.value | keyvalue \" class=\"home-category-element \">\n                            <a>\n                                <button class='btn btn-lg' [routerLink]=\"[t.value.link]\"\n                                    [disabled]=\"t.value['topic_status'] == 2\" [ngClass]=\"{\n                                     'btn-outline-secondary': t.value['topic_status'] == 0, \n                                     'btn-danger': t.value['topic_status'] == 1, \n                                     'btn-success': t.value['topic_status'] == 2\n                                 }\">{{t.value.topic}}\n                                    <span *ngIf=\"t.value['topic_status'] == 2\">(completed)</span>\n                                    <span *ngIf=\"t.value['topic_status'] == 1\">(continue)</span>\n                                </button>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n\n                <!--  -->\n                <div class=\"home-main\" *ngIf=\"categories_length == 1\">\n                    <div class=\"home-category\" *ngFor=\"let c of cats_n_tops | keyvalue\">\n                        <div class=\"home-category-title bg-dark text-white\" style=\"width: 100%; padding: 5px 0px;\">\n                            <h2>{{c.key}}</h2>\n                        </div>\n                        <div *ngFor=\"let t of c.value | keyvalue\" class=\"home-category-element\">\n                            <a>\n                                <button class='btn btn-lg' [routerLink]=\"[t.value.link]\"\n                                    [disabled]=\"t.value['topic_status'] == 2\" [ngClass]=\"{\n                                     'btn-outline-secondary': t.value['topic_status'] == 0, \n                                     'btn-danger': t.value['topic_status'] == 1, \n                                     'btn-success': t.value['topic_status'] == 2, \n                                     'btn-outline-success-hover-side-shadow': t.value['topic_status'] == 2\n                                 }\">{{t.value.topic}} <span\n                                        *ngIf=\"t.value['topic_status'] == 2\">(completed)</span></button>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!ready_bool\">\n            <h1>loading...</h1>\n        </div>\n    </div>\n    <!-- [style.background]=\"current_eng && current_eng.background ? 'url('+current_eng.background+')' : 'url(/assets/background.png)'\" -->\n    <div\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                                flex-direction: column;\n                                                                flex-wrap: nowrap;\n                                                                justify-content: center;\n                                                                align-items: center;\n                                                                align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../object_validation.js */ "./src/app/object_validation.js");
/* harmony import */ var _object_validation_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_object_validation_js__WEBPACK_IMPORTED_MODULE_5__);






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_ConnectorService, location, _route, _r) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this.location = location;
        this._route = _route;
        this._r = _r;
        this.ready_bool = false;
        this.categories_length = 0;
        this.currentUser = null;
        this.currentEng = null;
        this.engagements = null;
        this.currentEng_id = null;
        this.cats_n_tops_array = [];
        this._route.paramMap.subscribe(function (params) {
            if (_this.currentEng_id != params.get('eng')) {
                // console.log("Switching")
                _this.currentEng_id = params.get('eng');
                // console.log("current engagement =>", this.currentEng_id)
                _this.getEngagementByEngId(_this.currentEng_id);
                if (params.get('eng')) {
                    if (_this.engagements) {
                        // console.log("are you trying to renavigate to another engagement?")
                        // this.changeCurEng("this._route.paramMap.subscribe(params => {");
                        _this.filter_categories_and_topics_by_eng_id(_this.cats_n_tops_raw);
                    }
                }
            }
        });
        this._ConnectorService.user.subscribe(function (user) {
            _this.currentUser = user;
            if (user) {
                _this.getAllCategoriesAndTopicsByProfileId(user.profile_id);
            }
        });
        this._ConnectorService.engagements.subscribe(function (engs) {
            _this.engagements = engs;
            // if(engs){
            //   // console.log("========engs =>",engs)
            //   this.changeCurEng("this._ConnectorService.engagements.subscribe(engs =>");
            // }
        });
        this._ConnectorService.currentEng.subscribe(function (eng) {
            if (eng) {
                _this.currentEng = eng;
            }
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.changeCurEng = function (source) {
        var eng_exists_bool = false;
        for (var el in this.engagements) {
            if (this.engagements[el]['engagement_id'] == this.currentEng_id) {
                var obj = {
                    currentEng: this.engagements[el]
                };
                this._ConnectorService.setMainInfo(obj);
                eng_exists_bool = true;
            }
        }
        if (!eng_exists_bool) {
            this._r.navigateByUrl('/oops');
            this._ConnectorService.logEvent("such engagement doesn\tt exist", "ERROR", "home.component", "getEngagementByEngId");
        }
    };
    HomeComponent.prototype.getAllCategoriesAndTopicsByProfileId = function (profile_id) {
        var _this = this;
        this._ConnectorService.getAllCategoriesAndTopicsByProfileId(profile_id).then(function (data) {
            // console.log("getAllCategoriesAndTopicsByProfileId DATA =>", data)
            _this.cats_n_tops_raw = data;
            _this.filter_categories_and_topics_by_eng_id(_this.cats_n_tops_raw);
        }).catch(function (error) {
            this._ConnectorService.logEvent(error, "ERROR", "home.component", "getAllCategoriesAndTopicsByProfileId");
        });
    };
    HomeComponent.prototype.getEngagementByEngId = function (currentEng_id) {
        var _this = this;
        this._ConnectorService.getEngagementByEngId(currentEng_id).then(function (data) {
            if (data) {
                console.log("ENGAGEMENT WAS UPDATED");
                _this._ConnectorService.setMainInfo({ currentEng: currentEng_id });
                if (data[0]['background']) {
                    // console.log("background!!!")
                    // console.log()
                    document.getElementById('quiz_selection').style.background = null;
                }
                else {
                    // console.log("no background!")
                }
            }
            _this.current_eng = data[0];
        }).catch(function (error) {
            this._ConnectorService.logEvent(error, "ERROR", "home.component", "getEngagementByEngId");
        });
    };
    HomeComponent.prototype.filter_categories_and_topics_by_eng_id = function (data) {
        this.cats_n_tops = [];
        for (var el in data) {
            if (data[el]['engagement_id'] == this.currentEng_id) {
                data[el]['link'] = "/" + this.currentEng_id + "/topic/" + data[el]['topic_id'] + "/user/" + this.currentUser.email + "/quiz/1/question/1";
                if (data[el]['topic_status'] == 1) {
                    data[el]['class'] = "btn btn-outline-danger btn-lg";
                }
                else if (data[el]['topic_status'] == 2) {
                    data[el]['class'] = "btn btn-outline-success btn-lg";
                }
                else {
                    data[el]['class'] = "btn btn-outline-secondary btn-lg";
                }
                this.cats_n_tops.push(data[el]);
            }
        }
        if (Object.keys(this.cats_n_tops).length < 1) {
            this.cats_n_tops_bool = false;
            this.ready_bool = true;
            return;
        }
        else {
            this.cats_n_tops_bool = true;
        }
        // console.log(this.cats_n_tops)
        this.cats_n_tops = Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_5__["groupByKey"])(Object(_object_validation_js__WEBPACK_IMPORTED_MODULE_5__["unescapingObj"])(this.cats_n_tops), 'category', 'topic_id');
        for (var c in this.cats_n_tops) {
            this.cats_n_tops_array[c] = [];
            for (var t in this.cats_n_tops[c]) {
                this.cats_n_tops_array[c].push(this.cats_n_tops[c][t]);
            }
        }
        this.categories_length = Object.keys(this.cats_n_tops).length;
        // console.log(this.cats_n_tops_array)
        this.ready_bool = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#index_wrapper {\n    /* background: #212528; */\n    height: 100%;\n    width: 100%;\n    background: #212528;\n    /* background-image: linear-gradient(to bottom, #212528 0%, rgba(33, 37, 40, 0.9) 10%,rgba(33, 37, 40, 0.8) 20%, rgba(33, 37, 40, 0.7) 30%, rgba(33, 37, 40, 0.6) 40%,rgba(33, 37, 40, 0.5) 50%, rgba(33, 37, 40, 0.4) 60%, rgba(33, 37, 40, 0.3) 70%, rgba(33, 37, 40, 0.2) 80%, rgba(33, 37, 40, 0.1) 90%, rgba(33, 37, 40, 0.0) 100%) */\n}\n\n\n.footer__btn {\n    color: #343945;\n    float: left;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    line-height: 35px;\n    margin-top: 20px;\n    position: relative;\n    text-decoration:none;\n    text-align: center;\n}\n\n\n.footer__btn>span {\n    color: #c6c9cc;\n    cursor: pointer;\n    pointer-events: none;\n    position: relative;\n    transition: color .6s ease;\n    z-index: 5;\n}\n\n\n.footer__btn-line {\n    bottom: -5px;\n    cursor: pointer;\n    height: 1px;\n    left: 0;\n    pointer-events: none;\n    position: absolute;\n    transition: -webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1), -webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1),-webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    width: 100%;\n}\n\n\n.footer__btn-line-inner {\n    background-color: white;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform-origin: bottom center;\n    transform-origin: bottom center;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n\n\n.footer__btn:after {\n    background-color: #000;\n    bottom: -5px;\n    content: \"\";\n    height: 160%;\n    left: 0;\n    position: absolute;\n    -webkit-transform: scaleX(1.25) scaleY(0);\n    transform: scaleX(1.25) scaleY(0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n\n\n.footer__btn:hover .footer__btn-line-inner, .footer__btn[data-trigger-animation=true] .footer__btn-line-inner {\n    -webkit-transform: scaleY(48);\n    transform: scaleY(48);\n    color:#000;\n}\n\n\n.footer__btn:hover .footer__btn-line, .footer__btn[data-trigger-animation=true] .footer__btn-line {\n    -webkit-transform: scaleX(1.4);\n    transform: scaleX(1.4);\n}\n\n\n.footer__btn:hover>span, .footer__btn[data-trigger-animation=true]>span {\n    color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQiwwVUFBMFU7QUFDOVU7OztBQUdBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLCtEQUErRDtJQUMvRCx1REFBdUQ7SUFBdkQsNEdBQXVEO0lBQ3ZELDJHQUEyRztJQUMzRyxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFBbkQsb0dBQW1EO0lBQ25ELG1HQUFtRztJQUNuRyxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGlDQUFpQztJQUNqQyx1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFBbkQsb0dBQW1EO0lBQ25ELG1HQUFtRztJQUNuRyxXQUFXO0FBQ2Y7OztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7O0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2luZGV4X3dyYXBwZXIge1xuICAgIC8qIGJhY2tncm91bmQ6ICMyMTI1Mjg7ICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMyMTI1Mjg7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzIxMjUyOCAwJSwgcmdiYSgzMywgMzcsIDQwLCAwLjkpIDEwJSxyZ2JhKDMzLCAzNywgNDAsIDAuOCkgMjAlLCByZ2JhKDMzLCAzNywgNDAsIDAuNykgMzAlLCByZ2JhKDMzLCAzNywgNDAsIDAuNikgNDAlLHJnYmEoMzMsIDM3LCA0MCwgMC41KSA1MCUsIHJnYmEoMzMsIDM3LCA0MCwgMC40KSA2MCUsIHJnYmEoMzMsIDM3LCA0MCwgMC4zKSA3MCUsIHJnYmEoMzMsIDM3LCA0MCwgMC4yKSA4MCUsIHJnYmEoMzMsIDM3LCA0MCwgMC4xKSA5MCUsIHJnYmEoMzMsIDM3LCA0MCwgMC4wKSAxMDAlKSAqL1xufVxuXG5cbi5mb290ZXJfX2J0biB7XG4gICAgY29sb3I6ICMzNDM5NDU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vdGVyX19idG4+c3BhbiB7XG4gICAgY29sb3I6ICNjNmM5Y2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNnMgZWFzZTtcbiAgICB6LWluZGV4OiA1O1xufVxuLmZvb3Rlcl9fYnRuLWxpbmUge1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGVmdDogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKSwtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19idG4tbGluZS1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpLC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlcl9fYnRuOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTYwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMjUpIHNjYWxlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjI1KSBzY2FsZVkoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKSwtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bjpob3ZlciAuZm9vdGVyX19idG4tbGluZS1pbm5lciwgLmZvb3Rlcl9fYnRuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWxpbmUtaW5uZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoNDgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDQ4KTtcbiAgICBjb2xvcjojMDAwO1xufVxuLmZvb3Rlcl9fYnRuOmhvdmVyIC5mb290ZXJfX2J0bi1saW5lLCAuZm9vdGVyX19idG5bZGF0YS10cmlnZ2VyLWFuaW1hdGlvbj10cnVlXSAuZm9vdGVyX19idG4tbGluZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjQpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuNCk7XG59XG4uZm9vdGVyX19idG46aG92ZXI+c3BhbiwgLmZvb3Rlcl9fYnRuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0+c3BhbiB7XG4gICAgY29sb3I6ICMwMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 1130px;\n            height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between;\n            background: #212528\n            \">\n\n    <div id=\"index_wrapper\">\n        <div class=\"quiz-selection element-animation-fadeIn\" align=\"center\" id=\"quiz_selection\"\n            style='background: none !important'>\n            <div *ngIf=\"!engagements\" style='height: 25%; justify-content: center; display: flex;\n                              flex-direction: column;\n                              flex-wrap: wrap;'>\n                <h1 style=\"margin-top:200px; color:#c6c9cc;\">You have no access to any engagement...yet. Please contact\n                    the training team if you feel this is an error.</h1>\n            </div>\n            <div *ngIf=\"engagements\">\n                <div\n                    style='height: 10%; margin-top: 150px; justify-content: center; display: flex; flex-direction: column; flex-wrap: wrap;'>\n                    <h1 style=\"color:#c6c9cc;\">Hello {{currentUser.first_name}}. Please select the engagement you would\n                        like to work today with</h1>\n                </div>\n                <div class=\"homeCategories\">\n\n                    <div *ngFor=\"let e of engagements\" class=\"listCategory\">\n                        <section class=\"footer__col footer__col--next\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12 h-100 d-flex align-item-center justify-content-center\">\n                                    <a [routerLink]=\"['/' + e.engagement_id + '/home']\" class=\"footer__btn\"\n                                        data-footer-link=\"2\" style=\"width: auto; font-size: 25px; \">\n                                        <span>{{e.engagement_name}}</span>\n                                        <div class=\"footer__btn-line\">\n                                            <div class=\"footer__btn-line-inner\"></div>\n                                        </div>\n                                    </a>\n                                </div>\n                            </div>\n                        </section>\n                        <!-- <button  class='btn btn-lg btn-index dropbtn'></button> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"currentEng\"\n        style=\"background: linear-gradient(to bottom, rgba(33, 37, 39, 1), rgba(33, 37, 39, 0.7), rgba(33, 37, 39, 0.3)), url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                    flex-direction: column;\n                                    flex-wrap: nowrap;\n                                    justify-content: center;\n                                    align-items: center;\n                                    align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../connector.service */ "./src/app/connector.service.ts");



var IndexComponent = /** @class */ (function () {
    function IndexComponent(_c) {
        var _this = this;
        this._c = _c;
        this._c.user.subscribe(function (user) { return _this.currentUser = user; });
        this._c.engagements.subscribe(function (engs) {
            _this.engagements = engs;
            // console.log(engs)
        });
        this._c.currentEng.subscribe(function (currentEng) {
            _this.currentEng = currentEng;
            // console.log(engs)
        });
    }
    // getAvailableEngagements(profile_id){
    //   this._c.getAvailableEngagements(profile_id).then(data =>{
    //     this.engagements = this.objToToArray(data);
    //     let obj = {
    //       'currentUser':this.user,
    //       'engagements': this.engagements,
    //     }
    //     console.log("OBJ =>",obj)
    //     this._c.setMainInfo(obj)
    //   }).catch(function(error) {
    //   });
    // }
    IndexComponent.prototype.ngOnInit = function () {
        // console.log("current user at index.comp =>", this.currentUser)
        if (!this.currentUser) {
            // console.log("Seems like the Coonector")
            if (localStorage['user']) {
                var user = JSON.parse(localStorage['user']);
                // console.log("user to store =>", user)
                // this._c.storeUser(user).then(res => {
                //   this.currentUser = res;
                // }).catch(function(error){
                //   console.log("error =>", error)
                // })
                // console.log(this.engagements)
            }
        }
        else {
        }
        // console.log("=====")
        //   console.log(document.getElementById("navigation"))
        //   document.getElementById("navigation").style.background = null
        //   document.getElementById("body").style.background = "#212528";
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_2__["ConnectorService"]])
    ], IndexComponent);
    return IndexComponent;
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

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-page {padding: 40px 15px;text-align: center;}\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }\nh1.error {    font-size :400px !important; color: grey;     text-shadow: 10px 7px 18px silver; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO0FBQ25ELGdCQUFnQixlQUFlLENBQUMsa0JBQWtCLENBQUM7QUFDbkQsc0JBQXNCLGlCQUFpQixFQUFFO0FBQ3pDLGNBQWMsMkJBQTJCLEVBQUUsV0FBVyxNQUFNLGlDQUFpQyxFQUFFIiwiZmlsZSI6InNyYy9hcHAvbm90Zm91bmQvbm90Zm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1wYWdlIHtwYWRkaW5nOiA0MHB4IDE1cHg7dGV4dC1hbGlnbjogY2VudGVyO31cbi5lcnJvci1hY3Rpb25zIHttYXJnaW4tdG9wOjE1cHg7bWFyZ2luLWJvdHRvbToxNXB4O31cbi5lcnJvci1hY3Rpb25zIC5idG4geyBtYXJnaW4tcmlnaHQ6MTBweDsgfVxuaDEuZXJyb3IgeyAgICBmb250LXNpemUgOjQwMHB4ICFpbXBvcnRhbnQ7IGNvbG9yOiBncmV5OyAgICAgdGV4dC1zaGFkb3c6IDEwcHggN3B4IDE4cHggc2lsdmVyOyB9Il19 */"

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 95vh; \ndisplay: flex;\nflex-direction: column;\nflex-wrap: nowrap;\njustify-content: space-between;\nalign-items: center;\nalign-content: space-between;\nbackground: #e5e7da\">\n\n    <div class=\"error-page element-animation-fadeIn\">\n        <h2>Oops!</h2>\n        <h1 class=\"error\"> 404 </h1>\n        <h2>Not Found</h2>\n        <div class=\"error-details\">\n            Sorry, an error has occured. Requested page not found!\n        </div>\n\n\n\n        <div class=\"error-actions\">\n            <a href=\"/\" class=\"btn btn-info btn-bp btn-lg btn-action-borderless shadow\"><span\n                    class=\"glyphicon glyphicon-home\"></span>Take Me Home </a>\n            <a href='mailto:kjenson@bpcs.com?subject=Question regarding Knowledge Assessment&cc=btugutov@bpcs.com'\n                class=\"btn btn-lg btn-warning shadow btn-action-borderless\"><span\n                    class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n        </div>\n    </div>\n    <div *ngIf=\"currentEng\"\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                flex-direction: column;\n                                                flex-wrap: nowrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");



var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent(_ConnectorService) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_2__["ConnectorService"]])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/object_validation.js":
/*!**************************************!*\
  !*** ./src/app/object_validation.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Promise = __webpack_require__(/*! promise */ "./node_modules/promise/index.js");

function log_event(logLevel, event, functionName, event_time) {
    // private function to escape strings
    function mysql_real_escape_string(str) {
        try {
            str = String(str)
            return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "'":
                        return "''";
                    case "\"":
                    case "\\":
                    case "%":
                        return "\\" + char; // prepends a backslash to backslash, percent,
                        // and double/single quotes
                }
            });
        } catch (error) {
            throw error;
        }
    }

    let stringEscaped
        // don't pass in an escaped string into the log function. You must either unescape it or give other information to help
        // the mysql_real_escape_string() function does not work with escaped strings. It does not like the unicode.    
    try {
        stringEscaped = mysql_real_escape_string(event);
    } catch (error) {
        stringEscaped = event;
        // console.log('ERROR! CANNOT escape event string!');
        // console.log(error);
    }

    if (event_time == undefined) {
        event_time = 'getdate()'
    } else {
        event_time = `'${event_time}'`
    }

    // this takes the incoming event and traces it back to where this function was called, then adds that line to the log table
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const callee = err.stack[0];
    Error.prepareStackTrace = orig;
    //return process.stdout.write(`${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: \n`);
    let line_number = path.relative(process.cwd(), callee.getFileName()) + ":" + callee.getLineNumber();

    let logValues = `'${logLevel}', '${stringEscaped}', 'Knowledge Assessment', '${functionName}', '${line_number}', ${event_time}`;
    dbLogWrite.log(logValues);
    // console.log(`${line_number} : ${event}`); // use non escaped string here in for log output. Otherwise string looks strange and hard to debug.
};

function format_quiz_table(object) {
    let functionName = 'format_quiz_table';
    try {
        let answersMap = {};

        // console.log('==============quiz.quizTable========================')
        for (let el in object) {
            // console.log('===========', el, '==========================');
            if (typeof(object[el]) === 'object') {
                if (!answersMap[object[el]['question_id']]) {
                    answersMap[object[el]['question_id']] = {};
                }
                answersMap[object[el]['question_id']][object[el]['answer_id']] = unescape(object[el]['answer_prompt'])
            }
        }
        // console.log(answersMap)
        // console.log('=================================================')
        //debugLog('here');
        //console.log(object)
        let keys = Object.keys(object);
        // console.log('========Object.keys(object)=========', keys)
        //console.log(keys)
        let answers = [];
        let correct = [];
        let questions = {};
        let dupes = {};
        let dupesCorrect = {};
        let dupesSoftDelete = {};
        let dupesAnswerSort = {};
        let dupesBucketList = {};
        //let dupesAnswerSort = {};
        let results = [];
        if (object !== 'null') {
            try {
                for (let i = 0; i < keys.length; i++) {
                    try {
                        questions['topic_soft_delete'] = object[0]['topic_soft_delete'];
                        questions['category'] = unescape(object[0]['category']);
                        questions['topic'] = unescape(object[0]['topic']);
                        questions['topic_id'] = object[0]['topic_id'];
                        questions['question_sort'] = object[0]['question_sort'];
                        // check to see if this object has engagement_id. if yes, add the engagement info to object
                        if (object[0]['engagement_id']) {
                            questions['engagement_id'] = object[0]['engagement_id'];
                            questions['engagement_name'] = object[0]['engagement_name'];
                        }
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        throw tryError;
                    }
                    //debugLog('here');
                    let next = i + 1;
                    //debugLog('here');
                    //next = next + 1;
                    //debugLog('here');
                    //console.log(object[keys[i]]['answer_id'])
                    // each answer_id is passed as array. 1 value at the beginning with 2 empty values following. Only select the [0] index for answer_id to prevent empty values
                    //let currentAns = object[keys[i]]['answer_id'][0];
                    let currentAns = object[keys[i]]['answer_id'];
                    //debugLog('here');
                    let currentPrompt = unescape(object[keys[i]]['answer_prompt']);
                    let currentCorrect = object[keys[i]]['correct'];
                    let currentDelete = object[keys[i]]['answer_soft_delete'];
                    let answer_sort = object[keys[i]]['answer_sort'];
                    let answer_bucket_id = object[keys[i]]['bucket_id'];

                    //debugLog('here');
                    //console.log(object[i]['question_id'])
                    let currentQuestion = object[i]['question_id'];
                    //let currentCorrect = object[i]['correct'];
                    //debugLog('here');
                    if (!questions.hasOwnProperty(currentQuestion)) {
                        try {
                            //debugLog('here');
                            dupes[currentAns] = currentPrompt;
                            //debugLog("here")
                            //console.log(currentCorrect)
                            dupesCorrect[currentAns] = currentCorrect;
                            dupesSoftDelete[currentAns] = currentDelete;
                            dupesAnswerSort[currentAns] = answer_sort;
                            dupesBucketList[currentAns] = answer_bucket_id;
                            if (next < keys.length) {
                                //debugLog('here');
                                // create an array of objects with answer_id as the key and answer_prompt as the value when there's a many to one relationship with question_id (Radial)
                                while (currentQuestion === object[next]['question_id']) {
                                    //currentAns = object[keys[next]]['answer_id'][0];
                                    currentAns = object[keys[next]]['answer_id'];
                                    dupes[currentAns] = unescape(object[next]['answer_prompt']);
                                    //console.log(object[next]['correct'])
                                    //debugLog('***********************')
                                    dupesCorrect[currentAns] = object[next]['correct'];
                                    dupesSoftDelete[currentAns] = object[next]['answer_soft_delete'];
                                    dupesAnswerSort[currentAns] = object[next]['answer_sort'];
                                    dupesBucketList[currentAns] = object[next]['bucket_id'];

                                    next++;
                                    // checks to see if we are looking at the last question
                                    if (next >= keys.length) {
                                        //debugLog('here');
                                        break;
                                    }
                                }
                            }
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                        //debugLog('here');
                        // this array of objects will be the first index following the question_id key
                        try {
                            answers.push(dupes);
                            // console.log('======================DUPES!!!============================', currentQuestion)
                            // console.log(dupes, 'compare to', )
                            // console.log(answersMap[currentQuestion])
                            //debugLog('here');
                            // after all answers that are associated with question_id are listed, include the following objects
                            //questions[currentQuestion] = answers;
                            questions[currentQuestion] = {};
                            questions[currentQuestion]['answer_prompt'] = answersMap[currentQuestion];
                            questions[currentQuestion]['answer_correct'] = dupesCorrect;
                            questions[currentQuestion]['answer_soft_delete'] = dupesSoftDelete;
                            questions[currentQuestion]['answer_sort'] = dupesAnswerSort;
                            questions[currentQuestion]['answer_bucket_id'] = dupesBucketList;
                            questions[currentQuestion]['question_type_id'] = object[i]['question_type_id'];
                            questions[currentQuestion]['question_type_description'] = unescape(object[i]['question_type_description']);
                            questions[currentQuestion]['display_type_id'] = object[i]['display_type_id'];
                            questions[currentQuestion]['display_type_description'] = unescape(object[i]['display_type_description']);
                            questions[currentQuestion]['quiz_id'] = object[i]['quiz_id'];
                            questions[currentQuestion]['quiz_name'] = unescape(object[i]['quiz_name']);
                            questions[currentQuestion]['prompt'] = unescape(object[i]['prompt']);
                            //questions[currentQuestion]['sort'] = object[i]['sort'];
                            questions[currentQuestion]['training_module'] = unescape(object[i]['training_module']);
                            questions[currentQuestion]['training_url'] = unescape(object[i]['training_url']);
                            questions[currentQuestion]['base64'] = object[i]['base64'];
                            questions[currentQuestion]['image'] = object[i]['image'];
                            questions[currentQuestion]['point_value'] = object[i]['point_value'];
                            questions[currentQuestion]['question_soft_delete'] = object[i]['question_soft_delete'];
                            questions[currentQuestion]['expected_response'] = unescape(object[i]['expected_response']);
                            questions[currentQuestion]['question_sort'] = unescape(object[i]['question_sort']);

                            // now set above. once we stop using at this location, delete these
                            questions[currentQuestion]['topic'] = unescape(object[i]['topic']);
                            questions[currentQuestion]['topic_id'] = object[i]['topic_id'];
                            questions[currentQuestion]['category'] = unescape(object[i]['category']);

                            //debugLog('here');
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                    }
                    dupes = {};
                    answers = [];
                    correct = [];
                    dupesCorrect = {};
                    dupesSoftDelete = {};
                }
            } catch (tryError) {
                log_event('ERROR', tryError, functionName);
                throw tryError;
            }
            results.push(questions);
            //console.log(results)
            // console.log(results[0][110])
            return results;
        } else {
            //debugLog("object empty");
            return [];
        }
    } catch (tryError) {
        log_event('ERROR', tryError, functionName);
        throw tryError;
    }
}

function building_dont_use(object) {
    let functionName = 'format_quiz_table';
    // recieve table that is the quiz object
    // create json object from table results
    // one topic / topic_id
    // multiple questions per topic
    // multiple answer objects per question

    /*
        // get list of unique question_id

        // for each UNIQUE question_id {
            get set of data from KA_question table

            get list of UNIQUE answer_id 
            for each UNIQUE answer_id {
                get set of data from KA_answer table 
                
            }





        try {
            let answersMap = {};

            // console.log('==============quiz.quizTable========================')
            for (let el in object) {
                // console.log('===========', el, '==========================');
                if (typeof(object[el]) === 'object') {
                    if (!answersMap[object[el]['question_id']]) {
                        answersMap[object[el]['question_id']] = {};
                    }
                    answersMap[object[el]['question_id']][object[el]['answer_id']] = unescape(object[el]['answer_prompt'])
                }
            }
            // console.log(answersMap)
            // console.log('=================================================')
            //debugLog('here');
            //console.log(object)
            let keys = Object.keys(object);
            // console.log('========Object.keys(object)=========', keys)
            //console.log(keys)
            let answers = [];
            let correct = [];
            let questions = {};
            let dupes = {};
            let dupesCorrect = {};
            let dupesSoftDelete = {};
            let dupesAnswerSort = {};
            let dupesBucketList = {};
            //let dupesAnswerSort = {};
            let results = [];
            if (object !== 'null') {
                try {
                    for (let i = 0; i < keys.length; i++) {
                        try {
                            questions['topic_soft_delete'] = object[0]['topic_soft_delete'];
                            questions['category'] = unescape(object[0]['category']);
                            questions['topic'] = unescape(object[0]['topic']);
                            questions['topic_id'] = object[0]['topic_id'];
                            questions['question_sort'] = object[0]['question_sort'];
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                        //debugLog('here');
                        let next = i + 1;
                        //debugLog('here');
                        //next = next + 1;
                        //debugLog('here');
                        //console.log(object[keys[i]]['answer_id'])
                        // each answer_id is passed as array. 1 value at the beginning with 2 empty values following. Only select the [0] index for answer_id to prevent empty values
                        //let currentAns = object[keys[i]]['answer_id'][0];
                        let currentAns = object[keys[i]]['answer_id'];
                        //debugLog('here');
                        let currentPrompt = unescape(object[keys[i]]['answer_prompt']);
                        let currentCorrect = object[keys[i]]['correct'];
                        let currentDelete = object[keys[i]]['answer_soft_delete'];
                        let answer_sort = object[keys[i]]['answer_sort'];
                        let answer_bucket_id = object[keys[i]]['bucket_id'];

                        //debugLog('here');
                        //console.log(object[i]['question_id'])
                        let currentQuestion = object[i]['question_id'];
                        //let currentCorrect = object[i]['correct'];
                        //debugLog('here');
                        if (!questions.hasOwnProperty(currentQuestion)) {
                            try {
                                //debugLog('here');
                                dupes[currentAns] = currentPrompt;
                                //debugLog("here")
                                //console.log(currentCorrect)
                                dupesCorrect[currentAns] = currentCorrect;
                                dupesSoftDelete[currentAns] = currentDelete;
                                dupesAnswerSort[currentAns] = answer_sort;
                                dupesBucketList[currentAns] = answer_bucket_id;
                                if (next < keys.length) {
                                    //debugLog('here');
                                    // create an array of objects with answer_id as the key and answer_prompt as the value when there's a many to one relationship with question_id (Radial)
                                    while (currentQuestion === object[next]['question_id']) {
                                        //currentAns = object[keys[next]]['answer_id'][0];
                                        currentAns = object[keys[next]]['answer_id'];
                                        dupes[currentAns] = unescape(object[next]['answer_prompt']);
                                        //console.log(object[next]['correct'])
                                        //debugLog('***********************')
                                        dupesCorrect[currentAns] = object[next]['correct'];
                                        dupesSoftDelete[currentAns] = object[next]['answer_soft_delete'];
                                        dupesAnswerSort[currentAns] = object[next]['answer_sort'];
                                        dupesBucketList[currentAns] = object[next]['bucket_id'];

                                        next++;
                                        // checks to see if we are looking at the last question
                                        if (next >= keys.length) {
                                            //debugLog('here');
                                            break;
                                        }
                                    }
                                }
                            } catch (tryError) {
                                log_event('ERROR', tryError, functionName);
                                throw tryError;
                            }
                            //debugLog('here');
                            // this array of objects will be the first index following the question_id key
                            try {
                                answers.push(dupes);
                                // console.log('======================DUPES!!!============================', currentQuestion)
                                // console.log(dupes, 'compare to', )
                                // console.log(answersMap[currentQuestion])
                                //debugLog('here');
                                // after all answers that are associated with question_id are listed, include the following objects
                                //questions[currentQuestion] = answers;
                                questions[currentQuestion] = {};
                                questions[currentQuestion]['answer_prompt'] = answersMap[currentQuestion];
                                questions[currentQuestion]['answer_correct'] = dupesCorrect;
                                questions[currentQuestion]['answer_soft_delete'] = dupesSoftDelete;
                                questions[currentQuestion]['answer_sort'] = dupesAnswerSort;
                                questions[currentQuestion]['buckst_id'] = dupesBucketList;
                                questions[currentQuestion]['question_type_id'] = object[i]['question_type_id'];
                                questions[currentQuestion]['question_type_description'] = unescape(object[i]['question_type_description']);
                                questions[currentQuestion]['display_type_id'] = object[i]['display_type_id'];
                                questions[currentQuestion]['display_type_description'] = unescape(object[i]['display_type_description']);
                                questions[currentQuestion]['quiz_id'] = object[i]['quiz_id'];
                                questions[currentQuestion]['quiz_name'] = unescape(object[i]['quiz_name']);
                                questions[currentQuestion]['prompt'] = unescape(object[i]['prompt']);
                                //questions[currentQuestion]['sort'] = object[i]['sort'];
                                questions[currentQuestion]['training_module'] = unescape(object[i]['training_module']);
                                questions[currentQuestion]['training_url'] = unescape(object[i]['training_url']);
                                questions[currentQuestion]['base64'] = object[i]['base64'];
                                questions[currentQuestion]['image'] = object[i]['image'];
                                questions[currentQuestion]['point_value'] = object[i]['point_value'];
                                questions[currentQuestion]['question_soft_delete'] = object[i]['question_soft_delete'];
                                questions[currentQuestion]['expected_response'] = unescape(object[i]['expected_response']);
                                questions[currentQuestion]['question_sort'] = unescape(object[i]['question_sort']);

                                // now set above. once we stop using at this location, delete these
                                questions[currentQuestion]['topic'] = unescape(object[i]['topic']);
                                questions[currentQuestion]['topic_id'] = object[i]['topic_id'];
                                questions[currentQuestion]['category'] = unescape(object[i]['category']);

                                //debugLog('here');
                            } catch (tryError) {
                                log_event('ERROR', tryError, functionName);
                                throw tryError;
                            }
                        }
                        dupes = {};
                        answers = [];
                        correct = [];
                        dupesCorrect = {};
                        dupesSoftDelete = {};
                    }
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    throw tryError;
                }
                results.push(questions);
                // console.log(results)
                return results;
            } else {
                //debugLog("object empty");
                return [];
            }
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            throw tryError;
        }

    */
}

function escapingQuiz(q) {
    for (let el in q) {
        if (typeof(q[el]) !== 'object' && Object.keys(q[el]).length <= 19 || el === 'new') {
            continue;
        }
        delete q[el][0]
        q[el]['prompt'] = escape(q[el]['prompt']);
        q[el]['training_url'] = escape(q[el]['training_url']);
        q[el]['training_module'] = escape(q[el]['training_module']);
        q[el]['expected_response'] = escape(q[el]['expected_response']);
        for (let a in q[el]['answer_prompt']) {
            q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a])
        }
    }
    return q;
}

function escapeObject(object) {
    let functionName = 'unescapingObj';
    try {
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object" && object[Object.keys(object)[i]] != null) {
                escapeObject(object[Object.keys(object)[i]]);
            } else if (Object.keys(object)[i] === 'image') {
                //console.log('image')
                continue
            } else if (typeof object[Object.keys(object)[i]] == "string") {
                object[Object.keys(object)[i]] = escape(object[Object.keys(object)[i]].trim())
            } else {
                continue
            }
        }
        return object
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function unescapingObj(object) {
    let functionName = 'unescapingObj';
    try {
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object" && object[Object.keys(object)[i]] != null) {
                unescapingObj(object[Object.keys(object)[i]]);
            } else if (typeof object[Object.keys(object)[i]] == "string") {
                object[Object.keys(object)[i]] = unescape(unescape(object[Object.keys(object)[i]]))
            }
        }
        return object
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function groupBy(list, group) {
    let functionName = 'groupBy';
    try {
        let map = {};
        for (let el in list) {
            if (typeof(list[el]) === 'object') {
                if (list[el]['topic']) {
                    list[el]['topic'] = removeSpacesFromStr(list[el]['topic'])
                }
                let key = list[el][group]
                if(!key){
                    key = "Others"
                }
                if (!map[key]) {
                    map[key] = {}
                }
                map[key][el] = list[el]
            }
        }
        return map
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function groupByKey(list, group, key) {
    let functionName = 'groupByKey';
    try {
        let map = {};
        for (let el in list) {
            if (list[el]['topic']) {
                list[el]['topic'] = removeSpacesFromStr(list[el]['topic'])
            }
            if (!map[list[el][group]]) {
                map[list[el][group]] = {}
            }
            map[list[el][group]][list[el][key]] = list[el]
        }
        return map
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function categoriesFixer(cat) {
    let res = {};
    for (let el in cat) {
        res[cat[el]['topic_id']] = cat[el];
    }
    return res;
}

function switchKey(list, key) {
    let res = {};
    for (let el in list) {
        res[list[el][key]] = list[el]
    }
    return res;
}

function joinUsersByTopicId(list) {
    let functionName = 'joinUsersByTopicId';
    try {
        var res = {};
        for (let u in list) {
            // if (list[u]['profile_id']) {
            //     if (list[u]['profile_id'] == 727) {
                    console.log("==================list[u]['profile_id'] == 727===========================")
                    console.log(list[u])
            //     }
            // }
            if (typeof(list[u]) !== 'object' || list[u]['soft_delete']) {
                continue;
            }
            let user_id = list[u]['profile_id'];
            if (!res[user_id]) {
                res[user_id] = list[u]
                let temp = res[user_id]['topic_id'] // ex.: user['topic_id'] = [1,3,4,5,6] array of topic_id's
                res[user_id]['topic_id'] = [];
                if (typeof(temp) === 'object') {
                    for (let el in temp) {
                        if (!res[user_id]['topic_id'].includes(temp[el]) && !res[user_id]['permission_soft_delete']) {
                            res[user_id]['topic_id'].push(temp[el])
                        }
                    }
                } else {
                    if (!res[user_id]['topic_id'].includes(temp)) {
                        res[user_id]['topic_id'].push(temp)
                    }
                }
            } else {
                if (list[u]['permission_soft_delete']) {
                    continue;
                }
                let temp = list[u]['topic_id']
                if (typeof(temp) === 'object') {
                    for (let el in temp) {
                        if (!res[user_id]['topic_id'].includes(temp[el])) {
                            res[user_id]['topic_id'].push(temp[el])
                        }
                    }
                } else {
                    if (!res[user_id]['topic_id'].includes(temp)) {
                        res[user_id]['topic_id'].push(temp)
                    }
                }
            }
            res[user_id]['topic_id'].sort()
        }
        return res;
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function topicListNameRemoveSpaces(list) {
    for (let el in list) {
        list[el]['topic'] = removeSpacesFromStr(list[el]['topic']);
    }
    return list;
}

function removeSpacesFromStr(str) {
    let functionName = 'removeSpacesFromStr';
    try {
        if (str.length < 2) {
            return str
        }
        return str.split('   ').join('');
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}


//validates and sanitizes submission_id, question_id, gradeinput, and gradevalue. returns an array of objects that can be iterated through for db insertion
// array format {question_id: [graded value, admin feedback, submission id]}
function gradeValidate(body) {
    //console.log(`gradeValidate INPUT >>> ${body}`)
    //console.log(body)
    let keys = Object.keys(body);
    let cleanResult = {};
    let gradeContent = [];
    let gradeValue;
    //console.log(typeof gradeValue)
    let grade_input;
    let submission_id;

    //checks to see if a value matches the expected value. If not, it's assigned a value of '0' or given an error string
    // would like to validate further here, query to see what submission id the current admin is supposed to be grading according to DB
    if (typeof body['submission_id'] === 'string') {
        submission_id = body['submission_id'];
        submission_id = escape(submission_id);
    } else {
        submission_id = '0'
    }

    for (let i = 0; i < keys.length; i++) {
        if (Array.isArray(body[keys[i]])) {

            // This needs to be adjusted if the grade scale feature is changed to allow for scores greater or less than 1-5
            if (0.0 <= body[keys[i]][0] <= 5.0) {
                gradeValue = body[keys[i]][0];
                //console.log('=-=-=-=-=--=== here ')
                //console.log(body[keys[i]][0])
                //console.log(gradeValue)

            } else {
                gradeValue = '0.0';
            }
            if (typeof body[keys[i]][1] === 'string') {
                grade_input = body[keys[i]][1];
            } else {
                grade_input = 'error expected a string';
            }

        }
        // check to see if we are at the end of the array (key 'submission_id') if so stop. We don't need it for the db query
        else if (keys[i] === 'submission_id') {
            break;
        } else {
            gradeValue = '0';
        }
        /*
        // console.log(`gradeValue >>>> ${gradeValue}`)
        // console.log(gradeValue)
        // console.log(typeof gradeValue)
        // console.log(`grade_input >>>> ${grade_input}`)
        // console.log(`escape(grade_input) >>>> ${escape(grade_input)}`)
        // console.log(`submission_id >>>> ${submission_id}`)
        // console.log(`keys[i] >>>> ${keys[i]}`)
        */
        // sanitize everything and then add to the final array
        gradeValue = escape(gradeValue);
        gradeContent.push(gradeValue);
        grade_input = escape(grade_input);
        gradeContent.push(grade_input);
        gradeContent.push(submission_id);
        //would like to validate further here. add query to check which questions are available in the type of quiz that is being graded
        let question_id = keys[i];
        //question_id = escape(question_id)
        cleanResult[question_id] = gradeContent;
        gradeContent = [];
    }
    return cleanResult;
}

//A unique answer_id value is only needed for automated grading. This function iterates through user answers, validates the content and identifies whether it is a choice or freewrite answer
//The answer_id for Freewrite answers is given a value of '0'
//The answer_id for choice answers is turned into an array and given the unique answer_id value(s).

function findAnswerID(passInfo, arrayAnswer) {
    let answer_id = [];
    if (passInfo[0] !== '2') {
        for (let i = 0; i < arrayAnswer.length; i++) {
            // Sometimes empty values get passed when there are multiple answers. We don't need empty values inserted in the DB though.
            // Skip any empty values so they aren't included in the final output
            // Assign value and sanitize
            if (arrayAnswer[i] !== undefined) {
                if (typeof arrayAnswer[i] === 'string') {
                    answer_id[i] = arrayAnswer[i];
                    answer_id[i] = escape(answer_id[i]);
                }
            }
        }
    }
    // text input response, cannot validate further
    else {
        answer_id = [0];
    }
    return answer_id;
}


//validates and sanitizes identifying information passed from the front end. returns an array that can be iterated through for db insertion
function infoValidate(passInfo) {
    let cleanPassInfo = [];
    let questionId;
    let submitId;
    let profileId;

    // key of provided input should be an array
    if (Array.isArray(passInfo)) {
        // validate that content matches the expected value/type.  If not, it's assigned a value of '0' or given an error string
        // sanitize by escaping for further security
        if (typeof passInfo[2] === 'string') {
            profileId = passInfo[2];
            profileId = escape(profileId);
        } else {
            profileId = '0'
        }
        if (typeof passInfo[3] === 'string') {
            submitId = passInfo[3];
            submitId = escape(submitId);
        } else {
            submitId = '0'
        }
        if (typeof passInfo[5] === 'string') {
            questionId = passInfo[5];
            questionId = escape(questionId);
        } else {
            questionId = '0'
        }
    }
    cleanPassInfo.push(profileId);
    cleanPassInfo.push(submitId);
    cleanPassInfo.push(questionId);
    return cleanPassInfo;
}

function sortOnKeys(dict) { // sorting object by keys
    var sorted = [];
    for (var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for (var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

function reAssignSession(list, id) {
    for (let el in list) {
        if (list[el]['engagement_id'] == id) {
            return list[el]
        }
    }
    return false;
}

function questionRenderOderAnswers(question) {
    let res = {
        answer_keys: [],
        answer_prompts: []
    };
    let orderMap = {};
    for (let el in question['answer_sort']) {
        if (!orderMap[question['answer_sort'][el]]) {
            orderMap[question['answer_sort'][el]] = [];
        }
        if (!question['answer_soft_delete'][el] && question['answer_prompt'][el]) {
            orderMap[question['answer_sort'][el]].push(el);
        }
    }
    // console.log(orderMap);
    for (let o in orderMap) { // o  = order
        for (let q of orderMap[o]) { // q = question
            res.answer_keys.push(q);
            res.answer_prompts.push(question.answer_prompt[q])
        }
    }
    return res;
}

function filterEngagementsByAvailableQuizzes(quizzes) {
    quizzes = groupByKey(quizzes, "engagement_id", "engagement_id")
    for (let el in quizzes) {
        quizzes[el] = quizzes[el][el]
    }
    return quizzes;
}

function arr_diff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push( Number(k));
    }
    return diff;
}

module.exports = {
    format_quiz_table: format_quiz_table,
    unescapingObj: unescapingObj,
    groupBy: groupBy,
    groupByKey: groupByKey,
    categoriesFixer: categoriesFixer,
    switchKey: switchKey,
    joinUsersByTopicId: joinUsersByTopicId,
    removeSpacesFromStr: removeSpacesFromStr,
    gradeValidate: gradeValidate,
    findAnswerID: findAnswerID,
    infoValidate: infoValidate,
    escapingQuiz: escapingQuiz,
    escapeObject: escapeObject,
    sortOnKeys: sortOnKeys,
    topicListNameRemoveSpaces: topicListNameRemoveSpaces,
    questionRenderOderAnswers: questionRenderOderAnswers,
    reAssignSession: reAssignSession,
    filterEngagementsByAvailableQuizzes: filterEngagementsByAvailableQuizzes,
    arr_diff: arr_diff
};


/*
// object_validation
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz } = require('./object_validation.js');
*/

/***/ }),

/***/ "./src/app/oops/oops.component.css":
/*!*****************************************!*\
  !*** ./src/app/oops/oops.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.footer__btn {\n    color: #343945;\n    float: left;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    line-height: 35px;\n    margin-top: 20px;\n    position: relative;\n    text-align: center;\n    text-decoration:none;\n    width: 250px;\n    font-size: 20px;\n}\n.footer__btn>span {\n    color: black;\n    cursor: pointer;\n    pointer-events: none;\n    position: relative;\n    transition: color .6s ease;\n    z-index: 5;\n}\n.footer__btn-line {\n    bottom: -5px;\n    cursor: pointer;\n    height: 1px;\n    left: 0;\n    pointer-events: none;\n    position: absolute;\n    transition: -webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1), -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1),-webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    width: 100%;\n}\n.footer__btn-line-inner {\n    background-color: black;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform-origin: bottom center;\n    transform-origin: bottom center;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn:after {\n    background-color: #000;\n    bottom: -5px;\n    content: \"\";\n    height: 160%;\n    left: 0;\n    position: absolute;\n    -webkit-transform: scaleX(1.25) scaleY(0);\n    transform: scaleX(1.25) scaleY(0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn:hover .footer__btn-line-inner, .footer__btn[data-trigger-animation=true] .footer__btn-line-inner {\n    -webkit-transform: scaleY(48);\n    transform: scaleY(48);\n    color:#000;\n}\n.footer__btn:hover .footer__btn-line, .footer__btn[data-trigger-animation=true] .footer__btn-line {\n    -webkit-transform: scaleX(1.4);\n    transform: scaleX(1);\n}\n.footer__btn:hover>span, .footer__btn[data-trigger-animation=true]>span {\n    color: white;\n}\n/* GREEN */\n.footer__btn-green {\n    color: #343945;\n    float: left;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    line-height: 35px;\n    margin-top: 20px;\n    position: relative;\n    text-align: center;\n    text-decoration:none;\n    width: 250px;\n    font-size: 20px;\n}\n.footer__btn-green>span {\n    color: #28a745;\n    cursor: pointer;\n    pointer-events: none;\n    position: relative;\n    transition: color .6s ease;\n    z-index: 5;\n}\n.footer__btn-green-line {\n    bottom: -5px;\n    cursor: pointer;\n    height: 1px;\n    left: 0;\n    pointer-events: none;\n    position: absolute;\n    transition: -webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1), -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1),-webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    width: 100%;\n}\n.footer__btn-green-line-inner {\n    background-color: #28a745;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform-origin: bottom center;\n    transform-origin: bottom center;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn-green:after {\n    background-color: #000;\n    bottom: -5px;\n    content: \"\";\n    height: 160%;\n    left: 0;\n    position: absolute;\n    -webkit-transform: scaleX(1.25) scaleY(0);\n    transform: scaleX(1.25) scaleY(0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn-green:hover .footer__btn-green-line-inner, .footer__btn-green[data-trigger-animation=true] .footer__btn-green-line-inner {\n    -webkit-transform: scaleY(48);\n    transform: scaleY(48);\n    color:#000;\n}\n.footer__btn-green:hover .footer__btn-green-line, .footer__btn-green[data-trigger-animation=true] .footer__btn-green-line {\n    -webkit-transform: scaleX(1.4);\n    transform: scaleX(1.4);\n}\n.footer__btn-green:hover>span, .footer__btn-green[data-trigger-animation=true]>span {\n    color: white;\n}\n.error-page {padding: 40px 15px;text-align: center;}\n.error-actions {margin-top:15px;margin-bottom:15px;}\n.error-actions .btn { margin-right:10px; }\nh1.error {    font-size :400px !important; color: grey;     text-shadow: 10px 7px 18px silver; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb29wcy9vb3BzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsT0FBTztJQUNQLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsK0RBQStEO0lBQy9ELDZEQUFxRDtJQUFyRCxxREFBcUQ7SUFBckQsd0dBQXFEO0lBQ3JELDJHQUEyRztJQUMzRyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQiwyREFBMkQ7SUFDM0QsbURBQW1EO0lBQW5ELG9HQUFtRDtJQUNuRCxtR0FBbUc7SUFDbkcsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsaUNBQWlDO0lBQ2pDLHVDQUF1QztJQUN2QywrQkFBK0I7SUFDL0IsMkRBQTJEO0lBQzNELG1EQUFtRDtJQUFuRCxvR0FBbUQ7SUFDbkQsbUdBQW1HO0lBQ25HLFdBQVc7QUFDZjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQSxVQUFVO0FBRVY7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwrREFBK0Q7SUFDL0QsNkRBQXFEO0lBQXJELHFEQUFxRDtJQUFyRCx3R0FBcUQ7SUFDckQsMkdBQTJHO0lBQzNHLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFBbkQsb0dBQW1EO0lBQ25ELG1HQUFtRztJQUNuRyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQiwyREFBMkQ7SUFDM0QsbURBQW1EO0lBQW5ELG9HQUFtRDtJQUNuRCxtR0FBbUc7SUFDbkcsV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBLGFBQWEsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7QUFDbkQsZ0JBQWdCLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztBQUNuRCxzQkFBc0IsaUJBQWlCLEVBQUU7QUFDekMsY0FBYywyQkFBMkIsRUFBRSxXQUFXLE1BQU0saUNBQWlDLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9vb3BzL29vcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvb3Rlcl9fYnRuIHtcbiAgICBjb2xvcjogIzM0Mzk0NTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvb3Rlcl9fYnRuPnNwYW4ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC42cyBlYXNlO1xuICAgIHotaW5kZXg6IDU7XG59XG4uZm9vdGVyX19idG4tbGluZSB7XG4gICAgYm90dG9tOiAtNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoMjU1LDI1NSwyNTUsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKSwtd2Via2l0LXRyYW5zZm9ybSAuNXMgY3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19idG4tbGluZS1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpLC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmZvb3Rlcl9fYnRuOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGJvdHRvbTogLTVweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMTYwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEuMjUpIHNjYWxlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjI1KSBzY2FsZVkoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKSwtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bjpob3ZlciAuZm9vdGVyX19idG4tbGluZS1pbm5lciwgLmZvb3Rlcl9fYnRuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWxpbmUtaW5uZXIge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoNDgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDQ4KTtcbiAgICBjb2xvcjojMDAwO1xufVxuLmZvb3Rlcl9fYnRuOmhvdmVyIC5mb290ZXJfX2J0bi1saW5lLCAuZm9vdGVyX19idG5bZGF0YS10cmlnZ2VyLWFuaW1hdGlvbj10cnVlXSAuZm9vdGVyX19idG4tbGluZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjQpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuLmZvb3Rlcl9fYnRuOmhvdmVyPnNwYW4sIC5mb290ZXJfX2J0bltkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdPnNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogR1JFRU4gKi9cblxuLmZvb3Rlcl9fYnRuLWdyZWVuIHtcbiAgICBjb2xvcjogIzM0Mzk0NTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvb3Rlcl9fYnRuLWdyZWVuPnNwYW4ge1xuICAgIGNvbG9yOiAjMjhhNzQ1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjZzIGVhc2U7XG4gICAgei1pbmRleDogNTtcbn1cbi5mb290ZXJfX2J0bi1ncmVlbi1saW5lIHtcbiAgICBib3R0b206IC01cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllcigyNTUsMjU1LDI1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpLC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bi1ncmVlbi1saW5lLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKSwtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bi1ncmVlbjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3R0b206IC01cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE2MCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjI1KSBzY2FsZVkoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSksLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19idG4tZ3JlZW46aG92ZXIgLmZvb3Rlcl9fYnRuLWdyZWVuLWxpbmUtaW5uZXIsIC5mb290ZXJfX2J0bi1ncmVlbltkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdIC5mb290ZXJfX2J0bi1ncmVlbi1saW5lLWlubmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDQ4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSg0OCk7XG4gICAgY29sb3I6IzAwMDtcbn1cbi5mb290ZXJfX2J0bi1ncmVlbjpob3ZlciAuZm9vdGVyX19idG4tZ3JlZW4tbGluZSwgLmZvb3Rlcl9fYnRuLWdyZWVuW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWdyZWVuLWxpbmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS40KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpO1xufVxuLmZvb3Rlcl9fYnRuLWdyZWVuOmhvdmVyPnNwYW4sIC5mb290ZXJfX2J0bi1ncmVlbltkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdPnNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmVycm9yLXBhZ2Uge3BhZGRpbmc6IDQwcHggMTVweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmVycm9yLWFjdGlvbnMge21hcmdpbi10b3A6MTVweDttYXJnaW4tYm90dG9tOjE1cHg7fVxuLmVycm9yLWFjdGlvbnMgLmJ0biB7IG1hcmdpbi1yaWdodDoxMHB4OyB9XG5oMS5lcnJvciB7ICAgIGZvbnQtc2l6ZSA6NDAwcHggIWltcG9ydGFudDsgY29sb3I6IGdyZXk7ICAgICB0ZXh0LXNoYWRvdzogMTBweCA3cHggMThweCBzaWx2ZXI7IH0iXX0= */"

/***/ }),

/***/ "./src/app/oops/oops.component.html":
/*!******************************************!*\
  !*** ./src/app/oops/oops.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    style=\"min-height: 95vh; \n            display: flex;\n            flex-direction: column;\n            flex-wrap: nowrap;\n            justify-content: space-between;\n            align-items: center;\n            align-content: space-between; background: linear-gradient(to bottom, rgba(255,255,255, 1), rgb(229, 231, 218),rgb(229, 231, 218),rgb(229, 231, 218)) \">\n\n    <div class=\"error-page element-animation-fadeIn\">\n        <h2>Oops!</h2>\n        <h1 class=\"error\"> 404 </h1>\n        <h2>Not Found</h2>\n        <div class=\"error-details\">\n            Sorry, an error has occured. Requested page not found!\n        </div>\n\n\n\n        <div class=\"error-actions\">\n            <a href=\"/\" class=\"btn btn-info btn-bp btn-lg btn-action-borderless shadow\"><span\n                    class=\"glyphicon glyphicon-home\"></span>Take Me Home </a>\n            <a href='mailto:kjenson@bpcs.com?subject=Question regarding Knowledge Assessment&cc=btugutov@bpcs.com'\n                class=\"btn btn-lg btn-warning shadow btn-action-borderless\"><span\n                    class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n        </div>\n    </div>\n    <div *ngIf=\"currentEng\"\n        style=\"background: url(/assets/footer_background.png); background-position: top 0px right 0px !important; background-repeat: no-repeat !important; background-size: cover !important; width: 100%\">\n        <div class=\"index_row\" style=\"display: flex;\n                                                            flex-direction: column;\n                                                            flex-wrap: nowrap;\n                                                            justify-content: center;\n                                                            align-items: center;\n                                                            align-content: space-between;\">\n            <div class=\"col-md-4 col-12 px-2\" style=\"justify-content: center;\">\n                <div class=\"text-center\" style=\"display: flex;\n                                                flex-direction: row;\n                                                flex-wrap: wrap;\n                                                justify-content: center;\n                                                align-items: center;\n                                                align-content: stretch;\">\n                    <h4 style=\"color: #4f91cd;\">Skill Assessment Tool</h4>\n                    <a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=Zd3iEiRQwkSDtTyiHATvDig8hn-UbEJAlkljxOu9n7dUQllFRVMxTjRGV1o4OTRROE5JWldTM0FKVi4u\"\n                        target=\"_blank\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Leave a feedback\"\n                        style=\"margin-left: 15px\">\n                        <img src=\"assets/feedback_icon.svg\" style=\"height: 24px\" class=\"bp_logo footer_element\">\n                    </a>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\">\n                <div class=\"text-center\">\n                    <p class=\"mt-3\">{{currentEng.main_text}}</p>\n                    <p *ngFor=\"let contact of currentEng.contacts | keyvalue\"><a class=\"mt-3\"\n                            href=\"mailto:{{contact.value.email}}?subject=Question regarding Skill Assessment\"\n                            style=\"color: #4f91cd; cursor: pointer;\">{{contact.value.full_name}}</a></p>\n                </div>\n            </div>\n            <div *ngIf=\"currentEng\" class=\"col-md-4 col-12 px-2\" style=\"margin: 5px\">\n                <div class=\"text-center  bp-box shadow\">\n                    <h4 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_name}}</h4>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_address}}</h5>\n                    <h5 class=\"mt-3\" style=\"color: #4f91cd; text-shadow: 0px 0px 1px silver;\">\n                        {{currentEng.company_phone_number}}</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/oops/oops.component.ts":
/*!****************************************!*\
  !*** ./src/app/oops/oops.component.ts ***!
  \****************************************/
/*! exports provided: OopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OopsComponent", function() { return OopsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");



var OopsComponent = /** @class */ (function () {
    function OopsComponent(_ConnectorService) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this._ConnectorService.currentEng.subscribe(function (currentEng) {
            if (currentEng) {
                _this.currentEng = currentEng;
            }
        });
    }
    OopsComponent.prototype.ngOnInit = function () {
    };
    OopsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-oops',
            template: __webpack_require__(/*! ./oops.component.html */ "./src/app/oops/oops.component.html"),
            styles: [__webpack_require__(/*! ./oops.component.css */ "./src/app/oops/oops.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_2__["ConnectorService"]])
    ], OopsComponent);
    return OopsComponent;
}());



/***/ }),

/***/ "./src/app/question.ts":
/*!*****************************!*\
  !*** ./src/app/question.ts ***!
  \*****************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question(answer_bucket_id, answer_correct, answer_prompt, answer_soft_delete, answer_sort, base64, display_type_description, display_type_id, expected_response, image, point_value, prompt, question_type_description, question_type_id, quiz_id, quiz_name, question_soft_delete, question_sort, sort, topic, topic_id, training_module, temp_bucket_storage, training_url) {
        if (answer_bucket_id === void 0) { answer_bucket_id = {}; }
        if (answer_correct === void 0) { answer_correct = {}; }
        if (answer_prompt === void 0) { answer_prompt = {}; }
        if (answer_soft_delete === void 0) { answer_soft_delete = {}; }
        if (answer_sort === void 0) { answer_sort = {}; }
        if (base64 === void 0) { base64 = null; }
        if (display_type_description === void 0) { display_type_description = ''; }
        if (display_type_id === void 0) { display_type_id = null; }
        if (expected_response === void 0) { expected_response = ''; }
        if (image === void 0) { image = false; }
        if (point_value === void 0) { point_value = 1; }
        if (prompt === void 0) { prompt = ''; }
        if (question_type_description === void 0) { question_type_description = ''; }
        if (question_type_id === void 0) { question_type_id = null; }
        if (quiz_id === void 0) { quiz_id = null; }
        if (quiz_name === void 0) { quiz_name = ''; }
        if (question_soft_delete === void 0) { question_soft_delete = false; }
        if (question_sort === void 0) { question_sort = 1; }
        if (sort === void 0) { sort = 1; }
        if (topic === void 0) { topic = ''; }
        if (topic_id === void 0) { topic_id = null; }
        if (training_module === void 0) { training_module = ''; }
        if (temp_bucket_storage === void 0) { temp_bucket_storage = {}; }
        if (training_url === void 0) { training_url = ''; }
        this.answer_bucket_id = answer_bucket_id;
        this.answer_correct = answer_correct;
        this.answer_prompt = answer_prompt;
        this.answer_soft_delete = answer_soft_delete;
        this.answer_sort = answer_sort;
        this.base64 = base64;
        this.display_type_description = display_type_description;
        this.display_type_id = display_type_id;
        this.expected_response = expected_response;
        this.image = image;
        this.point_value = point_value;
        this.prompt = prompt;
        this.question_type_description = question_type_description;
        this.question_type_id = question_type_id;
        this.quiz_id = quiz_id;
        this.quiz_name = quiz_name;
        this.question_soft_delete = question_soft_delete;
        this.question_sort = question_sort;
        this.sort = sort;
        this.topic = topic;
        this.topic_id = topic_id;
        this.training_module = training_module;
        this.temp_bucket_storage = temp_bucket_storage;
        this.training_url = training_url;
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer__btn-bp {\n    color: #343945;\n    float: left;\n    font-size: 15px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: antialiased;\n    line-height: 35px;\n    margin-top: 20px;\n    position: relative;\n    text-align: center;\n    text-decoration:none;\n    width: 250px;\n    font-size: 20px;\n}\n.footer__btn-bp>span {\n    color: #4f91cd;\n    cursor: pointer;\n    pointer-events: none;\n    position: relative;\n    transition: color .6s ease;\n    z-index: 5;\n}\n.footer__btn-bp-line {\n    bottom: -5px;\n    cursor: pointer;\n    height: 1px;\n    left: 0;\n    pointer-events: none;\n    position: absolute;\n    transition: -webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    transition: -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(255,255,255,1), -webkit-transform .5s cubic-bezier(255,255,255,1);\n    transition: transform .5s cubic-bezier(.215,.61,.355,1),-webkit-transform .5s cubic-bezier(.215,.61,.355,1);\n    width: 100%;\n}\n.footer__btn-bp-line-inner {\n    background-color: #4f91cd;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    -webkit-transform-origin: bottom center;\n    transform-origin: bottom center;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn-bp:after {\n    background-color: #000;\n    bottom: -5px;\n    content: \"\";\n    height: 160%;\n    left: 0;\n    position: absolute;\n    -webkit-transform: scaleX(1.25) scaleY(0);\n    transform: scaleX(1.25) scaleY(0);\n    -webkit-transform-origin: center bottom;\n    transform-origin: center bottom;\n    transition: -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1), -webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    transition: transform .7s cubic-bezier(.86,0,.07,1),-webkit-transform .7s cubic-bezier(.86,0,.07,1);\n    width: 100%;\n}\n.footer__btn-bp:hover .footer__btn-bp-line-inner, .footer__btn-bp[data-trigger-animation=true] .footer__btn-bp-line-inner {\n    -webkit-transform: scaleY(48);\n    transform: scaleY(48);\n    color:#000;\n}\n.footer__btn-bp:hover .footer__btn-bp-line, .footer__btn-bp[data-trigger-animation=true] .footer__btn-bp-line {\n    -webkit-transform: scaleX(1.4);\n    transform: scaleX(1.4);\n}\n.footer__btn-bp:hover>span, .footer__btn-bp[data-trigger-animation=true]>span {\n    color: white;\n}\n.filter-blur{\n    -webkit-filter: blur(5px);\n            filter: blur(5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiwrREFBK0Q7SUFDL0QsNkRBQXFEO0lBQXJELHFEQUFxRDtJQUFyRCx3R0FBcUQ7SUFDckQsMkdBQTJHO0lBQzNHLFdBQVc7QUFDZjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTix1Q0FBdUM7SUFDdkMsK0JBQStCO0lBQy9CLDJEQUEyRDtJQUMzRCxtREFBbUQ7SUFBbkQsb0dBQW1EO0lBQ25ELG1HQUFtRztJQUNuRyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLHlDQUF5QztJQUN6QyxpQ0FBaUM7SUFDakMsdUNBQXVDO0lBQ3ZDLCtCQUErQjtJQUMvQiwyREFBMkQ7SUFDM0QsbURBQW1EO0lBQW5ELG9HQUFtRDtJQUNuRCxtR0FBbUc7SUFDbkcsV0FBVztBQUNmO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0lBQ3JCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVpei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlcl9fYnRuLWJwIHtcbiAgICBjb2xvcjogIzM0Mzk0NTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmZvb3Rlcl9fYnRuLWJwPnNwYW4ge1xuICAgIGNvbG9yOiAjNGY5MWNkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjZzIGVhc2U7XG4gICAgei1pbmRleDogNTtcbn1cbi5mb290ZXJfX2J0bi1icC1saW5lIHtcbiAgICBib3R0b206IC01cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllcigyNTUsMjU1LDI1NSwxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpLC13ZWJraXQtdHJhbnNmb3JtIC41cyBjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bi1icC1saW5lLWlubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY5MWNkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKSwtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5mb290ZXJfX2J0bi1icDphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBib3R0b206IC01cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDE2MCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxLjI1KSBzY2FsZVkoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yNSkgc2NhbGVZKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoLjg2LDAsLjA3LDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKC44NiwwLC4wNywxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSksLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllciguODYsMCwuMDcsMSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyX19idG4tYnA6aG92ZXIgLmZvb3Rlcl9fYnRuLWJwLWxpbmUtaW5uZXIsIC5mb290ZXJfX2J0bi1icFtkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdIC5mb290ZXJfX2J0bi1icC1saW5lLWlubmVyIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDQ4KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSg0OCk7XG4gICAgY29sb3I6IzAwMDtcbn1cbi5mb290ZXJfX2J0bi1icDpob3ZlciAuZm9vdGVyX19idG4tYnAtbGluZSwgLmZvb3Rlcl9fYnRuLWJwW2RhdGEtdHJpZ2dlci1hbmltYXRpb249dHJ1ZV0gLmZvb3Rlcl9fYnRuLWJwLWxpbmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMS40KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxLjQpO1xufVxuLmZvb3Rlcl9fYnRuLWJwOmhvdmVyPnNwYW4sIC5mb290ZXJfX2J0bi1icFtkYXRhLXRyaWdnZXItYW5pbWF0aW9uPXRydWVdPnNwYW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmZpbHRlci1ibHVye1xuICAgIGZpbHRlcjogYmx1cig1cHgpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"question && !completed\">\n    <div class=\"row align-items-center\">\n        <div class=\"col text-center\">\n            <h1>Quiz for {{question.topic_name.topic}}</h1>\n        </div>\n    </div>\n    <div class=\"row align-items-center\" *ngIf=\"current_index != null && total_length\">\n        <div class=\" progress shadow\"  style=\"width: 350px; margin:10px auto; color: black;\">\n            <div  class=\"progress-bar \" role=\"progressbar\" [style.width.%]=\"( (current_index/total_length) * 100)\" aria-valuenow=\"41\" aria-valuemin=\"0\" aria-valuemax=\"100\" ></div>\n            {{current_index+1}}/{{total_length}}\n        </div>\n    </div>\n    <div [hidden]=\"!question.time_limit && !expired_bool\" class=\"row align-items-center\" *ngIf=\"current_index != null && total_length\">\n        <div class=\"text-center\"  style=\"width: 350px; margin:10px auto; color: black;\"\n            [ngClass]=\"{\n                'text-warning': math.floor(expiration_time/60) == 2 || math.floor(expiration_time/60) == 1 ,\n                'text-danger': math.floor(expiration_time/60) < 1\n            }\">\n            {{ math.floor(expiration_time/60) }}  minute<span *ngIf=\"math.floor(expiration_time/60)>1\">s</span> and {{ expiration_time%60 }}  second<span *ngIf=\"expiration_time%60>1\">s</span> left\n        </div>\n    </div>\n    <div [hidden]=\"!expired_bool\" class=\"row align-items-center\" *ngIf=\"current_index != null && total_length\">\n        <div class=\"alert alert-warning\"  style=\"width: 350px; margin:10px auto;\">\n            Unfortunately, the quiz is expired. Please, standby.\n        </div>\n    </div>\n    <div *ngIf=\"question.image_info && question.image_info != 'null'\" class=\"row\" [ngClass]=\"{'filter-blur': expired_bool}\">\n            <div class=\"col\" style=\"display: flex;\">\n                <img class=\"element-animation-fadeIn img-fluid\" src=\"{{question.image_info}}\" style=\"width: auto; margin: 0px auto;\" />\n            </div>\n        </div>\n    <div class=\"form-row border_info\" [ngClass]=\"{'filter-blur': expired_bool}\">\n        <div class=\"col-6 question\" style=\"display: flex; align-items: center; justify-content: center;\">\n            <h4 style=\"white-space: pre-wrap\" class=\"noselect\">{{question.question_prompt}}</h4>\n        </div>\n        <div class=\"col-6\">\n            <div *ngIf=\"question.question_type == 2\">\n                <!-- manual input  -->\n                <div class=\"form-check\">\n                    <textarea [disabled]=\"expired_bool\" class=\"element-animation-fadeIn form-control shadow\" id=\"manual_input_field\" rows=\"3\" required=\"true\" maxlength=\"500\" autofocus=\"autofocus\"></textarea>\n                </div>\n            </div>\n            <div *ngIf=\"question.question_type != 2\">\n                <div *ngIf=\"question.display_type == 1\">\n                    <!-- radio  -->\n                    <fieldset>\n                        <div *ngFor=\"let q of question.answer_keys; index as i\" class=\"form-check\">\n                            <label class=\"col-form-label element-animation{{i + 1}}\" for=\"radio{{i}}\">\n                                <input [disabled]=\"expired_bool\" class=\"placeAfter radio_input shadow\" id=\"{{q}}\" name=\"radio_answer\" type=\"radio\"\n                                    required=\"true\" value={{question.answer_prompt[i]}} />{{question.answer_prompt[i]}}\n                            </label>\n                        </div>\n                    </fieldset>\n                </div>\n                <div *ngIf=\"question.display_type == 2\">\n                    <!-- check  -->\n                    <fieldset>\n                        <div *ngFor=\"let q of question.answer_keys; index as i\" class=\"form-check\">\n                            <label class=\"col-form-label element-animation{{i + 1}}\" for=\"radio{{i}}\">\n                                <input [disabled]=\"expired_bool\" class=\"placeAfter checkbox_input shadow\" id=\"{{q}}\" type=\"checkbox\" required=\"true\"\n                                    value={{question.answer_prompt[i]}}>{{question.answer_prompt[i]}}\n                            </label>\n                        </div>\n                    </fieldset>\n                </div>\n                <div *ngIf=\"question.display_type == 3\">\n                    <!-- select -->\n                    <div class=\"form-check\">\n                        <select [disabled]=\"expired_bool\" class=\"element-animation-fadeIn form-control\" id=\"select_input\" required=\"true\">\n                            <option value=\"\">Select One</option>\n                            <option  *ngFor=\"let q of question.answer_keys; index as i\" value={{q}}>\n                                {{question.answer_prompt[i]}}</option>\n                            <!-- option(id = id_att value= value_att[index])-->\n                        </select>\n                    </div>\n                </div>\n                <div *ngIf=\"question.display_type == 4\" id=\"dragAndDrop\">\n                    <!-- drag and drop -->\n                    <div style=\"width:100%;display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: space-around; align-items: center; align-content: center;\" id=\"dragAndDropContent\">\n                        Please drag and drop items to the right buckets.\n                        <ul data-draggable=\"target\" class=\"shadow\" style=\"width: 550px; height: 350px;\">\n                            <li *ngFor=\"let c of question.answer_keys; let idx = index\" data-draggable=\"item\" class=\"bucket_question_element bucket_question_choice list-group-item grab text-center\" style=\"font-size: 24px;\" id=\"{{c}}\">\n                                {{question.answer_prompt[idx]}}</li>\n                            </ul>\n\n                        <div style=\"width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around; align-items: baseline; align-content: center;\">\n                            <div *ngFor=\"let b of question.bucket_list | keyvalue\" class=\"bucket_question_element bucket_question_bucket droppable unselectable\" style=\"width: 350px;\">\n                                <h4 align=\"center\">{{b.value.bucket_name}}</h4>\n                                <ol class=\"bucket shadow\" data-draggable=\"target\" id='{{b.value.bucket_id}}'></ol>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-row justify-content-center\" [ngClass]=\"{'filter-blur': expired_bool}\">\n        <!-- <button class=\"btn btn-lg btn-success btn-action-borderless shadow\" id=\"nextButton\" type=\"button\"  style=\"width:200px;\">Next</button> -->\n        <a class=\"footer__btn-bp noselect\" [attr.disabled]=\"submitting_bool\" (click)='submit()' data-footer-link=\"2\" [hidden]=\"expired_bool\">\n            <span *ngIf=\"!submitting_bool\">Next</span>\n            <span *ngIf=\"submitting_bool\">Loading</span>\n            <div class=\"footer__btn-bp-line\">\n                <div class=\"footer__btn-bp-line-inner\"></div>\n            </div>\n        </a>\n        <!-- <div class=\"spinner-border\" [hidden]=\"submitting_bool\" style=\"color: #4f91cd; margin-top: 20px\" role=\"status\">\n                <span class=\"sr-only\">Loading...</span>\n              </div> -->\n    </div>\n    \n</div>\n<div *ngIf=\"completed \">\n    <div class=\"jumbotron text-xs-center col element-animation-fadeIn\" align=\"center\" style=\"background: white; margin-top: 10%;\" id=\"body_fadeOut\">\n        <h1 class=\"display-3\">Thank You!</h1>\n        <p class=\"lead\"><strong>You have completed Skill Assessment Quiz</strong> for further instructions please contact your TL or instructor.</p>\n        <div class=\"form-row justify-content-center\">\n            <a class=\"footer__btn-bp\" [routerLink]=\"[completed_link]\" data-footer-link=\"2\">\n                    <span>Back to homepage</span>\n                    <div class=\"footer__btn-bp-line\">\n                        <div class=\"footer__btn-bp-line-inner\"></div>\n                    </div>\n                </a>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!question\" class=\" loading_box \">\n        <img class=\"loading_box-ing \" src='./../../assets/loading.gif'>\n    </div>\n<!-- <div *ngIf=\"expired\">\n    <div class=\"jumbotron text-xs-center col element-animation-fadeIn\" align=\"center\" style=\"background: white; margin-top: 10%;\" id=\"body_fadeOut\">\n        <h1 class=\"display-3\">Thank You!</h1>\n        <p class=\"lead\"><strong>You have completed Skill Assessment Quiz</strong> for further instructions please contact your TL or instructor.</p>\n        <div class=\"form-row justify-content-center\">\n            <a class=\"footer__btn-bp\" [routerLink]=\"[completed_link]\" data-footer-link=\"2\">\n                    <span>Back to homepage</span>\n                    <div class=\"footer__btn-bp-line\">\n                        <div class=\"footer__btn-bp-line-inner\"></div>\n                    </div>\n                </a>\n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "./src/app/connector.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dynamic-script-loader-service.service */ "./src/app/dynamic-script-loader-service.service.ts");






var QuizComponent = /** @class */ (function () {
    function QuizComponent(_ConnectorService, _r, location, _route, dynamicScriptLoader) {
        var _this = this;
        this._ConnectorService = _ConnectorService;
        this._r = _r;
        this.location = location;
        this._route = _route;
        this.dynamicScriptLoader = dynamicScriptLoader;
        this.currentEng_id = null;
        this.topic_id = null;
        this.quiz_id = null;
        this.currentUser = null;
        this.currentEng = null;
        this.question = null;
        this.completed = false;
        this.completed_link = "";
        this.time_limit = null;
        this.start_time = null;
        this.expired_bool = false;
        this.submitting_bool = false;
        this.math = Math;
        this._route.paramMap.subscribe(function (params) {
            _this.currentEng_id = params.get('eng');
            _this.topic_id = params.get('topic_id');
            _this.quiz_id = params.get('quiz_id');
            _this._ConnectorService.user.subscribe(function (user) {
                _this.currentUser = user;
                if (user) {
                    // console.log("USER IS HERE!", this.currentEng_id)
                }
                if (user) {
                    // console.log("TAKING A QUIZ!")
                    _this.takeQuiz();
                }
            });
        });
        setInterval(function () {
            if (_this.question && _this.question['time_limit'] && !_this.completed) {
                if (_this.expiration_time < 0 && !_this.completed) {
                    // this.timeExpired();
                    _this.expired_bool = true;
                    // this.completed = true;
                    _this.submit();
                }
                else {
                    _this.expiration_time = (_this.question['time_limit'] * 60) - (Math.floor((new Date().getTime() - new Date(_this.question['start_time']).getTime()) / 60000 * 60));
                }
            }
        }, 800);
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.loadScripts = function () {
        var _this = this;
        // You can load multiple scripts by just providing the key as argument into load method of the service
        this.dynamicScriptLoader.load('quizQuestionRender').then(function (data) {
            // Script Loaded Successfully
        }).catch(function (error) {
            _this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "loadScripts");
            console.log(error);
        });
    };
    QuizComponent.prototype.takeQuiz = function () {
        var _this = this;
        if (this.completed) {
            return;
        }
        this._ConnectorService.takeQuiz(this.currentEng_id, this.currentUser.email, this.topic_id, this.quiz_id).then(function (data) {
            console.log("takeQuiz: DATA => ", data);
            if (data['status'] == "failed") {
                console.log("data['status'] == \"failed\"");
                if (localStorage['user']) {
                    _this._ConnectorService.update_user_session(localStorage['user']).then(function (res) {
                        _this.takeQuiz();
                        console.log("update_user_session RES =>", res);
                    }).catch(function (error) {
                        this._r.navigateByUrl('/');
                    });
                }
                else {
                    _this._r.navigateByUrl('/');
                }
                return;
            }
            _this.question = data;
            if (data) {
                console.log(data['image_info']);
                _this.getQuizLength(_this.topic_id);
                if (data['completed']) {
                    _this.completed = true;
                    _this.completed_link = "/" + _this.currentEng_id + "/home";
                    return;
                }
                if (_this.question.display_type == 4) {
                    _this.loadScripts();
                }
                _this.reformatQuestion();
            }
        }).catch(function (error) {
            this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "takeQuiz");
            // console.log(error)
        });
    };
    QuizComponent.prototype.reformatQuestion = function () {
        // console.log("reformatting question!", this.question.question_prompt)
        if (this.question.image_info == null || this.question.image_info == "null") {
            return;
        }
        if (this.question.image) {
            if (this.question.base64.split(",").length == 1) {
                this.question.base64 = "data:image/png;base64," + this.question.base64;
            }
            // console.log(this.question.image.base64)
        }
        else if (this.question.image_info) {
            if (this.question.image_info.split(',').length == 1) {
                this.question.image_info = "data:image/png;base64," + this.question.image_info;
            }
        }
    };
    QuizComponent.prototype.getQuizLength = function (quiz_id) {
        var _this = this;
        // console.log("requestion quiz length for ", quiz_id)
        this._ConnectorService.getQuizLength(quiz_id).then(function (res) {
            console.log("getQuizLength response => ", res);
            // console.log("this.question_id => ", this.question.question_id)
            var counter = 0;
            for (var el in res) {
                if (res[el]['question_id'] == _this.question.question_id) {
                    // console.log("found!")
                    _this.current_index = counter;
                    _this.total_length = Object.keys(res).length;
                    break;
                }
                counter++;
            }
            // console.log("this.current_index =>", this.current_index)
            // console.log("this.total_length =>", this.total_length)
        }).catch(function (err) {
            this._ConnectorService.logEvent(err, "ERROR", "QuizComponent", "getQuizLength");
            console.log("ERROR =>", err);
        });
    };
    QuizComponent.prototype.submit = function () {
        var _this = this;
        var _a, _b, _c, _d;
        console.log('reading answer...');
        // if(this.completed){
        //   return;
        // }
        if (this.submitting_bool) {
            console.log("CAN'T DO ANYTHING SINCE THE RESPONSE IS IN PROCESS");
            return;
        }
        if (this.question.question_type == 2) {
            // MANUAL INPUT ANSWER
            var input = document.getElementById('manual_input_field');
            // console.log(input['value'])
            var obj = (_a = {},
                _a[this.question.pass_info] = input['value'],
                _a);
            console.log("OBJ =>", obj);
            this.submitting_bool = true;
            this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(function (data) {
                _this.question = data;
                console.log("NEW QUESTION =>", data);
                if (data['completed']) {
                    _this.completed = true;
                    _this.completed_link = "/" + _this.currentEng_id + "/home";
                    return;
                }
                if (data) {
                    _this.submitting_bool = false;
                    document.getElementById('manual_input_field')['value'] = '';
                    if (_this.question.display_type == 4) {
                        _this.loadScripts();
                    }
                }
                _this.getQuizLength(_this.topic_id);
                _this.reformatQuestion();
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            if (this.question.display_type == 1) {
                var inputs = document.getElementsByClassName("radio_input");
                var answer = null;
                for (var el in inputs) {
                    if (typeof (inputs[el]) == 'object') {
                        if (inputs[el]['checked']) {
                            answer = inputs[el];
                            break;
                        }
                    }
                }
                var answer_reponse = null;
                if (!answer && !this.expired_bool) {
                    // alert("SELECT ANSWER!!!!!")
                    return;
                }
                else if (!answer && this.expired_bool) {
                }
                else {
                    answer_reponse = answer.id;
                }
                // console.log("ANSWER =>", answer.id)
                var obj = (_b = {},
                    _b[this.question.pass_info] = answer_reponse,
                    _b);
                // console.log("OBJ =>", obj)
                this.submitting_bool = true;
                this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(function (data) {
                    // console.log(data)
                    _this.question = data;
                    if (data) {
                        _this.submitting_bool = false;
                        if (data['completed']) {
                            _this.completed = true;
                            _this.completed_link = "/" + _this.currentEng_id + "/home";
                            return;
                        }
                        if (_this.question.display_type == 4) {
                            _this.loadScripts();
                        }
                        _this.getQuizLength(_this.topic_id);
                        _this.reformatQuestion();
                    }
                }).catch(function (error) {
                    console.log(error);
                    this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer");
                });
            }
            if (this.question.display_type == 2) {
                var inputs = document.getElementsByClassName("checkbox_input");
                var answers = [];
                for (var el in inputs) {
                    if (typeof (inputs[el]) == 'object') {
                        if (inputs[el]['checked']) {
                            answers.push(inputs[el]['id']);
                        }
                    }
                }
                if (answers.length < 1 && !this.expired_bool) {
                    // alert("PLEASE CHECK ANYTHING!")
                }
                else {
                    var obj = (_c = {},
                        _c[this.question.pass_info] = answers,
                        _c);
                    // console.log("OBJ =>", obj)
                    this.submitting_bool = true;
                    this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(function (data) {
                        // console.log(data)
                        _this.question = data;
                        if (data) {
                            _this.submitting_bool = false;
                            if (data['completed']) {
                                _this.completed = true;
                                _this.completed_link = "/" + _this.currentEng_id + "/home";
                                return;
                            }
                            if (_this.question.display_type == 4) {
                                _this.loadScripts();
                            }
                            _this.getQuizLength(_this.topic_id);
                            _this.reformatQuestion();
                        }
                    }).catch(function (error) {
                        console.log(error);
                        this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer");
                    });
                }
            }
            if (this.question.display_type == 3) {
                var inputs = document.getElementById("select_input");
                if (!inputs['value'] || inputs['value'].length < 1) {
                    // alert('please select answer')
                    return;
                }
                var obj = (_d = {},
                    _d[this.question.pass_info] = inputs['value'],
                    _d);
                // console.log("OBJ =>", obj)
                this.submitting_bool = true;
                this._ConnectorService.submitAnswer(this.currentEng_id, obj).then(function (data) {
                    // console.log(data)
                    _this.question = data;
                    if (data) {
                        _this.submitting_bool = false;
                        if (data['completed']) {
                            _this.completed = true;
                            _this.completed_link = "/" + _this.currentEng_id + "/home";
                            return;
                        }
                        if (_this.question.display_type == 4) {
                            _this.loadScripts();
                        }
                        _this.getQuizLength(_this.topic_id);
                        _this.reformatQuestion();
                    }
                }).catch(function (error) {
                    console.log("ERROR =>", error);
                    this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer");
                });
            }
            if (this.question.display_type == 4) {
                var buckets = document.getElementsByClassName('bucket');
                var submit_answers = {};
                for (var b in buckets) {
                    for (var el in buckets[b]['children']) {
                        if (typeof (buckets[b]['children'][el]) === 'object') {
                            submit_answers[buckets[b]['children'][el]['id']] = buckets[b]['id'];
                        }
                    }
                }
                if (Object.keys(submit_answers).length < 1 && !this.expired_bool) {
                    // alert('please answer!')
                    return;
                }
                this.submitting_bool = true;
                submit_answers['drag_and_drop'] = true;
                // somehow drag'n'drop questions have 'info' property as object. It has to be a string
                submit_answers['info'] = '';
                for (var el in this.question.pass_info) {
                    submit_answers['info'] += this.question.pass_info[el] + ",";
                }
                // console.log(submit_answers)
                /*
                {
                  '785': '2',
                  '786': '1',
                  '787': '1',
                  drag_and_drop: 'true',
                  info: '3,4,727,1832,2019-05-09 23:34:10,413,'
                }
                */
                this._ConnectorService.submitAnswer(this.currentEng_id, submit_answers).then(function (data) {
                    // console.log(data)
                    _this.question = data;
                    if (data) {
                        _this.submitting_bool = false;
                        if (data['completed']) {
                            _this.completed = true;
                            _this.completed_link = "/" + _this.currentEng_id + "/home";
                            return;
                        }
                        if (_this.question.display_type == 4) {
                            _this.loadScripts();
                        }
                        _this.getQuizLength(_this.topic_id);
                        _this.reformatQuestion();
                    }
                }).catch(function (error) {
                    console.log("ERROR =>", error);
                    this._ConnectorService.logEvent(error, "ERROR", "QuizComponent", "submitAnswer");
                });
            }
        }
    };
    QuizComponent.prototype.timeExpired = function () {
        console.log("QUIZ IS EXPIRED!");
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _dynamic_script_loader_service_service__WEBPACK_IMPORTED_MODULE_5__["DynamicScriptLoaderServiceService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
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

module.exports = __webpack_require__(/*! /Users/Bazyr/Desktop/Coding/test-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map