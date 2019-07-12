const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');

// grade_quiz
const { get_completed_quiz_submissions, get_completed_quiz_by_submissions, finish_gradable_quiz_session_by_id, release_grade_hold, start_grading_quiz, update_grade_input_response, quizEndChecks } = require('../backend/grade_quiz.js');

// give table with all submissions for given user
function get_KA_quiz_submission_by_profile_id(profile_id) {
    let functionName = 'get_KA_quiz_submission_by_profile_id';
    return new Promise(function (resolve, reject) {
        let query = `SELECT [KA_quiz_submission].[submit_id]
               ,[KA_quiz_submission].[quiz_id]
               ,[KA_quiz_submission].[start_time]
               ,[KA_quiz_submission].[stop_time]
               ,[KA_quiz_submission].[profile_id]
               ,[KA_quiz_submission].[soft_delete]
               ,[KA_quiz_submission].[graded]
               ,[KA_quiz_submission].[graded_by]
               ,[KA_quiz_submission].[grade_comment]
               ,[KA_quiz_submission].[invalidate_submission]
               ,[KA_quiz_submission].[retake_topic]
               ,[KA_profile].[email]
               ,[KA_employee].[first_name]
               ,[KA_employee].[last_name]
               ,[KA_employee].[title]
               ,[KA_employee].[team]
           FROM [dbo].[KA_quiz_submission]
           JOIN [dbo].[KA_profile] ON [KA_quiz_submission].profile_id = KA_profile.profile_id
           JOIN [dbo].[KA_employee] ON KA_profile.email = KA_employee.email
           WHERE KA_profile.profile_id = ${profile_id}`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// give table with all submissions for every user
function get_KA_quiz_submission_all() {
    let functionName = 'get_KA_quiz_submission_all';
    return new Promise(function (resolve, reject) {
        let query = `SELECT [KA_quiz_submission].[submit_id]
        ,[KA_quiz_submission].[quiz_id]
        ,[KA_quiz_submission].[start_time]
        ,[KA_quiz_submission].[stop_time]
        ,[KA_quiz_submission].[profile_id]
        ,[KA_quiz_submission].[soft_delete]
        ,[KA_quiz_submission].[graded]
        ,[KA_quiz_submission].[graded_by]
        ,[KA_quiz_submission].[grade_comment]
        ,[KA_quiz_submission].[invalidate_submission]
        ,[KA_quiz_submission].[retake_topic]
        ,[KA_quiz_submission].[regrade_submission]
        ,[KA_quiz_submission].[calculated_score]
        ,[KA_quiz_submission].[graded_time]
		,[grader_email] = (SELECT email FROM [ka_profile] where [KA_profile].[profile_id] = [KA_quiz_submission].[graded_by])
		,[grader_full_name] = (SELECT KA_employee.first_name + ' ' + KA_employee.last_name AS full_name FROM [ka_profile] JOIN [dbo].[KA_employee] ON KA_profile.email = KA_employee.email where [KA_profile].[profile_id] = [KA_quiz_submission].[graded_by])
        ,[KA_profile].[email]
		,isnull ([KA_employee].[first_name], [KA_employee_dev].[first_name]) [first_name]
		,isnull ([KA_employee].[last_name], [KA_employee_dev].[last_name]) [last_name]
		,isnull ([KA_employee].[title], [KA_employee_dev].[title]) [title]
		,isnull ([KA_employee].[team], [KA_employee_dev].[team]) [team]
        ,[KA_test_topic].topic
    FROM [dbo].[KA_quiz_submission]
    JOIN [dbo].[KA_profile] ON [KA_quiz_submission].profile_id = KA_profile.profile_id
    FULL OUTER JOIN [dbo].[KA_employee] ON KA_profile.email = KA_employee.email
	FULL OUTER JOIN [dbo].[KA_employee_dev] ON KA_profile.email = KA_employee_dev.email
    JOIN [dbo].[KA_quizzes] ON [KA_quiz_submission].quiz_id = [KA_quizzes].quiz_id
    JOIN [dbo].[KA_test_topic] ON [KA_test_topic].topic_id = [KA_quizzes].topic_id`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


// give table with all submissions for every user
function get_KA_quiz_submission_by_engagement_id(engagement_id) {
    let functionName = 'get_KA_quiz_submission_all';
    return new Promise(function (resolve, reject) {
        let query = `SELECT [KA_quiz_submission].[submit_id]
        ,[KA_quiz_submission].[quiz_id]
        ,[KA_quiz_submission].[start_time]
        ,[KA_quiz_submission].[stop_time]
        ,[KA_quiz_submission].[profile_id]
        ,[KA_quiz_submission].[soft_delete]
        ,[KA_quiz_submission].[graded]
        ,[KA_quiz_submission].[graded_by]
        ,[KA_quiz_submission].[grade_comment]
        ,[KA_quiz_submission].[invalidate_submission]
        ,[KA_quiz_submission].[retake_topic]
        ,[KA_quiz_submission].[regrade_submission]
        ,[KA_quiz_submission].[calculated_score]
        ,[KA_quiz_submission].[graded_time]
		,[grader_email] = (SELECT email FROM [ka_profile] where [KA_profile].[profile_id] = [KA_quiz_submission].[graded_by])
		,[grader_full_name] = (SELECT KA_employee.first_name + ' ' + KA_employee.last_name AS full_name FROM [ka_profile] JOIN [dbo].[KA_employee] ON KA_profile.email = KA_employee.email where [KA_profile].[profile_id] = [KA_quiz_submission].[graded_by])
        ,[KA_profile].[email]
		,isnull ([KA_employee].[first_name], [KA_employee_dev].[first_name]) [first_name]
		,isnull ([KA_employee].[last_name], [KA_employee_dev].[last_name]) [last_name]
		,isnull ([KA_employee].[title], [KA_employee_dev].[title]) [title]
		,isnull ([KA_employee].[team], [KA_employee_dev].[team]) [team]
        ,[KA_test_topic].topic
    FROM [dbo].[KA_quiz_submission]
    JOIN [dbo].[KA_profile] ON [KA_quiz_submission].profile_id = KA_profile.profile_id
    FULL OUTER JOIN [dbo].[KA_employee] ON KA_profile.email = KA_employee.email
	FULL OUTER JOIN [dbo].[KA_employee_dev] ON KA_profile.email = KA_employee_dev.email
    JOIN [dbo].[KA_quizzes] ON [KA_quiz_submission].quiz_id = [KA_quizzes].quiz_id
    JOIN [dbo].[KA_test_topic] ON [KA_test_topic].topic_id = [KA_quizzes].topic_id
    WHERE KA_test_topic.engagement_id = ${engagement_id}`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_users_admin_permission_by_profile_id_MSSQL(profile_id) {
    let functionName = 'get_users_admin_permission_by_profile_id_MSSQL';
    return new Promise(function (resolve, reject) {
        let query = `SELECT * FROM [dbo].[vw_employees_permission_admin] WHERE profile_soft_delete = 0 AND profile_id = ${profile_id};`
        return dbQueryMethod.query(query).then(result => {
            resolve(result);
            return result;
        }).catch(function (error) { reject(error); throw error; })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// update table to invalidate_submission
function update_KA_quiz_submission_by_submit_id(submit_id, invalidate_submission, retake_topic, regrade_submission) {
    let functionName = 'update_KA_quiz_submission_invalidate_by_submit_id';
    return new Promise(function (resolve, reject) {
        let update = `UPDATE KA_quiz_submission 
        SET [invalidate_submission] = '${invalidate_submission}', [retake_topic] = '${retake_topic}', [regrade_submission] = '${regrade_submission}'
        WHERE submit_id = '${submit_id}'`
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// Loop to process each entry in return

// Accept object and break it into pieces
function edit_submissions_main_LOOP(obj, submit_id, edit_by) {
    let functionName = 'edit_submissions_main_LOOP';
    // get
    //for(let a in Object.keys(objKeys)){
    return new Promise(function (resolve, reject) {
        try {
            console.log(`obj['invalidate_submission'], obj['retake_topic'], obj['regrade_submission'] =>`, obj['invalidate_submission'], obj['retake_topic'], obj['regrade_submission'])
            if (obj['regrade_submission']) {
                call_stored_proc_grading_for_one(submit_id).then(res => {
                    update_KA_quiz_submission_by_submit_id(submit_id, obj['invalidate_submission'], obj['retake_topic'], false).then(result => {
                        console.log("call_stored_proc_grading_for_one and update_KA_quiz_submission_by_submit_id are done", submit_id)
                        resolve(result)
                    }).catch(function (error) { reject(error); })
                }).catch(function (error) { reject(error); })
            }else{
                //update_KA_quiz_submission_by_submit_id(submit_id, invalidate_submission, retake_topic, regrade_submission)
                update_KA_quiz_submission_by_submit_id(submit_id, obj['invalidate_submission'], obj['retake_topic'], obj['regrade_submission']).then(result => {
                    console.log('update_KA_quiz_submission_by_submit_id is done', submit_id)
                    resolve(result)
                    // if(obj['retake_topic'] == 1){
                    //     quizEndChecks(submit_id).then(report => {
                    //         console.log('***********************************************')
                    //         console.log('***********************update_KA_quiz_submission_by_submit_id************************')
                    //         console.log(report)
                    //         console.log('***********************************************')
                    //     })
                    // }
                }).catch(function (error) { reject(error); })
            }
        } catch (err) {
            console.log('calling promise object to write updates to KA_quiz_submissions table.')
            console.log(err)
            log_event('WARNING', err, functionName);
            reject(error);
        }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        // throw (error);
        reject(error);
    })
}


// export / public funtions //
function edit_submissions_main(object, edit_by) {
    let functionName = 'edit_submissions_main';
    //console.log('***********************************************')
    //console.log(functionName)
    //console.log(Object.keys(object))

    //console.log(object)
    //console.log(edit_by)
    //console.log('**********************************************')
    return new Promise(function (resolve, reject) {


        try {
            get_users_admin_permission_by_profile_id_MSSQL(edit_by).then(permission_table => {
                try {
                    let results = {};
                    if (true === (permission_table[0]['admin_owner'] || permission_table[0]['admin_grader'])) {
                        let length = Object.keys(object).length;
                        for (let el in object) {
                            // let i = objKeys[a]
                            //console.log(object[i])
                            edit_submissions_main_LOOP(object[el], el, edit_by).then(res => {
                                results[el] = res;
                                console.log(`${Object.keys(results).length}/${length}: incoming res => ${el}`)
                                if (Object.keys(results).length == length) {
                                    resolve(results);
                                }
                            }).catch(function (error) {
                                results[el] = error;
                                console.log(`${Object.keys(results).length}/${length}: incoming res => ${el}`)
                                if (Object.keys(results).length == length) {
                                    resolve(results);
                                }
                            })
                        }
                        // return 'edit_submissions_main COMPLETE'
                    }
                    else {
                        console.log('the user is not permitted to make requested change. FAIL')
                        throw 'the user is not permitted to make requested change. FAIL'
                    }
                }
                catch (err) {
                    console.log(err)
                    console.log('issue with checking if a user has permission to change status of sumbitted quizzes')
                    reject(error);
                    throw err
                }
            }).catch(function (error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            })
        }
        catch (err) {
            console.log(err)
            console.log('issue with checking if a user has permission to change status of sumbitted quizzes')
            reject(error);
            throw err
        }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}

function call_stored_proc_grading_for_one(submit_id) {
    let functionName = 'call_stored_proc_grading_for_one';
    console.log("call_stored_proc_grading_for_one", submit_id)
    return new Promise(function(resolve, reject) {
        let query_quiz = `EXEC sp_calculate_scores_test ${submit_id}`;
        return dbQueryMethod.queryRaw(query_quiz).then(result => {
            // console.log(`call_stored_proc_grading_for_one() result =>`, result)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
/*
EXPORTS 
*/

module.exports = {
    get_KA_quiz_submission_by_profile_id: get_KA_quiz_submission_by_profile_id,
    get_KA_quiz_submission_all: get_KA_quiz_submission_all,
    get_KA_quiz_submission_by_engagement_id: get_KA_quiz_submission_by_engagement_id,
    edit_submissions_main: edit_submissions_main
};
/*
// edit_submission_status
const { get_KA_quiz_submission_by_profile_id, get_KA_quiz_submission_all, get_KA_quiz_submission_by_engagement_id, edit_submissions_main } = require('../backend/edit_submission_status.js');
*/