// ek function jis type kii value return karta hain wahi uska function type hota hain
//  if  a fun return numeric value , then that func is numeric type  and so on

// method 1
// function sum(a,b):number{
//     return a+b
// }

// console.log(sum(10,10))

// method 2
let x = 10
let y = 'hi'

function sum1():string | number {
    return y
}
console.log(sum1())