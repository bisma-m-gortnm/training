// function sum(a:number | string ,b:number | string){
// //     if(typeof a ==='number' && typeof b === 'number')
// //     {
// //         return a+b;
// //     }
// //     if( typeof a === 'string' && typeof b === 'string'){
// //         return a+b
// //     }
// if(typeof a ==='number' && typeof b ==='number'){
//     return a+b;
// }
// else{
//     return a.toString() + b.toString()
// }
// }
// console.log(sum(10,20))
// console.log(sum('bismah', 'manzoor'))
function sum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'boolean') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(sum(90, 10));
console.log(sum(true, 10));
console.log(sum("hello ", " world"));
