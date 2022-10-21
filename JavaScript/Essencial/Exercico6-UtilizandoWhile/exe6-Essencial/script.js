let firstValue = parseFloat(prompt('Digite o primeiro valor para realizar a operação'))
let secondValue = parseFloat(prompt('Digite o segundo valor:'))
let historico = [];
let choseenOptions
do{
    choseenOptions = parseInt(prompt('Digite o numero para escolher uma das opções abaixo\n1.somar\n2.subtrair\n3.multiplicar\n4.dividir\n5.encerra'))
    switch(choseenOptions){
        case 1:
            somar(firstValue,secondValue,historico)
            break;
        case 2:
            subtrair(firstValue,secondValue,historico)
             break;
        case 3:
            multiplicar(firstValue,secondValue,historico)
            break;
        case 4:
            dividir(firstValue,secondValue,historico)
           break;
    }      
}while( choseenOptions !=5){
    switch(choseenOptions){
        case 5:
            alert(`Lista de resultados${historico}`)
      
}}

function somar(numberOne,numberTwo,listResult){
    let result = numberOne+numberTwo
    listResult.unshift(result)
    alert(`${numberOne}+${numberTwo}=${result}`)
    return
}
function subtrair(numberOne,numberTwo,listResult){
    let result = numberOne -numberTwo
    listResult.unshift(result)
    alert(`${numberOne}-${numberTwo}=${result}`)
    return
}
function multiplicar(numberOne,numberTwo,listResult){
    let result = numberOne *numberTwo
    listResult.unshift(result)
    alert(`${numberOne}*${numberTwo}=${result}`)
    return
}
function dividir(numberOne,numberTwo,listResult){
    let result = numberOne / numberTwo
    listResult.unshift(result)
    alert(`${numberOne}*${numberTwo}=${result}`)
    return
}