console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
const firstInput = document.querySelector('[data-js="first-input"]');
const buttonChange = document.querySelector('[data-js="button-uppercase"]')

buttonChange.addEventListener("click", () => {
    let firstInputValue = firstInput.value;
    let changedInputUppercase = firstInputValue.toUpperCase();
    console.log(changedInputUppercase)
})

