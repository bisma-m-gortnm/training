function sum(a:number |string ,b:number| string){
   if(typeof a === 'number' && b ==='number'){
    return a+b;
   }
   else{
     return a.toString()+b.toString()
   }
}

console.log(sum(10,10))
console.log(sum('bisma','manzoor'))

console.log("helo worls")