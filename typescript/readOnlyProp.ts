class Department{
  private  subject='science';
   readonly section='electronics'

   constructor(){
    console.log(this.subject);
    
   }
}

let dept = new Department;

// console.log(dept.subject);------------cannot acces s
console.log(dept.section);

