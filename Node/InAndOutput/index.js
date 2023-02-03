const process = require('process');

console.log('Digite seu nome :')

// A função abaixo utlizamos o stdin para a entrada de dados e stdout para saida dos dados,
// que retorna o 'KEYBOARD' o parametro que esta armazenando o Nome digitado

process.stdin.on('data',(keyboard)=>{
    process.stdout.write(`Nome do usuário:\n${keyboard}`)
    process.exit()

})