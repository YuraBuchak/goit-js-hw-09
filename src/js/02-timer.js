import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dayEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const btnStartEl = document.querySelector('button[data-start]');

btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      return;
    } else {
      btnStartEl.disabled = false;

      btnStartEl.addEventListener('click', () => {
        const timeInterval = setInterval(() => {
          const countingTime = selectedDates[0] - new Date();
          const { days, hours, minutes, seconds } = convertMs(countingTime);

          if (countingTime < 1) {
            clearInterval(timeInterval);
            return;
          } else {
            dayEl.textContent = addLeadingZero(days);
            hoursEl.textContent = addLeadingZero(hours);
            minutesEl.textContent = addLeadingZero(minutes);
            secondsEl.textContent = addLeadingZero(seconds);
          }

          console.log(countingTime);
        }, 1000);
      });
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
  return String(value).padStart(2, '0');
}

const labelEl = document.querySelectorAll('.label');
labelEl.forEach(el => {
  el.style.cssText = 'color: green; font-size: 20px';
});

const numberEl = document.querySelectorAll('span.value');
numberEl.forEach(el => {
  el.style.cssText = 'color: blue; font-size: 24px';
});

btnStartEl.style.cssText =
  'color: blue; border-radius: 50%; background: yellow; border-color: blue;';
