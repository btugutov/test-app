var express = require('express')
var path = require('path');
var os = require('os');
var config = require('./../config');
var app = express();
require('dotenv').config();
const { register_user } = require('../backend/user_register.js');
// classes
const { debugLog, getLineNumber, log_event, log_object_parser, dbQueryMethod } = require('../backend/classes.js');
// methods
const { get_available_quiz_for_profile_id_MSSQL, get_completed_quiz_categorized_submissions, get_gradable_quiz_submit_id_by_profile_and_topic, get_gradable_quiz_session_by_id, get_table_complete, get_submit_id_from_graded_by, time_now_MSSQL, update_image_base64_MSSQL, get_testable_topics_by_profile_id, get_available_engagements_by_profile_id, get_all_categories_and_topics_by_engagement_id_and_profile_id, getEngagementByEngId } = require('../backend/methods.js');
// edit_quiz.js
const { get_topic_to_edit_MSSQL, get_topic_info_for_editQuizHome, update_topic_main, delete_topic_by_id, get_buckets_by_topic_id, saveOneBucket, create_topic_main, deleteQuiz, disableQuiz } = require('../backend/edit_quiz.js');
// get_User
const { get_User } = require('../backend/get_user.js');
// get_Quiz
const { get_Quiz, get_quiz_name_by_topic_id, getQuizLength } = require('../backend/get_quiz.js');
// edit permissions
const { update_permission_quiz_main, update_permission_admins_main, get_all_users_admin_permission_edit, get_all_users_quiz_permission_edit } = require('../backend/edit_permission.js');
// grade_quiz
const { get_completed_quiz_submissions, get_completed_quiz_by_submissions, finish_gradable_quiz_session_by_id, release_grade_hold, release_grade_hold_all, start_grading_quiz, update_grade_input_response, quizEndChecks, continue_grading_quiz, check_current_quizzes } = require('../backend/grade_quiz.js');
// take_quiz
const { finish_quiz_session, finish_response, get_image_by_questionID_MSSQL, start_response, get_topic_table_by_engagement } = require('../backend/take_quiz.js');
// stay_awake
const { stay_awake } = require('../backend/stay_awake.js');
// edit_submission_status
const { get_KA_quiz_submission_by_profile_id, get_KA_quiz_submission_all, get_KA_quiz_submission_by_engagement_id, edit_submissions_main } = require('../backend/edit_submission_status.js');
// object_validation
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes, format_quiz_table2, format_quiz_table_orderby_question_sort, sort_answers_for_question } = require('../backend/object_validation.js');
// edit_engagement.js
const { update_engagement_main, get_all_engagemets } = require('../backend/edit_engagement.js');
let hostname = os.hostname();

function preload_block(res, email, topic_id, engagement_id) {
    let functionName = 'prepage_load';
    return new Promise(function (resolve, reject) {
        if (typeof (engagement_id) == 'object') {
            engagement_id = engagement_id.engagement_id;
        }
        try {
            get_User(email, engagement_id).then(currentUser => {
                if (currentUser.trusted == false) {
                    // load page now, person is not trusted.
                    // fail fast
                    currentUser.need_to_register = true;
                    resolve(currentUser)
                    return currentUser;
                } else {
                    // if User is not trying to take a quiz don't load get_quiz

                    if (undefined == topic_id || (topic_id == "unknown" && !currentUser.active_topic_bool)) {
                        let obj = {
                            'currentUser': currentUser,
                            'quiz': 'quiz'
                        }
                        resolve(obj)
                        return obj
                    } // User is trying to take a quiz 
                    else {
                        let q_id;
                        if (!currentUser.active_topic_bool) {
                            q_id = topic_id;
                        } else {
                            q_id = currentUser.active_topic_id;
                        }
                        // if condition happens where user has not selected an engagment_id, don't call get_quiz
                        if (engagement_id == undefined) {
                            let obj = {
                                'currentUser': currentUser,
                                'quiz': 'quiz'
                            }
                            resolve(obj)
                            return obj
                        } else {
                            get_Quiz(topic_id, currentUser.profile_id, engagement_id).then(quiz => {
                                let obj = {
                                    'currentUser': currentUser,
                                    'quiz': quiz
                                }
                                resolve(obj)
                                return obj
                            }).catch(function (error) {
                                error_handler(error, res, getLineNumber())
                                reject(error);
                                throw (error);
                            })
                        }
                    }
                }
            })
        } catch (error) {
            // Every error thrown in the whole “awaitable” chain will end up here now.
            debugLog("ERROR HERE" + error);
            reject(error)
            throw error
        }
    }).catch(function (error) {
        error_handler(error, res, getLineNumber())
        throw (error);
    })
}

function error_handler(error, res, lineNumber) {
    if (lineNumber == undefined) {
        lineNumber = getLineNumber();
    }
    log_event('WARNING', error, lineNumber);
    let params = { trusted: true }
    debugLog("ERROR HERE" + error);
    res.render('errorKA', {
        params: params,
        error: error
    })
    return 'done'
}

function create_params_object(currentUser) {
    let functionName = 'create_params_object';
    try {

        let params = {};
        params['currentEmail'] = currentUser.email;
        params['active_topic_id'] = currentUser.active_topic_id;
        params['active_topic_bool'] = JSON.stringify(currentUser.active_topic_bool);
        params['trusted'] = currentUser.trusted;
        params['developer'] = currentUser.developer;
        params['currentUser'] = currentUser;
        params['admin_bool'] = currentUser.admin;
        params['developer_bool'] = currentUser.developer;

        return params;

    } catch (error) {
        // Every error thrown in the whole “awaitable” chain will end up here now.
        log_event("ERROR", "ERROR HERE" + error, functionName);
        throw error
    }
}

