interface Trend {
    title:string,
    cost: number,
    color: string,
    available :boolean
}
const clothes ={
    title:'shirt',
    cost: 100,
    color:'red',
    available: true

}

const funCloth = (trend:Trend)=>{
    console.log(`${trend.title}, ${trend.cost}, ${trend.color}, ${trend.available}`);
    
}

funCloth(clothes);