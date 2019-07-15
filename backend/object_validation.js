const Promise = require('promise');
const { debugLog, getLineNumber, log_event, dbQueryMethod } = require('./classes.js');


function format_quiz_table(object) {
    let functionName = 'format_quiz_table';
    try {
        let answersMap = {};

        // console.log('==============quiz.quizTable========================')
        for (let el in object) {
            // console.log('===========', el, '==========================');
            if (typeof(object[el]) === 'object') {
                if (!answersMap[object[el]['question_id']]) {
                    answersMap[object[el]['question_id']] = {};
                }
                answersMap[object[el]['question_id']][object[el]['answer_id']] = unescape(object[el]['answer_prompt'])
            }
        }
        // console.log(answersMap)
        // console.log('=================================================')
        //debugLog('here');
        //console.log(object)
        let keys = Object.keys(object);
        // console.log('========Object.keys(object)=========', keys)
        //console.log(keys)
        let answers = [];
        let correct = [];
        let questions = {};
        let dupes = {};
        let dupesCorrect = {};
        let dupesSoftDelete = {};
        let dupesAnswerSort = {};
        let dupesBucketList = {};
        //let dupesAnswerSort = {};
        let results = [];
        if (object !== 'null') {
            try {
                for (let i = 0; i < keys.length; i++) {
                    try {
                        questions['topic_soft_delete'] = object[0]['topic_soft_delete'];
                        questions['category'] = unescape(object[0]['category']);
                        questions['topic'] = unescape(object[0]['topic']);
                        questions['topic_id'] = object[0]['topic_id'];
                        questions['question_sort'] = object[0]['question_sort'];
                        // check to see if this object has engagement_id. if yes, add the engagement info to object
                        if (object[0]['engagement_id']) {
                            questions['engagement_id'] = object[0]['engagement_id'];
                            questions['engagement_name'] = object[0]['engagement_name'];
                        }
                    } catch (tryError) {
                        log_event('ERROR', tryError, functionName);
                        throw tryError;
                    }
                    //debugLog('here');
                    let next = i + 1;
                    //debugLog('here');
                    //next = next + 1;
                    //debugLog('here');
                    //console.log(object[keys[i]]['answer_id'])
                    // each answer_id is passed as array. 1 value at the beginning with 2 empty values following. Only select the [0] index for answer_id to prevent empty values
                    //let currentAns = object[keys[i]]['answer_id'][0];
                    let currentAns = object[keys[i]]['answer_id'];
                    //debugLog('here');
                    let currentPrompt = unescape(object[keys[i]]['answer_prompt']);
                    let currentCorrect = object[keys[i]]['correct'];
                    let currentDelete = object[keys[i]]['answer_soft_delete'];
                    let answer_sort = object[keys[i]]['answer_sort'];
                    let answer_bucket_id = object[keys[i]]['bucket_id'];

                    //debugLog('here');
                    //console.log(object[i]['question_id'])
                    let currentQuestion = object[i]['question_id'];
                    //let currentCorrect = object[i]['correct'];
                    //debugLog('here');
                    if (!questions.hasOwnProperty(currentQuestion)) {
                        try {
                            //debugLog('here');

                            // console.log(" currentAns =>", currentAns)
                            if(currentAns == null){
                                continue
                            }
                            dupes[currentAns] = currentPrompt;
                            //debugLog("here")
                            //console.log(currentCorrect)
                            dupesCorrect[currentAns] = currentCorrect;
                            dupesSoftDelete[currentAns] = currentDelete;
                            dupesAnswerSort[currentAns] = answer_sort;
                            dupesBucketList[currentAns] = answer_bucket_id;
                            if (next < keys.length) {
                                //debugLog('here');
                                // create an array of objects with answer_id as the key and answer_prompt as the value when there's a many to one relationship with question_id (Radial)
                                while (currentQuestion === object[next]['question_id']) {
                                    //currentAns = object[keys[next]]['answer_id'][0];
                                    currentAns = object[keys[next]]['answer_id'];
                                    dupes[currentAns] = unescape(object[next]['answer_prompt']);
                                    //console.log(object[next]['correct'])
                                    //debugLog('***********************')
                                    dupesCorrect[currentAns] = object[next]['correct'];
                                    dupesSoftDelete[currentAns] = object[next]['answer_soft_delete'];
                                    dupesAnswerSort[currentAns] = object[next]['answer_sort'];
                                    dupesBucketList[currentAns] = object[next]['bucket_id'];

                                    next++;
                                    // checks to see if we are looking at the last question
                                    if (next >= keys.length) {
                                        //debugLog('here');
                                        break;
                                    }
                                }
                            }
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                        //debugLog('here');
                        // this array of objects will be the first index following the question_id key
                        try {
                            answers.push(dupes);
                            // console.log(" currentAns =>", currentAns)
                            
                            // console.log('======================DUPES!!!============================', currentQuestion)
                            // console.log(dupes, 'compare to', )
                            // console.log(answersMap[currentQuestion])
                            //debugLog('here');
                            // after all answers that are associated with question_id are listed, include the following objects
                            //questions[currentQuestion] = answers;
                            questions[currentQuestion] = {};
                            questions[currentQuestion]['answer_prompt'] = answersMap[currentQuestion];
                            questions[currentQuestion]['answer_correct'] = dupesCorrect;
                            questions[currentQuestion]['answer_soft_delete'] = dupesSoftDelete;
                            questions[currentQuestion]['answer_sort'] = dupesAnswerSort;
                            questions[currentQuestion]['answer_bucket_id'] = dupesBucketList;
                            questions[currentQuestion]['question_type_id'] = object[i]['question_type_id'];
                            questions[currentQuestion]['question_type_description'] = unescape(object[i]['question_type_description']);
                            questions[currentQuestion]['display_type_id'] = object[i]['display_type_id'];
                            questions[currentQuestion]['display_type_description'] = unescape(object[i]['display_type_description']);
                            questions[currentQuestion]['quiz_id'] = object[i]['quiz_id'];
                            questions[currentQuestion]['quiz_name'] = unescape(object[i]['quiz_name']);
                            questions[currentQuestion]['prompt'] = unescape(object[i]['prompt']);
                            //questions[currentQuestion]['sort'] = object[i]['sort'];
                            questions[currentQuestion]['training_module'] = unescape(object[i]['training_module']);
                            questions[currentQuestion]['training_url'] = unescape(object[i]['training_url']);
                            questions[currentQuestion]['base64'] = object[i]['base64'];
                            questions[currentQuestion]['image'] = object[i]['image'];
                            questions[currentQuestion]['point_value'] = object[i]['point_value'];
                            questions[currentQuestion]['question_soft_delete'] = object[i]['question_soft_delete'];
                            questions[currentQuestion]['expected_response'] = unescape(object[i]['expected_response']);
                            questions[currentQuestion]['question_sort'] = unescape(object[i]['question_sort']);

                            // now set above. once we stop using at this location, delete these
                            questions[currentQuestion]['topic'] = unescape(object[i]['topic']);
                            questions[currentQuestion]['topic_id'] = object[i]['topic_id'];
                            questions[currentQuestion]['category'] = unescape(object[i]['category']);

                            //debugLog('here');
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                    }
                    dupes = {};
                    answers = [];
                    correct = [];
                    dupesCorrect = {};
                    dupesSoftDelete = {};
                }
            } catch (tryError) {
                log_event('ERROR', tryError, functionName);
                throw tryError;
            }
            results.push(questions);
            //console.log(results)
            // console.log(results[0][110])
            return results;
        } else {
            //debugLog("object empty");
            return [];
        }
    } catch (tryError) {
        log_event('ERROR', tryError, functionName);
        throw tryError;
    }
}
function format_quiz_table2(object){
    let functionName = 'format_quiz_table2'; 
    let res = {
    };
    for(let el in object){
        let target = object[el];
        if(!res['quiz_id']){
            res['quiz_id'] = object[el]['quiz_id'];
        }
        if(!res['topic_id']){
            res['topic_id'] = object[el]['topic_id'];
        }
        if(!res['quiz_name']){
            res['quiz_name'] = unescape(object[el]['quiz_name']);
        }
        if(!res['topic_soft_delete']){
            res['topic_soft_delete'] = object[el]['topic_soft_delete'];
        }
        if(!res['category']){
            res['category'] = unescape(object[el]['category']);
        }
        if(!res['engagement_id']){
            res['engagement_id'] = object[el]['engagement_id'];
        }
        if(!res['engagement_name']){
            res['engagement_name'] = unescape(object[el]['engagement_name']);
        }
        if(!res['question_sort']){
            res['question_sort'] = object[el]['question_sort'];
        }
        if(!res['time_limit']){
            res['time_limit'] = object[el]['time_limit'];
        }
        if(!res['soft_delete']){
            res['soft_delete'] = object[el]['soft_delete'];
            res['topic_soft_delete'] = object[el]['soft_delete'];
        }
        if(!res[target.question_id]){
            res[target.question_id] = {
                answer_bucket_id: {},
                answer_correct: {},
                answer_prompt: {},
                answer_soft_delete: {},
                answer_sort: {},
                base64: unescape(target.base64),
                category: unescape(target.category),
                display_type_description: unescape(target.display_type_description),
                display_type_id: target.display_type_id,
                expected_response: unescape(target.expected_response),
                image: target.image,
                point_value: target.point_value,
                prompt: unescape(target.prompt),
                question_soft_delete: target.question_soft_delete,
                question_sort: target.question_sort,
                question_type_description: unescape(target.question_type_description),
                question_type_id: target.question_type_id,
                quiz_id: target.quiz_id,
                quiz_name: unescape(target.quiz_name),
                topic:  unescape(target.topic),
                topic_id: target.topic_id,
                training_module: unescape(target.training_module),
                training_url: unescape(target.training_url),
            }
        }
        if( target.answer_id){
            res[target.question_id]['answer_bucket_id'][target.answer_id] = target.bucket_id;
            res[target.question_id]['answer_correct'][target.answer_id] = target.correct;
            res[target.question_id]['answer_prompt'][target.answer_id] = unescape(target.answer_prompt);
            res[target.question_id]['answer_soft_delete'][target.answer_id] = target.answer_soft_delete;
            res[target.question_id]['answer_sort'][target.answer_id] = target.answer_sort;
        }

    }
    return res
}

function format_quiz_table_orderby_question_sort(object) { // return sorted array
    let functionName = 'format_quiz_table_orderby_question_sort'; 
    let res = {};
    let result = [];
    let quiz_params = {};
    for(let el in object){
        let target = object[el];
        if(!quiz_params['quiz_id']){
            quiz_params['quiz_id'] = object[el]['quiz_id']
        }
        if(!quiz_params['topic_id']){
            quiz_params['topic_id'] = object[el]['topic_id']
        }
        if(!quiz_params['quiz_name']){
            quiz_params['quiz_name'] = unescape(object[el]['quiz_name'])
        }
        if(!quiz_params['topic_soft_delete']){
            quiz_params['topic_soft_delete'] = object[el]['topic_soft_delete']
        }
        if(!quiz_params['category']){
            quiz_params['category'] = unescape(object[el]['category'])
        }
        if(!quiz_params['engagement_id']){
            quiz_params['engagement_id'] = object[el]['engagement_id']
        }
        if(!quiz_params['engagement_name']){
            quiz_params['engagement_name'] = unescape(object[el]['engagement_name'])
        }
        if(!quiz_params['question_sort']){
            quiz_params['question_sort'] = object[el]['question_sort']
        }
        if(!quiz_params['time_limit']){
            quiz_params['time_limit'] = object[el]['time_limit']
        }
        let container_id = object[el]['question_sort'];
        if(!res[container_id]){
            res[container_id] = {};
        }

        if(!res[container_id][target.question_id]){
            res[container_id][target.question_id] = {
                answer_bucket_id: {},
                answer_correct: {},
                answer_prompt: {},
                answer_soft_delete: {},
                answer_sort: {},
                base64: unescape(target.base64),
                category: unescape(target.category),
                display_type_description: unescape(target.display_type_description),
                display_type_id: target.display_type_id,
                expected_response: unescape(target.expected_response),
                image: target.image,
                point_value: target.point_value,
                prompt: unescape(target.prompt),
                question_soft_delete: target.question_soft_delete,
                question_sort: target.question_sort,
                question_type_description: unescape(target.question_type_description),
                question_type_id: target.question_type_id,
                quiz_id: target.quiz_id,
                quiz_name: unescape(target.quiz_name),
                topic:  unescape(target.topic),
                topic_id: target.topic_id,
                training_module: unescape(target.training_module),
                training_url: unescape(target.training_url),
                question_id: target.question_id
            }
        }
        if( target.answer_id){
            res[container_id][target.question_id]['answer_bucket_id'][target.answer_id] = target.bucket_id;
            res[container_id][target.question_id]['answer_correct'][target.answer_id] = target.correct;
            res[container_id][target.question_id]['answer_prompt'][target.answer_id] = unescape(target.answer_prompt);
            res[container_id][target.question_id]['answer_soft_delete'][target.answer_id] = target.answer_soft_delete;
            res[container_id][target.question_id]['answer_sort'][target.answer_id] = target.answer_sort;
        }
    }
    for(let x in res){
        if(typeof(res[x]) == 'object'){
            for(let y in res[x]){
                result.push(res[x][y])
            }
        }
    }
    res = {};
    res = {
        quiz_params: quiz_params,
        questions: result
    }
    return res
}

function sort_answers_for_question(order_list, answer_prompt){
    // should return array of answer_keys and answer_prompt
    // ["739", "740", "565", "564"]
    // ["Wrong 1", "Right 1", "Wrong 2", "Right answer 3"]
    let keys = [];
    let prompts = [];
    let temp_res = {};
    for(let el in order_list){
        if(!temp_res[order_list[el]]){
            temp_res[order_list[el]] = [];
        }
        temp_res[order_list[el]].push(el)
    }
    for(let x in temp_res){
        for(let y in temp_res[x]){
            let id = temp_res[x][y]
            keys.push(id);
            prompts.push( answer_prompt[id])
        }
    }
    return {
        keys: keys,
        prompts: prompts
    }
}
function building_dont_use(object) {
    let functionName = 'format_quiz_table';
    // recieve table that is the quiz object
    // create json object from table results
    // one topic / topic_id
    // multiple questions per topic
    // multiple answer objects per question

    /*
        // get list of unique question_id

        // for each UNIQUE question_id {
            get set of data from KA_question table

            get list of UNIQUE answer_id 
            for each UNIQUE answer_id {
                get set of data from KA_answer table 
                
            }





        try {
            let answersMap = {};

            // console.log('==============quiz.quizTable========================')
            for (let el in object) {
                // console.log('===========', el, '==========================');
                if (typeof(object[el]) === 'object') {
                    if (!answersMap[object[el]['question_id']]) {
                        answersMap[object[el]['question_id']] = {};
                    }
                    answersMap[object[el]['question_id']][object[el]['answer_id']] = unescape(object[el]['answer_prompt'])
                }
            }
            // console.log(answersMap)
            // console.log('=================================================')
            //debugLog('here');
            //console.log(object)
            let keys = Object.keys(object);
            // console.log('========Object.keys(object)=========', keys)
            //console.log(keys)
            let answers = [];
            let correct = [];
            let questions = {};
            let dupes = {};
            let dupesCorrect = {};
            let dupesSoftDelete = {};
            let dupesAnswerSort = {};
            let dupesBucketList = {};
            //let dupesAnswerSort = {};
            let results = [];
            if (object !== 'null') {
                try {
                    for (let i = 0; i < keys.length; i++) {
                        try {
                            questions['topic_soft_delete'] = object[0]['topic_soft_delete'];
                            questions['category'] = unescape(object[0]['category']);
                            questions['topic'] = unescape(object[0]['topic']);
                            questions['topic_id'] = object[0]['topic_id'];
                            questions['question_sort'] = object[0]['question_sort'];
                        } catch (tryError) {
                            log_event('ERROR', tryError, functionName);
                            throw tryError;
                        }
                        //debugLog('here');
                        let next = i + 1;
                        //debugLog('here');
                        //next = next + 1;
                        //debugLog('here');
                        //console.log(object[keys[i]]['answer_id'])
                        // each answer_id is passed as array. 1 value at the beginning with 2 empty values following. Only select the [0] index for answer_id to prevent empty values
                        //let currentAns = object[keys[i]]['answer_id'][0];
                        let currentAns = object[keys[i]]['answer_id'];
                        //debugLog('here');
                        let currentPrompt = unescape(object[keys[i]]['answer_prompt']);
                        let currentCorrect = object[keys[i]]['correct'];
                        let currentDelete = object[keys[i]]['answer_soft_delete'];
                        let answer_sort = object[keys[i]]['answer_sort'];
                        let answer_bucket_id = object[keys[i]]['bucket_id'];

                        //debugLog('here');
                        //console.log(object[i]['question_id'])
                        let currentQuestion = object[i]['question_id'];
                        //let currentCorrect = object[i]['correct'];
                        //debugLog('here');
                        if (!questions.hasOwnProperty(currentQuestion)) {
                            try {
                                //debugLog('here');
                                dupes[currentAns] = currentPrompt;
                                //debugLog("here")
                                //console.log(currentCorrect)
                                dupesCorrect[currentAns] = currentCorrect;
                                dupesSoftDelete[currentAns] = currentDelete;
                                dupesAnswerSort[currentAns] = answer_sort;
                                dupesBucketList[currentAns] = answer_bucket_id;
                                if (next < keys.length) {
                                    //debugLog('here');
                                    // create an array of objects with answer_id as the key and answer_prompt as the value when there's a many to one relationship with question_id (Radial)
                                    while (currentQuestion === object[next]['question_id']) {
                                        //currentAns = object[keys[next]]['answer_id'][0];
                                        currentAns = object[keys[next]]['answer_id'];
                                        dupes[currentAns] = unescape(object[next]['answer_prompt']);
                                        //console.log(object[next]['correct'])
                                        //debugLog('***********************')
                                        dupesCorrect[currentAns] = object[next]['correct'];
                                        dupesSoftDelete[currentAns] = object[next]['answer_soft_delete'];
                                        dupesAnswerSort[currentAns] = object[next]['answer_sort'];
                                        dupesBucketList[currentAns] = object[next]['bucket_id'];

                                        next++;
                                        // checks to see if we are looking at the last question
                                        if (next >= keys.length) {
                                            //debugLog('here');
                                            break;
                                        }
                                    }
                                }
                            } catch (tryError) {
                                log_event('ERROR', tryError, functionName);
                                throw tryError;
                            }
                            //debugLog('here');
                            // this array of objects will be the first index following the question_id key
                            try {
                                answers.push(dupes);
                                // console.log('======================DUPES!!!============================', currentQuestion)
                                // console.log(dupes, 'compare to', )
                                // console.log(answersMap[currentQuestion])
                                //debugLog('here');
                                // after all answers that are associated with question_id are listed, include the following objects
                                //questions[currentQuestion] = answers;
                                questions[currentQuestion] = {};
                                questions[currentQuestion]['answer_prompt'] = answersMap[currentQuestion];
                                questions[currentQuestion]['answer_correct'] = dupesCorrect;
                                questions[currentQuestion]['answer_soft_delete'] = dupesSoftDelete;
                                questions[currentQuestion]['answer_sort'] = dupesAnswerSort;
                                questions[currentQuestion]['buckst_id'] = dupesBucketList;
                                questions[currentQuestion]['question_type_id'] = object[i]['question_type_id'];
                                questions[currentQuestion]['question_type_description'] = unescape(object[i]['question_type_description']);
                                questions[currentQuestion]['display_type_id'] = object[i]['display_type_id'];
                                questions[currentQuestion]['display_type_description'] = unescape(object[i]['display_type_description']);
                                questions[currentQuestion]['quiz_id'] = object[i]['quiz_id'];
                                questions[currentQuestion]['quiz_name'] = unescape(object[i]['quiz_name']);
                                questions[currentQuestion]['prompt'] = unescape(object[i]['prompt']);
                                //questions[currentQuestion]['sort'] = object[i]['sort'];
                                questions[currentQuestion]['training_module'] = unescape(object[i]['training_module']);
                                questions[currentQuestion]['training_url'] = unescape(object[i]['training_url']);
                                questions[currentQuestion]['base64'] = object[i]['base64'];
                                questions[currentQuestion]['image'] = object[i]['image'];
                                questions[currentQuestion]['point_value'] = object[i]['point_value'];
                                questions[currentQuestion]['question_soft_delete'] = object[i]['question_soft_delete'];
                                questions[currentQuestion]['expected_response'] = unescape(object[i]['expected_response']);
                                questions[currentQuestion]['question_sort'] = unescape(object[i]['question_sort']);

                                // now set above. once we stop using at this location, delete these
                                questions[currentQuestion]['topic'] = unescape(object[i]['topic']);
                                questions[currentQuestion]['topic_id'] = object[i]['topic_id'];
                                questions[currentQuestion]['category'] = unescape(object[i]['category']);

                                //debugLog('here');
                            } catch (tryError) {
                                log_event('ERROR', tryError, functionName);
                                throw tryError;
                            }
                        }
                        dupes = {};
                        answers = [];
                        correct = [];
                        dupesCorrect = {};
                        dupesSoftDelete = {};
                    }
                } catch (tryError) {
                    log_event('ERROR', tryError, functionName);
                    throw tryError;
                }
                results.push(questions);
                console.log(results)
                return results;
            } else {
                //debugLog("object empty");
                return [];
            }
        } catch (tryError) {
            log_event('ERROR', tryError, functionName);
            throw tryError;
        }

    */
}

function escapingQuiz(q) {
    for (let el in q) {
        if (typeof(q[el]) !== 'object' && Object.keys(q[el]).length <= 19 || el === 'new') {
            continue;
        }
        delete q[el][0]
        q[el]['prompt'] = escape(q[el]['prompt']);
        q[el]['training_url'] = escape(q[el]['training_url']);
        q[el]['training_module'] = escape(q[el]['training_module']);
        q[el]['expected_response'] = escape(q[el]['expected_response']);
        for (let a in q[el]['answer_prompt']) {
            q[el]['answer_prompt'][a] = escape(q[el]['answer_prompt'][a])
        }
    }
    return q;
}

function escapeObject(object) {
    let functionName = 'unescapingObj';
    try {
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object" && object[Object.keys(object)[i]] != null) {
                escapeObject(object[Object.keys(object)[i]]);
            } else if (Object.keys(object)[i] === 'image') {
                //console.log('image')
                continue
            } else if (typeof object[Object.keys(object)[i]] == "string") {
                object[Object.keys(object)[i]] = escape(object[Object.keys(object)[i]].trim())
            } else {
                continue
            }
        }
        return object
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function unescapingObj(object) {
    let functionName = 'unescapingObj';
    try {
        for (var i = 0; i < Object.keys(object).length; i++) {
            if (typeof object[Object.keys(object)[i]] == "object" && object[Object.keys(object)[i]] != null) {
                unescapingObj(object[Object.keys(object)[i]]);
            } else if (typeof object[Object.keys(object)[i]] == "string") {
                object[Object.keys(object)[i]] = unescape(unescape(object[Object.keys(object)[i]]))
            }
        }
        return object
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function groupBy(list, group) {
    let functionName = 'groupBy';
    try {
        let map = {};
        for (let el in list) {
            if (typeof(list[el]) === 'object') {
                if (list[el]['topic']) {
                    list[el]['topic'] = removeSpacesFromStr(list[el]['topic'])
                }
                if (!map[list[el][group]]) {
                    map[list[el][group]] = {}
                }
                map[list[el][group]][el] = list[el]
            }
        }
        return map
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function groupByKey(list, group, key) {
    let functionName = 'groupByKey';
    try {
        let map = {};
        for (let el in list) {
            if (list[el]['topic']) {
                list[el]['topic'] = removeSpacesFromStr(list[el]['topic'])
            }
            if (!map[list[el][group]]) {
                map[list[el][group]] = {}
            }
            map[list[el][group]][list[el][key]] = list[el]
        }
        return map
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function categoriesFixer(cat) {
    let res = {};
    for (let el in cat) {
        res[cat[el]['topic_id']] = cat[el];
    }
    return res;
}

function switchKey(list, key) {
    let res = {};
    for (let el in list) {
        res[list[el][key]] = list[el]
    }
    return res;
}

function joinUsersByTopicId(list) {
    let functionName = 'joinUsersByTopicId';
    try {
        var res = {};
        for (let u in list) {
            // if (list[u]['profile_id']) {
            //     if (list[u]['profile_id'] == 727) {
            //         console.log("==================list[u]['profile_id'] == 727===========================")
            //         console.log(list[u])
            //     }
            // }
            if (typeof(list[u]) !== 'object' || list[u]['soft_delete']) {
                continue;
            }
            let user_id = Number(list[u]['profile_id']);
            if (!res[user_id]) {
                res[user_id] = list[u]
                let temp = res[user_id]['topic_id'] // ex.: user['topic_id'] = [1,3,4,5,6] array of topic_id's
                res[user_id]['topic_id'] = [];
                if (typeof(temp) === 'object') {
                    for (let el in temp) {
                        if (!res[user_id]['topic_id'].includes(temp[el]) && !res[user_id]['permission_soft_delete']) {
                            res[user_id]['topic_id'].push(temp[el])
                        }
                    }
                } else {
                    if (!res[user_id]['topic_id'].includes(temp)) {
                        res[user_id]['topic_id'].push(temp)
                    }
                }
            } else {
                if (list[u]['permission_soft_delete']) {
                    continue;
                }
                let temp = list[u]['topic_id']
                if (typeof(temp) === 'object') {
                    for (let el in temp) {
                        if (!res[user_id]['topic_id'].includes(temp[el])) {
                            res[user_id]['topic_id'].push(temp[el])
                        }
                    }
                } else {
                    if (!res[user_id]['topic_id'].includes(temp)) {
                        res[user_id]['topic_id'].push(temp)
                    }
                }
            }
            res[user_id]['topic_id'].sort()
        }
        return res;
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}

function topicListNameRemoveSpaces(list) {
    for (let el in list) {
        list[el]['topic'] = removeSpacesFromStr(list[el]['topic']);
    }
    return list;
}

function removeSpacesFromStr(str) {
    let functionName = 'removeSpacesFromStr';
    try {
        if (str.length < 2) {
            return str
        }
        return str.split('   ').join('');
    } catch (tryError) { log_event('ERROR', tryError, functionName); throw tryError; }
}


//validates and sanitizes submission_id, question_id, gradeinput, and gradevalue. returns an array of objects that can be iterated through for db insertion
// array format {question_id: [graded value, admin feedback, submission id]}
function gradeValidate(body) {
    //console.log(`gradeValidate INPUT >>> ${body}`)
    //console.log(body)
    let keys = Object.keys(body);
    let cleanResult = {};
    let gradeContent = [];
    let gradeValue;
    //console.log(typeof gradeValue)
    let grade_input;
    let submission_id;

    //checks to see if a value matches the expected value. If not, it's assigned a value of '0' or given an error string
    // would like to validate further here, query to see what submission id the current admin is supposed to be grading according to DB
    if (typeof body['submission_id'] === 'string') {
        submission_id = body['submission_id'];
        submission_id = escape(submission_id);
    } else {
        submission_id = '0'
    }

    for (let i = 0; i < keys.length; i++) {
        console.log("+++++++++++++++++")
        console.log(body[keys][i])
        if (Array.isArray(body[keys[i]])) {

            // This needs to be adjusted if the grade scale feature is changed to allow for scores greater or less than 1-5
            if (0.0 <= body[keys[i]][0] <= 5.0) {
                gradeValue = body[keys[i]][0];
                //console.log('=-=-=-=-=--=== here ')
                //console.log(body[keys[i]][0])
                //console.log(gradeValue)

            } else {
                gradeValue = '0.0';
            }
            if (typeof body[keys[i]][1] === 'string') {
                grade_input = body[keys[i]][1];
            } else {
                grade_input = 'error expected a string';
            }

        }
        // check to see if we are at the end of the array (key 'submission_id') if so stop. We don't need it for the db query
        else if (keys[i] === 'submission_id') {
            break;
        } else {
            gradeValue = '0';
        }
        console.log("+++++++++++++++++")
        /*
        console.log(`gradeValue >>>> ${gradeValue}`)
        console.log(gradeValue)
        console.log(typeof gradeValue)
        console.log(`grade_input >>>> ${grade_input}`)
        console.log(`escape(grade_input) >>>> ${escape(grade_input)}`)
        console.log(`submission_id >>>> ${submission_id}`)
        console.log(`keys[i] >>>> ${keys[i]}`)
        */
        // sanitize everything and then add to the final array
        gradeValue = escape(gradeValue);
        console.log("========")
        gradeContent.push(gradeValue);
        console.log("gradeValue =>", gradeValue)
        grade_input = escape(grade_input);
        gradeContent.push(grade_input);
        console.log("grade_input =>", grade_input)
        gradeContent.push(submission_id);
        console.log("submission_id =>", submission_id)
        //would like to validate further here. add query to check which questions are available in the type of quiz that is being graded
        let question_id = keys[i];
        console.log("========")
        //question_id = escape(question_id)
        cleanResult[question_id] = gradeContent;
        gradeContent = [];
    }

    console.log("CLEAN RESULT =>", cleanResult)
    return cleanResult;
}

//A unique answer_id value is only needed for automated grading. This function iterates through user answers, validates the content and identifies whether it is a choice or freewrite answer
//The answer_id for Freewrite answers is given a value of '0'
//The answer_id for choice answers is turned into an array and given the unique answer_id value(s).

function findAnswerID(passInfo, arrayAnswer) {
    let answer_id = [];
    if (passInfo[0] !== '2') {
        for (let i = 0; i < arrayAnswer.length; i++) {
            // Sometimes empty values get passed when there are multiple answers. We don't need empty values inserted in the DB though.
            // Skip any empty values so they aren't included in the final output
            // Assign value and sanitize
            if (arrayAnswer[i] !== undefined) {
                if (typeof arrayAnswer[i] === 'string') {
                    answer_id[i] = arrayAnswer[i];
                    answer_id[i] = escape(answer_id[i]);
                }
            }
        }
    }
    // text input response, cannot validate further
    else {
        answer_id = [0];
    }
    return answer_id;
}


//validates and sanitizes identifying information passed from the front end. returns an array that can be iterated through for db insertion
function infoValidate(passInfo) {
    let cleanPassInfo = [];
    let questionId;
    let submitId;
    let profileId;

    // key of provided input should be an array
    if (Array.isArray(passInfo)) {
        // validate that content matches the expected value/type.  If not, it's assigned a value of '0' or given an error string
        // sanitize by escaping for further security
        if (typeof passInfo[2] === 'string') {
            profileId = passInfo[2];
            profileId = escape(profileId);
        } else {
            profileId = '0'
        }
        if (typeof passInfo[3] === 'string') {
            submitId = passInfo[3];
            submitId = escape(submitId);
        } else {
            submitId = '0'
        }
        if (typeof passInfo[5] === 'string') {
            questionId = passInfo[5];
            questionId = escape(questionId);
        } else {
            questionId = '0'
        }
    }
    cleanPassInfo.push(profileId);
    cleanPassInfo.push(submitId);
    cleanPassInfo.push(questionId);
    return cleanPassInfo;
}

function sortOnKeys(dict) { // sorting object by keys
    var sorted = [];
    for (var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for (var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

function reAssignSession(list, id) {
    for (let el in list) {
        if (list[el]['engagement_id'] == id) {
            return list[el]
        }
    }
    return false;
}

function questionRenderOderAnswers(question) {
    let res = {
        answer_keys: [],
        answer_prompts: []
    };
    let orderMap = {};
    for (let el in question['answer_sort']) {
        if (!orderMap[question['answer_sort'][el]]) {
            orderMap[question['answer_sort'][el]] = [];
        }
        if (!question['answer_soft_delete'][el] && question['answer_prompt'][el]) {
            orderMap[question['answer_sort'][el]].push(el);
        }
    }
    // console.log(orderMap);
    for (let o in orderMap) { // o  = order
        for (let q of orderMap[o]) { // q = question
            res.answer_keys.push(q);
            res.answer_prompts.push(question.answer_prompt[q])
        }
    }
    return res;
}

function filterEngagementsByAvailableQuizzes(quizzes) {
    quizzes = groupByKey(quizzes, "engagement_id", "engagement_id")
    for (let el in quizzes) {
        quizzes[el] = quizzes[el][el]
    }
    return quizzes;
}

module.exports = {
    format_quiz_table: format_quiz_table,
    unescapingObj: unescapingObj,
    groupBy: groupBy,
    groupByKey: groupByKey,
    categoriesFixer: categoriesFixer,
    switchKey: switchKey,
    joinUsersByTopicId: joinUsersByTopicId,
    removeSpacesFromStr: removeSpacesFromStr,
    gradeValidate: gradeValidate,
    findAnswerID: findAnswerID,
    infoValidate: infoValidate,
    escapingQuiz: escapingQuiz,
    escapeObject: escapeObject,
    sortOnKeys: sortOnKeys,
    topicListNameRemoveSpaces: topicListNameRemoveSpaces,
    questionRenderOderAnswers: questionRenderOderAnswers,
    reAssignSession: reAssignSession,
    filterEngagementsByAvailableQuizzes: filterEngagementsByAvailableQuizzes,
    format_quiz_table2: format_quiz_table2,
    format_quiz_table_orderby_question_sort: format_quiz_table_orderby_question_sort,
    sort_answers_for_question: sort_answers_for_question
};


/*
// object_validation
const { format_quiz_table, unescapingObj, groupBy, groupByKey, categoriesFixer, switchKey, joinUsersByTopicId, removeSpacesFromStr, gradeValidate, findAnswerID, infoValidate, escapeObject, escapingQuiz } = require('./object_validation.js');
*/