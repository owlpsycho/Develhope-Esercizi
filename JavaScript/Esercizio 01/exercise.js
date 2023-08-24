function calculateSalary(role) {
  switch (role) {
    case "ceo":
      return "Il Salario è " + 2200+"€"
    case "manager":
      return "Il Salario è " + 1800+"€"
    case "cto":
      return "Il Salario è " + 1800+"€"
    case "developer":
      return "Il Salario è " + 1500+"€"
    default: 
      return "Il Salario è " + 1000+"€"
  }
}

console.log(calculateSalary('ceo'));
console.log(calculateSalary('manager'));
console.log(calculateSalary('cto'));
console.log(calculateSalary('developer'));
console.log(calculateSalary('other'));
