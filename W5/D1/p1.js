// Introduction to Node.js

const runtime = "Node.js";
// console.log("Introduction to Node.js");
console.log("${runtimeName} runs javascript outside the browser");

const commonUsers = [
    "used for server-side app","automation scripts can be created"
];
//array destructuring
// console.log(commonUsers[0]);
// console.log(commonUsers[1]);
commonUsers.forEach((commonUse,index) => {
    console.log(`${index+1}.${commonUse}`);
})