"use strict";
class Department {
    constructor() {
        this.subject = 'science';
        this.section = 'electronics';
        console.log(this.subject);
    }
}
let dept = new Department;
// console.log(dept.subject);------------cannot acces s
console.log(dept.section);
