const isLogged = false;

const logCheeck = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged === true) {
      const randomNum = Math.random()
      resolve(randomNum)
    } else {
      reject("User isn't logged")
    }
  })
}

const secondPromise = (inputNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputNumber > 0.5) {
        const user = { name: "John", age: 24 }
        resolve(user)
      } else {
        reject("Number isn't greater than 0.5")
      }
    }, 1000)
  })
}

logCheeck(isLogged)
  .then((randomNum) => {return secondPromise(randomNum)})
  .then((user) => console.log(user))
  .catch((err) => console.error(err))
