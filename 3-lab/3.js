function rotation(array, count){
    for (let i=0; i<count; i++){
        array.push(array.shift())
    }
    return array.join(' ')
}


console.log(rotation([51, 47, 32, 61, 21], 2))
console.log(rotation([32, 21, 61, 1], 4))
console.log(rotation([2, 4, 15, 31], 5))


