console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  return card.answer
});
console.log(lowerCaseAnswers);

const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`
});
console.log(questionsAndAnswersTogether);
// ["How often can I use <header>? - As often as you like.", ...]


// no3 
// first option:
// const questionAndAnswer = cards.map((card) => {
//   return `question: ${card.question}, answer: ${card.answer}`
// });

// or second option:
// starts with => {} -> we need "return"
const questionAndAnswer = cards.map((card) => {
  return {
    question: `${card.question}`,
    answer: `${card.answer}`
  }
});

// or third option:
// we start with => ( {} ) -> shortcut, we dont need return
// const questionAndAnswer = cards.map((card) => (
//   {
//     question: `${card.question}`,
//     answer: `${card.answer}`
//   }
// ));
console.log(questionAndAnswer);
// [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
