// Asynchronous approach of Node.js

console.log("step 1:script started")
setTimeout(()=> {
console.log("step 2: Delayed callback finished. F2")
},1000);
setTimeout(function(){
    console.log("step 3: Delayed callback finished, F2");
},2000)
console.log("step 2: script did not stop while waiting");