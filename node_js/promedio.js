function suma(calificaciones){

    let suma= 0;
    for(let x=0; x<calificaciones.length; x++){

        suma = suma + calificaciones[x]

    }

    return suma
}

function promedio(calificaciones){
    let promedio = 0

    promedio = suma(calificaciones)/calificaciones.length

    return promedio

}

function valida(calificaciones){

    //const sumacalif=suma(calificaciones)
    //const resultado = promedio(califcaciones)

    if(promedio(calificaciones) > 8){
        console.log("Felicidades tienes la beca, tu promedio es de:  "+ promedio(calificaciones))
    }
    else{
        console.log("Suerte para la proxima")
    }

}


const calificaciones=[10,7,8]

valida(calificaciones)


