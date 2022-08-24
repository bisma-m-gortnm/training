// increase code usability, readability and we can use less  code at multiple places

//   ek type ko as a variable declarae karay aur baad mai usko reuse karay

type varType = number | string | boolean | undefined;

//  let a: varType = 10;
//  let b : varType =undefined
//  let c :varType = true
//  let d:varType ="bisma"

let a: varType;
let b: varType;
let c: varType;
let d: varType;

let f = prompt("enter yor choice");

console.warn(typeof f)

switch (typeof f) {
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
