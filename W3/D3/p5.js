// basics of objects
const person={
    name:"rahul",
    age:30,
    isStudent:false
};
//console.log("person",person);
console.log("Name:",person.name);
console.log("age:",person["age"]);

//Add a new property
person.city = "mysore";
console.log("person",person);

//modify
person.age=31;

//delete
delete person.isStudent;
console.log("person",person);

//Object constructor
const car = new Object();
car.make = "BMW";
car.model = "A4";
car.year=2026;
console.log("car",car);



