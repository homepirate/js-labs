function print_matrix(n){
    // matrix = []
    // for (let i = 0; i < n; i++) {
    //     a = []
    //     for (let j = 0; j < n; j++) {
    //         a.push(n)
    //     }
    //     matrix.push(a)
    // }
    matrix = Array.from({ length: n }, () => Array(n).fill(n));
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}


print_matrix(3)
print_matrix(7)
print_matrix(2)

