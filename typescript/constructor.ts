class Employee {
  constructor(public name:string, public age:number, private loc:string) {}

  getValue() {
    console.log(this.name, this.age, this.loc);
  }
}

let emp = new Employee("bis", 30, 'hawal');
emp.getValue();
