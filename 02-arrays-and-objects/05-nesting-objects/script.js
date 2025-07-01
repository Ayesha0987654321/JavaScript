
//object literals
// const todo={};
//object constrictor
const todo = new Object();
todo.id = 1;
todo.name  = 'ayesha';
todo.completed=false;
x = todo;

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
const obj1  = {a:1,b:2};
const obj2 = {c:3,d:4};

const obj3 = {obj1 , obj2};
const obj4 = {...obj1 , ...obj2};//spread operator

const obj5 = Object.assign({},obj1 , obj2);
  const todos =[
    {id:1, name:'buy Milk'},
    {id:2, name:'buy straberry'},
    {id:3, name:'buy Melon'},
  ];
x = todos;
x = todos[0].name;
x = Object.keys(todo);
x = Object.values(todo);
x = Object.keys(todo).length;
x = Object.entries(todo);
x = todo.hasOwnProperty('name');
console.log(x);