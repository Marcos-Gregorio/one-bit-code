const listValue = [
    [[ 1, 5, 3], [ 6, 19, 11], [ 47, 128, 5],[1, 93, 57, 42, 103]],
    [[ 1, 3],[4, 8],[7, 5],[2,6]],
    [[],[],[],[]],
    [[100, 50],[60,100],[20,100,70],[10,40,80,90]]
]
listValue.forEach((element,index)=>{
    console.log(`${index + 1 } °Teste`)
    console.log(`Ordem Original:\n[${element}]`)
    orgResult(element)
})

function orgResult(element){  
    const listNumber = []
    element.forEach((element)=>{
        element.forEach((element)=>{
           listNumber.push(element)
        })
        
    })
    listNumber.sort((a,b) => a-b)
    console.log(`Ordem Inversa:\n${listNumber}`)
    
    
    
 
}