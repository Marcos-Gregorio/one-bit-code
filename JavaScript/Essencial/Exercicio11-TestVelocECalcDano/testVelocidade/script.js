let veicOne = String(prompt('Digite o nome do primeiro veiculo:'))
let veloOne = parseFloat(prompt('Digite a velocidade do primeiro veiculo'))

let veicTwo = String(prompt('Digite o nome do segundo veiculo'))
let veloTwo = parseFloat(prompt('Digitie a velocidade do segundo veiculo:'))

if (veloOne === veloTwo) {
    alert('Ambos estão na mesma velocidade')    
}else if(veloOne > veloTwo){
    alert(`O veiculo ${veicOne},se encontra mais rapido que o ${veicTwo},numa velocidade de ${veloOne}Km/h`)
}else{
    alert(`O veiculo ${veicTwo},se encontra mais rapido que o ${veicOne},numa velocidade de ${veloTwo}Km/h`)
}
