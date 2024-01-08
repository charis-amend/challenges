console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [ ] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [ ] Assign the second button to a variable.
– [ ] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element

*/

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

const form = document.querySelector('[data-js="form"]')
const secondButton = document.createElement("button");
form.append(secondButton);
secondButton.textContent = "lowerCase Button"


uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

secondButton.addEventListener("click", () => {
  event.preventDefault();
  input.value = input.value.toLowerCase();
})
