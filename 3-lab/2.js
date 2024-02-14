function common_elements(array_1, array_2){
    elemets = array_1.filter(element => array_2.includes(element))
    console.log(elemets.join('\n'))
}

common_elements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])
console.log('\n')
common_elements(['R', 'u', 's', 's', 'i', 'a'],
['R', 'u', 't'])

console.log('\n')

common_elements(['R', 'R'], ['R', 'i'])
