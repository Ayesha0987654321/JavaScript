// let i = 2;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// const arr = [12, 32,45,16];
// // let j = 0;
// while(i < arr.length){
//     console.log(arr[i]);
//     i++;
// }


// //Nesting the arrays
// while (i <= 4){
//     console.log(`Table of ${i}`);
//     let j = 1 ; 
//     while(j <= 10){
//         console.log(`${i} x ${j} = ${i*j}`)
//         j++;
//     }
//     console.log("--------------------------------------------------------")
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }while( i <= 5);



// Fizz Buzz Chanllenge
for(let i =2 ; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
        continue;
    }
    else if(i % 3 == 0){
        console.log("Fizz");
        continue;
    }
    else if(i % 5 == 0){
        console.log("Buzz");
        continue;
    }
    console.log(i);
}