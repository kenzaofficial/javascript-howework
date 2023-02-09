const tabs = document.querySelector(".tabs");
const content = document.querySelectorAll(".content");
const changeClass = function (element) {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

tabs.addEventListener("click", function (event) {
  const currentTab = event.target.dataset.btn;
  changeClass(event.target);
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove("active");
    if (content[i].dataset.content === currentTab) {
      content[i].classList.add("active");
    }
  }
});

// мое дз
const tabsSecondary = document.querySelector("#tabsSecondary");
const contentSecondary = document.querySelectorAll("#contentSecondary");
const changeClassSecondary = function (element) {
  for (let i = 0; i < tabsSecondary.children.length; i++) {
    tabsSecondary.children[i].classList.remove("active");
  }
  element.classList.add("active");
};
console.log(tabsSecondary);

tabsSecondary.addEventListener("click", function (event) {
  const currentTab = event.target.dataset.btnInner;
  changeClassSecondary(event.target);
  for (let i = 0; i < contentSecondary.length; i++) {
    contentSecondary[i].classList.remove("active");
    if (contentSecondary[i].dataset.contentInner === currentTab) {
      contentSecondary[i].classList.add("active");
    }
  }
});
