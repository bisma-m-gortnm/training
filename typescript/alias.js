"use strict";
// increase code usability, readability and we can use less  code at multiple places
Object.defineProperty(exports, "__esModule", { value: true });
// or
// type varType = any;
//  let a: varType = 10;
//  let b : varType =undefined
//  let c :varType = true
//  let d:varType ="bisma"
let a;
let b;
let c;
let d;
//  a= {
//   name:'bisma',
//   age:20
//  }
console.warn(typeof a);
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
