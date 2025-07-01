// || assigns the right side only if left side is false
// && assigns the right side only if left side is truth
//?? assigns the right side only if the left side is null and undefined

let a = false;
if(!a){
    a = 10;
}
a = a || 20;
console.log(a);

a = 10 || 90;
console.log(a);

a = 0 && 10;
console.log(a);

a = 80?? 19;
console.log(a);