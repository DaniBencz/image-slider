'use strict';

let icon = document.querySelectorAll('.icon');
icon.forEach(icon => {
  icon.onclick = () => {
    let img = document.querySelector('.main-image');
    img.setAttribute('src', `${icon.getAttribute('src')}`);
  };
});

let rightButton = document.querySelector('.right');
rightButton.onclick = () => {
  alert('right');
};

let leftButton = document.querySelector('.left');
leftButton.onclick = () => {
  alert('left');
};

