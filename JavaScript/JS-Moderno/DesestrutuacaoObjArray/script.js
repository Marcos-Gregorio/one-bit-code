const person = {
    name:'Luke',
    job:'Farmer',
    parents:['Anakin','Padme']

}
// Metodo classico
const name = person.name
// Desetruturando o objeto.
const { job,parents} =person
console.log(name,job,parents)
const [father,mother] = parents
console.log(father,mother)
function createUser({name,job,parents}){
    const id = Math.floor(Math.random()*99999)
    return {
        id,name,job,parents
    }
}

const luke =createUser(person)
console.log(luke)

