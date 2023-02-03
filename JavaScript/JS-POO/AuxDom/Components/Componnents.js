class Componnents {
    #Element
    constructor(Tag){
        this.Tag = Tag
        this.Build()
       
    }
    Build(){
          return `<${this.Tag}>Um texto Text</${this.Tag}>`
      
    }
  
}


