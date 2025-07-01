//premitive data types are stored in stack and accesed fronm it 
const name = 'ayeshaa';
const age = 40;

//Referrence data types are stored in heap and accessed by referrence
const person ={
    name: 'brad'
};
let newName  = name;
newName ='javed';
console.log(name , newName);

var  newPerson = person;
newPerson.name = 'Bradely';
console.log(person , newPerson);  // the ans of both person and newperson is sam ebcz both are referring to the same object  in the heap memory

