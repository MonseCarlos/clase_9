function sumarasistencia(asistencia){

    let suma = 0;
    for(let x =0; x<asistencia.length; x++){

        if(asistencia[x]){
            suma++
        }
    }
    return suma
}

const listasistencia = [true,false,true,true]

let porcentaje

porcentaje = (sumarasistencia(listasistencia)*100)/listasistencia.length

console.log("El porcentaje de asistencia es: " + porcentaje)