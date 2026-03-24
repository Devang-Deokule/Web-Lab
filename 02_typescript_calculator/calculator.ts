type Operator = "+" | "-" | "*" | "/";

class Calculator {
  public compute(a: number, b: number, op: Operator): number {
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
  }
}

const calculator = new Calculator();

const calculateBtn = document.getElementById("calculateBtn") as HTMLButtonElement;
const resultNode = document.getElementById("result") as HTMLParagraphElement;

calculateBtn.addEventListener("click", () => {
  const num1 = Number((document.getElementById("num1") as HTMLInputElement).value);
  const num2 = Number((document.getElementById("num2") as HTMLInputElement).value);
  const operator = (document.getElementById("operator") as HTMLSelectElement).value as Operator;

  try {
    const result = calculator.compute(num1, num2, operator);
    resultNode.textContent = `Result: ${result}`;
  } catch (error) {
    if (error instanceof Error) {
      resultNode.textContent = error.message;
      return;
    }
    resultNode.textContent = "Unexpected error.";
  }
});
