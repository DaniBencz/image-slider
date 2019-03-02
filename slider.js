'use strict';

//thumnails onclick
let index = 0;
let icon = document.querySelectorAll('.icon');
icon.forEach((icon, i) => {
  icon.onclick = () => {
    index=i;
    console.log(index);
    let img = document.querySelector('.main-image');
    img.setAttribute('src', `${icon.getAttribute('src')}`);
  };
});

//right button
let rightButton = document.querySelector('.right');
rightButton.onclick = () => {
  if (icon.length - 1 > index) {
    index++;
    console.log(index);
  }
  let img = document.querySelector('.main-image');
  img.setAttribute('src', `${icon[index].getAttribute('src')}`);
};

//left button
let leftButton = document.querySelector('.left');
leftButton.onclick = () => {
  if (index > 0) {
    index--;
    console.log(index);
  }
  let img = document.querySelector('.main-image');
  img.setAttribute('src', `${icon[index].getAttribute('src')}`);
};

