//Arrow function
(args) => {
    //body of the function
}

//add two numbers
const sum = (a,b) => {
    return a+b;
}
console.log("3+5=",sum(3,5));

//Single line return / implicit return
const square =  x => x*x;
console.log("square of 44:",square(44));

const sayhello=()=> console.log("hello from arrow function");
sayhello();