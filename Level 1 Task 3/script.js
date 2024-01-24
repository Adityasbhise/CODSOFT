document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".button");
  let input = document.getElementById("input");
  let expression = "";

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let clickedButtonValue = event.target.textContent;

      switch (clickedButtonValue) {
        case "=":
          try {
            if (expression.includes("/ 0")) {
              throw new Error("Division by zero is not allowed");
            }

            expression = new Function('return ' + expression.replace(/÷/g, '/').replace(/×/g, '*'))();
            input.value = expression;
          } catch (error) {
            input.value = "Error";
          }
          break;

        case "AC":
          expression = "";
          input.value = 0;
          break;

        case "DEL":
          expression = expression.substring(0, expression.length - 1);
          input.value = expression;
          break;

        default:
          expression += clickedButtonValue;
          input.value = expression;
      }
    });
  });
});
