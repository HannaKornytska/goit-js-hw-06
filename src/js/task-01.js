//  ..............ЗАВДАННЯ 1.............

// #1

const listId = document.querySelector('#categories');
// console.log(listId);

const listAllItem = document.querySelectorAll('.item');
// console.log(listAllItem);

let totalItem = 0;

listAllItem.forEach(()=> {
    
    totalItem += 1;
    // console.log(totalItem);
    
});
console.log(`Number of categories: ${totalItem} `);

// console.log(`Number of categories: ${listAllItem.length} `);

// #2

const allItemList = document.querySelectorAll('h2')
// console.log(allItemList);

allItemList.forEach((item) => {
    console.log(`Category: ${item.textContent}`);
    const ulList = item.nextElementSibling;
    const liList = ulList.children;

     console.log(`Elements: ${liList.length}`);
   
});








