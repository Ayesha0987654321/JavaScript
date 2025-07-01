// for([initialExpression];[conditionalExpression];[incremnetalExpresssion])
//     statement;
//Initial Expression initial Variable
//Conditional Expression - condition that the loop wil run through as long as it met or until the condition is false
//incremental Expression -expression that will be executed after each iteration
//statement - Expression that will Be executed  every time the loop run 
// to execute the block of code follow  the syntax{}

// we can not put const with the variable in for loop
for(let i = 3 ; i <= 10 ; i++){
    if(i == 7){
        console.log(`${i} is my lucky number`);
    }
    else{
        console.log("Number "  + i);
    }
   
}
//Nest Loop
for(let i = 2 ; i < 5 ; i++){
    console.log(`table of ${i}`);
    for(let j = 1; j <= 10; j ++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("-------------------");
}
//loop through an array
const arr  = ['apple' , 'banana' ,'orange', 'kiwi'];
for(let i of arr){
    console.log(i);
}

for(let i = 0 ; i < arr.length ; i++){
    console.log(`${i} is ${arr[i]}`);
}