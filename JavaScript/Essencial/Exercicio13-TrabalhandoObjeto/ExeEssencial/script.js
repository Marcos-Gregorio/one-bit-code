let cadImoveis={nameImovel:[],
                nameProp:[],
                qtdQuartos:[],
                qtdBanheiros:[],
                garagem:[]}

let chooseOptions; 
let nameImovel,nameUser,qtdQuarto,qtdBanheiros,garagem
do{
    chooseOptions = parseInt(prompt(`Bem vindo ao menu interativo de cadastro de imoveis.\nQuantidade de casas cadastradas:${cadImoveis.nameImovel.length}\nDigite o numero da operação que deseja realizar:\n1.Salvar Imoveis\n2.Imoveis salvos.\n3.Sair`))
    switch(chooseOptions){
        case 1:
            addImovel(nameImovel,nameUser,qtdQuarto,qtdBanheiros,garagem,cadImoveis)
    
            break;
        case 2:
            showImovel(cadImoveis)

            break;
        case 3:
            alert('Encerrando Aplicação....')
            break;
        default:
            alert('Opção invalida.')
    
            break;
    }
}while(chooseOptions!=3){

}

function addImovel(nameImovel,nameUser,qtdQuarto,qtdBanheiros,garagem,objectImovel){
    nameImovel=String(prompt('Digite o nome do imovel.'))
    objectImovel.nameImovel.push(nameImovel)
    nameUser = String(prompt('Digite o nome do proprietario.'))
    objectImovel.nameProp.push(nameUser)
    qtdQuarto = parseInt(prompt('Quantos quartos possui o imovel.'))
    objectImovel.qtdQuartos.push(qtdQuarto)
    qtdBanheiros=parseInt(prompt('Quantos banheiros o imovel possui:'))
    objectImovel.qtdBanheiros.push(qtdBanheiros)
    garagem = Boolean(confirm("Caso o imóvel contenha garagem,click no okay"))
    objectImovel.garagem.push(garagem)
    return
}

function showImovel(objectImovel){
    for(let i =0;i< objectImovel.length;i++){
        alert(objectImovel.nameImovel[i])
    }

    return
}