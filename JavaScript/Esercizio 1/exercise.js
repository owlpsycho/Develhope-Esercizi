function calculateSalary(role) {
  let salary;
  switch (role) {
    case "ceo":
      salary = "2200€"
    break;
    case "manager":
      salary = "1800€"
    break;
    case "cto":
      salary = "1800€"
    break;
    case "developer":
      salary = "1500€"
    break;
    default: 
      salary = "1000€"
    break;
  }
  return salary;
}

console.log(calculateSalary('ceo'));
console.log(calculateSalary('manager'));
console.log(calculateSalary('cto'));
console.log(calculateSalary('developer'));
console.log(calculateSalary('other'));
