console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

// function getCurrentHour() {
//   const now = new Date();
//   const currentHour = now.getHours();
//   if (currentHour === 0) {
//     return "12am";
//   } else if (currentHour === 12) {
//     return "12pm";
//   } else if (currentHour <= 11) {
//     return currentHour + "am";
//   } else {
//     return currentHour - 12 + "pm";
//   }
// }

// rewrite to arrow function:

const now = new Date();
const currentHour = now.getHours();

const getCurrentHour = () => {
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};

function getVectorLength(x, y, z) {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
}

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};

function cleanInput(string) {
  return string.toLowerCase().trim();
}

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };

const add3 = (a, b, c) => a + b + c;

const repeat10 = (string) => string.repeat(10);

// rewrite arrow to classic function

function add3(a, b, c) {
  return a + b + c;
}
add3();

function repeat10(string) {
  return string.repeat(10);
}
repeat108();

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}

isOddAndSmall();
