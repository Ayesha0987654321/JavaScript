console.log(20 > 90 && 30 < 60);
console.log(20 > 90 || 30 < 60);

// && - this will return first falsy value or last one
let a;
a =  10 && 20;
a = 10 && 20 && 80;
a = 10 && 0 && 20 && 80;
a = 10 && '' && 0 && 20 && 80;
console.log(a);

// const post =  [];
// console.log(post[0]);
// post.length > 0 && console.log(post[0]);

// ||-this return the  first Thruthy or the last value
let b;
b = 10 || 80;
b = 0 || 1;
b = 0 || ' '|| 0;
console.log(b);
 

//?? -returns the right side operator when the left operand is null and undefined
let c;
c = 20 ?? 10;
c = null ?? 90;
c = 70?? 0;
// c = 40 ?? 30;
console.log(c);