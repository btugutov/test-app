const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');
//const dbQueryMethod = new classModule.DatabaseQuery();

// functions // 

function get_permissions_table_by_profile_id(profile_id) {
    let functionName = 'get_permissions_table_by_profile_id';
    return new Promise(function (resolve, reject) {
        let query = `SELECT * FROM [dbo].[KA_profile_permissions] WHERE profile_id = '${profile_id}'`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
};

function update_profile_table_MSSQL(profile_id, admin_grader, admin_owner, admin_permissions, admin_editor) {
    let functionName = 'update_profile_table_MSSQL';
    return new Promise(function (resolve, reject) {
        let update = `UPDATE KA_profile 
        SET admin_grader = '${admin_grader}', admin_owner = '${admin_owner}', admin_permissions = '${admin_permissions}', admin_editor = '${admin_editor}' 
        WHERE profile_id = ${profile_id}`
        dbQueryMethod.rawQuery(update).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function add_profile_permissions_table_MSSQL(profile_id, topic_id, edit_by) {
    let functionName = 'add_profile_permissions_table_MSSQL';
    return new Promise(function (resolve, reject) {
        let insert = `INSERT INTO dbo.[KA_profile_permissions] 
        ([profile_id],[topic_id],[access],[fast_track],[soft_delete],[grant_method]) 
        VALUES ('${profile_id}', ${topic_id}, '1', '0', '0', 'Admin');`
        dbQueryMethod.queryRaw(insert).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_profile_permissions_table_MSSQL(profile_id, topic_id, edit_by) {
    let functionName = 'update_profile_permissions_table_MSSQL';
    return new Promise(function (resolve, reject) {
        let update = `DELETE FROM [dbo].[KA_profile_permissions] WHERE profile_id = ${profile_id} AND topic_id = ${topic_id}`
        // return dbQueryMethod.query(update).then(result => {
        //     resolve(result);
        //     return result;
        // }).catch(function (error) { reject(error); throw error; })
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function soft_delete_profile_permissions_table_MSSQL(profile_id, topic_id, edit_by) {
    let functionName = 'soft_delete_profile_permissions_table_MSSQL';
    return new Promise(function (resolve, reject) {
        let update = `UPDATE KA_profile_permissions 
        SET access = '1', fast_track = '0', soft_delete = '1', grant_method = 'Admin' 
        WHERE profile_id = ${profile_id} AND topic_id = ${topic_id}`
        // return dbQueryMethod.query(update).then(result => {
        //     resolve(result);
        //     return result;
        // }).catch(function (error) { reject(error); throw error; })
        dbQueryMethod.queryRaw(update).then(result => {
            resolve(result)
            return result;
        }).catch(function (error) { reject(error); throw (error); })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_all_users_admin_permission_edit_MSSQL() {
    let functionName = 'get_all_users_admin_permission_edit_MSSQL';
    return new Promise(function (resolve, reject) {
        let query = 'SELECT * FROM [dbo].[vw_employees_permission_admin] WHERE profile_soft_delete = 0';
        return dbQueryMethod.query(query).then(result => {
            resolve(result);
            return result;
        }).catch(function (error) { reject(error); throw error; })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

function get_users_admin_permission_by_profile_id_MSSQL(profile_id) {
    let functionName = 'get_users_admin_permission_by_profile_id_MSSQL';
    return new Promise(function (resolve, reject) {
        let query = `SELECT * FROM [dbo].[vw_employees_permission_admin] WHERE profile_soft_delete = 0 AND profile_id = ${profile_id}`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result);
            return result;
        }).catch(function (error) { reject(error); throw error; })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};


function get_all_users_quiz_permission_MSSQL() {
    let functionName = 'get_all_users_quiz_permission_MSSQL';
    return new Promise(function (resolve, reject) {
        //let query = 'SELECT * FROM [dbo].[vw_employees_permission_quiz] WHERE profile_id is not null AND (([permission_soft_delete] = 0 or [permission_soft_delete] is null) and ([profile_soft_delete] = 0 or [profile_soft_delete] is null))';
        let query = `SELECT * FROM [dbo].[vw_employees_permission_quiz] 
        WHERE profile_soft_delete = 0 
        AND Profile_id is not null`;
        return dbQueryMethod.query(query).then(result => {
            resolve(result);
            return result;
        }).catch(function (error) { reject(error); throw error; })
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// monoliths // 
function update_permission_quiz_LOOP(obj, edit_by) {
    let functionName = 'update_permission_quiz_LOOP';
    // return new Promise(function (resolve, reject) {
    for(let topic_id in obj['added_list']){
        add_profile_permissions_table_MSSQL(obj['profile_id'], obj['added_list'][topic_id], edit_by).then(placeholder => {
            console.log(placeholder)
            let event = `Adding quiz permissions for profile_id : '${obj['profile_id']}' for topic_id : '${ obj['added_list'][topic_id]}' authorized by profile_id : '${edit_by}'`
            log_event('INFO', event, functionName);
        }).catch(function (error) { reject(error); throw (error); })
    }
    for(let topic_id in obj['removed_list']){
        update_profile_permissions_table_MSSQL(obj['profile_id'], obj['removed_list'][topic_id], edit_by).then(placeholder => {
            console.log(placeholder)
            let event = `Removing quiz permissions for profile_id : '${obj['profile_id']}' for topic_id : '${obj['removed_list'][topic_id]}' authorized by profile_id : '${edit_by}'`
            log_event('INFO', event, functionName);
        }).catch(function (error) { reject(error); throw (error); })
    }
        
        // try {
        //     get_permissions_table_by_profile_id(obj['profile_id']).then(thisTable => {
        //         let db_topic_id = {};
        //         let db_soft_delete = {};
        //         try {
        //             for (let a in Object.keys(thisTable)) {
        //                 db_topic_id[a] = a
        //                 db_soft_delete[a] = a
        //                 db_topic_id[a] = thisTable[a]['topic_id']
        //                 db_soft_delete[a] = thisTable[a]['soft_delete']
        //             }
        //         } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
        //         try {
        //             console.log("db_topic_id =>", db_topic_id)
        //             for (let a in Object.keys(obj['topic_id'])) {
        //                 let add = true;
        //                 let update = false;
        //                 var update_profile_id;
        //                 var update_topic_id;
        //                 try {
        //                     for (let b in Object.keys(db_topic_id)) {
        //                         if (parseInt(db_topic_id[b]) === obj['topic_id'][a]) { //check to see if this item exists int he database
        //                             add = false; // this item exists in the database, do not add
        //                             if (db_soft_delete[b] === true) { // check to see this item was marked as deleted in the database
        //                                 update = true; // this item was marked as deleted in the database, update it to not deleted
        //                                 update_profile_id = obj['profile_id']
        //                                 update_topic_id = obj['topic_id'][a]
        //                             }
        //                         }
        //                     }
        //                 } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
        //                 if(add){
        //                     console.log("let's add")
        //                 }
        //                 if (add === true) {
        //                     add_profile_permissions_table_MSSQL(obj['profile_id'], obj['topic_id'][a], edit_by).then(placeholder => {
        //                         let event = `Adding quiz permissions for profile_id : '${obj['profile_id']}' for topic_id : '${obj['topic_id'][a]}' authorized by profile_id : '${edit_by}'`
        //                         log_event('INFO', event, functionName);
        //                     }).catch(function (error) { reject(error); throw (error); })
        //                 }
        //                 if (update === true) {
        //                     update_profile_permissions_table_MSSQL(update_profile_id, update_topic_id, edit_by).then(placeholder => {
        //                         let event = `Removing quiz permissions for profile_id : '${obj['profile_id']}' for topic_id : '${obj['topic_id'][a]}' authorized by profile_id : '${edit_by}'`
        //                         log_event('INFO', event, functionName);
        //                     }).catch(function (error) { reject(error); throw (error); })
        //                 }
        //             }
        //         } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }

        //         try {
        //             for (let a in Object.keys(db_topic_id)) {
        //                 var soft_delete = true;
        //                 try {
        //                     for (let b in Object.keys(obj['topic_id'])) {
        //                         if (db_topic_id[a] === parseInt(obj['topic_id'][b])) { //check to see if this item in database exists the list provided
        //                             soft_delete = false // this item exists in the database AND the list provided, do not delete

        //                         } else {
        //                             if (db_soft_delete[a] === true) { // check to see this item was marked as deleted in the database
        //                                 soft_delete = false // this item exists in the database AND the list provided, do not delete
        //                             }
        //                         }
        //                     }
        //                 } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
        //                 if (soft_delete === true) {
        //                     soft_delete_profile_permissions_table_MSSQL(obj['profile_id'], db_topic_id[a], edit_by).then(placeholder => {
        //                         let event = `Deleting quiz permissions for profile_id : '${obj['profile_id']}' for topic_id : '${db_topic_id[a]}' authorized by profile_id : '${edit_by}'`
        //                         log_event('INFO', event, functionName);
        //                     }).catch(function (error) { reject(error); throw (error); })
        //                 }
        //             }

        //             resolve('complete')
        //             return 'complete';
        //         } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
        //     }).catch(function (error) { reject(error); throw (error); })
        // } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
    // }).catch(function (error) {
    //     log_event('WARNING', error, functionName);
    //     throw (error);
    // })
}

function update_permission_admins_LOOP(obj, edit_by, ownerCheck) {
    let functionName = 'update_permission_admins_LOOP';
    return new Promise(function (resolve, reject) {
        try {
            //console.log('-=-=-=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-')
            //console.log(obj)
            //console.log(obj['profile_id'])
            get_users_admin_permission_by_profile_id_MSSQL(obj['profile_id']).then(confirm => {
                let admin_owner = confirm[0]['admin_owner'];
                if (ownerCheck === true) {
                    debugLog('ownerCheck === true')
                    admin_owner = obj['admin_owner'];
                } else {
                    debugLog('ownerCheck === false')
                    admin_owner = confirm[0]['admin_owner'];
                }

                update_profile_table_MSSQL(obj['profile_id'], obj['admin_grader'], admin_owner, obj['admin_permissions'], obj['admin_editor']).then(result => {
                    let event = `Updating admin permissions for profile_id : '${obj['profile_id']}'
                        , admin_grader : '${obj['admin_grader']}'
                        , admin_owner : '${admin_owner}'
                        , admin_permissions : '${obj['admin_permissions']}'
                        , admin_editor : ${obj['admin_editor']}
                        , authorized by profile_id : ${edit_by}`
                    log_event('INFO', event, functionName);

                    resolve('complete')
                    return 'complete';
                }).catch(function (error) { reject(error); throw (error); })
            }).catch(function (error) { reject(error); throw (error); })
        } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// export / public funtions //
function update_permission_quiz_main(object, edit_by) {
    let functionName = 'update_permission_quiz_main';
    //console.log(object)
    let objKeys = Object.keys(object)
    try {
        let result_arr = []
        for (let a in Object.keys(objKeys)) {
            let i = objKeys[a]
            update_permission_quiz_LOOP(object[i], edit_by)
        }
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function update_permission_admins_main(object, edit_by) {
    let functionName = 'update_permission_admins_main';
    get_users_admin_permission_by_profile_id_MSSQL(edit_by).then(result => {
        //console.log(result[0]['admin_owner'])
        let objKeys = Object.keys(object)
        try {
            for (let a in Object.keys(objKeys)) {
                let i = objKeys[a]
                update_permission_admins_LOOP(object[i], edit_by, result[0]['admin_owner']).then(result => {
                    //debugLog(result);
                }).catch(function (error) {
                    log_event('WARNING', error, functionName);
                    reject(error);
                    throw (error);
                })
            }
        } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

// admin_permission
function get_all_users_admin_permission_edit(try_num) {
    let functionName = 'get_all_users_admin_permission_edit';
    let null_counter = 0;
    return new Promise(function (resolve, reject) {
        try {
            get_all_users_admin_permission_edit_MSSQL().then(result => {
                resolve(result);
                return result;
                // for (let el in result) {
                //     if (result[el]['team'] === null || result[el]['team'] === 'null') {
                //         null_counter++;
                //     }
                // }
                // if (null_counter > 10) {
                //     console.log(functionName, 'detected errors. Amount of nulls =>', null_counter, '. RESTARTING!')
                //     log_event('WARNING', `null_counter>10 , attempt# ${try_num}`, functionName)
                //         // resolve('RESTARTING');
                //     return get_all_users_admin_permission_edit(try_num + 1)
                // } else {
                //     console.log(functionName, "has no errors. Amount of nulls =>", null_counter)
                //     resolve(result);
                //     return result;
                // }
            }).catch(function (error) { reject(error); throw error; })
        } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};

// quiz_permissions
function get_all_users_quiz_permission_edit(try_num) {
    let functionName = 'get_all_users_quiz_permission_edit';
    let null_counter = 0;
    return new Promise(function (resolve, reject) {
        try {
            get_all_users_quiz_permission_MSSQL().then(result => {
                resolve(result);
                return result;
                // for (let el in result) {
                //     if (result[el]['team'] === null || result[el]['team'] === 'null') {
                //         null_counter++;
                //     }
                // }
                // if (null_counter > 10) {
                //     console.log(functionName, 'detected errors. Amount of nulls =>', null_counter, '. RESTARTING!')
                //     log_event('WARNING', `null_counter>10 , attempt# ${try_num}`, functionName)
                //         // resolve('RESTARTING');
                //     return get_all_users_quiz_permission_edit(try_num + 1)
                // } else {
                //     console.log(functionName, "has no errors. Amount of nulls =>", null_counter)
                //     resolve(result);
                //     return result;
                // }
            }).catch(function (error) { reject(error); throw error; })
        } catch (tryError) { log_event('ERROR', tryError, functionName); reject(tryError); throw tryError; }
    }).catch(function (error) {
        log_event('WARNING', error, functionName);
        throw error;
    })
};


// testing
/*
let objQuiz = { '14':
{ profile_id: 14,
  email: 'dhartt@bpcs.com',
  reference_table: 'KA_employee',
  profile_soft_delete: false,
  admin_grader: true,
  admin_owner: true,
  admin_permissions: true,
  admin_editor: true,
  wfm_id: 'BP1156',
  first_name: 'David',
  last_name: 'Hartt',
  title: 'BI Analyst',
  team: 'BI',
  hire_date: null,
  separation_date: null,
  specialization: null,
  specialization2: null,
  specialization3: null,
  profile_permission_id: 740,
  soft_delete: false,
  topic_id: { '0': 2 },
  access: true,
  fast_track: false,
  permission_soft_delete: true,
  grant_method: 'Admin' } }
//update_permission_quiz_main(objQuiz, 'localTest')
*/
/*
debugLog('testing')
let objPerm = { '161':
{ profile_id: 161,
  email: 'rmayen@bpcs.com',
  reference_table: 'KA_employee',
  profile_soft_delete: false,
  admin_grader: true,
  admin_owner: true,
  admin_permissions: true,
  admin_editor: true,
  wfm_id: 'BP1128',
  first_name: 'Rodrigo',
  last_name: 'Mayen',
  title: 'PM',
  team: 'BI',
  hire_date: null,
  separation_date: null,
  specialization: null,
  specialization2: null,
  specialization3: null,
  topic_id: {} } }
update_permission_admins_main(objPerm, '161')
let objPerm2 = { '14':
{ profile_id: 14,
  email: 'rmayen@bpcs.com',
  reference_table: 'KA_employee',
  profile_soft_delete: false,
  admin_grader: true,
  admin_owner: true,
  admin_permissions: true,
  admin_editor: true,
  wfm_id: 'BP1128',
  first_name: 'Rodrigo',
  last_name: 'Mayen',
  title: 'PM',
  team: 'BI',
  hire_date: null,
  separation_date: null,
  specialization: null,
  specialization2: null,
  specialization3: null,
  topic_id: {} } }
  update_permission_admins_main(objPerm2, '161')
  debugLog('testing')
*/

module.exports = {
    update_permission_quiz_main: update_permission_quiz_main,
    update_permission_admins_main: update_permission_admins_main,
    get_all_users_admin_permission_edit: get_all_users_admin_permission_edit,
    get_all_users_quiz_permission_edit: get_all_users_quiz_permission_edit
};

/*
// edit permissions
const { update_permission_quiz_main, update_permission_admins_main, get_all_users_admin_permission_edit, get_all_users_quiz_permission_edit } = require('./edit_permission.js');
*/