//comparaciones

//igualdad
if(5===5){
    console.log("5 es muy igual a 5")
}
let a = 5;
console.log(typeof a)

let b = '5';
console.log(typeof b)
//== solo compara el valor
//=== compara el valor y tipo

if (a== b){
    console.log("a es = a b-debeil")
}

if (a===b){
    console.log("a es = a b-fuerte")
}

let c = 4;
let d = '4';
if (c != d){
    console.log("c es diferente a d-debeil")
}
if (c !== d){
    console.log("c es diferente a d-fuerte")
}

//comparaciones mayor que y menor que
let max =10;
let min =5;

if(max> min){
    console.log("max es mayor que min")
}
if ( max >=10){
    console.log("max es mayor que min")
}
if(min<max){
    console.log('min es menor que max')
}
if(min<=max){
    console.log('min es menor que max')}
