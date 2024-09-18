// comment - однострочный комментарии
/* comment - многострочный комментарии */

//document.write("Лох")//

/* консоль и функции 

console.log("javascript")
console.info("javascript") отличие от лога нет 
console.error("javascript") функция ввиде ошибки 
console.warn("javascript") функция ввиде уведомление

*/
/* математика
const num1 = 7;
const num2 = 11;
console.warn("Ответ: " + (num1 * num2))
const num1i = 77367 ;
const num2i = 290 ;
const num3 = 3 ;
console.log("ответ " + (num1i * num2i / num3)); 


const str1 = Number("12")
const str2 = Number("12")
console.error("Ответ: " + (str1 + str2))

console.log("Math: " + Math.PI)
console.log("Math: " + Math.E)
console.log("Math: min: " + Math.min(1,2,3,4,5,6,7,8,9))
console.log("Math: max: " + Math.max(1,2,3,4,5,6,7,8,9)) 
*/

/* Операторы
const stroke = "Привет"  
const isHasHousу =  true; 
if ( stroke == "Привет" && !isHasHousу ) {
    console.log('Верная цифра и  у человека есть дом')
} else if(stroke != 'Привет') {
    console.log("qЧетко")
}
else if(stroke != 'Привет') {
    console.log("fЧетко")
}
else if(stroke != 'Привет') {
    console.log(" ytЧетко")
}

else (console.log('не верно'))

const stroka = "word" 

switch(stroka) - if {
    case '4': 
    console.log("Переменная со значением 4");
    break;
    case '12': 
    console.log("Переменная со значением 12");
    break;
    case "word": 
    console.error("Все вернр")
    break
    default: - else
    console.log("Нее верн")
    
    const varrior = 12 
if( varrior == 12) {
    console.log(' верно иди нахуй')
}
else (console.log("Не верно иди нахуй"))


const text = "Анус" 
switch(text) {
    case "4": console.log("no correct")
    break;
    case "Анус": console.log("Ok")
    break;
    default: console.error("Hui")
}
}
const telefon = 18; 
if(telefon == 18 ) {
    console.log("Верно")
}
else(console.error("Не верно"))

let onde = [8,2,3,"ANUS" , 999]
console.log(onde)
*/

/* массивы
 let Massive = [5,12,22,92, 'Хуй' , 1488];
 Massive[4] = "член";
console.log(Massive.length)


let mastt = [
    [4,6,8] , ["jfgjj" ,5,7,9] ,[,1,2,3]

]
mastt[1][0] = 90;
console.log(mastt) */

/* for(let i = 216; i > 2; i /= 5) {
    console.log(i);
} 
    */

/* 
let j = 1000;  циклы
while(j > 100) {
    j -= 200
    console.log(j)
}   
    let i = 0;
do {
     console.warn(i)
     i++
} while(i <10)

for ( let u = 12;  u <= 20; u += 2 ) {
    if ( u > 15)
        break
    console.log(u)
}
 
*/

/* Всплывающее окно функции
alert("Пенис в тесте");  

let data = confirm("Пизда")
if(data) {
    console.log("Вы писька")
} else(console.log("анус"))

let data = prompt("Сколько см?")
if ( data > 20) {
    alert("Вы старшк")
} else(
    alert("Вы пидорас")
)
    let okno = prompt("Сколько вам лет");
if (okno > 18) {
    alert("Вы совершеннолетний")
}
else (alert("Пошел нафик"))

let dara = confirm("Вы крутой?"); 
if (dara) {
    alert("ВЫ крутой")
}else (alert("Вы лох"))
*/

/*  Функции 
function data(word) {
    console.log(word + " Чо почем");
} 
data(100)
function summa(a, b, c) {
  let res = a + b - c;
  data(res)
 console.log(res)
}
summa(6,10,12) 

function summa(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)

    sum += arr[i]
        // console.log(sum)

        return sum;
}


let array1 = [12,23,4];
let array2 = [42,51,16,98];
let array3 = [73,82,92];

let res = summa(array1)
console.log(res)



function array(arr) {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++)
        sum += arr[i]
    return sum;
}

let res = [2,35,82,12]
let consol = array(res)
console.log(consol)



let num = 192;  // глобальная переменная
function data() {
  console.log(num);
}

data()

function array() { // Локальная переменная
    let num = 192;
    console.log(num)
}
array()
*/
/* Обрработка событий
let num = 1488; 
function array() {
    console.log(num)
}


let counter = 0; 
function buttonclick(el) {
    counter++
    el.innerHTML = " Анус " + counter
    console.log(el.name)
} 


let btn = document.getElementById('btn')

let text = document.getElementById('text')
text.title = "Hello"
console.log(text.title)


text.style.background = 'black'
text.style.color = 'white'
text.style.borderRadius = '20px'
text.style.padding = '20px'

text.innerHTML = 'New text'


*/
/* Таймер и интервал

setInterval(myFunction, 2000);

let counter = 0;
function myFunction() {
    counter++;
    console.log('Число: ' + counter)
}

let counter = 0;
let id = setInterval(myGG, 1000);

function myGG() {
  counter++;
  console.log("Итог: " + counter);
  if (counter === 15)
  clearInterval(id);
}

setTimeout(function() {
    console.log('Timer')
}, 2000)


btn.addEventListener("click", function () {
  text.textContent = '907, 374, 339, 334, 332, 303, 302'
  text.style.background = "black";
  text.style.color = "white";
  text.style.borderRadius = "20px";
  text.style.padding = "20px";
});

let massive = [907,374,339,334,332,303,302] 
console.log(massive) 
*/

