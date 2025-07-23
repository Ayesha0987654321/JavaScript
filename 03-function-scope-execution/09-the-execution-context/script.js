// the execution context   somethimg happen behind the scene 
//execute line by line
//There are two phases when two execution context is created 
//memory creation phase   donot actually execute the code   create the global object (browser =  object  , Node.js = global )    2 create this object and bind it to the global object  3 set up memory heap for variables and function referrences  4 store the function and variables in global execution context and set to undefined

//execution phase  1 execute the code line by line 2 create a new execution context for each function call



let x = 100; 
let y = 50; 

function getSum(n1 , n2){
    let sum = n1  + n2;
    return sum;
}
let sum1 = getSum(x , y);
let sum2 = getSum(12 , 4);

// creation phase
// x variable is allocated memory stores and store undefined
// y variable is allocated memory and stror undefined
// getSum function is allocated memoryandstoes store function defination
// sum1 variable is allocated memory and stores undfined
//sum2 variable is aloaed memory and stores undefind
// //Execution Phase
// line 1 place the value of 100 into x variable 
// Line 2 palce the value of 50 int oy variable
// line 3 skip the function bcz there is nothimg to execute
//line 7 invokes the getSum function and create a new function execution context
//nested creation function 
//line3 n1 and  n2 variables are allocated memory and stores undefined
//line 4 sum variable is allocated memory and stores undefined
//function exeution phase 
// line 3  n1 and n1 assigned values
// line 4  calculation is done and 150  is assigned to sum variable
// line 5 return tell the global ec to the globalec with the  value of sum(150)
//line 7 retrned sum value is put into sum1 variable
//line 8 open up the new execution context and do the same thing with different variables