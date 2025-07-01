function registerUser(user){
    return user + ' is register';
}
console.log(registerUser('Ayesha'));


function registerUser(user){
    if(!user){
        user = 'Bot'
    }
    return user + ' is register';
}
console.log(registerUser());


function registerUser(user = 'Javeria'){
    // if(!user){
    //     user = 'Bot'
    // }
    return user + ' is register';
}
console.log(registerUser());

// rest param
function sum(...numbers){
   
    let total = 0;
    for(let i  of numbers){
       
        total = total + i;
    }
    return total;
}
console.log(sum(1,2,3) );

// object as paramters

function loginUser(user){
    return `The User ${user.name} with the id of ${user.id} is logged in . `;
}
const user = {
    id : 1 ,
    name : 'json'
}
console.log(loginUser(user));
console.log(loginUser({
     id : 2,
     name : 'brad'
}));
//Arrays as  parameters
function getRandom(arr){
    const randomIndex =     Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}
const arr = [1 ,2,3,5,7 ,8];
console.log(getRandom(arr));