// Глобальные переменные
let savedNumber; // для задания 1
let secretNumber = Math.floor(Math.random() * 100) + 1; // для задания 3

// Задание 1 - просто сохраняем число в переменную
function saveNumber() {
  // Получаем число из поля ввода
  savedNumber = document.getElementById("number1").value;
  // Показываем результат
  document.getElementById("result1").textContent =
    "Сохранённое число: " + savedNumber;
}

// Задание 2 - простой калькулятор
function calculate(operation) {
  // Получаем числа из полей ввода
  let num1 = Number(document.getElementById("calc1").value);
  let num2 = Number(document.getElementById("calc2").value);
  let result;

  // Выполняем операцию в зависимости от нажатой кнопки
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  }

  // Показываем результат
  document.getElementById("result2").textContent = "Результат: " + result;
}

// Задание 3 - работа с числом
function checkNumber() {
  // Получаем введенное число
  let userNumber = Number(document.getElementById("guessNumber").value);

  // Выполняем действия с числом
  let result = userNumber * 2 + 7;

  // Показываем результат
  document.getElementById("result3").textContent =
    "Загаданное число было: " + secretNumber + ". Ваш результат: " + result;
}

// Задание 4 - вычисление возраста
function calculateAge() {
  // Получаем данные пользователя
  let name = document.getElementById("userName").value;
  let birthYear = Number(document.getElementById("birthYear").value);

  // Вычисляем возраст
  let today = new Date();
  let age = today.getFullYear() - birthYear;

  // Показываем результат
  document.getElementById("result4").textContent = name + ": " + age;
}
