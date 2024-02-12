user_num = 12;
array = [2, 3, 6, 7, 10]

var max_num = 0

for (let num of array){
    if (user_num % num == 0){
        max_num = num
    }
}

console.log((max_num > 0) ? `Число делится на ${max_num}` : 'Не делится')