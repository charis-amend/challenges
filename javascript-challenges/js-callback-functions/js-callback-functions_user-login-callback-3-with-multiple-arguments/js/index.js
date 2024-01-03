console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}
// this calling the function above:
handleUserLogin(showWelcomeMessage);

// anonymous function:


// calling handleUserLogin with its 2 parameters userName and UserRole
// Call "handleUserLogin" again but this time write the callback function as an anonymous function inside the function call 
// callback-function is arrow function
handleUserLogin((userName, userRole) =>
// this is the return of the callback function:
{
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
})


