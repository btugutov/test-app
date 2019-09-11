const Promise = require('promise');
const os = require('os');
const classModule = require('./classes.js');
const { debugLog, getLineNumber, log_event, dbQueryMethod, log_event_detailed } = require('./classes.js');

function add_engagement_table_MSSQL(engagement_name) {
    let functionName = 'add_engagement_table_MSSQL';
    let target_info = `function: ${functionName}; engagement_name: ${engagement_name}`;
    return new Promise(function(resolve, reject) {
        //let insert = `INSERT INTO KA_engagement (engagement_name) VALUES ('${engagement_name}')`
        let insert = ``
        let select = `SELECT * FROM KA_engagement WHERE engagement_name = '${engagement_name}'`
        let query = `${insert} ${select}`
        dbQueryMethod.queryRaw(query).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}

function create_new_engagement_row_MSSQL(engagement) {
    let functionName = 'create_new_engagement_row_MSSQL';
    let target_info = `function: ${functionName}; engagement: ${JSON.stringify(engagement)}`;
    return new Promise(function(resolve, reject) {
        //let insert = `INSERT INTO KA_engagement (engagement_name) VALUES ('${engagement_name}')`
        let insert = `INSERT INTO KA_engagement 
        (engagement_name, soft_delete, background, main_text, company_name, company_address, company_phone_number) 
        VALUES ('${engagement['engagement_name']}', 0, '${engagement['background']}', '${engagement['main_text']}', '${engagement['company_name']}', '${engagement['company_address']}', '${engagement['company_phone_number']}')
        SELECT SCOPE_IDENTITY()`
        console.log(insert)
        dbQueryMethod.queryRaw(insert).then(result => {
            // console.log("create_new_engagement_row_MSSQL: result => ", result)
            resolve(result.recordset)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}

function edit_engagement_table_MSSQL(object) {
    let functionName = 'edit_engagement_table_MSSQL';
    let target_info = `function: ${functionName}; object: ${JSON.stringify(object)}`;
    if(object.soft_delete){
        object.soft_delete = 1;
    }else{
        object.soft_delete = 0;
    }
    return new Promise(function(resolve, reject) {
        let insert = `UPDATE KA_engagement SET engagement_name = '${object['engagement_name']}', soft_delete = ${object['soft_delete']}, background = '${object['background']}', main_text = '${object['main_text']}', company_name = '${object['company_name']}', company_address = '${object['company_address']}', company_phone_number = '${object['company_phone_number']}'  WHERE engagement_id = '${object['engagement_id']}'`
        // let query = `${insert} ${select}`
        dbQueryMethod.queryRaw(insert).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}
function get_all_engagemets() {
    let functionName = 'add_engagement_table_MSSQL';
    console.log("get_all_engagemets: start time", new Date().getMinutes(), new Date().getSeconds())
    return new Promise(function (resolve, reject) {
        let start = new Date();
        let query = `SELECT
        eng.engagement_id,
        eng.engagement_name,
        eng.soft_delete,
        eng.background,
        eng.main_text,
        eng.company_name,
        eng.company_address,
        eng.company_phone_number       

      FROM [dbo].[KA_engagement] as eng `;
        dbQueryMethod.query(query).then(result => {
            let end = new Date();
            console.log("get_all_engagemets: result time", new Date().getMinutes(), new Date().getSeconds())
            resolve(result)
            return result;
        }).catch(function (error) { 
            console.log("ERROR =>", error)
            reject(error); throw (error); })
    }).catch(function (error) {
        console.log("ERROR =>", error)
        log_event('ERROR', error, functionName);
        throw (error);
    })
};

function get_engagement_agents_by_eng_id(eng_id){
    let functionName = 'get_engagement_agents_by_eng_id';
    let target_info = `function: ${functionName}; engagement_id: ${eng_id}`;
    return new Promise(function(resolve, reject) {
        let select = `SELECT 
        topic.topic,
        topic.topic_id,
        topic.category,
        topic.soft_delete as topic_soft_delete,
        perm.profile_id,
        profile.email,
        employee.first_name,
        employee.last_name
        FROM [KA_test_topic] as topic 
        LEFT JOIN [KA_profile_permissions] as perm ON topic.topic_id = perm.topic_id
        LEFT JOIN [KA_profile] as profile ON profile.profile_id = perm.profile_id
        LEFT JOIN [KA_employee] as employee ON employee.email = profile.email        
        WHERE engagement_id = '${eng_id}' AND employee.first_name IS NOT NULL`
        dbQueryMethod.query(select).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}

function get_contacts_by_eng_id(eng_id){
    let functionName = 'get_contacts_by_eng_id';
    let target_info = `function: ${functionName}; engagement_id: ${eng_id}`;
    return new Promise(function(resolve, reject) {
        let select = `SELECT * FROM KA_engagement_contact WHERE engagement_id = '${eng_id}'`
        dbQueryMethod.query(select).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}



function edit_engagement_contact_by_id(object) {
    let functionName = 'edit_engagement_contact_by_id';
    let target_info = `function: ${functionName}; object: ${JSON.stringify(object)}`;
    if(object.soft_delete){
        object.soft_delete = 1;
    }else{
        object.soft_delete = 0;
    }
    return new Promise(function(resolve, reject) {
        let insert = `UPDATE KA_engagement_contact SET full_name = '${object['full_name']}', email = '${object['email']}'  WHERE contact_id = '${object['contact_id']}'`
        // let query = `${insert} ${select}`
        dbQueryMethod.queryRaw(insert).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}
function delete_engagement_contact_by_id(object) {
    let functionName = 'delete_engagement_contact_by_id';
    let target_info = `function: ${functionName}; object: ${JSON.stringify(object)}`;
    if(object.soft_delete){
        object.soft_delete = 1;
    }else{
        object.soft_delete = 0;
    }
    return new Promise(function(resolve, reject) {
        let insert = `DELETE FROM KA_engagement_contact WHERE contact_id = '${object['contact_id']}'`
        // let query = `${insert} ${select}`
        dbQueryMethod.queryRaw(insert).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}
function create_new_engagement_contact(contact) {
    let functionName = 'create_new_engagement_contact';
    let target_info = `function: ${functionName}; engagement: ${JSON.stringify(contact)}`;
    return new Promise(function(resolve, reject) {
        let insert = `INSERT INTO KA_engagement_contact 
        (email, full_name, engagement_id) 
        VALUES ('${contact['email']}', '${contact['full_name']}', '${contact['engagement_id']}')`
        dbQueryMethod.queryRaw(insert).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}

function engagement_contact_main_loop(list){ // list => contact list
    return new Promise(function(resolve, reject) {
        let counter = 0;
        for(let el in list){
            if(list[el]['status'] == 'new' && !list[el]['soft_delete']){
                console.log("New contact")
                create_new_engagement_contact(list[el]).then(res => {
                    counter++;
                    if(counter == list.length){
                        resolve(true)
                        return true;
                    }
                })
            }else if(list[el]['status'] != 'new' && list[el]['soft_delete']){
                console.log("delete contact")
                delete_engagement_contact_by_id(list[el]).then(res => {
                    counter++;
                    if(counter == list.length){
                        resolve(true)
                        return true;
                    }
                })
            }else if(list[el]['status'] != 'new' && !list[el]['soft_delete']){
                console.log("edit contact")
                edit_engagement_contact_by_id(list[el]).then(res => {
                    counter++;
                    if(counter == list.length){
                        resolve(true)
                        return true;
                    }
                })
            }
        }
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
    
}
// edit_engagement_contact_by_id
// delete_engagement_contact_by_id
// create_new_engagement_contact
function get_engagement_table_MSSQL(engagement_id) {
    let functionName = 'get_engagement_table_MSSQL';
    let target_info = `function: ${functionName}; engagement_id: ${engagement_id}`;
    return new Promise(function(resolve, reject) {
        let select = `SELECT * FROM KA_engagement WHERE engagement_id = '${engagement_id}'`
        dbQueryMethod.query(select).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('ERROR', error, target_info);
        throw (error);
    })
}


//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function update_engagement_main_LOOP(object, indexKey, edit_by) {
    // update enagement loop
    // This is where the each part of
    let functionName = 'update_topic_main_LOOP';
    let details = {
        object: object,
        indexKey: indexKey,
        edit_by: edit_by
    }
    let target_info = `function: ${functionName}; object: ${JSON.stringify(object)}`;
    return new Promise(function(resolve, reject) {
        try {
            console.log("ENGAGEMENT ID =>",object['engagement_id'])
            if(!object['engagement_id']) {
                console.log('!object.engagement_id');
                resolve('!object.engagement_id')
                return '!object.engagement_id'
            } else if (typeof(object['engagement_id']) == 'string' && object['engagement_id'].includes('added') ) {
                // commenting out for testing reasons

                // front end might pass an empty object. Filter that out.
                console.log("New engagement!")
                if (object['engagement_name'] == '') {
                    console.log('object.engagement_name == undefined')
                    resolve('COMPLETE')
                    return 'COMPLETE'
                }
                else {
                    console.log("NEW ENGAGEMENT")
                    console.log(object)
                    try {
                        let resolve2 = resolve;
                        create_new_engagement_row_MSSQL(object).then(results => {
                            if (!object.contacts || object.contacts.length < 1) {
                                resolve2('Update COMPLETE')
                                return 'Update COMPLETE'
                            }else{  
                                // console.log("NEW ID =>",results[0][''])
                                for(let el in object.contacts){
                                    object.contacts[el]['engagement_id'] = results[0]['']
                                }
                                engagement_contact_main_loop(object.contacts).then(resContacts => {
                                    if(resContacts){
                                        resolve2('engagement_contact_main_loop Update COMPLETE')
                                        return 'Update COMPLETE'
                                    }
                                })
                            }
                        }).catch(function(error) {
                            //debugLog('error');
                            log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details))
                            reject(error);
                            throw (error);
                        })
                    } catch (tryError) {
                        // log_event('ERROR', tryError, target_info);
                        log_event_detailed("ERROR", tryError, functionName, edit_by, JSON.stringify(details))
                        reject(tryError);
                        throw (tryError);
                    }
                }
            } else {
                console.log("ENGAGEMENT EXISTS", object['engagement_id'])
                try{
                    edit_engagement_table_MSSQL(object).then(resultEdit => {
                        console.log('edit_engagement_table_MSSQL COMPLETE')
                        console.log("It's time to create new contacts! for eng", object['engagement_id'], object.contacts.length)
                        if (!object.contacts || object.contacts.length < 1) {
                            resolve('Update COMPLETE')
                            return 'Update COMPLETE'
                        }else{  
                            engagement_contact_main_loop(object.contacts).then(resContacts => {
                                resolve('Update COMPLETE')
                                return 'Update COMPLETE'
                            })
                        }
                    })
                } catch (tryError) {
                    log_event_detailed("ERROR", tryError, functionName, edit_by, JSON.stringify(details))
                    // log_event('ERROR', tryError, target_info);
                    reject(tryError);
                    //console.log(tryError)
                }
            }
        } catch (tryError) {
            log_event_detailed("ERROR", tryError, functionName, edit_by, JSON.stringify(details))
            // log_event('ERROR', tryError, target_info);
            reject(tryError);
            //console.log(tryError)
        }
    }).catch(function(error) {
        log_event_detailed("ERROR", tryError, functionName, edit_by, JSON.stringify(details))
        // log_event('ERROR', error, target_info);
        throw (error);
    })
}


function recusive_object_hanlder(object, current_index, edit_by) {
    let functionName = 'recusive_object_hanlder';
    let details = {
        object: object,
        current_index: current_index,
        edit_by: edit_by
    }
    let target_info = `function: ${functionName}; object: ${JSON.stringify(object)}; `;
    if (current_index == undefined) { current_index = 0 }
    return new Promise(function(resolve, reject) {
        let counter = 0;
        for (let el in object) {
            update_engagement_main_LOOP(object[el], el, edit_by).then(result => {
                if (result) {
                    counter++;
                    if (counter == Object.keys(object).length) {
                        resolve('Complete')
                    }
                }
            })
        }
        // let max = Object.keys(object).length;
        //console.log(`max :: ${current_index} / ${max}`)
        // if (max <= current_index) {
        //     //console.log('complete :: max <= current_index')
        //     resolve('complete')
        //     return 'complete'
        // } else {
        //     let objKeys = Object.keys(object)
        //     let indexKey = objKeys[current_index]
        //     if (typeof object[indexKey] === 'object' && indexKey != 'logEvent') {
                
        //         // update_engagement_main_LOOP(object[indexKey], indexKey, edit_by).then(result => {
        //         //     current_index += 1;
        //         //     recusive_object_hanlder(object, current_index, edit_by).then(revolt => {
        //         //         //console.log('testing1')
        //         //         //console.log(revolt)
        //         //         resolve('Complete')
        //         //     }).catch(function(error) {reject(error);})
        //         // }).catch(function(error) {
        //         //     console.log('catch for recusive ', error)
        //         //     log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details))
        //         //     reject(error);
        //         //     // throw (error);
        //         // })
        //     } else {
        //         current_index += 1;
        //         recusive_object_hanlder(object, current_index, edit_by).then(revolt => {
        //             //console.log('testing2')
        //             //console.log(revolt)
        //             resolve('Complete')
        //         }).catch(function(error) {log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details));reject(error);})
        //     }
        // }
    }).catch(function(error) {
        // log_event('ERROR', error, functionName);
        log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details))
        reject(error);
    })
}

function update_engagement_main(object, edit_by) {
    let functionName = 'update_engagement_main';
    let details = {
        object: object,
        edit_by: edit_by
    }
    debugLog('======= - update_engagement_main - =======')
    // console.log(object)
    debugLog('======= - update_engagement_main - =======')
    return new Promise(function(resolve, reject) {
        try {
            recusive_object_hanlder(object, 0, edit_by).then(wait2 => {
                console.log(wait2)
                console.log('Update Complete')
                resolve(wait2);
                return wait2
            }).catch(function(error) {
                log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details))
                // log_event('ERROR', error, functionName);
                reject(error);
                throw (error);
            })
        } catch (tryError) {
            console.log('catch main')
            log_event_detailed("ERROR", tryError, functionName, edit_by, JSON.stringify(details))
            reject(tryError);
            throw (tryError);
            // log_event('ERROR', tryError, functionName);
        }
    }).catch(function(error) {
        log_event_detailed("ERROR", error, functionName, edit_by, JSON.stringify(details))
        reject(tryError);
        throw (tryError);
    })
}

/*
EXPORTS 
*/
/*
let a = { 
    1 : { engagement_id: 1, engagement_name: "VE", soft_delete: false },
    Added1: { engagement_id: 'Added1', engagement_name: 'test2', soft_delete: 'false' } 
}

update_engagement_main(a, 'localhost').then(result => {
    console.log('COMPELTELY COMPLETE')
})
*/


module.exports = {
    update_engagement_main: update_engagement_main,
    get_all_engagemets: get_all_engagemets,
    get_engagement_agents_by_eng_id: get_engagement_agents_by_eng_id,
    get_contacts_by_eng_id: get_contacts_by_eng_id
};

/*
// edit_engagement.js
const { update_engagement_main } = require('../backend/edit_engagement.js');
*/