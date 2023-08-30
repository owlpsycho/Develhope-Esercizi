const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
  toJSON() {
    return {
      id: this.id,
      age: this.age
    };
  }
};

const json = JSON.stringify(person);

console.log(json); // Should return: {"id":1,"age":25}