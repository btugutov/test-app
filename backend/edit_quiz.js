const Promise = require('promise');
const os = require('os');
const classModule = require('./classes.js');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');

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
        let query_quiz = `SELECT * FROM [dbo].[vw_quiz_object]
        WHERE topic_id = ${topic_id}`;
        return dbQueryMethod.query(query_quiz).then(result => {
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

function add_test_topic_table_and_get_topic_id_MSSQL(topic, requires0, requires1, category, engagement_id) {
    let functionName = 'add_test_topic_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_test_topic] 
        ([topic],[requires0],[requires1],[category],[engagement_id]) 
        VALUES ('${topic}', ${requires0}, ${requires1}, '${category}', '${engagement_id}')
        
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

function update_test_topic_table_MSSQL(topic, topic_id, requires0, requires1, category, soft_delete, engagement_id) {
    let functionName = 'update_test_topic_table_MSSQL';
    if (engagement_id == undefined) { engagement_id = 1 }
    return new Promise(function(resolve, reject) {
        let update = `UPDATE KA_test_topic 
        SET topic = '${topic}' , requires0 = ${requires0}, requires1 = ${requires1}, category = '${category}', soft_delete = '${soft_delete}', engagement_id = ${engagement_id} 
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
    return new Promise(function(resolve, reject) {
        let query = `INSERT INTO dbo.[KA_answers_history] 
        (answer_id, question_id, correct, sort, answer_prompt, soft_delete, edit_by, bucket_id) 
        VALUES ('${answer_id}, '${question_id}', '${correct}', '${answer_sort}', '${answer_prompt}', '${soft_delete}', '${edit_by}', ${bucket_id}')`
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
        VALUES ('${values})`

        let query = `SELECT image_id 
            FROM [dbo].[KA_images] 
            WHERE question_id = '${question_id}' 
            AND description = '${description}' 
            AND base64 = '${base64}' 
            AND soft_delete = '${soft_delete}'`

        dbQueryMethod.queryRaw(`${insert} ${query}`).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
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
        VALUES ('${values})`
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
        let query = `UPDATE KA_images 
            SET ${set} 
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
        where engagement_id = ${engagement_id}
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

function delete_topic_by_id(topic_id){
    let functionName = 'delete_topic_by_id';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_test_topic 
        SET hard_delete = 1
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
function delete_answers_by_topic_id(topic_id){
    // NOT READY
    let functionName = 'delete_answers_by_topic_id';
    return new Promise(function(resolve, reject) {
        let query = ``
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

function add_bucket_table_MSSQL(bucket_name) {
    let functionName = 'add_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_bucket 
        ([bucket_name]) 
        VALUES ('${bucket_name}')`
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

function update_bucket_table_MSSQL(bucket_id, bucket_name, soft_delete) {
    if(soft_delete == false){
        soft_delete = 1;
    }else{
        soft_delete = 0;
    }
    console.log(`STARTING update_bucket_table_MSSQL: bucket_id => ${bucket_id}, bucket_name => ${bucket_name}, soft_delete => ${soft_delete}`)
    let functionName = 'update_bucket_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let query = `UPDATE KA_bucket SET bucket_name = '${bucket_name}', soft_delete = ${soft_delete}  WHERE bucket_id = ${bucket_id}`
        dbQueryMethod.queryRaw(query).then(result => {
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


function update_KA_answers_from_admin_edit_quiz(answer_id, question_id, correct, answer_sort, answer_prompt, soft_delete, edit_by, bucket_id, bucket_list) {
    let functionName = 'update_KA_answers_from_admin_edit_quiz';
    return new Promise(function(resolve, reject) {
        try {
            if (answer_id == undefined) { answer_id = 'new' }
            if (correct === undefined) { correct = 1 }
            if (soft_delete === undefined) { soft_delete = 0 }
            if (answer_sort == undefined) { answer_sort = '1' }
            if (bucket_id == undefined) { bucket_id = null }

            //if (answer_id === undefined || answer_id === null || answer_id.includes('added') || answer_id.includes('new') || answer_id.includes('null')) {
            if (answer_id.includes('added') || answer_id.includes('new')) { // removing the need to add new answer based on null or undefined. We are changing that need
                add_get_answer_table_MSSQL(question_id, correct, answer_sort, answer_prompt, soft_delete, bucket_id).then(result => {
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
                                call_stored_proc_grading().then(result => {
                                    //console.log(result);
                                }).catch(function(error) {
                                    //console.log('error');
                                    //console.log(error);
                                })
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


function update_KA_images_from_admin_edit_quiz(image, question_id, description, base64, soft_delete, edit_by) {
    //console.log('update_KA_images_from_admin_edit_quiz')
    let functionName = 'update_KA_images_from_admin_edit_quiz';
    return new Promise(function(resolve, reject) {
        try {
            soft_delete = image;
            //description = escape(unescape(unescape(description)));
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
                        add_images_table_and_return_image_id_MSSQL(question_id, description, base64, soft_delete).then(result => {
                            add_images_history_table_MSSQL(result['recordset'][0]['image_id'], question_id, description, base64, soft_delete, edit_by)
                                    //console.log('image added :: ' + newImageId[0]['image'])
                            resolve('update complete');
                            return 'update complete';
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
    return new Promise(function(resolve, reject) {
        try {
            if (question_sort == undefined) {
                question_sort = '1';
                //console.log('question_sort was undefined')
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

function update_topic_main_LOOP(obj, i, edit_by, obj_topic_id, bucket_list) {
    let functionName = 'update_topic_main_LOOP';
    console.log("STARTING update_topic_main_LOOP")
    return new Promise(function(resolve, reject) {
        try {
            let question_type_id;
            let display_type_id;
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
                if (typeof obj['removeQuestion'] !== 'undefined') { // being depricated soon
                    removeQuestion = true;
                    soft_delete = true;
                } else {
                    removeQuestion = false;
                    soft_delete = false
                }
                // manual changes for now. might need to look into how to be smart about getting data
                // get guestion_type and display_type

                /*
              //console.log(' ')
              //console.log(obj['question_type_description'])
              //console.log(' ')
                */

                if (obj['question_type_description'] == 'textfield input') {
                    question_type_id = 2;
                    display_type_id = 1; // we might want to make this to default to 0 to be 'input' or add an input display
                } else if (obj['question_type_description'] == 'drag_and_drop') {
                    display_type_id = 4;
                    question_type_id = 3;
                } else if (obj['question_type_description'] == 'selected input') {
                    question_type_id = 1;
                    if (obj['display_type_description'] === 'Radio' || obj['display_type_description'] === 'Radial') { // misspelled in some places
                        display_type_id = 1;
                    } else if (obj['display_type_description'] === 'Checkbox') {
                        display_type_id = 2;
                    } else if (obj['display_type_description'] === 'Dropdown') {
                        display_type_id = 3;
                    } else if (obj['display_type_description'] === 'drag_and_drop') {
                        display_type_id = 4;
                    } else {
                        reject(`unhandled display_type_description type : ${functionName}`);
                        throw (`unhandled display_type_description type : ${functionName}`);
                    }
                } else {
                    reject(`unhandled question_type_description type : ${functionName}`);
                    throw (`unhandled question_type_description type : ${functionName}`);
                }

                // get image from base64
                if (obj['base64'] === null || (obj['base64']) === undefined || (obj['base64']) === 'undefined') {
                    image = false;
                    base64 = null;
                } else {
                    image = true;
                    base64 = obj['base64'];
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
                update_KA_questions_from_admin_edit_quiz(i, obj['prompt'], question_type_id, display_type_id, obj['question_sort'], image, obj['training_module'], obj['training_url'], obj['question_soft_delete'], obj['point_value'], obj['expected_response'], edit_by).then(this_question_id => {
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
                                update_KA_answers_from_admin_edit_quiz(this_answer_id, this_question_id, this_correct, this_answer_sort, this_answer_prompt, this_soft_delete, edit_by, this_answer_bucket_id, bucket_list).then(r3 => {
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
                                                let test = String(obj['answer_bucket_id'][current_index]);
                                                if (test.includes('new')) {
                                                    let bucket_name = bucket_list[obj['answer_bucket_id'][current_index]]
                                                    var waitForThisPromise = get_bucket_id_by_name(bucket_name).then(bucket_id_result => {
                                                        answer_bucket_id = bucket_id_result[0]['bucket_id'];
                                                    })
                                                } else {
                                                    //console.log('there')
                                                    answer_bucket_id = obj['answer_bucket_id'][current_index]
                                                    var waitForThisPromise = Promise.resolve('no wait needed');
                                                }
                                            }
                                        }
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
                                        update_KA_answers_from_admin_edit_quiz(current_index, this_question_id, answer_correct, answer_sort, answer_prompt, answer_soft_delete, edit_by, answer_bucket_id, bucket_list).then(r3 => {
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

function update_topic_table_loop(topic_id, topic, soft_delete, category, engagement_id) {
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
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    reject(tryError);
                }
                try {
                    if (delta === true) {
                        update_test_topic_table_MSSQL(topic, topic_id, topic_table[0]['requires0'], topic_table[0]['requires1'], category, soft_delete, engagement_id).then(placeholder => {
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
                    add_test_topic_table_and_get_topic_id_MSSQL(topic, requires0, requires1, category, engagement_id).then(new_topic_object => {
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

function update_bucket_list_LOOP(bucket_list, edit_by) {
    let functionName = 'update_bucket_list_LOOP';
    return new Promise(function(resolve, reject) {
        get_bucket_table_MSSQL().then(bucket_table => {
            // testing loop override
            // resolve('complete')
            // return "complete"
            // tresting loop override

            if (Object.keys(bucket_list).length == 0) {
                resolve('nothing to do')
                // return true;
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
                    console.log(`update_bucket_list_LOOP ================================= bucket_id => ${bucket_list[index]['bucket_id'] }; bucket_name => ${bucket_list[index]['bucket_name']};`)
                    if (found == true) {
                        console.log('BUCKET FOUND!')
                        update_bucket_table_MSSQL(bucket_list[index]['bucket_id'] , bucket_list[index]['bucket_name'], bucket_list[index]['soft_delete'])
                            .then(resolve('complete'))
                            .catch(function(error) { log_event('WARNING', error, functionName); })
                    } else if (found == false) {
                        console.log('else CREATING A NEW BUCKET!')
                        add_bucket_table_MSSQL(bucket_list[index]['bucket_name'])
                            .then(resolve('complete'))
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

function recusive_object_hanlder(this_topic_id, object, current_index, edit_by) {
    let functionName = 'recusive_object_hanlder';
    if (current_index == undefined) { current_index = 0 }
    // console.log('======recusive_object_hanlder=========')
    // console.log(current_index)
    // console.log('===============')
    // console.log(Object.keys(object).length)
    // console.log('===============')
    // console.log(object)
    // console.log('==============')

    return new Promise(function(resolve, reject) {
        let max = Object.keys(object).length;

        // =====
        let objKeys = Object.keys(object)
        for(let i = 0; i < Object.keys(object).length; i++){
            let indexKey = objKeys[i];
            if(typeof object[indexKey] === 'object' && indexKey != 'bucket_list' && indexKey != 'logEvent' && indexKey != "list_of_deleted_questions"){
                console.log("LOOPING! >>>>>> indexKey:", indexKey)

                update_topic_main_LOOP(object[indexKey], indexKey, edit_by, this_topic_id, object['bucket_list']).then(result =>{
                    console.log("RESULT =>", result)
                })
            }
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
    return new Promise(function(resolve, reject) {
        try {
            update_topic_table_loop(object['topic_id'], object['topic'], object['topic_soft_delete'], object['category'], object['engagement_id']).then(this_topic_id => {
                console.log('=============================update_topic_table_loop: this_topic_id=========================================', this_topic_id)
                update_quizzes_table_loop(this_topic_id, object['topic']).then(wait => {
                    console.log('============================update_quizzes_table_loop: wait==========================================', wait)
                    update_bucket_list_LOOP(object['bucket_list'], edit_by).then(bucket_id => {
                        console.log('============================update_bucket_list_LOOP: bucket_id==========================================', bucket_id)
                        try {
                            recusive_object_hanlder(this_topic_id, object, 0, edit_by).then(wait2 => {
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

/*
update_topic_main(test, 'localtest').then(result => {
  //console.log(result)
  //console.log('I am FINISHED!')
}).catch(function (error) {
  //console.log(error);
  //console.log('error');
})
*/

/*
EXPORTS 
*/

module.exports = {
    get_topic_to_edit_MSSQL: get_topic_to_edit_MSSQL,
    get_topic_info_for_editQuizHome: get_topic_info_for_editQuizHome,
    update_topic_main: update_topic_main,
    delete_topic_by_id: delete_topic_by_id
};

/*
// edit_quiz.js
const { get_topic_to_edit_MSSQL, get_topic_info_for_editQuizHome, update_topic_main } = require('./edit_quiz.js');
*/