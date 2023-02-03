function mediaA(n){
    let note = n
    console.log(n)
    let cont = 0
    note.forEach((element,index) => {
        cont+= element
        console.log(`${index+1}°\n nota: ${element}`)
        return cont        
    });
        console.log(cont)
        let countF = cont/note.length
        console.log(`Média Final ${countF}`)

   
    
} 
let test1 = [10 , 9, 6, 8, 9, 1, 5, 7]
let test2 = [2 , 5, 7, 1, -2]
let test3 = [10 , 10, 10, 10, 9]
let test4 = [25 , 75]

console.log('1° Teste')
mediaA(test1)
console.log('2° Teste')
mediaA(test2)
console.log('3° Teste')
mediaA(test3)
console.log('4° Teste')
mediaA(test4)