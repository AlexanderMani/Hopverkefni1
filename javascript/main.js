const menuBtn = document.querySelector('.menu-btn');
const menuBtn2 = document.querySelector('.menu-btn2');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuBtn2.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuOpen = false;
  }
});
menuBtn2.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuBtn2.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuBtn2.classList.remove('open');
    menuOpen = false;
  }
});
