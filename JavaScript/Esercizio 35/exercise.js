function repeatHello(callback) {
setInterval (()=>{
    callback()
}, 1000)}

const sayHello = () => console.log("Hello");
//The callback function must be an arrow function, can you also explain why?
//Perché è più leggibile e il contesto this lo eredita dal genitore, senza crearlo autonomamente come le function normali

repeatHello(sayHello)