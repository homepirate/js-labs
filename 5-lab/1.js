class Person{
    constructor(name) {
        this.name = name;
        this.id = name.length
    }
    toString(){
        return `Name: ${this.name} - Personal Number: ${this.id}`
    }
    
}

const peoples = ['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']


for (people of peoples){
    console.log(new Person(people).toString())
}