'use strict';

let button = document.querySelectorAll('.icon');
button.forEach(icon => {
  icon.onclick = () => {
    let img = document.querySelector('.main-image');
    img.setAttribute('src',`${icon.getAttribute('src')}`);
  };

})
