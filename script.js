function calculate(operator) {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  let res = 0;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").innerText = "Enter both numbers";
    return;
  }

  switch(operator) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = b !== 0 ? a / b : "Can't divide by 0"; break;
  }

  document.getElementById("result").innerText = "Result: " + res;
}