const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

//stessa cosa ma con spread
// const person2 = {...person1};

person2.firstName = "Simon"

console.log(person1);
console.log(person2);

// Le modifiche delle proprietà di person2 si riflettono anche in person1 perchè entrambi puntano allo stesso oggetto