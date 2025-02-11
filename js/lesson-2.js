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
