const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinação = ['skewleft', 'skewright'];

button.addEventListener('click', () => {
  const p = document.querySelector('#carta-gerada');
  const span = document.createElement('span');
  if (input.value === '' || input.value === ' ') {
    span.innerText = "Por favor, digite o conteúdo da carta.";
    p.appendChild(span);
  } else {
    span.innerHTML = input.value;
    span.classList.add(estilo[Math.floor(Math.random() * estilo.length)], tamanho[Math.floor(Math.random() * tamanho.length)], rotacao[Math.floor(Math.random() * rotacao.length)], inclinação[Math.floor(Math.random() * inclinação.length)]);
    p.appendChild(span);
  }
});
