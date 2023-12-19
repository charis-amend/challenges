console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!

// named function:
// creating a function that should show the welcome message:
function showWelcomeMessage() {
  // this is the output of the function:
  console.log("Welcome! You are logged in now.")
}
// we tell the handleUserLogin function at the top to take the output of the other 
// showWelcomeMessage function for its own output
handleUserLogin(showWelcomeMessage)
// handdleUserLogin is now calling the showWelcomeMessage function 
// the argument of handleUserLogin is onSucess
// so it should log the welcome Message onSucess! 


// anonymous function: 
// Call "handleUserLogin" again but this time ->
// write an anonymous function inside the function call
// dont have to name the function! 

// callingg handleuserlogin function 
handleUserLogin(
  // not putt onSucess before!!! 
  // the argument is the anonymous function!! 
  // making an anonymous function -- there are only () no name!
  () => {
    // then i say what this anaonymous function should do 
    console.log("Welcome! You are logged in now.")
  }
)


