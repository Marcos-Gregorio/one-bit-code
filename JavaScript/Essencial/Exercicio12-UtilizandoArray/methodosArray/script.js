const arr = ['Frodo','Sam','Merry','Pippim','Gandalf','Aragorn','Legoloas','Gimli']
console.log(arr)

// Adicionando elemento 

// push(): adicona o elemento no final da array.
console.log('push()= adicona o elemento no final da array (Boromir)')
let tamanho = arr.push('Boromir')
console.log(arr)
console.log(tamanho)

// unshift(): adiciona o elemento no inicio do array.
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// Removendo Elementos.

//pop():Remove um elemento no final do array e devolve o elemento.
let elementoRemovido = arr.pop('Boromir')
console.log(arr) 
console.log(elementoRemovido)

// shift():Remove um elemento no começo do array e devolve o elemento removido
elementoRemovido = arr.shift('Boromir')
console.log(arr)
console.log(elementoRemovido)

// Pesquisando  por um tempo.

// includes():Verfica se um certo elemento está presente no array.
const inclui = arr.includes('Gandalf')
console.log(inclui)

// indexOf():Enconstra  o índice que possui o elemento indicado,ou -1 caso ele não exista no array
const indice = arr.includes('Gandalf')
console.log(indice)

// Cortando e Concatenando

// slice():copia uma parte do arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
console.log('slice():copia uma parte do arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)')
const hobbits = arr.slice(0,4)

// Também pode ser usado com números negativos referenciar  o final do array 
console.log('Também pode ser usado com números negativos referenciar  o final do array')
const outros = arr.splice(-4)

console.log(arr)
console.log(hobbits)
console.log(outros)

// concat(): Junta dois ou mais arrays e/ou itens e devolver resultados(sem aletrar nenhumo dos arrays)
const sociedade = hobbits.concat(outros,'Borimir')
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// Substituindo elementos

// splice():Permite remover elementos em qualquer posiçâao do arraye subistituir por novos.
console.log('splice():Permite remover elementos em qualquer posiçâao do arraye subistituir por novos.')
const elementoRemovidos = sociedade.splice(indice,1,'Gandalf, o Cinzento')
console.log(elementoRemovidos)
console.log(sociedade)

// Iterando sobre elementos

// Usando o for para percorrer cada elemento do array
console.log('Usando o for para percorrer cada elemento do array')
for(let i= 0 ; indice< sociedade.length;i++){
    const elemento = sociedade[i]
    console.log(`O${elemento} se encontra na posição ${i}`)
}