// let btn = document.getElementById("btn");
// let text = document.getElementById("text");
// let btndel = document.getElementById("btndel")
// function textarea() {
//     let myArray = [907,374,339,334,332,303,302]

//     text.textContent = myArray.join()
//     text.style.background = "black";
//     text.style.color = "white";
//     text.style.borderRadius = "20px";
//     text.style.padding = "20px"
//     console.log(myArray)
// }
// function deletebtn() {
//     text.textContent = ""
//     text.style.background = "black";
//     text.style.color = "white";
//     text.style.borderRadius = "20px";
//     text.style.padding = "20px"
// }
// btn.addEventListener('click' , textarea)
// btndel.addEventListener('click', deletebtn)
/* 

суммирование и отнимать
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let count = document.getElementById('count')
let counter = 0;
function increment() {
    counter++ 
    count.textContent = counter
   if( counter === 7) {
    console.log("Ты выиграл")
   }
   else(console.log('Ты проиграл'))
}
function decrement() {
    if( counter > 0 ) {
        counter-- 
        count.textContent = counter
       
    }

}
    let count = document.getElementById('count')
let btn = document.getElementById('plus')
let counttwo =document.getElementById('count1')
let countthree =document.getElementById('count2')

function getRandomInt() {
   let randomNum = Math.floor(Math.random() * 12200) + 1000
   let randomNum1 = Math.floor(Math.random() * 12200) + 1000
   let randomNum2 = Math.floor(Math.random() * 12200) + 1000
   count.textContent =+ randomNum
   counttwo.textContent =+ randomNum1
   countthree.textContent =+ randomNum2

   if( randomNum , randomNum1 , randomNum2 > 5000) {
    console.log('Ты выиграл')
   }
   else(console.log('Ты проиграл'))
}

let randomNum = getRandomInt(1, 9999); 
btn.addEventListener('click' , getRandomInt) 



function rangeValuess() {
  numberVal.innerHTML = rangeValue.value;

  numberVal.style.background = "black";
  numberVal.style.color = "white";
  numberVal.style.padding = "10px";
  numberVal.style.borderRadius = "10px";
}
rangeValue.addEventListener("input", rangeValuess);

rangeValuess();

\

let count = document.getElementById("count");
let counttwo = document.getElementById("count1");
let countthree = document.getElementById("count2");
let btn = document.getElementById("plus");
let text = document.getElementById("text");
let rangeValue = document.getElementById("range-slider");
let numberVal = document.getElementById("numberVal");

function getRandomInt() {
  let RandomNum = Math.floor(Math.random() * 9999) + 1000;
  let RandomNum2 = Math.floor(Math.random() * 99999) + 10000;
  let RandomNum3 = Math.floor(Math.random() * 100000) + 100000;
  count.textContent = +RandomNum;
  counttwo.textContent = +RandomNum2;
  countthree.textContent = +RandomNum3;

  // if( RandomNum , RandomNum2, RandomNum3  > 23677) {
  //     text.textContent = "Вы отгадали число"
  //     console.log("Вы отгадали")
  // } else ( text.textContent = 'Вы проиграли')
}
btn.addEventListener("click", getRandomInt);

let count = document.getElementById("count");
let counttwo = document.getElementById("count1");
let countthree = document.getElementById("count2");
let btn = document.getElementById("plus");
let text = document.getElementById("text");
let rangeValue = document.getElementById("range-slider");
let numberVal = document.getElementById("numberVal");


function getRandomInt() {
  let RandomNum = Math.floor(Math.random() * 9999) + 1000;
  let RandomNum2 = Math.floor(Math.random() * 99999) + 10000;
  let RandomNum3 = Math.floor(Math.random() * 100000) + 100000;
  count.textContent = +RandomNum;
  counttwo.textContent = +RandomNum2;
  countthree.textContent = +RandomNum3;

  // if( RandomNum , RandomNum2, RandomNum3  > 23677) {
  //     text.textContent = "Вы отгадали число"
  //     console.log("Вы отгадали")
  // } else ( text.textContent = 'Вы проиграли')
}
btn.addEventListener("click", getRandomInt);



let numberArr = document.getElementById('numbertext')
let rangeSlider = document.getElementById('range-slider')

function numberRangeVal() {
    numberArr.innerHTML = rangeSlider.value
}
rangeSlider.addEventListener('input' , numberRangeVal)

numberRangeVal()



let count = document.getElementById("count0")
let countwo = document.getElementById('count1')
let counthree = document.getElementById('count2')
let countfour = document.getElementById('count3')
let countfive = document.getElementById('count4')
let btns = document.getElementById("btnRandom")

function getRandomNum() {
    let NumRandom = Math.floor(Math.random() * 999) + 1;
    let NumRandom2 = Math.floor(Math.random() * 9999) + 1;
    let NumRandom3 = Math.floor(Math.random() * 99999) + 1;
    count.textContent =+ NumRandom;
    countwo.textContent =+ NumRandom2;
    counthree.textContent =+ NumRandom3;
}
btns.addEventListener("click" , getRandomNum);
let numArray = document.getElementById('numArray');
let rangeArray = document.getElementById('rangeArray')

function rangeValueInput() {
    numArray.innerHTML = rangeArray.value
}

rangeArray.addEventListener('input' , rangeValueInput)
rangeValueInput()




const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const text = document.querySelector('.price');
const pricetext = document.querySelector('#price1');

// Массив товаров
const items = [
    {name: 'Машина', price: 3500},
    {name: 'Бургер', price: 350},
    {name: 'Шаурма', price: 400},
    {name: 'Хот-дог', price: 290},
    {name: 'Чизбургер', price: 300},
    {name: 'Пепси', price: 270},
    {name: 'Кока-кола', price: 270},
    {name: 'Сендвич', price: 160},
    {name: 'Колбаса', price: 238},
    {name: 'Лепешки', price: 125},
    {name: 'Чай', price: 344},
    {name: 'Сникерс', price: 175},
];

// Объект для хранения текущей цены товаров
const currentPrices = {};

// Функция для отображения цены товара
function filterItemss(index) {
    // Получаем товар по индексу
    const item = items[index];
    // Увеличиваем цену товара на его исходную стоимость
    currentPrices[item.name] = currentPrices[item.name] ? currentPrices[item.name] + item.price : item.price;
    // Обновляем тексты цен
    updatePrices();
}

// Функция для обновления текста цен
function updatePrices() {
    let total = 0;
    // Обходим объект текущих цен и суммируем их
    for (const itemName in currentPrices) {
        if (currentPrices.hasOwnProperty(itemName)) {
            total += currentPrices[itemName];
        }
    }
    // Выводим общую стоимость всех товаров
    text.textContent =  + total + ' сом'; 
}

// Назначаем обработчики клика на каждую кнопку
btn1.addEventListener('click', () => filterItemss(0));
btn2.addEventListener('click', () => filterItemss(1));
btn3.addEventListener('click', () => filterItemss(2));
btn4.addEventListener('click', () => filterItemss(3));
btn5.addEventListener('click', () => filterItemss(4));
btn6.addEventListener('click', () => filterItemss(5));
btn7.addEventListener('click', () => filterItemss(6));
btn8.addEventListener('click', () => filterItemss(7));
btn9.addEventListener('click', () => filterItemss(8));
btn10.addEventListener('click', () => filterItemss(9));
btn11.addEventListener('click', () => filterItemss(10));
btn12.addEventListener('click', () => filterItemss(11));

// Функция для обновления текста цены товара
function updatePriceText(price) {
    pricetext.textContent = 'Стоимость товара: ' + price + ' сом';
}
*/

