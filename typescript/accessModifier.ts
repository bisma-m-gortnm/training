class Student{
    private name=''

    setName(name:string){
        this.name=name;
    }
    getName(){
      console.log(this.name);
      this.getNameLength()
    }

    // private function
    private getNameLength(){
        console.log(this.name.length);
        
    }

}

let u = new Student;
u.setName('bisma')
// u.name='manzoor'-------------------private property
u.getName()
// u.getNameLength()
