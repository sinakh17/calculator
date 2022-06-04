const renderOperators = function () {
  const btnPlus = document.createElement("button");
  const btnMinus = document.createElement("button");
  const btnTimes = document.createElement("button");
  const btnDevide = document.createElement("button");
  btnPlus.setAttribute("class", "btnOperator");
  btnPlus.textContent = "+";
  btnMinus.setAttribute("class", "btnOperator");
  btnMinus.textContent = "-";
  btnTimes.setAttribute("class", "btnOperator");
  btnTimes.textContent = "*";
  btnDevide.setAttribute("class", "btnOperator");
  btnDevide.textContent = "/";
  return [btnPlus, btnMinus, btnTimes, btnDevide];
};
export default renderOperators;
