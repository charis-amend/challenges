console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const timeNumber = new Date().getHours();

function getGreeting() {
  // doing conditions
  if (timeNumber >= 6 && timeNumber < 12) {
    return "Good Morning";
  } else if (timeNumber >= 12 && timeNumber < 18) {
    return "Good Afternoon";
  } else if (timeNumber >= 18 && timeNumber < 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}
getGreeting();

// taask 2
const currentWeekday = new Date().getHours();

function getDayColor() {
  if (currentWeekday === 0) {
    return "darkgray";
  }
  if (currentWeekday > 0 && currentWeekday < 6) {
    return "lightblue";
  }
  if (currentWeekday === 6 || currentWeekday === 7) {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
