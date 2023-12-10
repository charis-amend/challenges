const data = 123;

switch (typeof data) {
  case "undefined!":
    console.log("undefined!");
    break;

  case data === null:
    console.log("null!");
    break;

  case 123:
    console.log("number!");
    break;

  case "notanumber":
    console.log("not a number!");
    break;

  case "string":
    console.log("string!");
    break;

  case true:
    console.log("boolean!");
    break;

  case 567654356787654567898765n:
    console.log("BigInt!");
    break;

  case function () {}:
    console.log("function");
    break;

  case Object:
    console.log("object!");
    break;

  case Array.isArray(data):
    console.log("array");
    break;

  default:
    console.log("i have no idea!");
}
