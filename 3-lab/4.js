function check_matrix(matrix){
    sum_ = []
    for (array of matrix){
        sum_.push(array.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
    }
    for (let i = 0; i < matrix.length; i++) {
        let column_sum = 0;
        for (let j = 0; j < matrix.length; j++) {
            column_sum += matrix[j][i];
        }
        sum_.push(column_sum);
    }
    

    return (new Set(sum_).size == 1) ? true : false
}


console.log(check_matrix([
                        [4, 5, 6],
                        [6, 5, 4],
                        [5, 5, 5]]))

console.log(check_matrix([
                        [11, 32, 45],
                        [21, 0, 1],
                        [21, 1, 1]]))

console.log(check_matrix([
                        [1, 0, 0],
                        [0, 0, 1],
                        [0, 1, 0]]))