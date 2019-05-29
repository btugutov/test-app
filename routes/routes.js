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
const { get_available_quiz_for_profile_id_MSSQL, get_completed_quiz_categorized_submissions, get_gradable_quiz_submit_id_by_profile_and_topic, get_gradable_quiz_session_by_id, get_table_complete, get_submit_id_from_graded_by, time_now_MSSQL, update_image_base64_MSSQL, get_testable_topics_by_profile_id, get_available_engagements_by_profile_id, get_all_categories_and_topics_by_engagement_id_and_profile_id } = require('../backend/methods.js');
// edit_quiz.js
const { get_topic_to_edit_MSSQL, get_topic_info_for_editQuizHome, update_topic_main } = require('../backend/edit_quiz.js');
// get_User
const { get_User } = require('../backend/get_user.js');
// get_Quiz
const { get_Quiz } = require('../backend/get_quiz.js');
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
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers, filterEngagementsByAvailableQuizzes } = require('../backend/object_validation.js');
// edit_engagement.js
const { update_engagement_main } = require('../backend/edit_engagement.js');
let hostname = os.hostname();

function preload_block(res, email, topic_id, engagement_id) {
    let functionName = 'prepage_load';
    return new Promise(function(resolve, reject) {
        if (typeof(engagement_id) == 'object') {
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
                    //debugLog("currentUser")
                    //console.log(currentUser)
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
                            }).catch(function(error) {
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
    }).catch(function(error) {
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

//==================================
module.exports = function(app) {
    console.log("router is ready!")
    app.get('/api/test', (req, res, next) => {
        res.json(true)
    });
    app.post('/api/store_user', (req, res, next) => {
        // console.log("store user =>", req.body)
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
            console.log("response =>", response)
            req.session['user'] = response
            res.json(response);
        }).catch(function(err) {
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
        }).catch(function(err) {
            res.json(err);
        })
    });
    app.post('/api/getAllCategoriesAndTopicsByProfileId', (req, res, next) => {
        console.log("req.body =>", req.body)
        get_testable_topics_by_profile_id(req.body.profile_id).then(result => {

            res.json(result) //groupBy(quizes, 'category')
        }).catch(function(err) {
            console.log(err)
            res.json(err)
        })
    });


    // TAKING QUIZ FUNCTIONS  =======================================================
    app.get('/api/:eng/topic/:topicID/user/:userID/quiz/:quizID/question/:questionID', (req, res, next) => {
        console.log("engId =>", req.params['eng'])
        console.log("topic_id =>", req.params['topicID'])
        console.log("userID =>", req.params['userID'])
        console.log("quizID =>", req.params['quizID'])
        console.log("questionID =>", req.params['questionID'])
        console.log("session['user'] =>", req.session['user'])
        preload_block(res, req.session['user']['email'], req.params['topicID'], req.params['eng'])
            .then(returnObj => {
                let currentUser = returnObj['currentUser']
                let quiz = returnObj['quiz']
                    // check to see if the database returns anything. If it returns undefined that means that there are no more questions to be answered for this quiz.
                    // Redirect user to the complete page.
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
                        }).catch(function(error) {
                            log_event('ERROR', error, 'completed quiz routing');
                            error_handler(error, res, getLineNumber())
                            throw error;
                        });

                    }).catch(function(error) {
                        log_event('ERROR', error, 'completed quiz routing');
                        error_handler(error, res, getLineNumber())
                        throw error;
                    });
                }
                // If quiz or quizTable return with value, that means there are questions available for the user to answer
                else {
                    let date = new Date();
                    res.locals.start_time = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
                    let anstest = format_quiz_table(quiz.quizTable);
                    let keys = Object.keys(anstest[0]);
                    let question_id = keys[0];
                    let question_type = anstest[0][question_id]['question_type_id'];

                    // Create an array call pass_info. It will be an array of identifying info that will be included with each user response
                    // pass info will hold the following: question_type,display_type,profile_id,submit_id,start_time,question_id
                    let pass_info = [];
                    pass_info.push(anstest[0][question_id]['question_type_id']);
                    pass_info.push(anstest[0][question_id]['display_type_id']);
                    pass_info.push(currentUser.profile_id);
                    pass_info.push(quiz.submit_id);
                    pass_info.push(res.locals.start_time);
                    pass_info.push(question_id);
                    // query database for image related data for current question
                    get_image_by_questionID_MSSQL(question_id).then(result => {
                        get_table_complete('KA_test_topic').then(function(topics) {
                            // store image data in res.locals so it can be reference later
                            res.locals.image_info = result;
                            // check to see that url matches where user should currently be in quiz. If not, redirect to correct url
                            // create an object that holds all the current URL parameters (topicID, userID, quizID, and questionID) that the user SHOULD be on
                            const cPage = {
                                topicID: anstest[0][question_id]['topic_id'],
                                userID: currentUser.email,
                                quizID: anstest[0][question_id]['quiz_id'],
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
                            let question = anstest[0][question_id]; // the question that's gonna be displayed to the user
                            if (question['question_type_description'] === 'drag_and_drop' || question['display_type_description'] === 'drag_and_drop' || question['display_type_id'] === 4) {
                                get_table_complete('KA_bucket').then(function(b_list) {
                                    let bucket_list = {};
                                    b_list = switchKey(b_list, 'bucket_id')
                                    for (let el in question['answer_prompt']) {
                                        if (!bucket_list[question['answer_bucket_id'][el]]) {
                                            console.log('el', el, "question['answer_bucket_id'][el]", question['answer_bucket_id'][el])
                                            bucket_list[question['answer_bucket_id'][el]] = b_list[question['answer_bucket_id'][el]]
                                        }
                                    }
                                    pass_info = {};
                                    pass_info[0] = anstest[0][question_id]['question_type_id'];
                                    pass_info[1] = anstest[0][question_id]['display_type_id'];
                                    pass_info[2] = currentUser.profile_id;
                                    pass_info[3] = quiz.submit_id;
                                    pass_info[4] = res.locals.start_time;
                                    pass_info[5] = question_id;
                                    params.image_info = '';
                                    if (question['image']) {
                                        params.image_info = question['base64'];
                                    }

                                    res.json({
                                        topic_name: topic_name,
                                        question_id: question_id,
                                        answer_keys: Object.keys(anstest[0][question_id]['answer_prompt']),
                                        answer_prompt: question['answer_prompt'],
                                        question_prompt: unescapingObj(anstest[0][question_id]['prompt']),
                                        question_type: question_type,
                                        display_type: anstest[0][question_id]['display_type_id'],

                                        log_event: log_event,
                                        hostname: hostname,
                                        image_info: anstest[0][question_id]['base64'],
                                        // turn array into a string that can be used in the 'name' attribute
                                        pass_info: pass_info,
                                        params: params,
                                        bucket_list: bucket_list
                                    });

                                });
                            } else {
                                let values = questionRenderOderAnswers(question);
                                res.json({
                                    topic_name: topic_name,
                                    question_id: question_id,
                                    answer_keys: values.answer_keys, //Object.keys(anstest[0][question_id]['answer_prompt']),
                                    answer_prompt: values.answer_prompts, // Object.values(unescapingObj(anstest[0][question_id]['answer_prompt'])),
                                    question_prompt: unescapingObj(anstest[0][question_id]['prompt']),
                                    question_type: question_type,
                                    display_type: anstest[0][question_id]['display_type_id'],

                                    log_event: log_event,
                                    hostname: hostname,
                                    // turn array into a string that can be used in the 'name' attribute
                                    pass_info: pass_info.join(),
                                    image_info: anstest[0][question_id]['base64'],
                                    params: params
                                });
                            }
                        }).catch(function(error) {
                            log_event('ERROR', error, 'quiz page routing');
                            res.json(false)
                            error_handler(error, res, getLineNumber())
                        }).catch(function(error) {
                            log_event('ERROR', error, 'quiz page routing');
                            res.json(false)
                            error_handler(error, res, getLineNumber())
                        });
                    }).catch(function(error) {
                        log_event('ERROR', error, 'quiz page routing');
                        res.json(false)
                        error_handler(error, res, getLineNumber())
                    });

                    //question_id, submit_id, profile_id, question_type_id
                    //insert info to DB, a question has been started
                    //debugLog('******************start_response***********************')
                    console.log("question_id =>", question_id, "; quiz.submit_id =>", quiz.submit_id, "; currentUser.profile_id =>", currentUser.profile_id, ";question_type =>", question_type);
                    start_response(question_id, quiz.submit_id, currentUser.profile_id, question_type);
                }
            }).catch(function(error) {
                console.log("FAILED =>", error)
                req.session['error_message'] = error;
                res.json(error)
            })
    })
    app.post('/api/:eng/success', (req, res) => {

        // input question
        // console.log(req.body) >>> { '2,1,42,1595,2019-03-28 17:26:40,2': 'lksdlksjlkslksdfaj' }
        // CheckBox question / MC
        // console.log(req.body) >>> { '1,2,42,1604,2019-03-28 21:39:53,133': [ '175', '176', '178', '179', '180' ] }

        // RADIO = >{ '1,2,727,1598,2019-03-28 21:07:23,183': [ '244', '245', '246', '247' ] }
        console.log("'/api/:eng/success'  req.body=>", req.body)
        let drag_and_drop_bool = false;
        let drag_and_drop_answers = {};
        let iNeedThis = '';
        if (req.body['drag_and_drop']) {
            drag_and_drop_bool = true;
            console.log("we've got drag and")
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
            console.log("======= NEW REQUEST BODY========")
            console.log(req.body)
        }

        debugLog(' ')
        console.log(iNeedThis)
        debugLog(' ')
        try { console.log(req.body[info]) } catch (error) { debugLog('cant do it') };
        debugLog(' ')
        debugLog(' ')
        console.log('=======drag_and_drop_answers========')
        console.log(drag_and_drop_answers)
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

        console.log(answer_id, arrayAnswer, profileId, submitId, questionId)
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
        //console.log('-------------------- ANSWERED QUESTIONS --------------------')
        console.log('answer_id', answer_id, 'arrayAnswer', arrayAnswer, 'profileId', profileId, 'submitId', submitId, 'questionId', questionId)
            // answer_id [ '244', '246', '247' ] arrayAnswer 244%2C246%2C247 profileId 727 submitId 1601 questionId 183
        finish_response(answer_id, arrayAnswer, profileId, submitId, questionId)
            .then(function(result) {
                console.log('result.topic_id')
                console.log(result.topic_id)
                console.log(result.quiz_id)
                console.log(result.profile_id)

                let tempDirect = 'unknown';
                console.log(`/${req.params['eng']}/topic/${result.topic_id}/user/${result.quiz_id}/quiz/${result.quiz_id}/question/${tempDirect}`);
                //res.redirect(302, req.params['eng'] + '/topic/' + tempDirect + '/user/' + tempDirect + '/quiz/' + tempDirect + '/question/' + tempDirect);
                res.redirect(302, `/api/${req.params['eng']}/topic/${result.topic_id}/user/${result.profile_id}/quiz/${result.quiz_id}/question/${tempDirect}`);
            }).catch(function(error) {
                log_event('ERROR', error, 'finish response');
                error_handler(error, res, getLineNumber())
            });
    });


    // ADMIN FUNCTIONS  =======================================================
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


    // ENGAGEMENT FUNCTIONS  ==================================================
    app.get('/api/get_all_engagemets', (req, res, next) => {
        get_table_complete('KA_engagement').then(res_engs => {
            res.json(res_engs)
        })
    });

    app.post('/api/get_availableEngagements', (req, res, next) => {
        get_available_engagements_by_profile_id(req.body.profile_id).then(response => {
            res.json(unescapingObj(response));
        }).catch(function(err) {
            console.log("ERROR => ", err)
            res.json(err);
        })
    });

}