const person = {
    name : 'Ayesha',
    age : 20,
    city : 'sadiq Abad',
    address:{
        street : '123 Main Street',
        state  : 'mna'
    },
    hobbies : ["music" ,"gardening"]
};

let x;
x = person.age;
x = person['name'];
x = person.address.state;

x = person.hobbies;
person.name = 'john doe';
delete person.age;
person.hasChidren = true;
person.greet = function(){
    console.log(`hello my name is ${person.name}`);
} 
person.greet();
x = person;
console.log(x);