const letter = document.getElementById('carta-gerada');
const generateBtn = document.getElementById('criar-carta');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const skew = ['skewleft', 'skewright'];

function addClasses(newElement) {
  const el = newElement;
  const class1 = style[Math.round(Math.random() * 2)];
  const class2 = size[Math.round(Math.random() * 2)];
  const class3 = rotation[Math.round(Math.random() * 1)];
  const class4 = skew[Math.round(Math.random() * 1)];

  el.className = `${class1} ${class2} ${class3} ${class4}`;
}

function generateLetter() {
  const inputLetter = document.getElementById('carta-texto').value;
  const splitInput = inputLetter.split(' ');
  letter.innerText = '';

  for (let index = 0; index < splitInput.length; index += 1) {
    if (splitInput[index] === '') {
      letter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      const newWord = document.createElement('span');
      document.getElementById('carta-gerada').appendChild(newWord);
      addClasses(newWord);
      newWord.innerText = splitInput[index];
    }
  }

  const wordCount = letter.children;
  document.getElementById('carta-contador').innerText = wordCount.length;
}

generateBtn.addEventListener('click', generateLetter);
