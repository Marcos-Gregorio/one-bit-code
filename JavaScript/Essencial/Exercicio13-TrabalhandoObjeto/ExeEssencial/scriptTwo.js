const listImoveis = []
let chooseOptions;

do{
    chooseOptions = parseInt(prompt(`Bem vindo ao simulador de cadastro de imóveis.\nQuantidade de casa:${listImoveis.length}\nEscolha alguma operação da lista abaixo:\n1.Adicionar Imovel\n2.Consulta de Imóveis\n3.Sair`))
    
    let requestAcepte
    switch (chooseOptions){
        case 1:
            let imoveis={}
            imoveis.nameUser = String(prompt('Digite o nome do dono do imovel:'))
            imoveis.qtdQuarto = parseInt(prompt('Digite a quantidade de quartos no imovel: '))
            imoveis.qtdBanheiro = parseInt(prompt('Digite a quantidade de banheiros'))
            imoveis.garagem = String(prompt('A casa contém garagem,digite "sim" ou "nâo"?'))
            requestAcepte =confirm('Deseja salvar o imóvel?')
            if(requestAcepte){
                listImoveis.push(imoveis)
                alert('Operação concluida')
            }else{
             alert('Operação cancelada')
            }
            break;
        case 2:
            for(let i = 0; i < listImoveis.length;i++){
                alert(`${listImoveis[i].nameUser}° Imóvel:\nQuantidade de quartos:${listImoveis[i].qtdQuarto}\nQuantidade de  banheiros:${listImoveis[i].qtdBanheiro}\nTem garagem:${listImoveis[i].garagem}`)
                
            }
            break;
        case 3:
            alert('Finalizando operação')
            break;
        default:
            alert('Opção invalida')
            break;
    }
}while(chooseOptions!= 3){}

function addImovel(imovel,ListaImoveis){
   
}

function listImovel(ListaImoveis){
   
}
