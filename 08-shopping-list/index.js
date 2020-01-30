const input = document.querySelector('#shopping-input');
const addBtn = document.querySelector('#add-btn');
const form = document.querySelector('.shopping-form');
const list = document.querySelector('.list');

const items = [];

function createItem(e) {
  e.preventDefault();

  const itemName = e.currentTarget.item.value;
  const item = {
    itemName,
    id: Date.now(),
    checked: false,
  };

  items.push(item);

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item =>
        `
        <li class="list-element">
            <input type="checkbox" />
            <p class="list-description">${item.itemName}</p>
            <button class="btn btn-round">
              <i class="fas fa-trash-alt"></i>
            </button>
          </li>
    `
    )
    .join('');

  list.innerHTML = html;
}

form.addEventListener('submit', createItem);
list.addEventListener('itemsUpdated', displayItems);
