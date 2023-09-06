const isLogged = true;

const logCheeck = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNum = Math.random()
      resolve(randomNum)
    } else {
      reject (new Error ("User isn't logged"))
    }
  })
}

const getUserInfo = (inputNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputNumber > 0.5) {
        const user = { name: "John", age: 24 }
        resolve(user)
      } else {
        reject(new Error ("Number isn't greater than 0.5"))
      }
    })
  })
}

logCheeck(isLogged)
  .then((randomNum) => getUserInfo(randomNum))
  .then((user) => console.log(user))
  .catch((err) => console.error(err))
  .finally(() => console.log("FINE DELL'ESERCIZIO"))