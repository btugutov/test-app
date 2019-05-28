/*
This is where you put your monothiths and things that do not practical to split into single purpose, tiny chunks.
*/

const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

// the rare time i use server settings
let awake_toggle = false;
let sleep_timer = 5000;
let sleep_error_counter = 0;
let _stop = false;
let KA_setting_id = 0; 
let log_sleep = true;
// the rare time i use server settings

// methods

// Stay awake function
// This will be looking for a setting in the KA_settings table of the database
// If stay_awake = true, loop continues forever.
// If stay_awake = false, it will stop after the fist loop.
// This loop will be called and the setting set when someone hits the mail page.

function get_stay_awake_MSSQL(id) {
    let functionName = 'get_stay_awake_MSSQL';
    return new Promise(function(resolve, reject) {
        let queryAvailableQuiz = `SELECT *
        FROM [dbo].[KA_settings] WHERE [id] = ${id}`
        return dbQueryMethod.query(queryAvailableQuiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function stay_awake_loop(){
    let functionName = 'stay_awake';
    try{
        get_stay_awake_MSSQL(KA_setting_id).then(result => {
            awake_toggle = result[0]['stay_awake']
            sleep_timer = result[0]['sleep_timer']
            log_sleep = result[0]['log_sleep']
            return 'done'
        }).catch(function(error) {
            log_event('WARNING', 'error retrieving stay_awake setting from KA_settings table of the DB', functionName);
            throw 'issue with connection'
        })
    }catch (tryError) { log_event('ERROR', tryError, functionName); console.log(tryError); }
}

async function stay_awake(developer){
    let functionName = 'stay_awake';
    if(developer === true){KA_setting_id = 1} // have the setting check here to allow dev table to be used
    //debugLog(KA_setting_id)
    if(_stop === true){
        // duplicate found, no not allow multiple of this loop to run simultaneously 
        debugLog('duplicate start detected, do nothing')
        return 'duplicate start detected, do nothing'
    }
    else{    
        _stop = true; // halting duplicate calls to this function.
        try{
            stay_awake_loop(KA_setting_id)
            await sleep(sleep_timer)
            if(awake_toggle === true){
                if(log_sleep === true){log_event('INFO', `sleep time is done. calling myself and ending loop : timer set at : ${sleep_timer}`, functionName);}
                sleep_error_counter = 0;
                _stop = false; // allowing the restart of self
                stay_awake();
                return 'call self again'
            }else{
                log_event('INFO', 'stay_awake has been turned off. My batteries are low and its getting dark', functionName);
                return 'shutting down loop'
            }
        }catch(err){
            log_event('ERROR', err, functionName)
            if(log_sleep === true){log_event('INFO', `error with the try block, usually a sql non responsive issue, calling self again:: error count :: ${sleep_error_counter}`, functionName);}
            sleep_error_counter++;
            debugLog('sleep_error_counter : ', sleep_error_counter)
            if(sleep_error_counter < 5){
                _stop = false; // allowing the restart of self
                stay_awake();
                return 'call self again'
            }
            else{
                log_event('WARNING', `sleep_error_counter is too high. aborting loop and ending stay_awake :: error count :: ${sleep_error_counter}`, functionName);
                throw 'sleep_error_counter is too high. aborting loop and ending stay_awake'
            }
        }
    }
}

//demo()

module.exports = {
    stay_awake: stay_awake
};

/*
// stay_awake
const { stay_awake } = require('./stay_awake.js');
*/