/* 


let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");
let btn9 = document.querySelector("#btn9");
let btn10 = document.querySelector("#btn10");
let btn11 = document.querySelector("#btn11");
let btn12 = document.querySelector("#btn12");
let textPrice = document.querySelector(".price");

const items = [
  { name: "Машина", price: 3500 },
  { name: "Бургер", price: 120 },
  { name: "Шаурма", price: 200 },
  { name: "Хот-дог", price: 90 },
  { name: "Чизбургер", price: 100 },
  { name: "Пепси", price: 150 },
  { name: "Кока-кола", price: 170 },
  { name: "Сендвич", price: 75 },
  { name: "Колбаса", price: 238 },
  { name: "Лепешки", price: 27 },
  { name: "Чай", price: 80 },
  { name: "Сникерс", price: 75 },
];
const currentPrices = {};

function totalPrice(index) {
  const item = items[index];
  currentPrices[item.name] = currentPrices[item.name]
    ? currentPrices[item.name] + item.price
    : item.price;
  updatePrices();
}
function updatePrices() {
  let total = 0;
  for (const itemName in currentPrices) {
    if (currentPrices.hasOwnProperty(itemName)) {
      total += currentPrices[itemName];
    }
  }

  textPrice.textContent = +total + " сом";
}
btn1.addEventListener("click", () => totalPrice(0));
btn2.addEventListener("click", () => totalPrice(1));
btn3.addEventListener("click", () => totalPrice(2));
btn4.addEventListener("click", () => totalPrice(3));
btn5.addEventListener("click", () => totalPrice(4));
btn6.addEventListener("click", () => totalPrice(5));
btn7.addEventListener("click", () => totalPrice(6));
btn8.addEventListener("click", () => totalPrice(7));
btn9.addEventListener("click", () => totalPrice(8));
btn10.addEventListener("click", () => totalPrice(9));
btn11.addEventListener("click", () => totalPrice(10));
btn12.addEventListener("click", () => totalPrice(11));


let btn = document.querySelector("#btn1");
let btn1 = document.querySelector("#btn2");
let btn2 = document.querySelector("#btn3");
let btn3 = document.querySelector("#btn4");
let btn4 = document.querySelector("#btn5");
let btn5 = document.querySelector("#btn6");
let btn6 = document.querySelector("#btn7");
let btn7 = document.querySelector("#btn8");
let btn8 = document.querySelector("#btn9");
let btn9 = document.querySelector("#btn10");
let btn10 = document.querySelector("#btn11");
let btn11 = document.querySelector("#btn12");
let totalPrices = document.querySelector("#numPrice");

const items = [
  { name: "Видеокарта", price: 40000 },
  { name: "Оперативная память", price: 5000 },
  { name: "Корпус", price: 10000 },
  { name: "Процессор", price: 20000 },
  { name: "Жесткий диск", price: 8000 },
  { name: "ССД", price: 4000 },
  { name: "Кулер", price: 20000 },
  { name: "Блок питания", price: 10000 },
  { name: "материнская плата", price: 20000 },
  { name: "Монитор", price: 25000 },
  { name: "Калонки", price: 7000 },
  { name: "Коврик", price: 1000 },
];

const currentPrices = {};

function totalPrice(index) {
  const item = items[index];
  currentPrices[item.name] = currentPrices[item.name]
    ? currentPrices[item.name] + item.price
    : item.price;
  updatePrices();
}
function updatePrices() {
  let total = 0;
  for (const itemName in currentPrices) {
    if (currentPrices.hasOwnProperty(itemName)) {
      total += currentPrices[itemName];
    }
  }

  totalPrices.textContent = +total + " сом";
}

btn.addEventListener("click", () => totalPrice(0));
btn1.addEventListener("click", () => totalPrice(1));
btn2.addEventListener("click", () => totalPrice(2));
btn3.addEventListener("click", () => totalPrice(3));
btn4.addEventListener("click", () => totalPrice(4));
btn5.addEventListener("click", () => totalPrice(5));
btn6.addEventListener("click", () => totalPrice(6));
btn7.addEventListener("click", () => totalPrice(7));
btn8.addEventListener("click", () => totalPrice(8));
btn9.addEventListener("click", () => totalPrice(9));
btn10.addEventListener("click", () => totalPrice(10));
btn11.addEventListener("click", () => totalPrice(11));







let numberInput = document.querySelector('#numberInput');
let addButton = document.querySelector('#addButton');
let tableBody = document.querySelector('#tableBody');

let currentSum = 0;
let previousValue = 0;

addButton.addEventListener('click', () => {
    let inputValue = parseFloat(numberInput.value);
    if (isNaN(inputValue)) {
        alert('Введите правильное число');
        return;
    }

    let addedValue = inputValue - previousValue;
    currentSum += inputValue;

    let newRow = document.createElement('tr');

    let numberCell = document.createElement('td');
    numberCell.textContent = inputValue;

    let addedCell = document.createElement('td');
    addedCell.textContent = addedValue;

    let sumCell = document.createElement('td');
    sumCell.textContent = currentSum;

    newRow.appendChild(numberCell);
    newRow.appendChild(addedCell);
    newRow.appendChild(sumCell);

    tableBody.appendChild(newRow);

    previousValue = inputValue;
    numberInput.value = '';
    
});




создания Регистрации

document.getElementById("main-form").addEventListener("submit", checkForm);
function checkForm(event) {
  event.preventDefault();
  let el = document.getElementById("main-form");
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;
  let fail = "";

  if (name === "" && pass === "" && repass === "" && state === "")
    fail = "Заполните все ячейки";
  else if (name.length <= 5 || name.length > 50)
    fail = "Введите корректное имя";
  else if (pass != repass) fail = "Пароли не совпадают";
  else if (pass.split("/").length > 5) fail = "Некорректный пароль";

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
  } else {
    alert("Все данные корректно заполнены");
    window.location = "https://www.roblox.com/home";
  }
}

*/

