var Calculator = /** @class */ (function () {
  function Calculator() {}
  Calculator.prototype.compute = function (a, b, op) {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (b === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
  };
  return Calculator;
})();

var calculator = new Calculator();
var calculateBtn = document.getElementById("calculateBtn");
var resultNode = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  try {
    var result = calculator.compute(num1, num2, operator);
    resultNode.textContent = "Result: " + result;
  } catch (error) {
    resultNode.textContent = error && error.message ? error.message : "Unexpected error.";
  }
});
