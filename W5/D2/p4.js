// writing custom callback functions

function processStudent(name, score, callback,back){
    console.log("Student name:", name);
    console.log("Score:", score);

    callback(name, score);
    back(name,score);
}

function showResult(name, score){
    if(score >= 70){
        console.log(name + " has passed.");
    }
    else{
        console.log(name + " has failed");
    }
}

function showGrade(name, score){
    if(score >= 85){
        console.log("A+");
    }
    else if(score >= 75){
        console.log("A");
    }
    else if(score >= 70){
        console.log("B");
    }
    else{
        console.log("Grade: fail");
    }
}

processStudent("suhas", 75, showResult,showGrade);
// processStudent("suhas", 75, showGrade);
