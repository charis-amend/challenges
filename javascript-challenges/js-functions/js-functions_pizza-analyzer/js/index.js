
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
// (pizza2 needs separate addEventListener arrow function!!)

pizzaInput1.addEventListener("input", () => {
  // copying in the variables that i created above outside of the function global scope
  // it takes the value put on the website for the diameter 1 and 2
  diameter1 = pizzaInput1.value;
  diameter2 = pizzaInput2.value;
  // based on these 2 variables and their input.values from the browser it should
  // calculate the pizza gain ->>> we need a function here (task1)
  // copying in the function from task 1 calculatePizzaGain
  // parameters pizza1 and pizza2 take the input.values the person did in browser
  calculatePizzaGain(pizza1, pizza2);
  // no need to further write code, function calculatePizzaGain is down below)

  // update pizza display (task2)
  // again both parameters pizza1 and pizza2 which have been changed even though this is eventlistener for only pizza1
  updatePizzaDisplay(pizza1, pizza2);

  // update the color of pizzas (task3)
  // again both parameters pizza1 and pizza2 which have been changed
  updateOutputColor(pizza1, pizza2);
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2: pizzaInput2.pizzaSize2;
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
  // textContent is the text that is between utput">0</output>. in this case the "0"
  output.textContent = roundedUpPizzaGainFromPizza1ToPizza2;
}

calculatePizzaGain(pizzaInput1, pizzaInput2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here

