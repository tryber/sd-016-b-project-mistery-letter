const objStyles = {
  1: ['newspaper', 'magazine1', 'magazine2'],
  2: ['medium', 'big', 'reallybig'],
  3: ['rotateleft', 'rotateright'],
  4: ['skewleft', 'skewright'],
};

const arrSty = [1, 2, 3, 4];

//retirado do site horadecodar.com.br
// Função para randomizar array
function shuffleArray(arr) {
  // Loop em todos os elementos
  for (let i = arr.length - 1; i > 0; i -= 1) {
    // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // Retornando array com aleatoriedade
  return arr;
}

function testInp(test) {
  for (let i = 0; i < test.length; i += 1) {
    if (test[i] !== '') {
      return false;
    }
    return true;
  }
}
function randNum(eTar) {
  const numberOfStyles = Math.floor(Math.random() * (3 + 1));
  const arrayEmb = shuffleArray(arrSty);
  for (let i = 0; i <= numberOfStyles; i += 1) {
    const actSty = arrayEmb[i];
    const actAr = shuffleArray(objStyles[actSty]);
    eTar.classList.add(actAr[0]);
  }
}

function letGen() {
  const pFather = document.querySelector('#carta-gerada');
  const inpTxt = document.querySelector('#carta-texto').value;
  const splVal = inpTxt.split(' ');
  const testSpan = document.getElementsByTagName('span');
  if (inpTxt === '' || testInp(splVal)) {
    pFather.innerText = 'Por favor, digite o conteúdo da carta.';
  } else if (testSpan) {
    pFather.innerText = '';
    for (let i = 0; i < splVal.length; i += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = `${splVal[i]}`;
      randNum(newSpan);
      pFather.appendChild(newSpan);
    }
  }
}

const btnGen = document.querySelector('#criar-carta');
btnGen.addEventListener('click', letGen);
