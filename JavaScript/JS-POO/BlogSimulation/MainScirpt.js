const Post = require("./Post");
const Coment = require("./Comment")
const Author = require('./Author')

// Utilizando a classe Coment,para fazer um novo Comentario
const firstComent = new Coment('vava 2023')


const FirstAuthor = new Author('marcos','Como o cenario competitivo do vava melhor em 2 anos')

const FirstPost = new Post(FirstAuthor.Author,firstComent.Coment,FirstAuthor.Post)

console.log('Teste Autor')
console.log( FirstAuthor )

console.log('Classe Post com um Unico post')
console.log( FirstPost )

console.log("Adicionando mais um post,utilizando a classe Author,aonde conseguimos instancia o valor")
FirstAuthor.AddPost('marcos','Second Post')
console.log( FirstAuthor )

console.log('Adicionando mais um comentario utilizando o methodo "AddComent",criado na classe Comment')
FirstPost.AddComent('Segundo Coment')
console.log( FirstPost )

FirstPost.AddComent('Terceiro Coment')

console.log( FirstPost )