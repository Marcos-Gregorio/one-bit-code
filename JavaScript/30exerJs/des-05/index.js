
function getAlpha(n){
    let totalAlpha = `${n[0]}`
    let getAlpha = n.split(' ')
    let valueTest = `${getAlpha}`
   
    // Tirando as virgulas
    for(let i = 0 ; i <valueTest.length;i++){
        if(totalAlpha< valueTest[i]){
            totalAlpha += valueTest[i]
        }
    }
    // Pegando Letra.
    let getValue = `${totalAlpha[0]}`
    for (let i = 0; i < totalAlpha.length; i++) {
        if(getValue < totalAlpha[i]){
            getValue = totalAlpha[i]
        }
        
    }
  
    
    console.log(`Palavra chave:\n${getValue}`)
}

const listTest = ['Lorem ipsum dolore sec avanti','hello','Mat the force be with you','its over nine thousand']
listTest.forEach((element,index )=>{
    console.log(`${index +1}°teste\nMensagem criptografada:\n${element}`)
    getAlpha(element)
})