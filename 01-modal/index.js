const buttons = document.querySelectorAll('.btn');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

// Close modal function
const closeModal = () => modalOuter.classList.remove('open');

// Close modal with an 'escape' key
window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Close modal with a 'close' icon
const closeModalOnIconClick = () => {
  const closeIcon = modalInner.querySelector('.fa-times');

  closeIcon.addEventListener('click', closeModal);
};

// Close modal with a click outside the box
modalOuter.addEventListener('click', e => {
  if (!e.target.closest('.modal-inner')) {
    closeModal();
  }
});

// Open modal function
const openModal = e => {
  const button = e.currentTarget;
  const card = button.closest('.card');

  const title = card.querySelector('h3').textContent;
  const imgSrc = card.querySelector('img').src;
  const text = card.dataset.description;

  modalInner.innerHTML = `
    <div class="card">
    <button class="btn-icon"><i class="fas fa-times fa-2x"></i></button>
    <h2>${title}</h2>    
    <img src=${imgSrc.replace('200', '400')} alt=${title} photo/>
    <p>${text}</p>
    </div>
    `;

  modalOuter.classList.add('open');
  closeModalOnIconClick();
};

// Open modal with a button
buttons.forEach(button => button.addEventListener('click', openModal));
