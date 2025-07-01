const d =  new Date(10 ,30 , 2025 , 20 , 0 ,0);
let hours = d.getHours();
console.log(hours);

if(hours <= 12){
    console.log("Good Morning");
    if(hours==6){
        console.log("Wake up Time");
    }
}else if(hours < 18){
    console.log("Good Afternon");
}else{
    console.log("Good Night");
    if(hours >= 20){
        console.log("zzzzzzzzzzzzzzzzzzzzzzzzz");
    }
}
if(hours >= 7 && hours < 15){
     console.log('Its time to work');
}else if(hours === 6 || hours === 20){
    console.log("Its a brush time");
}
