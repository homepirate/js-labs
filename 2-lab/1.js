function sum_nums(num){
    sum_ = 0
    num_str_array = num.toString().split('')

    for (let n of num_str_array){
        sum_ += parseInt(n)
    }
    return sum_
}


console.log(sum_nums(101))
console.log(sum_nums(245678))
console.log(sum_nums(97561))
console.log(sum_nums(543))
