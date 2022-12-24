'use strict';

let money;
let time;
let appData;
function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате YYYY-MM-DD');

  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
          console.log('Поля заполнены правильно');
          appData.expenses[typeOfPayment] = amountOfPayment;
        } else {
          console.log('Необходимо заполнить поля данных!');
        }
      }
    },
  };
}
start();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed(1);
  alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Вы нищеброд');
  } else {
    console.log('Вы более менее');
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
      percent = +prompt('Под какой процент?');
    appData.monthIncome = (save / 100 / 12) * percent;
    appData.income.unshift(appData.monthIncome);
    alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let typeOfOptExpense = prompt('Статья необязательных расходов?');
    let amountOfOptExpense = +prompt('Сколько потратили на эту хрень?');
    if (
      typeof typeOfOptExpense === 'string' &&
      typeof (typeOfOptExpense != null) &&
      amountOfOptExpense != null &&
      typeOfOptExpense != '' &&
      amountOfOptExpense != '' &&
      typeOfOptExpense.length < 50
    ) {
      appData.optionalExpenses[typeOfOptExpense] = amountOfOptExpense;
    } else {
      console.log('Необходимо заполнить поля данных верным способом!');
    }
  }
}
chooseOptExpenses();
console.log(appData);
