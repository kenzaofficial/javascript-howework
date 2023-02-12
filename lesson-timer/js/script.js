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
    // let arraySeconds = [seconds];
    // console.log(arraySeconds);
    // if (arraySeconds.includes(9)) {
    //   seconds = "0" + seconds;
    // }

    const secondEnding_1Less = [5, 55, 45, 35, 25];
    const secondEnding_1More = [1, 51, 41, 31, 21];
    const secondEnding_2 = "";
    const secondEnding_3 = "";

    let less = secondEnding_1Less.find((sec) => sec === seconds);
    let more = secondEnding_1More.includes(seconds);
    console.log("more", more);
    // console.log(seconds, more);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (
      (seconds < 5 && seconds > 1) ||
      (seconds < 55 && seconds > 51) ||
      (seconds < 45 && seconds > 41) ||
      (seconds < 35 && seconds > 31) ||
      (seconds < 25 && seconds > 21)
    ) {
      secondsName.textContent = "секунды";
    } else if (more) {
      secondsName.textContent = "cекунда";
    } else {
      secondsName.textContent = "секунд";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (minutes < 5 && minutes > 1) {
      minutesName.textContent = "минуты";
    } else if (minutes == 1) {
      minutesName.textContent = "минута";
    } else {
      minutesName.textContent = "минут";
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (hours < 5 && hours > 1) {
      hoursName.textContent = "часа";
    } else if (hours == 1) {
      hoursName.textContent = "час";
    } else {
      hoursName.textContent = "часов";
    }
    if (days < 10) {
      days = "0" + days;
    }
    if (days < 5 && days > 1) {
      daysName.textContent = "дня";
    } else if (days == 1) {
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
