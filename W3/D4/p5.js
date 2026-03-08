//Reduce method
let nums = [5, 10, 15];

let average = nums.reduce((intermediatesum, current) => intermediatesum + current, 0) / nums.length;
console.log(average); 


//Reduce to object count by category
let items = ["pen","pencil","eraser","pen"];
let count = items.reduce((a,b)=>{
    a[b] = (a[b] || 0) + 1;
    return a;
},{});
console.log("Item count:",count)