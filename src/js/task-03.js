const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
list.style.listStyle = 'none';
list.style.display = 'flex';
list.style.flexWrap = 'nowrap';
list.style.justifyContent = 'space-between';
list.style.gap= '30px';

const imgList = images.map(image =>
  `<li class='item-img'><img class='img' src=${image.url} alt=${image.alt}></img></li>`
).join('');

list.insertAdjacentHTML('afterbegin', imgList);
  
console.log(imgList);

const elLi = document.querySelectorAll('.item-img');

elLi.forEach(element => {
  element.style.width = '300px';
  element.style.height = '150px';
})

const elImg = document.querySelectorAll('.img');
elImg.forEach(element => {
  element.style.width = '100%';
   element.style.height = '100%';
element.style.opacity = '0.5';
element.style.objectFit = 'cover';
})


console.log(list);













