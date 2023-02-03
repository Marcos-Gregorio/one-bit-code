// Arrow Function é um meio moderno de ser criar funções anônimas
// Esse elemento não suporta o this,argument,super e new.target

function normalSum(a,b){
    return a + b
}
console.log(`Soma Normal:${normalSum(2,2)}`)

const anoymousSum = function(a,b){return a + b}

console.log(`Soma anônima:${anoymousSum(2,2)}`)

const arrowSum = (a,b)=>{
    return a + b
}

console.log(`Soma arrow function:${arrowSum}`)

const subtract = (a,b)=> a - b

console.log(`Subtração:${subtract(5,2)}`)

const double = n => `O dobro de ${n} é ${n*2}`
const number = 2
console.log(`O dobro:${double(number)}`)

// utilizano métodos

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0]==='P')
console.log(startingWithP)