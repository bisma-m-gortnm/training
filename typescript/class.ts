class Users{
    name='';
    email='';

    addUser(user:any){
        return `${user} is added`
    }

    removeUser(user:any){
        console.log(`${user} is removed`);
        
    }

}

let User1 = new Users()
let result = User1.addUser('anil')
console.log(result)

let remv = User1.removeUser('peter')
// console.log(remv);

