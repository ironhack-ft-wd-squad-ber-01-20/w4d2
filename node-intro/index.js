console.log("Hello world!");

const sum = (...numbers) => {
  return numbers.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
};

// console.log(document); ❌ no DOM in node.js
console.log(sum(3, 6, -5, 1));

// retrieve the multiply function
const multiply = require("./mult.js");

console.log(multiply);

const product = multiply(3, 3);
console.log(product);

const utils = require("./utils.js");

console.log(utils);

const quotient = utils.divide(4, 2);
console.log(quotient);

console.log(utils.foo);

const isEven = require("is-even");
console.clear();
console.log(isEven(42));

const chalk = require("chalk");

console.log(chalk.blue.bgRed.bold("Hello world!"));

const fs = require("fs"); // some packages are built-in
const path = require("path"); // and we don't need to install them
