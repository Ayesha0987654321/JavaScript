const age = 14;

if(age >= 18){
    console.log("you ccan vote!");
}else{
    console.log("you cannot vote");
}
//using a ternary operator

age >= 18 ? console.log("you can vote!") : console.log("You cannot vote");

//Assigning a conditional value to a  variable
const canVote =  age>=18 ? true : false;
const canVote2 =  age>=18 ? 'You can vote!' : 'You can not vote';
console.log(canVote2);

//Multiple statements
const author  = true; 
// let redirect;
// if (author){
//     alert("Welcome to the dashboard");
//     redirect = "/dashboard"
// }else{
//     alert("access denied");
//     redirect  = "/login";
// }

const redirect = author ? (alert("Welcome to the DashBoard"), "/DashBoard"):(alert("Access Denied"),"/login");
console.log(redirect);
//short Hand 
author ? console.log("Welcome to the Dashboard") : null;

author && console.log("welcome to dashboard");