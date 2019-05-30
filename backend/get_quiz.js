const Promise = require('promise');
const os = require('os');
const classModule = require('./classes.js');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

// class like objects >>> really just json objects

class quiz {
    constructor(topic_id, profile_id) {
        this.topic;
        this.profile_id = profile_id; // user class
        this.range;
        this.topic_id = topic_id;
        this.quiz_id;
        this.quiz_name;
        this.submit_id;
        this.quiz_session;
    }
}

// Used by QUIZ_FACTORY
// Return the current quiz based on profile_id and topic_id
// This will also trim off question that a user has already answered. 
// Eventually this will return an empty table [] when all questions have been answered
function get_quiz_current_MSSQL(topic_id, profile_id, submit_id) {
    let functionName = 'get_quiz_current_MSSQL';
    return new Promise(function(resolve, reject) {
        let query_quiz = `SELECT topic
        ,KA_test_topic.topic_id
        ,KA_test_topic.category
        ,KA_quizzes.quiz_id
        ,KA_quizzes.quiz_name
        ,KA_quiz_questions.question_id
        ,KA_questions.prompt 
        ,KA_display_types.display_type_id 
        ,KA_display_types.display_type_description 
        ,KA_question_types.question_type_id 
        ,KA_question_types.question_type_description 
        ,KA_answers.answer_id 
        ,KA_answers.sort as answer_sort
        ,KA_answers.answer_prompt 
        ,KA_answers.correct 
        ,KA_questions.image 
        ,KA_images.base64 
        ,KA_quiz_submission.profile_id 
        ,KA_quiz_submission.submit_id 
        ,KA_questions.training_module
        ,KA_questions.training_url
        ,KA_questions.sort as question_sort
        ,KA_answers.soft_delete as answer_soft_delete
        ,KA_answers.bucket_id
        ,KA_bucket.bucket_name
        ,KA_questions.soft_delete as question_soft_delete
        --,KA_input_response.answer_id
        --,KA_choice_response.answer_id
        FROM [dbo].[KA_test_topic]
        JOIN KA_quizzes ON KA_test_topic.topic_id = KA_quizzes.topic_id
        JOIN KA_quiz_submission ON KA_quizzes.quiz_id = KA_quiz_submission.quiz_id 
        JOIN KA_quiz_questions ON KA_quizzes.quiz_id = KA_quiz_questions.quiz_id
        JOIN KA_questions ON KA_quiz_questions.question_id = KA_questions.question_id
        JOIN KA_answers ON KA_questions.question_id = KA_answers.question_id
        JOIN KA_display_types ON KA_questions.display_type_id = KA_display_types.display_type_id
        JOIN KA_question_types ON KA_questions.question_type_id = KA_question_types.question_type_id
        FULL OUTER JOIN KA_images ON KA_questions.question_id = KA_images.question_id 
        FULL OUTER JOIN KA_choice_response ON (KA_quiz_questions.question_id = KA_choice_response.question_id and KA_quiz_submission.profile_id = KA_choice_response.profile_id and KA_quiz_submission.submit_id = KA_choice_response.submit_id) 
        FULL OUTER JOIN KA_input_response ON (KA_quiz_questions.question_id = KA_input_response.question_id and KA_quiz_submission.profile_id = KA_input_response.profile_id and KA_quiz_submission.submit_id = KA_input_response.submit_id) 
        FULL OUTER JOIN dbo.KA_bucket ON KA_bucket.bucket_id = KA_answers.bucket_id
        WHERE KA_test_topic.topic_id = ${topic_id}
        AND KA_answers.soft_delete = '0'
        AND KA_questions.soft_delete = '0'
        AND KA_quiz_submission.profile_id = ${profile_id}
        AND KA_quiz_submission.submit_id = ${submit_id}
        AND (KA_choice_response.answer_id is NULL)
        AND (KA_input_response.answer_id is NULL)
        ORDER BY question_sort ASC, question_id ASC, answer_sort ASC`;
        return dbQueryMethod.query(query_quiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) {
            reject(error)
            log_event('WARNING', error, functionName);
            throw error;
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

// used by QUIZ_FACTORY to get the quiz that a given user is currently taking.
// This ensures that quizzes are account bound and not tied to session or hardware.
function get_quiz_session_MSSQL(profile_id, topic_id, range, engagement_id) {
    let functionName = 'get_quiz_session_MSSQL';
    return new Promise(function(resolve, reject) {
        let get_quiz_query = `SELECT submit_id 
        ,KA_quiz_submission.quiz_id 
        ,start_time 
        ,stop_time 
        ,profile_id 
        ,KA_quizzes.quiz_name 
        ,KA_test_topic.topic 
        ,KA_test_topic.topic_id 
        FROM [dbo].[KA_quiz_submission] 
        JOIN KA_quizzes ON KA_quiz_submission.quiz_id = KA_quizzes.quiz_id 
        JOIN KA_test_topic ON KA_quizzes.topic_id = KA_test_topic.topic_id 
        WHERE KA_quiz_submission.soft_delete = 0 AND profile_id = ${profile_id}   
        AND start_time between getdate()-${range} and getdate() 
        AND KA_test_topic.topic_id = ${topic_id}
        AND KA_test_topic.engagement_id = ${engagement_id}
        AND KA_quiz_submission.retake_topic = 0 
       --AND start_time>stop_time 
        ORDER BY start_time desc`;
        return dbQueryMethod.query(get_quiz_query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) {
            reject(error)
            log_event('WARNING', error, functionName);
            throw error;
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
}

function start_quiz_session_MSSQL(quiz_id, profile_id) {
    let functionName = 'start_quiz_session_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_quiz_submission] 
        ([quiz_id],[start_time],[profile_id]) 
        VALUES ('${quiz_id}', getdate(), '${profile_id}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) {
            reject(error)
            log_event('WARNING', error, functionName);
            throw error;
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// monoliths //

// Create a quiz object and all the mess is around that
function get_Quiz(topic_id, profile_id, engagement_id, range) {
    let functionName = 'get_Quiz';
    return new Promise(function(resolve, reject) {
        debugLog('(topic_id, profile_id, range)')
            //console.log(topic_id, profile_id, range)
        if (range == undefined) {
            range = 9999;
        }

        const quizObj = new quiz(topic_id, profile_id);
        quizObj.profile_id = profile_id;

        function write_quizResult_toObject(quizResult) {
            //debugLog("write_quizResult_toObject")
            try {
                quizObj.topic = quizResult[0]['topic'];
                quizObj.topic_id = quizResult[0]['topic_id'];
                quizObj.quiz_id = quizResult[0]['quiz_id'];
                quizObj.quiz_name = quizResult[0]['quiz_name'];
                quizObj.quizTable = quizResult;
            } catch (error) {
                log_event('WARNING', error, functionName);
                //debugLog(error);
            }
        }

        function write_quizSessionResult_toObject(quizSessionResult) {
            //debugLog("write_quizSessionResult_toObject")
            try {
                quizObj.quiz_session = quizSessionResult[0]; // do i need this?
                quizObj.submit_id = quizSessionResult[0]['submit_id'];
                quizObj.start_time = quizSessionResult[0]['start_time'];
                quizObj.topic_id = quizSessionResult[0]['topic_id'];
                quizObj.quiz_id = quizSessionResult[0]['quiz_id'];
                quizObj.quiz_name = quizSessionResult[0]['quiz_name'];
            } catch (error) {
                log_event('WARNING', error, functionName);
                //debugLog(error);
            }
        }

        let resolveQuizSession = new Promise(function(resolve, reject) {
            get_quiz_session_MSSQL(profile_id, topic_id, range, engagement_id).then(result => {
                //console.log(result)
                //debugLog("get_quiz_session_MSSQL");
                let freshQuiz;
                if ((result[0] === undefined) || (result === []) || (result.includes("ERROR!"))) {
                    //debugLog("Never tested on this topic before");
                    freshQuiz = true;
                } else {
                    //debugLog("In the middle of a quiz");
                    freshQuiz = false;
                }
                if (freshQuiz === true) {
                    start_quiz_session_MSSQL(topic_id, profile_id).then(unused => {
                        get_quiz_session_MSSQL(profile_id, topic_id, range, engagement_id).then(newQuizSessionResult => {
                            write_quizSessionResult_toObject(newQuizSessionResult);
                            resolve('COMPLETE');
                            return 'COMPLETE';
                        }).catch(function(error) {
                            log_event('WARNING', error, functionName);
                            reject("ERROR: Cannot get_quiz.");
                            return "ERROR: Cannot get_quiz.";
                        });
                    })
                } else {
                    // give resoluts for what quiz the user is currently in the middle of
                    write_quizSessionResult_toObject(result);
                    resolve('COMPLETE');
                    return 'COMPLETE';
                }
            });
        });
        Promise.all([resolveQuizSession]).then(tableResult => {
            get_quiz_current_MSSQL(topic_id, quizObj.profile_id, quizObj.submit_id).then(resultQuiz => {
                //console.log(resultQuiz)
                if (resultQuiz[0] === undefined || resultQuiz.includes('ERROR')) {
                    quizObj.quizTable = undefined;
                    resolve(quizObj);
                    return quizObj;
                }
                write_quizResult_toObject(resultQuiz);
                //debugLog(quizObj);
                resolve(quizObj);
                return (quizObj);
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            });
        }).catch(function(error) {
            log_event('WARNING', error, functionName);
            reject(error);
            throw (error);
        });
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    }).finally(function() {
        //debugLog("finally block");
    });
}

function get_quiz_name_by_topic_id(topic_id) {
    let functionName = 'get_quiz_name_by_topic_id';
    return new Promise(function(resolve, reject) {
        let profileQuery = `SELECT * FROM [dbo].[KA_quizzes] WHERE topic_id = '${topic_id}'`;
        return dbQueryMethod.query(profileQuery).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) {
            reject(error)
            log_event('WARNING', error, functionName);
            throw error;
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};
/* Public / Export functions */

module.exports = {
    get_Quiz: get_Quiz,
    get_quiz_name_by_topic_id: get_quiz_name_by_topic_id
};

//
/*
// get_Quiz
const { get_Quiz } = require('../backend/get_quiz.js');
*/