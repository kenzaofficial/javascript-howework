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
for (let key in appData) {
  console.log(`Наша программа включает в себя данные: ${key}`);
}

//  ----------------------------------------------ЗАДАНИЕ НОМЕР 6
//  Используя только файл скрипта (html руками не трогать) выполнить такие действия:
// ·        Восстановить порядок в меню, добавить пятый пункт
// ·        Заменить картинку заднего фона на другую из папки img
// ·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
// ·        Удалить рекламу со страницы
// ·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
//  Проверить, чтобы все работало и не было ошибок в консоли

const menuItems = document.querySelectorAll('.menu-item');
const newItem = document.createElement('li');
const menuList = document.querySelector('.menu');
const body = document.body;
const title = document.querySelector('#title');
const adv = document.querySelector('.adv');
const columns = document.querySelectorAll('.column');
const promptAnswer = document.querySelector('#prompt');
menuList.insertBefore(menuItems[2], menuItems[1]);
menuList.appendChild(newItem);
newItem.textContent = 'Пятый пункт';
newItem.classList.add('menu-item');
body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
title.textContent = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(adv);
promptAnswer.textContent = prompt('Как вы относитесь к технике Apple?');
