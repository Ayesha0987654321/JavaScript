//arrow function are more useful bcz they are more compact them  other tyPE
function add(a , b){
    return  a + b;
}

//arrow function
const addition = (a ,b)=>{
  return a+b;
}

// short if  there is only onle expreesionin the function  implict return
const sub  =(a ,b)=> a-b;

// if the function have only one array   leave off pranthesis if there is only on param
const double = a => a* 2;
console.log(sub(2 ,3));
console.log(double(3));

// retuning an object
const createObj = () =>( {
   name : 'Brad'
})

 const numbers = [1 , 6 , 7 ,8 , 9 ,0];
 numbers.forEach(function(n){
     console.log(n);
 });
 // call back function Pass a function in to an other fucntion]
 numbers.forEach( n=> console.log(n));
console.log(createObj());

