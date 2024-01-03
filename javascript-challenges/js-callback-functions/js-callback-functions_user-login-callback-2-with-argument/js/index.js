console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}


// The exercise starts here!

// this function-call returns a welcome message console log
// this function-call calls the userName parameter
function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + "! You are logged in now")
}

// the named callback-function:
handleUserLogin(showWelcomeMessage)

// the anonymous callback-function:
// writing inside the  function-call!!

handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now`)
})

