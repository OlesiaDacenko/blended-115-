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
