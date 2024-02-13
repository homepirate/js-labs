function from_two_to_ten(binary_num){
    // binary_array = Array.from(binary_num.split('')).map(Number)
    return parseInt(binary_num, 2)
}


console.log(from_two_to_ten('00001001'))
console.log(from_two_to_ten('11110000'))
console.log(from_two_to_ten('1000'))
