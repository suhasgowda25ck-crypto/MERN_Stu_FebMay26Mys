//Filter method
let marks = [75,49,56,70,82,51,68];
let passed = marks.filter(mark => mark >=70);

console.log(marks);
console.log(passed);

// Array of student objects
let students = [
  { name: "Raghu", marks: 75 },
  { name: "varshith", marks: 49 },
  { name: "suhas", marks: 56 },
  { name: "hruthik", marks: 80 },
];
let qualifiedStudentsNames = students.filter(s => s.marks > 70).map(s => s.name);

console.log("Students with marks > 70:", qualifiedStudentsNames);
