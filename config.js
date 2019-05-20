exports.creds = {
    // Required
    identityMetadata: 'https://login.microsoftonline.com/bpcs.com.onmicrosoft.com/v2.0/.well-known/openid-configuration',
    // or equivalently: 'https://login.microsoftonline.com/<tenant_guid>/.well-known/openid-configuration'
    //
    // or you can use the common endpoint
    // 'https://login.microsoftonline.com/common/.well-known/openid-configuration'
    // To use the common endpoint, you have to either set `validateIssuer` to false, or provide the `issuer` value.

    // Required, the client ID of your app in AAD
    // clientID: 'ae5da11b-ed62-4a90-8a64-865732a60e3f',
    clientID: 'cff4c334-7d7f-4058-a2f5-2a496ddfff05',
    // Required, must be 'code', 'code id_token', 'id_token code' or 'id_token'
    responseType: 'code id_token',

    // Required
    responseMode: 'form_post',

    // Required, the reply URL registered in AAD for your app
    // redirectUrl: 'https://bpvalveapps.azurewebsites.net/.auth/login/aad/callback',
    redirectUrl: "http://lenta.ru",

    // Required if we use http for redirectUrl
    allowHttpForRedirectUrl: true,

    // Required if `responseType` is 'code', 'id_token code' or 'code id_token'.
    // If app key contains '\', replace it with '\\'.
    clientSecret: 'ndJNxEeFJBfQMfyspZGwoUqJVfwZKnqPOWO+y1zWMD8=',

    // Required to set to false if you don't want to validate issuer
    validateIssuer: true,

    // Required to set to true if you are using B2C endpoint
    // This sample is for v1 endpoint only, so we set it to false
    isB2C: false,

    // Required if you want to provide the issuer(s) you want to validate instead of using the issuer from metadata
    issuer: null,

    // Required to set to true if the `verify` function has 'req' as the first parameter
    passReqToCallback: false,

    // Recommended to set to true. By default we save state in express session, if this option is set to true, then
    // we encrypt state and save it in cookie instead. This option together with { session: false } allows your app
    // to be completely express session free.
    useCookieInsteadOfSession: false,

    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],

    // Optional, 'error', 'warn' or 'info'
    loggingLevel: 'info',

    // Optional. The lifetime of nonce in session or cookie, the default value is 3600 (seconds).
    nonceLifetime: null,

    // Optional. The max amount of nonce saved in session or cookie, the default value is 10.
    nonceMaxAmount: 5,

    // Optional. The clock skew allowed in token validation, the default value is 300 seconds.
    clockSkew: null,
};

// Optional.
// If you want to get access_token for a specific resource, you can provide the resource here; otherwise,
// set the value to null.
// Note that in order to get access_token, the responseType must be 'code', 'code id_token' or 'id_token code'.
exports.resourceURL = 'https://graph.windows.net';

// The url you need to go to destroy the session with AAD
exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000';

// If you want to use the mongoDB session store for session middleware, set to true; otherwise we will use the default
// session store provided by express-session.
// Note that the default session store is designed for development purpose only.
exports.useMongoDBSessionStore = false;

// If you want to use mongoDB, provide the uri here for the database.
exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

// How long you want to keep session in mongoDB.
exports.mongoDBSessionMaxAge = 24 * 60 * 60;  // 1 day (unit is second)