/*  Время дата

let date = new Date();

console.log(date.getSeconds())
console.log(date.getMinutes())
console.log(date.getHours())
console.log(date.getMonth())
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())



function updateTime() {
  const now = new Date();
  
  const years = String(now.getFullYear())
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');


  document.getElementById('years').textContent = years;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately



let numRange = document.querySelector('#numRange');
let rangeValue = document.querySelector('#rangeValue');


function rangeValues() {
  numRange.textContent = rangeValue.value;
}

rangeValue.addEventListener('input' , rangeValues)


let numRandom = document.querySelector('#numRandom');
let numRandom2 = document.querySelector('#numRandom2');
let numRandom3 = document.querySelector('#numRandom3');
let numRandom4 = document.querySelector('#numRandom4');
let numRandom5 = document.querySelector('#numRandom5');
let btnRandom = document.querySelector('#btnRandom');



function randomTotal() {

  let numRandomTotal = Math.floor(Math.random() * 999)
  let numRandomTotal2 = Math.floor(Math.random() * 9999)
  let numRandomTotal3 = Math.floor(Math.random() * 99999)
  let numRandomTotal4 = Math.floor(Math.random() * 999999)
  let numRandomTotal5 = Math.floor(Math.random() * 9999999)

  numRandom.textContent = numRandomTotal;
  numRandom2.textContent = numRandomTotal2;
  numRandom3.textContent = numRandomTotal3;
  numRandom4.textContent = numRandomTotal4;
  numRandom5.textContent = numRandomTotal5;
}

btnRandom.addEventListener('click' , randomTotal)






let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let totalPrice = document.querySelector("#totalPrice");
let priceTotal = document.querySelector("#priceTotal");

const items = [
  { name: "Телефон", price: 150000 },
  { name: "Ноутбук", price: 380000 },
];

const currentPrice = {};

function totalPrices(index) {
  const item = items[index];

  currentPrice[item.name] = currentPrice[item.name]
    ? currentPrice[item.name] + item.price
    : item.price;

  updatePrices();

  priceTotal.textContent = item.price;
}

function updatePrices() {
  let total = 0;
  for (let totalProduct in currentPrice) {
    if (currentPrice.hasOwnProperty(totalProduct)) {
      total += currentPrice[totalProduct];
    }
  }
  totalPrice.textContent = total;
}

btn1.addEventListener("click", () => totalPrices(0));
btn2.addEventListener("click", () => totalPrices(1));

метод join() выводит массив в строку
let arr = [1,2,3,4]
console.log(arr.join('|| '))

метод sort() и reverse() выводит массив по возрастанию и убыванию
let arr = [1,2,3,4,7,6,23 ,91] ;
console.log(arr.sort())


let arr = [1,2,3,4,7,6,23 ,91] ;
console.log(arr.sort().join())


здесь получаем массив из строк
let arr = [1,2,3,4]
let stroka = arr.join()

console.log(stroka.split(','))


class Person {
   constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
   }
}

 function info() {
  console.log('Человек: ' + this.name + 'Возdраст ' + this.age)
}
let alex = new Person('Alex', 22 , true)
let pidor = new Person('Pidor', 96 , false)

alex.name = 'alex2'
 alex.info()


 
let btnPlus = document.querySelector('#btnPlus').addEventListener('click', increment)
let btnMinus = document.querySelector('#btnMinus').addEventListener('click', decrement)
let numTotal = document.querySelector('#numberTotal') 

let counter = 0; 

function increment() {
  counter++
  numTotal.textContent = counter;
}

function decrement() {
  if(counter > 0) {
    counter-- 
    numTotal.textContent = counter;
  }
}

let displayProduct = document.querySelector("#displayTotalPrice");
let displayTotalProduct = document.querySelector('#displayTotalProduct')

let totalProductPriceElements = [
  document.querySelector("#totalProductPrice"),
  document.querySelector("#totalProductPrice1"),
  document.querySelector("#totalProductPrice2"),
  document.querySelector("#totalProductPrice3"),
  document.querySelector("#totalProductPrice4"),
  document.querySelector("#totalProductPrice5"),
];
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");

const items = [
  { name: "Кока-кола", price: 100000 },
  { name: "Пепси", price: 140 },
  { name: "Чай", price: 50 },
  { name: "Сендвич", price: 200 },
  { name: "Колбаса", price: 300 },
  { name: "Лепешки", price: 60 },
];
const currentPrice = {};
const currentCount = Array(items.length).fill(0);

function totalPrice(index) {
  const item = items[index];
  currentPrice[item.name] = currentPrice[item.name]
    ? currentPrice[item.name] + item.price
    : item.price;

  currentCount[index]++;
  updateTotalPrice();
  totalProductPriceElements[index].textContent = currentCount[index];

  displayTotalProduct.textContent = item.price
}

function updateTotalPrice() {
  let total = 0;

  for (let totalProduct in currentPrice) {
    if (currentPrice.hasOwnProperty(totalProduct)) {
      total += currentPrice[totalProduct];
    }
  }
  displayProduct.textContent = total;
}

btn1.addEventListener("click", () => totalPrice(0));
btn2.addEventListener("click", () => totalPrice(1));
btn3.addEventListener("click", () => totalPrice(2));
btn4.addEventListener("click", () => totalPrice(3));
btn5.addEventListener("click", () => totalPrice(4));
btn6.addEventListener("click", () => totalPrice(5));



let inputNum = document.querySelector('#inputNum')
let textInputNum = document.querySelector('#textNumInput')
let btnInputNum = document.querySelector('#inputNumBtn')
let fail = ""
function inputNumError() {
  if (inputNum.value === '') {
      textInputNum.textContent = "Please, get out";

      textInputNum.style.color = "red"
      textInputNum.style.background = "black"
      textInputNum.style.padding = "20px"
      textInputNum.style.borderRadius = "10px"
  } else {
      textInputNum.textContent = "";
  }
}


btnInputNum.addEventListener('click' , inputNumError) 





Функция текста с голосом 
function inputSpeak() {
  let text = document.getElementById('inputSpeak').value
  let utterance = new SpeechSynthesisUtterance(text)
  speechSynthesis.speak(utterance)
}


*/
/* Код для магазина

let totalPrice = document.querySelector("#totalPrice");
let priceProduct = document.querySelector("#priceProduct");
let btn1 = document
  .querySelector("#btn1")
  .addEventListener("click", () => totalPriceProduct(0));
let btn2 = document
  .querySelector("#btn2")
  .addEventListener("click", () => totalPriceProduct(1));
let btn3 = document
  .querySelector("#btn3")
  .addEventListener("click", () => totalPriceProduct(2));
let btn4 = document
  .querySelector("#btn4")
  .addEventListener("click", () => totalPriceProduct(3));
let btn5 = document
  .querySelector("#btn5")
  .addEventListener("click", () => totalPriceProduct(4));

const itemsElementsProducts = [
  document.querySelector("#totalProduct1"),
  document.querySelector("#totalProduct2"),
  document.querySelector("#totalProduct3"),
  document.querySelector("#totalProduct4"),
  document.querySelector("#totalProduct5"),
];

const items = [
  { name: "Кока-кола", price: 160 },
  { name: "Пепси", price: 150 },
  { name: "Фанта", price: 140 },
  { name: "Спрайт", price: 130 },
  { name: "Чай", price: 100 },
];
const currentCount = Array(items.length).fill(0);
const currentPrice = {};

function totalPriceProduct(index) {
  let item = items[index];
  currentPrice[item.name] = currentPrice[item.name]
    ? currentPrice[item.name] + item.price
    : item.price;
  priceProduct.textContent = item.price;

  currentCount[index]++;
  itemsElementsProducts[index].textContent = currentCount[index];
  updateTotalPriceProduct();
}

function updateTotalPriceProduct() {
  let total = 0;
  for (let totalProduct in currentPrice) {
    if (currentPrice.hasOwnProperty(totalProduct)) {
      total += currentPrice[totalProduct];
    }
  }
  totalPrice.textContent = total;
}

*/
/* Крестики-Нолики 

var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlr');

var player = "x";
var stat = {
    'x': 0,
    'o': 0, 
    'd': 0
}
var winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    var data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(var i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выграл: " + player);
    }else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sN').innerHTML = stat.d;
}
*/

