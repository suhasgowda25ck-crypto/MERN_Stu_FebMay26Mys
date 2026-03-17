//Basic callback variations
// 1. a callback with no input data
// 2. a callback that receives data from main function

function runTask(callback){
    console.log("Task is running");
    callback();
}

function runTaskwithResult(taskName, Callback){
    console.log("processing Task: ", taskName);
    Callback("Task " + taskName + " finished successfully");
}

function showSimpleDemoMessage(){
    console.log("simple callback executed");
}

function showDetailMessage(message){
    console.log(message);
}

// runTask(showSimpleDemoMessage);
runTaskwithResult("send monthly report",showDetailMessage);