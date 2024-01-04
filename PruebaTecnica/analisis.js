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

// Proyección de salario personal basandose en el ultimo año
// PS= ultimo salario X crecimiento Salarial promedio 
function crecimientoSalarial(nombrePersona) {
// la variable obtiene el array de la fx obtener salario (vacio o undefined)
    const tasaDeCrecimiento = obtenerSalario(nombrePersona)

// Se crea un nuevo array para ejecutar la logica dentro de este
    const arrSalarios =[]
// recorre el array iniciando en la segunda posicion y lo resta con el anterior luego lo divide entre el primer indice.
    for (let i = 1; i < tasaDeCrecimiento.length; i++) {
        const crecimiento =(tasaDeCrecimiento[i]-tasaDeCrecimiento[i-1])/tasaDeCrecimiento[i-1]
// El resultado se empuja al array 'arrSalarios' y usa como parametro crecimiento que es donde esta la operacion logica
        arrSalarios.push(crecimiento)
    }
// Luego se obtiene el promedio de los datos
    const promedioSalarial = PlatziMath.calcularPromedio(arrSalarios)
// El ultimo salario para hacer el calculo a partir de este 
    const ultimoSalario = tasaDeCrecimiento[tasaDeCrecimiento.length-1]
// esta variable es la logica de 'PS' o proyeccion de salario, parseInt para que no agregue decimales
    const nuevoSalario = parseInt(ultimoSalario * (1+promedioSalarial))
// Se regresa este resultado como unico para fines practicos
    return nuevoSalario
}
// Esta funcion es la misma que crecimiento salarial pero usando el metodo slice y reduce
function crecimientoReduce(nombrePersona) {
    const money= obtenerSalario(nombrePersona)

    const arrSalarios= money.slice(1).reduce((resultado, salario,index)=>{
        const crecimiento = (salario -money[index])/money[index]
        resultado.push(crecimiento)
        return resultado
    },[])
    const promedioSalarial = PlatziMath.calcularPromedio(arrSalarios)

    const ultimoSalario = money[money.length - 1]
    const nuevoSalario = parseInt(ultimoSalario*(1+promedioSalarial))

    return nuevoSalario
}