/* 
Локольное хранилище
const array = 42

console.log(localStorage.getItem( 'number'))
localStorage.setItem('number', array.toString())
localStorage.clear()

*/
// const animal = {
//   name: 'Animal',
//   age: 18,
//   hasTail: true

// }

/* Класс и конструктор
class Animal {
  static type = "Animal";
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log("hui");
  }
}

const animal = new Animal({
  name: "Animal",
  age: 18,
  hasTail: true,
});

console.log(animal);

class Cat extends Animal {
  static type = "Cat";
  constructor(options) {
    super(options);
    this.color = options.color;
  }
  voice() {
    super.voice();
    console.log("IKFDIFI");
  }

  get ageInfo() {
    return this.age * 7;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}
const cat = new Cat({
  name: "Cat",
  age: 15,
  hasTail: true,
  color: "black",
});

class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  hide() {
    this.$el.style.display = "none";
  }

  show() {
    this.$el.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
const box2 = new Box({
  selector: "#box2",
  size: 120,
  color: "blue",
});

class Circle extends Box {
  constructor(options) {
    super(options);

    this.$el.style.borderRadius = "50%";
  }
}

const c = new Circle({
  selector: '#circle',
  size: 90,
  color: 'green'
})



class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = options.size + "px";
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 120,
  color: "black",
});
const box2 = new Box({
  selector: "#box2",
  size: 110,
  color: "red",
});
const box3 = new Box({
  selector: "#box3",
  size: 100,
  color: "blue",
});
const box4 = new Box({
  selector: "#box4",
  size: 90,
  color: "green",
});
const box5 = new Box({
  selector: "#box5",
  size: 80,
  color: "yellow",
});
const box6 = new Box({
  selector: "#box6",
  size: 70,
  color: "pink",
});


*/

