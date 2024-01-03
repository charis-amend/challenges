// let data = function sum(a, b) {};
// let data = 123;
// let data = "test";
// let data ; --> is undefined
// let data = 9007199254740991n; --> Big Int
// let data = null; 
//      needs this: case data === null:
//     console.log("Null!");
//     break;
// let data = [2, 4, 5]
// let data = true;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;

  case "number":
    console.log("number!");
    break;

  case "NaN":
    console.log("not a number!");
    break;

  case "string":
    console.log("string!");
    break;

  case "boolean":
    console.log("boolean!");
    break;

  case "bigint":
    console.log("BigInt!");
    break;

  case "function":
    console.log("function");
    break;

  case "object":
    if (Array.isArray(data)) {
      console.log("Array!");
    } else {
      console.log("Object!");
    }
    break;

  default:
    console.log("i have no idea!");
    break;
}
