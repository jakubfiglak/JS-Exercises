// TODO:

// 1. Create functions to open/hide modal, bind event listeners to modal elements
// 2. Create a function to show image on click

const modal = document.querySelector('.modal-outer');
const images = document.querySelectorAll('.gallery-img');
const gallery = document.querySelector('.gallery');
let currentImg;

function handleKeyUp(e) {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowLeft') showPrevImage();
  if (e.key === 'ArrowRight') showNextImage();
}

function openModal() {
  modal.classList.add('open');

  const prevBtn = modal.querySelector('.prev');
  const nextBtn = modal.querySelector('.next');

  nextBtn.addEventListener('click', showNextImage);
  prevBtn.addEventListener('click', showPrevImage);
  window.addEventListener('keyup', handleKeyUp);
}

function closeModal() {
  modal.classList.remove('open');
}

function showImage(img) {
  modal.querySelector('img').src = img.src;
  modal.querySelector('h2').textContent = img.title;
  modal.querySelector('p').textContent = img.dataset.description;

  currentImg = img;
  openModal();
}

function showNextImage() {
  showImage(currentImg.nextElementSibling || gallery.firstElementChild);
}
function showPrevImage() {
  showImage(currentImg.previousElementSibling || gallery.lastElementChild);
}

images.forEach(img => {
  img.addEventListener('click', e => showImage(e.currentTarget));
  img.addEventListener('keyup', e => {
    if (e.key === 'Enter') {
      showImage(e.currentTarget);
    }
  });
});

modal.addEventListener('click', e => {
  if (e.target.classList.contains('open')) {
    closeModal();
  }
});
