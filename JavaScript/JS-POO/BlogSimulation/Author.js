class Author{
    constructor(Author,Post){
        this.Post = [Post]
        this.Author = Author
    }
    AddPost(Author, Post){
        if(this.Author == Author){
            this.Post.push(Post)
            console.log(`Post adicionado com sucesso.\n${Post}`)
        }else{
            console.log('Author Invalido')
        }
    }
}
module.exports = Author