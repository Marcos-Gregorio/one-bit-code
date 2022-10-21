let firstNumber = parseFloat(prompt('Digite o primeiro valor:'))
let secondNumber = parseFloat(prompt('Digite o segundo valor:'))
let choosenOption =parseInt(prompt("Digite o numero que representa a operação deseja:\n1.Soma    2.Subtração\n3.Multiplicação    4.Divisão"))
let conta 


switch (choosenOption) {
    case 1:
        conta = firstNumber + secondNumber
        alert(`Resultado${conta}`)
        break;
    case 2:
        conta = firstNumber - secondNumber
        alert(`Resultado${conta}`)
    break;
    case 3:
        conta = firstNumber * secondNumber
        alert(`Resultado${conta}`)
    break;
    case 4:
        conta = firstNumber / secondNumber
        alert(`Resultado${conta}`)
        break;

    default:
        alert('Valor invalid')
    break;
}