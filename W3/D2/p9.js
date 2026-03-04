//Immediately invoked function expression (IIFE)

//w/o parameters
(function(){
    console.log("Basic IIFE executed Immediately");
})();

//with parameter
(function(appname,version){
    console.log("App:",appname,"version:",version);
})("Nodejs","v22.22.0");

//without parameter
const result = (function(){
    const a=10,b=20;
    return a+b;
})();
console.log("sum is:",result);
