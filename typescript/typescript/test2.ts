
type varType = number | string | boolean | undefined;

let a = "54as";

console.log(typeof a)

switch (typeof a) {
  case 'number':
    // e='number'
    console.warn("number type");
    break;
  case "string":
    console.warn("string type");
    break;
  case "undefined":
    console.warn("undefined type");
    break;
  case "boolean":
    console.warn("boolean type");
    break;
  default:
    break;
}
