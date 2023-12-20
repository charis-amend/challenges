console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});
// const onlyCardWithIdTwo = cards.filter((card) => card.id === "2");
// console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});
// console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((card) => !card.isBookmarked);
// !card.isBookmarked is now false
// console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) =>
    card.isBookmarked
    && (card.tags.includes("html") || card.tags.includes("js"))
);
// all cards with tags that are bookmarked only use card.isBookmarked 
// if the card hast the tag html or (use -> "||" ) a js tag: put in one () because card.isBookmarked needs to be always true

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
