let x;

const arr = [21 , 31 , 45 ,45 , 67];
// arr.push(90);
// arr.pop();

// ///add the elment at the start of the arraat
// arr.unshift(2);
// //pop the element at the beginning of the array
// arr.shift();

// //reverse the array
// arr.reverse();


//get something from the array a value 
 x  = arr.includes(2);
 x = arr.indexOf(21); // if element is not in array gve -1
x = arr.slice(1 ,4);//does not change the initial array 
// x = arr.splice(1,3);//does change the initial arrary 
//  x = arr.splice(3,1); //second numbe is how much elemnt we want to pluck
x = arr.splice(1,3).reverse().toString().charAt(1);
console.log(x , arr);