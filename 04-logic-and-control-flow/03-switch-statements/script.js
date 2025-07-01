//Switch Statements 
const d = new Date(2023, 12, 20 , 10 , 0, 0);
const month = d.getMonth();
switch (month){
    case 1:
        console.log('Its a january');
        break;
    case 2:
        console.log('Its a February'); 
        break;
    case 3:
        console.log('Its a march');   
        break;
    default:
        console.log("Its not a January , Feburary  and march");    
}


const hours = d.getHours();
switch(true){
    case hours < 12:
        console.log("Goog Morning");
        break;
    case hours < 18:
        console.log("Good after noon");
        break;
    default:
        console.log("good Night");    
}

// Calculator Challenge
function Calculator(num1 , num2 , operator){
   if(operator == '+'){
    console.log(`${num1} ${operator} ${num2} = ${num1+num2}`);
  }
else if(operator == '-'){
    console.log(`${num1} ${operator} ${num2} = ${num1-num2}`);
}
else if(operator == '*'){
    console.log(`${num1} ${operator} ${num2} = ${num1*num2}`);
}
else if(operator == '/'){
    console.log(`${num1} ${operator} ${num2} = ${num1/num2}`);
}
else{
    console.log("Invalid Operator");
}
}
Calculator(1,2,'/');