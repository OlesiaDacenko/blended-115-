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
