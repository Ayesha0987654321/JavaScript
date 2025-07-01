
 let x ;
 const name = 'Ayesha';
 const age = 30;
 x = 'Hello my name is ' + name + ' . My age is ' + age + ' years old .';
 

 // Tempelate literals Or tempelate strings
 x = `Hello my name is ${name}  and my age is ${age} years old `;

 //String properties and method
 const s = 'Hello WOrld'; // what a java script wrapper does is   s =   newString('hello world) create a object
  x = s.length; // we donot put the paranthesis bcz length is  a property not a method

  //Access value by key or indexing
  x = s[0];

  //prototype
   x = s.__proto__;
   console.log(x);

   x = s.toUpperCase();

   x = s.toLowerCase();
   x = s.charAt(2);

   x = s.indexOf('H');
   x = s.substring(0,4);
   x = s.substring(7);
   x = s.slice(0,5);
   x = '            Hello world';
   x = x.trim();
   x = s.replace('WOrld' , 'Ayesha');
   x = s.includes('Hello');
   x = s.valueOf();
   x = s.split('');

   w = 'developer';
   x = w.charAt('0').toUpperCase() + w.substring(1);
   
  console.log(x);




