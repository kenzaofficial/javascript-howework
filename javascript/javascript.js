'use strict';

let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let typeOfPaymentOne = prompt(
  'Введите обязательную статью расходов в этом месяце'
);
let amountofPaymentOne = prompt('Во сколько обойдется?');
let typeOfPaymentTwo = prompt(
  'Введите обязательную статью расходов в этом месяце'
);
let amountofPaymentTwo = prompt('Во сколько обойдется?');

var appData = {
  budget: money,
  timeData: time,
  expenses: {
    typeOfPaymentOne: amountofPaymentOne,
    typeOfPaymentTwo: amountofPaymentTwo,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};

console.log(appData);

console.log(appData.budget / 30);
