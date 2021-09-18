const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');

button.addEventListener('click', () => {
  const p = document.querySelector('#carta-gerada');
  const span = document.createElement('span');
  if (input.value === '' || input.value === ' ') {
    span.innerHTML = "Por favor, digite o conteúdo da carta.";
    p.appendChild(span);
  } else {
    span.innerHTML = input.value;
    p.appendChild(span);
  }
});
