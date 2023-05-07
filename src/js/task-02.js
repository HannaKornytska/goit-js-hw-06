const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elPotatoes = document.createElement('li');
elPotatoes.textContent = 'Potatoes';
elPotatoes.classList.add('item');
console.log(elPotatoes);

const elMushrooms = document.createElement('li');
elMushrooms.textContent = 'Mushrooms';
elMushrooms.classList.add('item');
console.log(elMushrooms);

const elGarlic = document.createElement('li');
elGarlic.textContent = 'Garlic';
elGarlic.classList.add('item');
console.log(elGarlic);

const elTomatos = document.createElement('li');
elTomatos.textContent = 'Tomatos';
elTomatos.classList.add('item');
console.log(elTomatos);

const elHerbs= document.createElement('li');
elHerbs.textContent = 'Herbs';
elHerbs.classList.add('item');
console.log(elHerbs);

const elCondiments = document.createElement('li');
elCondiments.textContent = 'Condiments';
elCondiments.classList.add('item');
console.log(elCondiments);

const elIngredients = document.querySelector('#ingredients');

elIngredients.append(elPotatoes, elMushrooms, elGarlic, elTomatos, elHerbs, elCondiments);
console.log(elIngredients);