'use strict';

let button = document.querySelectorAll('.icon');
let mainPicture = document.getElementById('main-picture');
let leftButton = document.getElementById('button1');
let rightButton = document.getElementById('button2');

console.log(button);
console.log(mainPicture);



if (mainPicture.getAttribute('src') === '') {
  mainPicture.setAttribute('src', button[0].getAttribute('src'));
};

button.forEach(icon => {
  icon.onclick = () => {
    mainPicture.setAttribute('src', `${icon.getAttribute('src')}`);
  }
});

/* for(let i = 0;i> -1 ; i--) {
  if (mainPicture.getAttribute('src') === e.getAttribute('src')) {
    mainPicture.setAttribute('src', button[index+1].getAttribute('src'))
  }
} */
let currentPicture = button[0].getAttribute('src');

console.log('this is the current mainpicture src:' + mainPicture.getAttribute('src'))
leftButton.onclick = () => {
  button.forEach(function (e, index) {
    if (mainPicture.getAttribute('src') === e.getAttribute('src')) {
      console.log('this is the current index:' + index);
      mainPicture.setAttribute('src', button[index - 1].getAttribute('src'))
      console.log('this is the index right: ' + index);
    }
  });
};

/* rightButton.onclick = () => {
  if ()
};
 */