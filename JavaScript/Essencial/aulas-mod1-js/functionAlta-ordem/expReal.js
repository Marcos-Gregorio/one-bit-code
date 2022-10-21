// Exemplos Real
/*
    Essas funções que são passadas como parâmetros geral
    -mente são chamadas de callback.s.
    Um exemplo como de high-order function no javascript
    é a função .forEach() dos arrays
*/ 
function exibirElemento(elemento, indice,array){
    console.log({elemento,indice,array})
}
const lista = ['Maçã','Banana','Uva','Melao','Maracuja']

// Modo tradicional

console.log('Forma Tradicional.')
for(let i = 0; i < lista.length;i++){
    exibirElemento(lista[i],i,lista)
}

// Forma Funcional
console.log('Forma Funcional.')
lista.forEach(exibirElemento)
/*Poderia ser feito desse jeito abaixo tambem:

lista.forEach(function(elemento,indice,array){
    console.log([elemento,indice,array])
})
    */ 

