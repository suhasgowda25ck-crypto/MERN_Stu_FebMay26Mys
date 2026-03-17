//Introduction to callback
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
    //the callback function is executed only after the execution of current function
}

function showCompletionMessage() {
    console.log("The greeting task is complete.");
}

greetUser("Ranjith", showCompletionMessage);