var express = require('express')
var path = require('path');
const publicweb = process.env.PUBLICWEB || './../dist';
module.exports = function (app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        res.json(true)
    });
    app.get('/api/get_user_info_from_azure', (req, res, next) => {
        console.log("getting info!!!!!!")
        res.json(true)
    });
    app.get('*', (req, res) => {
        res.sendFile(`index.html`, { root: publicweb });
    });
}