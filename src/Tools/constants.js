import renderCalc from "../Render/renderCalc";
renderCalc();
const numBtns = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".btnOperator");
const equalsButton = document.querySelector(".equal");
const deleteButton = document.querySelector(".del");
const allClearButton = document.querySelector(".allClear");
const prevOperandTextElement = document.querySelector(".prev-operand");
const CurOperandTextElement = document.querySelector(".cur-operand");
console.log(equalsButton);
export {
  numBtns,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
  prevOperandTextElement,
  CurOperandTextElement,
};
