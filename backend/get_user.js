const Promise = require('promise');
const os = require('os');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');

// class like objects >>> really just json objects

class User {
    constructor(email) {
        this.email = email;
        this.wfm_id;
        this.first_name;
        this.last_name;
        this.title;
        this.team;
        this.hire_date;
        this.separation_date;
        this.specialization;
        this.specialization2;
        this.specialization3;
        this.accounts;
        this.tech;
        this.billing;
        this.profile_id;
        this.reference_table;
        this.trusted;
        this.admin;
        this.admin_grader;
        this.admin_owner;
        this.admin_permissions;
        this.admin_editor;
        this.current_quiz;
        this.developer;
        this.soft_delete;
        this.engagement;
    };
    // end User class
};

// used by User_factory
function get_current_quiz(profile_id, engagement_id) {
    let functionName = 'get_current_quiz';
    return new Promise(function(resolve, reject) {
        let queryAvailableQuiz = `SELECT [submit_id]  
            ,[KA_quiz_submission].[quiz_id] 
            ,[KA_quiz_submission].[start_time] 
            ,[KA_quiz_submission].[stop_time] 
            ,[profile_id] 
            ,[KA_quiz_submission].[soft_delete] 
            ,[KA_quiz_submission].[graded] 
            ,[KA_quiz_submission].[graded_by] 
            ,[KA_quiz_submission].[grade_comment] 
            ,KA_test_topic.topic 
            ,KA_test_topic.topic_id 
            FROM [dbo].[KA_quiz_submission] 
            JOIN KA_quizzes on KA_quizzes.quiz_id = [KA_quiz_submission].quiz_id 
            JOIN KA_test_topic on KA_test_topic.topic_id = KA_quizzes.topic_id 
            where profile_id = ${profile_id}
        AND [KA_test_topic].engagement_id = ${engagement_id}
        AND [KA_quiz_submission].soft_delete = 0 
        AND [KA_quiz_submission].stop_time < [KA_quiz_submission].start_time 
        AND [KA_quiz_submission].[retake_topic] = 0`
        return dbQueryMethod.query(queryAvailableQuiz).then(result => {
            resolve(result);
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

// this is used by USER_FACTORY to get the row of the HR table for a given email
function get_employeeTable_MSSQL(userObj) {
    let functionName = 'get_employeeTable_MSSQL';
    return new Promise(function(resolve, reject) {
        let employeeQuery = `SELECT * FROM [dbo].[${userObj.reference_table}] WHERE email = '${userObj.email}'`;
        return dbQueryMethod.query(employeeQuery).then(result => {
            resolve(result);
            return result;
        }).catch(function(error) {
            log_event('WARNING', error, functionName);
            reject(error);
            throw error;
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

// Returns row of profile table matching a given email
// used by USER_FACTORY
function get_profileTable_MSSQL(email) {
    let functionName = 'get_profileTable_MSSQL';
    return new Promise(function(resolve, reject) {
        let profileQuery = `SELECT * FROM [dbo].[KA_profile] WHERE email = '${email}'`;
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

// monoliths //

function get_User(email, engagement_id) {
    let functionName = 'user_factory';
    return new Promise(function(resolve, reject) {
        // instantiate user object
        let userObj = new User(email);

        function write_employeeTable_toObject(values) {
            //debugLog('write_employeeTable_toObject');
            userObj.wfm_id = values[0]['wfm_id'];
            userObj.first_name = values[0]['first_name'];
            userObj.last_name = values[0]['last_name'];
            userObj.title = values[0]['title'];
            userObj.team = values[0]['team'];
            userObj.hire_date = values[0]['hire_date'];
            userObj.separation_date = values[0]['separation_date'];
            userObj.specialization = values[0]['specialization'];
            userObj.specialization2 = values[0]['specialization2'];
            userObj.specialization3 = values[0]['specialization3'];
            userObj.userTable = values;
            /*
            // this is now being done with an stored procedure, if separated, profile will be soft_delete == true
            if(userObj.separation_date != null){
                debugLog('FALSE')
                console.log(userObj.separation_date)
                write_trusted_toObject(false);
            }else{
                debugLog('TRUE')
                write_trusted_toObject(true);
            }
            */
        };

        function write_profileTable_toObject(values) {
            // debugLog('write_profileTable_toObject');
            userObj.profile_id = values[0]['profile_id'];
            userObj.reference_table = values[0]['reference_table'];
            userObj.admin_grader = values[0]['admin_grader'];
            userObj.admin_owner = values[0]['admin_owner'];
            userObj.admin_permissions = values[0]['admin_permissions'];
            userObj.admin_editor = values[0]['admin_editor'];
            userObj.soft_delete = values[0]['soft_delete'];

            if (userObj.soft_delete == true) {
                write_trusted_toObject(false);
            } else {
                write_trusted_toObject(true);
            }

            if (userObj.admin_grader === true || userObj.admin_owner === true || userObj.admin_permissions === true || userObj.admin_editor === true) {
                write_admin_toObject(true);
            }
            if (userObj.reference_table === 'KA_employee_dev') {
                write_admin_toObject(true);
                write_developer_toObject(true);
            }
        };

        function write_email_toObject(value) {
            //debugLog('write_email_toObject');
            userObj.email = value;
        };

        function write_admin_toObject(bool) {
            //debugLog(bool);
            userObj.admin = bool;
        };

        function write_developer_toObject(bool) {
            //debugLog(bool);
            userObj.developer = bool;
        };

        function write_trusted_toObject(bool) {
            userObj.trusted = bool;
        }

        function write_current_quiz(bool, topic, topic_id) {
            try {
                userObj.active_topic_bool = bool;
                userObj.active_topic = topic;
                userObj.active_topic_id = topic_id;
            } catch (error) {
                log_event('WARNING', error, functionName);
            }
        }

        /* 
        =================================================
        Private functions are above

        WORK for this funciton starts here
        =================================================
        */

        // if you are running this as local host this will fire
        // check if a trusted dev or
        //write_trusted_toObject(true);
        if (email == undefined) {
            write_email_toObject(os.hostname());
            write_trusted_toObject(false);
        } else {
            write_email_toObject(email)
            write_trusted_toObject(true);
        }

        // some defaults
        write_developer_toObject(false);
        write_admin_toObject(false);

        // start work here 
        let handleProfileTable = new Promise(function(resolve, reject) {
            //let functionName = 'handleProfileTable';
            // get user information from the profile table
            get_profileTable_MSSQL(userObj.email).then(profileResult => {
                // handle errors
                if (profileResult.includes("ERROR")) {
                    log_event('WARNING', profileResult, userObj.email);
                }
                // if result from bp is 0, there is no such user in the profile table 
                else if (profileResult.length === 0) {
                    write_trusted_toObject(false);
                    log_event('WARNING', `user : ${email} attempted to user portal, however there is no record in dbo.KA_profile.`, functionName);
                    reject(`${email} : Not user is profile Table`);
                    return userObj;
                }
                // if result from bp is 1 (SHOULD BE), procede with creating user object
                else if (profileResult.length === 1) {
                    write_profileTable_toObject(profileResult);
                    resolve("ProfileTable work Done");
                    return "ProfileTable work Done";
                }
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            })
        });
        // once the above promise is ready, it will be called here and the .then() will fire
        handleProfileTable.then(moveToEmployeeTable => {
            // get the full information about the logged in user 
            // this will need to be revisted when we understand how we are getting informtion from other engagements
            get_employeeTable_MSSQL(userObj).then(tblResults => {
                // handle error first
                if (tblResults.includes("ERROR")) {
                    log_event('WARNING', tblResults, email);
                }
                // if return is 1 (SHOULD BE), write result information to object and then see if there is a quiz the user is currently taking
                else if (tblResults.length === 1) {
                    write_employeeTable_toObject(tblResults);
                    // check for quiz that current user is taking
                    // DEPENDANT ON ENGAGEMENT_ID 

                    // NEXT SET IS TO MOVE THIS TO A DIFFERENT FUNCTION SO USER CAN BE IN PROCESS OF MULTIPLE QUIZZES

                    // if engagement_id is not defined, skip this step.
                    if (engagement_id != undefined) {
                        get_current_quiz(userObj.profile_id, engagement_id).then(quiz_result => {
                            if (quiz_result[0] === undefined) {
                                //debugLog('NO, User is not in the middle of taking a test');
                                write_current_quiz(false, undefined, undefined);
                            } else {
                                write_current_quiz(true, (quiz_result[0]['topic']).trim(), (quiz_result[0]['topic_id']));
                            }
                            resolve(userObj);
                            return userObj;
                        })
                    }
                    // engagement_id was not defined, set current quiz information to undefined and move on.
                    else {
                        write_current_quiz(false, undefined, undefined);
                        resolve(userObj);
                        return userObj;
                    }
                } else if (result.length > 1) {
                    resolve(userObj);
                    return userObj;
                } else {
                    resolve(userObj);
                    return userObj;
                }
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            });
        }).catch(function(error) {
            // very special case where a throw / catch results in a valid return
            log_event('WARNING', error, functionName);
            resolve(userObj);
            return userObj;
        });
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    }).finally(function() {
        // debugLog("finally block");
    });
}

module.exports = {
    get_User: get_User
};

//
/*
// get_User
const { get_User } = require('../backend/get_user.js');
*/