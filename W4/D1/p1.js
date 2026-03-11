//try catch basics

//Reference error
try{
    console.log("Trying to access undefined variable");
    console.log(notDefined);
}
catch(err){
    console.log("Error caught", err.name, "-", err.message);
    document.getElementById("error").textContent = "2 Trying to access undefined variable";
}
console.log("program execution continues");

//JSON parsing error
let jsonText = "{json}";
try{
    let data = JSON.parse(jsonText);
    console.log(data);
}
catch(err){
    console.log("JSON parse error", err.message);
}

//Type error
try{
    let num = 10;
    num();
}
catch(err){
    console.log("Caught error", err.name);
}