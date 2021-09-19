const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const contador = document.querySelector('#carta-contador');

// Estilos para classe do elemento span gerado ao botão gerar carta misteriosa
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinação = ['skewleft', 'skewright'];

function count() {
  const text = input.value;
  const split = text.split(' ').length;
  contador.innerHTML = split;
}

function GenerateCard() {
  button.addEventListener('click', () => {
    const p = document.querySelector('#carta-gerada');
    const span = document.createElement('span');
    if (input.value === '' || input.value === ' ') {
      p.innerHTML = '';
      span.innerText = 'Por favor, digite o conteúdo da carta.';
      p.appendChild(span);
    } else {
      p.innerHTML = '';
      span.innerHTML = input.value;
      span.className = estilo[Math.floor(Math.random() * estilo.length)] + ' ' + tamanho[Math.floor(Math.random() * tamanho.length)] + ' ' + rotacao[Math.floor(Math.random() * rotacao.length)] + ' ' + inclinação[Math.floor(Math.random() * inclinação.length)];
      p.appendChild(span);
      count();
    }
  });
}
function changeClassOnClick() {
  const p = document.querySelector('#carta-gerada');
  p.addEventListener('click', (e) => {
    if (e.target.hasAttribute('class')) {
      e.target.className = estilo[Math.floor(Math.random() * estilo.length)] + ' ' + tamanho[Math.floor(Math.random() * tamanho.length)] + ' ' + rotacao[Math.floor(Math.random() * rotacao.length)] + ' ' + inclinação[Math.floor(Math.random() * inclinação.length)];
    }
  });
}

window.onload = () => {
  changeClassOnClick();
  GenerateCard();
};
