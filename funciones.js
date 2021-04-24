
//Nombre: Darlin Mariana Duque Urrea

// 1.PROBLEMA: La federación nacional de fútbol necesita de sus
// servicios como desarrollador de software, para codificar una
// función en JS que permita calcular la edad de los jugadores,
// de acuerdo al año de nacimiento de estos. Declare la función
// calcularEdad() y pruebe su funcionamiento.


function calcularEdad(fechaNacimiento){
    const anoActual =  new Date().getFullYear();
    return anoActual - fechaNacimiento   
}

let nacimiento = 1995
let calculo= calcularEdad(nacimiento)
console.log(calculo)



// 2. PROBLEMA: La federación nacional de fútbol también necesita
// que usted codifique un nuevo programa para
// establecer(clasificar) el biotipo de los jugadores, teniendo
// en cuenta la estatura de estos. La clasificación internacional
// del Biotipo de futbolista es:
// • Estatura <1.70 m (Biotipo Bajo)
// • 1.70 m <=Estatura < 1.80 m (Biotipo Promedio)
// • Estatura >= 1,80 m (Biotipo Superior)

const calcularEstatura = (estatura)=>{
    if ( estatura < 1.70){
        return "Biotipo Bajo"
    }
    if(estatura >= 1.70  && estatura <1.80 ){
        return "Biotipo Promedio"

    }
    if (estatura >= 1.80){
        return "Biotipo Superior"
    }
}

let estatura = 1.80
let clasificacionBiotipo = calcularEstatura(estatura)
console.log(clasificacionBiotipo)
