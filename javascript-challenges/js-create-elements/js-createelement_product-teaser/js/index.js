console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

// creating a variable for the article class=product with all things
const newProductTeaser = document.createElement("article");

newProductTeaser.classList.add("product");

newProductTeaser.innerHTML = `
<div class="product__body">
        <div class="product__text-container">
        <h2>${name}</h2>
          <ul class="product__categories">
          <li class="product__category">${category1}</li>
          <li class="product__category">${category2}</li>
          <li class="product__category">${category3}</li>
          </ul>
          <p>${description}</p>
        </div>
        <div class="product__image-container">
          <img class="product__image" src="${imageSrc}"/>
        </div>
      </div>
      <footer class="product__footer">
      <span class="product__price"> ${price}</span> 
      <button type="button" class="product__buy-button" id=buyButtonForSecondProductTeaser>Buy</button>
      </footer>

`
document.body.append(newProductTeaser);

// add an event listener to the "buy" button of the second product teaser. 
// When clicking the button, the product's name and price should be logged to the console.

// defining new variable for buyButtonForSecondProductTeaser 
// AND ADD a separate ID in innerHtml above, not in the real html file in this folder!!!!
// then reference the ID from the 2nd buy button in queryselector
// BUT MAKE SURE TO USE ID, if you use class you wont get css styling

const buyButtonForSecondProductTeaser = document.querySelector("#buyButtonForSecondProductTeaser");


buyButtonForSecondProductTeaser.addEventListener("click", (event) => {

  const name = "Queen angelfish";
  const price = "149,99 €";
  console.log("When clicking this button, the product's name and price are logged", name, price
  );
});