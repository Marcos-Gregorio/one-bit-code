const deck = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
const deckRemove = []
alert(`Bem vindo ao baralho virtual.\nNumero total de cartas:${deck.length}`)
let chooseAction
let chooseOption = parseInt(prompt('Escolha uma das opções abaixas:\n1.Adicionar carta\n2.Remover carta\n3.Sair'))
while(chooseOption !=3){
    alert(`Numero de cartas:${deck.length}`)
    switch(chooseOption){
        case 1:
            addCard(chooseAction,deck)
            chooseOption = parseInt(prompt('Escolha uma das opções abaixas:\n1.Adicionar carta\n2.Remover carta\n3.Sair'))

            break;
        case 2:
            removeCard(chooseAction,deck,deckRemove)
            chooseOption = parseInt(prompt('Escolha uma das opções abaixas:\n1.Adicionar carta\n2.Remover carta\n3.Sair'))

            break;
        case 3:
            break;
        default:
            alert('Opção invalida')
            chooseOption = parseInt(prompt('Escolha uma das opções abaixas:\n1.Adicionar carta\n2.Remover carta\n3.Sair'))
            break;
    }

}

alert(`Operação Finalizada.\nDeck: ${deck}\nCartas removidas: ${deckRemove}`)

function addCard(addCard,listDeck){
    addCard = String(prompt('Escreva a carta que queira adicionar.'))
    listDeck.unshift(addCard)
    alert( `'${addCard}'adicionado com sucesso`)
}

function removeCard(addCard,listDeck,listRemove){
    addCard = listDeck.shift()
    if(!addCard){
        alert('Deck se encontra vazio,adicione uma carta para fazer o saque')
    } else{
        listRemove.unshift(addCard)
        alert(`'${addCard}' removida com sucesso`)
    }
    
}