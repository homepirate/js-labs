function subtract() {
    var num_1 = document.getElementById("firstNumber").value
    var num_2 = document.getElementById("secondNumber").value
    var res = parseFloat(num_1) - parseFloat(num_2)
    el = document.getElementById("result")
    el.innerText = res
}