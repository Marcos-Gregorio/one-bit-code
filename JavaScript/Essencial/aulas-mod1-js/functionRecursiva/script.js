// Função recursivas
// O que são?

// Funções recursiva é uma função que chama ela mesma repetidamente

function dividir(num){
    console.log(num)
    if(num % 2 === 0){
        dividir(num/2)

    }else{
        return num
    }
} 



// Perigos das funções recursivas

// É fundamental que uma função recursiva tenha uma forma 
// de parar novas funções

function dobra(num){
    console.log(num)
    dobra(num*2)
}

// Escrevendo funções recursivas

/*
    Para construir uma função recursiva,geralmente partimos
    de um caso de base para garantir que nossa função não v-
    ai continuar se chamando para sempre.
    OBS.:!5(fatorial de 5)= 5*4*3*2*1= 5 * !4
    */
   function fatorial(num){
    console.log(`num = ${num} `)
    if(num === 0){
        return 1
    }else if (num === 1){
        return 1
    }else{
        console.log(`${num} *!${num -1}`)
        return num* fatorial(num-1)
    }
   }

   console.log(`\n !5 =${fatorial(5)}\n!0=${fatorial(0)}\n!9= ${fatorial(9)}`)