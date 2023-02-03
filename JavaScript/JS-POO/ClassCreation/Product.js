
class Product {

    constructor(name,description,price,inStock = 0){
        this.name = name,
        this.description = description,
        this.price = price,
        this.inStock =0
    }
    
    AddToStock(Quantity){
        if(Quantity < 0 ){
            console.log('Valor inválido')
        }else{
            this.inStock = Quantity
            console.log(`Nome do produto:${this.name}\nQuantidade em estoques:${this.inStock}`)
        }
    }
    
    CalculateDiscount(Percent){
        if(Percent > 100 || Percent< 0){
            console.log('Valor inválido')
        }else{
            let Discount = (this.price*Percent)/100
            console.log(`Valor do desconto:${Discount}`)
            this.price = this.price - Discount
            console.log(`Novo valor do produto:\nR$:${this.price} `)
        }
    }

}

const shinyStone = new Product('Shiny Stone','Stone para deixar o pokemon em shiny',10000,)
console.log(shinyStone)

shinyStone.AddToStock(5)
console.log(shinyStone)

shinyStone.CalculateDiscount(5.5)
console.log(shinyStone)
