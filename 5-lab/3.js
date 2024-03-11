const array_1 = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ]

const array_2 = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]

let products = new Map()

class Product{
    constructor(name, count){
        this.name = name
        this.count = parseInt(count)
    }
    
    add_count(num){
        this.count += parseInt(num)
    }
    
    toString(){
        return `${this.name} -> ${this.count}`
    }
}

for (let i = 0; i < array_1.length; i+=2){
    products.set(array_1[i], new Product(array_1[i], array_1[i+1]))
}

for (let i = 0; i < array_2.length; i+=2){
    if (!products.has(array_2[i]))
        products.set(array_2[i], new Product(array_2[i], array_2[i+1]))
    else
        products.get(array_2[i]).add_count(array_2[i+1])
}
products.forEach(item => console.log(item.toString()));
