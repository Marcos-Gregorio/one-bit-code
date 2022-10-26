/*
### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar
      a escalação daquele jogador e então insere as informações em uma lista
       na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar
       a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

    Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/
const listPlayer = []

function createPlayer() {

    const nome = document.getElementById('player-name').value
    const posicao = document.getElementById('position-player').value
    const number = document.getElementById('number-player').value
 
   
    const confirmar = confirm(`Deseja salvar as informações do jogador:${nome}\nPosição:${posicao}\nNumero da camisa:${number }`)
    if(confirmar){
        const contactId = document.getElementById('list-time')
        const div = document.createElement('div')
        div.className = 'card-player'
       
        // Iniciando Lista.
        const ul = document.createElement('ul')
       
        
        // Componente nome
        
        const nomeLi = document.createElement('li')
        nomeLi.innerHTML = `<strong>Nome:</strong>`
        
        const nomeValue = document.createElement('span')
        nomeValue.innerText=`${nome}`
        nomeValue.className= 'nomeValue'
       

        nomeLi.appendChild(nomeValue)
        ul.appendChild(nomeLi)
    
        // Componete Posição
        const posicaoLi = document.createElement('li')
        posicaoLi.innerHTML=`<strong>Posição de jogador:</strong>`
        
        const posicaoValue = document.createElement('span')
        posicaoValue.innerText=`${posicao}`
        posicaoValue.className='posicaoValue'
       
        
        posicaoLi.appendChild(posicaoValue)
        ul.appendChild(posicaoLi)
        
        // componete number
        const numberLi = document.createElement('li')
        numberLi.innerHTML = `<strong>Numero da camisa:</strong>`
        const numberValue = document.createElement('span')
        numberValue.innerText = number
        numberValue.value = `${number}`
        numberValue.className='numberValue'
    
        numberLi.appendChild(numberValue)
        ul.appendChild(numberLi)
        
         contactId.append(div , ul)
    
    }
   return confirmar
}
function remover(){
    const contactId = document.getElementById('list-time')
    const removeChilder = document.getElementsByClassName('card-player')
    const removeTag = document.getElementsByTagName('ul')
    const numeroCamisa = document.querySelectorAll('span.numberValue')
    const reqUser = document.querySelector('.reqUser').value

   
    for(let i = 0 ; i <= numeroCamisa.length;i++){
        if(numeroCamisa[i].value == reqUser){
            
            
            
            contactId.removeChild(removeChilder[i])
            contactId.removeChild(removeTag[i])
          
           
            
        }
    }
    
}



