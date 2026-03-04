//callback function
//is a function which is passed as an argument to another function

function greetuser(name,callback){
    console.log("hello,",name);
    callback();
}
greetuser("suhas",function(){
    console.log("callback function executed");
});