/* 
пигги банк 

class PiggyBank {
  constructor(maximumValue) {
    this.coins = { 1: 0, 3: 0, 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0, 500: 0, 1000: 0, 2000: 0, 5000: 0};
  }
  addCoin(value) {
    this.coins[value]++;
    this.showCoins();
    this.getTotal();
  }
  showCoins() {
    const spans = document.querySelectorAll(".coin span");
    const coins = Object.keys(this.coins); // [1,3,5,10]
    coins.forEach((coin, index) => {
      spans[index].textContent = this.coins[coin];
    });
    // [span, span, span, span] == [1,3,5,10]
  }
  getTotal() {
    const totalTitle = document.querySelector(".total span");
    const coins = Object.keys(this.coins); // [1,3,5,10]
    let total = 0;
    coins.forEach((coin) => {
      total += coin * this.coins[coin];
    });
    console.log();
    totalTitle.textContent = total;
  }
}
const bank = new PiggyBank(10);
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const coin = parseInt(this.textContent); // 5
    bank.addCoin(coin);
  });
});

*/

/* жизнь

document.getElementById('reduceHealthButton').addEventListener('click', reduceHealth);

    function reduceHealth() {
      const healthBar = document.getElementById('healthBar');
      let currentWidth = parseInt(window.getComputedStyle(healthBar).width);
      const maxWidth = parseInt(window.getComputedStyle(healthBar.parentElement).width);
      const reduceAmount = maxWidth * 0.1; // Reduce by 10%

      let newWidth = currentWidth - reduceAmount;
      if (newWidth < 0) {
        newWidth = 0; // Prevent width from going negative
        alert('dkfujj')
      }
   
      healthBar.style.width = newWidth + 'px';
    } 


*/

