"use strict";
class Employee {
    constructor(name, age, loc) {
        this.name = name;
        this.age = age;
        this.loc = loc;
    }
    getValue() {
        console.log(this.name, this.age, this.loc);
    }
}
let emp = new Employee("bis", 30, 'hawal');
emp.getValue();
