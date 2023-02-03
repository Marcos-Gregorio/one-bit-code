const listaString = ['Isaac Larrubia Ferreira Pontes','John Ronald Reuel Tolkien','christopher james paolini','Suzanne Marie Collins','Vilma Vieira da Silva']
function convertString(n){
    let arrayString = n.toUpperCase().split(" ")
    let arrayConvert = []
    let lastNameArray = []
    arrayString.forEach((element,index) => {
      if(index+1 < arrayString.length ){
        arrayConvert.push(element.charAt(0))
        }      
      if(index+1 >= arrayString.length ){
         lastNameArray.unshift(element)
        }  
    });
    const newConvert = (lastName,name)=>{
        let newString = ''
        lastName.forEach(element=>{
            newString += `${element},`
        })
        name.forEach(element=>{
             newString += ` ${element}.`
        })
        
        console.log(`Identificação do autor:\n${newString}`)
    }
    newConvert(lastNameArray,arrayConvert)
   
}
listaString.forEach((element,index)=>{
    console.log(`${index+1}°Teste:\nNome do Autor:\n${element}`)
    convertString(element)
})