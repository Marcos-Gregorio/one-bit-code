let firstName = String(prompt('Digite o primeiro nome:'))
let lastName = String(prompt('Digite o seu sobronome:'))
let study= String(prompt('Digite seu campo de estudo'))
let date = parseInt(prompt('Digite seu ano de nascimento:'))
let timeNow = new Date()
let getYear = timeNow.getFullYear()
let idade = getYear - date
alert(`Nome:${firstName}\nSobrenome:${lastName}\nAréa de estudo:${study}\nIdade:${idade}`)

