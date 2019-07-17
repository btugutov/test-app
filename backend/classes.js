const sql = require('mssql');
const os = require('os');
const path = require('path');

// I have to have the log function HERE because i can't call the log class until i write it ^^^
//const hostname = os.hostname();
//console.log(os.hostname());

// this really should be in a key vault or something
const config = {
    user: 'WebApp_B',
    password: 'Valve$Web$App$B!',
    server: 'valvegeneral01.database.windows.net',
    database: 'BPWebAppDB',
    options: {
        encrypt: true
    }
};

// this really should be in a key vault or something
// CONFIG

// this might not work for MAC,
// This is intended to be used to replace as 
function debugLog(consoleString) {
    // a log option to display the line number where it was called
    // only output if a dev on dev machine, not in production!!!
    if (devCheck.trusted == true) {
        const orig = Error.prepareStackTrace;
        Error.prepareStackTrace = (_, stack) => stack;
        const err = new Error();
        Error.captureStackTrace(err, arguments.callee);
        const callee = err.stack[0];
        Error.prepareStackTrace = orig;
        process.stdout.write(`${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: ${consoleString} \n`);
        //process.stdout.write(`${line}: ${consoleString}\n`);
    }
}

// This is intended to use for logs to get the line number of the reporting error.
// This might now be working for MAC
function getLineNumber() {
    // gets the line number 
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const callee = err.stack[0];
    Error.prepareStackTrace = orig;
    //return process.stdout.write(`${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: \n`);
    let giveBack = path.relative(process.cwd(), callee.getFileName()) + ":" + callee.getLineNumber();
    return giveBack
}

class checkTrust {
    // This class is to check general trusted state.
    // Origionally designed to check if you are testing or in azure
    // Needed to see if ANNONYMOUS users are dev/test or people who are simply not logged in.
    // Local machines do not have access to AAD at the moment. 
    /* 
    this.trustList  >>> List in String form that contains all the trusted annonymous host names
    this.hostname  >>> name passed in that should be the hostname running the service
    this.trusted  >>> boolean if the host is trusted or not
    */
    constructor(host) {
        this.trustList = ["BPLT-2404", "BPLT-1794"];
        this.hostname = host;
        this.trusted = this.trustList.includes(this.hostname); // returns boolean
    }
}

const devCheck = new checkTrust(os.hostname());
// CONFIG

let connection;
class DatabaseConnection {
    /*
    Base connection class that simply handles the connection to Azure MS Sql 
    */
    constructor() {
        if (typeof connection === 'undefined') {
            connection = sql.connect(config);
            this.connection = connection
        }
        else {
            this.connection = connection
        }
        this.status = "Connected";
        this.type = "Basic Connection"

        this.pool = new sql.ConnectionPool(config);
        this.pool.connect(err => {
            if (err) {
                console.log(err);
            }
            else {
                this.request = new sql.Request(this.pool);
                this.ps = new sql.PreparedStatement(this.pool);
                //console.log('created pools');
            }
        })
    }
}

class DatabaseQuery extends DatabaseConnection {
    queryRaw(queryStatement) {
        // this makes the base query for the module 'mssql' available if you want to use this instead. Be aware the table itself will be [result.recordset]
        // this method if available here if you want have more control over the query/result
        return this.connection.then(pool => {
            return pool.request().query(queryStatement)
        }).then(result => {
            return result;
        }).catch(function (error) {
            throw `ERROR: ${error} : QUERY HERE : ${queryStatement}`
        });
    };

    query(queryStatement) {
        // Read all rows from table
        // construct JS friendly array of arrays
        // row[0] >> one array that is a single row returned from sql.
        // row[0]['id'] >> returns that row value of [column 'id']
        return this.connection.then(pool => {
            return pool.request().query(queryStatement)
        }).then(result => {
            const rows = result.recordset;
            if (!rows.length) {
                return [];
            }
            return rows;
        }).catch(function (error) {
            throw `ERROR: ${error} : QUERY HERE : ${queryStatement}`
        });
    };

