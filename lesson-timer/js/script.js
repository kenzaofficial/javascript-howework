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

  let deadline = "2023-02-28";

  function getTimeRemaining(endtime) {
    let timeDifferenceMilliSeconds =
      Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((timeDifferenceMilliSeconds / 1000) % 60);
    let minutes = Math.floor((timeDifferenceMilliSeconds / 60000) % 60);
    let hours = Math.floor(timeDifferenceMilliSeconds / 60000 / 60);
    // let days = Math.floor(timeDifferenceMilliSeconds / 60000 / 60 / 24);

    return {
      total: timeDifferenceMilliSeconds,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id);
    let hours = timer.querySelector(".hours");
    let minutes = timer.querySelector(".minutes");
    let seconds = timer.querySelector(".seconds");
    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let updatingTime = getTimeRemaining(endtime);
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
