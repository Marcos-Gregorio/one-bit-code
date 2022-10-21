// Funções de Alta-Ordem(High-order-Functions)

// O que são?

/*
    Funções de alta-ordem,ou high-order functions,são 
    funções que recebem outras funções como parâmetro 
    e as executam em algum momento
*/ 

function calcular(a,b,operacao){
    console.log('Realizando uma operação.')
    const resultado = operacao(a,b)
    return resultado
}

// Referenciar a função vs Chamar a função

function somar(x,y ){
    console.log('Realizando soma.')
    console.log(`Resultado soma ${x +y}`)
    return x + y
}

calcular(3,5,somar)
/*
  Repare que não usamos os () ao lado do nome do função,
  por que ao fazer isso estariamos executando a função.
*/ 

console.log(somar)
// Retorna a própria função

console.log(somar(1,1))
// Chama a função (retorna o resultado da função)