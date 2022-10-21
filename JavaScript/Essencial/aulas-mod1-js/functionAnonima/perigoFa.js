// Perigos funções anônimas

/*
    Funções anônimas só podem ser chamadas após a atribuição
    da variavel,elas não são jogadas para o topo do arquivo 
    como funções normais.
 */ 

console.log('Perigos das funções anônimas.')
olaMundo()
oiMundo()
function olaMundo(){
    console.log('ola,mundo')
}

const oiMundo = function(){
    console.log('Oi,mundo!')
}