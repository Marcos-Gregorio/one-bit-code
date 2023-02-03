const listString = ['This is Thee','ssd','Lorem ipsum','QQwweerrttyy']
let test = 'This is Thee';
listString.forEach((element,index)=>{
    console.log(`\n${index +1}°Teste\nString Test:\n${element}\n`)
    introEmergencia(element)
})


function introEmergencia(n){
    const verificationArray = []
    const loweCase = n.toLowerCase()
    for(let i = 0; i < loweCase.length; i++){
        if( n[i] == ' ' ){
           
        
        }else{
            verificationArray.push(loweCase[i])

        }     
    }
   const StringVerification = verificationArray.map( str => [
   str,
   verificationArray.filter( n => str === n).length
   ])
   let valueString = StringVerification[0][1]
   let confirmValue = ''
   
   StringVerification.forEach((element)=>{
    if( element[1] === valueString){
        confirmValue = 'Verdadeiro' 
      
    }else{
         confirmValue = 'Falso' 
    }
   
   })
console.log(confirmValue)
   return StringVerification

}