// Obtiene el arreglo general de todo el arreglo de TRABAJOS de aqui se puede acceder a cualquier array que este dentro para hacer el analisis 
function obtenerTrabajo(nombrePersona) {
    const persona = findName(nombrePersona)
    return persona.trabajos
}

// Busca que coincida el value name:Value como parametro para ejecutar la funcion find
function findName(nombre) {
    return salarios.find(persona=> persona.name === nombre)
}
// Esta funcion regresa un array de los salarios de cada persona
function obtenerSalario(nombrePersona) {
    const money = obtenerTrabajo(nombrePersona)
    return money.map(item => item.salario)
}
// Obtiene el promedio del salario que ha obtenido a lo largo de los años
function salarioPromedio(nombrePersona) {
    const promedio = PlatziMath.calcularPromedio(obtenerSalario(nombrePersona))
    return promedio
}

// Proyección de salarios 

