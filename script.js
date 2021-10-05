const getButton = document.querySelector('#criar-carta');
const getInput = document.querySelector('#carta-texto');
const getP = document.querySelector('#carta-gerada');
const getCount = document.querySelector('#carta-contador');
const classes = ['newspaper', 'magazine1', 'magazine2','medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
let count = 0;

const randonClass = () => {
  const max = classes.length;
  return classes[Math.trunc(Math.random() * max)];
};

getButton.addEventListener('click', () => {
  const valorInput = getInput.value;
  const valorInputSplit = valorInput.split(' ');
  count = 0;
  if (valorInput === '' || valorInputSplit[0] === '') {
    getP.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    getP.innerHTML = '';
    for (let i = 0; i < valorInputSplit.length; i += 1) {
      count += 1;
      let criaSpan = document.createElement('span');
      criaSpan.innerText = valorInputSplit[i];
      criaSpan.className = randonClass();
      getP.appendChild(criaSpan);
    }
    getCount.innerHTML = count;
  }
});
