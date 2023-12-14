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

  const entryForA = parseInt(dataFromEntriesTurnedToObject.numberA)
  console.log("shows new const numberForA and its entered content numberA from html:", entryForA);

  const entryForB = parseInt(dataFromEntriesTurnedToObject.numberB);
  console.log("shows entry of user for inputB", entryForB);

  switch (dataFromEntriesTurnedToObject.operator) {
    case "addition":
      result = entryForA + entryForB;
      break;

    case "subtraction":
      result = entryForA - entryForB;
      break;

    case "multiplication":
      result = entryForA * entryForB;
      break;

    case "division":
      result = entryForA / entryForB;
      break;
    default:
      return;
  };


  // --^-- write your code here --^--

  resultOutput.textContent = result;
  console.log("test if first switch works for addition", result);
});
