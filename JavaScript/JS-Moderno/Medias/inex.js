
const media = (...numbers)=>{
    let media = 0
    let result 
    numbers.forEach(element =>{
        media += element
    })
    result = media / numbers.length
    console.log(`A média de: \n${numbers} \nResulta em: \n${result}`)
}
const mediaAritmetica = (...number)=>{
   let peso = 0
   let nota = 0
   let result
   number.forEach(element =>{
        nota += (element.nota * element.peso)
        peso += (element.peso)
   })
   result = nota / peso
   console.log('A média aritméticas das seguintes notas')
   number.forEach(element =>{
    console.log(`nota:${element.nota}    Peso:${element.peso}`)
   })
   console.log(`Média:\n${result}`)
}

const mediana = (...numbers)=>{
    if(numbers.length %2 == 0){ 
        console.log('ROL par')
           const sortCrescen = numbers.sort( ( a, b ) => { return a - b } )
           let medianPar = (sortCrescen[sortCrescen.length/2]+sortCrescen[(sortCrescen.length/2) -1])/2
           console.log(`Median Par: ${medianPar}`)
        }else{
            const sortCrescen = numbers.sort( ( a, b ) => { return a - b } )
            console.log(sortCrescen[(sortCrescen.length/2)-.5])
            
        }

}
const moda = (...number)=>{    
    const quantities = number.map(num=>[
        num,
        number.filter(n=>num ===n).length
    ])
    quantities.sort( ( a ,b ) => b[1] - a[1])
    console.log(quantities[0][0])
    return quantities[0][0]
   
}
console.log('Iniciando a Aplicação')
// Média.
// media(4, 5, 4, 6, 6)
// mediaAritmetica({ nota: 7, peso: 2}, { nota: 9, peso: 5 }, { nota: 3, peso: 1 })
// mediana(2, 4, 5, 7, 42, 99)
// mediana(5, 7)
// mediana(15, 14, 8, 7, 3)
moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)