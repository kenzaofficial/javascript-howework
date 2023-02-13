window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  const doc = document;
  const tab = doc.querySelectorAll(".info-header-tab");
  const info = doc.querySelector(".info-header");
  const tabContent = doc.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
      tab[i].classList.remove("active");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
      tab[b].classList.add("active");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  //timer

  let deadline = "2023-02-23";

  function getTimeRemaining(endtime) {
    let timeDifferenceMilliSeconds =
      Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((timeDifferenceMilliSeconds / 1000) % 60);
    let minutes = Math.floor((timeDifferenceMilliSeconds / 60000) % 60);
    let hours = Math.floor((timeDifferenceMilliSeconds / 60000 / 60) % 24);
    let days = Math.floor(timeDifferenceMilliSeconds / 60000 / 60 / 24);
    let secondsName = timer.querySelector("#secondsName");
    let minutesName = timer.querySelector("#minutesName");
    let hoursName = timer.querySelector("#hoursName");
    let daysName = timer.querySelector("#daysName");

    const secondEndingSingle = [51, 41, 31, 21, 1];
    const secondEndingPlural = [54, 53, 52, 44, 43, 42, 34, 33, 32, 24, 23, 22, 4, 3, 2];
    const addingZero = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


    let singleSeconds = secondEndingSingle.includes(seconds);
    let pluralSeconds = secondEndingPlural.includes(seconds);
    let zeroSeconds = addingZero.includes(seconds);

    let singleMinutes = secondEndingSingle.includes(minutes);
    let pluralMinutes = secondEndingPlural.includes(minutes);
    let zeroMinutes = addingZero.includes(minutes);

    let singleHours = secondEndingSingle.includes(hours);
    let pluralHours = secondEndingPlural.includes(hours);
    let zeroHours = addingZero.includes(hours);

    let singleDays = secondEndingSingle.includes(days);
    let pluralDays = secondEndingPlural.includes(days);
    let zeroDays = addingZero.includes(days);

    // добавляем нолик когда число на таймере меньше 10
    if (zeroSeconds) {
      seconds = "0" + seconds;
    }

    // меняем окончания оставшихся секунд в зависимости от числа на таймере
    if (pluralSeconds) {
      secondsName.textContent = "cекунды";
    } else if (singleSeconds) {
      secondsName.textContent = "секунда";
    }
    else {
      secondsName.textContent = "секунд";
    }

    // добавляем нолик когда число на таймере меньше 10
    if (zeroMinutes) {
      minutes = "0" + minutes;
    }

    // меняем окончания оставшихся минут в зависимости от числа на таймере
    if (pluralMinutes) {
      minutesName.textContent = "минуты";
    } else if (singleMinutes) {
      minutesName.textContent = "минута";
    } else {
      minutesName.textContent = "минут";
    }

    // добавляем нолик когда число на таймере меньше 10
    if (zeroHours) {
      hours = "0" + hours;
    }

    // меняем окончания оставшихся часов в зависимости от числа на таймере
    if (pluralHours) {
      hoursName.textContent = "часа";
    } else if (singleHours) {
      hoursName.textContent = "час";
    } else {
      hoursName.textContent = "часов";
    }

    // добавляем нолик когда число на таймере меньше 10
    if (zeroDays) {
      days = "0" + days;
    }

    // меняем окончания оставшихся дней в зависимости от числа на таймере
    if (pluralDays) {
      daysName.textContent = "дня";
    } else if (singleDays) {
      daysName.textContent = "день";
    } else {
      daysName.textContent = "дней";
    }

    return {
      total: timeDifferenceMilliSeconds,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let days = timer.querySelector(".days");
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let updatingTime = getTimeRemaining(endtime);
      days.textContent = updatingTime.days;
      hours.textContent = updatingTime.hours;
      minutes.textContent = updatingTime.minutes;
      seconds.textContent = updatingTime.seconds;
      if (updatingTime.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock("timer", deadline);
});
