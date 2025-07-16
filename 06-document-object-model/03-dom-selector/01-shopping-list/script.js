//document.getElementById()
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);

console.log(document.getElementById('app-title').class);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));


//set Attribute
// document.getElementById('app-title').id = 'new-id';
// document.getElementById('app-title').title='Shopping List';
document.getElementById('app-title').setAttribute('class','title');
const title = document.getElementById('app-title');


console.log(title);

//  Get / Change the content
console.log(title.textContent);

title.textContent = "Hello World";
title.innerText = "Hello Again";
title.innerHTML = '<strong>Shopping List</strong>';

//Change styles
title.style.color = 'red';
title.style.backgroundColor = '#ececec';
title.style.padding = '40px';
title.style.borderRadius = '10px';

//Query Selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');//pseudo Selector
secondItem.innerText = "Strawberry Juice";
secondItem.style.color = "red";