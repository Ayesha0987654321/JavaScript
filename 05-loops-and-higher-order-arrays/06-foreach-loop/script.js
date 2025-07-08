const socials = ["Twitter" , "FaceBook" , "Insta" , "YouTube"];
socials.forEach(function (social){
    console.log(social);
});

//Arrow Function
socials.forEach((social)=>{
    console.log(social);
});


socials.forEach((social , index , arr)=>{
    console.log(`${index} - ${social}`  , arr);
});
//passing a named function rather than anonums call backs

function logSocials(social){
    console.log(social);
}
socials.forEach(logSocials);

//Objects 
const socialObjs =[
    {name : "Twitter"  , url :"https://www.twitter.com"},
    {name : "Facebook"  , url :"https://www.facebook.com"},
    {name : "instagram"  , url :"https://www.instagram.com"},
] 
socialObjs.forEach((item)=>{
    console.log(item);
});

//accessing the specifi element


socialObjs.forEach((item)=>{
    console.log(item.url);
});
