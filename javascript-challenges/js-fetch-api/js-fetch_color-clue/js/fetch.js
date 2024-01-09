import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;

  try {
    const responseFromAPI = await fetch(colorApiUrl)

    if (responseFromAPI.ok) {
      const colorData = await responseFromAPI.json();
      console.log(colorData);
      let hexValue = colorData.name.closest_named_hex
      console.log(hexValue)
      let nameOfClosestNamedColor = colorData.name.value
      console.log(nameOfClosestNamedColor)
      setColorToGuess(hexValue, nameOfClosestNamedColor);

    }
  } catch (error) {
    console.log("this is an error in the challenge", error)
  }
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
}
