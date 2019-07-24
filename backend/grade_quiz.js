const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod, logEvent, log_event_detailed } = require('./classes.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

//const profileTable = "KA_profile";

function call_stored_proc_grading() {
    let functionName = 'call_stored_proc_grading';
    console.log("call_stored_proc_grading")
    console.log("++++++++++++++THIS SHOULD NOT BE CALLED!!!!++++++++++++++")
    return new Promise(function(resolve, reject) {
        let query_quiz = `EXEC sp_calculate_scores`;
        return dbQueryMethod.queryRaw(query_quiz).then(result => {
            console.log(`call_stored_proc_grading() result =>`, result)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function call_stored_proc_grading_for_one(submit_id) {
    let functionName = 'call_stored_proc_grading_for_one';
    console.log("call_stored_proc_grading_for_one", submit_id)
    let details = {
        submit_id: submit_id
    }
    return new Promise(function(resolve, reject) {
        let query_quiz = `EXEC sp_calculate_scores_test ${submit_id}`;
        return dbQueryMethod.queryRaw(query_quiz).then(result => {
            // console.log(`call_stored_proc_grading_for_one() result =>`, result)
            details.result = result;
            log_event_detailed("INFO", `Submit ID ${submit_id} is calculated successfully`, functionName, null, JSON.stringify(details))
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        reject(error);
        // log_event('WARNING', error, functionName);
        throw (error);
    })
}
function call_stored_proc_grading2(submit_id) {
    let functionName = 'call_stored_proc_grading2';
    // let's get selected inputs first
    
    return new Promise(function(resolve, reject) {
        let scores = {};
        get_selected_inputs_by_submit_id(submit_id).then(res1 => {
            resolve(res1)
        }).catch(function(error) {
            log_event('WARNING', error, 'get_selected_inputs_by_submit_id');
            throw (error);
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function get_selected_inputs_by_submit_id(submit_id){
    let functionName = 'get_selected_inputs_by_submit_id';
    return new Promise(function(resolve, reject) {
        let query_quiz = `SELECT TOP (1000) c_r.answer_id
        ,c_r.[question_id]
        ,[correct]
        ,[submit_id]
        ,[profile_id]
        ,c_r.soft_delete
        ,[choice_response_id]
        ,q.point_value
        ,q.display_type_id
    FROM [dbo].[KA_choice_response] as c_r
   JOIN KA_questions as q on q.question_id =  c_r.question_id
     where submit_id = ${submit_id}`;
        return dbQueryMethod.query(query_quiz).then(result => {
            // console.log(`call_stored_proc_grading() result =>`, result)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
// This returns a raw list of quizzes that are marked as completed.
// This is used to see how many quizzes are available to be graded.
function get_completed_quiz_submissions(profile_id, engagement_id) {
    let functionName = 'get_completed_quiz_submissions';
    if (profile_id == undefined) {
        profile_id = 0
    }
    return new Promise(function(resolve, reject) {
        let queryAvailableQuiz = `SELECT DISTINCT topic 
        ,KA_test_topic.topic_id 
        ,KA_test_topic.category 
        ,KA_quizzes.quiz_id 
        ,KA_quizzes.quiz_name 
        ,KA_quiz_submission.profile_id 
        ,KA_quiz_submission.submit_id 
        ,KA_quiz_submission.stop_time 
        ,KA_quiz_submission.graded 
        ,KA_quiz_submission.graded_by 
        ,KA_quiz_submission.regrade_submission
        FROM [dbo].[KA_test_topic] 
        JOIN KA_quizzes ON KA_test_topic.topic_id = KA_quizzes.topic_id 
        JOIN KA_quiz_submission ON KA_quizzes.quiz_id = KA_quiz_submission.quiz_id 
        WHERE (KA_quiz_submission.graded = 0 OR KA_quiz_submission.regrade_submission = 1)
        AND KA_quiz_submission.stop_time >= KA_quiz_submission.start_time
        AND ((KA_quiz_submission.graded_by is null) OR (KA_quiz_submission.graded_by = ${profile_id}) OR (KA_quiz_submission.regrade_submission = 1))
        AND KA_test_topic.engagement_id = ${engagement_id}
        ORDER BY KA_test_topic.category asc, KA_test_topic.topic asc;` //AND (KA_quiz_submission.graded_by is null OR KA_quiz_submission.graded_by = '${profile_id}' OR KA_quiz_submission.regrade_submission = 1)
        return dbQueryMethod.query(queryAvailableQuiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('ERROR', error, functionName);
        error += ` :: ${functionName} 
        :: ${getLineNumber()} `
        throw error;
    })
};

// This returns the complete quiz that a USER completed.
// This will return the answers that the USER submitted.
// This will also return the complete table of possible answers for the questions and the internal note of which ones are 'correct'
function get_completed_quiz_by_submissions(submit_id) {
    let functionName = 'get_completed_quiz_by_submissions';
    return new Promise(function(resolve, reject) {
        /*
        Gets a single completed quiz by the submit_id
        */
        let queryAvailableQuiz = `SELECT DISTINCT [KA_quiz_submission].[submit_id]
        ,[KA_quiz_submission].[quiz_id]
        ,[start_time]
        ,[stop_time]
        ,[KA_quiz_submission].[profile_id]
        ,[KA_quiz_submission].[soft_delete]
        ,[graded]
        ,[graded_by]
        ,questions.[question_id]
        ,isnull (choice.[answer_id], input.[answer_id]) [answer_id]
        ,isnull (choice.[time_start], input.[time_start]) [time_start]
        ,isnull (choice.[time_stop], input.[time_stop]) [time_stop]
        ,isnull (choice.[submit_id], input.[submit_id]) [submit_id]
        ,isnull (choice.[profile_id], input.[profile_id]) [profile_id]
        ,isnull (choice.[soft_delete], input.[soft_delete]) [soft_delete]
        ,input.[input_value]
        ,input.[grade]
        ,input.[grade_input]
        ,input.[reviewer_id]
        ,[KA_questions].[prompt]
        ,[KA_images].base64
        ,[KA_questions].expected_response
        ,[KA_questions].[training_module]
        ,[KA_questions].[training_url]
        ,[KA_questions].sort as question_sort
        ,[KA_questions].point_value
        FROM [dbo].[KA_quiz_submission]
        JOIN [KA_quiz_questions] questions ON questions.[quiz_id] = [KA_quiz_submission].[quiz_id]
        FULL OUTER JOIN [KA_choice_response] choice ON choice.[question_id] = questions.[question_id] and choice.[submit_id] = KA_quiz_submission.[submit_id]
        FULL OUTER JOIN [KA_input_response] input ON input.[question_id] = questions.[question_id] and input.[submit_id] = KA_quiz_submission.[submit_id]
        JOIN [KA_questions] on [KA_questions].question_id = questions.[question_id]
        FULL OUTER JOIN KA_images ON KA_images.question_id = questions.[question_id]
        WHERE KA_quiz_submission.[submit_id] = ${submit_id}
        AND KA_questions.soft_delete = 0
        ORDER BY question_sort, question_id ASC`
        return dbQueryMethod.query(queryAvailableQuiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

// used by start_grading_quiz
// I'm really tied this may need to be fixed 
function get_gradable_quiz_session_to_start(profile_id, topic_id) {
    let functionName = 'get_gradable_quiz_session_to_start';
    return new Promise(function(resolve, reject) {
        /*
        Gets a list of completed quiz_submissions
        */
        let query = `SELECT *
            FROM [dbo].[KA_quiz_submission]
            JOIN KA_quizzes ON [KA_quiz_submission].[quiz_id] = KA_quizzes.[quiz_id]
            JOIN KA_test_topic ON KA_quizzes.topic_id = KA_test_topic.topic_id
            WHERE KA_test_topic.topic_id = '${topic_id}'
            AND (KA_quiz_submission.graded = 0 or KA_quiz_submission.regrade_submission = 1)
            AND KA_quiz_submission.stop_time >= KA_quiz_submission.start_time
            AND (KA_quiz_submission.graded_by is null OR KA_quiz_submission.graded_by = '${profile_id}');`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

function check_current_quizzes(profile_id, topic_id) {
    let functionName = 'check_current_quizzes';
    console.log(`****** ${functionName} ****** profile_id => ${profile_id}; topic_id => ${topic_id}`)
    return new Promise(function(resolve, reject) {
        /*
        Gets a list of completed quiz_submissions
        */
        let query = `SELECT *
            FROM [dbo].[KA_quiz_submission]
            JOIN KA_quizzes ON [KA_quiz_submission].[quiz_id] = KA_quizzes.[quiz_id]
            JOIN KA_test_topic ON KA_quizzes.topic_id = KA_test_topic.topic_id
            WHERE KA_test_topic.topic_id = '${topic_id}'
            AND (KA_quiz_submission.graded = 0 or KA_quiz_submission.regrade_submission = 1)
            AND KA_quiz_submission.stop_time >= KA_quiz_submission.start_time
            AND (KA_quiz_submission.graded_by = '${profile_id}');`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

function start_gradable_quiz_session_by_id(profile_id, submit_id) {
    let functionName = 'start_gradable_quiz_session_by_id';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        // this does not need to be a promise. However this is an example of HOW you would do it as a Promise.
        let query = `UPDATE [KA_quiz_submission] SET graded_by = '${profile_id}', regrade_submission = 0, graded = 0 WHERE submit_id = '${submit_id}' AND (graded_by is null or regrade_submission = 1)`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// monolith block //

// this will mark a quiz to indicate that someone has started to grade it. UNLESS it was already marked as being graded
function start_grading_quiz_loop(profile_id, topic_id) {
    let functionName = 'start_grading_quiz_loop';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        try {
            //debugLog(functionName);
            get_gradable_quiz_session_to_start(profile_id, topic_id).then(result1 => {
                //console.log(result1);
                //console.log(result1[0]);
                if (result1[0] === null || result1[0] === undefined) {
                    resolve(undefined);
                    return undefined;
                } else if (result1[0]['regrade_submission'] == true || result1[0]['graded_by'] === undefined || result1[0]['graded_by'] === null) {
                    //debugLog('undefined');
                    start_gradable_quiz_session_by_id(profile_id, result1[0]['submit_id']).then(result2 => {
                        if (result2['rowsAffected'][0] === 0) {
                            // attempted to update graded_by with current user and failed. Known case is a race condition happened where someone else wrote their ID here first. 
                            // the update command requires the graded_by to be null in order to write to it. Therefore we SHOULD have a race condition.
                            resolve('RACE CONDITION');
                            return 'RACE CONDITION'
                        } else {
                            //debugLog(result2[0]['submit_id']);
                            //console.log(result2);
                            resolve(result1[0]['submit_id']);
                            return result1[0]['submit_id'];
                        }
                    }).catch(function(error) { reject(error); throw (error); })
                } else {
                    resolve(result1[0]['submit_id']);
                    return result1[0]['submit_id'];
                }
            }).catch(function(error) { reject(error); throw (error); })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            throw tryError;
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// PUBLIC FUNCTIONS //


// this completes the grading of a quiz by marking the quiz as completely graded
// [KA_quiz_submission] table with [graded = 1]
function finish_gradable_quiz_session_by_id(submit_id) {
    let functionName = 'finish_gradable_quiz_session_by_id';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        let query = `UPDATE [KA_quiz_submission] 
        SET graded = 1, is_calculated = 0, regrade_submission = 0, graded_time = getdate()
        WHERE submit_id = '${submit_id}'`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// function to release the hold that a grader puts on the
function release_grade_hold(submit_id, profile_id) {
    let functionName = 'release_grade_hold';
    console.log(`****** ${functionName} ******`)
    console.log(`release_grade_hold(submit_id = ${submit_id}, profile_id = ${profile_id})`)
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        let query = `UPDATE [KA_quiz_submission] 
        SET graded_by = null
        WHERE submit_id = '${submit_id}' AND graded_by = '${profile_id}'`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

function release_grade_hold_all(ids, profile_id) {
    let multiple_submit_ids = '';
    let counter = 1;
    for (let el in ids) {
        multiple_submit_ids += `submit_id = '${ids[el]}' `;
        if (counter < Object.keys(ids).length) {
            multiple_submit_ids += " OR "
        }
        counter++;
    }

    let functionName = 'release_grade_hold_all';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        let query = `UPDATE [KA_quiz_submission] 
        SET graded_by = null
        WHERE graded_by = '${profile_id}' AND  ${multiple_submit_ids}`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// This is to initiat start_grading_quiz_loop and retry if the fist attempt fails because of race conditions
// once the loop has run a second time, the results are final
function start_grading_quiz(profile_id, topic_id) {
    let functionName = 'start_grading_quiz';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        try {
            //debugLog(functionName);
            start_grading_quiz_loop(profile_id, topic_id).then(result1 => {
                //race condition happened and someone else claiming the top quiz first.
                //run loop again and get the next quiz
                if (result1 == 'RACE CONDITION') {
                    start_grading_quiz_loop(profile_id, topic_id).then(result2 => {
                        if (result2 == 'RACE CONDITION') {
                            // at this point there is no quiz available, so return undefined
                            resolve(undefined);
                            return undefined
                        } else {
                            resolve(result1);
                            return result1;
                        }
                    }).catch(function(error) { reject(error); throw (error); })
                } else {
                    resolve(result1);
                    return result1;
                }
            }).catch(function(error) { reject(error); throw (error); })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            throw tryError;
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function continue_grading_quiz(profile_id, submit_id) {
    let functionName = 'continue_grading_quiz';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        /*
        Gets a list of completed quiz_submissions
        */
        let query = `SELECT *
            FROM [dbo].[KA_quiz_submission]
            JOIN KA_quizzes ON [KA_quiz_submission].[quiz_id] = KA_quizzes.[quiz_id]
            JOIN KA_test_topic ON KA_quizzes.topic_id = KA_test_topic.topic_id
            WHERE submit_id = '${submit_id}'`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

function update_grade_input_response(question_id, submit_id, grade_scale, grade_input, reviewer_id, grade_value) {
    console.log("update_grade_input_response params ======>")
    console.log(`question_id = ${question_id}, submit_id = ${submit_id}, grade_scale = ${grade_scale}, grade_input = ${grade_input}, reviewer_id = ${reviewer_id} , grade_value=> ${grade_value})`)
    console.log("<=========================================")
    let gradeValue = (grade_scale * 5)
    let functionName = 'update_grade_input_response';
    console.log(`****** ${functionName} ******`)
    let details = {
        question_id: question_id, submit_id:submit_id, grade_scale:grade_scale, grade_input:grade_input, reviewer_id:reviewer_id, grade_value:grade_value
    }
    return new Promise(function(resolve, reject) {
        let query = `UPDATE [KA_input_response] 
        SET grade = '${grade_value}', grade_input = '${grade_input}', reviewer_id = '${reviewer_id}' , grade_value = '${grade_value}', grade_scale = '${grade_scale}' 
        WHERE question_id = '${question_id}' and submit_id = '${submit_id}'`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event_detailed("ERROR", error, functionName, null, JSON.stringify(details)) 
        // log_event('WARNING', error, functionName);
        throw error;
    })
};

function get_quiz_question_type_by_submit_id_MSSQL(submit_id) {
    let functionName = 'get_quiz_question_type_by_submit_id_MSSQL';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        let queryAvailableQuiz = `SELECT COUNT(*)
        FROM [dbo].[KA_quiz_submission]
        FULL OUTER JOIN KA_input_response ON KA_input_response.submit_id = [KA_quiz_submission].submit_id
        Where [KA_quiz_submission].submit_id = ${submit_id} and [input_value] is not null`
        return dbQueryMethod.query(queryAvailableQuiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

function quizEndChecks(submit_id) {
    let functionName = 'quizEndChecks';
    console.log(`****** ${functionName} ******`)
    return new Promise(function(resolve, reject) {
        // take in params for quiz person was taking
        // get quiz from sql
        get_quiz_question_type_by_submit_id_MSSQL(submit_id).then(result => {
                console.log(`get_quiz_question_type_by_submit_id_MSSQL(submit_id).then(result =>`, result)
                    // determine if the quiz has > 0 input question
                    // if == 0, 
                if (result[0][''] == 0) {
                    // mark this submit_id as graded = 1
                    // ^^ this normally happens in the grade quiz page, however it won't be graded if there is no Input Questions. so we need to do this here.
                    finish_gradable_quiz_session_by_id(submit_id).then(wait => {
                        // kick of grade calculation stored procedure 
                        // console.log(`finish_gradable_quiz_session_by_id(submit_id).then(wait => `, wait)
                        let obj = {
                            log_event: `call_stored_proc_grading_for_one for submit_id => ${submit_id}`,
                            log_level: 'INFO',
                            host: 'grade_quiz.js/quizEndChecks/call_stored_proc_grading_for_one()',
                            line: getLineNumber(),
                            user_id: null,
                            event_time: new Date()
                          }
                        // logEvent(obj)
                        call_stored_proc_grading_for_one(submit_id).then(res_gradings =>{
                            resolve(result)
                        }).catch(function(error){
                            log_event('ERROR', error, 'call_stored_proc_grading_for_one');
                            reject(error)
                        })
                        // call_stored_proc_grading().catch(function(error) {
                        //     
                        // })
                        // resolve(result)
                        // return result;
                    }).catch(function(error) {
                        log_event('WARNING', error, functionName);
                        reject(error)
                        throw error;
                    })
                }
                // if >0 
                else {
                    resolve(true)
                    return;
                    // call_stored_proc_grading_for_one(submit_id).then(res_gradings =>{
                    //     resolve(result)
                    // }).catch(function(error){
                    //     log_event('ERROR', error, 'call_stored_proc_grading_for_one');
                    //     reject(error)
                    // })
                }
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error)
                throw error;
            })
            // log that grade procedure was successful
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

// Keep this in alphabetical order
module.exports = {
    get_completed_quiz_by_submissions: get_completed_quiz_by_submissions,
    get_completed_quiz_submissions: get_completed_quiz_submissions,
    finish_gradable_quiz_session_by_id: finish_gradable_quiz_session_by_id,
    release_grade_hold: release_grade_hold,
    release_grade_hold_all: release_grade_hold_all,
    start_grading_quiz: start_grading_quiz,
    update_grade_input_response: update_grade_input_response,
    continue_grading_quiz: continue_grading_quiz,
    quizEndChecks: quizEndChecks,
    check_current_quizzes: check_current_quizzes,
    call_stored_proc_grading: call_stored_proc_grading,
    call_stored_proc_grading2: call_stored_proc_grading2,
    call_stored_proc_grading_for_one:call_stored_proc_grading_for_one
};

// create a one liner here that is what another file will need to import everything from this file. 
/*
// grade_quiz
const { get_completed_quiz_submissions, get_completed_quiz_by_submissions, finish_gradable_quiz_session_by_id, release_grade_hold, start_grading_quiz, update_grade_input_response, quizEndChecks } = require('../backend/grade_quiz.js');
*/