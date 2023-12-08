console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const addResult = operand1 + operand2;
  console.log("this is the result for operand1 + operand2:", addResult);
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  const subtractResult = operand1 - operand2;
  console.log("this is the result for operand1-operand2", subtractResult);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  const multiplyResult = operand1 * operand2;
  console.log("this is the result for operand1 * operand2:", multiplyResult);
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  const divideResult = operand1 / operand2;
  console.log("result for operand1 / operand2:", divideResult);
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  exponentResult = operand1 ** operand2;
  console.log("result of operand1^operand2:", exponentResult);
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  moduloResult = operand1 % operand2;
  console.log(
    "this is the remainder when dividing operand1 thru operand2:",
    moduloResult
  );
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/

// updating operand1 from const to let in the top!!!

const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increasebyoneResult = operand1 + 1;
console.log("increasing operand1 by one results in:", increasebyoneResult);

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const increasebyfiveResult = operand1 + 5;
console.log("increasinng operand1 by 5 results in:", increasebyfiveResult);

const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseonebuttonResult = operand1 - 1;
console.log("decreasing operand1 by -1 results in:", decreaseonebuttonResult);

const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const decreasebyfiveResult = operand1 - 5;
console.log("result if decreasing operand1 -5 is:", decreasebyfiveResult);

const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const multiplybybuttontwoResult = operand1 * 2;
console.log("multiplying operand1 +2 results in:", multiplybybuttontwoResult);

const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
const dividebytwoResult = operand1 / 2;
console.log("dividing operand1 / 2 results in:", dividebytwoResult);

// task 2

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
