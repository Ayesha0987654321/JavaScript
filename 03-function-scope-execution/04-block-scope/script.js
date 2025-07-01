const x = 100;
const foo  = 1;
var bar = 2;
if(true){
    // console.log(x);
    const y = 200;
} 
// x is in the  global scope and y is in the block scopr thats why  y is undefined  
// console.log(x + y);
// for(let i = 0; i <=10 ; i++){
//     console.log(i);
// }

// console.log(i);
if (true){
    const a = 100;
    let b = 90 ;
    var c = 89;
}
// console.log(a); a is in the block scope
// console.log(b); b is in block scope 
console.log(c); // var is a function scope

function run(){
    var d = 100;
    console.log(100);
}
run();
// console.log(d); // gives an error bcz d is in function scope
console.log(window);   // global variable var added atomatically into window object