var express = require('express')
var path = require('path');
var os = require('os');
var config = require('./../config');
var passport = require('passport');
var OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
var app = express();
passport.serializeUser(function (user, done) {
    done(null, user.oid);
});

passport.deserializeUser(function (oid, done) {
    findByOid(oid, function (err, user) {
        done(err, user);
    });
});
passport.use(new OIDCStrategy({
    identityMetadata: config.creds.identityMetadata,
    clientID: config.creds.clientID,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode,
    redirectUrl: config.creds.redirectUrl,
    allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
    clientSecret: config.creds.clientSecret,
    validateIssuer: config.creds.validateIssuer,
    isB2C: config.creds.isB2C,
    issuer: config.creds.issuer,
    passReqToCallback: config.creds.passReqToCallback,
    scope: config.creds.scope,
    loggingLevel: config.creds.loggingLevel,
    nonceLifetime: config.creds.nonceLifetime,
    nonceMaxAmount: config.creds.nonceMaxAmount,
    useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
    cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
    clockSkew: config.creds.clockSkew,
},
    function (iss, sub, profile, accessToken, refreshToken, done) {
        if (!profile.oid) {
            return done(new Error("No oid found"), null);
        }
        // asynchronous verification, for effect...
        process.nextTick(function () {
            findByOid(profile.oid, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    // "Auto-registration"
                    users.push(profile);
                    return done(null, profile);
                }
                return done(null, user);
            });
        });
    }
));
const publicweb = process.env.PUBLICWEB || './../dist';
app.use(passport.initialize());
app.use(passport.session());
//==================================
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
            'req': req.headers,
            'passport': passport,
            'config': config
        }
        res.send(obj)
        return;
        try {
            passport.authenticate('azuread-openidconnect', {
                response: res,                      // required
                resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
                customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
                failureRedirect: '/'
            }).then(data => {
                res.json(data)
            }).catch(function (err) {
                console.log(err)
                res.json(obj)
            })
        }
        catch (err) {
            console.log("ERROR IS HERE!", err)
            res.json(false)
        }
    })
    // app.post('/api/get_system_info_and_print_message',
    //     function (req, res, next) {
    //         passport.authenticate('azuread-openidconnect',{
    //                 response: res,                      // required
    //                 resourceURL: config.resourceURL,    // optional. Provide a value if you want to specify the resource.
    //                 customState: 'my_state',            // optional. Provide a value if you want to provide custom state value.
    //                 failureRedirect: '/'
    //             })(req, res, next);
    //     },
    //     function (req, res) {
    //         log.info('Login was called in the Sample');
    //         res.json(true);
    //     });
    app.get('*', (req, res) => {
        res.sendFile(`index.html`, { root: publicweb });
    });
}