let letter = document.getElementById('carta-gerada');
let generateBtn = document.getElementById('criar-carta');

let style = ['newspaper', 'magazine1', 'magazine2'];
let size = ['medium', 'big', 'reallybig'];
let rotation = ['rotateleft', 'rotateright'];
let skew = ['skewleft', 'skewright'];

function addClasses(newElement) {
  let class1 = style[Math.round(Math.random() * 2)];
  let class2 = size[Math.round(Math.random() * 2)];
  let class3 = rotation[Math.round(Math.random() * 1)];
  let class4 = skew[Math.round(Math.random() * 1)];

  newElement.className = `${class1} ${class2} ${class3} ${class4}`;
}

function generateLetter() {
  let inputLetter = document.getElementById('carta-texto').value;
  let splitInput = inputLetter.split(' ');
  letter.innerText = '';

  for (let index = 0; index < splitInput.length; index += 1) {
    if (splitInput[index] === '') {
      letter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      let newWord = document.createElement('span');
      document.getElementById('carta-gerada').appendChild(newWord);
      addClasses(newWord);
      newWord.innerText = splitInput[index];
    }
  }

  let wordCount = letter.children;
  document.getElementById('carta-contador').innerText = wordCount.length
}

generateBtn.addEventListener('click', generateLetter);