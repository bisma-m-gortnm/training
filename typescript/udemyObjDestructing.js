var profile = {
    name: 'bisma',
    age: 70,
    coordinates: {
        lon: 70,
        lat: 60
    },
    setAge: function (age) {
        console.log(this.age);
    }
};
console.log(profile.name);
// destructing one field
var age = profile.age;
console.log(age);
// destructing inner obj
var _a = profile.coordinates, lon = _a.lon, lat = _a.lat;
console.log(lon, lat);
