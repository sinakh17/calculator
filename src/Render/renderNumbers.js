const renderNumbers = function () {
  const numbers = [];
  for (let i = 1; i < 10; i++) {
    const btn = document.createElement("button");
    btn.setAttribute("class", "number");
    btn.textContent = i;
    numbers.push(btn);
  }
  const btn = document.createElement("button");
  btn.setAttribute("class", "number");
  btn.textContent = 0;
  numbers.push(btn);
  return numbers;
};
export default renderNumbers;
