let num1 = 10;
let num2 = 20;
console.log('Before destructuring: ', num1, num2); // Before: 10 20

// Destructuring
[num1, num2] = [num2, num1];

console.log('After destructuring: ', num1, num2); // After: 20 10