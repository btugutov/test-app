const Promise = require('promise');
const os = require('os');
const classModule = require('./classes.js');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');

function add_engagement_table_MSSQL(engagement_name) {
    let functionName = 'add_engagement_table_MSSQL';
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
        log_event('WARNING', error, functionName);
        throw (error);
    })
}


function edit_engagement_table_MSSQL(engagement_id, engagement_name, soft_delete) {
    let functionName = 'edit_engagement_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let insert = `UPDATE KA_engagement SET engagement_name = '${engagement_name}', soft_delete = '${soft_delete}' WHERE engagement_id = '${engagement_id}'`
        let select = `SELECT * FROM KA_engagement WHERE engagement_id = '${engagement_id}'`
        let query = `${insert} ${select}`
        dbQueryMethod.queryRaw(query).then(result => {
            //console.log(result.recordset)
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function get_engagement_table_MSSQL(engagement_id) {
    let functionName = 'get_engagement_table_MSSQL';
    return new Promise(function(resolve, reject) {
        let select = `SELECT * FROM KA_engagement WHERE engagement_id = '${engagement_id}'`
        dbQueryMethod.query(select).then(result => {
            resolve(result)
            return result;
        }).catch(function(error) { reject(error); throw (error); })
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
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
    return new Promise(function(resolve, reject) {
        try {
            //console.log(indexKey)
            // comment block this out when not testing... or delete... i'm not your dad
            /*
            console.log('-*-*--***--**-*-*--*-*-*-*-*-*-**-*-*-*--**-*-*-*-*-*-*-*-*--**-')
            console.log(object)
            try{
                console.log('===== TRY =====')

                console.log('===== engagement_id =====')
                console.log(object.engagement_id)
                console.log(object['engagement_id'])
                console.log('===== engagement_name =====')
                console.log(object.engagement_name)
                console.log(object['engagement_name'])
                console.log('===== soft_delete: =====')
                console.log(object.soft_delete)
                console.log(object['soft_delete:'])

                console.log('===== TRY =====')
            } catch(tryError){console.log(tryError)}
            console.log('-*-*--***--**-*-*--*-*-*-*-*-*-**-*-*-*--**-*-*-*-*-*-*-*-*--**-')
            */
            if(!object['engagement_id']) {
                console.log('!object.engagement_id');
                resolve('!object.engagement_id')
                return '!object.engagement_id'
            } else if ( object['engagement_id'].includes('New') ) {
                // commenting out for testing reasons

                // front end might pass an empty object. Filter that out.
                console.log(object['engagement_name'])
                if (object['engagement_name'] == '') {
                    console.log('object.engagement_name == undefined')
                    resolve('COMPLETE')
                    return 'COMPLETE'
                }
                else {
                    console.log('!! object.engagement_name == undefined !!')
                    try {
                        add_engagement_table_MSSQL(object['engagement_name']).then(results => {
                            resolve('COMPLETE')
                            return 'COMPLETE'
                        }).catch(function(error) {
                            //debugLog('error');
                            reject(error);
                            throw (error);
                        })
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        reject(tryError);
                        throw (tryError);
                    }
                }
            } else {
                try{
                    get_engagement_table_MSSQL(object['engagement_id']).then(results => {
                        // if record exists, check status and update as needed
                        /*
                        console.log('---------------===---------')
                        console.log(results)
                        console.log(results[0]['engagement_id'])
                        */
                        if (!results.length) {
                            console.log('!results.length')
                            resolve('COMPLETE')
                            return 'COMPLETE'
                        } else {
                            /*
                            
                            // uncomment here to override the need update check

                            edit_engagement_table_MSSQL(object['engagement_id'], object['engagement_name'], object['soft_delete']).then(resultEdit => {
                                console.log(resultEdit)
                                console.log('edit_engagement_table_MSSQL COMPLETE')
                                resolve('Update COMPLETE')
                                return 'Update COMPLETE'
                            })
                            */
                            let delta = false;
                            if (results[0]['soft_delete'] != object['soft_delete']){ delta = true; }
                            if (results[0]['engagement_name'] != object['engagement_name']){ delta = true; }

                            if (delta == true) {
                                //console.log(object['engagement_id'], object['engagement_name'], object['soft_delete'])
                                edit_engagement_table_MSSQL(object['engagement_id'], object['engagement_name'], object['soft_delete']).then(resultEdit => {
                                    console.log('edit_engagement_table_MSSQL COMPLETE')
                                    resolve('Update COMPLETE')
                                    return 'Update COMPLETE'
                                })
                            } else {
                                console.log('no update is needed')
                                resolve('COMPLETE')
                                return 'COMPLETE'
                            }
                            
                        }
                    }).catch(function(error) {
                        //debugLog('error');
                        reject(error);
                        throw (error);
                    })
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    reject(tryError);
                    //console.log(tryError)
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


function recusive_object_hanlder(object, current_index, edit_by) {
    let functionName = 'recusive_object_hanlder';
    if (current_index == undefined) { current_index = 0 }
    return new Promise(function(resolve, reject) {
        let max = Object.keys(object).length;
        //console.log(`max :: ${current_index} / ${max}`)
        if (max <= current_index) {
            //console.log('complete :: max <= current_index')
            resolve('complete')
            return 'complete'
        } else {
            let objKeys = Object.keys(object)
            let indexKey = objKeys[current_index]
            if (typeof object[indexKey] === 'object' && indexKey != 'logEvent') {
                console.log(indexKey)
                update_engagement_main_LOOP(object[indexKey], indexKey, edit_by).then(result => {
                    /*
                    console.log('==--==')
                    console.log(result)
                    console.log('==--==')
                    */
                    current_index += 1;
                    recusive_object_hanlder(object, current_index, edit_by).then(revolt => {
                        //console.log('testing1')
                        //console.log(revolt)
                        resolve('Complete')
                    }).catch(function(error) {reject(error);})
                }).catch(function(error) {
                    console.log('catch for recusive ', error)
                    reject(error);
                    throw (error);
                })
            } else {
                current_index += 1;
                recusive_object_hanlder(object, current_index, edit_by).then(revolt => {
                    //console.log('testing2')
                    //console.log(revolt)
                    resolve('Complete')
                }).catch(function(error) {reject(error);})
            }
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
    })
}

function update_engagement_main(object, edit_by) {
    let functionName = 'update_engagement_main';
    debugLog('======= - update_engagement_main - =======')
    console.log(object)
    debugLog('======= - update_engagement_main - =======')
    return new Promise(function(resolve, reject) {
        try {
            recusive_object_hanlder(object, 0, edit_by).then(wait2 => {
                console.log(wait2)
                console.log('Update Complete')
                resolve(`Update Complete`);
                return `Update Complete`
            }).catch(function(error) {
                log_event('ERROR', error, functionName);
                reject('Update Failed');
                throw ('Update Failed');
            })
        } catch (tryError) {
            console.log('catch main')
            log_event('ERROR', tryError, functionName);
        }
    }).catch(function(error) {
        log_event('WARNING', error, functionName);
        throw (error);
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
};

/*
// edit_engagement.js
const { update_engagement_main } = require('../backend/edit_engagement.js');
*/