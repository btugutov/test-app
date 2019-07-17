const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod, logEvent, log_event_detailed } = require('./classes.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

//const profileTable = "KA_profile";

// get list of topics based on engagement_id 
function get_topic_table_by_engagement(engagement_id) {
    let functionName = 'get_topic_table_by_engagement';
    let target_info = {
        engagement_id: engagement_id
    }
    return new Promise(function(resolve, reject) {
        let image_query = `SELECT * 
            FROM [dbo].[KA_test_topic] 
            WHERE engagement_id = ${engagement_id} AND soft_delete = 0`;
        return dbQueryMethod.query(image_query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event_detailed("ERROR", error, functionName, null, JSON.stringify(details))
        // log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
}

// this marks the quiz that a USER is taking by marking the stop_time to current MS SQL time
function finish_quiz_session(submit_id) {
    let functionName = 'finish_quiz_session';
    console.log('=-=-=-=-=-finish_quiz_session=-=-=-=-=-: submit_id=>>>', submit_id)
    return new Promise(function(resolve, reject) {
        let update = `UPDATE [KA_quiz_submission] 
        SET stop_time = getdate()
        WHERE submit_id = ${submit_id}`;
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
}

// recored USER response to a Radial question
// this marks the choice question with what the user marked as their answer
function finish_response_choice(answer_id, profile_id, submit_id, question_id) {
    debugLog('HERE')
    let functionName = 'finish_response_choice';
    return new Promise(function(resolve, reject) {
        let update = `UPDATE [KA_choice_response] 
        SET answer_id = '${answer_id}' , time_stop = getdate()
        WHERE profile_id = ${profile_id} AND submit_id = ${submit_id} AND question_id = ${question_id} AND answer_id is null`;
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
};

// recored USER response to a input question
// this marks the input question with what the user marked as their answer
function finish_response_input(answer_id, input_value, profile_id, submit_id, question_id) {
    let functionName = 'finish_response_input';
    return new Promise(function(resolve, reject) {
        let update = `UPDATE [KA_input_response] 
        SET answer_id = '${answer_id}' , input_value = '${input_value}' ,time_stop = getdate()
        WHERE profile_id = ${profile_id} AND submit_id = ${submit_id} AND question_id = ${question_id} AND answer_id is null`;
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
};


// Returns the row of the [KA_images] table matching a given [question_id].
function get_image_by_questionID_MSSQL(question_id) {
    let functionName = 'get_image_by_questionID_MSSQL';
    return new Promise(function(resolve, reject) {
        let image_query = `SELECT * 
            FROM [dbo].[KA_images] 
            WHERE question_id = ${question_id}`;
        return dbQueryMethod.query(image_query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
}

function get_specific_submission(question_id, profile_id, submit_id, table) {
    let functionName = 'get_specific_submission';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [time_start] 
             FROM ${table} 
             where question_id = ${question_id} 
             AND profile_id = ${profile_id} 
             AND submit_id = ${submit_id} 
             AND soft_delete = 0;`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
};

function get_topic_id_by_submit_id(submit_id) {
    let functionName = 'get_topic_id_by_submit_id';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [topic_id]
        ,KA_quiz_submission.quiz_id
        ,KA_quiz_submission.profile_id
        FROM KA_quiz_submission
        JOIN KA_quizzes ON KA_quiz_submission.quiz_id = KA_quizzes.quiz_id
        where submit_id = ${submit_id}`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        reject(error)
        throw error;
    })
}

function start_response_choice(question_id, submit_id, profile_id) {
    let functionName = 'start_response_choice';
    let target_info = `functionName: ${functionName}; question_id: ${question_id}; submit_id: ${submit_id}; profile_id: ${profile_id}`
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_choice_response] 
        ([question_id],[time_start],[submit_id],[profile_id]) 
        VALUES (${question_id}, getdate(), ${submit_id}, ${profile_id})`
        dbQueryMethod.queryRaw(insert).then(result => {
            // log_event('INFO', values, functionName);
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {

        log_event('ERROR', error, target_info);
        reject(error)
        throw error;
    })
};

function start_response_input(question_id, submit_id, profile_id) {
    let functionName = 'start_response_input';
    let target_info = `functionName: ${functionName}; question_id: ${question_id}; submit_id: ${submit_id}; profile_id: ${profile_id}`
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_input_response] 
        ([question_id],[time_start],[submit_id],[profile_id]) 
        VALUES (${question_id}, getdate(), ${submit_id}, ${profile_id})`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        reject(error)
        throw error;
    })
};

// monoliths //

// this is called by the front end in order to complete a question during an assessment
function finish_response(answer_id, input_value, profile_id, submit_id, question_id) {
    //console.log(answer_id,input_value,profile_id,submit_id,question_id)
    let functionName = 'finish_response';
    let target_info = `functionName: ${functionName}; answer_id: ${answer_id}; input_value: ${input_value}; profile_id: ${profile_id}; submit_id: ${submit_id}; question_id: ${question_id}`
    return new Promise(function(resolve, reject) {
        // there are 3 conditions at the moment that we need to check for
        // answer_id === undefined  >> unescaped input
        // answer_id === 'undefined'  >> escaped input
        // answer_id === 0  >> hard setting answer_id to '1' indicates this is text input. No Radial questions use answer_id 0 by design.
        //debugLog(answer_id);
        //console.log(answer_id);
        debugLog('HERE')
        if (answer_id === [] || answer_id === undefined || answer_id === 0 || answer_id === '0' || answer_id[0] === 0 || answer_id[0] === '0') {
            debugLog('input');
            finish_response_input(answer_id, input_value, profile_id, submit_id, question_id).then(result => {
                get_topic_id_by_submit_id(submit_id).then(topic_result => {
                    result.topic_id = topic_result[0]['topic_id']
                    result.quiz_id = topic_result[0]['quiz_id']
                    result.profile_id = topic_result[0]['profile_id']
                    resolve(result);
                    return result;
                }).catch(function(error) { reject(error); throw (error); })
            }).catch(function(error) { reject(error); throw (error); })
        } else {
            debugLog('choice');
            finish_response_choice(answer_id, profile_id, submit_id, question_id).then(result => {
                get_topic_id_by_submit_id(submit_id).then(topic_result => {
                    result.topic_id = topic_result[0]['topic_id']
                    result.quiz_id = topic_result[0]['quiz_id']
                    result.profile_id = topic_result[0]['profile_id']
                    resolve(result);
                    return result;
                }).catch(function(error) { reject(error); throw (error); })
            }).catch(function(error) { reject(error); throw (error); })
        }
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        reject(error);
        throw (error);
    })
}

async function start_response(question_id, submit_id, profile_id, question_type_id) {
    //console.log(question_id, submit_id, profile_id, question_type_id)
    let functionName = 'start_response';
    if (question_type_id == 1 || question_type_id == 3) {
        let table = '[dbo].[KA_choice_response]'
        let result = await get_specific_submission(question_id, profile_id, submit_id, table)
        if (result[0] === undefined) {
            await start_response_choice(question_id, submit_id, profile_id);
        }
        return functionName;
    } else if (question_type_id === 2) {
        let table = '[dbo].[KA_input_response]'
        let result = await get_specific_submission(question_id, profile_id, submit_id, table)
        if (result[0] === undefined) {
            await start_response_input(question_id, submit_id, profile_id);
        }
        return functionName;
    }
};


// Keep this in alphabetical order
module.exports = {
    //add_response_choice: add_response_choice,
    //add_response_input: add_response_input,
    finish_quiz_session: finish_quiz_session,
    finish_response: finish_response,
    get_image_by_questionID_MSSQL: get_image_by_questionID_MSSQL,
    start_response: start_response,
    get_topic_table_by_engagement: get_topic_table_by_engagement
};

// create a one liner here that is what another file will need to import everything from this file. 
/*
// take_quiz
const { finish_quiz_session, finish_response, get_image_by_questionID_MSSQL, start_response, get_topic_table_by_engagement } = require('../backend/take_quiz.js');
*/