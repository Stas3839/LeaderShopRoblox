/* игра молния маквин прыгает
const maQueen = document.getElementById('maQueen')
const cactus = document.getElementById('cactus')
const display = document.getElementById('display')

document.addEventListener("keydown" , function(event) {
    jump()
}) 
    


function jump() {
    if(maQueen.classList != "jump") {
        maQueen.classList.add("jump")
    }
    setTimeout(function() {
        maQueen.classList.remove("jump")
    }, 300)
}
let  isAlive = setInterval ( function() {
    let maQueenTop = parseInt(window.getComputedStyle(maQueen).getPropertyValue("top"))
    let cactusList = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if(cactusList < 50 && cactusList >0 && maQueenTop >= 140) {
        alert('Мать в канаве')
        display.innerHTML = 'кчау Мать в канаве'
        display.style.color = 'red'
        
    }
})



Запросы на сервер страны

async function getCountriesData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countriesData = await response.json(); // Handle the promise here
  return countriesData;
}

async function getCountriesTable() {
  const countries = await getCountriesData();
  console.log(countries);

  const countriesTableBody = document.getElementById("countries-table-body");
  for (let country of countries) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = country.name.common; // Correct property for country name
    row.appendChild(nameCell);

    const flagCell = document.createElement("td");
    const flagImage = document.createElement("img");
    flagImage.src = country.flags.png; // Correct property for flag image
    flagImage.alt = `Flag of ${country.name.common}`; // Add alt text for accessibility
    flagImage.width = 50; // Optional: set a width for the image
    flagCell.appendChild(flagImage);
    row.appendChild(flagCell);

    countriesTableBody.appendChild(row);
    
  }
}

getCountriesTable();

*/
// const btnClick = () => {
//   let header = document.querySelector('.header')
//   const btnBgr = document.querySelector('#btn')
//   header.style.backgroundColor = 'blue'
// }
// document.getElementById('btn').addEventListener('click', () => {

// })
// let counter = 0;

// function Basket() {
//   totalBasket.innerHTML = ++counter
// }
// function deleteProduct() {
//   if(counter > 0) {
//     --counter
//     totalBasket.innerHTML = counter
//   }
// }