    /*
    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;
    */
    update(table, setStatement, whereStatement) {
        console.log('==========*************==========')
        console.log('-- OBSELETE WAY OF DOING THIS. --')
        console.log('-- PLEASE USE .queryRaw NOW    --')
        console.log('-- QUERY USING SQL STATEMENT   --')
        console.log('==========*************==========')
        /*
        example
        let table = 'table_name'
        let setStatement = 'SET column1 = value1, column2 = value2'
        let whereStatement = 'WHERE condition'
        */
        let cursor = `UPDATE ${table}`;
        let dbUpdate = `${cursor} ${setStatement} ${whereStatement};`
        return this.connection.then(pool => {
            return pool.request()
                .query(dbUpdate)
        }).then(result => {
            return result;
        }).catch(function (error) {
            debugLog('ERROR: Cannot insert into table.');
            debugLog('----------------------------------');
            debugLog(cursor);
            debugLog(setStatement);
            debugLog(`${whereStatement}  ;`);
            debugLog('----------------------------------');
            debugLog(error);
            throw `ERROR: ${error} : QUERY HERE : ${dbUpdate}`
        });
    };
    // gives console.log of the above
    updateWhatIf(table, setStatement, whereStatement) {
        console.log('==========*************==========')
        console.log('-- OBSELETE WAY OF DOING THIS. --')
        console.log('-- PLEASE USE .queryRaw NOW    --')
        console.log('-- QUERY USING SQL STATEMENT   --')
        console.log('==========*************==========')
        let cursor = `UPDATE ${table}`;
        let dbUpdate = `${cursor} ${setStatement} ${whereStatement}`;
        debugLog(dbUpdate);
    };

    insert(table, columns, values) {
        console.log('==========*************==========')
        console.log('-- OBSELETE WAY OF DOING THIS. --')
        console.log('-- PLEASE USE .queryRaw NOW    --')
        console.log('-- QUERY USING SQL STATEMENT   --')
        console.log('==========*************==========')
        let cursor = `INSERT INTO ${table}`;
        let dbInsertAction = `${cursor} (${columns}) VALUES (${values});'`;
        return this.connection.then(pool => {
            return pool.request()
                .query(dbInsertAction)
        }).then(result => {
            return result;
        }).catch(function (error) {
            debugLog('ERROR: Cannot insert into table.');
            debugLog('----------------------------------');
            debugLog(cursor);
            debugLog(` (${columns})`);
            debugLog(` VALUES (${values});`);
            debugLog('----------------------------------');
            debugLog(error);
            throw `ERROR: ${error} : QUERY HERE : ${dbInsertAction}`
        });
    };

    //debugLog option
    // gives console.log of the above
    insertWhatIf(table, columns, values) {
        console.log('==========*************==========')
        console.log('-- OBSELETE WAY OF DOING THIS. --')
        console.log('-- PLEASE USE .queryRaw NOW    --')
        console.log('-- QUERY USING SQL STATEMENT   --')
        console.log('==========*************==========')
        let cursor = `INSERT INTO ${table}`;
        let dbInsertAction = `${cursor} (${columns}) VALUES (${values});'`;
        debugLog(dbInsertAction);
    };
};


class DatabaseLog extends DatabaseQuery {
    /* 
    Single purpose class to handle a rigid way to insert to a database. Useful for LOGS
    
    Supply the Table Name, Columns, and hostname. 
    
    The goal is to be able to call as close to a one liner for log writes as JS will allow.
    For now this takes a single string that requires you to match the values to the columns you gave it during instantations
    Example
    this.columns = "a","b","c","f"

    object.log("'one','two','three','cat'")

    If you want to extend the thought more, you will need to make a function that handles more for you.
    In this file, look for the log_event function
    */
    constructor(table, columns, host) {
        super(table, columns);
        this.table = table;
        this.columns = `${columns}, host`;
        this.host = host;
    }
    logWhatIf(values) {
        let valuesMod = `${values},'${this.host}'`;
        this.insertWhatIf(this.table, this.columns, valuesMod);
    }
    log(values) {
        let insert = `INSERT INTO ${this.table} 
        (${this.columns}) 
        VALUES (${values},'${this.host}');`
        this.queryRaw(insert);

        /*
        This method is being obseleted as it does not make sense to view the queries this way.

        let valuesMod = `${values},'${this.host}'`;
        this.insert(this.table, this.columns, valuesMod);
        */
    }
};

