/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

const secondInput = document.createElement("input")
secondInput.type = "text";
const form = document.querySelector('[data-js="form"]')
form.append(secondInput)

const switchButton = document.createElement("button")
switchButton.textContent = "switch button"
form.append(switchButton);

uppercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
});

switchButton.addEventListener("click", (e) => {
  e.preventDefault();
  // variables for the first inserted values in the input fields:
  const firstValueOfInputFieldOne = firstInput.value;
  const firstValueOfInputFieldTwo = secondInput.value;
  // switching the values:
  secondInput.value = firstValueOfInputFieldOne;
  firstInput.value = firstValueOfInputFieldTwo;
})
