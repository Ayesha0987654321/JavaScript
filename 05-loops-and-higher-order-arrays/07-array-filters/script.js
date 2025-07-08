//for each doesnot return any thing but filter return a value
 const marks = [12 , 23 ,45 ,21,9 ,0 ,1];
//  const result = marks.filter(function (num) {
//        return num > 6;
//  });
//  console.log(result);

//  //short version 
// const even = marks.filter((number)=>number % 2 == 0);
// console.log(even);


let evenNum = [];
marks.forEach((even) =>{
     if(even % 2 == 0 ){
        evenNum.push(even);
     }
});
console.log(evenNum);


const  companies =[
    { name:"companyOne"  , category:"finance" ,  start : 1920 , end : 1980},
    { name:"companyTwo"  , category:"retail" ,  start : 2004 , end : 2009},
    { name:"companyThree"  , category:"finance" ,  start : 1940 , end : 2010},
    { name:"companyFour"  , category:"retail" ,  start : 1950 , end : 2023},
    { name:"companyFive"  , category:"accounting" ,  start : 1990 , end : 2003},
    { name:"companySix"  , category:"marketing" ,  start : 1970 , end : 2020},
    { name:"companySeven"  , category:"retail" ,  start : 1980 , end : 2004},
    
]

const retail = companies.filter((company)=>{
    if(company.category ==="retail"){
        return company;
    }
});
console.log(retail);


const startEnd = companies.filter((company)=>{
    if(company.start >= 1980 && company.end <= 2005){
        return company;
    }
});
console.log(startEnd);