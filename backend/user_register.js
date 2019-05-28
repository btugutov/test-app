const Promise = require('promise');
const os = require('os');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');



function add_user_to_tables_MSSQL(email, first_name, last_name, engagement_id) {
    let functionName = 'add_get_answer_table_MSSQL';
    return new Promise(function(resolve, reject) {
        // FIST ADD USER TO KA_employee_other
        let add_employee_other = `INSERT INTO KA_employee_other ([email], [first_name], [last_name]) VALUES ('${email}', '${first_name}', '${last_name}')`
        // then take the generated wfm_id and add user to KA_profile
        let add_profile = `INSERT INTO KA_profile 
        ([email], [reference_table], [wfm_id]) 
        VALUES ('${email}', 'KA_employee_other', (
            SELECT wfm_id FROM [dbo].[KA_employee_other] where email = '${email}' AND first_name = '${first_name}' AND last_name = '${last_name}'
            ) )`
        let get_employee = `SELECT wfm_id FROM [dbo].[KA_employee_other] where email = '${email}' AND first_name = '${first_name}' AND last_name = '${last_name}'`
        let get_profile = `SELECT profile_id FROM [dbo].[KA_profile] where email = '${email}' AND reference_table = 'KA_employee_other' AND wfm_id = (SELECT wfm_id FROM [dbo].[KA_employee_other] where email = '${email}' AND first_name = '${first_name}' AND last_name = '${last_name}')`
        let rawQuery = `${add_employee_other} ${add_profile} ${get_employee} ${get_profile}`
        dbQueryMethod.queryRaw(rawQuery).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


function register_user(object) {
    return new Promise(function(resolve, reject) {
        // do any kind of validation or filterint here
        // call db and register the user
        if (object.email == undefined || object.email == '') {
            reject('email not defined')
            throw 'email not defined'
        }else{
            add_user_to_tables_MSSQL(object.email, object.first_name, object.last_name, object.engagement_id).then(result => {
                // give the all clear that it is done
                resolve(result)
                return result
            }).catch(function(error) { reject(error); throw (error); })
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

/*
let testobj = { 'first_name': 'first3',
'last_name': 'last3',
'email': 'test3_email@bpcs.com',
'engagement_id': '1' }

register_user(testobj).then(result => {
    console.log('====-- register_user --====')
    console.log(result)
    console.log(result['recordsets'][0])
    console.log(result['recordsets'][1])
})
*/
module.exports = {
    register_user: register_user
};

//
/*
// user_register
const { register_user } = require('../backend/user_register.js');
*/