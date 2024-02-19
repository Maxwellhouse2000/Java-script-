// Пример работы синхронного js

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     alert('Вы нажали на кнопку');

//     let p = document.createElement('p'); // метод для создания тега 
//     p.innerHTML = 'Тут будет текст';
//     document.body.append(p); // это метод для добавления html тега в другой тег 
// });

// Пример работы aсинхронного js

// const res = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(res.json());

console.log(1);
console.log(2);

setTimeout(() => {
    console.log(3);
}, 1000);

console.log(4);
console.log(5);

// call stack
   // console.log(1);
   // console.log(2);

// web apis
    // setTimeout(() => {
    //     console.log(3);
    // }, 1000);
