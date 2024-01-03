console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

bodyElement.classList.add("dark");
bodyElement.classList.remove("dark");

// adding black backgroundcolor
darkModeButton.addEventListener("click", () => {
    body.classList.add("dark");
});
// adding light backgrounddcolor
lightModeButton.addEventListener("click", () => {
    body.classList.remove("dark");
});
// making the button switch between the options
toggleButton.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
})