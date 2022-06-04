class Calculator {
  constructor(prevOperandTextElement, CurOperandTextElement) {
    this.prevOperandTextElement = prevOperandTextElement;
    this.CurOperandTextElement = CurOperandTextElement;
    this.clear();
  }
  clear() {
    this.curentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.curentOperand = this.curentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.curentOperand.includes(".")) return;
    this.curentOperand = this.curentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.curentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.curentOperand;
    this.curentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const cur = parseFloat(this.curentOperand);
    if (isNaN(prev) || isNaN(cur)) return;
    switch (this.operation) {
      case "+":
        computation = prev + cur;
        break;
      case "-":
        computation = prev - cur;
        break;
      case "*":
        computation = prev * cur;
        break;
      case "/":
        computation = prev / cur;
        break;
      default:
        return;
    }
    this.curentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNum = number.toString();
    const integerDigit = parseFloat(stringNum.split(".")[0]);
    const decimalDigit = stringNum.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigit)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigit.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigit != null) {
      return `${integerDisplay}.${decimalDigit}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.CurOperandTextElement.innerText = this.getDisplayNumber(
      this.curentOperand
    );
    if (this.operation != null) {
      this.prevOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.prevOperandTextElement.innerText = "";
    }
  }
}
export default Calculator;
