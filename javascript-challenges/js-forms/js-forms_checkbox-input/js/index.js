console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const sucessMessage = document.querySelector('[data-js="success"]');

function hideSucessMessage() {
  sucessMessage.setAttribute("hidden", "true");
}
function showSuccessMessage() {
  sucessMessage.removeAttribute("hidden")
}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();
hideSucessMessage();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  if (!tosCheckbox.checked) {
    showTosError();
    return;
  }

  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  showSuccessMessage();
});

tosCheckbox.addEventListener("change", (e) => {
  if (!tosCheckbox.checked) {
    return showTosError()
  } else { hideTosError(); }
})