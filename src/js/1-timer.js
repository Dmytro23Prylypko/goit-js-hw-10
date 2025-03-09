import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

startButton.disabled = true;

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.now() > selectedDates[0].getTime()) {
      startButton.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        backgroundColor: 'tomato',
        messageColor: 'white',
        iconUrl: './../img/cancel.png',
      });
    } else {
      startButton.disabled = false;
      userSelectedDate = selectedDates[0];
    }
  },
};

flatpickr('#datetime-picker', options);

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

function addLeadingZero(value) {
  value = String(value);

  return value.padStart(2, 0);
}

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsEleent = document.querySelector('[data-seconds]');

startButton.addEventListener('click', handleStartClick);

let intervalId;

function handleStartClick(event) {
  clearInterval(intervalId);
  dateInput.disabled = true;
  event.currentTarget.disabled = true;
  let time = userSelectedDate.getTime() - Date.now();
  intervalId = setInterval(() => {
    if (time >= 1000) {
      time -= 1000;
      let timeObj = convertMs(time);

      daysElement.textContent = addLeadingZero(timeObj.days);
      hoursElement.textContent = addLeadingZero(timeObj.hours);
      minutesElement.textContent = addLeadingZero(timeObj.minutes);
      secondsEleent.textContent = addLeadingZero(timeObj.seconds);
    } else {
      dateInput.disabled = false;
    }
  }, 1000);
}
