document.querySelector('#send').addEventListener('click', e => {
  e.preventDefault();

  validation();
});

function validation() {
  const data = {
    firstName: document.querySelector('#firstName'),
    lastName: document.querySelector('#lastName'),
    email: document.querySelector('#email'),
    text: document.querySelector('#text'),
  };

  const valiErrors = {};

  if (!data.firstName.value){
    valiErrors.firstName = 'No first name!';
    console.error('no firstName');
  } else {
    console.info(data.firstName.value);
  }

  if (!data.lastName.value){
    valiErrors.lastName = 'No last name!';
    console.error('no lastName');
  } else {
    console.info(data.lastName.value);
  }

  if (!data.email.value){
    valiErrors.email = 'No email!';
    console.error('no email');
  } else {
    console.info(data.email.value);
  }

  if (!data.text.value){
    valiErrors.text = 'No comment!';
    console.error('no comment');
  } else {
    console.info(data.text.value);
  }

  if (Object.keys(valiErrors).length > 0){
    displayErrors(valiErrors, data);
  } else {
    console.info('send form!')
  }
}

function displayErrors(errors, data) {
  if (errors.firstName){
    createSpan(data.firstName, errors.firstName);
  } else if (errors.lastName){
    createSpan(data.lastName, errors.lastName);
  } else if (errors.email){
    createSpan(data.email, errors.email);
  } else if (errors.text){
    createSpan(data.text, errors.text);
  }
}

function createSpan(reference, message) {
  const spans = document.querySelectorAll('.message');
  for (let i = 0; i < spans.length; i++){
    spans[i].textContent = message;
  }
  console.log('in createSpan')
}

