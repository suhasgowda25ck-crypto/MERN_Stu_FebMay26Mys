const payrollrecords = [
  { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Ravi", basePay: -5000, bonus: 500, taxRate: 0.05 },  
  { name: "Meera", basePay: 40000, bonus: -1000, taxRate: 0.15 }, 
  { name: "Sam", basePay: 25000, bonus: 1500, taxRate: 0.12 },
  { name: "Tina", basePay: 32000, bonus: 0, taxRate: 0.08 }
];


const validRecords = payrollrecords.filter(record => {
  return (
    record.basePay > 0 &&
    record.bonus >= 0 &&
    record.taxRate >= 0 &&
    record.taxRate <= 0.12
  );
});