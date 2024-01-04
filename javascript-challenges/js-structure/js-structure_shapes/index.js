import { getRandomColor } from "./utils/randomColor.js"
import Circle from "./components/Circle/Circle.js"
console.clear();


const root = document.getElementById("root");


// function Circle() {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.addEventListener("click", () => {
//     circle.style.backgroundColor = getRandomColor();
//   });
//   return circle;
// }
const circleElement = Circle();
root.append(circleElement)


const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = "#ccc";
  getRandomColor
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = "#ccc";
  getRandomColor;
});

root.append(circleElement, square, pentagon);
