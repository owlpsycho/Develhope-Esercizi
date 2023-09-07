const number = 15;
const checkNumber = (number) => {
    return new Promise((resolve, reject) => {
      if (number >= 10) {
        resolve(`${number} is greater than or equal to 10.`);
      } else {
        reject(`${number} isn't greater 10.`);
      }
    });
  };

checkNumber(number)
    .then ((val) => console.log(val))
    .catch ((err) => console.error(err))
