console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const formCalcEntries = new FormData(event.target);
  console.log("test const formEntries:", formCalcEntries);

  const dataFromEntriesTurnedToObject = Object.fromEntries(formCalcEntries);
  console.log("shows the data from the entries into the calculator:", dataFromEntriesTurnedToObject);

  resultOutput.textContent = 
    if (formCalcEntries.event.target.operator.value = "addition") {
    return function add()
  };
}
  if else {
  (formCalcEntries.event.target.operator.value = "subtract") {
    return function subtract()};


  // --^-- write your code here --^--

  // resultOutput.textContent = result;
});
