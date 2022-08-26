"use strict";
// -------------parent class
class forAll {
    getEmail(email) {
        console.log(`${email}@test.in`);
    }
}
// ------------child class
class Employees extends forAll {
    getEmp(emp) {
        console.log(`${emp} is added as an emplyee`);
    }
}
let E = new Employees();
E.getEmp('bisma');
E.getEmail('bisma1');
// -----------------child class 
class Clerk extends forAll {
    getName(name) {
        console.log(`${name} is added as a clerk`);
    }
}
let C = new Clerk();
C.getName('world');
C.getEmail('world');
