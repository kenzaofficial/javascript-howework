'use strict';

let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
  budget: money,
  timeData: time,
  expenses: {
    // typeOfPayment: amountofPayment,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i++) {
  let typeOfPayment = prompt(
      'Введите обязательную статью расходов в этом месяце',
      ''
    ),
    amountOfPayment = prompt('Во сколько обойдется?', '');
  if (
    typeof typeOfPayment === 'string' &&
    typeof (typeOfPayment != null) &&
    amountOfPayment != null &&
    typeOfPayment != '' &&
    amountOfPayment != '' &&
    typeOfPayment.length < 50
  ) {
    console.log('done');
    appData.expenses[typeOfPayment] = amountOfPayment;
  } else {
    console.log('Необходимо заполнить поля данных!');
  }
}

// альтернативній вариант

// let i = 0;
// while (i < 2) {
//   let typeOfPayment = prompt(
//       'Введите обязательную статью расходов в этом месяце',
//       ''
//     ),
//     amountOfPayment = prompt('Во сколько обойдется?', '');
//   if (
//     typeof typeOfPayment === 'string' &&
//     typeof (typeOfPayment != null) &&
//     amountOfPayment != null &&
//     typeOfPayment != '' &&
//     amountOfPayment != '' &&
//     typeOfPayment.length < 50
//   ) {
//     console.log('done');
//     appData.expenses[typeOfPayment] = amountOfPayment;
//   } else {
//     console.log('Необходимо заполнить поля данных!');
//   }
//   i++;
// }

appData.moneyPerDay = appData.budget / 30;
console.log('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Вы нищеброд');
} else {
  console.log('Вы более менее');
}
