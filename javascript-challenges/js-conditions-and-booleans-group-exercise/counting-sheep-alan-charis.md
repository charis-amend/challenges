# counting sheep a guide how to do that

1. we have a list of sheep
2. some sheep are on the field
3. some sheep are not one the field
4. to describe the sheep that is on the field we say true
5. to describe the sheep that are not on the field we say false.

6. this is the mentioned list of ALLsheep:

```js
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
```

7. we are counting the list of allSheep
   const allSheep;
8. we have a variable for the sheep on the field
   let SheepOnTheField;
9. then we count the number of sheeps on the field with a filter
   let SheepOnTheField = allSheep.filter(Boolean);
   for the true sheep and false sheep we need a boolean filter
10. we create a variable for the finalnumber of sheep on the field
    let finalNumberOfSheepOnField;
11. we calculate the number by using .length
    let finalNumberOfSheepOnField = SheepOnTheField.length;

12. to test if we are correct, we print our results.
13. you do this with console.log
    console.log("shows present sheep:", finalNumberOfSheepOnField);

```js
let SheepOnTheField = allSheep.filter(Boolean);
let finalNumberOfSheepOnField = SheepOnTheField.length;
console.log("shows present sheep:", finalNumberOfSheepOnField);
```
