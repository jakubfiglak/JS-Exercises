const buttons = document.querySelectorAll('.btn');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// Open modal function
const openModal = e => {
  const button = e.currentTarget;
  const card = button.closest('.card');

  const title = card.querySelector('h3').textContent;
  const imgSrc = card.querySelector('img').src;
  const text = card.dataset.description;

  modalInner.innerHTML = `
    <div class="card">
    <i class="fas fa-times fa-2x"></i>
    <h2>${title}</h2>    
    <img src=${imgSrc.replace('200', '400')} alt=${title} photo/>
    <p>${text}</p>
    </div>
    `;

  modalOuter.classList.add('open');
};

// Open modal with a button
buttons.forEach(button => button.addEventListener('click', openModal));

// Close modal function
const closeModal = () => modalOuter.classList.remove('open');

// Close modal with an 'escape' key
window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// TODO:  Close modal with a 'close' icon (not sure how to select an element that is not yet rendered to the page)

// Close modal with click outside the box
modalOuter.addEventListener('click', e => {
  if (!e.target.closest('.modal-inner')) {
    closeModal();
  }
});
