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
