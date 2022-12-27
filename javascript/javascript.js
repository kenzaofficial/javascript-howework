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

    detectDayBudget: function () {
      appData.moneyPerDay = (appData.budget / 30).toFixed(1);
      alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
      if (appData.moneyPerDay < 100) {
        console.log('Вы нищеброд');
      } else {
        console.log('Вы более менее');
      }
    },
    checkSavings: function () {
      if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
          percent = +prompt('Под какой процент?');
        appData.monthIncome = (save / 100 / 12) * percent;
        appData.income.unshift(appData.monthIncome);
        alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
      }
    },
    chooseOptExpenses: function () {
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
    },
    chooseIncome: function () {
      let items = prompt(
        'Что принесет доп. доход??(Перечислите через запятую)'
      );

      if (items != '' && items != null) {
        console.log('введена строка, она как минимум не пустая, отлично');
        appData.income = items.split(',');
        appData.income.push(prompt('может еще что то забыли добавить?'));
        appData.income.sort();
        appData.income.forEach(function (item, j) {
          alert(`Способы дополнительного заработка: ${j + 1}. ${item}`);
        });
      } else {
        console.log('либо єто не строка либо она пустая либо вы нажали отмена');
      }
    },
  };
}
start();
for (let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key}`);
}

// 1) Написать проверку, что пользователь может:

// ·        Ввести в дополнительных доходах (chooseIncome) только строку

// ·        Не может оставить строку пустой

// ·        Не может отменить вопрос

// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

// 4) Проверить, чтобы все работало и не было ошибок в консоли

// 5) Добавить папку с уроком на свой GitHub
// Вопросы к этому заданию

// Как перебрать свойства объекта?
