//Promise()多步骤操作
//new Promise(步骤1).then(function(val){
//    return new Promise(步骤2)    
//}).then(function(val){
//    return new Promise(步骤3)
//}).then(function(val){
//    ....
//})

//简单的上班三部曲
let state = 1;

function step1(response, error) {
    console.log('闹钟响了，穿衣服起床了');
    if (state == 1) {
        response('穿好衣服了')
    }
}

function step2(response, error) {
    console.log('洗漱')
    if (state == 1) {
        response('洗漱完成');
    }
}

function step3(response, error) {
    console.log('吃早饭，上班');
    if (state == 1) {
        response('上班了')
    }
}
new Promise(step1).then(function(val) {
    console.log(val);
    return new Promise(step2);
}).then(function(val) {
    console.log(val);
    return new Promise(step3);
}).then(function(val) {
    console.log(val);
    return val;
})