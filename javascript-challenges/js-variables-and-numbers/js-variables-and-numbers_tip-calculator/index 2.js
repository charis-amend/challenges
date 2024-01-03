/* 
Tip Calculator 🌶️🌶️

Create a program that calculates the total cost of a meal, including tip, 
based on the cost of the meal and the percentage of the tip.

Steps

Create a new JavaScript file in VS Code.
Initialize a assign values to 2 variables:
1. A variable which will hold the value of the meal cost.
2. A variable which will hold the value of the tip percentage.
3. Calculate the tip amount by multiplying the meal cost by the tip percentage, 
and store the result in a variable called tipAmount.
4. calculate the total cost of the meal, including tip, by adding the mealCost variable 
and the tipAmount variable, and store the result in a variable called totalCost.
5. Log out a message using the console.log() method that should look like this: 
// The total cost of your bill is: 33 euros

*/

const mealCost = 12.45;
const tipPercent = 0.2; // 20%=0.2

// calc tip amount
let tipAmount = mealCost * tipPercent;
console.log("this shows the tipamout: ", tipAmount);
// shows tipAmount = 2.49

//calc total meal cost
let totalCost = tipAmount + mealCost;
console.log("The total cost of your bill is: ", totalCost, "euros.");

/* RESULT
─    ~/De/s/challenges/j/js-variables-and-numbers_tip-calculator    tip-calc 
╰─ node index.js
this shows the tipamout:  2.49
The total cost of your bill is:  14.94 euros. */
