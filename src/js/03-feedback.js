import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);

const inputData = {};

getInfoFromLocalStorage();

function onInputForm(e) {
  inputData.email = feedbackForm.elements.email.value;
  inputData.message = feedbackForm.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function getInfoFromLocalStorage() {
  let info = localStorage.getItem('feedback-form-state');

  if (info) {
    info = JSON.parse(info);
    Object.entries(info).forEach(([name, value]) => {
      inputData[name] = value;
      feedbackForm.elements[name].value = value;
    });
  }
}

function onSubmitForm(e) {
  e.preventDefault();
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  console.log(inputData);
}
