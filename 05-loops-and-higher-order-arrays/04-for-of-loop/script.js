//Loops through array
const arr = [12, 45,56,87,90];
for( let i of arr){
    console.log(i);
}

const arr1 = [ { name : "ayesha",  city : "Multan", age : 14},{name :"javed" , city:"sadiq abad" ,age:60}];
for(let item  of arr1){
    console.log(item);
}

//loop through string
let str = "Hello World";
for(let letter of str){
    console.log(letter);
}

//loop over maps
const map = new Map();
map.set('name' ,"ayesha");
map.set('age',80);

for(let [key , value] of map){
    console.log(key , value);
}



