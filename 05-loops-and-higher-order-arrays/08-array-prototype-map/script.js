const number = [12,2,1,2,46,78];
const doubled = number.map((num)=> num * 2);
console.log(doubled);

//same with for each
const doubleNumbers = [];
number.forEach((num) => {
  doubleNumbers.push(num *2);
}
);
console.log(doubleNumbers);
const  companies =[
    { name:"companyOne"  , category:"finance" ,  start : 1920 , end : 1980},
    { name:"companyTwo"  , category:"retail" ,  start : 2004 , end : 2009},
    { name:"companyThree"  , category:"finance" ,  start : 1940 , end : 2010},
    { name:"companyFour"  , category:"retail" ,  start : 1950 , end : 2023},
    { name:"companyFive"  , category:"accounting" ,  start : 1990 , end : 2003},
    { name:"companySix"  , category:"marketing" ,  start : 1970 , end : 2020},
    { name:"companySeven"  , category:"retail" ,  start : 1980 , end : 2004},
    
]
//create a array of company name
const companyName = companies.map((company) => company.name);
console.log(companyName);

const companyInfo = companies.map((company)=>{
  return {
    name : company.name,
    category : company.category
  }
});
console.log(companyInfo);
const companyLen = [];

// CREATE An array of length of each company 
const companyLength= companies.map((company)=>{
  return {
    name: company.name ,
    companyyear :company.end - company.start
  }
}
);
console.log(companyLength);
//chain map methods
const squareAndDouble = number.map((num)=> Math.floor(Math.sqrt(num))).map((sqrt)=>sqrt*2);

console.log(squareAndDouble);