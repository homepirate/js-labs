function f(a){
    sum_1 = 0
    sum_2 = 0
    for (let i = 0; i < a.length; i++){
        sum_1 += a[i]
        if (a[i] % 2 == 0){
            a[i] += i
        }
        else{
            a[i] -= i
        }
        sum_2 += a[i]
    }
    console.log(a)
    console.log(sum_1)
    console.log(sum_2)
}


f([5, 15, 23, 56, 35])
f([-5, 11, 3, 0, 2])