let output;
// output = document.all;
// console.log(output);


// output = document.documentElement;
// console.log(output);

output = document.head;
console.log(output);

output = document.body;
console.log(output);

//to get children  in head and body
output  = document.body.children;
console.log(output);

output  = document.head.children;
console.log(output);
output  = document.body.children;
console.log(output);

output = document.doctype;
console.log(output);

output = document.domain;
console.log(output);

output = document.URL;
console.log(output);


output = document.characterSet;
console.log(output);

output = document.contentType;
console.log(output);

output = document.forms;
console.log(output);

//html collection work as array we can access the specific element
output = document.forms[0];
console.log(output);



output = document.forms[0].id;
console.log(output);

output = document.forms[0].method;
console.log(output);

// output = document.forms[0].action;
// console.log(output);


// output = document.links;
// console.log(output);

// output = document.links[0];
// console.log(output);

// output = document.links[0].href;
// console.log(output);


// document.links[0].id = "goole-link";
// document.links[0].className = "google-class";
// document.links[0].href = "www.facebook.com";


output = document.images;
console.log(output);

output = document.images[0];
console.log(output);

output = document.images[0].src;
console.log(output);

const form =Array.from(document.forms);

form.forEach(element => {
    console.log(element);
});
// document.forms[0].id = "new-id";





// output = document.getElementById('btn');
// let clicked = output.addEventListener('click' , ()=>{
//      output.innerHtm='item added';
// });
// console.log(clicked);