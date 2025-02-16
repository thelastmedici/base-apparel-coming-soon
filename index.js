const button = document.querySelector('form button');
const errorImage = document.querySelector('form img');
const errorText = document.querySelector('.error-text');

button.addEventListener('click', function(event) {
  event.preventDefault();
  const email = document.querySelector('form input[type="text"]').value.trim();
  if (!email || ! email.includes('@')) {
      errorImage.classList.add('icon-error');
      errorText.style.display = 'block';
  }
});