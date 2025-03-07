import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');

let userSelectedDate;
let timerStarted = false;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      userSelectedDate = selectedDates[0];
      btnActive(true);
    } else {
      btnActive(false);
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
    }
  },
  onOpen() {
    console.log('open');
    if (timerStarted) {
      enableTime = false;
      noCalendar = true;
    }
  },
};

let fp = flatpickr(dateInput, options);

btnActive(false);

startBtn.addEventListener('click', () => {
  if (!timerStarted) {
    startTimer();
  }
});

function startTimer() {
  intervalId = setInterval(onTick, 1000, userSelectedDate);
  timerStarted = true;
  btnActive(false);
  fp.destroy();
  dateInput.setAttribute('disabled', '');
}

function onTick(selectDate) {
  const diffTime = selectDate - Date.now();
  if (Number(diffTime) > 0) {
    const { days, hours, minutes, seconds } = convertMs(diffTime);
    timer.innerHTML = `
			<div class="field">
				<span class="value" data-days>${addLeadingZero(days)}</span>
				<span class="label">Days</span>
			</div>
			<div class="field">
				<span class="value" data-hours>${addLeadingZero(hours)}</span>
				<span class="label">Hours</span>
			</div>
			<div class="field">
				<span class="value" data-minutes>${addLeadingZero(minutes)}</span>
				<span class="label">Minutes</span>
			</div>
			<div class="field">
				<span class="value" data-seconds>${addLeadingZero(seconds)}</span>
				<span class="label">Seconds</span>
			</div>
			`;
  } else {
    clearInterval(intervalId);
    timerStarted = false;
    dateInput.removeAttribute('disabled');
    fp = flatpickr(dateInput, options);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function btnActive(state = true) {
  if (state) {
    startBtn.removeAttribute('disabled');
  } else {
    startBtn.setAttribute('disabled', '');
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
