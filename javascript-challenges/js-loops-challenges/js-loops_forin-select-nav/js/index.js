console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
// languages is an object so only for...in works!

for (let languageOption in languages) {
  console.log(languageOption);

  const optionElement = document.createElement("option")
  optionElement.value = languageOption
  optionElement.textContent = languages[languageOption]

  select.append(optionElement)
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (const keysInsideTheObjects in nav) {
  const navUlListItem = document.createElement("li");
  const anchorTagOfListItem = document.createElement("a");

  // anchorTagOfListItem.(href = name of the key inside the object:)href = ...
  // ... <nav> -> keysInsideTheObjects (href and text) ...
  // we get the value of href&text with nav[keysInsideTheObjects].text & .href
  navUlListItem.textContent = nav[keysInsideTheObjects].text
  anchorTagOfListItem.href = nav[keysInsideTheObjects].href;

  ul.append(navUlListItem);
  navUlListItem.append(anchorTagOfListItem);
}
// --^-- write/change code here --^--
