function inverseArray(n){
    console.log(n)
    let newArray = [] 
    for(let i = 0; i< n.length;i++){
        newArray.unshift(n[i])
    }
    console.log(newArray)
}

let teste1 = [0, 9, 6, 8, 9, 1, 5, 7]
let teste2 = ['Oh','Hi','Mark']
let teste3 = [false,true,true,true]
let teste4 = ["It's","not",true,0]

console.log('1° Teste;')
inverseArray(teste1)
console.log('2° Teste;')
inverseArray(teste2)
console.log('3° Teste;')
inverseArray(teste3)
console.log('4° Teste;')
inverseArray(teste4)
