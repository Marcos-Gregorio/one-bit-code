// Função Anonimas

// Funções como valores no javascript

/*
    No javaScript as funções podem ser atribuidas
    a variáveis como se elas fosse valores
*/

function somar(a,b){
    return a+b

}

const operacao = somar

/*
    Repare que não usamos os () ap lado do nome da
     função, por que ao fazer isso estariamos execu
    -tando a função.
*/

console.log(operacao(4,5))

// O que são funções anônimas

/* 
   Para isso,podemos usar as funções anônimas,que nada
   mais são do que funções que não possuem um nome. 
*/ 
console.log('Função anônima.')
const subtrair = function(a,b){
    return a-b
}

console.log(subtrair(36,13))

// Possíveis usos

/*
    Com funções anônimas podemos,por exemplo,
    atribuir uma função a uma chave de objeto.
*/ 

const calculadora ={}

calculadora.somar= somar
calculadora.subtrair = subtrair
calculadora.multiplicar = function(a,b){
    return a*b
}

console.log(calculadora.multiplicar(3,7))
console.log(`Objeto: calculadora\n${calculadora}`)