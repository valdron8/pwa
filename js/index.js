const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
  }

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(() => {
      console.log("[ServiceWorker**] - Registered");
    });
  }