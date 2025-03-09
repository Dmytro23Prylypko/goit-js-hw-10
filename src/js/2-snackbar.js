import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerFormSubmit);

function getPromise(delay, isFulfilled) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFulfilled === 'fulfilled') {
        resolve(delay);
      } else if (isFulfilled === 'rejected') {
        reject(delay);
      }
    }, delay);
  });
}

function handlerFormSubmit(event) {
  event.preventDefault();
  getPromise(
    event.currentTarget.elements.delay.value,
    event.currentTarget.elements.state.value
  )
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        backgroundColor: 'green',
        messageColor: 'white',
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: 'tomato',
        messageColor: 'white',
      });
    });
}
