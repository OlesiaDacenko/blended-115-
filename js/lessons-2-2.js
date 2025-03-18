// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ["jazz", "blues"];
console.log(styles);
styles.push("rock-n-roll");
console.log(styles);
styles[1] = "classic";
console.log(styles);

// function logItem(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItem(styles);

// function logItem(array) {
//   array.forEach((item, index) => {
//     console.log(`${index + 1} - ${item}`);
//   });
// }

// logItem(styles);

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const userName = prompt("What is your name?");
//   const modifyUserName = userName.toLowerCase();
//   const modifyArray = array.map((item) => item.toLowerCase());
//   if (modifyArray.includes(modifyUserName)) {
//     alert(`Welcome, ${userName}!`);
//   } else {
//     alert("User not found");
//   }
// }
// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function calculateAverege(...args) {
  const numbers = args.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  if (numbers.length === 0) {
    console.log("No valid numbers provided.");
    return 0;
  }

  const total = numbers.reduce((sum, item) => sum + item, 0);
  const average = total / numbers.length;

  return average;
}

console.log(calculateAverege(2, 3, "lesia", 798, 8, 3, 356));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function neiborSum(array) {
  return array
    .slice(0, -1)
    .map((item, indx) => (item = item + array[indx + 1]));
}

console.log(neiborSum(someArr));

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(arr) {
  if (!Array.isArray(arr)) {
    return "Sory, it is not an array!";
  } else {
    return Math.min(...arr);
  }
}

console.log(findSmallestNumber(numbers));

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'
function findLongestWord(string) {
  return string
    .split(" ")
    .reduce(
      (longest, word) => (longest.length < word.length ? word : longest),
      " "
    );
}
