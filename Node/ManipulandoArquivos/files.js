const fs = require('fs');

// Criando Arquivo
// fs.writeFile('test.txt' , 'Ola NodeJs', err =>{
//    console.log(err)
// })

// Adicinando texto no arquivo
// fs.appendFile('test.txt' , '/n Ola NodeJs', err =>{
//        console.log(err)
//     })

// Alterando Name

fs.rename( 'test.txt' , 'text2.txt', err => { console.log(err) } )
// Remover arquivo
fs.unlink('text2.txt', err => { console.log(err) } )
// Var global de ambiente dirname,ela é uma varivel aonde mostra a url do diretorio atual
console.log(__dirname);
