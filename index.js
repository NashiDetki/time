// let prases = [
//   'отправить другу смешную гифку',
//   'посмотреть интересный сериал',
//   'разобраться, о чём поют рэперы',
//   'смотреть интересный блог',
//   'расставить книги на полке по цвету',
//   'чат с друзьями в Telegram'
// ]

let prases = [
  {text: 'отправить другу смешную гифку', image: './image/1.gif'},
  {text: 'посмотреть интересный сериал', image: './image/2.png'},
  {text: 'разобраться, о чём поют рэперы', image: './image/3.png'},
  {text: 'смотреть интересный блог', image: './image/4.png'},
  {text: 'расставить книги на полке по цвету', image: './image/5.png'},
  {text: 'чат с друзьями в Telegram', image: './image/6.png'},
]

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let image = document.querySelector('.image');
console.log(button);
console.log(phrase);
console.log(image);

// console.log(prases[1].text);

function getRamdomElement(){
  let randIndex = Math.floor(Math.random() * prases.length);
  console.log(randIndex);
  console.log(prases[randIndex]);

  phrase.textContent = prases[randIndex].text;
  image.src =  prases[randIndex].image;
}

button.addEventListener('click', getRamdomElement);




let userData = {name: 'Maria',
                age: 24,
                city: 'Ufa',
                getAge(){
                  console.log(`Age user ${this.age} years.`);
                }};

console.log(userData);
console.log(userData.name);
let userInfo = 'city'
console.log(userData[userInfo]);
userData.getAge();

// userData.gender = 'woman';
// console.log(userData);
// delete userData.age;
// console.log(userData);



//создать объект rocket, 
// название - "Протон", 
// страна - "Россия", 
// масса - 12, 

// let randIndex = Math.floor(Math.random() * prases.length);
// console.log(randIndex);

// console.log(prases[randIndex]);



// button.addEventListener('click', function(){getRamdomElement()});


// getRamdomElement();


// console.log(prases);

// let i = 0;
// while (i < prases.length){
//     console.log(prases[i]);
//     i = i + 1;
// }

// let i = 0;
// while (i < 100){
//   console.log(i);
//   i = i + 2;
// }

// for (let i = 0; i < prases.length;  i = i + 1){
//   console.log(prases[i]);
// }

// function setHello(){
//   console.log('Hello, Alex!');
// }

// setHello();
// setHello();
// setHello();
// setHello();
// setHello();

// for (let i = 0; i < 1000;  i = i + 1){
//   setHello();
// }


// function setHello(name){
//   console.log('Hello,', name);
// }

// setHello('Nikolai');
// setHello('Alex');
// setHello('Kolay');

function setHello(prase){
  console.log('Не писать код, а', prase);
}

// setHello(prases[0]);

// for (let i = prases.length - 1; i >= 0 ; i = i - 1){
//   setHello(prases[i]);
// }

// for...
// while ...

function setArea(a,b){
  s = a * b;
  return s;
  // console.log('Площадь прямоугольника = ', a * b);
}

// setAreaRoom = setArea(20, 30) + setArea(10, 30) + setArea(5, 30);
// console.log('Общая площадь квартиры =', setAreaRoom, 'm2');
// setArea(10, 10);

function getPerimetr(a,b){
  return (a + b) * 2;
}

// console.log('Периметр 1 комнаты', getPerimetr(6, 4));

function getPerimertS(){
  return ((getPerimetr(2,3) + getPerimetr(2,3) + getPerimetr(2,3))/3);
}

// console.log('Среднее', getPerimertS());

