const greeting = document.querySelector('#friend-greeting');
const params = new URLSearchParams(document.location.search);
const friendName = params.get('name') || 'friend';

greeting.textContent = `Hello, ${friendName}!`;

document.querySelector('#madlib-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const verb = document.querySelector('#verb').value.trim();
  const adjective = document.querySelector('#adjective').value.trim();

  const url = `madlib.html?name=${encodeURIComponent(friendName)}&verb=${encodeURIComponent(verb)}&adj=${encodeURIComponent(adjective)}`;
  document.location = url;
});