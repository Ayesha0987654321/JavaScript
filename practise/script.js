// let prices = [4000 , 2000 , 3000 , 40000];

// let discountArray=[];
// for(let price of prices){
//      let discountAmount = price*(30/100);
//      let totalAmount = price - discountAmount;
//      discountArray.push(totalAmount);
// }
// console.log(prices);
// console.log(discountArray);



// for(let price of prices){
//      let discountAmount = price*(30/100);
//      let totalAmount = price - discountAmount;
// //      console.log(`${price} after discount is ${totalAmount}`);
// // }

// //orignal price

// less than 30 percenten add 100 and less than 50 add 200\


let name = "ayesha";
let reverseName = "";
let length = name.length;
for(let i = length-1 ; i >= 0 ; i-- ){
     reverseName += name[i];
}
console.log(reverseName);


// let a = 20;
// let b = 10 ;
// console.log(`sum of ${a} and ${b} = ${a+b}`);   //output = 30 
// console.log(`sunstraction of ${a} and ${b} = ${a-b}`);  //output = 10
// console.log(`Multiplication of ${a} and ${b} = ${a*b}`);  //output = 200
// console.log(`division of ${a} and ${b} = ${a/b}`);    //output = 2
// console.log(`exponention of ${2} and ${4} = ${2**4}`);    //output = 16


//string   let name = "Ayesha";
//Number  let marks = 12;
//boolean let bool = true;


// There are two variable scope one is function/global  scope and other is blockscope/local scope
// let and const have block scope they are accessible only the block of code where they are define
// let marks;
// if(marks > 20){
//      let percentage = 20;
// }
// console.log(percentage); // we cannot access percentage varible outside the if block because they have block scope it gives the refference error  is we create the variable outside any block of code then have global scope 


// var have function scope if we create a  variable with var key variable inside the if block of code then we can access that variable outside the if block bcz var have function scope an global scope but if we create a variavle with var keyword inside the function we cannot acces that variable outside the function bcz var have function scope


// function sum(a , b){
//     var total = a + b;
// }

// console.log(total); // this gives the refference error 



let prices = [1200 , 1300 , 600 , 500 , 100 , 1500];
const orignalPrice = 1500;
let newPriceArray = [];
for(let price of prices){
     let percentage = (price / orignalPrice) * 100;
     let newPrice;
     console.log(percentage);
     if(percentage <= 30){
          newPrice = price + 100;
          newPriceArray.push(newPrice);
     }
     else if(percentage <= 50){
          newPrice = price + 200;
          newPriceArray.push(newPrice);
     }
     else{
           newPriceArray.push(price);
     }

}

console.log(newPriceArray);