//array Map
let prices = [100,200,300,400];

let priceWithGST = prices.map(price => price + price*0.18);
console.log("price w/o tax: ",prices);
console.log("price with tax: ",priceWithGST);

//Using map to extract files
let users = [
    { name: "Arjun", age: 24 },
    { name: "Krishna", age: 28 }
];

let names = users.map(use => use.name)
console.log("",names);