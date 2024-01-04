PlatziMath ={}

const arr = [1,2,3,4,2,3,2,2,2,2,2]
const newArray = arr.sort((a,b)=> a-b)
const n = newArray.length

PlatziMath.calcularPromedio =function calcularPromedio(newArray) {
    const initialValue = 0
    const sumatoria = newArray.reduce((accum, current)=> accum + current,initialValue)    
    return sumatoria / n
}

PlatziMath.calcularMediana= function calcularMediana(newArray) {
    const index= Math.floor(n/2)
    if (n%2 === 0) {
        const isPair = (newArray[index]+ newArray[index - 1]) / 2
        return isPair       
    } else {
        const isNotPair = newArray[index]
        return isNotPair
    }    
}

PlatziMath.calcularModa= function calcularModa(newArray) {
    const conteo = newArray.reduce((acc,val)=>{
        acc[val] = (acc[val] || 0)+1
        return acc
    },{})
    let moda = []
    let maxCount = 0

    const entries = Object.entries(conteo)

    entries.forEach(([valor,count])=>{
        count = parseInt(count)
        if (count > maxCount) {
            moda = [parseInt(valor)]
            maxCount = count
        } else if (count === maxCount) {
            moda.push(parseInt(valor))
        } 
    })
    moda.forEach((element, index)=>{
        console.log(`elemento ${index +1}: ${element}`);
    })
    return moda
}