const logTable = "KA_log";
const logColumns = "log_level, log_event, webapp, user_id, line_number, event_time";
// THE log object here
const dbLogWrite = new DatabaseLog(logTable, logColumns, os.hostname());

function log_event(logLevel, event, functionName, event_time) {
    // private function to escape strings
    function mysql_real_escape_string(str) {
        try {
            str = String(str)
            return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "'":
                        return "''";
                    case "\"":
                    case "\\":
                    case "%":
                        return "\\" + char; // prepends a backslash to backslash, percent,
                    // and double/single quotes
                }
            });
        }
        catch (error) {
            throw error;
        }
    }

    let stringEscaped
    // don't pass in an escaped string into the log function. You must either unescape it or give other information to help
    // the mysql_real_escape_string() function does not work with escaped strings. It does not like the unicode.    
    try {
        stringEscaped = mysql_real_escape_string(event);
    }
    catch (error) {
        stringEscaped = event;
        debugLog('ERROR! CANNOT escape event string!');
        console.log(error);
    }

    if (event_time == undefined) {
        event_time = 'getdate()'
    } else {
        event_time = `'${event_time}'`
    }
    // this takes the incoming event and traces it back to where this function was called, then adds that line to the log table
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const callee = err.stack[0];
    Error.prepareStackTrace = orig;
    //return process.stdout.write(`${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: \n`);
    let line_number = path.relative(process.cwd(), callee.getFileName()) + ":" + callee.getLineNumber();

    let logValues = `'${logLevel}', '${stringEscaped}', 'Knowledge Assessment', '${functionName}', '${line_number}', ${event_time}`;
    dbLogWrite.log(logValues);
    console.log(`${line_number} : ${event}`); // use non escaped string here in for log output. Otherwise string looks strange and hard to debug.
};
function log_event_detailed(logLevel, event, functionName, user_id, details) {
    // private function to escape strings
    function mysql_real_escape_string(str) {
        try {
            str = String(str)
            return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
                switch (char) {
                    case "\0":
                        return "\\0";
                    case "\x08":
                        return "\\b";
                    case "\x09":
                        return "\\t";
                    case "\x1a":
                        return "\\z";
                    case "\n":
                        return "\\n";
                    case "\r":
                        return "\\r";
                    case "'":
                        return "''";
                    case "\"":
                    case "\\":
                    case "%":
                        return "\\" + char; // prepends a backslash to backslash, percent,
                    // and double/single quotes
                }
            });
        }
        catch (error) {
            throw error;
        }
    }

    let stringEscaped
    // don't pass in an escaped string into the log function. You must either unescape it or give other information to help
    // the mysql_real_escape_string() function does not work with escaped strings. It does not like the unicode.    
    try {
        stringEscaped = mysql_real_escape_string(event);
    }
    catch (error) {
        stringEscaped = event;
        debugLog('ERROR! CANNOT escape event string!');
        console.log(error);
    }



    // this takes the incoming event and traces it back to where this function was called, then adds that line to the log table
    const orig = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => stack;
    const err = new Error();
    Error.captureStackTrace(err, arguments.callee);
    const callee = err.stack[0];
    Error.prepareStackTrace = orig;
    //return process.stdout.write(`${path.relative(process.cwd(), callee.getFileName())}:${callee.getLineNumber()}: \n`);
    let line_number = path.relative(process.cwd(), callee.getFileName()) + ":" + callee.getLineNumber();
    if (user_id == null || !user_id) {
        if (details) {
            if (JSON.parse(details).email) {
                user_id = email;
            } else if (JSON.parse(details)['req.body'] && JSON.parse(details)['req.body']['email']) {
                user_id = JSON.parse(details)['req.body']['email'];
            }
        }
    }
    // let logValues = `'${logLevel}', '${stringEscaped}', 'Knowledge Assessment', '${functionName}', '${line_number}', getDate()`;
    // dbLogWrite.log(logValues);
    /*
    INSERT INTO KA_log
    (log_level, log_event, host, webapp, line_number, user_id, event_time, details) 
    VALUES ('TESTING', 'TESTING_EVENT', 'TESTING_FUNCTION', 'Skill Assessment', 'TESTING_LINE', 'TESTING_USER_ID', getdate(), 'TESTING_DETAILS')
    */
    let insert = `INSERT INTO KA_log
        (log_level, log_event, host, webapp, line_number, user_id, event_time, details) 
        VALUES ('${logLevel}', '${stringEscaped}', '${functionName}', 'Skill Assessment', '${line_number}', '${user_id}', getdate(), '${escape(details)}')`;
    dbQueryMethod.queryRaw(insert).then(result => {
        console.log("Error was successfully stored in the DB")
    }).catch(function (error) {
        console.log("ERROR =>", error);
    })
    console.log(`${line_number} : ${event}`); // use non escaped string here in for log output. Otherwise string looks strange and hard to debug.
};

