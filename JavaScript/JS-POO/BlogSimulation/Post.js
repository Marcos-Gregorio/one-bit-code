class Post{
    constructor(Author,Coment,Post){
        this.Author = Author
        this.Coment = [Coment]
        this.Post = Post
    }

    AddComent(Coment){
        this.Coment.push(Coment)
    }
}

module.exports = Post