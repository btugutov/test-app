var express = require('express')
var path = require('path');
var os = require('os');
var config = require('./../config');
var app = express();
require('dotenv').config();

//==================================
module.exports = function(app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        res.json(true)
    });
    app.post('/get_user_info_from_azure', (req, res, next) => {
        console.log("getting info!!!!!!")
        res.json(true)
    });
    app.post('/api/get_user_info_from_azure', (req, res) => {
        this.temp_obj = req.body
        res.send(true)
    });
    app.get('/api/get_user_info_from_azure', (req, res) => {
        this.temp_obj2 = req.body
        res.send(true)
    });
    app.get('/api/get_system_info_and_print_message', (req, res) => {
            let obj = {
                'os': os,
                'req.headers': req.headers,
                'config': config,
                'temp_obj': this.temp_obj
            }
            res.json(obj)
        })
        /*
         app.post('/api/get_system_info_and_print_message',
             function (req, res, next) {
                 passport.authenticate('azuread-openidconnect',{
                         response: res,                      // required
                         resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
                         failureRedirect: '/'
                     })(req, res, next);
             },
             function (req, res) {
                 log.info('Login was called in the Sample');
                 res.json(true);
             });
             */

}