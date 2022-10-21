alert(`Bem vinda ao simulador Bancário`)
let nameUser=String(prompt('Digite seu nome:'))
let moneyInitial= parseFloat(prompt(`Senhor ${nameUser},insira o valor do deposito inicial.`))
let operationType = [];
let operationResult = [];
let moneyAlteration ;
let operation ;
do{
    operation = parseInt(prompt('Escolha a operação que deseja realizar:\n1.Adicionar\n2.Sacar\n3.Sair'))
    switch(operation){
        case 1:
            moneyAlteration= parseFloat(prompt('Digite o valor para adicionar:'))
            moneyInitial += moneyAlteration
            operationResult.unshift(`R$${moneyInitial}\n`)
            operationType.unshift(`Depósito R$${moneyAlteration}\n`)
            alert(`Operação concluida com sucesso!\nNovo saldo: R$ ${moneyInitial}`)
            break;
        case 2:
            moneyAlteration=parseFloat(prompt('Digite o valor para retirar:'))
            moneyInitial -= moneyAlteration
            operationResult.unshift(`R$${moneyInitial}\n`)
            operationType.unshift(`Saque de R$ ${moneyAlteration}\n`)
            alert(`Operação concluida com sucesso!\nNovo saldo: R$ ${moneyInitial}`)
            
            break;
    }
}while(operation !== 3 ){
    alert(`Nome do usuario:${nameUser}\nSaldo :${moneyInitial}\nLista de operações:\n${operationType}\nLista de valores :\n${operationResult}`)

}

/*
function adicionando(money,operetionValue,nameOperation,listResult){
    let countBank = money + operetionValue
    money = countBank
    listResult.unshift(money)
    nameOperation.unshift(`Adicionado ${operetionValue}`)
    alert(`Operação concluida!\nNovo saldo:R$ ${money}`)
    return money
}

function removendo(money,operetionValue,nameOperation,listResult){
    money =- operetionValue
    
    listResult.unshift(money)
    nameOperation.unshift(`Removendo ${operetionValue}`)
    alert(`Operação concluida!\nNovo saldo:R$ ${money}`)
   return 
} */