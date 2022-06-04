import Calculator from "./Entity/Calculator";
import {
  numBtns,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
  prevOperandTextElement,
  CurOperandTextElement,
} from "./Tools/constants";
const calc = new Calculator(prevOperandTextElement, CurOperandTextElement);
console.log(calc);
numBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    calc.appendNumber(btn.innerText);
    calc.updateDisplay();
  });
});
operationButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    calc.chooseOperation(btn.innerText);
    calc.updateDisplay();
  });
});
equalsButton.addEventListener("click", function () {
  calc.compute();
  calc.updateDisplay();
});
allClearButton.addEventListener("click", function () {
  calc.clear();
  calc.updateDisplay();
});
deleteButton.addEventListener("click", function () {
  calc.delete();
  calc.updateDisplay();
});
