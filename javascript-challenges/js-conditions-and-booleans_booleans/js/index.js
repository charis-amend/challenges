console.clear();

console.log(Boolean("Try it out"));

// Exercise
// true or false?
// For each statement write down whether it will resolve to true or false.
// Once completed, check the answers in the browser console by running the statement in the Boolean() function.

// 2 == "2"
// true
console.log(Boolean(2 == "2"));

// 2 === "2"
// false because one number and one string
console.log(Boolean(2 === "2"));

// 2 === 2
// true
console.log(Boolean(2 === 2));

// "hello world"
// true becausse just text
console.log(Boolean("hello world"));

// ""
// false because no text
console.log(Boolean(""));

// true
// true because it is the boolean value true
console.log(Boolean(true));

// 0
// false because 0 is a zero
console.log(Boolean(0));

// -50
// true because  number
console.log(Boolean(-50));
// true because nzmber
console.log(Boolean(50));
// 50

// 5 > 1
// true because correct
console.log(Boolean(5 > 1));

// "1 > 10"
// true because string but it cant know the statement is wrong
console.log(Boolean("1 > 10"));
// "false"
// string so true
console.log(Boolean("false"));
