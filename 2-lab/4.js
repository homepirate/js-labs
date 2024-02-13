
function calc(num_1, oper, num_2){
    operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
      };

      res = operators[oper](num_1, num_2)
      return res.toFixed(2)
}


console.log(calc(5, '+', 10))
console.log(calc(25.5, '-', 3))
console.log(calc(9, '%', 4))

