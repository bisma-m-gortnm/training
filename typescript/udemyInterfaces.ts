interface Trend {
    title:string,
    cost: number,
    color: string,
    available :boolean,
    launch : Date
}
const clothes ={
    title:'shirt',
    cost: 100,
    color:'red',
    available: true,
    launch : new Date()

}

const funCloth = (trend:Trend)=>{
    console.log(`${trend.title}, ${trend.cost}, ${trend.color}, ${trend.available}, ${trend.launch}`);
    
}

funCloth(clothes);