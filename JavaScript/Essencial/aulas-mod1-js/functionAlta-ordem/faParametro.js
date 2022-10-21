// Funções anônimas como parâmetros.

function calcular(a,b,operacao){
    console.log('Realizando uma operação.')
    const resultado = operacao(a,b)
    return resultado
}

/*
    Também podemos escrever funções anônimas
    dentro da própria chamada da high-order function

*/ 
console.log('Atribuindo uma função anônima,numa high-order function')

 calcular(9,2, function (x,y){
    console.log('Realizando substração')
    console.log(`Resultado:\n${x-y}`)
    
 })