const email = "ayesha@gmail.com";
//if we put some thinn in if statement js hange it into true and false
if(email){
    console.log('You are passed in email');
}
console.log(Boolean(email));

const x = null;
if(x){
    console.log("This is truthy");
}else{
    console.log("This is falsy");
}

console.log(Boolean(x));

//falsy value
//0 
//false
//"" or '' empty string
//undefined
//Nan
//null


//Truthy Values 
//- Every thing else that is not falsy
//-true
//-1
//'0' o in a string
//' ' space in a string
//'false in a string'
//[] empty array
//{}empty object
//function () {}

//Truthy and Falsy caveats
const children = 3;
if(!isNaN(children)){
    console.log(`you have ${children} children`);
}else{
    console.log('please enter a number of children');
}

// checking for empty arrays
const arr = [];
if(arr.length < 0){
    console.log('post list')
}
else{
    console.log('no post to list ')
}
// cheking for empty objects
const obj = {

};
const y = (Object.values(obj).length);
if(y){
    console.log('there is an object')
}
else{
    console.log('The object is empty');
}

//loose equality (==)
console.log(false == 0);
console.log('' == 0);
console.log(null == undefined);

console.log(false === 0);
console.log('' === 0);
console.log(null === 0);


