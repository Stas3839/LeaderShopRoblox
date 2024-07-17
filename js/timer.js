/* 
Таймер 
let timer;
let seconds = 0;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimer() {
    document.getElementById('timer').textContent = formatTime(seconds);
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimer();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer); 


let countdown;
let remainingSeconds;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateCountdown() {
    document.getElementById('countdown').textContent = formatTime(remainingSeconds);
}

function startCountdown() {
    const minutesInput = document.getElementById('minutesInput').value;
    const secondsInput = document.getElementById('secondsInput').value;
    remainingSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);

    if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
        alert('Введите правильное количество минут и секунд.');
        return;
    }

    if (!isRunning) {

        const setTimeText = document.getElementById('textTime')
        countdown = setInterval(() => {
            if (remainingSeconds > 0) {
                remainingSeconds--;
                updateCountdown();
            } else {
                clearInterval(countdown);
                isRunning = false;
                setTimeText.textContent = 'Время Вышло' 
            }
        }, 1000);
        isRunning = true;
    }
}

function stopCountdown() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
}

function resetCountdown() {
    stopCountdown();
    remainingSeconds = 0;
    updateCountdown();
}

document.getElementById('startBtn').addEventListener('click', startCountdown);
document.getElementById('stopBtn').addEventListener('click', stopCountdown);
document.getElementById('resetBtn').addEventListener('click', resetCountdown);




let countdown;
let remainingSeconds;
let isRunning = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateCountdown() {
    document.getElementById('countdown').textContent = formatTime(remainingSeconds);
}

function startCountdown() {
    const secondsInput = document.getElementById('secondsInput').value;
    remainingSeconds = parseInt(secondsInput);

    if (isNaN(remainingSeconds) || remainingSeconds <= 0) {
        alert('Введите правильное количество секунд.');
        return;
    }

    if (!isRunning) {
        updateCountdown(); // Обновить отображение сразу после нажатия на "Старт"
        countdown = setInterval(() => {
            if (remainingSeconds > 0) {
                remainingSeconds--;
                updateCountdown();
            } else {
                clearInterval(countdown);
                isRunning = false;
                alert('Время вышло!');
            }
        }, 1000);
        isRunning = true;
    }
}

function stopCountdown() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
}

function resetCountdown() {
    stopCountdown();
    remainingSeconds = 0;
    updateCountdown();
}

document.getElementById('startBtn').addEventListener('click', startCountdown);
document.getElementById('stopBtn').addEventListener('click', stopCountdown);
document.getElementById('resetBtn').addEventListener('click', resetCountdown); 






 обратный отсчет 99 секунд
let countdown;
let remainingSeconds;
let isRunning = false;

function formatTime(seconds) {
    return seconds.toString().padStart(2, '0');
}

function updateCountdown() {
    document.getElementById('countdown').textContent = formatTime(remainingSeconds);
}

function startCountdown() {
    const secondsInput = document.getElementById('secondsInput').value;
    remainingSeconds = parseInt(secondsInput);

    if (isNaN(remainingSeconds) || remainingSeconds <= 0 || remainingSeconds > 99) {
        alert('Введите правильное количество секунд (от 1 до 99).');
        return;
    }

    if (!isRunning) {
        updateCountdown(); // Обновить отображение сразу после нажатия на "Старт"
        countdown = setInterval(() => {
            if (remainingSeconds > 0) {
                remainingSeconds--;
                updateCountdown();
            } else {
                clearInterval(countdown);
                isRunning = false;
                alert('Время вышло!');
            }
        }, 1000);
        isRunning = true;
    }
}

function stopCountdown() {
    if (isRunning) {
        clearInterval(countdown);
        isRunning = false;
    }
}

function resetCountdown() {
    stopCountdown();
    remainingSeconds = 0;
    updateCountdown();
}

document.getElementById('startBtn').addEventListener('click', startCountdown);
document.getElementById('stopBtn').addEventListener('click', stopCountdown);
document.getElementById('resetBtn').addEventListener('click', resetCountdown);



let btn = document.getElementById("btn").addEventListener("click", btnText);
let display = document.getElementById("displayText");
let outputText = document.getElementById("outputText");

function btnText() {
  
  outputText.textContent = display.value;
  outputText.style.background = "black";
  outputText.style.padding = "10px";
  outputText.style.color = "white";
  outputText.style.borderRadius = "10px";
  outputText.style.fontSize = "32px"

  if(outputText === "") {
    outputText.textContent = 'ВВедите тчото '
  }
  else('.')
}


const display = document.getElementById("display");
const timer = document.getElementById("timer");
const btn = document.getElementById("increment");
const wave = document.getElementById("wave");

let countWave = 0;
let countTimer = 180;
let counter = 0;

const timeCount = setInterval(() => {
  if (countTimer > 0) {
    countTimer--;
    timer.innerHTML = countTimer;
  } else {
    clearInterval(timeCount);
    btn.disabled = true;
  }
}, 1000);

btn.addEventListener("click", () => {
  if (countTimer > 0) {
    display.innerHTML = ++counter;
  }
  if (counter % 10 === 0) {
    wave.innerHTML = ++countWave;
  }
});

*/

