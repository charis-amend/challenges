console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');



addButton.addEventListener("click", (event) => {
  // event.preventDefault();
  // telling DOM to create new list item in toast container
  const newToastMessage = document.createElement("li");
  // connecting it with the classList 
  // explanation: The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. 
  // This can then be used to manipulate the class list. In this case adding something!
  newToastMessage.classList.add('toast-container__message');

  // adding toastmessage to toast container and append it to DOM
  toastContainer.append(newToastMessage);

  // adding the text to the newToastMessage:
  newToastMessage.textContent = "i am a new toast message";


});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";

});
