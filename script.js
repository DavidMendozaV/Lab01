const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const sumarBtn = document.getElementById("sumar");
const restarBtn = document.getElementById("restar");
const multiplicarBtn = document.getElementById("multi");
const dividirBtn = document.getElementById("division");
const resultado = document.getElementById("resultado");


// Validaciones de entradas
function validateInput(number1, number2) {
  if (isNaN(parseFloat(number1)) || isNaN(parseFloat(number2))) {
    resultado.textContent =
      "Error: Input some valid numbers and try again...";
  } else {
    return [parseFloat(number1), parseFloat(number2)];
  }
}


// Handlers
function additionHandler(number1, number2) {
  let numbers = validateInput(number1, number2);
  const suma = numbers[0] + numbers[1];
  resultado.textContent = `Result: ${suma}`;
}
function substractionHandler(number1, number2) {
  let numbers = validateInput(number1, number2);
  const resta = numbers[0] - numbers[1];
  resultado.textContent = `Result: ${resta}`;
}

function multiplicationHandler(number1, number2) {
  let numbers = validateInput(number1, number2);
  let result = numbers[0] * numbers[1];
  resultado.textContent = `Result: ${result}`;
}

function divisionHandler(number1, number2) {
  let numbers = validateInput(number1, number2);
  let result = numbers[0] / numbers[1];
  resultado.textContent = `Result: ${result}`;
}

sumarBtn.addEventListener("click", () =>
  additionHandler(numero1.value, numero2.value)
);
restarBtn.addEventListener("click", () =>
  substractionHandler(numero1.value, numero2.value)
);
multiplicarBtn.addEventListener("click", () => {
  multiplicationHandler(numero1.value, numero2.value)
});
dividirBtn.addEventListener("click", () => {
  divisionHandler(numero1.value, numero2.value)
});