/* 
код магазин 

let totalBasket = document.getElementById("priceTotalBasket");
let display = document.getElementById("display");
let rangeValue = document.getElementById("rangeValue");
let displayValue = document.getElementById("displayValue");
let numberValue = document.getElementById("numberValue");

const items = [23, 475, 1123, 13882, 373, 8587, 9366];

function rangeValues() {
  // Display current range input value
  // display.innerHTML = ` ${numberValue.value}`;

  const filteredItems = items.filter((item) => item <= numberValue.value);
  displayValue.innerHTML = ` ${filteredItems.join(", ")}`;
}

numberValue.addEventListener("input", rangeValues);

rangeValues();



const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const cards = document.querySelectorAll(".cardStyle");
const display = document.getElementById("display");

function filterCards() {
  const searchFilter = inputSearch.value.toLowerCase();
  const rangeFilter = parseInt(inputRange.value);

  cards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));

    if (title.includes(searchFilter) && price <= rangeFilter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  
  display.innerHTML = rangeFilter;
}

inputSearch.addEventListener('input', filterCards);
inputRange.addEventListener('input', filterCards);

// Initial display
filterCards();




const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const cards = document.querySelectorAll(".cardStyle");
const display = document.getElementById("display");

function filterCards() {
  const searchFilter = inputSearch.value.toLowerCase();
  const rangeFilter = parseInt(inputRange.value);

  cards.forEach(card => {
    const title = card.getAttribute("data-title").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));

    if (title.includes(searchFilter) && price <= rangeFilter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  
  display.innerHTML = rangeFilter;
}

inputSearch.addEventListener('input', filterCards);
inputRange.addEventListener('input', filterCards);

// Initial display
filterCards();
 


let display = document.getElementById("display");
let inputBackground = document.getElementById("inputBackground");
let inputBorderRadius = document.getElementById("inputBorderRadius");

inputBackground.addEventListener("input", () => {
  display.style.background = inputBackground.value;
});

inputBorderRadius.addEventListener("input", () => {
  display.style.borderRadius = inputBorderRadius.value;
});


 карточки товаров с сортировкой
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const cardsContainer = document.querySelector(".card");
const cards = Array.from(document.querySelectorAll(".cardStyle"));
const display = document.getElementById("display");
const sortPopularityButton = document.getElementById("sortPopularity");
const sortPopularityLowButton = document.getElementById("sortPopularityLow");
const sortExpensive = document.getElementById("sortExpensive");
const sortСheap = document.getElementById("sortСheap");
const sortLetterButton = document.getElementById("sortLetter");
sortLetterButton.addEventListener("click", sortCardsAlphabetically);

function filterCards() {
  const searchFilter = inputSearch.value.toLowerCase();
  const rangeFilter = parseInt(inputRange.value);

  cards.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));

    if (title.includes(searchFilter) && price <= rangeFilter) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  display.innerHTML = rangeFilter;
}

function sortCardsByPopularity() {
  const sortedCards = cards.sort((a, b) => {
    const popA = parseFloat(a.querySelector(".popularity h3").textContent);
    const popB = parseFloat(b.querySelector(".popularity h3").textContent);
    return popB - popA;
  });

  sortedCards.forEach((card) => cardsContainer.appendChild(card));
}

function sortCardsByLowPopularity() {
  const sortedCards = cards.sort((a, b) => {
    const popA = parseFloat(a.querySelector(".popularity h3").textContent);
    const popB = parseFloat(b.querySelector(".popularity h3").textContent);
    return popA - popB;
  });

  sortedCards.forEach((card) => cardsContainer.appendChild(card));
}
function sorterExpensive() {
  const sortedExpensive = cards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));
    return priceB - priceA;
  });

  cardsContainer.innerHTML = "";

  sortedExpensive.forEach((card) => cardsContainer.appendChild(card));
}
function sorterCheap() {
  const sortedExpensive = cards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));
    return priceA - priceB;
  });

  cardsContainer.innerHTML = "";

  sortedExpensive.forEach((card) => cardsContainer.appendChild(card));
}
function sortCardsAlphabetically() {
  const sortedCards = cards.sort((a, b) => {
    const titleA = a.getAttribute("data-title").toLowerCase();
    const titleB = b.getAttribute("data-title").toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });

  cardsContainer.innerHTML = "";

  sortedCards.forEach((card) => cardsContainer.appendChild(card));
}
sortСheap.addEventListener("click", sorterCheap);
inputSearch.addEventListener("input", filterCards);
inputRange.addEventListener("input", filterCards);
sortExpensive.addEventListener("click", sorterExpensive);
sortPopularityButton.addEventListener("click", sortCardsByPopularity);
sortPopularityLowButton.addEventListener("click", sortCardsByLowPopularity);

filterCards();


Карточки с сортировкой Select
const cardsContainer = document.querySelector(".card");
const cards = Array.from(document.querySelectorAll(".cardStyle"));
const sortSelect = document.getElementById("sortSelect");
const inputSearch = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const inputNumberRange = document.getElementById("inputNumberRange");
const display = document.getElementById("display");

function sortCards(criteria) {
  switch (criteria) {
    case "popularityHigh":
      sortCardsByPopularityHigh();
      break;
    case "popularityLow":
      sortCardsByPopularityLow();
      break;
    case "expensive":
      sortCardsByExpensive();
      break;
    case "cheap":
      sortCardsByCheap();
      break;
    case "alphabetical":
      sortCardsByAlphabetical();
      break;
    default:
      break;
  }
}
function filterCards() {
  const searchFilter = inputSearch.value.toLowerCase();
  const filteredItems = parseInt(inputNumberRange.value);
  const rangeFilter = parseInt(inputRange.value);

  cards.forEach((card) => {
    const title = card.getAttribute("data-title").toLowerCase();
    const price = parseInt(card.getAttribute("data-price"));

    if (
      title.includes(searchFilter) &&
      price <= rangeFilter &&
      (!filteredItems || price <= filteredItems)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  display.innerHTML = rangeFilter;
}


function sortCardsByPopularityHigh() {
  const sortedCards = cards.sort((a, b) => {
    const popA = parseFloat(a.querySelector(".popularity h3").textContent);
    const popB = parseFloat(b.querySelector(".popularity h3").textContent);
    return popB - popA;
  });

  updateCards(sortedCards);
}

function sortCardsByPopularityLow() {
  const sortedCards = cards.sort((a, b) => {
    const popA = parseFloat(a.querySelector(".popularity h3").textContent);
    const popB = parseFloat(b.querySelector(".popularity h3").textContent);
    return popA - popB;
  });

  updateCards(sortedCards);
}

function sortCardsByExpensive() {
  const sortedCards = cards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));
    return priceB - priceA;
  });

  updateCards(sortedCards);
}

function sortCardsByCheap() {
  const sortedCards = cards.sort((a, b) => {
    const priceA = parseInt(a.getAttribute("data-price"));
    const priceB = parseInt(b.getAttribute("data-price"));
    return priceA - priceB;
  });

  updateCards(sortedCards);
}

function sortCardsByAlphabetical() {
  const sortedCards = cards.sort((a, b) => {
    const titleA = a.getAttribute("data-title").toLowerCase();
    const titleB = b.getAttribute("data-title").toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });

  updateCards(sortedCards);
}

function updateCards(sortedCards) {
  cardsContainer.innerHTML = ""; // Очищаем контейнер от текущих карточек

  sortedCards.forEach((card) => {
    cardsContainer.appendChild(card); // Добавляем отсортированные карточки
  });
}

// Слушатель изменения выбора в <select>
sortSelect.addEventListener("change", function () {
  const selectedCriteria = sortSelect.value;
  sortCards(selectedCriteria);
});

// Слушатели изменений для фильтров
inputSearch.addEventListener("input", filterCards);
inputRange.addEventListener("input", filterCards);
inputNumberRange.addEventListener("input", filterCards);

// Инициализация: сортировка по умолчанию и фильтрация
sortCards("popularityHigh");
filterCards();

const display = document.getElementById("display");
const timerDisplay = document.getElementById("timer");
const btn = document.getElementById("increment");

let counter = 0;
let timeLeft = 120; 


const display = document.getElementById("display")
const timer = document.getElementById("timer")
const btn = document.getElementById("increment") 
const wave = document.getElementById("wave")

let countWave = 0
let counter = 0
let timerCounter = 120 

const countdown = setInterval(() => {
  if(timerCounter > 0) {
    timerCounter--
    timer.innerHTML = timerCounter
  }else {
    clearInterval(countdown)
    btn.disabled = true
  }
}, 1000)

btn.addEventListener("click" , () => {
  if(timerCounter > 0) {
    display.innerHTML = ++counter
  }
  if(counter % 10 === 0) {
    wave.innerHTML = ++countWave
  }
})



const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Preparing data...");
    const backendData = {
      server: "React",
      port: 2000,
      status: "working",
    };
    resolve(backendData);
  }, 2000);
});

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modify = true;
      resolve(data)
    }, 2000);
  });
}).then(clientData => {
  console.log("data resolved" , clientData)
})

*/
/* 
пигги банк 

class PiggyBank {
  constructor(maximumvalue) {
    this.coins = { 1: 0, 3: 0, 5: 0, 10: 0, 1223: 0};
  }

  addCoin(value) {
    this.coins[value]++;
    this.showCoins();
    this.getTotal();
  }

  showCoins() {
    const counts = document.querySelectorAll(".count");
    Object.keys(this.coins).forEach((coin, index) => {
      counts[index].innerHTML = this.coins[coin];
    });
  }

  getTotal() {
    const totalTitle = document.getElementById("display");
    let total = 0;
    Object.keys(this.coins).forEach((coin) => {
      total += coin * this.coins[coin];
    });
    totalTitle.innerHTML = total;
  }
}

const bank = new PiggyBank(10);
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const coin = parseInt(btn.innerHTML);
    bank.addCoin(coin);
  });
});


const countdown = setInterval(() => {
  if(timerCounter > 0) {
    timerCounter--
    timer.innerHTML = timerCounter
  }else {
    clearInterval(countdown)
    btn.disabled = true
  }
}, 1000)

btn.addEventListener("click" , () => {
  if(timerCounter > 0) {
    display.innerHTML = ++counter
  }
  if(counter % 10 === 0) {
    wave.innerHTML = ++countWave
  }
})
  const display = document.getElementById("display");
const inputCSS = document.getElementById("inputCSS");

const inputCSSstyle = () => {
  display.style.background = inputCSS.value;
  display.style.borderRadius = inputCSS.value;
};
inputCSS.addEventListener("input", inputCSSstyle);



function TimeYear() {
  const now = new Date();
  const yearsNow = String(now.getFullYear());
  const hoursNow = String(now.getHours()).padStart(2,"0");
  const minutesNow = String(now.getMinutes()).padStart(2, "0");
  const secondsNow = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("years").textContent = yearsNow;
  document.getElementById("hours").textContent = hoursNow;
  document.getElementById("minutes").textContent = minutesNow;
  document.getElementById("seconds").textContent = secondsNow;
}
setInterval(TimeYear, 1000)
TimeYear()



const inputSearch = document.getElementById("inputSearch");
    const namesContainer = document.querySelector(".nameContainer");

    const users = [
      { name: "Stas", age: 18, status: "student" },
      { name: "Anton", age: 25, status: "student" },
      { name: "Sergey", age: 13, status: "schoolboy" },
      { name: "Yarik", age: 15, status: "schoolboy" },
    ];

    function displayNames(names) {
      namesContainer.innerHTML = ""; // Очистка содержимого контейнера
      names.forEach((nameObj) => {
        const nameElement = document.createElement("h2");
        nameElement.textContent = nameObj.name;
        namesContainer.appendChild(nameElement);
      });
    }

    function filterObject() {
      const filterSearch = inputSearch.value.toLowerCase();
      const filterNames = users.filter((nameObj) =>
        nameObj.name.toLowerCase().includes(filterSearch)
      );
      displayNames(filterNames);
    }

    inputSearch.addEventListener("input", filterObject);

    // Первоначальное отображение всех имен
    displayNames(users)



    const numberA = document.getElementById("numberA");
const numberB = document.getElementById("numberB");
const btn = document.getElementById("btnResult");
const display = document.getElementById("display");
const selectCalculate = document.getElementById("selectCalculate");

const OPERATION = {
  addition: "+",
  subtraction: "-",
  multiplications: "*",
  division: "/",
};

function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplications(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}

function calculate(a, b, operation) {
  let result = null;

  switch (operation) {
    case OPERATION.addition:
      result = addition(a, b);
      break;
    case OPERATION.subtraction:
      result = subtraction(a, b);
      break;
    case OPERATION.multiplications:
      result = multiplications(a, b);
      break;
    case OPERATION.division:
      result = division(a, b);
      break;
  }
  return result;
}
btn.addEventListener("click", () => {
  const a = Number(numberA.value);
  const b = Number(numberB.value);
  const operation = selectCalculate.value;
  const result = calculate(a, b, operation);
  display.textContent = result;
});


const display = document.getElementById("display");
const inputA = document.getElementById("numberA");
const inputB = document.getElementById("numberB");
const selectCalculate = document.getElementById("selectCalculate");
const btn = document.getElementById("btnResult");

const OPERATIONS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : 'Error: Division by zero')
};

btn.addEventListener("click", () => {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectCalculate.value;
  const result = OPERATIONS[operation] ? OPERATIONS[operation](a, b) : 'Invalid Operation';
  display.textContent = result;


  const display = document.getElementById("display");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const selectCalculate = document.getElementById("selectCalculate");
const btn = document.getElementById("btn");

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Error: Division by zero"),
};

btn.addEventListener("click", () => {
  const a = Number(inputA.value);
  const b = Number(inputB.value);
  const operation = selectCalculate.value;
  const result = operations[operation]
    ? operations[operation](a, b)
    : "Invalid operation";
  display.textContent = result;
  if (typeof result === "number") {
    display.textContent = result.toLocaleString("en-US");
  } else {
    display.textContent = result;
  }
});

});



const display = document.getElementById("display");
const displayTimer = document.getElementById("displayTimer");
const btn = document.getElementById("btn");

let counter = 0;
let timer = 100;
let timeOut;

function startTimer() {
  timeOut = setInterval(() => {
    displayTimer.textContent = --timer;
    if (timer === 0) {
      clearInterval(timeOut);
      btn.disabled = true;
    }
  }, 1000);
}

btn.addEventListener("click", () => {
  display.textContent = ++counter;
  if (counter >= 4000) {
    display.style.color = "red";
    alert("Вы выиграли");
    clearInterval(timeOut);
    btn.disabled = true;
  }
});


startTimer()



const textArea = document.getElementById("textArea")
const deleteBtn = document.getElementById("delete")
const saveBtn = document.getElementById("btn") 

window.addEventListener("load", () => {
  const savedText = localStorage.getItem("textAreaContent")
  if(savedText) {
    textArea.value = savedText
  }
})
saveBtn.addEventListener("click", () => {
  localStorage.setItem("textAreaContent", textArea.value)
})
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("textAreaContent")
  textArea.value = ""
})

const textArea = document.getElementById("textArea");
const btnDelete = document.getElementById("delete");
const btnSave = document.getElementById("btn");

window.addEventListener("load", () => {
  const savedText = localStorage.getItem("textAreaContent");
  if (savedText) {
    textArea.value = savedText;
  }
});
btnSave.addEventListener("click", () => {
  localStorage.setItem("textAreaContent", textArea.value);
});
btnDelete.addEventListener("click", () => {
  localStorage.removeItem("textAreaContent");
  textArea.value = "";
});

*/
const btn = document.getElementById("btn");
const display = document.getElementById("display");
const displayTime = document.getElementById("displayTime");

let time = 15;
let count = 0;

function getCountTime() {
  const startTime = setInterval(() => {
    displayTime.textContent = --time;
    if (time === 10) {
      displayTime.style.color = "red";
    }
    if (time === 0) {
      clearInterval(startTime);
      btn.disabled = true;
    }
  }, 1000);
  btn.addEventListener("click", () => {
    display.textContent = ++count;
  });
}
getCountTime()