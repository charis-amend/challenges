console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formInputData = new FormData(event.target)
    const allInputs = Object.fromEntries(formInputData)
    const firstName = form.firstName.value;
    console.log("first name:", firstName, allInputs);

    //calc badness
    let a = parseInt(form.age.value)
    let b = parseInt(form.badness.value)

    const sumAgeBadness = a + b

    console.log("the agebadness sum of ", firstName, "is", sumAgeBadness)
    form.reset();
})