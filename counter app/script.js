const button1 = document.getElementsByClassName("btn1")[0];
const button2 = document.getElementsByClassName("btn2")[0];
const number = document.getElementsByClassName("number")[0];

let count= 0 ;

button1.addEventListener("click",()=>{
    count++;
    number.innerText= count;
})

button2.addEventListener("click",()=>{
    count--;
    number.innerText=count;
})