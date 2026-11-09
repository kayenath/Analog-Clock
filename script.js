let hr=document.getElementById('hr')
let mn=document.getElementById('mn')
let sc=document.getElementById('sc')

setInterval(() =>{

    let day=new Date();
    let hh=day.getHours()*30;
    let mm=day.getMinutes()*6;
    let ss=day.getSeconds()*6;

    hr.style.transform=`rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${mm}deg)`;
    sc.style.transform=`rotateZ(${ss}deg)`;


let hrs=document.getElementById('hrs');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let ampm=document.getElementById('ampm');

let h=new Date().getHours();
let m=new Date().getMinutes();
let s =new Date().getSeconds();

let am = h >=12? "PM" : "AM";
if(h>12){
    h=h-12;
} 
hrs.innerHTML=h;
min.innerHTML=m;
sec.innerHTML=s;
ampm.innerHTML=am;



h=(h<10)? "0" + h:h
m=(m<10)? "0" + m:m
s=(s<10)? "0" + s:s


})