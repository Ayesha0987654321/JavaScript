//iife to avoid  global scope polution
//There is two js file and we link them in html if we create a globa variable there then we can not create a global variable  of same name in another script we canhandle this by iife

(function (){
    const user = 'john';
    console.log(user);
    const hello = () => console.log('Hello from the iife');
    hello();
})();

(function (name){
     console.log('HELLO ' + name);
})('Jhon');

// function challenges

const getCelsius = celsius => (celsius-32) * 5/9 ;
console.log(`The temperature is ${getCelsius(37)} \xB0C`);  

const getMIN = (numbers) =>{
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return {
        min,max
    };
}
 const numbers = [12 , 32, 8 ,90 ,999 , 888999 , 1 ,0 ];
console.log(getMIN(numbers));

(function (length , width){
    console.log(`Area of the rectangle is ${length * width}`);
})(2 , 7 );