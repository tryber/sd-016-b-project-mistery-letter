const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');

button.addEventListener('click', () => {
  const p = document.querySelector('#carta-gerada');
  const span = document.createElement('span');
  span.innerHTML = input.value;
  p.appendChild(span);
});
