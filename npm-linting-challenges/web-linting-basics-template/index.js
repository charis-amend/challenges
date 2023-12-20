function toggleButton(cards) {
  const card = document.querySelectorAll('[data-js="card"]');
  const buttons = card.querySelectorAll('[data-js="buttons"]');
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = cards.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    buttons.addEventListener('click', () => {
      link.classList.toggle('hide');
      arrow.classList.toggle('rotate');
    });
  });
}
console.log("another change...")