function log_object_parser(object) {
    /*
    THIS IS USED TO PARSE THE FRONT END LOG BLOG OBJECT. 
    EACH ENTRY IN THE JSON OBJECT IS PASSED HERE AND PROCESSED.
    */
    try {
        for (let item in object) {
            log_event(object[item]['loglevel'], object[item]['event'], object[item]['function'], item)
        }
    }
    catch (error) {
        stringEscaped = event;
        debugLog('ERROR! CANNOT escape event string!');
        console.log(error);
    }
    finally { }
    return 'complete'
}
function logEvent(obj) {
    console.log("typeof obj.log_event =>", typeof (obj.log_event))
    console.log("escape(JSON.stringify(obj.log_event)) =>", escape(JSON.stringify(obj.log_event)))
    console.log("escape(obj.log_event) =>", escape(obj.log_event))
    console.log("JSON.stringify(obj.log_event) =>", JSON.stringify(obj.log_event))
    let insert = `INSERT INTO KA_log
        (log_level, log_event, host, webapp, line_number, user_id, event_time) 
        VALUES ('${obj.log_level}', '${escape(obj.log_event)}', '${escape(obj.host)}', 'Skill Assessment', '${escape(obj.line)}', '${obj.user_id}', getdate());`;
    dbQueryMethod.queryRaw(insert).then(result => {
        console.log(result)
    }).catch(function (error) {
        console.log("ERROR =>", error);
    })
}
function getEventLog() {
    return new Promise(function (resolve, reject) {
        let insert = `SELECT log_id, log_level FROM [dbo].[KA_log] WHERE user_id != 'stay_awake' Order By log_id DESC `;
        dbQueryMethod.query(insert).then(result => {
            console.log("we got result!", result.length)
            resolve(result);
            return result
        }).catch(function (error) {

            console.log("ERROR =>", error);
            reject(error)
        })
    }).catch(function (error) {
        log_event('WARNING', error, "getEventLog");
        reject(error)
        throw error;
    })
}
function getEventLogByID(log_id) {
    return new Promise(function (resolve, reject) {
        let insert = `SELECT * FROM [dbo].[KA_log] WHERE log_id = ${log_id}`;
        dbQueryMethod.query(insert).then(result => {
            resolve(result);
            return result
        }).catch(function (error) {
            console.log("ERROR =>", error);
            reject(error)
        })
    }).catch(function (error) {
        log_event('WARNING', error, "getEventLog");
        reject(error)
        throw error;
    })
}

// CREATED ONCE TO SAVE MEMORY.
// NO NEED TO INSTANTIATE MULTIPLE 
// TO TALK TO THE SAME DB
const dbQueryMethod = new DatabaseQuery();

module.exports = {
    DatabaseQuery: DatabaseQuery,
    DatabaseLog: DatabaseLog,
    debugLog: debugLog,
    getLineNumber: getLineNumber,
    log_event: log_event,
    checkTrust: checkTrust,
    dbQueryMethod: dbQueryMethod,
    log_object_parser: log_object_parser,
    logEvent: logEvent,
    getEventLog: getEventLog,
    getEventLogByID: getEventLogByID,
    log_event_detailed: log_event_detailed

};

/*
// classes
const { debugLog, getLineNumber, log_event, log_object_parser, dbQueryMethod } = require('../backend/classes.js');
*/