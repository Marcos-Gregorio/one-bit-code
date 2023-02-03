const listTest = ['Lorem ipsum dolore sec avanti','This is an apple','May the foce be with you','It s over nine thousand']
listTest.forEach((element,index)=>{
 console.log(`${index +1}°Teste:\nMensagem inicial:\n${element}`)
 translateMessage(element)
})

function translateMessage(n){
    let lowerText = n.toLowerCase()
    let listAlph = []
    for(let i = 0; i< lowerText.length;i++){
        listAlph.unshift(lowerText[i])

    }
    let convertString = listAlph.join().split(',')
    let novaString = ''
    for(let i = 0 ; i <convertString.length;i++){
       novaString += `${convertString[i]}`
    }
    console.log(`Nova frase:\n${novaString}`)

     


}