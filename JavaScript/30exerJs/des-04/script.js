function calcViagem(n){
    let stringArray =`${n}`
    let newArray= []
    let newString = ''
    for(let i = 0 ;i < stringArray.length;i++){
        newArray.push(parseFloat(stringArray[i]*stringArray[i]))
    }
    console.log(newArray)
    newArray.forEach(element =>{
        newString +=`${element}`
        return newString
    })
    console.log(`Valor final :${newString}`)
 
}
let test1 = 3514
let test2 = 94571
let test3= 24
let test4= 745821698
console.log('1°Teste')
console.log(`Valor Teste :${test1}`)
calcViagem(test1)
console.log('2°Teste')
console.log(`Valor Teste :${test2}`)
calcViagem(test2)
console.log('3°Teste')
console.log(`Valor Teste :${test3}`)
calcViagem(test3)
console.log('4°Teste')
console.log(`Valor Teste :${test4}`)
calcViagem(test4)