var express = require('express')
var path = require('path');
var os = require('os');
const publicweb = process.env.PUBLICWEB || './../dist';
module.exports = function (app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        res.json(true)
    });
    app.post('/get_user_info_from_azure', (req, res, next) => {
        console.log("getting info!!!!!!")
        res.json(true)
    });
    app.post('/api/get_system_info_and_print_message', (req, res) => {
        console.log("this is the message =>", req.body.message);
        let obj = {
            'message': req.body.message,
            'os': os,
            'req': req.headers
        }
        res.json(obj)
    })
    app.get('*', (req, res) => {
        res.sendFile(`index.html`, { root: publicweb });
    });
}