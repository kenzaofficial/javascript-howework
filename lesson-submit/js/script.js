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

  let deadline = "2023-03-04";

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

    const addingZero = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    function getSingle(time) {
      const secondEndingSingle = [51, 41, 31, 21, 1];
      return secondEndingSingle.includes(time);
    }
    function getPlural(time) {
      const secondEndingPlural = [
        54, 53, 52, 44, 43, 42, 34, 33, 32, 24, 23, 22, 4, 3, 2,
      ];
      return secondEndingPlural.includes(time);
    }
    function getZero(time) {
      return addingZero.includes(time);
    }

    // меняем окончания оставшихся секунд в зависимости от числа на таймере
    if (getPlural(seconds)) {
      secondsName.textContent = "cекунды";
    } else if (getSingle(seconds)) {
      secondsName.textContent = "секунда";
    } else {
      secondsName.textContent = "секунд";
    }

    if (getZero(seconds)) {
      seconds = "0" + seconds;
    }

    // меняем окончания оставшихся минут в зависимости от числа на таймере
    if (getPlural(minutes)) {
      minutesName.textContent = "минуты";
    } else if (getSingle(minutes)) {
      minutesName.textContent = "минута";
    } else {
      minutesName.textContent = "минут";
    }

    if (getZero(minutes)) {
      minutes = "0" + minutes;
    }

    // меняем окончания оставшихся часов в зависимости от числа на таймере
    if (getPlural(hours)) {
      hoursName.textContent = "часа";
    } else if (getSingle(hours)) {
      hoursName.textContent = "час";
    } else {
      hoursName.textContent = "часов";
    }

    if (getZero(hours)) {
      hours = "0" + hours;
    }
    // меняем окончания оставшихся дней в зависимости от числа на таймере
    if (getPlural(days)) {
      daysName.textContent = "дня";
    } else if (getSingle(days)) {
      daysName.textContent = "день";
    } else {
      daysName.textContent = "дней";
    }

    if (getZero(days)) {
      days = "0" + days;
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

  // let message = {
  //   loading: "Загрузка...",
  //   success: "спасибо! скоро с вами свяжимся",
  //   error: "что то пошшло не так",
  // };

  // let form = document.querySelector(".main-form");
  // let input = form.getElementsByTagName("input");
  // let statusMessage = document.createElement("div");

  // statusMessage.classList.add("status");
  // form.addEventListener("submit", function (event) {
  //   event.preventDefault();
  // });

  // pop-up--------------------------------------

  const modalBtn = document.querySelector(".more");
  const overlay = document.querySelector(".overlay");
  const popUp = document.querySelector(".popup");
  const popUpCloseBtn = document.querySelector(".popup-close");
  const body = document.querySelector("body");

  function popUpclose() {
    overlay.style.display = "none";
  }

  modalBtn.addEventListener("click", function () {
    overlay.style.display = "block";
    body.style.overflow = "hidden";
  });
  popUpCloseBtn.addEventListener("click", function () {
    popUpclose();
    body.style.overflow = "auto";
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      popUpclose();
      body.style.overflow = "auto";
    }
  });
});
