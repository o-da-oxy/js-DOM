function subtract() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let result = document.getElementById('result');
    let res = Number(secondNumber) - Number(firstNumber);
    result.innerHTML = res;
}