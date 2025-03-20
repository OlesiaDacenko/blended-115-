// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// let number = Number(prompt("Введіть число 10:"));

// if (number === 10) {
//   alert("Вірно!");
// } else {
//   alert("Невірно");
// }

alert(Number(prompt("Введіть число 10:")) === 10 ? "Вірно" : "Невірно");

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// // Визначаємо чверть години
// let quarter;
// if (min >= 0 && min < 15) {
//   quarter = "у першу чергу";
// } else if (min >= 15 && min < 30) {
//   quarter = "у другу чергу";
// } else if (min >= 30 && min < 45) {
//   quarter = "у третю чергу";
// } else {
//   quarter = "у четверту чергу";
// }

// // Виводимо повідомлення
// alert(`${min} входить в ${quarter} чверть години.`);

function whatQuarter(lalala) {
  const min = Math.floor(Math.random() * (59 - 0) + 0);
  let quarter;

  if (min >= 0 && min < 15) {
    quarter = "у першу";
  } else if (min >= 15 && min < 30) {
    quarter = "у другу";
  } else if (min >= 30 && min < 45) {
    quarter = "у третю";
  } else {
    quarter = "у четверту";
  }
  return alert(`${min} входить ${quarter} чверть години.`);
}

whatQuarter();

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

const num = Number(prompt("введи 1, 2, 3 або 4"));
let result;
if (num === 1) {
  result = "Зима";
} else if (num === 2) {
  result = "Весна";
} else if (num === 3) {
  result = "Літо";
} else if (num === 4) {
  result = "Осінь";
} else {
  result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}
alert(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

const time = Number(prompt("введіть кількість хвилин:"));

let hours = Math.floor(time / 60);
let minutes = time % 60;

let formattedHours = String(hours).padStart(2, "0");
let formattedMinutes = String(minutes).padStart(2, "0");

console.log(`${formattedHours}:${formattedMinutes}`);

// alert(`${formattedHours}:${formattedMinutes}`);

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const login = prompt("введіть логін:");
console.log("введений логін: ", login);

if (login === "Адмін") {
  let password;
  password = prompt("введіть пароль:");
  if (password === "Я головний") {
    alert("Добрий день!");
  } else {
    alert("Невірний пароль!");
  }
} else if (login === "" || login === null) {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

let number = 0;
while (number <= 20) {
  console.log(number);
  number++;
}

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let sum = 0;
  for (let i = max; i >= min; i--) {
    console.log(i);
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
let result = getNumbers(12, 84);
console.log("результат підрахунку у функції: ", result);

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Not a number!";
  }
  return a < b ? a : b;
}

min(5, 26);

console.log(min(5, 26));
console.log(min(289, 27));
console.log(min(19, 1987));
console.log(min(5999, 264787));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true;
  }

  return confirm("Тобі уже є 18?");
}
isAdult(20);

console.log(isAdult(20));

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
  if (num % 3 === 0) {
    console.log("fizz");
  } else if (num % 5 === 0) {
    console.log("buzz");
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzbuzz");
  } else {
    console.log(num);
  }
}

fizzBuzz(344);

// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("fizzbuzz"); // Ділиться на 3 і 5
//     } else if (i % 3 === 0) {
//       console.log("fizz"); // Ділиться тільки на 3
//     } else if (i % 5 === 0) {
//       console.log("buzz"); // Ділиться тільки на 5
//     } else {
//       console.log(i); // Не ділиться ні на 3, ні на 5
//     }
//   }
// }
