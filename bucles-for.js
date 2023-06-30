//bucles for

// i=i + 1
// i +=1
// i++ç


for( let  i= 0; i < 10 ; i++){
    //esto es el bucle 
    console.log(i)
}
let lista= [1,4,6,2,3,7,10,12,800];

 for(let i= 0; i< lista.length; i++){
    console.log(lista [i]*2)


//estructura for of
 }
 for(let valor of lista){
    console.log(valor)
 }

 //estructura foreach

 lista.forEach(valor=>{
    console.log(valor)
 })

 //estructura for...in
 let persona={
    nombre:'karina',
    apellido :'Rodelo',    
    edad :'18',
    isdeveloper:'true'
 }
 console.log(persona.nombre);

 let prop ="edad";
 console.log(persona [prop])

for (let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}



