alert('Bem-vindo a tabuada de 1 a 20')
let firstValue = parseFloat(prompt('Digite o numero para operação:'))
let listResult= [];
let operation;
for(let i = 0 ; i <=20;i ++){
    operation = i * firstValue
    listResult.push(`${firstValue}x${i}=${operation}\n`)
    alert(`${firstValue}x${i}=${operation}`)
}
alert(`Tabuada do ${firstValue} até 20:\n${listResult19}`)