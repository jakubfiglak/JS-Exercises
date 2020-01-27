const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

/*
  Static Methods
*/

// Array.of();
const example = Array.of(...'example');
// console.log(example);

// Make a function that creates a range from x to y with Array.from();
const createRange = (min, max) =>
  Array.from({ length: max - min + 1 }, (_item, index) => index + min);

const myRange = createRange(5, 8);

// Check if the last array you created is really an array with Array.isArray();
const isArray = Array.isArray(myRange);
// console.log(isArray);

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const entries = Object.entries(meats);
const keys = Object.keys(meats);
const values = Object.values(meats);
// console.log(entries);
// console.log(keys);
// console.log(values);

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
// console.log('hot dogs,hamburgers,sausages,corn'.split(','));

// take the last item off toppings with pop()
const item = toppings.pop();
// console.log(item);
// add it back with push()
toppings.push(item);
// console.log(toppings);
// take the first item off toppings with shift()
const anotherItem = toppings.shift();
// console.log(toppings);
// add it back in with unshift()
toppings.unshift(anotherItem);
// console.log(toppings);
// Do the last four,but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length - 1);
newToppings = [...newToppings, toppings[toppings.length - 1]];
// console.log(newToppings);
newToppings = toppings.slice(1, toppings.length);
// console.log(newToppings);
newToppings = [toppings[0], ...newToppings];

// Make a copy of the toppings array with slice()
const toppingsCopyOne = toppings.slice(0);
// console.log(toppingsCopyOne);
// Make a copy of the toppings array with a spread
const toppingsCopyTwo = [...toppings];
// console.log(toppingsCopyTwo);
// take out items 3 to 5 of your new toppings array with splice()
toppingsCopyTwo.splice(3, 2);
// console.log(toppingsCopyTwo);
// find the index of Avocado with indexOf() / lastIndexOf()
// console.log(toppingsCopyTwo.indexOf('Avocado'));
// console.log(toppingsCopyTwo.lastIndexOf('Avocado'));
// Check if hot sauce is in the toppings with includes()
// console.log(toppings.includes('Hot sauce'));
// add it if it's not
// flip those toppings around with reverse()
// if (!toppings.includes('Hot sauce')) {
//   console.log(toppings.reverse());
// }

/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
const burgerComment = feedback.find(feed => feed.comment.includes('burg'));
console.log(burgerComment);
// find all ratings that are above 2 with filter()
const moreThanTwo = feedback.filter(feed => feed.rating > 2);
console.log(moreThanTwo);
// find all ratings that talk about a burger with filter()
const burgerComments = feedback.filter(feed => feed.comment.includes('burg'));
console.log(burgerComments);
// Remove the one star rating however you like!
const filtered = feedback.filter(feed => feed.rating > 1);
console.log(filtered);

// check if there is at least 5 of one type of meat with some()
console.log(Object.values(meats).some(value => value >= 5));
// make sure we have at least 3 of every meat with every()
console.log(Object.values(meats).every(meat => meat >= 3));
// sort the toppings alphabetically with sort()
console.log(toppings.sort());
// sort the order totals from most expensive to least with .sort()
console.log(orderTotals.sort((a, b) => b - a));
// Sort the prices with sort()
const productsSortedByPrice = Object.entries(prices).sort(
  (a, b) => a[1] - b[1]
);
console.table(Object.fromEntries(productsSortedByPrice));

/*
  Looping Methods (next)
*/
