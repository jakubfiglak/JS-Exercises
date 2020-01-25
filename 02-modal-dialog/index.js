const buttons = document.querySelectorAll('.btn');
const modal = document.querySelector('dialog');
console.dir(modal);

// Open modal function
const openModal = e => {
  const button = e.currentTarget;
  const card = button.closest('.card');

  const title = card.querySelector('h3').textContent;
  const imgSrc = card.querySelector('img').src;
  const text = card.dataset.description;

  modal.innerHTML = `
    <div class="card">
    <button class="btn-icon"><i class="fas fa-times fa-2x"></i></button>
    <h2>${title}</h2>    
    <img src=${imgSrc.replace('200', '400')} alt=${title} photo/>
    <p>${text}</p>
    </div>
    `;

  modal.showModal();
};

buttons.forEach(button => button.addEventListener('click', openModal));

// Close modal on backdrop click
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.close('cancelled');
  }
});
