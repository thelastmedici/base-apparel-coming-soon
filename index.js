const button = document.querySelector('form button');
const errorImage = document.querySelector('form img');
const errorText = document.querySelector('.error-text');
const inputField = document.querySelector('form input[type="text"]');


button.addEventListener('click', function(event) {
  event.preventDefault();
  const email = document.querySelector('form input[type="text"]').value.trim();
  if (!email || ! email.includes('@')) {
      errorImage.classList.add('icon-error');
      errorText.style.display = 'block';
      // inputField.style.display.color = 'red';
    }
  else{
    errorImage.classList.remove('icon-error');
    errorText.style.display = 'none';
    inputField.value = ''; 
  }
});

inputField.addEventListener('input', function(){
  errorImage.classList.remove('icon-error');
  errorText.style.display = 'none';
});