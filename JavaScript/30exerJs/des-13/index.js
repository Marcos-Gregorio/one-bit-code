
const ListValue = [
    547020743789,
    301354030348,
    301354030359,
    123456789872
]

const verificationValue = ( teste ) => {

    let StringConvert = teste.toString()

    const ParArray = []
    const ImparArray = []

    for  (let i = 0; i <StringConvert.length; i++){
        if(i  % 2 === 0){
            let IntValue = parseInt(StringConvert[i])
            ParArray.push(IntValue)
        }else{
            let IntValue = parseInt(StringConvert[i])
            ImparArray.push(IntValue)
        }  
    } 

    const ParValue = ParArray.reduce( (acc,index) => acc + index, 0 )
    const ImparValue = ImparArray.reduce( (acc,index) => acc + index, 0 )
    let VerificationValue = ((ParValue * 3 ) +ImparValue) % 10
   
    if (VerificationValue === 0){
        console.log('True')
    }else{
        console.log('False')
    }
}

ListValue.forEach( ( element , index ) =>{
    console.log(`${index +1}°Teste\n${element}`)
    verificationValue( element )
})