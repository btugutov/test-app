const Promise = require('promise');
const os = require('os');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz, sortOnKeys, topicListNameRemoveSpaces, reAssignSession, questionRenderOderAnswers } = require('./object_validation.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

//const profileTable = "KA_profile";

// This returns a list of topic / quizzes that a given user can take at the moment.
// The return will include if a user has completed the required topics for downsteam topics
function get_available_quiz_for_profile_id_MSSQL(profile_id, engagement_id) {
    let functionName = 'get_available_quiz_for_profile_id_MSSQL';
    return new Promise(function(resolve, reject) {
        let queryAvailableQuiz = `SELECT [topic_id]
        FROM [dbo].[KA_profile_permissions] WHERE [profile_id] = ${profile_id};`
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

function get_gradable_quiz_submit_id_by_profile_and_topic(profile_id, topic_id) {
    let functionName = 'get_gradable_quiz_submit_id_by_profile_and_topic';
    return new Promise(function(resolve, reject) {
        let query = 'SELECT [submit_id]' +
            ' FROM [dbo].[KA_quiz_submission]' +
            ' JOIN KA_quizzes ON [KA_quiz_submission].[quiz_id] = KA_quizzes.[quiz_id]' +
            ' JOIN KA_test_topic ON KA_quizzes.topic_id = KA_test_topic.topic_id' +
            " WHERE KA_test_topic.topic_id = '" + topic_id + "'" +
            ' AND KA_quiz_submission.graded = 0' +
            ' AND KA_quiz_submission.stop_time >= KA_quiz_submission.start_time' +
            " AND (KA_quiz_submission.graded_by is null OR KA_quiz_submission.graded_by = '" + profile_id + "');";
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
};

function get_completed_quiz_categorized_submissions(profile_id) {
    let functionName = 'get_completed_quiz_categorized_submissions';
    return new Promise(function(resolve, reject) {
        /*
        Gets a list of completed quiz_submissions
        */
        let queryAvailableQuiz = 'SELECT KA_test_topic.category ' +
            ',KA_test_topic.topic ' +
            ',COUNT(KA_test_topic.topic) as count ' +
            ',KA_test_topic.topic_id ' +
            'FROM [dbo].[KA_test_topic] ' +
            'JOIN KA_quizzes ON KA_test_topic.topic_id = KA_quizzes.topic_id ' +
            'JOIN KA_quiz_submission ON KA_quizzes.quiz_id = KA_quiz_submission.quiz_id ' +
            'WHERE KA_quiz_submission.graded = 0 ' +
            'AND KA_quiz_submission.stop_time >= KA_quiz_submission.start_time ' +
            "AND (KA_quiz_submission.graded_by is null OR KA_quiz_submission.graded_by = '" + profile_id + "')" +
            'GROUP BY KA_test_topic.category, KA_test_topic.topic, KA_test_topic.topic_id';
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

// The purpose of this is to see who is currently grading a given quiz submitted by a user.
// adding noNull toggle to ensure a check.... fix comment
function get_gradable_quiz_session_by_id(profile_id, submit_id, noNull) {
    let functionName = 'get_gradable_quiz_session_by_id';
    return new Promise(function(resolve, reject) {
        let employeeQuery;
        if (noNull === undefined) {
            employeeQuery = "SELECT * FROM [dbo].[KA_quiz_submission] WHERE [start_time]<[stop_time] AND submit_id = '" + submit_id + "' AND ([graded_by] = '" + profile_id + "';";
        } else {
            employeeQuery = "SELECT * FROM [dbo].[KA_quiz_submission] WHERE [start_time]<[stop_time] AND submit_id = '" + submit_id + "' AND ([graded_by] = '" + profile_id + "' or [graded_by] is null);";
        }
        return dbQueryMethod.query(employeeQuery).then(result => {
            resolve(result);
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

function get_table_complete(table) {
    let functionName = 'get_table_complete';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM [${table}];`
        return dbQueryMethod.query(query).then(result => {
            result = unescapingObj(result)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
};

// 
function get_submit_id_from_graded_by(graded_by) {
    let functionName = 'get_submit_id_from_graded_by';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [submit_id]
             FROM [KA_quiz_submission]
             WHERE soft_delete = 0 AND graded = 0 AND graded_by = '${graded_by}';`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
};

// used to 
function get_testable_topics_by_profile_id(profile_id) {
    /*
    
    */
    let functionName = 'get_testable_topics_by_profile_id';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [KA_test_topic].[topic]
        ,[KA_test_topic].[topic_id]
        ,[KA_test_topic].[requires0]
        ,[KA_test_topic].[requires1]
        ,[KA_test_topic].[category]
        ,[KA_test_topic].[engagement_id]
		,[KA_engagement].[engagement_name]
        ,[KA_test_topic].[soft_delete] as topic_soft_delete
        ,[KA_quiz_submission].[profile_id]
        ,KA_quiz_submission.submit_id
        ,(case 
            when (start_time > stop_time) THEN 1
            when (start_time < stop_time) THEN 2 
            else 0
            END) as topic_status
        FROM [dbo].[KA_test_topic]
        JOIN [dbo].[KA_engagement] on [KA_test_topic].engagement_id = [KA_engagement].engagement_id
        JOIN [dbo].[KA_profile_permissions] on [KA_test_topic].topic_id = [KA_profile_permissions].topic_id
        FULL OUTER JOIN [dbo].[KA_quiz_submission] on (KA_quiz_submission.profile_id = KA_profile_permissions.profile_id) AND (KA_quiz_submission.quiz_id = KA_profile_permissions.topic_id) AND KA_quiz_submission.retake_topic = 0
        WHERE [KA_test_topic].topic_id IN 
        (
            SELECT DISTINCT [KA_test_topic].[topic_id]
            FROM [dbo].[KA_test_topic]
            JOIN [dbo].[KA_profile_permissions] on [KA_test_topic].topic_id = [KA_profile_permissions].topic_id
            WHERE profile_id = ${profile_id} and [KA_profile_permissions].[soft_delete] = 0
        )
        AND KA_profile_permissions.profile_id = ${profile_id}
        AND [KA_test_topic].[soft_delete] = 0
        AND [KA_test_topic].[hard_delete] = 0
        ORDER by [KA_test_topic].[topic_id] asc`
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject('get_testable_topics_by_profile_id'); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

function get_available_engagements_by_profile_id(profile_id) {
    let functionName = 'get_available_engagements_by_profile_id';
    return new Promise(function(resolve, reject) {
        let query = `SELECT DISTINCT [KA_test_topic].[engagement_id]
        ,[KA_engagement].[engagement_name]
        ,[KA_engagement].[soft_delete]
        FROM [dbo].[KA_test_topic] 
		JOIN [dbo].[KA_engagement] on [KA_test_topic].engagement_id = [KA_engagement].engagement_id
        JOIN [dbo].[KA_profile_permissions] on [KA_test_topic].topic_id = [KA_profile_permissions].topic_id
        FULL OUTER JOIN [dbo].[KA_quiz_submission] on (KA_quiz_submission.profile_id = KA_profile_permissions.profile_id) AND (KA_quiz_submission.quiz_id = KA_profile_permissions.topic_id) AND KA_quiz_submission.retake_topic = 0
        where [KA_test_topic].topic_id IN 
        (
            SELECT DISTINCT [KA_test_topic].[topic_id]
            FROM [dbo].[KA_test_topic]
            JOIN [dbo].[KA_profile_permissions] on [KA_test_topic].topic_id = [KA_profile_permissions].topic_id
            where profile_id = ${profile_id} and [KA_profile_permissions].[soft_delete] = 0 
        )
        AND KA_profile_permissions.profile_id = ${profile_id} AND [KA_engagement].[soft_delete] = 0`
        return dbQueryMethod.query(query).then(result => {
            result = switchKey(result, 'engagement_id');
            resolve(result)
            return result;
        }).catch(function(error) { reject('get_available_engagements_by_profile_id'); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

function getEngagementByEngId(id){
    let functionName = 'getEngagementByEngId';
    return new Promise(function(resolve, reject) {
        let query = `SELECT TOP 1 *
             FROM [KA_engagement]
             WHERE engagement_id = '${id}'`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}
function get_all_engagemets_for_admin(){
    let functionName = 'get_all_engagemets_for_admin';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [engagement_id]
        ,[engagement_name]
        ,[soft_delete]
        ,[background]
    FROM [dbo].[KA_engagement] WHERE soft_delete = 0`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}
function get_all_topics(){
    let functionName = 'get_all_topics';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * from KA_test_topic WHERE hard_delete = 0`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

function time_now_MSSQL() {
    let date = new Date();
    return date.toISOString().replace(/T/, ' ').replace(/\.. + /, '');
}

function update_image_base64_MSSQL(question_id, base64) {
    let functionName = 'update_image_base64_MSSQL';
    return new Promise(function(resolve, reject) {
        let update = `UPDATE [KA_images] 
        SET base64 = '${base64}'
        WHERE question_id = ${question_id}`;
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw error; })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error)
        throw error;
    })
}

// used on MAIN page and others
function get_all_categories_and_topics_by_engagement_id_and_profile_id(eng_id, profile_id) {
    console.log('does not work right now.')
}


// Keep this in alphabetical order
module.exports = {
    get_available_quiz_for_profile_id_MSSQL: get_available_quiz_for_profile_id_MSSQL,
    get_completed_quiz_categorized_submissions: get_completed_quiz_categorized_submissions,
    get_gradable_quiz_session_by_id: get_gradable_quiz_session_by_id,
    get_gradable_quiz_submit_id_by_profile_and_topic: get_gradable_quiz_submit_id_by_profile_and_topic,
    get_table_complete: get_table_complete,
    get_submit_id_from_graded_by: get_submit_id_from_graded_by,
    time_now_MSSQL: time_now_MSSQL,
    update_image_base64_MSSQL: update_image_base64_MSSQL,
    get_testable_topics_by_profile_id: get_testable_topics_by_profile_id,
    get_available_engagements_by_profile_id: get_available_engagements_by_profile_id,
    get_all_categories_and_topics_by_engagement_id_and_profile_id: get_all_categories_and_topics_by_engagement_id_and_profile_id,
    getEngagementByEngId: getEngagementByEngId,
    get_all_topics: get_all_topics,
    get_all_engagemets_for_admin: get_all_engagemets_for_admin
};

// create a one liner here that is what another file will need to import everything from this file. 
/*
// methods
const { get_available_quiz_for_profile_id_MSSQL, get_completed_quiz_categorized_submissions, get_gradable_quiz_submit_id_by_profile_and_topic, get_gradable_quiz_session_by_id, get_table_complete, get_submit_id_from_graded_by, time_now_MSSQL, update_image_base64_MSSQL, get_testable_topics_by_profile_id, get_available_engagements_by_profile_id, get_all_categories_and_topics_by_engagement_id_and_profile_id } = require('../backend/methods.js');

*/