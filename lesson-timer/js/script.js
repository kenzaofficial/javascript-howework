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
    let hours = Math.floor(timeDifferenceMilliSeconds / 60000 / 60 % 24);
    let days = Math.floor(timeDifferenceMilliSeconds / 60000 / 60 / 24);
    let timeUnitName = timer.querySelector('#unitName');
    console.log(timeUnitName);
    if(seconds < 10) {
      seconds = '0' + seconds;
    };

    if(seconds < 5 && seconds > 1) {
      timeUnitName.textContent = "секунды";
    } else if ( seconds == 1){
      timeUnitName.textContent = "cекунда";
    }
    else {
      timeUnitName.textContent = "секунд";
    }
    if(minutes < 10) {
      minutes = '0' + minutes;
    };
    if(hours < 10) {
      hours = '0' + hours;
    };
    if(days < 10) {
      days = '0' + days;
    };

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
