// high-order function e arrays 

// Array de exemplos

const personagem = [
    {nivel: 42, nome: "Thrall", raca:"Orc",classe:"Xamã"},
    {nivel: 28, nome:"Garrosh", raca:"Orc",classe:"Guerreiro"},
    {nivel:35, nome:"Varok",raca:"Orc",classe:"Guerreiro"},
    {nivel:35,nome:"Uther",raca:"Humano",classe:"Paladino"},
    {nivel:26,nome:"Jaina",raca:"Humana",classe:"Maga"},
    {nivel:39,nome:"Tyrande",raca:"Elfo Noturno",classe:"Sarerdotista"},
    {nivel:29,nome:"Muradin",raca:"Anão",classe:"Guerreiro"}
]
// H-O function:Map
 
// forma tradicional
const nome = []
for(let i = 0;i<personagem.length;i++){
    const personagens =personagem[i]
    nome.push(personagens.nome)

}
console.log('Forma tradicional.')
console.log(nome)
// Forma Funcional
/*
    map:permite obter um novo array a partir de um array
    existente
*/
console.log('Function map')
const nomes= personagem.map(function(personagens){
    console.log(personagens.nome)
    return personagens.nome
})

// Filter
console.log('Função Filter')

// Forma Tradicional

const orc = []
for(let i = 0; i <personagem.length;i++){
    const personagens = personagem[i]
    if(personagens.raca === 'Orc'){
        orc.push(personagens) 
    }
}
console.log(orc)

// Forma Funcional
/*
    filter(): permite obter um novo array contendo
    apenas elementos específicos de um array existe

*/ 
console.log('Forma Funcional')
const orcs = personagem.filter(function(personagens){
    return personagens.raca ==='Orc'
})
console.log(orcs)

// Reduce
console.log('Função Reduce')
console.log("forma tradicional")
let nvlTolta = 0
for(let i = 0; i <personagem.length;i++){
    nvlTolta += personagem[i].nivel
}
console.log(nvlTolta)
/*
    reduce():serve para reduzir um array existente a um valor
    final qualquer, passando um valor entre cade iteração sob
    -re esse array e retornando ele no final.
*/ 
console.log('Forma funcional')
const nivelTotal = personagem.reduce(function(acumulador,personagens){
    return acumulador + personagens.nivel
},0)
console.log(nivelTotal)
console.log('forma funcional 2')
const racas = personagem.reduce(function(acumulador,personagens){
    if(acumulador[personagens.raca]) {
        acumulador[personagens.raca].push(personagens)
    } else {
        acumulador[personagens.raca] = [personagens]
    }
   
    return acumulador
},{})
console.log(racas)

// Sort

// sort():ordena os elmentos de um array a partir de 
// comparações entre duplas de elementos.

personagem.sort(function(a,b){
    return a.nivel - b.nivel
})



