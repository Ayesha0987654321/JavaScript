const numbers  = [1,2,3,4,5,,6,7,8,9,10];

const sum = numbers.reduce(function (accumulator , currentValue){
        return  accumulator + currentValue
} , 0);
console.log(sum);

const cart = [
    {id : 1 , name:"product 1" , price : 1200}, 
    {id : 2 , name:"product 2" , price : 200}, 
    {id : 3 , name:"product 3" , price : 1400}, 
    {id : 4 , name:"product 4" , price : 1600}, 
];
const total=cart.map((item)=>{return item.price}).reduce((accumulator , currentValue)=>accumulator+currentValue,0);
console.log(total);

const total2=cart.reduce((accumulator , product)=>accumulator+product.price,0);
console.log(total2);

const people = [
    {
        firstName :"Jhon",
        lastName : "bob",
        age: 23,
        email: "asd@gmail.com"
    },
    {
        firstName :"Jhon",
        lastName : "khan",
        age: 56,
        email: "asd@gmail.com"
    },
    {
        firstName :"Jhon",
        lastName : "Doe",
        age: 3,
        email: "asd@gmail.com"
    },
    {
        firstName :"Jhon",
        lastName : "sain",
        age: 29,
        email: "asd@gmail.com"
    },
]
const youngPeople = people.filter((ppl)=>{
    if(ppl.age <= 25){
        return {
            name : ppl.firstName + ppl.lastName,
            email : ppl.email
        }
    }
});
console.log(youngPeople);


let arr = [12 ,-21 , -2 , 43 , 98];
let sum1 = 0;
for(let i of arr){
    if(i >=0){
        sum1 = sum1 + i;
    }
}
console.log(sum1);


let sum2 = arr.reduce((acc , currentValue) =>{
    if(currentValue >= 0){
        acc = acc + currentValue;
    }
    return acc;
},0
);
console.log(sum2);



const sum3 = arr.filter((num)=> num >= 0).reduce((acc, cur) => acc+cur  , 0);
console.log(sum3);


let fruits = ["apple", "orange" , "banana"];
let capitalize = fruits.map((fruit)=>{
      return fruit[0].toUpperCase() + fruit.slice(1 , fruit.length);
} );
console.log(capitalize);