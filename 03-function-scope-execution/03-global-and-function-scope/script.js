//global variables are accessible from anywhere in code

// window.alert('hello world');

console.log(window.innerWidth);
console.log(innerWidth);


const x = 100;
console.log(x , " is on global scope");

function run(){
    console.log(window.innerHeight);
    console.log(x , " is on function scope");
}
run();
if(true){
    console.log(x , " is in block scope");

}
function add()
{ 
    const x = 1;
    const y = 40;
    console.log( x  + y);
} 
// console.log(y);// y is in the block scope
add();