// any and unknown both are almost smae but the difference is that any hides the power of typescript while as unknown strictly  sows us te  power of typescript.


//=--------------------------------------------------------------- use of any----------------------------------------
//  let data : any;
//  data = 10
//  data = 'hello'
//  data = true

//  let item :string

// =============================assigning the one variable into another
//  item = data ;


// --------------------------------------------------------------use of unknown-----------------------------------------------

// let data :unknown;
// data = 10;
// data = 'hello'
// data = true

// let item:string;

// -=====================assign one variable into another it will throw an error because type of item is string one

// item=data;



// ------------------------------how to overcome with this problem----------------
let data:unknown;
data=10;
data='hello'
data = true

let item:string;

if(typeof data === 'string'){
    item=data;
}