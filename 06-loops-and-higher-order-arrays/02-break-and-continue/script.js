for(let i = 0 ; i < 10 ; i++){
    if(i == 7){
        console.log("Breaking.......");
        break;
    }
    console.log(i);
}


for(let i = 0 ; i < 10 ; i++){
    if(i == 7){
        console.log("Skiping 7.......");
        continue;
    }
    console.log(i);
}