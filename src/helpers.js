// Obtiene la diferencia de anios
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;
    switch (marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
    
        default:
            break;
    }
    return incremento;
}
// calcula el tipo de seguro
export function obtenerPlan(plan){
    let incremento;
    
    if (plan === 'basico')
        incremento = 1.20;
    else
        incremento = 1.50

    return incremento;
}

// Primera letra mayuscula

export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}