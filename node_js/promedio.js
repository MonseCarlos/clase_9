function suma(calificaciones){

    let suma= 0;
    for(let x=0; x<calificaciones.length; x++){

        suma = suma + calificaciones[x]

    }

    return suma
}

const calificaciones=[10,7,8]
let promedio = 0

promedio = suma(calificaciones)/calificaciones.length

if(promedio > 8){
    console.log("Felicidades tienes la beca, tu promedio es de:  "+ promedio)
}
else{
    console.log("Suerte para la proxima")
}