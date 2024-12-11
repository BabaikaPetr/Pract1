// Объект "Клиент банка"
const bankClient = {
  name: "Иван",
  accountNumber: "40817810099910004312",
  balance: 150000,
  toString: function () {
    return `Клиент: ${this.name}, Счет: ${this.accountNumber}, Баланс: ${this.balance}`;
  },
};

// Объект "Работник клиники"
const clinicWorker = {
  name: "Елена",
  position: "Врач-терапевт",
  experience: 15,
  department: "Терапия",
  toString: function () {
    return `Сотрудник: ${this.name}, Должность: ${this.position}, Стаж: ${this.experience} лет`;
  },
};

// Объект "Гражданин РФ"
const grazdanin = {
  name: "Петр",
  passport: "4510 123456",
  birthDate: "01.01.1990",
  citizenship: "РФ",
  toString: function () {
    return `Гражданин: ${this.name}, Паспорт: ${this.passport}, Гражданство: ${this.citizenship}`;
  },
};

// Функция показа объектов
function showObjects() {
  const resultDiv = document.getElementById("objectsResult");
  resultDiv.innerHTML = `
    ${bankClient.toString()}<br>
    ${clinicWorker.toString()}<br>
    ${grazdanin.toString()}
  `;
}

// Функция проверки числа
function checkNumber() {
  const number = document.getElementById("numberInput").value;
  const resultDiv = document.getElementById("numberResult");

  switch (Number(number)) {
    case 1:
      resultDiv.textContent = "Вы ввели число 1";
      break;
    case 2:
      resultDiv.textContent = "Вы ввели число 2";
      break;
    case 8:
    case 9:
      resultDiv.textContent = "Вы ввели число 8, а может 9";
      break;
    default:
      resultDiv.textContent = "Введите число 1, 2, 8 или 9";
  }
}

// Функция определения четверти часа
function checkQuarter() {
  const min = document.getElementById("minuteInput").value;
  const resultDiv = document.getElementById("quarterResult");

  if (min === "" || isNaN(min) || min < 0 || min > 59) {
    resultDiv.textContent = "Введено некорректное значение минуты";
    return;
  }

  let quarter;
  switch (true) {
    case min >= 0 && min < 15:
      quarter = "Первая";
      break;
    case min >= 15 && min < 30:
      quarter = "Вторая";
      break;
    case min >= 30 && min < 45:
      quarter = "Третья";
      break;
    default:
      quarter = "Четвертая";
  }

  resultDiv.textContent = ` ${quarter} четверть часа`;
}

// Функция проверки первой цифры строки
function checkFirstChislo() {
  const str = document.getElementById("digitInput").value;
  const resultDiv = document.getElementById("digitResult");

  if (!str) {
    resultDiv.textContent = "Строка не введена";
    return;
  }

  const firstChar = str.charAt(0);
  if (firstChar === "1" || firstChar === "2" || firstChar === "3") {
    resultDiv.textContent = `Первая цифра ${firstChar}`;
  } else {
    resultDiv.textContent = "нет";
  }
}

// Функция проверки номера телефона
function checkPhone() {
  const phoneNumber = document.getElementById("phoneInput").value;
  const resultDiv = document.getElementById("phoneResult");

  if (!phoneNumber) {
    resultDiv.textContent = "Номер телефона не введен";
    return;
  }

  // Регулярное выражение для проверки формата номера телефона (11 цифр, начинается с 7)
  const phoneRegex = /^7[0-9]{10}$/;

  if (phoneRegex.test(phoneNumber)) {
    resultDiv.textContent = "Номер телефона корректный";

    // Проверяем наличие номера в строке
    if (phoneNumber.includes("9256252039")) {
      resultDiv.textContent += " и содержит ваш номер";
    } else {
      resultDiv.textContent += " но не содержит ваш номер";
    }
  } else {
    resultDiv.textContent =
      "Неверный формат номера. Используйте формат 79991234567";
  }
}
