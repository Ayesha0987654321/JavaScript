//type conversion explicity coverting the value from one type to another type
let amount = 'hello';
//convert string to number
amount = parseInt(amount);
console.log(amount , typeof amount);
//amount  = +amount;
//amount = Number(amount);

//convert numbr to string 
let marks = 200;
// marks = marks.toString();
// marks = String(marks);
// console.log(marks , typeof marks);

//convert string to decimal 
let percentage = '77.9';
// percentage = parseFloat(percentage);
// console.log(percentage, typeof percentage);

//Convert number into boolean
// let number = 0;
// number = Boolean(number);


// number or string are primitive data types and method work on object why does m to string function work on objext 
//Javascript create a temporay wrapper of the object

//if   we convert the string into number but that string contain character not number than the output is special number NAN nan is a property of global window and it is a not writeable property  there are five different type of function that return Nan value