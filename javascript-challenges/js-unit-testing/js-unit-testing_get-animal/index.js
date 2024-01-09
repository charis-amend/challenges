export function getAnimal(animalParameter) {

    if (animalParameter === "cats") {
        return 'I totally love cats!'
    }
    // any word entered in the animalParameter will be used
    else if (typeof animalParameter === "string") {
        return `I like ${[animalParameter]}!`
    }
    // if no arguments
    else { return 'I do not like animals at all!' }
}
