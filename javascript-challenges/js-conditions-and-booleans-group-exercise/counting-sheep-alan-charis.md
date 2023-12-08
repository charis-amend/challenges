# counting sheep a guide how to do that

1. we have a list of sheep
2. some sheep are on the field
3. some sheep are not one the field
4. to describe the sheep that is on the field we say true
5. to describe the sheep that are not on the field we say false.

6. this is the mentioned list of sheep:

```js
const SheepOnTheField = [
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

7. instead of counting, we are gonna write a set of statements.
8. this statement says first:
   1. we define the number of all sheeps with const arrayListofSheep
   2. then we create a name for the sheeps that are on the field this name is const arrayListofpresentSheep
   3. then we can calculate the number of sheeps on the field when we take the name const arrayListofpresentSheep and put a "=" symbol after it
   4. this means equal
   5. after the equal sign (=) we put a filter that shows all the sheep on the field.
   6. this filter looks like this arrayListofSheep.filter(true)
   7. after this filter we directly have to put the length because this shows as the number of the filtered sheep on the field.
   8. to test if we are correct, we print our results.
   9. you do this with console.log
   10. and in this console.log you put the name we created for all present sheep on the field.

```js
const SheepOnTheField = allSheep.filter(Boolean);
const finalNumberOfSheepOnField = SheepOnTheField.length;
console.log("shows present sheep:", finalNumberOfSheepOnField);
```
