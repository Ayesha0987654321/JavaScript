// function first(){
//     console.log("First");
// }
// function second(){
//     console.log("second");
// }
// function third(){
//     console.log("third");
// }

// first();
// second();
// third();

function first(){
    console.log("first");
    second();
}
function second(){
    console.log("second");
    third();
}
function third(){
    console.log("third");
}
first();