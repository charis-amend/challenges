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

const SheepOnTheField = allSheep.filter(Boolean);
const finalNumberOfSheepOnField = SheepOnTheField.length;
console.log("shows present sheep:", finalNumberOfSheepOnField);
