const TodayDate = {
    date : new Date,
    weather:'cold'
}

// const logWeather =(TodayDate:{date :Date, weather:string}) =>{
//     console.log(TodayDate.date);
//     console.log(TodayDate.weather);
    
// }

// destructing with annotation
 const logWeather = ({date,weather}: {date :Date , weather:string}) =>{
    console.log(date);
    console.log(weather);
    
    
 } 
logWeather(TodayDate)