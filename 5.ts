function factorial(number: number): number {

let factorialvalue = 1;

for (let i = 2; 
         i <= number;
         i++) {
  factorialvalue *= i;
}

return factorialvalue;
}
const number = 5;
const factorialInteger = factorial(number);
console.log(`The factorial of ${number} is ${factorialInteger}`);