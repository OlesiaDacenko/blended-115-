// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
const newNam = numbers.map((item) => item * item);
console.log(newNam);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const change = data
  .map((item) => item.values)
  .reduce((acc, itt) => acc.concat(itt), []);
console.log(change);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

const people = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const persons = people.filter((item) => item.age >= 20);
const person = people.find((item) => item.age >= 20);
const per = people.some((item) => item.age >= 20);

console.log(per);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numberss = [2, 4, 6, 8, 10];
const num1 = numberss.every((item) => item % 2 === 0);
console.log(num1);

// Знайдіть перше непарне число

const numbers1 = [2, 1, 6, 8, 9, 10, 12];

const num3 = numbers1.find((item) => item % 2 === 0);
console.log(num3);

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbersArray = [4, 2, 5, 1, 3];
const incr = numbersArray.reduce((acc, itt) => (acc < itt ? itt : acc), 0); // поверне найбільше
const increase = numbersArray.sort((a, b) => a - b);
console.log(`increase: ${increase}`);
const ex111 = numbersArray.sort((a, b) => b - a);

console.log(`ex: ${ex111}`);

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ["banana", "orange", "apple", "pear"];
const newStringArray = stringArray.sort((a, b) => a.localeCompare(b));
console.log(newStringArray);

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const users = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const newUsers = users.sort((a, b) => a.age - b.age);
console.log(newUsers);

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user1 = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const newUser1 = user1.filter((item) => item.age > 20);
console.log(newUser1);

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

const numBers = [1, 2, 3, 4, 5];

const newNumBers = numBers.reduce((acc, num) => (acc += num), 0);
console.log(newNumBers);

// Розроби клас Calculator, який дозволяє виконувати арифметичні //  операції над числом за допомогою методів класу, підтримуючи // ланцюжковий виклик (method chaining). // // Вимоги до класу Calculator // - Метод number(value) // Встановлює початкове значення для наступних обчислень. // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод getResult, Повертає поточний результат усіх операцій. // Не змінює значення, просто повертає його. // - метод add - Додає value до поточного значення. // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів. // - метод multiply -Множить поточне значення на value. Повертає this. // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка // Приклад використання: // const calc = new Calculator();

// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24
