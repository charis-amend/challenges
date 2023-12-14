



console.clear();

// ------- DOM NOTATIONS FOR HAPPENINGS IN BROWSER --------------------------------
// these DOM notations refer to the stuff that is happening on the webpage in the browser
// connected to the html with data-js
// querySelector returns the first element that matches the data-js defined class
const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

// person puts number in pizzaInput1 and pizzaInput2 in the browser
// then this value is taken and put in the "variable-box" which is called let diameter1 and diameter2
// getting the new diameter value from the input field see html file
let diameter1 = pizzaInput1.value;
let diameter2 = pizzaInput2.value;

// ---------- the 2 pizzas and their arrow functions for the addEventListeners ------------
//
// what is addEventListener?
// addEventListener(type      -- in this case "input" of the pizzaInput1+2 (case-sensitive string!!!)
//                  ,
//                  listener  -- The object (our arrow function to calculate pizzagain)
//                         )      receives a notification, when an event (adding input.value for pizzas)
//                                of the type (in this case "input" occurs.

// --------- arrow function pizza 1 -----------------
// this updates the 3 results in the 3 tasks to show the results of the calculation
// but only for pizza1
// (pizza2 needs separate addEventListener arrow function!!) because pizza2 has a separate input field to put the size in

pizzaInput1.addEventListener("input", () => {
  // copying in the variables that i created above outside of the function global scope
  // it takes the value put on the website for the diameter 1 and 2
  diameter1 = pizzaInput1.value;
  diameter2 = pizzaInput2.value;
  // based on these 2 variables and their input.values from the browser it should
  // calculate the pizza gain ->>> we need a function here (task1)

  //-----------------------------------
  // task1 pizzaGain:
  calculatePizzaGain(diameter1, diameter2);
  // copying in the function from task 1 calculatePizzaGain
  // parameters diameter1 and ddiameter2 take the input.values the person did in browser
  // no need to further write code, function calculatePizzaGain is down below)

  // ---------------------------------
  // task2 pizzaDisplaySize
  updatePizzaDisplay(pizza1, diameter1);
  // we want to change how pizza is displayed in the browser so we need
  //   1. the const pizza1 from the querySelector at the top. it will give us the element Pizza1 from the DOM (browser)
  //   2. the let diameter1 because it gives us the input.value of the pizza1 from the DOM/browser what the user changes

  // ---------------------------------
  // task3 color of button showing gain
  updateOutputColor(diameter1, diameter2);
  // need diameter1 aand diameter2 because those are the things that are being changed
});

pizzaInput2.addEventListener("input", () => {
  let diameter1 = pizzaInput1.value;
  let diameter2 = pizzaInput2.value;

  calculatePizzaGain(diameter1, diameter2);
  updatePizzaDisplay(pizza2, diameter2);
  updateOutputColor(diameter1, diameter2);

});

// Task 1
// Write a function calculatePizzaGain which expects the two diameters of the two pizzas: diameter1 and diameter2.
// (Not the radii of the pizzas!)
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  // calculating the area of the pizzas with formula
  const areaPizzaWithDiameter1 = (1 / 4) * Math.PI * (diameter1 * diameter1);
  const areaPizzaWithDiameter2 = (1 / 4) * Math.PI * (diameter2 * diameter2);

  // calculating the gain of the area from pizza1 to pizza2 in percentage!
  const pizzaGainFromPizza1ToPizza2 =
    ((areaPizzaWithDiameter2 - areaPizzaWithDiameter1) /
      areaPizzaWithDiameter1) *
    100;

  // rounding the pizza gain up, so no comma in the numbers
  const roundedUpPizzaGainFromPizza1ToPizza2 = Math.round(
    pizzaGainFromPizza1ToPizza2
  );

  // using the dom notation output. (with DOM JavaScript gets all the power it needs to create dynamic HTML)
  // see html file this class is called output: <p><output data-js="output">0</output><span> %</span></p>
  // textContent is the text that is between Output">0</output>. in this case the "0"
  output.textContent = roundedUpPizzaGainFromPizza1ToPizza2;
}
// then test here:
calculatePizzaGain(diameter1, diameter2);



// ----------------  Task 2----------------
// define the function updatePizzaDisplay here

// pizzaElement takes the pizza as an Element from the DOM (=the browser)
// newSize is the new variable we create to define the newSize to which th pizzas 
// should grow if we change the PizzaInput1 and 2
function updatePizzaDisplay(pizzaElement, newSize) {
  // defining a variable so that we know how to calculate the new size of the pizza
  // so now we have a variable that shows us the result when we change any input1 or 2 
  // we dont have to do anything with the input 1 and 2 because we will put this
  // function into the addEventListener above
  const resultOfChangingPizzaWidth = newSize / 24 * 100
  // then we also need to change the pizzaElement width (css from DOM)
  // we specify style.width and then concat the result 
  // somehow we need `concat` for concating something instead of ""!!! 
  // we need to concat so we have the number of the result separat from the string px!
  pizzaElement.style.width = `${resultOfChangingPizzaWidth}px`;
}


// ----------------  Task 3 ----------------
// define the function updateOutputColor here

function updateOutputColor(sizePizza1, sizePizza2) {
  // defining a variable for the two pizza sizes so we can compare 
  sizePizza1 = diameter1;
  sizePizza2 = diameter2;
  // setting up the colors according to whether pizza1>pizza2 or pizza<pizza2
  // pizza1 > bigger pizza2 ---> color red cause the gain is negative -50%
  // pizza1 =< smaller && equal pizza2 ---> color green cause gain is 0 or positive 10%
  if (sizePizza1 > sizePizza2) {
    //need to put var() in "" because it is a string put in the css file
    outputSection.style.backgroundColor = "var(--red)";
  } else if (sizePizza1 >= sizePizza2) {
    outputSection.style.backgroundColor = "var(--green)";
  }
}
