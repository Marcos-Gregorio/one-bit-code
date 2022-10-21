let textArg = String(prompt('Digite uma palavra,para verificar se é um palindromo'));
let pa =''
for(let i = textArg.length -1; i >=0;i--){
    pa+=textArg
}
if( pa === textArg){
    alert(`A palavra ${textArg},é um palindromo.\npalacra de tras para frente:${pa} `)
}else{
    alert(`A palavra ${textArg},não é um palindromo.\npalavra de tras para frente:${pa}`)
}
/*
let textArg = String(prompt('Digite uma palavra,para verificar se é um palindromo'))
let verificationPA = [];
let pa ='';
for(let i = 0; i < textArg.length; i++){
    verificationPA.unshift(textArg[i])


}
for(let i = 0 ;i<verificationPA.length;i++){
    pa += verificationPA[i]
}
if( pa === textArg){
    alert(`A palavra ${textArg},é um palindromo.\npalacra de tras para frente:${pa} `)
}else{
    alert(`A palavra ${textArg},não é um palindromo.\npalavra de tras para frente:${pa}`)
}
*/
