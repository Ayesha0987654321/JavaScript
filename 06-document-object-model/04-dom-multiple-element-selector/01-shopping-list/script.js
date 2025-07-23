//Query Selector All

//document.getElementBy Id  retur the html collection byt querry selector return node list
//we cannot use hogh order array method on node list


const listItems = document.querySelectorAll('.items');
// console.log(listItems);
// console.log(listItems[1]);
// console.log(listItems[1].innerText);

// // listItems.style.color = "red"; //that does not work because we apply styple n node list stle property work on specific element

// listItems[2].style.color = "red";

// listItems.forEach((item  , index)=>{
//     item.style.color = "orange";
//     if(index === 2){
//        item.remove();
//     }
//     if(index === 1){
//         item.innerText = 'Kiwi'
//     }//this remove the removebutton
//     // if(index === 3){
//     //     item.innerHTML = `<li class="items">Water Melon
//     //         <button class=" remove-item btn-link btn-red"> <i class="fa-solid fa-xmark"></i></button>
//     //     </li>`
//     // }
// })

const listItems2 = document.getElementsByClassName('items');
console.log(listItems2); /// Return the Html Collection Array
console.log(listItems2[1]);  // Return the Specific element
console.log(listItems2[2].innerText);

const listItemsArray= Array.from(listItems2);
listItemsArray.forEach(element => {
    console.log(element.innerText);
});// for Each Loop does not work on html Collection  first we Change into array



const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);