
type varType1 = number | string | boolean | undefined;

let j = "54as";

console.log(typeof j)

switch (typeof j) {
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
