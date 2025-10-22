let random1 = Math.random()
let random2 = Math.random()
let random3 = Math.random()
let first
let middle 
let last

if(random1<0.33){
    first = "Crazy"
}
else if(random1<0.66 && random1 >= 0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}

if(random2<0.33){
    middle = "Engine"
}
else if(random2<0.66 && random2 >= 0.33){
    middle = "Foods"
}
else{
    middle = "Garments"
}


if(random3<0.33){
    last = "Bros"
}
else if(random3<0.66 && random3 >= 0.33){
    last = "Limited"
}
else{
    last = "Hub"
}


console.log(`${first} ${middle} ${last}`)
