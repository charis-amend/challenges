console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (let itemLanguage of programmingLanguages) {
  console.log(itemLanguage)
  const listItem = document.createElement("li");
  ol.append(listItem);
  listItem.textContent = itemLanguage;

}
// --^-- write/change code here --^--
