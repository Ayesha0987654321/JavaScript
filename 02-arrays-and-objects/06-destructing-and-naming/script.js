const firstName  = 'ayesha';
const lastName = 'javed';
const age = 30;
const person ={
    firstName,
    lastName,
    age
};
const todo={
    id : 1 ,
    tittle:'take out trash',
    user:{
        name:'ayesha'
    }
}
// const id = todo.id;
// const {id , tittle , user} = todo; // pulling element out of the object
// console.log(id , tittle , user);
const {id :todoId , tittle , user:{name}} = todo; // pulling element out of the object

// destructure the array
const arr = [23 , 45,67 ,80 ,90 ,0];
const [first , second ,...rest] = arr;
console.log(first , second,rest);
