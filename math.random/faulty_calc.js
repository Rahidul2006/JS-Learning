let a = 4
let b = 7
const operator = prompt("Enter the operator: ")
var c = Math.random()*100
var convert = Math.trunc(c)
console.log(convert)
if (convert < 10){
    if (operator === '+'){
    console.log("The answer is: " + (a-b))
    }
    else if (operator === '*'){
        console.log("The answer is: " + (a+b))
    }
    else if(operator === "-"){
        console.log("The answer is : " + (a/b))
    }
    else if(operator === "/"){
        console.log("The answer is: " + (a**b))
    }
}else{
    if (operator === '+'){
    console.log("The answer is: " + (a+b))
    }
    else if (operator === '*'){
        console.log("The answer is: " + (a*b))
    }
    else if(operator === "-"){
        console.log("The answer is : " + (a-b))
    }
    else if(operator === "/"){
        console.log("The answer is: " + (a/b))
    }
}

