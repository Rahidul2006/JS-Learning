
function color() {
    const r = Math.random() * 100;
    const g = Math.random() * 100;
    const b = Math.random() * 100;
    const a = Math.random()*100;


    return `rgb(${r},${g},${b} ,${a}%)`
}

// let a = document.querySelector(".bg").children
let a = document.getElementsByClassName("bg");
let btn = document.querySelector("button");

function changeColor() {
    Array.from(a).forEach(e => {
        console.log(e);
        e.style.backgroundColor = color();
    });
}
btn.onclick = () => {
    changeColor();

}
