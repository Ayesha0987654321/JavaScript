let d;


d = new Date();
d = d.toString();
d = new Date(2004 , 10 , 6 , 10 , 2 , 30);
d = new Date('2021-07-9');
d = new Date('2021-09-25T12:30:00');
d = new Date('07/10/2025 12:30:00');
d = new Date('2022-04-07 12:30:00');
d = Date.now();
d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(1750591053258);
d = Math.floor(Date.now()/1000);//time stamp in seconds
console.log(d , typeof d);