function logEvent(func_name, obj, status){
    console.log(`${func_name} => ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
}

//==================================
module.exports = function (app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        res.json(true)
    });
    app.post('/api/store_user', (req, res, next) => {
        console.log("/api/store_user", JSON.stringify(new Date()))
        let email;
        if (!req.body.mail) {
            email = req.body.email;
        } else {
            email = req.body.mail;
        }
        console.log("get user by email =>", email)
        if (!email) {
            res.json(false)
        }
        get_User(email).then(response => {
            // console.log("response =>", response)
            req.session['user'] = response
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        })
    });
    app.get('/api/get_system_info_and_print_message', (req, res) => {
        let obj = {
            'os': os,
            'req.headers': req.headers,
            'res.headers': res.headers,
            'user_session': req.session['user'],
            'config': config,
            'temp_obj': true
        }
        res.json(obj)
    })
    app.post('/api/get_User', (req, res, next) => {
        console.log("let's get user here!")
        get_User(req.body.email).then(response => {
            res.json(response);
        }).catch(function (err) {
            res.json(err);
        })
    });
    app.post('/api/getAllCategoriesAndTopicsByProfileId', (req, res, next) => {
        console.log("req.body =>", req.body)
        get_testable_topics_by_profile_id(req.body.profile_id).then(result => {

            res.json(result) //groupBy(quizes, 'category')
        }).catch(function (err) {
            console.log(err)
            res.json(err)
        })
    });

    // ************************************************************************
    // ************************************************************************
    // ************************                       *************************
    // ************************ TAKING QUIZ FUNCTIONS *************************
    // ************************                       *************************
    // ************************************************************************
    // ************************************************************************

    // TAKING QUIZ FUNCTIONS  =================================================
    app.get('/api/:eng/topic/:topicID/user/:userID/quiz/:quizID/question/:questionID', (req, res, next) => {
        console.log("Take quiz call time =>", new Date());
        console.log("engId =>", req.params['eng'])
        console.log("topic_id =>", req.params['topicID'])
        console.log("userID =>", req.params['userID'])
        console.log("quizID =>", req.params['quizID'])
        console.log("questionID =>", req.params['questionID'])
        // console.log("session['user'] =>", req.session['user'])
        let response_message = {
            'status': 'failed',
            'body': {},
            'message': ''
        }
        preload_block(res, req.session['user']['email'], req.params['topicID'], req.params['eng'])
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // check to see if the database returns anything. If it returns undefined that means that there are no more questions to be answered for this quiz.
                // Redirect user to the complete page.
                if(quiz['time_limit']){
                    if(  Math.floor((new Date() - quiz.start_time)/60000) > quiz['time_limit'] ){
                        console.log("Quiz is expired!")
                    }
                }
                if (quiz === undefined || quiz.quizTable === undefined) {
                    console.log("somehow the quiz is done!")
                    finish_quiz_session(quiz.submit_id).then(finResult => {
                        // if we detect that the quiz is complete, call function to see if you need to kick the calculate grade st proc
                        debugLog('quiz.submit_id')
                        debugLog(quiz.submit_id)
                        quizEndChecks(quiz.submit_id).then(response => {
                            res.json({
                                'completed': true
                            });
                        }).catch(function (error) {
                            log_event('ERROR', error, 'completed quiz routing');
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                            throw error;
                        });

                    }).catch(function (error) {
                        log_event('ERROR', error, 'completed quiz routing');
                        error_handler(error, res, getLineNumber())
                        response_message.message = error;
                        res.json(response_message)
                        throw error;
                    });
                }
                // If quiz or quizTable return with value, that means there are questions available for the user to answer
                else {
                    let object_to_send = {};
                    let date = new Date();
                    res.locals.start_time = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
                    // ------------------------------------------------------------ new version ------------------------------------------------------------------------
                    let anstest = format_quiz_table_orderby_question_sort(quiz.quizTable);
                    let question = anstest['questions'][0];
                    let question_id = question.question_id;
                    let question_type = question['question_type_id'];
                    let pass_info = [];
                    pass_info.push(question['question_type_id']);
                    pass_info.push(question['display_type_id']);
                    pass_info.push(currentUser.profile_id);
                    pass_info.push(quiz.submit_id);
                    pass_info.push(res.locals.start_time);
                    pass_info.push(question_id);
                    // -----------------------------------------------------------------------------------------------------------------------------------------------
                    // ------------------------------------------------------ old version -----------------------------------------------------------------------------------
                    /* object_to_send.anstest = anstest;
                    let anstest = format_quiz_table(quiz.quizTable);
                    let keys = Object.keys(anstest[0]);
                    let question_id = keys[0];
                    let question_type = anstest[0][question_id]['question_type_id'];
                    object_to_send.anstest = anstest;
                    let pass_info = [];
                    pass_info.push(anstest[0][question_id]['question_type_id']);
                    pass_info.push(anstest[0][question_id]['display_type_id']);
                    pass_info.push(currentUser.profile_id);
                    pass_info.push(quiz.submit_id);
                    pass_info.push(res.locals.start_time);
                    pass_info.push(question_id); */
                    // -----------------------------------------------------------------------------------------------------------------------------------------------
                    object_to_send.anstest2 = format_quiz_table_orderby_question_sort(quiz.quizTable);
                    
                    // Create an array call pass_info. It will be an array of identifying info that will be included with each user response
                    // pass info will hold the following: question_type,display_type,profile_id,submit_id,start_time,question_id
                    
                    // query database for image related data for current question
                    get_image_by_questionID_MSSQL(question_id).then(result => {
                        get_table_complete('KA_test_topic').then(function (topics) {
                            // store image data in res.locals so it can be reference later
                            res.locals.image_info = result;
                            // check to see that url matches where user should currently be in quiz. If not, redirect to correct url
                            // create an object that holds all the current URL parameters (topicID, userID, quizID, and questionID) that the user SHOULD be on
                            const cPage = {
                                topicID: anstest['quiz_params']['topic_id'],
                                userID: currentUser.email,
                                quizID: anstest['quiz_params']['quiz_id'],
                                questionID: question_id.toString()
                            };
                            let params = create_params_object(currentUser);
                            params['current_eng'] = req.session['eng'];
                            let keys = Object.keys(cPage);
                            // console.log(anstest[0][question_id]['answer_prompt'])
                            //loop through each value and see if it matches the URL that is being requested
                            for (let i = 0; i < keys.length; i++) {
                                // If the values don't match up, re-direct the user to the correct URL
                                if (cPage[keys[i]].toString() !== req.params[keys[i]].toString()) {
                                    console.log('==================SOMETHING WENT WRONG======================')
                                    console.log('=====================REDIRECTING=======================')
                                    console.log(`/${req.params['eng']}/topic/${cPage['topicID']}/user/${cPage['userID']}/quiz/${cPage['quizID']}/question/${cPage['questionID']}`)
                                    console.log('=============================================================')
                                    // req.params['eng']+ '/topic/' + cPage['topicID'] + '/user/' + cPage['userID'] + '/quiz/' + cPage['quizID'] + '/question/' + cPage['questionID']
                                    res.redirect(302, `/api/${req.params['eng']}/topic/${cPage['topicID']}/user/${cPage['userID']}/quiz/${cPage['quizID']}/question/${cPage['questionID']}`);
                                    return;
                                }
                            }
                            let topic_name = groupByKey(topics, 'topic_id', 'topic_id')[cPage['topicID']][cPage['topicID']];
                            // let question = anstest[0][question_id]; // the question that's gonna be displayed to the user
                            if (question['question_type_description'] === 'drag_and_drop' || question['display_type_description'] === 'drag_and_drop' || question['display_type_id'] === 4) {
                                get_table_complete('KA_bucket').then(function (b_list) {
                                    let bucket_list = {};
                                    b_list = switchKey(b_list, 'bucket_id')
                                    for (let el in question['answer_prompt']) {
                                        if (!bucket_list[question['answer_bucket_id'][el]]) {
                                            console.log('el', el, "question['answer_bucket_id'][el]", question['answer_bucket_id'][el])
                                            bucket_list[question['answer_bucket_id'][el]] = b_list[question['answer_bucket_id'][el]]
                                        }
                                    }
                                    pass_info = {};
                                    pass_info[0] = question['question_type_id'];
                                    pass_info[1] = question['display_type_id'];
                                    pass_info[2] = currentUser.profile_id;
                                    pass_info[3] = quiz.submit_id;
                                    pass_info[4] = res.locals.start_time;
                                    pass_info[5] = question_id;
                                    params.image_info = '';
                                    if (question['image']) {
                                        params.image_info = unescape(question['base64']);
                                    }
                                    console.log("take quiz: response time =>", new Date())
                                    res.json({
                                        // returnObj: returnObj,
                                        topic_name: topic_name,
                                        question_id: question_id,
                                        answer_keys: sort_answers_for_question(question.answer_sort, question.answer_prompt)['keys'],
                                        answer_prompt: sort_answers_for_question(question.answer_sort, question.answer_prompt)['prompts'],
                                        question_prompt: unescapingObj(question['prompt']),
                                        question_type: question_type,
                                        display_type: question['display_type_id'],

                                        log_event: log_event,
                                        hostname: hostname,
                                        image_info: unescape(question['base64']),
                                        // turn array into a string that can be used in the 'name' attribute
                                        pass_info: pass_info,
                                        params: params,
                                        bucket_list: bucket_list,
                                        start_time: quiz.start_time,
                                        time_limit: quiz.time_limit,
                                        object_to_send: object_to_send
                                    });

                                });
                            } else {
                                let values = questionRenderOderAnswers(question);
                                console.log("take quiz: response time =>", new Date())
                                res.json({
                                    // returnObj: returnObj,
                                    object_to_send: object_to_send,
                                    topic_name: topic_name,
                                    question_id: question_id,
                                    answer_keys: values.answer_keys, //Object.keys(anstest[0][question_id]['answer_prompt']),
                                    answer_prompt: values.answer_prompts, // Object.values(unescapingObj(anstest[0][question_id]['answer_prompt'])),
                                    question_prompt: unescapingObj(question['prompt']),
                                    question_type: question_type,
                                    display_type: question['display_type_id'],

                                    log_event: log_event,
                                    hostname: hostname,
                                    // turn array into a string that can be used in the 'name' attribute
                                    pass_info: pass_info.join(),
                                    image_info: unescape(question['base64']),
                                    params: params,
                                    start_time: quiz.start_time,
                                    time_limit: quiz.time_limit
                                });
                            }
                        }).catch(function (error) {
                            log_event('ERROR', error, 'quiz page routing');
                            res.json(false)
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                        }).catch(function (error) {
                            log_event('ERROR', error, 'quiz page routing');
                            res.json(false)
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                        });
                    }).catch(function (error) {
                        log_event('ERROR', error, 'quiz page routing');
                        res.json(false)
                        error_handler(error, res, getLineNumber())
                        response_message.message = error;
                            res.json(response_message)
                    });

                    //question_id, submit_id, profile_id, question_type_id
                    //insert info to DB, a question has been started
                    //debugLog('******************start_response***********************')
                    console.log("question_id =>", question_id, "; quiz.submit_id =>", quiz.submit_id, "; currentUser.profile_id =>", currentUser.profile_id, ";question_type =>", question_type);
                    start_response(question_id, quiz.submit_id, currentUser.profile_id, question_type);
                }
            }).catch(function (error) {
                console.log("FAILED =>", error)
                req.session['error_message'] = error;
                response_message.message = error;
                res.json(response_message)
            })
    })
    app.post('/api/:eng/success', (req, res) => {
        // input question
        // CheckBox question / MC
        // RADIO = >{ '1,2,727,1598,2019-03-28 21:07:23,183': [ '244', '245', '246', '247' ] }
        let drag_and_drop_bool = false;
        let drag_and_drop_answers = {};
        let iNeedThis = '';
        if (req.body['drag_and_drop']) {
            drag_and_drop_bool = true;
            let new_response = '';
            for (let el in req.body) {
                if (el !== 'drag_and_drop' && el !== 'info') {
                    new_response += `"${el}": "${req.body[el]}",`; // turns into  => " '183': '2','184': '3','185': '1','186': '1' "
                    if (iNeedThis == '') {

                    } else {
                        iNeedThis += ','
                    }
                    iNeedThis += `${el}: ${req.body[el]}`;
                    drag_and_drop_answers[el] = req.body[el];
                }
            }

            let new_key = req.body['info'];
            req.body = {};
            req.body[new_key] = new_response;
        }

        debugLog(' ')
        debugLog(' ')
        try { console.log(req.body[info]) } catch (error) { debugLog('cant do it') };
        debugLog(' ')
        debugLog(' ')
        // extract req.body key, which returns an array of strings and integers passed from the front.
        // turn everything in the array into strings and then turn into an array of strings
        const info = Object.keys(req.body).toString().split(',');
        let answerValue = req.body[info];

        // Currently answers can be returned as a string or an array.
        // In order to simplify DB inserts and future handling, convert all answers into an array
        let arrayAnswer = [];
        if (Array.isArray(answerValue)) {
            arrayAnswer = answerValue;
        } else {
            arrayAnswer[0] = answerValue;
        }

        // Validate content and determine the answer_id.
        // answer_id either equals 0 if it's a user input question, or is an array of one or more selected answer id's
        let answer_id;
        if (!drag_and_drop_bool) {
            answer_id = findAnswerID(info, arrayAnswer);
        } else {
            answer_id = iNeedThis;
        }

        // Validate and sanitize info passed in name attribute
        let clean_info = infoValidate(info);

        // escape/sanitize freehand responses for database security
        arrayAnswer = escape(arrayAnswer);

        let profileId = clean_info[0];
        let submitId = clean_info[1];
        let questionId = clean_info[2];
        debugLog(' ')
        debugLog(' ')
        debugLog(' ')
        // input question
        //    console.log(answer_id, arrayAnswer, profileId, submitId, questionId)  >>>   [ 0 ] 'lksdlksjlkslksdfaj' '42' '1595' '2'
        // Checkbox question
        //    console.log(answer_id, arrayAnswer, profileId, submitId, questionId)  >>>   [ '175', '176', '178', '179', '180' ] '175%2C176%2C178%2C179%2C180' '42' '1604' '133'
        // drag and drop
        //    console.log(answer_id, arrayAnswer, profileId, submitId, questionId)  >>>   [ '183': '2' ,'184': '3','185': '1','186': '1' ] '5' '42' '1595' '3'
        // answer_id = {'183': '2','184': '3','185': '1','186': '1' };  
        // answer_id[0] = "'183': '2'";
        // arrayAnswer = 
        debugLog(' ')
        debugLog(' ')
        debugLog(' ')
        // separated by ,
        let nonBucketAnswers = '2,3,4,5'
        let bucketAnswers = `'183': '2','184': '3','185': '1','186': '1'`
        // BEFORE THIS LINE THE INPUT SHOULD BE CLEAR OR FIXED OR SANITIZED

        // Update database with validated/santized values and then redirect user back to the quiz taking page
        // answer_id [ '244', '246', '247' ] arrayAnswer 244%2C246%2C247 profileId 727 submitId 1601 questionId 183
        finish_response(answer_id, arrayAnswer, profileId, submitId, questionId)
            .then(function (result) {
                let tempDirect = 'unknown';
                //res.redirect(302, req.params['eng'] + '/topic/' + tempDirect + '/user/' + tempDirect + '/quiz/' + tempDirect + '/question/' + tempDirect);
                res.redirect(302, `/api/${req.params['eng']}/topic/${result.topic_id}/user/${result.profile_id}/quiz/${result.quiz_id}/question/${tempDirect}`);
            }).catch(function (error) {
                log_event('ERROR', error, 'finish response');
                error_handler(error, res, getLineNumber())
            });
    });

    app.post('/api/getQuizLength', (req, res) => {
        getQuizLength(req.body.quiz_id).then(quiz => {
            res.json(quiz )
        })
    })

    // END OF TAKING QUIZ FUNCTIONS ===========================================
    // ************************************************************************
    // ********************* END OFTAKING QUIZ FUNCTIONS **********************
    // ************************************************************************



    // *************************************************************************
    // *************************************************************************
    // ***********************                    ******************************
    // ***********************  GRADING FUNCTIONS ******************************
    // ***********************                    ******************************
    // *************************************************************************
    // *************************************************************************

    //  ====================== GRADING FUNCTIONS ===============================
    app.post('/api/getCompletedQuizzesLength', (req, res, next) => {
        get_completed_quiz_submissions(req.body.profile_id, req.body.eng_id).then(compQuiz => {
            res.json(compQuiz.length)
        })
    });
    app.post('/api/getCompletedQuizzes', (req, res, next) => {
        get_completed_quiz_submissions(req.body.profile_id, req.body.eng_id).then(compQuiz => {
            let quizzes = groupBy(unescapingObj(compQuiz), 'category');
            for (let c in quizzes) {
                quizzes[c] = groupBy(quizzes[c], 'topic')
            }
            res.json(quizzes)
        })
    });

    // release one quiz by id
    app.post('/api/releaseSubmittedQuiz', (req, res, next) => {
        let submit_id = req.body['submit_id']
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body['email'], undefined, req.params['eng'])
            .catch(function (error) {
                res.json(error)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_grader || currentUser.admin_owner) {
                    release_grade_hold(submit_id, currentUser.profile_id).then(response => {
                        if (response.rowsAffected[0] == 0) {
                            response_message.message = "Somehow release your current quiz that your were in process of grading. Try it again or contact developers."
                            res.json(response_message)
                        } else {
                            response_message.status = "success"
                            res.json(response_message)
                        }
                    })
                        .catch(function (error) {
                            response_message.message = error;
                            debugLog("ERROR HERE" + error);
                            res.json(response_message)
                        })

                } else {
                    response_message.message = 'You have no admin permissions';
                    res.json(response_message)
                }

            })
            .catch(function (error) {
                response_message.message = error
                log_event('ERROR', error, 'grade_release');
                error_handler(error, res, getLineNumber())
                res.json(response_message)
            });
    });

    // release all current quizzes
    app.post('/api/releaseAllSubmittedQuiz', (req, res, next) => {
        let ids = req.body['ids']
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body['email'], undefined, undefined)
            .catch(function (error) {
                res.json(error)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_grader || currentUser.admin_owner) {
                    release_grade_hold_all(ids, currentUser.profile_id).then(response => {
                        if (response.rowsAffected[0] == 0) {
                            response_message.message = "Somehow release your current quiz that your were in process of grading. Try it again or contact developers."
                            res.json(response_message)
                        } else {
                            response_message.status = "success"
                            res.json(response_message)
                        }
                    })
                        .catch(function (error) {
                            response_message.message = error;
                            debugLog("ERROR HERE" + error);
                            res.json(response_message)
                        })

                } else {
                    response_message.message = 'You have no admin permissions';
                    res.json(response_message)
                }

            })
            .catch(function (error) {
                response_message.message = error
                log_event('ERROR', error, 'grade_release');
                error_handler(error, res, getLineNumber())
                res.json(response_message)
            });
    });

    app.post('/api/getQuizForGrading', function (req, res, next) {
        var topic_id = req.body['topic_id']
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body['email'], undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message['message'] = error;
                res.json(response_message)
                return;
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // check to see if user is an admin
                // If they are, update the database to show that they have started grading a quiz
                if (currentUser.admin_grader || currentUser.admin_owner) {
                    check_current_quizzes(currentUser.profile_id, topic_id).then(cur_quizzes => {
                        if (cur_quizzes.length > 0) {
                            for (let el in cur_quizzes) {
                                if (!cur_quizzes[el]['graded']) {
                                    /* UNCOMMENT IT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                        response_message.message = "continue";
                                        response_message.continue = cur_quizzes[el]['submit_id'];
                                        res.json(response_message)
                                        return;
                                        UNCOMMENT IT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                          */
                                    // console.log("NEED TO CONTINUE!!!")
                                    // console.log("cur_quizzes =>", cur_quizzes[0])
                                    let submit_id = cur_quizzes[0]['submit_id']
                                    get_completed_quiz_by_submissions(submit_id).then(result2 => {
                                        response_message.status = 'success';
                                        response_message.quiz = unescapingObj(result2);
                                        response_message.message = 'continue this'
                                        get_quiz_name_by_topic_id(topic_id).then(quiz_name => {
                                            response_message.quiz_name = quiz_name[0];
                                            res.json(response_message);
                                        })
                                            .catch(function (error) {
                                                log_event('ERROR', error, 'gradeHome');
                                                error_handler(error, res, getLineNumber())
                                                response_message.message = error;
                                                res.json(response_message)
                                            });
                                    })
                                        .catch(function (error) {
                                            log_event('ERROR', error, 'continue_grade');
                                            error_handler(error, res, getLineNumber())
                                            response_message.message = error;
                                            res.json(response_message)
                                        });
                                }
                            }
                        }
                        start_grading_quiz(currentUser.profile_id, topic_id).then(submit_id => {
                            // If there are no quizzes left to grade, redirect back to the admin landing page
                            if (submit_id === undefined) {
                                console.log("submit_id =>>>>>", submit_id)
                                response_message.message = "No such topics left to grade"
                                res.json(response_message);
                                return;
                            } else { // If there are quizzes left, render the grading page
                                get_completed_quiz_by_submissions(submit_id).then(result => {
                                    response_message.quiz = unescapingObj(result);
                                    response_message.submit_id = submit_id
                                    response_message.status = 'success';
                                    get_quiz_name_by_topic_id(topic_id).then(quiz_name => {
                                        response_message.quiz_name = quiz_name[0];
                                        res.json(response_message);
                                    })
                                        .catch(function (error) {
                                            log_event('ERROR', error, 'gradeHome');
                                            error_handler(error, res, getLineNumber())
                                            response_message.message = error;
                                            res.json(response_message)
                                        });
                                })
                                    .catch(function (error) {
                                        log_event('ERROR', error, 'gradeHome');
                                        error_handler(error, res, getLineNumber())
                                        response_message.message = error;
                                        res.json(response_message)
                                    });
                            }
                        })
                            .catch(function (error) {
                                log_event('ERROR', error, 'gradeHome');
                                error_handler(error, res, getLineNumber())
                                response_message.message = error;
                                res.json(response_message)
                            });

                    })
                    .catch(function (error) {
                        log_event('ERROR', error, 'gradeHome');
                        error_handler(error, res, getLineNumber())
                        response_message.message = error;
                        res.json(response_message)
                    });

                }
                // if not admin, redirect to an error page
                else {
                    response_message.message = 'You have no permissions';
                    res.json(response_message)
                }
            })
            .catch(function (error) {
                log_event('ERROR', error, 'gradeHome');
                error_handler(error, res, getLineNumber())
                response_message.message = error;
                res.json(response_message)
            });
    });
    app.post('/api/continue_grade', function (req, res, next) {
        var submit_id = req.body['submit_id'];
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body['email'], undefined, req.params['eng'])
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // check to see if user is an admin
                // If they are, update the database to show that they have started grading a quiz
                if (currentUser.admin_grader || currentUser.admin_owner) {
                    continue_grading_quiz(currentUser.profile_id, submit_id).then(result => {
                        if (result === undefined) { // If there are no quizzes left to grade, redirect back to the admin landing page
                            response_message.message = '';
                            res.json(response_message)
                        } else { // If there are quizzes left, render the grading page
                            get_completed_quiz_by_submissions(submit_id).then(result2 => {
                                let topic_id = result[0]['quiz_id'][0]
                                response_message.status = 'success';
                                response_message.quiz = unescapingObj(result2);
                                get_quiz_name_by_topic_id(topic_id).then(quiz_name => {
                                    response_message.quiz_name = quiz_name[0];
                                    res.json(response_message);
                                })
                                    .catch(function (error) {
                                        log_event('ERROR', error, 'gradeHome');
                                        error_handler(error, res, getLineNumber())
                                        response_message.message = error;
                                        res.json(response_message)
                                    });
                            })
                                .catch(function (error) {
                                    log_event('ERROR', error, 'continue_grade');
                                    error_handler(error, res, getLineNumber())
                                    response_message.message = error;
                                    res.json(response_message)
                                });
                        }
                    })
                        .catch(function (error) {
                            log_event('ERROR', error, 'continue_grade');
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                        });
                }
                // if not admin, redirect to an error page
                else {
                    response_message.message = 'You have no permission.';
                    res.json(response_message)
                }
            })
            .catch(function (error) {
                log_event('ERROR', error, 'continue_grade');
                error_handler(error, res, getLineNumber())
                response_message.message = error;
                res.json(response_message)
            });
    });
    app.post('/api/submitGrades', function (req, res, next) {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        let functionName = "api/submitGrades";
        let grades = req.body.grades;
        try {
            preload_block(res, req.body['email'], undefined, undefined)
                .catch(function (error) {
                    debugLog("ERROR HERE" + error);
                    response_message.message = error;
                    res.json(response_message)
                })
                .then(returnObj => {
                    let currentUser = returnObj['currentUser']
                    // check to make sure that user has grading permissions before accepting data from the post
                    if (currentUser.admin_grader || currentUser.admin_owner) {
                        console.log("GRADES INCOMING!!!!!!!!!!!!!!!!", grades)
                        // validate and sanitize grades
                        let quiz = gradeValidate(grades);
                        console.log("gradeValidate(grades) =>>>", quiz)
                        const reviewer_id = currentUser.profile_id;
                        let questions = Object.keys(quiz);
                        // loop through each question and update DB with score (and feedback if provided)
                        for (let i = 0; i < questions.length; i++) {
                            update_grade_input_response(questions[i], quiz[questions[i]][2], quiz[questions[i]][0], quiz[questions[i]][1], reviewer_id);
                        }
                        finish_gradable_quiz_session_by_id(grades['submission_id']).then(response => {
                            quizEndChecks(grades['submission_id']).then(graded_done => {
                                response_message.status = 'success';
                                response_message.confirm = graded_done;
                                res.json(response_message)
                            }).catch(function (error) {
                                log_event('ERROR', error, functionName);
                                error_handler(error, res, getLineNumber())
                                response_message.message = error;
                                res.json(response_message)
                            });;

                        }).catch(function (error) {
                            log_event('ERROR', error, functionName);
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                        });;
                        // After grading is completed, redirect admin the the admin landing page
                    } else {
                        response_message.message = 'You have no permission.';
                        res.json(response_message)
                    }
                }).catch(function (error) {
                    log_event('ERROR', error, 'gradeHome');
                    error_handler(error, res, getLineNumber());
                    response_message.message = error;
                    res.json(response_message)
                });
        } catch (err) {
            response_message.status = err;
            res.json(err)
        }
    })

    // ************************************************************************
    // ************************ END OF GRADING FUNCTIONS **********************
    // ************************************************************************




    // ************************************************************************
    // ************************************************************************
    // ********************                         ***************************
    // ********************  CREATE QUIZ  FUNCTIONS ***************************
    // ********************                         ***************************
    // ************************************************************************
    // ************************************************************************
    /*  
    app.get('/api/ADDRESS', (req, res, next) => {
        let function_name = FUNCTION_NAME
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        try {
            preload_block(res, req.body['email'], undefined, undefined)
                .catch(function(error) {
                    debugLog("ERROR HERE" + error);
                    response_message.message = error;
                    res.json(response_message)
                })
                .then(returnObj => {
                    let currentUser = returnObj['currentUser']
                    if (currentUser.admin_grader || currentUser.admin_owner) {
                        DO ALL THE LOGIC HERE
                        res.json(RETURN_RESULT)
                    }else {
                            response_message.message = 'You have no permission.';
                            res.json(response_message)
                        }
                    }).catch(function(error) {
                        log_event('ERROR', error, 'function_name');
                        error_handler(error, res, getLineNumber());
                        response_message.message = error;
                        res.json(response_message)
                    });
            } catch (err) {
                response_message.status = err;
                res.json(err)
            }
    });


    */
    app.post('/api/getCatsTopsEngs', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        try {
            preload_block(res, req.body['email'], undefined, undefined)
                .catch(function (error) {
                    debugLog("ERROR HERE" + error);
                    response_message.message = error;
                    res.json(response_message)
                })
                .then(returnObj => {
                    let currentUser = returnObj['currentUser']
                    // check to make sure that user has grading permissions before accepting data from the post
                    if (currentUser.admin_editor || currentUser.admin_owner) {
                        get_table_complete('KA_engagement').then(res_engs => {
                            response_message.engs = res_engs;
                            get_table_complete('KA_test_topic').then(function (catResult) {
                                response_message.categories = groupByKey(catResult, 'category', 'topic_id');
                                get_table_complete('KA_bucket').then(bl => {
                                    response_message.bucket_list = bl;
                                    response_message.status = 'success';
                                    res.json(response_message)
                                }).catch(function (error) {
                                    log_event('ERROR', error, 'get_table_complete');
                                    error_handler(error, res, getLineNumber())
                                })
                            }).catch(function (error) {
                                log_event('ERROR', error, 'get_table_complete');
                                error_handler(error, res, getLineNumber())
                            })
                        }).catch(function (error) {
                            log_event('ERROR', error, 'get_table_complete');
                            error_handler(error, res, getLineNumber());
                            response_message.message = error;
                            res.json(response_message)
                        });

                    } else {
                        response_message.message = 'You have no permission.';
                        res.json(response_message)
                    }
                }).catch(function (error) {
                    log_event('ERROR', error, 'preload_block');
                    error_handler(error, res, getLineNumber());
                    response_message.message = error;
                    res.json(response_message)
                });
        } catch (err) {
            response_message.status = err;
            res.json(err)
        }
    });
    app.post('/api/createQuiz', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message);
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // var submitted_quiz = JSON.parse(Object.keys(req.body)) // quiz comes escaped
                create_topic_main(req.body.quiz, currentUser.profile_id).then(result => {
                    console.log("create_topic_main RETURNED =>", result)
                    debugLog('create_topic_main COMPLETE');
                    response_message.status = 'success'
                    response_message.message = result;
                    res.json(response_message)
                })
                    .catch(function (error) {
                        debugLog("ERROR HERE" + error);
                        response_message.message = error;
                        res.json(response_message);
                    });
            })
    })


    // ************************************************************************
    // ******************* END OF CREATE QUIZ  FUNCTIONS **********************
    // ************************************************************************


    // ************************************************************************
    // ************************************************************************
    // ********************                         ***************************
    // ********************   EDIT QUIZ  FUNCTIONS  ***************************
    // ********************                         ***************************
    // ************************************************************************
    // ************************************************************************

    app.post('/api/getQuizzesForEdit', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        try {
            preload_block(res, req.body['email'], undefined, undefined)
                .catch(function (error) {
                    debugLog("ERROR HERE" + error);
                    response_message.message = error;
                    res.json(response_message)
                })
                .then(returnObj => {
                    let currentUser = returnObj['currentUser']
                    // check to make sure that user has grading permissions before accepting data from the post
                    if (currentUser.admin_editor || currentUser.admin_owner) {
                        get_table_complete('KA_test_topic').then(function (catResult) {
                            categories = groupByKey(unescapingObj(catResult), 'category', 'topic_id');
                            console.log("let's get topic for engagement id =>", req.body['eng_id'])
                            get_topic_info_for_editQuizHome(req.body['eng_id']).then(result => {
                                let params = {
                                    'status': 'success',
                                    'categories_counter': Object.keys(result).length,
                                    'categories': groupByKey(unescapingObj(result), 'category', 'topic_id'),
                                }
                                res.json(params)
                            }).catch(function (error) {
                                log_event('ERROR', error, 'get_topic_info_for_edit call catch');
                                error_handler(error, res, getLineNumber());
                                response_message.message = error;
                                res.json(response_message);
                            })
                        }).catch(function (error) {
                            log_event('ERROR', error, 'get_table_complete call catch');
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message);
                        })

                    } else {
                        response_message.message = 'You have no permission.';
                        res.json(response_message)
                    }
                }).catch(function (error) {
                    log_event('ERROR', error, 'preload_block');
                    error_handler(error, res, getLineNumber());
                    response_message.message = error;
                    res.json(response_message)
                });
        } catch (err) {
            response_message.status = err;
            res.json(response_message)
        }
    });

    app.post('/api/getQuizByTopicIdForEdit', (req, res, next) => {
        let r_r_c = JSON.stringify(new Date());
        console.log(`Routes revieved a call getQuizByTopicIdForEdit. Start preload_block`, r_r_c)
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        get_topic_to_edit_MSSQL(req.body['topic_id']).then(result => {
            //console.log(result)
            res.locals.quiz = format_quiz_table(result)[0];
            res.locals.questions = Object.keys(res.locals.quiz);
            response_message.status = 'success';
            response_message.quiz1 = format_quiz_table2(result);
            response_message.quiz_original = result;
            // response_message.quiz2 = result;
            // response_message.quiz3 = format_quiz_table2(result);
            get_buckets_by_topic_id(req.body['topic_id']).then(buckets =>{
                response_message.buckets = unescapingObj(buckets);
                let time3 = JSON.stringify(new Date());
                console.log("rending response to the FE", time3)
                res.json(response_message)
                return;
            }).catch(function (error) {
                log_event('ERROR', error, 'get_buckets_by_topic_id');
                error_handler(error, res, getLineNumber())
                response_message['message'] = error;
                res.json(response_message)
            })
        }).catch(function (error) {
            log_event('ERROR', error, 'EditTopic');
            error_handler(error, res, getLineNumber())
            response_message['message'] = error;
            res.json(response_message)
        })
        return;
        preload_block(res, req.body['email'], undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message['message'] = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let time2 = JSON.stringify(new Date());
                console.log(`End of preload_block.  Routes start get_topic_to_edit_MSSQL`, time2)
                get_topic_to_edit_MSSQL(req.body['topic_id']).then(result => {
                    //console.log(result)
                    res.locals.quiz = format_quiz_table(result)[0];
                    res.locals.questions = Object.keys(res.locals.quiz);
                    response_message.status = 'success';
                    response_message.quiz1 = format_quiz_table2(result);
                    response_message.quiz_original = result;
                    // response_message.quiz2 = result;
                    // response_message.quiz3 = format_quiz_table2(result);
                    get_buckets_by_topic_id(req.body['topic_id']).then(buckets => {
                        response_message.buckets = unescapingObj(buckets);
                        let time3 = JSON.stringify(new Date());
                        console.log("rending response to the FE", time3)
                        res.json(response_message)
                    }).catch(function (error) {
                        log_event('ERROR', error, 'get_buckets_by_topic_id');
                        error_handler(error, res, getLineNumber())
                        response_message['message'] = error;
                        res.json(response_message)
                    })
                }).catch(function (error) {
                    log_event('ERROR', error, 'EditTopic');
                    error_handler(error, res, getLineNumber())
                    response_message['message'] = error;
                    res.json(response_message)
                })

            }).catch(function (error) {
                log_event('ERROR', error, 'EditTopic');
                error_handler(error, res, getLineNumber())
                response_message['message'] = error;
                res.json(response_message)
            })
    })

    app.post('/api/saveEditedQuiz', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        try {
            preload_block(res, req.body.email, undefined, req.params['eng'])
                .catch(function (error) {
                    debugLog("ERROR HERE" + error);
                    response_message.message = error;
                    res.json(response_message)
                })
                .then(returnObj => {
                    let currentUser = returnObj['currentUser']
                    let quiz = returnObj['quiz']
                    let submitted_quiz = escapeObject(req.body.quiz)  // comes escaped from the front-end
                    // for(let el in req.body.quiz){
                    //     if(el != "questions"){
                    //         console.log("EL =>", el," ==", req.body.quiz[el])
                    //     }
                    // }
                    // log_object_parser(submitted_quiz['logEvent']);
                    update_topic_main(submitted_quiz, currentUser.profile_id)
                        .catch(function (error) {
                            debugLog("ERROR HERE" + error);
                            response_message.message = error;
                            res.json(response_message)
                        })
                        .then(result => {
                            debugLog('update_topic_main COMPLETE');
                            response_message.status = 'success';
                            response_message.result = result;
                            res.json(response_message)
                        });
                })
        } catch (error) {
            console.log(error)
            debugLog("ERROR HERE" + error);
            response_message.message = error;
            res.json(response_message)
        }
    })
    app.post('/api/deleteQuiz', (req, res, next) => {

        console.log("================================!================================");
        console.log(Object.keys(req.body))
        console.log("================================!================================");
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message);
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // var submitted_quiz = JSON.parse(Object.keys(req.body)) // quiz comes escaped
                deleteQuiz(req.body.quiz, currentUser.profile_id)
                    response_message.status = 'success'
                    res.json(response_message)
            })
    })
    app.post('/api/disableQuiz', (req, res, next) => {

        console.log("================================!================================");
        console.log(Object.keys(req.body))
        console.log("================================!================================");
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message);
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                // var submitted_quiz = JSON.parse(Object.keys(req.body)) // quiz comes escaped
                disableQuiz(req.body.quiz_id, currentUser.profile_id)
                    response_message.status = 'success'
                    res.json(response_message)
            })
    })


    // ************************************************************************
    // ******************* END OF CREATE QUIZ  FUNCTIONS **********************
    // ************************************************************************


    // ************************************************************************
    // ************************************************************************
    // ***********************                  *******************************
    // ***********************  MISC  FUNCTIONS *******************************
    // ***********************                  *******************************
    // ************************************************************************
    // ************************************************************************


    // ======================== ENGAGEMENT FUNCTIONS ==========================
    app.post('/api/get_all_engagemets', (req, res, next) => {
        let response_message = {
            'status': 'fail',
            'message': ''
        }
        logEvent('/api/get_all_engagemets', null, null)
        console.log("get_all_engagemets: admin email  =>", req.body.email);
        console.log("get_all_engagemets: engagement id =>", req.body.eng_id);
        preload_block(res, req.body['email'], undefined, req.body['eng_id'])
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_permissions || currentUser.admin_owner) {
                    console.log("currentUser =>", currentUser.email)
                    console.log("about to start function get_all_engagemets")
                    get_all_engagemets().then(res_engs => {
                        logEvent('get_all_engagemets().then res_engs', null, null)
                        response_message.status = 'success';
                        response_message.body = res_engs
                        // response_message.body = Object.assign({}, switchKey(unescapingObj(res_engs), 'engagement_id'));
                        res.json(response_message)
                    }).catch(function (err) {
                        response_message.message = error;
                        res.json(response_message)
                    })
                }
                // if not admin with editing permissions, redirect to error page
                else {
                    response_message.message = 'No permission.';
                    res.json(response_message)
                }
            })
    });

    app.post('/api/get_availableEngagements', (req, res, next) => {
        get_available_engagements_by_profile_id(req.body.profile_id).then(response => {
            res.json(unescapingObj(response));
        }).catch(function (err) {
            console.log("ERROR => ", err)
            res.json(err);
        })
    });
    
    app.post('/api/getEngagementByEngId', (req, res, next) => {
        getEngagementByEngId(req.body.eng_id).then(response => {
            res.json(unescapingObj(response));
        }).catch(function (err) {
            console.log("ERROR => ", err)
            res.json(err);
        })
        
    });

    
    app.post('/api/saveEngagements', (req, res, next) => {
        let response_message = {
            'status': 'fail',
            'message': ''
        }
        console.log("save_engagemets: admin email  =>", req.body.email);
        console.log("save_engagemets: engagement id =>", req.body.eng_id);
        preload_block(res, req.body['email'], undefined, req.body['eng_id'])
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_permissions || currentUser.admin_owner) {
                    update_engagement_main(escapeObject(req.body.engs), req.body['email'])
                    response_message.status = 'success';
                    res.json(response_message)
                }
                // if not admin with editing permissions, redirect to error page
                else {
                    response_message.message = 'No permission.';
                    res.json(response_message)
                }
            })
    });

    // ====================== END OF ENGAGEMENT FUNCTIONS =====================

    // ==================== Quiz Permissions FUNCTIONS ========================
    app.post('/api/getQuizPermissions', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                get_all_users_quiz_permission_edit(1).then(result => {
                    let categories;
                    get_topic_table_by_engagement(req.body.eng_id).then(function (catResult) { // Pulling out all categories
                        categories = unescapingObj(catResult);
                        res.locals.users = result;
                        // render homepage and turn header ID token into usable variable (user email)
                        if (currentUser.admin_permissions || currentUser.admin_owner) {
                            try {
                                response_message.status = 'success';
                                response_message.response = {
                                    'users': joinUsersByTopicId(res.locals.users),
                                    'categories': categories
                                }
                                res.json(response_message)
                            } catch (tryError) { log_event('ERROR', tryError, "EditQuizPermissions"); response_message.message = tryError; res, json(response_message) }
                        }
                        // if not admin with editing permissions, redirect to error page
                        else {
                            response_message.message = 'No permission.';
                            res.json(response_message)
                        }
                    }).catch(function (error) {
                        log_event('ERROR', error, 'EditQuizPermissions');
                        error_handler(error, res, getLineNumber())
                        response_message.message = error;
                        res.json(response_message)
                    })
                }).catch(function (error) {
                    log_event('ERROR', error, 'EditQuizPermissions');
                    error_handler(error, res, getLineNumber())
                    response_message.message = error;
                    res.json(response_message)
                })
            }).catch(function (error) {
                log_event('ERROR', error, 'EditQuizPermissions');
                error_handler(error, res, getLineNumber())
                response_message.message = error;
                res.json(response_message)
            })
    });
    app.post('/api/saveQuizPermissions', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        // console.log(req.body['users'])
        update_permission_quiz_main(req.body['users'], req.body['email'])
        res.json(true)
    });
    // =================== END OF Quiz Permissions FUNCTIONS ==================



    // ==================== Quiz Submissions FUNCTIONS ========================
    app.post('/api/getQuizSubmissions', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                get_table_complete('KA_test_topic').then(function (catResult) { // Pulling out all topics
                    topics = categoriesFixer(catResult, 'topic_id');
                    get_KA_quiz_submission_by_engagement_id(req.body['eng_id']).then(result => {
                        // render homepage and turn header ID token into usable variable (user email)
                        if (currentUser.admin_permissions || currentUser.admin_owner) { // currentUser.admin_permissions || currentUser.admin_owner
                            let users = Object.assign({}, switchKey(unescapingObj(result), 'submit_id'));
                            for (let user in users) {
                                let completed_date = new Date(users[user]['stop_time']);
                                let start_date = new Date(users[user]['start_time']);
                                if (completed_date > start_date) {
                                    let millis = Math.abs(completed_date.getTime() - start_date.getTime());
                                    var minutes = Math.floor(millis / 60000);
                                    users[user]['diffTime'] = minutes
                                }
                            }
                            response_message.response = {
                                users: users,
                                topics: topics,
                                default_result: result
                            }
                            response_message.status = 'success';
                            res.json(response_message)
                        }
                        // if not admin with editing permissions, redirect to error page
                        else {
                            response_message.message = 'No permission.';
                            res.json(response_message)
                        }
                    }).catch(function (error) {
                        log_event('ERROR', error, 'editSubmissionStatus');
                        error_handler(error, res, getLineNumber())
                        response_message.message = error;
                        res.json(response_message)
                    })
                }).catch(function (error) {
                    log_event('ERROR', error, 'editSubmissionStatus');
                    error_handler(error, res, getLineNumber())
                    response_message.message = error;
                    res.json(response_message)
                })
            }).catch(function (error) {
                log_event('ERROR', error, 'EditQuizPermissions');
                error_handler(error, res, getLineNumber())
                response_message.message = error;
                res.json(response_message)
            })
    });
    app.post('/api/saveQuizSubmissions', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        console.log("saveQuizSubmissions: list length =>", Object.keys(req.body['users']).length);
        console.log("saveQuizSubmissions: admin email  =>", req.body.email);
        console.log("saveQuizSubmissions: engagement id =>", req.body.eng_id);
        preload_block(res, req.body['email'], undefined, req.body['eng_id'])
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_permissions || currentUser.admin_owner) {
                    edit_submissions_main(req.body['users'], currentUser['profile_id']);
                    setTimeout(function () {
                        get_KA_quiz_submission_by_engagement_id(req.body['eng_id']).then(result => {
                            // render homepage and turn header ID token into usable variable (user email)
                            // currentUser.admin_permissions || currentUser.admin_owner
                            let users = Object.assign({}, switchKey(unescapingObj(result), 'submit_id'));
                            for (let user in users) {
                                let completed_date = new Date(users[user]['stop_time']);
                                let start_date = new Date(users[user]['start_time']);
                                if (completed_date > start_date) {
                                    let millis = Math.abs(completed_date.getTime() - start_date.getTime());
                                    var minutes = Math.floor(millis / 60000);
                                    users[user]['diffTime'] = minutes
                                }
                            }
                            response_message.response = {
                                users: users,
                            }
                            response_message.status = 'success';
                            res.json(response_message)

                        }).catch(function (error) {
                            log_event('ERROR', error, 'editSubmissionStatus');
                            error_handler(error, res, getLineNumber())
                            response_message.message = error;
                            res.json(response_message)
                        })
                    }, Object.keys(req.body['users']).length * 100)
                }
                // if not admin with editing permissions, redirect to error page
                else {
                    response_message.message = 'No permission.';
                    res.json(response_message)
                }
            })
    });
    // =================== END OF Quiz Submissions FUNCTIONS ==================

    // ==================== Quiz Submissions FUNCTIONS ========================
    app.post('/api/getUserPermissions', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        preload_block(res, req.body.email, undefined, undefined)
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                if (currentUser.admin_permissions || currentUser.admin_owner) {
                    get_all_users_admin_permission_edit(1).then(users => { // Pulling out all users
                        response_message.response = {
                            users: joinUsersByTopicId(users),
                        }
                        response_message.status = 'success';
                        res.json(response_message)
                    })
                }else{
                    response_message.message = 'No permission.';
                    res.json(response_message)
                }
            })
    });
    app.post('/api/saveUserPermissions', (req, res, next) => {
        let response_message = {
            'status': 'fail',
            'message': ''
        }
        console.log("saveQuizSubmissions: list length =>", Object.keys(req.body['users']).length);
        console.log("saveQuizSubmissions: admin email  =>", req.body.email);
        console.log("saveQuizSubmissions: engagement id =>", req.body.eng_id);
        preload_block(res, req.body['email'], undefined, req.body['eng_id'])
            .catch(function (error) {
                debugLog("ERROR HERE" + error);
                response_message.message = error;
                res.json(response_message)
            })
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                if (currentUser.admin_permissions || currentUser.admin_owner) {
                    update_permission_admins_main(req.body['users'], currentUser.profile_id);
                    response_message.status = 'success';
                    res.json(response_message)
                }
                // if not admin with editing permissions, redirect to error page
                else {
                    response_message.message = 'No permission.';
                    res.json(response_message)
                }
            })
    });
    // =================== END OF Quiz Submissions FUNCTIONS ==================

     // ==================== Quiz Submissions FUNCTIONS ========================
     app.post('/api/saveOneBucket', (req, res, next) => {
        let response_message = {
            'status': 'failed',
            'message': ''
        }
        saveOneBucket(req.body).catch(function (error) {
            debugLog("ERROR HERE" + error);
            response_message.message = error;
            res.json(response_message)
        })
        .then(returnObj => {
            response_message.status = 'success';
            response_message.body = returnObj;
            res.json(response_message)
        })

    });



    // =================== END OF Quiz Submissions FUNCTIONS ==================
    // ************************************************************************
    // ************************* END OF MISC  FUNCTIONS ***********************
    // ************************************************************************
}