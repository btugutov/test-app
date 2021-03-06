const Promise = require('promise');
const os = require('os');
const classModule = require('./classes.js');
const { debugLog, getLineNumber, log_event, log_object_parser, dbQueryMethod, logEvent, log_event_detailed } = require('../backend/classes.js');

function logEventParser(log_level, log_event, host, line, user_id){
    let obj = {
        log_event: log_event,
        log_level: log_level,
        host: host,
        line: line,
        user_id: user_id,
        event_time: new Date()
      }
    logEvent(obj)
}

function call_stored_proc_grading() {
    let functionName = 'get_topic_to_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        let query_quiz = `EXEC sp_calculate_scores`;
        return dbQueryMethod.queryRaw(query_quiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_topic_to_edit_MSSQL(topic_id) {
    let functionName = 'get_topic_to_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        // let query_quiz = `SELECT * FROM [dbo].[vw_quiz_object]
        // WHERE topic_id = ${topic_id}`;
        // console.log(`Start get_topic_to_edit_MSSQL`, new Date())
        let query_quiz = `SELECT TOP (1000) [topic]
        ,topic.topic_id
        ,[category]
        ,topic.soft_delete
        ,topic.engagement_id
        ,topic.time_limit
        ,topic.hard_delete
        ,question.question_id
        ,[prompt]
        ,[question_type_id]
        ,question.display_type_id
        ,question.sort as 'question_sort'
        ,[image]
        ,[training_module]
        ,[training_url]
        ,question.soft_delete as 'question_soft_delete'
        ,[point_value]
        ,[expected_response]
        ,[answer_id]
        ,[correct]
        ,ans.sort as 'answer_sort'
        ,ans.answer_prompt as 'answer_prompt'
        ,ans.soft_delete as 'answer_soft_delete'
        ,[bucket_id]
        ,dt.display_type_description
        ,img.base64
        ,quiz.quiz_id
        ,quiz.quiz_name
        ,eng.engagement_name
    FROM [dbo].[KA_test_topic] as topic
    LEFT JOIN KA_quizzes as quiz ON quiz.topic_id = topic.topic_id 
    LEFT JOIN KA_engagement as eng ON eng.engagement_id = topic.engagement_id
    LEFT JOIN KA_quiz_questions AS qq ON topic.topic_id = qq.quiz_id
    LEFT JOIN KA_questions as question ON qq.question_id = question.question_id
    LEFT JOIN KA_display_types as dt on dt.display_type_id = question.display_type_id
    
    LEFT JOIN KA_images as img on img.question_id = question.question_id
  
    LEFT JOIN KA_answers as ans ON question.question_id = ans.question_id
    WHERE topic.topic_id = ${topic_id}`;
        return dbQueryMethod.query(query_quiz).then(result => {
            // console.log(`End get_topic_to_edit_MSSQL`, new Date())
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
};
function get_buckets_by_topic_id(topic_id) {
    let functionName = 'get_buckets_by_topic_id';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM [dbo].[KA_bucket]
        WHERE quiz_id = ${topic_id}`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
};


function restore_bucketlist_hardcopy() {
    let functionName = 'restore_bucketlist_hardcopy';
    let list = {
        0: {bucket_id: 1, bucket_name: "Verify Ownership", soft_delete: false},
        1: {bucket_id: 2, bucket_name: "No verification necessary", soft_delete: false},
        2: {bucket_id: 3, bucket_name: "Confluence", soft_delete: false},
        3: {bucket_id: 4, bucket_name: "Ticketmaster", soft_delete: false},
        4: {bucket_id: 5, bucket_name: "Support Tool", soft_delete: false},
        5: {bucket_id: 6, bucket_name: "1 - Ticket ID", soft_delete: false},
        6: {bucket_id: 7, bucket_name: "2 - Ticket origin", soft_delete: false},
        7: {bucket_id: 8, bucket_name: "3 - User provided info", soft_delete: false},
        8: {bucket_id: 9, bucket_name: "4 - User provided message", soft_delete: false},
        9: {bucket_id: 10, bucket_name: "5 - Attachments", soft_delete: false},
        10: {bucket_id: 11, bucket_name: "6 - Related account", soft_delete: false},
        11: {bucket_id: 12, bucket_name: "7 - Note from agent", soft_delete: false},
        12: {bucket_id: 13, bucket_name: "8 - Response from agent", soft_delete: false},
        13: {bucket_id: 14, bucket_name: "Purchases & Billing", soft_delete: false},
        14: {bucket_id: 15, bucket_name: "Activity", soft_delete: false},
        15: {bucket_id: 16, bucket_name: "Security", soft_delete: false},
        16: {bucket_id: 17, bucket_name: "Security > Two Factor", soft_delete: false},
        17: {bucket_id: 18, bucket_name: "Security > Phone Number", soft_delete: false},
        18: {bucket_id: 19, bucket_name: "Security > Steam Guard", soft_delete: false},
        19: {bucket_id: 20, bucket_name: "Re-categorize", soft_delete: false},
        20: {bucket_id: 21, bucket_name: "Escalate", soft_delete: false},
        21: {bucket_id: 22, bucket_name: "Assist the user", soft_delete: false},
        22: {bucket_id: 23, bucket_name: "1.", soft_delete: false},
        23: {bucket_id: 24, bucket_name: "2.", soft_delete: false},
        24: {bucket_id: 25, bucket_name: "3.", soft_delete: false},
        25: {bucket_id: 26, bucket_name: "4.", soft_delete: false},
        26: {bucket_id: 27, bucket_name: "5.", soft_delete: false},
        27: {bucket_id: 28, bucket_name: "Not a part of the process", soft_delete: false},
        28: {bucket_id: 33, bucket_name: "Send closing response, close ticket", soft_delete: false},
        29: {bucket_id: 35, bucket_name: "Respond, don't close ticket yet", soft_delete: false},
        30: {bucket_id: 36, bucket_name: "Accounts", soft_delete: false},
        31: {bucket_id: 37, bucket_name: "Billing", soft_delete: false},
        32: {bucket_id: 38, bucket_name: "Tech/Games", soft_delete: false},
        33: {bucket_id: 39, bucket_name: "Confirm", soft_delete: false},
        34: {bucket_id: 40, bucket_name: "Set expectations", soft_delete: false},
        35: {bucket_id: 41, bucket_name: "Assure", soft_delete: false},
        36: {bucket_id: 42, bucket_name: "Relate", soft_delete: false},
    }

    for(let el in list){
        update_bucket_table_MSSQL(list[el]['bucket_id'], escape(list[el]['bucket_name']))
    }
};

function get_topic_by_topicName_MSSQL(topic_name) {
    let functionName = 'get_topic_by_topicName_MSSQL';
    return new Promise(function(resolve, reject) {
        let query_quiz = `SELECT * FROM [dbo].[KA_test_topic]
        WHERE topic = ${topic_name}`;
        return dbQueryMethod.query(query_quiz).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
};

function add_test_topic_table_and_get_topic_id_MSSQL(topic, requires0, requires1, category, engagement_id, time_limit) {
    let functionName = 'add_test_topic_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_test_topic] 
        ([topic],[requires0],[requires1],[category],[engagement_id], [time_limit]) 
        VALUES ('${topic}', ${requires0}, ${requires1}, '${category}', '${engagement_id}', ${time_limit})
        
        SELECT SCOPE_IDENTITY()`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_test_topic_table_MSSQL(topic, requires0, requires1, category, engagement_id) {
    let functionName = 'add_test_topic_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_test_topic] 
        ([topic],[requires0],[requires1],[category],[engagement_id]) 
        VALUES ('${topic}', ${requires0}, ${requires1}, '${category}', '${engagement_id}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// used by the edit funtion to write current data to question_history table
function get_topic_by_topic_id_for_edit_MSSQL(topic_id) {
    let functionName = 'get_topic_by_topic_id_for_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_test_topic WHERE topic_id = '${topic_id}'`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_topic_id_by_information_MSSQL(topic, requires0, requires1, category, engagement_id) {
    let functionName = 'get_topic_id_by_information_MSSQL';
    let arg1 = ` AND requires0 = ${requires0}`
    let arg2 = ` AND requires1 = ${requires1}`
    if (requires0 === null) { arg1 = ` AND requires0 is null` }
    if (requires1 === null) { arg2 = ` AND requires1 is null` }
    return new Promise(function(resolve, reject) {
        let query = `SELECT *
         FROM [dbo].[KA_test_topic]
         WHERE topic = '${topic}'
         ${arg1}
         ${arg2}
         AND category = '${category}'
         AND engagement_id = '${engagement_id}'`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_test_topic_table_MSSQL(topic, topic_id, requires0, requires1, category, soft_delete, engagement_id, time_limit) {
    let functionName = 'update_test_topic_table_MSSQL';
    if (engagement_id == undefined) { engagement_id = 1 }
    return new Promise(function(resolve, reject) {
        let update = `UPDATE KA_test_topic 
        SET topic = '${topic}' , requires0 = ${requires0}, requires1 = ${requires1}, category = '${category}', soft_delete = '${soft_delete}', engagement_id = ${engagement_id}, time_limit = ${time_limit}
        WHERE topic_id = ${topic_id}`
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

/////

function add_answers_history_table_MSSQL(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, edit_by, bucket_id) {
    let functionName = 'add_answers_history_table_MSSQL';
    if(correct == true){
        correct = 0
    }else{
        correct = 1
    }
    if(soft_delete == true){
        soft_delete = 1
    }else{
        soft_delete = 0
    }
    return new Promise(function(resolve, reject) {
        let query = `INSERT INTO dbo.[KA_answers_history] 
        (answer_id, question_id, correct, sort, answer_prompt, soft_delete, edit_by, bucket_id) 
        VALUES (${answer_id}, '${question_id}', '${correct}', '${answer_sort}', '${answer_prompt}', '${soft_delete}', '${edit_by}', ${bucket_id})`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_get_answer_table_MSSQL(question_id, correct, answer_sort, answer_prompt, soft_delete, bucket_id) {
    let functionName = 'add_get_answer_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_answers 
        (question_id, correct, sort, answer_prompt, soft_delete, bucket_id) 
        VALUES ('${question_id}', '${correct}', '${answer_sort}', '${answer_prompt}', '${soft_delete}', ${bucket_id})`

        let query = `SELECT answer_id
         FROM [dbo].[KA_answers]
         WHERE question_id = '${question_id}'
         AND correct = '${correct}'
         AND sort = '${answer_sort}'
         AND answer_prompt = '${answer_prompt}'
         AND soft_delete = '${soft_delete}'`

        let rawQuery = `${insert}; ${query};`
        dbQueryMethod.queryRaw(rawQuery).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// used by the edit funtion to write current data to question_history table
function get_answers_by_answer_id_for_edit_MSSQL(answer_id) {
    let functionName = 'get_answers_by_answer_id_for_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_answers WHERE answer_id = '${answer_id}'`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_answers_table_MSSQL(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, bucket_id) {
    let functionName = 'update_answers_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_answers 
            SET question_id = '${question_id}', correct = '${correct}', sort = '${answer_sort}', answer_prompt = '${answer_prompt}', soft_delete = '${soft_delete}', bucket_id = ${bucket_id} 
            WHERE answer_id = ${answer_id}`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


function add_images_table_and_return_image_id_MSSQL(question_id, description, base64, soft_delete) {
    /*
    condensing 2 queries into 1 to save bandwidth 
    this will add item to inages table then query for that information and get the image_id
    */
   let functionName = 'add_images_table_and_return_image_id_MSSQL';
   return new Promise(function(resolve, reject) {
       if(soft_delete){
           soft_delete = 1;
        }else{
            soft_delete = 0;
        }
        let values;
        let length = 0;
        if(base64){
            length = base64.length;
        }
        console.log("add_images_table_and_return_image_id_MSSQL", ` question_id => ${question_id}, description => ${description}, base64.length => ${length}, soft_delete => ${soft_delete}`)
        if (base64 === null || length < 1000) {
            values = `'${question_id}',
            '${description}' ,
            NULL,
            '${soft_delete}'`;
        } else {
            values = `${question_id},
            '${description}' ,
            '${unescape(base64)}' ,
            '${soft_delete}'`;
        }

        let insert = `INSERT INTO KA_images 
        (question_id, description, base64, soft_delete) 
        VALUES (${values})`

        // let query = `SELECT image_id 
        //     FROM [dbo].[KA_images] 
        //     WHERE question_id = '${question_id}' 
        //     AND description = '${description}' 
        //     AND base64 = '${base64}' 
        //     AND soft_delete = '${soft_delete}'`

        dbQueryMethod.query(`${insert}`).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { 
            reject(error); 
            console.log("err")
            throw (error); 
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        // throw (error);
    })
}


function add_images_table_MSSQL(question_id, description, base64, soft_delete) {
    let functionName = 'add_images_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let values;
        if (base64 === null) {
            values = `'${question_id}',
            '${description}' ,
            NULL,
            '${soft_delete}'`;
        } else {
            values = `'${question_id}',
            '${description}' ,
            '${base64}' ,
            '${soft_delete}'`;
        }
        let insert = `INSERT INTO KA_images 
        (question_id, description, base64, soft_delete) 
        VALUES (${values})`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


// add image to KA_image_history table for record keeping
function add_images_history_table_MSSQL(image_id, question_id, description, base64, soft_delete, edit_by) {
    //console.log('=============================add_images_history_table_MSSQL RECIEVING AN IMAGE==============================================')
    //console.log(image_id)
    let functionName = 'add_images_history_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_images_history 
        (image_id, question_id, description, base64, soft_delete, edit_by) 
        VALUES (${image_id}, '${question_id}', '${description}', '${base64}', '${soft_delete}', '${edit_by}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// get image to KA_image table based on information due to lack of question_id
function get_images_by_information_MSSQL(question_id, description, base64, soft_delete) {
    let functionName = 'get_images_by_information_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT image_id 
            FROM [dbo].[KA_images] 
            WHERE question_id = '${question_id}' 
            AND description = '${description}' 
            AND base64 = '${base64}' 
            AND soft_delete = '${soft_delete}'`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// used by the edit funtion to write current data to question_history table
function get_images_by_question_id_for_edit_MSSQL(question_id) {
    let functionName = 'get_images_by_question_id_for_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_images WHERE question_id = '${question_id}'`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_images_table_MSSQL(image_id, question_id, description, base64, soft_delete) {
    let functionName = 'update_images_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let set;
        if (base64 === null) {
            set = `SET description = '${description}', base64 = NULL, question_id = '${question_id}', soft_delete = '${soft_delete}'`;
        } else {
            set = `SET description = '${description}', base64 = '${base64}', question_id = '${question_id}', soft_delete = '${soft_delete}'`;
        }
        let query = `UPDATE KA_images  ${set} 
            WHERE image_id = ${image_id}`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_question_history_table_MSSQL(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by) {
    let functionName = 'add_question_history_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_questions_history 
        (question_id, prompt, question_type_id, display_type_id, sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by) 
        VALUES (${question_id}, '${prompt}', '${question_type_id}', ${display_type_id}, ${question_sort}, '${image}', '${training_module}', '${training_url}', '${soft_delete}', ${point_value}, '${expected_response}', '${edit_by}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_question_table_and_return_question_id_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response) {
    let functionName = 'add_question_table_MSSQL';
    if(!question_sort || question_sort == 'null' || question_sort==null){
        question_sort = 1;
    }
    console.log("add_question_table_and_return_question_id_MSSQL: ")
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_questions 
        ([prompt],[question_type_id],[display_type_id],[sort],[image],[training_module],[training_url],[soft_delete],[point_value],[expected_response]) 
        VALUES ('${prompt}', '${question_type_id}', '${display_type_id}', '${question_sort}', '${image}', '${training_module}', '${training_url}', '${soft_delete}', '${point_value}', '${expected_response}')`

        let query = `SELECT question_id 
            FROM [dbo].[KA_questions] 
            WHERE prompt = '${prompt}' 
            AND question_type_id = '${question_type_id}' 
            AND display_type_id = '${display_type_id}' 
            AND sort = '${question_sort}' 
            AND image = '${image}' 
            AND training_module = '${training_module}' 
            AND training_url = '${training_url}' 
            AND soft_delete = '${soft_delete}' 
            AND point_value = '${point_value} '
            AND expected_response = '${expected_response}'
            ORDER BY question_id desc`

        dbQueryMethod.queryRaw(`${insert} ${query}`).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_question_table_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response) {
    let functionName = 'add_question_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_questions 
        ([prompt],[question_type_id],[display_type_id],[sort],[image],[training_module],[training_url],[soft_delete],[point_value],[expected_response]) 
        VALUES ('${prompt}', '${question_type_id}', '${display_type_id}', '${question_sort}', '${image}', '${training_module}', '${training_url}', '${soft_delete}', '${point_value}', '${expected_response}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_question_by_information_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response) {
    let functionName = 'get_question_by_information_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT question_id 
            FROM [dbo].[KA_questions] 
            WHERE prompt = '${prompt}' 
            AND question_type_id = '${question_type_id}' 
            AND display_type_id = '${display_type_id}' 
            AND sort = '${question_sort}' 
            AND image = '${image}' 
            AND training_module = '${training_module}' 
            AND training_url = '${training_url}' 
            AND soft_delete = '${soft_delete}' 
            AND point_value = '${point_value} '
            AND expected_response = '${expected_response}'
            ORDER BY question_id desc`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// used by the edit funtion to write current data to question_history table
function get_question_by_question_id_for_edit_MSSQL(question_id) {
    let functionName = 'get_question_table_MSSQL';
    console.log("get_question_by_question_id_for_edit_MSSQL: question_id =>", question_id)
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_questions WHERE question_id = ${question_id}`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_question_table_MSSQL(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response) {
    let functionName = 'update_question_table_MSSQL';
    if(soft_delete){
        console.log("DISABLE THIS QUESTION =>",question_id)
    }
    return new Promise(function(resolve, reject) {
        let training_Module_Statement;
        if (training_module === null) {
            training_Module_Statement = `[training_module] = ${training_module} `
        } else {
            training_Module_Statement = `[training_module] = '${training_module}' `
        }

        let training_url_Statement;
        if (training_module === null) {
            training_url_Statement = `[training_url] = ${training_url} `
        } else {
            training_url_Statement = `[training_url] = '${training_url}' `
        }

        let query = `UPDATE KA_questions 
        SET [prompt] = '${prompt}'
        , [question_type_id] = '${question_type_id}' 
        , [display_type_id] = '${display_type_id}' 
        , [sort] = '${question_sort}'
        , [image] = '${image}'
        , ${training_Module_Statement} 
        , ${training_url_Statement} 
        , [soft_delete] = '${soft_delete}' 
        , [point_value] = '${point_value}' 
        , [expected_response] = '${expected_response}'
        WHERE question_id = '${question_id}'`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

/* QUIZ QUESTIONS */

function add_to_quiz_question_table_MSSQL(question_id, quiz_id) {
    let functionName = 'add_to_quiz_question_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_quiz_questions 
        (question_id, quiz_id) 
        VALUES ('${question_id}', '${quiz_id}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


// used by the edit funtion to write current data to question_history table
function get_quiz_question_table_from_question_id_and_quiz_id_MSSQL(question_id, quiz_id) {
    let functionName = 'get_quiz_question_table_from_question_id_and_quiz_id_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_quiz_questions WHERE quiz_id = '${quiz_id}' AND question_id = '${question_id}'`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

/* KA_quizzes */

function add_quizzes_table_MSSQL(topic_id, quiz_name) {
    let functionName = 'add_quizzes_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_quizzes 
        ([topic_id], [quiz_name]) 
        VALUES ('${topic_id}', '${quiz_name}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// used by the edit funtion to write current data to question_history table
function get_quizzes_table_by_topic_id_for_edit_MSSQL(topic_id) {
    let functionName = 'get_quizzes_table_by_topic_id_for_edit_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM KA_quizzes WHERE topic_id = '${topic_id}'`;
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_quizzes_table_MSSQL(topic_id, quiz_name) {
    let functionName = 'update_quizzes_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_quizzes 
        SET quiz_name = '${quiz_name}'
        WHERE topic_id = ${topic_id}`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// get editQuizHome information
function get_topic_info_for_editQuizHome(engagement_id) {
    let functionName = 'get_topic_info_for_editQuizHome';
    return new Promise(function(resolve, reject) {
        let query = `SELECT [KA_test_topic].[topic]
            ,[KA_test_topic].[topic_id]
            ,[KA_quiz_questions].[quiz_id]
            ,[KA_test_topic].[category]
            ,[KA_test_topic].[soft_delete] as topic_soft_delete
            ,COUNT([KA_quiz_questions].[question_id]) as question_count
        FROM [dbo].[KA_test_topic]
        FULL OUTER JOIN KA_quiz_questions on KA_quiz_questions.quiz_id = [KA_test_topic].topic_id
        where engagement_id = ${engagement_id} AND [KA_test_topic].hard_delete = 0
        group by [KA_test_topic].[topic],[KA_test_topic].[topic_id]
            ,[KA_test_topic].[category]
            ,[KA_test_topic].[soft_delete]
            ,KA_quiz_questions.quiz_id`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}



// interact with KA_bucket table of the database

function add_bucket_table_MSSQL(bucket) {
    let functionName = 'add_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_bucket 
        ([bucket_name], [quiz_id]) 
        VALUES ('${bucket.bucket_name}', '${bucket.quiz_id}') SELECT SCOPE_IDENTITY()`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_bucket_table_MSSQL() {
    let functionName = 'get_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT * FROM [dbo].[KA_bucket]`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_bucket_id_by_name(bucket_name) {
    let functionName = 'get_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `SELECT TOP (1) [bucket_id] FROM [dbo].[KA_bucket] where [bucket_name] = '${bucket_name}' Order by bucket_id desc`
        dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_bucket_table_MSSQL(bucket) {
    if(bucket['soft_delete'] == false){
        bucket['soft_delete'] = 0;
    }else{
        bucket['soft_delete'] = 1;
    }

    //bucket_id, bucket_name, soft_delete
    console.log(`STARTING update_bucket_table_MSSQL: bucket_id => ${bucket['bucket_id']}, bucket_name => ${bucket['bucket_name']}, soft_delete => ${bucket.soft_delete} `)
    let functionName = 'update_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_bucket SET bucket_name = '${bucket.bucket_name}', soft_delete = ${bucket.soft_delete}, quiz_id = ${bucket.quiz_id}  WHERE bucket_id = ${bucket.bucket_id} SELECT SCOPE_IDENTITY()`
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function delete_bucket_table_MSSQL(bucket) {
    let functionName = 'get_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `DELETE FROM [dbo].[KA_bucket] WHERE bucket_id = '${bucket.bucket_id}' SELECT SCOPE_IDENTITY()`
        dbQueryMethod.query(query).then(result => {
            console.log("delete_bucket_table_MSSQL result =>", result)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


/* 
*************************************
EDIT QUIZES BLOCK

Above this point should be the single purpose functions that do work. 
Essentially the Private functions

Below are the larger blocks of work that process complex steps that must act in a specific order

*************************************
*/


function update_KA_answers_from_admin_edit_quiz(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, edit_by, bucket_id, bucket_list, bucket_ids) {
    let functionName = 'update_KA_answers_from_admin_edit_quiz';
    // console.log("BEGINNING OF update_KA_answers_from_admin_edit_quiz: bucket_ids =>", bucket_ids)
    if(soft_delete == true){
        console.log("delete this answer id =>", answer_id)
        return new Promise(function(resolve, reject) {
            let query = `DELETE FROM [dbo].[KA_answers] WHERE answer_id = ${answer_id}`
            dbQueryMethod.query(query).then(result => {
                console.log('result after answer was deleted')
                resolve('update complete')
                return result;
            }).catch(function(error) { reject(error); throw (error); })
        }).catch(function(error) {
            log_event('WARNING', error, functionName);
            reject(error);
            throw (error);
        })
    }else{
        return new Promise(function(resolve, reject) {
            try {
                if (answer_id == undefined) { answer_id = 'new' }
                if (correct === undefined) { correct = 1 }
                if (soft_delete === undefined) { soft_delete = 0 }
                if (answer_sort == undefined) { answer_sort = '1' }
                if (bucket_id == undefined) { bucket_id = null }
                // if(bucket_ids[bucket_id]){bucket_id = bucket_ids[bucket_id]}
                //if (answer_id === undefined || answer_id === null || answer_id.includes('added') || answer_id.includes('new') || answer_id.includes('null')) {
                if (answer_id.includes('added') || answer_id.includes('new')) { // removing the need to add new answer based on null or undefined. We are changing that need
                    add_get_answer_table_MSSQL(question_id, correct, answer_sort, answer_prompt, soft_delete, bucket_id).then(result => {
                        console.log("AFTER add_get_answer_table_MSSQL BEFORE add_answers_history_table_MSSQL: answer_id and bucket_id =>", answer_id, bucket_id)
                        add_answers_history_table_MSSQL(result[1]['answer_id'], question_id, correct, answer_sort, answer_prompt, soft_delete, edit_by, bucket_id)
                        //console.log('add needed')
                        //console.log(result)
                        resolve(result[1]['answer_id']);
                        return result[1]['answer_id'];
                    }).catch(function(error) { reject(error); throw (error); })
                    resolve('answer_id === undefined');
                    return 'answer_id === undefined';
                } else if (answer_id === undefined || answer_id === null || answer_id.includes('null')) { // if null or undefined, do nothing, this is a user input question, should probably be filtered before hitting this function
                    // clean exit and call next item
                    //console.log('update else if')
                    resolve('answer_id === null or undefined');
                    return 'answer_id === null or undefined';
                } else {
                    //console.log('update else')
                    get_answers_by_answer_id_for_edit_MSSQL(answer_id).then(currentAnswerState => {
                        let int_answer_id = parseInt(answer_id)
                        let int_question_id = parseInt(question_id)
                        let CQS = currentAnswerState; // really long name
                        let delta = false; // bool to see if a change has happened
                        let grade_procedure = false; // bool to see if a regrade needs to be triggered
                        if (bucket_id == undefined) { // double check to see if the variable was missed, and set it to type null
                            bucket_id = null;
                        }
                        try {
                            function check_change(a, b, note) { // internal function to check if an element of the quiz object has been changed by the user or program
                                if (a != b) {
                                    //console.log(a, ' : ', b)
                                    delta = true;
                                    //console.log(note);
                                    return true
                                } else {
                                    return false
                                }
                            }
    
                            // check correct boolean 
                            grade_procedure = check_change(CQS[0]['correct'], correct, 'correct')
    
                            // check sort order
                            check_change(CQS[0]['sort'], answer_sort, 'answer_sort')
    
                            // check answer prompt
                            check_change(CQS[0]['answer_prompt'], answer_prompt, 'answer_prompt')
    
                            // check soft_delete boolean
                            check_change(CQS[0]['soft_delete'], soft_delete, 'soft_delete')
    
                            // check bucket_id 
                            check_change(CQS[0]['bucket_id'], bucket_id, 'bucket_id') // not ready to use
    
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            reject(tryError);
                        }
                        //server side ensuring escape
                        //answer_prompt = escape(unescape(unescape(answer_prompt)));
                        //console.log(answer_prompt)
                        if (delta === true) {
                            //console.log('update needed')
                            add_answers_history_table_MSSQL(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, edit_by, bucket_id)
                            .catch(function(error) {
                                //console.log('error');
                                //console.log(error);
                            })
                            update_answers_table_MSSQL(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, bucket_id).then(trash => {
                                if (grade_procedure == true) {
                                    console.log("===-=-=-=-=-=--=-=-==-sp_calculate_scores SHOULD BE TRIGGERED, BUT it is disabled!=-=-=-=-=-=-=-=-=-=-=-=-=--")
                                    // call_stored_proc_grading().then(result => {
                                    //     //console.log(result);
                                    // }).catch(function(error) {
                                    //     //console.log('error');
                                    //     //console.log(error);
                                    // })
                                }
                            }).catch(function(error) {
                                //console.log('error');
                                //console.log(error);
                            })
                            //console.log('update complete');
                            resolve('update complete');
                            return 'update complete';
                        } else {
                            // console.log('no updates needed');
                            resolve('no updates needed');
                            return 'no updates needed';
                        }
                    }).catch(function(error) { reject(error); throw (error); })
                }
            } catch (tryError) {
                log_event('ERROR', tryError, functionName);
                reject(tryError);
                //console.log(tryError)
            }
        }).catch(function(error) {
            log_event('WARNING', error, functionName);
            throw (error);
        })
    }
}


function update_KA_images_from_admin_edit_quiz(image, question_id, description, base64, soft_delete, edit_by) {
    //console.log('update_KA_images_from_admin_edit_quiz')
    let functionName = 'update_KA_images_from_admin_edit_quiz';
    return new Promise(function(resolve, reject) {
        try {
            soft_delete = image;
            //description = escape(unescape(unescape(description)));
            console.log(`update_KA_images_from_admin_edit_quiz: id => ${question_id}; image.length => ${image.length}, base64 => ${base64.length}` )
            get_images_by_question_id_for_edit_MSSQL(question_id).then(currentImageState => {
                // if image table has row : update row
                if (description === undefined || !description) {
                    description = 'null';
                }
                // console.log('-==-=======DESCRIPTION=========')
                // console.log(description)
                if (currentImageState[0] !== undefined) {
                    let CQS = currentImageState;
                    let int_question_id = parseInt(question_id)
                    let delta = false;
                    try {
                        if (CQS[0]['question_id'] !== int_question_id) {
                            delta = true;
                            //console.log(int_question_id);
                            //console.log('int_question_id')
                        }
                        if (CQS[0]['description'] !== description) {
                            delta = true;
                            //console.log(int_question_id);
                            //console.log('description')
                        }
                        if (CQS[0]['base64'] !== String(base64)) {
                            delta = true;
                            //console.log(int_question_id);
                            //console.log('base64')
                        }
                        if (CQS[0]['soft_delete'] !== soft_delete) {
                            delta = true;
                            //console.log(int_question_id);
                            //console.log('soft_delete')
                        }
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        reject(tryError);
                        //console.log(tryError)
                    }

                    if (delta === true) {
                        //console.log('update needed')
                        add_images_history_table_MSSQL(CQS[0]['image_id'], question_id, description, base64, soft_delete, edit_by).then(trash => {
                            //console.log('complete')
                        }).catch(function(error) {
                            //console.log('error');
                            //console.log(error);
                        })
                        update_images_table_MSSQL(CQS[0]['image_id'], question_id, description, base64, soft_delete).then(trash => {
                            //console.log('complete')
                        }).catch(function(error) {
                            //console.log('error');
                            //console.log(error);
                        })

                        //console.log('update complete');
                        resolve('update complete');
                        return 'update complete';
                    } else {
                        //console.log('no updates needed');
                        resolve('no updates needed');
                        return 'no updates needed';
                    }
                }
                // if image is NOT in row
                else if (currentImageState[0] === undefined) {
                    //if soft_delete === true >> do nothing
                    if (soft_delete === false || soft_delete === 0) {
                        resolve('no updates needed');
                        return 'no updates needed';
                    }
                    // if soft_delete === false >> add new image
                    else {
                        console.log("add_images_table_and_return_image_id_MSSQL ======")
                        add_images_table_and_return_image_id_MSSQL(question_id, description, base64, soft_delete).then(result => {
                            resolve('update complete');
                            return 'update complete';
                            // add_images_history_table_MSSQL(result['recordset'][0]['image_id'], question_id, description, base64, soft_delete, edit_by)
                                    //console.log('image added :: ' + newImageId[0]['image'])
                        }).catch(function(error) { reject(error); throw (error); })
                        resolve('answer_id === undefined');
                        return 'image === undefined';

                        /*
                        add_images_table_MSSQL(question_id, description, base64, soft_delete).then(result => {
                            get_images_by_information_MSSQL(question_id, description, base64, soft_delete).then(newImageId => {
                                //console.log('========================================newImageId====================================================')
                                //console.log(newImageId)
                                add_images_history_table_MSSQL(newImageId[0]['image_id'], question_id, description, base64, soft_delete, edit_by)
                                    //console.log('image added :: ' + newImageId[0]['image'])
                                resolve('update complete');
                                return 'update complete';
                            }).catch(function(error) { reject(error); throw (error); })
                        }).catch(function(error) { reject(error); throw (error); })
                        resolve('answer_id === undefined');
                        return 'image === undefined';
                        */
                    }
                } else {
                    reject('boom')
                }

            }).catch(function(error) { reject(error); throw (error); })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            //console.log(tryError)
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// update and record history of answers
// function update_KA_questions_from_admin_edit_quiz(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by) {
function update_KA_questions_from_admin_edit_quiz(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by) {
    let functionName = 'update_KA_questions_from_admin_edit_quiz';
    console.log("update_KA_questions_from_admin_edit_quiz: params =>", `question_id => ${question_id}, prompt => ${prompt}, question_type_id => ${question_type_id}, display_type_id => ${display_type_id}, question_sort => ${question_sort}, image => ${image}`)
    return new Promise(function(resolve, reject) {
        try {
            if (question_sort == undefined || question_sort == null) {
                question_sort = '1';
                console.log('question_sort was undefined')
            }else if(!display_type_id){
                display_type_id = 1;
            }
            if (prompt === '' || prompt === undefined || prompt === null) {
                //console.log('this question was not filled out. Skipping');
                //console.log('question referenced :: ' + question_id);
            } else {
                if (question_id.includes('added') || question_id.includes('new')) {
                    try{
                        add_question_table_and_return_question_id_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response).then(result => {
                            
                            add_question_history_table_MSSQL(result['recordset'][0]['question_id'], prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by).catch(function(error) { log_event('WARNING', error, functionName); })
                        
                            resolve(result['recordset'][0]['question_id']);
                            return result['recordset'][0]['question_id'];
                        }).catch(function(error) { reject(error); throw (error); })
                    } catch (tryError) {console.log('=-===--====--=-=-==--==--=-==--=-='); console.log(tryError)}
                    /*
                    //
                    // THE BELOW IS BEING REPLACED BY THE ABOVE. I AM TURNING 3 QUERIES INTO 2 IN AN EFFORT TO RESUCE NETWORK TRAFFIC
                    //
                    add_question_table_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response).then(result => {
                        get_question_by_information_MSSQL(prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response).then(newQuestionId => {
                            //console.log('===========')
                            //console.log(newQuestionId[0]['question_id'])
                            //console.log('===========')
                            add_question_history_table_MSSQL(newQuestionId[0]['question_id'], prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by).catch(function(error) { log_event('WARNING', error, functionName); })
                                //console.log('question added :: ' + newQuestionId[0]['question_id'])
                                //console.log('')
                            resolve(newQuestionId[0]['question_id']);
                            return newQuestionId[0]['question_id'];
                        }).catch(function(error) { reject(error); throw (error); })
                    }).catch(function(error) { reject(error); throw (error); })
                    */
                } else {
                    //console.log(`question_id is :: ${question_id}`)
                    get_question_by_question_id_for_edit_MSSQL(question_id).then(currentQuestionState => {
                        let CQS = currentQuestionState; // really long name
                        //console.log(CQS[0])
                        let delta = false;
                        let int_question_id = parseInt(question_id) // can't do this. added1 exists
                        try {
                            if (CQS[0]['question_id'] !== int_question_id) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('int_question_id'); 
                            }
                            if (CQS[0]['prompt'] !== prompt) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('prompt'); 
                            }
                            if (CQS[0]['question_type_id'] !== question_type_id) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('question_type_id');
                            }
                            if (CQS[0]['display_type_id'] !== display_type_id) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('display_type_id');
                            }
                            if (CQS[0]['image'] !== image) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('image');
                            }
                            if (CQS[0]['training_module'] !== training_module) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('training_module');
                            }
                            if (CQS[0]['training_url'] !== training_url) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('training_url');
                            }
                            if (CQS[0]['soft_delete'] !== soft_delete) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('soft_delete');
                            }
                            if (CQS[0]['point_value'] !== point_value) {
                                delta = true;
                                //console.log(int_question_id);
                                //console.log('point_value');
                            }
                            if (CQS[0]['expected_response'] !== expected_response) {
                                delta = true;
                                //console.log(expected_response);
                                //console.log('expected_response');
                            }
                            if (CQS[0]['sort'] !== question_sort) {
                                delta = true;
                                //console.log(question_sort);
                                //console.log('question_sort');
                            }
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            reject(tryError);
                            //console.log(tryError)
                        }

                        if (delta === true) {
                            //console.log('update needed : question_id :: ' + question_id);
                            //question_sort = CQS[0]['sort'];
                            //console.log('****-- Update Questions --****')
                            //console.log(question_sort)
                            //console.log('****-- Update Questions --****')
                            add_question_history_table_MSSQL(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response, edit_by).catch(function(error) { log_event('WARNING', error, functionName); })
                            update_question_table_MSSQL(question_id, prompt, question_type_id, display_type_id, question_sort, image, training_module, training_url, soft_delete, point_value, expected_response)
                            .then(resultUpdate => {
                                //console.log(resultUpdate)
                            }).catch(function(error) {
                                log_event('WARNING', error, functionName);
                            })
                            resolve(question_id);
                            return question_id;
                        } else {
                            //console.log('no updates needed');
                            resolve(question_id);
                            return question_id;
                        }
                    }).catch(function(error) { reject(error); throw (error); })
                }
            }
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            //console.log(tryError)
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// update and record history of answers
function update_KA_quiz_questions_from_admin_edit_quiz(question_id, quiz_id) {
    let functionName = 'update_KA_quiz_questions_from_admin_edit_quiz';
    return new Promise(function(resolve, reject) {
        try {
            get_quiz_question_table_from_question_id_and_quiz_id_MSSQL(question_id, quiz_id).then(result => {
                if (result[0] === undefined || result[0] === [] || result[0] === '[]') {
                    add_to_quiz_question_table_MSSQL(question_id, quiz_id).then(wait => {
                        resolve('done');
                        return 'done';
                    }).catch(function(error) { reject(error); throw (error); })
                } else {
                    resolve('done');
                    return 'done';
                }
            })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            //console.log(tryError)
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// question property key : new  == exists >> new question
// andwer key : new1 new2 new3 as the key
// property removed will exist if removed

function update_topic_main_LOOP(obj, i, edit_by, obj_topic_id, bucket_list, bucket_ids) {
    let functionName = 'update_topic_main_LOOP';
    console.log("STARTING update_topic_main_LOOP")
    // console.log("OBJECT =>", obj)
    return new Promise(function(resolve, reject) {
        if(typeof(obj) != 'object'){
            console.log("obj is not an object =>", obj)
            resolve('done');
            return;
        }
        try {
            let question_type_id = obj['question_type_id'];
            let display_type_id = obj['display_type_id'];
            let image;
            let base64;
            try {
                //check for add status
                

                if (typeof obj['new'] !== 'undefined') { // being depricated soon
                    newQuestion = true;
                } else {
                    newQuestion = false;
                }
                //check for delete status
                // console.log(`id => ${i}; obj['removeQuestion'] => ${obj['removeQuestion']}; obj['question_soft_delete'] => ${obj['question_soft_delete']}`)
                // if (typeof obj['removeQuestion'] !== 'undefined') { // being depricated soon
                //     removeQuestion = true;
                //     soft_delete = true;
                // } else {
                //     removeQuestion = false;
                //     soft_delete = false
                // }
                // if()
                soft_delete = obj['question_soft_delete'];
                // manual changes for now. might need to look into how to be smart about getting data
                // get guestion_type and display_type

                /*
              //console.log(' ')
              //console.log(obj['question_type_description'])
              //console.log(' ')
                */

                // if (obj['question_type_description'] == 'textfield input') {
                //     question_type_id = 2;
                //     display_type_id = 1; // we might want to make this to default to 0 to be 'input' or add an input display
                // } else if (obj['question_type_description'] == 'drag_and_drop') {
                //     display_type_id = 4;
                //     question_type_id = 3;
                // } else if (obj['question_type_description'] == 'selected input') {
                //     question_type_id = 1;
                //     if (obj['display_type_description'] === 'Radio' || obj['display_type_description'] === 'Radial') { // misspelled in some places
                //         display_type_id = 1;
                //     } else if (obj['display_type_description'] === 'Checkbox') {
                //         display_type_id = 2;
                //     } else if (obj['display_type_description'] === 'Dropdown') {
                //         display_type_id = 3;
                //     } else if (obj['display_type_description'] === 'drag_and_drop') {
                //         display_type_id = 4;
                //     } else {
                //         reject(`unhandled display_type_description type : ${functionName}`);
                //         throw (`unhandled display_type_description type : ${functionName}`);
                //     }
                // } else {
                //     reject(`unhandled question_type_description type : ${functionName}`);
                //     throw (`unhandled question_type_description type : ${functionName}`);
                // }

                // get image from base64
                if (!obj['image']) {
                    image = false;
                    base64 = null;
                    console.log(`QUESTION ${i} HAS NO IMAGE`)
                } else {
                    image = true;
                    base64 = obj['base64'];
                    console.log(`QUESTION ${i} HAS IMAGE`)
                }
                //obj['prompt'] = escape(unescape(unescape(obj['prompt'])))
            } catch (tryError) {
                //console.log(obj)
                //console.log(i)
                log_event('ERROR', tryError, functionName);
                reject(tryError);
                //console.log(tryError)
            }
            try {
                if(obj['question_hard_delete']){
                    console.log("====================================THIS QUESTION MUST BE DELETED! =>", i, "====================================")
                    delete_answers_by_question_id(i);
                    delete_quiz_question_connection(i);
                    delete_question(i);
                    resolve('done');
                    return 'done';
                }else{
                    console.log("BEFORE update_KA_questions_from_admin_edit_quiz; obj =>", obj)
                    update_KA_questions_from_admin_edit_quiz(i, obj['prompt'], question_type_id, display_type_id, obj['question_sort'], image, obj['training_module'], obj['training_url'], obj['question_soft_delete'], obj['point_value'], obj['expected_response'], edit_by)
                    .then(this_question_id => {
                        update_KA_images_from_admin_edit_quiz(obj['image'], this_question_id, obj['image_description'], obj['base64'], obj['image'], edit_by).catch(function(error) {
                            log_event('WARNING', error, functionName);
                        })
                        update_KA_quiz_questions_from_admin_edit_quiz(this_question_id, obj_topic_id).catch(function(error) {
                            log_event('WARNING', error, functionName);
                        })
                        try {
                            //console.log(`Object.keys(obj['answer_prompt']`);
                            //console.log(`_`);
                            if (Object.keys(obj['answer_prompt']).length === 0) { // what is this edge case for?
                                // this happens if the question being added is a user input question.
                                // it will not have an answer prompt.
                                //console.log(`(Object.keys(obj['answer_prompt']).length === 0)`)
                                try {
                                    // end and return complete
                                    // this should be obseleted by removing the need for the query to have an answer promt called "USER INPUT" in it. ADJUST QUERIES 
                                    let this_answer_id = undefined;
                                    let this_correct = 0;
                                    let this_answer_sort = 1;
                                    let this_answer_prompt = 'PLACEHOLDER';
                                    let this_soft_delete = 0;
                                    let this_answer_bucket_id = undefined;
                                    update_KA_answers_from_admin_edit_quiz(this_answer_id, this_question_id, this_correct, this_answer_sort, this_answer_prompt, this_soft_delete, edit_by, this_answer_bucket_id, bucket_list, bucket_ids).then(r3 => {
                                        resolve('done');
                                        return 'done;'
                                    }).catch(function(error) {
                                        reject(error);
                                        throw (error);
                                    })
                                } catch (tryError) {
                                    log_event('ERROR', tryError, functionName);
                                    reject(tryError);
                                }
                            } else {
                                // console.log(` >> !(Object.keys(obj['answer_prompt']).length === 0)`)
                                try {
                                    for (let index in Object.keys(obj['answer_prompt'])) {
                                        let current_index = Object.keys(obj['answer_prompt'])[index]
                                        console.log("Working on answer", current_index)
                                        // console.log("if there's bucket match, then it should be here =>", obj['answer_bucket_id'][current_index])
                                        let answer_bucket_id;
                                        let answer_correct;
                                        let answer_sort;
                                        let answer_prompt;
                                        let answer_soft_delete;
                                        try {
                                            // make sure this varable is set to SOMETHING
                                            // likekly not needed once we have the drag and drop working
                                            if (undefined == obj['answer_bucket_id']) { // not always defined
                                                answer_bucket_id = null;
                                            } else {
                                                if (undefined == obj['answer_bucket_id'][current_index]) {
                                                    answer_bucket_id = null;
                                                } else {
                                                    // console.log("obj['answer_bucket_id'][current_index] =>", obj['answer_bucket_id'][current_index])
                                                    answer_bucket_id = obj['answer_bucket_id'][current_index]
                                                    // if(bucket_ids && bucket_ids[obj['answer_bucket_id'][current_index]]){
                                                    //     answer_bucket_id = bucket_ids[obj['answer_bucket_id'][current_index]]
                                                    //     console.log("thereby, answer_bucket_id is => ", answer_bucket_id)
                                                    // }
                                                    // let test = String(obj['answer_bucket_id'][current_index]);
                                                    // if (test.includes('new')) {
                                                    //     let bucket_name = bucket_list[obj['answer_bucket_id'][current_index]]
                                                    //     var waitForThisPromise = get_bucket_id_by_name(bucket_name).then(bucket_id_result => {
                                                    //         answer_bucket_id = bucket_id_result[0]['bucket_id'];
                                                    //     })
                                                    // } else {
                                                    //     //console.log('there')
                                                    //     answer_bucket_id = obj['answer_bucket_id'][current_index]
                                                    //     var waitForThisPromise = Promise.resolve('no wait needed');
                                                    // }
                                                }
                                            }
                                            var waitForThisPromise = Promise.resolve('no wait needed');
                                        } catch (error) { console.log(error) }
    
                                        // because of callback / Promise hell, i need to put this here to make sure the above promise is complete.
                                        Promise.all([waitForThisPromise]).then(bucketWait => {
                                            try {
                                                // verify that all objects are set, and if not set, set them with something
    
                                                if (undefined == obj['answer_correct'][current_index]) {
                                                    answer_correct = 0;
                                                } else {
                                                    answer_correct = obj['answer_correct'][current_index]
                                                }
                                                if (undefined == obj['answer_sort'][current_index]) {
                                                    answer_sort = 1;
                                                } else {
                                                    answer_sort = obj['answer_sort'][current_index]
                                                }
                                                if (undefined == obj['answer_prompt'][current_index]) {
                                                    answer_prompt = 'PLACEHOLDER';
                                                } else {
                                                    answer_prompt = obj['answer_prompt'][current_index]
                                                }
                                                if (undefined == obj['answer_soft_delete'][current_index]) {
                                                    answer_soft_delete = 0;
                                                } else {
                                                    answer_soft_delete = obj['answer_soft_delete'][current_index]
                                                }
                                            } catch (error) { console.log(error) }
                                            update_KA_answers_from_admin_edit_quiz(current_index, this_question_id, answer_correct, answer_sort, answer_prompt, answer_soft_delete, edit_by, answer_bucket_id, bucket_list, bucket_ids).then(r3 => {
                                                resolve('done');
                                                return 'done;'
                                            }).catch(function(error) {
                                                reject(error);
                                                throw (error);
                                            })
                                        }).catch(function(error) {
                                            reject(error);
                                            throw (error);
                                        })
                                    }
                                } catch (tryError) {
                                    log_event('ERROR', tryError, functionName);
                                    reject(tryError);
                                }
                            }
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            reject(tryError);
                        }
                    }).catch(function(error) {
                        reject(error);
                        throw (error);
                    })
                }
            } catch (tryError) {
                log_event('ERROR', tryError, functionName);
                reject(tryError);
            }
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_topic_table_loop(topic_id, topic, soft_delete, category, engagement_id, time_limit) {
    let functionName = 'update_topic_table_loop';
    if (soft_delete === undefined) { soft_delete = false }
    if (topic_id === undefined) { topic_id = 0 }
    if (engagement_id == undefined) { engagement_id = 2 }
    console.log("starting update_topic_table_loop")
    return new Promise(function(resolve, reject) {
        try {
            topic = topic.trim();
            category = category.trim();
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
        }
        console.log(`update_topic_table_loop returning get_topic_by_topic_id_for_edit_MSSQL => topic_id: ${topic_id};  soft_delete: ${soft_delete};  engagement_id: ${engagement_id}`)
        get_topic_by_topic_id_for_edit_MSSQL(topic_id).then(topic_table => {
            console.log("get_topic_by_topic_id_for_edit_MSSQL RETURNED THIS =>", topic_table)
            if (topic_table.length > 0) {
                let delta = false;
                try {
                    if ((topic_table[0]['topic']).trim() !== topic.trim()) {
                        delta = true;
                    }
                    if ((topic_table[0]['soft_delete']) !== soft_delete) {
                        delta = true;
                    }
                    if ((topic_table[0]['engagement_id']) !== engagement_id) {
                        delta = true;
                    }
                    if ((topic_table[0]['category']) !== category) {
                        delta = true;
                    }
                    if ((topic_table[0]['time_limit']) !== time_limit) {
                        delta = true;
                    }
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    reject(tryError);
                }
                try {
                    if (delta === true) {
                        update_test_topic_table_MSSQL(topic, topic_id, topic_table[0]['requires0'], topic_table[0]['requires1'], category, soft_delete, engagement_id, time_limit).then(placeholder => {
                            resolve(topic_id);
                            return topic_id;
                        }).catch(function(error) { reject(error); throw (error); })
                    } else {
                        resolve(topic_id);
                        return topic_id;
                    }
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    reject(tryError);
                }
            } else {
                console.log("LOOKS LIKE get_topic_by_topic_id_for_edit_MSSQL RETURNED topic_table EMPTY")
                try {
                    let requires0 = null;
                    let requires1 = null;
                    console.log(`TRYING TO RUN add_test_topic_table_and_get_topic_id_MSSQL: topic => ${topic}; category => ${category}; engagement_id => ${engagement_id}`);
                    add_test_topic_table_and_get_topic_id_MSSQL(topic, requires0, requires1, category, engagement_id, time_limit).then(new_topic_object => {
                        /*
                            Bug found: add_test_topic_table_and_get_topic_id_MSSQL returns recordset as undefined
                        */
                        console.log("add_test_topic_table_and_get_topic_id_MSSQL RETURNED THIS =>", new_topic_object)
                        resolve(new_topic_object['recordset'][0]['']);
                        return new_topic_object['recordset'][0][''];
                    }).catch(function(error) { reject(error); throw (error); })

                    /*
                    add_test_topic_table_MSSQL(topic, requires0, requires1, category, engagement_id).then(placeholder => {
                        get_topic_id_by_information_MSSQL(topic, requires0, requires1, category, engagement_id).then(new_topic_object => {
                            resolve(new_topic_object[0]['topic_id']);
                            return new_topic_object[0]['topic_id'];
                        }).catch(function(error) { reject(error); throw (error); })
                    }).catch(function(error) { reject(error); throw (error); })
                    */
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    reject(tryError);
                }
            }
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_quizzes_table_loop(topic_id, topic) {
    let functionName = 'update_quizzes_table_loop';
    return new Promise(function(resolve, reject) {
        try {
            topic = topic.trim();
            //topic = escape(unescape(unescape(topic)).trim());
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            //console.log(tryError)
        }
        try {
            get_quizzes_table_by_topic_id_for_edit_MSSQL(topic_id).then(this_quizzes_result => {
                if (this_quizzes_result.length > 0) {
                    let delta = false;
                    try {
                        if ((this_quizzes_result[0]['quiz_name']).trim() !== topic.trim()) {
                            delta = true;
                            //console.log(topic);
                            //console.log('quiz_name');
                        }
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        reject(tryError);
                        //console.log(tryError)
                    }
                    try {
                        if (delta === true) {
                            update_quizzes_table_MSSQL(this_quizzes_result[0]['topic_id'], topic).then(placeholder => {
                                resolve(topic_id);
                                return topic_id;
                            }).catch(function(error) { reject(error); throw (error); })
                        } else {
                            //console.log('no updates needed');
                            resolve(topic_id);
                            return topic_id;
                        }
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        //console.log(tryError)
                    }
                } else {
                    try {
                        add_quizzes_table_MSSQL(topic_id, topic).then(placeholder => {
                            resolve(topic_id);
                            return topic_id;
                        }).catch(function(error) { reject(error); throw (error); })
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        //console.log(tryError)
                    }
                }
            })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            reject(tryError);
            //console.log(tryError)
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_bucket_list_LOOP(bucket_list, edit_by, this_topic_id) {
    let functionName = 'update_bucket_list_LOOP';
    console.log("==========update_bucket_list_LOOP=========")
    console.log(bucket_list)
    return new Promise(function(resolve, reject) {
        let return_obj = {};
        get_bucket_table_MSSQL().then(bucket_table => {
            let ids = {};
            let counter = 0;
            let length = Object.keys(bucket_list).length;
            if (Object.keys(bucket_list).length == 0) {
                resolve('nothing to do')
            } else {
                for (let index in bucket_list) {
                    if(!bucket_list[index]['bucket_id'] || !bucket_list[index]['bucket_name'] ){
                        continue;
                    }
                    let found = false;
                    for (var i = 0; i < bucket_table.length; i++) {
                        if (bucket_table[i]['bucket_id'] == bucket_list[index]['bucket_id'] ) {
                            found = true;
                            break;
                        }
                    }
                    if(!bucket_list[index]['quiz_id']){
                        bucket_list[index]['quiz_id'] = this_topic_id;
                    }
                    console.log(`update_bucket_list_LOOP ================================= bucket_id => ${bucket_list[index]['bucket_id'] }; bucket_name => ${bucket_list[index]['bucket_name']};`)
                    if (found == true) {
                        console.log('BUCKET FOUND!')
                        update_bucket_table_MSSQL(bucket_list[index])
                            .then(resolve('complete '))
                            .catch(function(error) { log_event('WARNING', error, functionName); })
                    } else if (found == false) {
                        console.log('else CREATING A NEW BUCKET!')
                        add_bucket_table_MSSQL(bucket_list[index]).then(bucket =>{
                            if(bucket){
                                ids[index] = bucket.recordset[0]['']
                                counter++;
                            }
                            if(counter == length){
                                resolve(ids)
                            }
                            // return_obj[bucket_list[index]['bucket_id']] = bucket.recordset[0]['']
                            console.log("return after new bucket =>", bucket)
                        })
                            .catch(function(error) { log_event('WARNING', error, functionName); })
                    } else {
                        log_event('ERROR', 'Strange error that bool was not true or false', functionName);
                        resolve('nothing to do')
                    }
                }
            }
        }).catch(function(error) {
            log_event('WARNING', error, functionName);
            throw (error);
        })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function saveOneBucket(bucket) {
    let functionName = 'saveOneBucket';
    console.log("==========saveOneBucket=========")
    console.log(bucket)
    return new Promise(function(resolve, reject) {
        if (typeof(bucket.bucket_id)=="string" && bucket.bucket_id.slice(0,3) == "new") {
            console.log('else CREATING A NEW BUCKET!')
            add_bucket_table_MSSQL(bucket).then(bucket_response =>{
                console.log("return after new bucket =>", bucket_response)
                resolve(bucket_response)
            }).catch(function(error) { log_event('WARNING', error, functionName); })
        }else if(bucket.soft_delete){
            console.log('else DELETEING A BUCKET!')
            delete_bucket_table_MSSQL(bucket).then(bucket_response =>{
                console.log("return after new bucket =>", bucket_response)
                resolve(bucket_response)
            }).catch(function(error) { log_event('WARNING', error, functionName); })
        } else {
            console.log('UPDATING FOUND!')
            update_bucket_table_MSSQL(bucket).then(bucket_response =>{
                console.log("return after updating bucket =>", bucket_response)
                resolve(bucket_response)
            }).catch(function(error) { log_event('WARNING', error, functionName); })
        } 
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function recusive_object_hanlder(this_topic_id, object, current_index, edit_by, bucket_ids) {
    let functionName = 'recusive_object_hanlder';
    if (current_index == undefined) { current_index = 0 }

    return new Promise(function(resolve, reject) {
        let max = Object.keys(object).length;
        // =====
        let objKeys = Object.keys(object)
        for(let question in object.questions){
            // let indexKey = objKeys[i];
            update_topic_main_LOOP(object.questions[question], question, edit_by, this_topic_id, object['bucket_list'], bucket_ids).then(result =>{
                // console.log("RESULT =>", result)
            })
            // if(typeof object[indexKey] === 'object' && indexKey != 'bucket_list' && indexKey != 'logEvent' && indexKey != "list_of_deleted_questions"){
            //     console.log("LOOPING! >>>>>> indexKey:", indexKey)

            // }
        }
        console.log("recusive_object_hanlder is done!!!!!")
        resolve(true)
        return true;
        //=====
        if (max <= current_index) {
            console.log(`max => ${max}; current_index => ${current_index}`)
            let objKeys = Object.keys(object)
            console.log(objKeys)
            console.log("recusive_object_hanlder IS COMPLETED!")
            resolve(true)
            // restore_bucketlist_hardcopy();
            return true
        } else {
            let objKeys = Object.keys(object)
            let indexKey = objKeys[current_index]
            console.log('======================================================================')
            console.log(`indexKey => ${indexKey}; objKeys => ${objKeys}; typeof object[indexKey] === 'object' && indexKey != 'bucket_list' && indexKey != 'logEvent' => ${typeof object[indexKey] === 'object'} ${indexKey != 'bucket_list'} ${indexKey != 'logEvent'}`)
            if (typeof object[indexKey] === 'object' && indexKey != 'bucket_list' && indexKey != 'logEvent') {
                console.log("ADDING",indexKey)
                update_topic_main_LOOP(object[indexKey], indexKey, edit_by, this_topic_id, object['bucket_list']).then(result => {
                    current_index += 1;
                    return recusive_object_hanlder(this_topic_id, object, current_index, edit_by)
                }).catch(function(error) {
                    reject(error);
                    throw (error);
                })
            } else {
                console.log("SKIPPING", indexKey)
                current_index += 1;
                recusive_object_hanlder(this_topic_id, object, current_index, edit_by)
            }
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// export / public funtions //
function update_topic_main(object, edit_by, engagement_id) {
    let functionName = 'update_topic_main';
    console.log('===============')
    console.log("starting update_topic_main")
    console.log('===============')
    console.log("TIME LIMIT =>", object['time_limit'])
    return new Promise(function(resolve, reject) {
        try {
            update_topic_table_loop(object['topic_id'], object['topic'], object['topic_soft_delete'], object['category'], object['engagement_id'], object['time_limit']).then(this_topic_id => {
                console.log('=============================update_topic_table_loop: this_topic_id=========================================', this_topic_id)
                update_quizzes_table_loop(this_topic_id, object['topic']).then(wait => {
                    console.log('============================update_quizzes_table_loop: wait==========================================', wait)
                    update_bucket_list_LOOP(object['bucket_list'], edit_by, this_topic_id).then(bucket_id => {
                        console.log('============================update_bucket_list_LOOP: bucket_ids==========================================', bucket_id)
                        try {
                            recusive_object_hanlder(this_topic_id, object, 0, edit_by, null).then(wait2 => {
                                if(wait2){
                                    console.log("WAIT2 => ", wait2)
                                }
                                console.log("object['answer_delete_confirm_list'] =>>>>>>>>>>>",object['answer_delete_confirm_list'])
                                console.log("update_topic_main IS COMPLETED!")
                                resolve(`${functionName} is complete`);
                                return 'success'
                            }).catch(function(error) {
                                log_event('ERROR', error, functionName);
                                reject(error);
                                console.log("ERROR =>", error)
                                throw (error);
                            })
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            console.log(tryError)
                        }
                    }).catch(function(error) {
                        log_event('WARNING', error, functionName);
                        throw (error);
                    })
                }).catch(function(error) {
                    log_event('WARNING', error, functionName);
                    reject(error);
                    throw (error);
                })
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function create_topic_main(object, edit_by, engagement_id) {
    let functionName = 'update_topic_main';
    console.log('===============')
    console.log("starting create_topic_main")
    console.log('===============')
    return new Promise(function(resolve, reject) {
        try {
            let obj_response = {};
            update_topic_table_loop(object['topic_id'], object['topic'], object['topic_soft_delete'], object['category'], object['engagement_id'], object['time_limit']).then(this_topic_id => {
                console.log('=============================update_topic_table_loop: this_topic_id=========================================', this_topic_id)
                update_quizzes_table_loop(this_topic_id, object['topic']).then(wait => {
                    console.log('============================update_quizzes_table_loop: wait==========================================', wait)
                    update_bucket_list_LOOP(object['bucket_list'], edit_by, this_topic_id).then(bucket_id => {
                        console.log('============================update_bucket_list_LOOP: bucket_id==========================================', bucket_id)
                        try {
                            recusive_object_hanlder(this_topic_id, object, 0, edit_by, bucket_id).then(wait2 => {
                                if(wait2){
                                    console.log("WAIT2 => ", wait2)
                                }
                                console.log("update_topic_main IS COMPLETED!")
                                resolve(`${functionName} is complete`);
                                return 'success'
                            }).catch(function(error) {
                                log_event('ERROR', error, functionName);
                                reject(error);
                                console.log("ERROR =>", error)
                                throw (error);
                            })
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            console.log(tryError)
                        }
                    }).catch(function(error) {
                        log_event('WARNING', error, functionName);
                        throw (error);
                    })
                }).catch(function(error) {
                    log_event('WARNING', error, functionName);
                    reject(error);
                    throw (error);
                })
            }).catch(function(error) {
                log_event('WARNING', error, functionName);
                reject(error);
                throw (error);
            })
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

//==================================== DELETE FUNCTIONS ================================================

function deleteQuiz(quiz, email){
    let details = {
        'quiz': quiz
    }
    delete_topic_by_id(quiz.topic_id).then(res => {
        log_event_detailed("INFO", `Quiz ID ${quiz.topic_id}: is deleted`, "delete_topic_by_id", email, JSON.stringify(details));
        // delete_buckets_by_topic_id(quiz.topic_id).then(res => {
        //     log_event_detailed("INFO", `Quiz ID ${quiz.topic_id}: is deleted`, "delete_buckets_by_topic_id", email, JSON.stringify(details));
        //     for(let el in quiz.questions){
        //         details.el = el
        //         delete_answers_by_question_id(el).then(res =>{
        //             log_event_detailed("INFO", `Question ID ${el}: all answers with this question ID are deleted`, "delete_answers_by_question_id", email, JSON.stringify(details));
        //         }).catch(function(error){
        //             details.el = el;
        //             log_event_detailed("ERROR", error, "delete_answers_by_question_id", email, JSON.stringify(details));
        //         })
        //         delete_question(el).then(res => {
        //             log_event_detailed("INFO", `Question ID ${el}: is deleted`, "delete_question", email, JSON.stringify(details));
        //         }).catch(function(error){
        //             log_event_detailed("ERROR", error, "delete_question", email, JSON.stringify(details));
        //         })
        //     }
        // }).catch(function(error){
        //     log_event_detailed("ERROR", error, "delete_buckets_by_topic_id", email, JSON.stringify(details));
        // })
    }).catch(function(error){
        log_event_detailed("ERROR", error, "delete_topic_by_id", email, JSON.stringify(details));
    })
    
}
function disableQuiz(topic_id){
    let functionName = 'disableQuiz';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_test_topic  SET soft_delete = 1
        WHERE topic_id = ${topic_id}`;
        dbQueryMethod.queryRaw(query).then(result => {
            console.log(`quiz ${topic_id} is disabled`)
            // console.log("RESULT =>", result)
            resolve(result)
            return result;
        }).catch(function(error) { 
            console.log("Error is here!", error)
            logEventParser("ERROR", error, "edit_quiz.js", "disableQuiz", null);
            reject(error); 
            throw (error); 
        })
    }).catch(function(error) {
        console.log("Error is here!", error)
        logEventParser("ERROR", error, "edit_quiz.js", "disableQuiz", null);
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}
function delete_topic_by_id(topic_id){
    let functionName = 'delete_topic_by_id';
    return new Promise(function(resolve, reject) {
        // let delete_topic_by_id = `DELETE FROM KA_test_topic 
        // WHERE topic_id = ${topic_id}`;
        // let delete_topic_question_connection = `DELETE FROM KA_quiz_questions
        // WHERE quiz_id = ${topic_id}`;
        let hard_delete_query = `UPDATE KA_test_topic SET hard_delete = 1 where topic_id = ${topic_id}`
        dbQueryMethod.queryRaw(hard_delete_query).then(result => {
            // log_event_detailed("INFO", "Quiz ID ${topic_id}: is deleted.", "delete_topic_by_id", null, null);
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        // logEventParser("ERROR", error, "edit_quiz.js", "delete_topic_by_id", null)
        // log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}
function delete_answers_by_question_id(question_id){
    // NOT READY
    let functionName = 'delete_answers_by_topic_id';
    return new Promise(function(resolve, reject) {
        let query = `DELETE FROM KA_answers 
        WHERE question_id = ${question_id}`;
        dbQueryMethod.queryRaw(query).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        // log_event('WARNING', error, functionName);
        // logEventParser(log_level, log_event, host, line, user_id)
        // logEventParser("ERROR", error, "edit_quiz.js", "delete_answers_by_question_id", null)
        reject(error);
        throw (error);
    })
}
function delete_quiz_question_connection(question_id){
    // NOT READY
    let functionName = 'delete_quiz_question_connection';
    return new Promise(function(resolve, reject) {
        let query = `DELETE FROM KA_quiz_questions 
        WHERE question_id = ${question_id}`;
        dbQueryMethod.queryRaw(query).then(result => {
            console.log(`question ${el} is deleted`)
            resolve(result)
            return result;
        }).catch(function(error) { logEventParser("ERROR", error, "edit_quiz.js", "delete_quiz_question_connection: dbQueryMethod.query(query)", null); reject(error); throw (error); })
    }).catch(function(error) {
        logEventParser("ERROR", error, "edit_quiz.js", "delete_quiz_question_connection", null);
        log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}
function delete_question(question_id){
    let functionName = 'delete_question';
    return new Promise(function(resolve, reject) {
        let query = `DELETE FROM KA_questions 
        WHERE question_id = ${question_id}`;
        dbQueryMethod.queryRaw(query).then(result => {
            console.log(`question ${el} is deleted`)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        // logEventParser("ERROR", error, "edit_quiz.js", "delete_question", null);
        // log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}
function delete_buckets_by_topic_id(topic_id){
    let functionName = 'delete_buckets_by_topic_id';
    return new Promise(function(resolve, reject) {
        let query = `DELETE FROM KA_bucket 
        WHERE quiz_id = ${topic_id}`;
        dbQueryMethod.queryRaw(query).then(result => {
            console.log(`bucket ${el} is deleted`)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        // logEventParser("ERROR", error, "edit_quiz.js", "delete_buckets_by_topic_id", null);
        // log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}

// =====================================================================================================

// Edit Quiz function v2 ===============================================================================
function get_topic_info_and_quesion_ids_by_topic_id_for_edit(topic_id) {
    let functionName = 'get_topic_info_and_quesion_ids_by_topic_id_for_edit';
    return new Promise(function(resolve, reject) {
        let query = `SELECT 
        topic.topic,
        topic.topic_id,
        topic.soft_delete,
        topic.engagement_id,
        topic.hard_delete,
        topic.time_limit,
        topic.category,
        eng.engagement_name
        FROM KA_test_topic as topic
        JOIN KA_engagement as eng ON eng.engagement_id = topic.engagement_id
        WHERE topic_id = ${topic_id}`;
        dbQueryMethod.query(query).then(result => {
            let query2 = `SELECT [question_id]
            FROM [dbo].[KA_quiz_questions] where quiz_id = ${topic_id}`;
            dbQueryMethod.query(query2).then(result2 => {
                let obj = {
                    quiz_info: result,
                    questions: result2
                }
                resolve(obj);
                return obj;
            }).catch(function(error) { reject(error); throw (error); })
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}
function get_question_info_by_id(question_id) {
    let functionName = 'get_topic_info_and_quesion_ids_by_topic_id_for_edit';
    return new Promise(function(resolve, reject) {
        let query = `SELECT q.question_id
        ,q.prompt
        ,q.question_type_id
        ,q.display_type_id
        ,q.sort
        ,q.image
        ,q.training_module
        ,q.training_url
        ,q.soft_delete
        ,q.point_value
        ,q.expected_response,
        q_t.question_type_description
    FROM [dbo].[KA_questions] as q
    JOIN KA_question_types as q_t ON q.question_type_id = q_t.question_type_id
     where question_id = ${question_id}`;
        dbQueryMethod.query(query).then(result => {
            resolve(result[0]);
            return result[0];
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        // log_event('WARNING', error, functionName);
        reject(error);
        throw (error);
    })
}


/*
EXPORTS 
*/

module.exports = {
    get_topic_to_edit_MSSQL: get_topic_to_edit_MSSQL,
    get_topic_info_for_editQuizHome: get_topic_info_for_editQuizHome,
    update_topic_main: update_topic_main,
    delete_topic_by_id: delete_topic_by_id,
    get_buckets_by_topic_id: get_buckets_by_topic_id,
    saveOneBucket: saveOneBucket,
    create_topic_main:create_topic_main,
    deleteQuiz: deleteQuiz,
    disableQuiz: disableQuiz,
    get_topic_info_and_quesion_ids_by_topic_id_for_edit: get_topic_info_and_quesion_ids_by_topic_id_for_edit,
    get_question_info_by_id: get_question_info_by_id
};

/*
// edit_quiz.js
const { get_topic_to_edit_MSSQL, get_topic_info_for_editQuizHome, update_topic_main } = require('./edit_quiz.js');
*/