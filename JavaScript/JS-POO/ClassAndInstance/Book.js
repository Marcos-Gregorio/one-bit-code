class Book{
    constructor(name,author,value = 0){
        this.name = name,
        this.author = author,
        this.value = value,
        this.publish = false

    }
    PublishBook(){
        if( !this.publish ){
           console.log('Livro Publicado')
           this.publish = true
        }else{
            console.log('Livro não cadastrado ')
            this.publish = false
        }
        
    }
}
const ArrayTest = []
const Book1 = new Book('livro 1','autor 1',10)
ArrayTest.push(Book1)

const Book2 = new Book('livro 2','autor 2',5)
ArrayTest.push(Book2)



ArrayTest.forEach(element => {
    console.log(element)
    
});