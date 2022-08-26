// -------------parent class
class forAll{
    getEmail(email:string){
        console.log(`${email}@test.in`);
        
    }
}

// ------------child class
class Employees extends forAll{

    getEmp(emp:string){
        console.log(`${emp} is added as an emplyee`);
        
    }
}

let E = new Employees();
E.getEmp('bisma')
E.getEmail('bisma1')

// -----------------child class 
class Clerk extends forAll {
    getName(name:string){
        console.log(`${name} is added as a clerk`);
        
    }
}
let C = new Clerk()
C.getName('world') 
C.getEmail('world')