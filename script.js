const form = document.querySelector('#name-form');
const input = document.querySelector('#user-input');
const response = document.querySelector('#computer-response');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = input.value.trim();

  if (name.toLowerCase() === 'morty') {
    response.textContent = 'Go away!';
  } else {
    document.location = `greeting.html?name=${encodeURIComponent(name)}`;
  }
});