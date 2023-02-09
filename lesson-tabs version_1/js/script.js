window.addEventListener('DOMContentLoaded',function(){
'use strict';
const doc = document;
const tab = doc.querySelectorAll('.info-header-tab');
const info = doc.querySelector('.info-header');
const tabContent = doc.querySelectorAll('.info-tabcontent');

function hideTabContent(a) {
  for( let i = a;i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('active');
  }
}

hideTabContent(1);

function showTabContent(b) {
  if(tabContent[b].classList.contains('hide')) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
    tab[b].classList.add('active');
  }
}

info.addEventListener('click',function(event){
let target = event.target;
if(target && target.classList.contains('info-header-tab')) {
  for( let i=0; i < tab.length; i++){
    if(target == tab[i]) {
      hideTabContent(0);
      showTabContent(i)
      break;
    }
  }
}
});
});