// function nicknameMap(persons) {
//   const nicknames = []
//   for (i = 0; i < persons.length; i++) {
//     const nickname = "nickname: " + persons[i].name.toLowerCase() + "-" + persons[i].age;
//     nicknames.push(nickname);
//   }

//   return nicknames;
// }

function nicknameMap(persons) {
  const nicknames = persons.map((element) => element.name.toLowerCase() + '-' + element.age);
  return nicknames;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);