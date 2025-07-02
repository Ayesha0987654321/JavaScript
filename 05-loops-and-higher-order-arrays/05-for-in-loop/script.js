//loop through object

const students = {name: "ayesha" , age :  12};
for(let student in students){
     console.log(student , students[student]);
}

// loop through array
const colors = ["red" , "blue", "green" , "white"];
for(let key in colors){
    console.log(key , colors[key]); // return the index
}