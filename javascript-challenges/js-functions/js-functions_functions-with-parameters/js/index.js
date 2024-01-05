console.clear();

logSeparator(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:
logText;

function logText() {
  console.log("This text does not appear. Why?");
}
//putting logText after function
logText();

logSeparator(2);
/*
2: Look at the functions below. They are almost identical. 
Can you find a way to generalize them into a new function with an input parameter? 
Replace the function calls below with your new function.
*/

function greetBob() {
  console.log("Welcome Bob, good to see you again!");
}

function greetAlice() {
  console.log("Welcome Alice, good to see you again!");
}

function greetMary() {
  console.log("Welcome Mary, good to see you again!");
}

greetAlice();
greetBob();
greetMary();

// --v-- write your code here --v--
function greetAllNew() {
  greetAlice(), greetBob(), greetMary();
}
console.log("greeting all:", greetAllNew());

// or working with any name

function greetAnyName(name) {
  console.log("welcome" + name + ", good to see you again!");
}

greetAnyName("Jan");

// --^-- write your code here --^--

logSeparator(3);
/*
3: We log a little separation text for each subtask. This is repetitive code, so 
lets write a function 'logSeparator' which takes the number of the exercise as a parameter 
and logs the respective separator. Then use this function to replace the existing separator logs in this javascript file.

Note: Separation text means the text that is logged into the console before each exercise. 
For example: "-------------" and "Exercise 1:" are the separation texts for the first exercise.
*/

// --v-- write your code here --v--
function logSeparator(numberExercise) {
  console.log("------- Exercise No." + numberExercise + "# --------");
}
logSeparator("exercise 1000");
// --^-- write your code here --^--