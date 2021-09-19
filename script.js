const objStyles = {
  1: ['newspaper', 'magazine1', 'magazine2'],
  2: ['medium', 'big', 'reallybig'],
  3: ['rotateleft', 'rotateright'],
  4: ['skewleft', 'skewright'],
};

const arrSty = [1, 2, 3, 4];

// retirado do site horadecodar.com.br
// Função para randomizar array
function shuffleArray(arr) {
  const teste = arr;
  for (let i = teste.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [teste[i], teste[j]] = [teste[j], teste[i]];
  }
  return teste;
}

function testInp(test) {
  if (test[0] !== '') {
    return false;
  }
  return true;
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

function contador(pal) {
  const pCont = document.querySelector('#carta-contador');
  pCont.innerText = pal.length;
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
      contador(splVal);
    }
  }
}

const btnGen = document.querySelector('#criar-carta');
btnGen.addEventListener('click', letGen);
