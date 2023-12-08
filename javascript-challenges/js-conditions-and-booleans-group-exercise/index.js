const allSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

let SheepOnTheField = allSheep.filter(Boolean);
let finalNumberOfSheepOnField = SheepOnTheField.length;
console.log("shows present sheep:", finalNumberOfSheepOnField);

// count positives exercise
// For input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// You should return [10, -65].

// Return an array,
// 1. first element is the count of positives numbers
// 2. the second element is sum of negative numbers.
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

const arrayAllNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
];

// find out cube shape
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length _ Width _ Height
// we only have the volume, and the length of a single side!

// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// const volume ist just one var we know
let side;
let singleside;
// Cuboid is the total number of the volume of the cube

// create a function (isCube is name of the function)
// checking with if (volume==3*singleside)

function isCube(volume, side) {
  if (volume <= 0 || side <= 0) {
    return false;
  }

  const cuboid = Math.cbrt(volume);

  if (cuboid === side) {
    return true;
  } else {
    return false;
  }
}
console.log("this cube has the volume of:", cuboid);
