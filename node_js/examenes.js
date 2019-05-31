function suma (calificaciones){
    let suma=0

    for(let x = 0; x<calificaciones.length; x++){
        if(calificaciones[x]<6){
            suma++
        }
    }
    return suma
}

const calificaciones= [5,8,6,9,4]
let materias=0;

materias = suma(calificaciones)

console.log("Tendras que repetir: " + materias + " materias")