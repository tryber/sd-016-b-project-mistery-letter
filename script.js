const getInput = document.getElementById('carta-texto');
const getButton = document.getElementById('criar-carta');
const getP = document.getElementById('carta-gerada');
const getPCount = document.getElementById('carta-contador');

const arrayOne = ['newspaper', 'magazine1', 'magazine2'];
const arrayTwo = ['medium', 'big', 'reallybig'];
const arrayThree = ['rotateleft', 'rotateright'];
const arrayFor = ['skewleft', 'skewright'];

function clearP() {
  getP.innerHTML = '';
}

function valid() {
  const valueText = getInput.value;
  if (valueText === '' || valueText === ' ') {
    getP.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function cart() {
  clearP();
  const valueText = getInput.value;
  valid();
  const text = valueText.split(' ');
  for (let index = 0; index < text.length; index += 1) {
    const a = arrayOne[Math.round(Math.random() * 2)];
    const b = arrayTwo[Math.round(Math.random() * 2)];
    const c = arrayThree[Math.round(Math.random() * 1)];
    const d = arrayFor[Math.round(Math.random() * 1)];
    const createSpan = document.createElement('span');
    createSpan.innerHTML = text[index];
    createSpan.classList.add(a);
    createSpan.classList.add(b);
    createSpan.classList.add(c);
    createSpan.classList.add(d);
    getP.appendChild(createSpan);
  }
}

function numbers() {
  const valueText = getInput.value;
  const text = valueText.split(' ');
  const valueCard = text.length;
  getPCount.innerHTML = valueCard;
}
getButton.addEventListener('click', numbers);
getButton.addEventListener('click', cart);
