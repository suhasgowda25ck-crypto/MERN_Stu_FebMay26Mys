//finally
function example(){
    try{
        console.log("example in try block");
        return "Try_RETURN";
    }
    finally{
        console.log("This is printed");
    }
}
 console.log("Example result:",example());

//return in catch block and finally
function example(){
    try{
        try{
            throw new Error("New error");
        }
        catch(e){
            console.log("Example 1: caught error");
            throw e;
        }
        finally{
            console.log("Example 1: finally still runs");
        }
    }
    catch(e){
        console.log("Example 1 outer catch:", e.message);
    }
}

console.log("Example 1:", example());
