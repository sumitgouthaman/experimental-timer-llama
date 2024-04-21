let timerElement = document.getElementById('timer');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let timer = 40; // initial timer value
let phase = 'long'; // initial phase (long = 40 seconds, short = 20 seconds)
let intervalId = null; // to store the interval id
let isRunning = false; // to track if the timer is running

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        intervalId = setInterval(decrementTimer, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(intervalId);
    timer = 40; // reset to initial value
    phase = 'long'; // reset to initial phase
    timerElement.textContent = timer;
    isRunning = false;
}

function decrementTimer() {
    timer--;
    timerElement.textContent = timer;

    if (timer === 0) {
        // play beep sound
        var audio = new Audio('beep.wav');
        audio.play();

        // flash background color
        document.body.style.backgroundColor = 'red';
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 5000);

        // switch to next timer value and phase
        if (phase === 'long') {
            timer = 20;
            phase = 'short';
        } else {
            timer = 40;
            phase = 'long';
        }
    }
}