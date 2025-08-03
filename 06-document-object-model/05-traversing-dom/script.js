// //RELATION BETWEEN THE NODES EVERYTHIMG IN THE DOM IS NODE
// //THERE ARE OTHER TYPES OF NODE LIKE TEXT NODE COMMENT NODES

// //WE ARE APECIFICALY LOOKIN AT THE ELEMENT NODES


// // How we can get child elements from the parent  node
// // const parent  = document.querySelectorAll('.child');
// // console.log(parent);

// // const parent1 = document.querySelectorAll('#parent .child');
// // console.log(parent1[0].innerText);
// // parent1.forEach((element)=>{
// //     element.style.color="red";
// // })

// // parentArray.forEach((element)=>{
// //     element.innerText.style.color ="red";
// // })


// let output;
// const parent  = document.querySelector('.parent');
// output =  parent.children;   // children is a property not a method 
// console.log(output);

// output =  parent.children[1].innerText;   
// console.dir(output);


// output =  parent.children[1].className;   
// console.log(output);


// output =  parent.children[1].nodeName;   
// console.log(output);

// parent.children[2].innerText = "Child Three";
// parent.children[2].style.color = "Green";




let prices = [4000 , 2000 , 3000 , 40000];


let discountArray=[];
for(let price of prices){
     let discountAmount = price*(30/100);
     let totalAmount = price - discountAmount;
     discountArray.push(totalAmount);
}
console.log(totalAmount);
