const form = document.querySelector('.shopping-form');
const list = document.querySelector('.list');

let items = [];

function createItem(e) {
  e.preventDefault();

  const itemName = e.currentTarget.item.value;
  const item = {
    itemName,
    id: Date.now(),
    checked: false,
  };

  items.push(item);
  form.reset();

  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      item =>
        `
        <li class="list-element">
            <input type="checkbox" value="${item.id}" ${item.checked &&
          'checked'}/>
            <p class="list-description">${item.itemName}</p>
            <button 
            class="btn btn-round" 
            value="${item.id}" 
            aria-label="delete ${item.itemName}">
              <i class="fas fa-trash-alt"></i>
            </button>
          </li>
    `
    )
    .join('');

  console.log('displaying items...');
  list.innerHTML = html;
}

const saveToLocalStorage = () =>
  localStorage.setItem('items', JSON.stringify(items));

const getFromLocalStorage = () => {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  console.log(lsItems);

  if (lsItems.length) {
    items.push(...lsItems);
    console.log('getting data from local storage...');
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
};

function markAsChecked(id) {
  const itemRef = items.find(item => item.id === id);
  itemRef.checked = !itemRef.checked;
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function deleteItem(id) {
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

form.addEventListener('submit', createItem);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', saveToLocalStorage);
list.addEventListener('click', e => {
  const id = parseInt(e.target.value);
  console.log(id);

  if (e.target.matches('input[type="checkbox"]')) {
    markAsChecked(id);
  }

  if (e.target.matches('button')) {
    deleteItem(id);
  }
});
getFromLocalStorage();
