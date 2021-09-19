function testInp(test) {
  for (let i = 0; i < test.length; i += 1) {
    if (test[i] !== '') {
      return false;
    }
    return true;
  }
}

function letGen() {
  const pFather = document.querySelector('#carta-gerada');
  const inpTxt = document.querySelector('#carta-texto').value;
  const splVal = inpTxt.split(/[\s,]+/);
  const testSpan = document.getElementsByTagName('span');
  if (inpTxt === '' || testInp(splVal)) {
    pFather.innerText = 'Por favor, digite o conteúdo da carta.';
  } else if (testSpan) {
    pFather.innerText = '';
    for (let i = 0; i < splVal.length; i += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = `${splVal[i]}`;
      pFather.appendChild(newSpan);
    }
  }
}

const btnGen = document.querySelector('#criar-carta');
btnGen.addEventListener('click', letGen);
