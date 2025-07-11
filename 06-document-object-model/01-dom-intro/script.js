//what is document object model
//structure  that we can interacts with via javascript
//programing interface for web/HTML elements
//include tags attributes and text nodes
//represented as a tree structure

console.log(window.document);
console.log(document);
console.log(document.body);
console.log(document.body.innerHTML);
// console.log(document.links);


// document.body.innerHTML =  '<h1>Hello World</h1>';


document.write("hello from Ayesha");// function to write something on the screen
//method to select certain element
console.log(document.getElementById('main'));

const main = document.getElementById('main');
main.innerHTML = '<h1>hello From main</h1>';
document.querySelector('#main h1').innerText = 'hello Ayesha';