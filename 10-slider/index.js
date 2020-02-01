// TODO:
// 1. Create variables - prev, current, next
// 2. Assign first values to those variables
// 3. Apply classes
// 4. Create function moving the slider (depending on the direction) - remove classes, assign new classes, apply classes

let prev;
let current;
let next;

current = document.querySelector('.current');
prev = current.previousElementSibling;
next = current.nextElementSibling;

const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function applyClasses() {
  current.classList.add('current');
  prev.classList.add('prev');
  next.classList.add('next');
}

function move(direction) {
  const classesToRemove = ['prev', 'current', 'next'];
  current.classList.remove(...classesToRemove);
  prev.classList.remove(...classesToRemove);
  next.classList.remove(...classesToRemove);

  if (direction === 'back') {
    [prev, current, next] = [
      prev.previousElementSibling || slides.lastElementChild,
      prev,
      current,
    ];
  } else {
    [prev, current, next] = [
      current,
      next,
      next.nextElementSibling || slides.firstElementChild,
    ];
  }
  applyClasses();
}

prevBtn.addEventListener('click', () => move('back'));
nextBtn.addEventListener('click', move);