/* Запросы на сервер с User
const requestURL = "https://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader('ContentType', 'application/json')
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send(JSON.stringify(body));
  });
}

// sendRequest("GET", requestURL)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
const body = {
  name: "Vladilen",
  age: 20,
};
sendRequest("POST", requestURL, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


*/

/* карточки с красивой сортировкой
const cardsContainer = document.querySelector(".cardsContainer");
const cards = Array.from(document.querySelectorAll(".cardInfo"));
const sortSelect = document.getElementById("sortSelect");
const inputRange = document.getElementById("inputRange");
const inputNum = document.getElementById("inputNumber");
const inputSearch = document.getElementById("inputSearch");
const display = document.getElementById("display");
const btn = document
  .getElementById("basket")
  .addEventListener("click", filterCards);
const displayTotalProduct = document.getElementById("totalProductCount");
const checkboxes = document.querySelectorAll(
  '.checkbox input[type="checkbox"]'
);
const similarProductsContainer = document.querySelector(".similarProducts");

sortSelect.addEventListener("change", () => {
  const selectedCriteria = sortSelect.value;
  sortCards(selectedCriteria);
});

inputSearch.addEventListener("input", filterCards);
inputRange.addEventListener("input", filterCards);
inputNum.addEventListener("input", filterCards);
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", filterCards)
);

function sortCards(criteria) {
  let sortedCards = [];
  switch (criteria) {
    case "popularHigh":
      sortedCards = sortCardPopularityHigh();
      break;
    case "popularLow":
      sortedCards = sortCardPopularityLow();
      break;
    case "ExpensiveCard":
      sortedCards = sortCardsByExpensive();
      break;
    case "CheapCard":
      sortedCards = sortCardsByCheap();
      break;
    case "AlphabeticCard":
      sortedCards = alphabetical();
      break;
  }
  updateCards(sortedCards);
}

function filterCards() {
  const filterSearch = inputSearch.value.toLowerCase();
  const filterRangeNumber = parseInt(inputNum.value);
  const filterRange = parseInt(inputRange.value);
  const selectedBrands = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value.toLowerCase());

  cards.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));
    const brand = card.querySelector(".brand h1").textContent.toLowerCase();

    const matchesSearch = title.includes(filterSearch);
    const matchesRange =
      price <= filterRange &&
      (!filterRangeNumber || price <= filterRangeNumber);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(brand);

    if (matchesSearch && matchesRange && matchesBrand) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  display.innerHTML = inputRange.value;
}

function sortCardPopularityHigh() {
  return cards.sort((a, b) => {
    const sortA = parseFloat(a.querySelector(".popularity span").textContent);
    const sortB = parseFloat(b.querySelector(".popularity span").textContent);
    return sortB - sortA;
  });
}

function sortCardPopularityLow() {
  return cards.sort((a, b) => {
    const sortA = parseFloat(a.querySelector(".popularity span").textContent);
    const sortB = parseFloat(b.querySelector(".popularity span").textContent);
    return sortA - sortB;
  });
}

function sortCardsByExpensive() {
  return cards.sort((a, b) => {
    const sortA = parseFloat(
      a.querySelector(".price span").textContent.replace("$", "")
    );
    const sortB = parseFloat(
      b.querySelector(".price span").textContent.replace("$", "")
    );
    return sortB - sortA;
  });
}

function sortCardsByCheap() {
  return cards.sort((a, b) => {
    const sortA = parseFloat(
      a.querySelector(".price span").textContent.replace("$", "")
    );
    const sortB = parseFloat(
      b.querySelector(".price span").textContent.replace("$", "")
    );
    return sortA - sortB;
  });
}

function alphabetical() {
  return cards.sort((a, b) => {
    const titleA = a.getAttribute("data-title").toLowerCase();
    const titleB = b.getAttribute("data-title").toLowerCase();
    if (titleA < titleB) return -1;
    if (titleB < titleA) return 1;
    return 0;
  });
}

function updateCards(cards) {
  cardsContainer.innerHTML = "";
  cards.forEach((card) => cardsContainer.appendChild(card));
}

let totalProductCount = 0;
let totalPriceProduct = 0;
const totalProductCountElement = document.getElementById("totalProductCount");
const totalPriceProductDisplay = document.getElementById(
  "totalPriceProductDisplay"
);

cards.forEach((card) => {
  const basketButton = card.querySelector(".btn button");
  basketButton.addEventListener("click", () => {
    const productTitle = card.getAttribute("data-title");
    const productPrice = parseInt(card.getAttribute("data-price"));
    const productImage = card.getAttribute("data-image");

    // Update the basket
    updateBasket(productTitle, productPrice, productImage);
  });
});

function updateBasket(title, price, image) {
  const basketBar = document.querySelector(".basketBar");
  let basketItem = basketBar.querySelector(`[data-title="${title}"]`);

  if (basketItem) {
    // Если товар уже в корзине, обновляем количество
    const quantityElement = basketItem.querySelector(".quantity");
    const currentQuantity = parseInt(quantityElement.textContent);
    const newQuantity = currentQuantity + 1;
    quantityElement.textContent = newQuantity;
  } else {
    // Если товара нет в корзине, создаем новый элемент корзины
    basketItem = document.createElement("div");
    basketItem.classList.add("basketItem");
    basketItem.setAttribute("data-title", title);
    basketItem.innerHTML = `
            <div class="productInfo">
                <img src="${image}" alt="${title}">
                <span>${title}</span>
            </div>
            <div class="CountTrash">
              <div class="quantity">1</div>
            <button class="trash"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    basketBar.appendChild(basketItem);
    
    // Добавляем обработчик события для кнопки trash
    basketItem.querySelector(".trash").addEventListener("click", () => {
      removeBasketItem(basketItem, price);
    });
  }

  totalProductCount++;
  totalProductCountElement.textContent = totalProductCount;

  totalPriceProduct += price;
  totalPriceProductDisplay.textContent = totalPriceProduct;

  checkBasketState();
}

function removeBasketItem(basketItem, price) {
  const quantityElement = basketItem.querySelector(".quantity");
  const currentQuantity = parseInt(quantityElement.textContent);
  
  if (currentQuantity > 1) {
    const newQuantity = currentQuantity - 1;
    quantityElement.textContent = newQuantity;
  } else {
    basketItem.remove();
  }

  totalProductCount--;
  totalProductCountElement.textContent = totalProductCount;

  totalPriceProduct -= price;
  totalPriceProductDisplay.textContent = totalPriceProduct;

  checkBasketState();
}

function checkBasketState() {
  const basketBar = document.querySelector(".basketBar");
  const emptyMessage = basketBar.querySelector(".emptyMessage");
  const hasItems = basketBar.querySelectorAll(".basketItem").length > 0;

  if (!hasItems) {
    if (!emptyMessage) {
      const message = document.createElement("div");
      message.classList.add("emptyMessage");
      message.textContent = "The basket is empty, add it to the basket";
      basketBar.appendChild(message);
    }
  } else {
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

// Инициализация состояния корзины при загрузке страницы
document.addEventListener("DOMContentLoaded", checkBasketState);
// array.forEach((elem, index, array) => {
//   console.log(` Привет ${elem}!`)
// });

const display = document.getElementById("display");
const displayTimer = document.getElementById("displayTimer");
const inputTimer = document.getElementById("inputTimer");
const btn = document.getElementById("btn");
const start = document.getElementById("btn2");

let count = 0;
let time;
let startTime;
start.addEventListener("click", () => {
  if (!startTime) {
    time = parseInt(inputTimer.value, 10);
    if (isNaN(time) || time <= 0) {
      alert("Нормально введи🤦‍♂️");
      return;
    }
  }
  displayTimer.textContent = time
  startTime = setInterval(() => {
    if (time > 0) {
      displayTimer.textContent = --time;
      if (time === 10) {
        displayTimer.style.color = "red";
      }
    } else {
      clearInterval(startTime);
      btn.disabled = true;
    }
  }, 1000);
});
btn.addEventListener("click", () => {
  if (time > 0) {
    display.textContent = ++count;
  }
});



function getRandomRole() {
  const randomRole = Math.random() * 100
  let chanceRole = 0
  for(let i = 0; i < roles.length; i++) {
    chanceRole += roles[i].chance
    if(randomRole < chanceRole) {
      return roles[i]
    }
  }
}





const btn = document.getElementById("btn");
const roleText = document.getElementById("role");

const roles = [
  { name: "Innocent", color: "green", chance: 60 },
  { name: "Sheriff", color: "blue", chance: 30 },
  { name: "Murder", color: "red", chance: 10 },
];

btn.addEventListener("click", () => {
  let duration = 1500;
  let interval = 70;
  let times = duration / interval;
  let count = 0;
  let selectedRole;

  const getRandomRole = setInterval(() => {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    roleText.textContent = `${randomRole.name}`;
    roleText.style.color = randomRole.color;
    count++;
    if (count >= times) {
      clearInterval(getRandomRole);
      selectedRole = roles[Math.floor(Math.random() * roles.length)];
      roleText.textContent = `${selectedRole.name}`;
      roleText.style.color = selectedRole.color;
    }
  }, interval);
});


кнопка скролла на верх 

const btn = document.getElementById("btn");

function scrollHeader() {
  document.getElementById("header").scrollIntoView({ behavior: "smooth" });
}
btn.addEventListener("click", scrollHeader);

window.addEventListener("scroll", () => {
  const headerScroll = document.getElementById("header").offsetHeight;
  if (window.scrollY > headerScroll) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

*/
