const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person)
for (const currentKey of keys) {
  console.log(currentKey + ": " + person[currentKey])
}