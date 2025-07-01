let x;
let d = new Date();
x = d.toString();
x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getMonth();
x = d.getDate();
x = d.getDay();
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();
x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
x = d.toLocaleString('default' , {month: 'short'});
x = d.toLocaleString('default' ,{month : 'short',
    weekday :'long',
    year : 'numeric',
    month :'long',
    day : 'numeric',
    hour :'numeric',
    minute : 'numeric',
    second :'numeric',
    timeZone :'America/New_york'
  }
 )




console.log(x);