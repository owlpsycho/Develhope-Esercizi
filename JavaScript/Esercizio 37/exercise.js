const number = 15;
let checkNumber = new Promise ((resolve, reject) => {
    if (number > 10){
        resolve (number)
    }else {
        reject ("Error: The Number isn't greater than 10")
    }
})

checkNumber
    .then ((val) => console.log(val))
    .catch ((err) => console.error(err))
