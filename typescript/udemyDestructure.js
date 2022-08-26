var TodayDate = {
    date: new Date,
    weather: 'cold'
};
// const logWeather =(TodayDate:{date :Date, weather:string}) =>{
//     console.log(TodayDate.date);
//     console.log(TodayDate.weather);
// }
// destructing with annotation
var logWeather = function (_a) {
    var date = _a.date, weather = _a.weather;
    console.log(date);
    console.log(weather);
};
logWeather(TodayDate);
