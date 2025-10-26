const hoursInput = document.querySelector('.hours');
const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const display = document.querySelector('.display');
const input = document.querySelector('.timer-container');

let totalSeconds = 0;
let countdown;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    input.style.display = 'none';
    display.style.display = 'block';
    display.style.fontSize = '20vh';
    display.style.height = '20vh';
    display.style.width =  '25vw';
    display.style.background  = 'transparent';
    display.style.textAlign = 'center';
    display.style.marginBottom = '50px';
    display.style.color = '#998c8c';
    display.textContent = formatTime(totalSeconds);
}

startBtn.addEventListener('click', () => {
    const hrs = parseInt(hoursInput.value) || 0;
    const mins = parseInt(minutesInput.value) || 0;
    const secs = parseInt(secondsInput.value) || 0;

    totalSeconds = hrs * 3600 + mins * 60 + secs;

    if (totalSeconds <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    updateDisplay();

    countdown = setInterval(() => {
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(countdown);
            alert("⏰ Time's up!");
        }
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(countdown);
    alert("⏹️ Timer stopped.");
});