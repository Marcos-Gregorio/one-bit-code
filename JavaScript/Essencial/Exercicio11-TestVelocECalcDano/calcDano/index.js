let playerOne = String(prompt('Digite o nome do atacante:'))
let powerAtack = parseFloat(prompt('Digite o poder de ataque do atacante'))
let playerTwo = String(prompt('Digite o nome do defensor:'))
let healthPoint = parseFloat(prompt('Digite o hp do defensor:'))
let powerDefense = parseFloat(prompt('Digite o poder de defesa do defensor'))
let shield = Boolean(confirm('Caso o defensor tenha um escudo selecione "ok",se não selecione "cancel"'))
let contaDamage
let contaHealt


if(powerAtack > powerDefense && shield== false){
    contaDamage = powerAtack - powerDefense
    contaHealt = healthPoint - contaDamage
    alert(`Resultado do conflito:Vitória do atacante.\nNome do Atacante:${playerOne}    Nome do Defensor:${playerTwo}\nPoder de ataque:${powerAtack}            Poder de Defesa:${powerDefense}\nDano causado:${contaDamage}    HP:${contaHealt}/${healthPoint}|shield:${shield}`)
    if(contaHealt < 0){
        contaHealt = 0
        alert(`Resultado do conflito:Vitória do atacnate.\nNome do Atacante:${playerOne}    Nome do Defensor:${playerTwo}\nPoder de ataque:${powerAtack}        Poder de Defesa:${powerDefense}\nDano causado:${contaDamage}   HP:${contaHealt}/${healthPoint}|shield:${shield}`)


    }
}else if(powerAtack> powerDefense && shield == true){
    contaDamage = (powerAtack - powerDefense)/2
    contaHealt = healthPoint - contaDamage
    alert(`Resultado do conflito:Vitória do atacante.\nNome do Atacante:${playerOne}    Nome do Defensor:${playerTwo}\nPoder de ataque:${powerAtack}            Poder de Defesa:${powerDefense}\nDano causado:${contaDamage}    HP:${contaHealt}/${healthPoint}|shield:${shield}`)
    if(contaHealt < 0){
        contaHealt = 0
        alert(`Resultado do conflito:Vitória do atacante.\nNome do Atacante:${playerOne}    Nome do Defensor:${playerTwo}\nPoder de ataque:${powerAtack}        Poder de Defesa:${powerDefense}\nDano causado:${contaDamage}   HP:${contaHealt}/${healthPoint}|shield:${shield}`)

    }
}else{
    contaDamage = 0
    contaHealt =healthPoint - contaDamage
    alert(`Resultado do conflito:Vitória do defensor.\nNome do Atacante:${playerOne}    Nome do Defensor:${playerTwo}\nPoder de ataque:${powerAtack}        Poder de Defesa:${powerDefense}\nDano causado:${contaDamage}   HP:${contaHealt}/${healthPoint}|shield:${shield}`)

}