const profile ={
    name: 'bisma',
    age:70,
    coordinates:{
        lon:70,
        lat:60
    },
    setAge (age:number){
        console.log(this.age);
        
    }
}


console.log(profile.name);

// destructing one field
const {age}:{age:number} = profile;
 console.log(age);
 

// destructing inner obj
const {coordinates:{lon,lat}}:{coordinates:{lon:number, lat:number}} = profile;
 console.log(lon,lat);
 



