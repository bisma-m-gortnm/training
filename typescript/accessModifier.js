"use strict";
class Student {
    constructor() {
        this.name = '';
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
        this.getNameLength();
    }
    // private function
    getNameLength() {
        console.log(this.name.length);
    }
}
let u = new Student;
u.setName('bisma');
// u.name='manzoor'-------------------private property
u.getName();
// u.getNameLength()
