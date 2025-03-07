import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  position: 'topRight',
});

const form = document.querySelector('.form');

form.addEventListener('submit', createPromise);

function createPromise(event) {
  event.preventDefault();
  const delay = form.elements['delay'].value;
  const state = form.elements['state'].value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case 'rejected':
          reject(delay);
          break;
        case 'fulfilled':
          resolve(delay);
          break;
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  form.reset();
}
