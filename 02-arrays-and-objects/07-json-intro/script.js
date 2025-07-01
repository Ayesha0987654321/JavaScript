// Api to sent or recieve data from or to  the server     json data interchange format  standsfor javascript object notation  way ti store data in human readable format

const post = {
     id : 1,
     tittle : "Post one",
     body : "This is the body"
};
// convert to json string
const str =JSON.stringify(post);

//parse JSON
const obj = JSON.parse(str);

const  posts = [

   {
     id : 1,
     tittle : "Post one",
     body : "This is the body"
   },
  {
     id : 1,
     tittle : "Post one",
     body : "This is the body"
  },
];
const str2 = JSON.stringify(posts);

//if we console.log(str.id) means we stringfy the we cannot access  the elements but if we parse the  string into object then we can access the elements by obj.id
console.log(str2, typeof(str2));

const library = [
     {
        tittle : "C++ Programing",
        author  : "john Doe",
        status  : {
          own :true,
          read : false,
          reading : false
        }
     },
     {
        tittle : "Python Programing",
        author  : "Mr Brad",
        status  : {
          own :true,
          read : false,
          reading : false
        }
     },
     {
        tittle : "java Script ",
        author  : "johny jhon",
        status  : {
          own :true,
          read : false,
          reading : false
        }
     },

];

 library[0].status.read = true;
 library[1].status.read = true;
 library[2].status.read = true;


 const {tittle : firstbook , author , status} = library[0];


console.log(firstbook);

const str3 = JSON.stringify(library);
console.log(str3);