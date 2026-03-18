// Handling errors with try/catch

function loadCustomerProfile(){
    return new Promise(function(resolve, reject){
        const isServiceavailable = true;

        if(isServiceavailable){
            resolve("Success Customer profile loaded.");
        } else {
            reject("Unsuccessful customer profile is unavailable");
        }
    });
}

async function showCustomerProfile(){
    try {
        const message = await loadCustomerProfile();
        console.log(message);
    } catch(error) {
        console.error("Error:", error);
    }
}

showCustomerProfile();