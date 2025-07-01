
let x;
const berries = ["strawberry" , "blueberry" , "rasberry"];
const fruits = ["apple" , "orange" , "Pear"];
// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits , berries];
x = allFruits;
x = allFruits[0][2];


//Concat th earray is different from putting the array into another array like in push function
//  result is a Single array
x = fruits.concat(berries); 
//Spread Operator(....) use woth arrays as well as objects
 x = [...fruits , ...berries];

 //Flatten the array
 let arr = [32 , 45 ,[31 , 5 ,6] , 89 , [90 , 50]];
 x = arr.flat();//make the  nested array as a single array

 //static method on array object
 x = Array.isArray(fruits); // to check whether something in the array

 x = Array.from('ayesha') ; //create an array of value 

 const a = 9;
 const b = 90;
 const c = 19;
 x = Array.of(a , b ,c);

console.log(x);
const array = [1,2,3,4,5];
array.unshift(0);
array.push(6);
let y = array.reverse();
console.log(y);




 
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9];
const arr3 = arr1.concat(arr2);
x = arr3.splice(4,1);
console.log(arr3);