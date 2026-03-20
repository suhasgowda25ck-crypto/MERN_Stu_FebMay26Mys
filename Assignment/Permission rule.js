
const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];

const allowedRules = rules.filter(rule => rule.allowed);


const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

const summary = allowedRules.reduce((a, b) => {
  if (!a[b.role]) a[b.role] = 0; 
  a[b.role]++;                     
  return a;                        
}, { admin: 0, student: 0, guest: 0 });

console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("summary:", summary);