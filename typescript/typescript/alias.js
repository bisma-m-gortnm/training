// increase code usability, readability and we can use less  code at multiple places
//  let a: varType = 10;
//  let b : varType =undefined
//  let c :varType = true
//  let d:varType ="bisma"
var a;
var b;
var c;
var d;
var f = prompt("enter yor choice");
console.warn(typeof f);
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
