//throw custom errors
// function divide(a,b){
//     if (b==0){
//         throw new Error("cannot divide by zero");
//     }
//     return a/b;
// }
// try{
//     // console.log(divide(10,2));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("caught:",err-message);
// }

// function checkAge(age){
//     if (age < 18){
//         throw new Error("Age must be 18 or above");
//     }
//     console.log("You can vote");
//     return age;
// }

// try{
//     console.log(checkAge(20));
// }
// catch(err){
//     console.log("Caught:", err.message);
// }

//create a custom error class
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }
}
function createUser(name){
    if(!name){
        throw new ValidationError("Name is required");
    }
    console.log("hi,"+name+"welcome");
    return {name};
}

try{
    // console.log(createUser(""));
    console.log(createUser("Suhas"));
}
catch(err){
    console.log("Error:", err.message);
}
