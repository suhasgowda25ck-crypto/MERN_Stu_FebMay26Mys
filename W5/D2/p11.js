// Chaining promises with returned promises
function getOrderid(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        }, 500);
    });
}

function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                product: "laptop",
                quantity: 2
            });
        }, 700);
    });
}

getOrderid()
.then(function(orderId){
    console.log("Order Id received:", orderId);
    return getOrderDetails(orderId);
})
.then(function(OrderDetails){
    console.log("Order details loaded");
    console.log("product:", OrderDetails.product);
    console.log("Quantity:", OrderDetails.quantity);
});