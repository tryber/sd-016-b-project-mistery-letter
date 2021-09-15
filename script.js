const getInput = document.getElementById('carta-texto');
const getButton = document.getElementById('criar-carta');
const getParagraph = document.getElementById('carta-gerada');

function emptyInput() {
  if (getInput.value === '' || getInput.value === ' ') {
    getParagraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
}

function firstGroup() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  return styleGroup[Math.floor(Math.random() * 3)];
}

function secondGroup() {
  const sizeGroup = ['medium', 'big', 'reallybig'];
  return sizeGroup[Math.floor(Math.random() * 3)];
}

function thirdGroup() {
  const rotationGroup = ['rotateleft', 'rotateright'];
  return rotationGroup[Math.floor(Math.random() * 2)];
}

function fourthGroup() {
  const inclinationGroup = ['skewleft', 'skewright'];
  return inclinationGroup[Math.floor(Math.random() * 2)];
}

function insertingClasses() {
  const spanClass = getParagraph.children;
  for (let i = 0; i < getParagraph.children.length; i += 1) {
    spanClass[i].className = `${firstGroup()} ${secondGroup()} ${thirdGroup()} ${fourthGroup()}`;
  }
}

function countWords() {
  const getCounter = document.getElementById('carta-contador');
  getCounter.innerText = getParagraph.children.length;
}

// ref: https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
function createLetter() {
  getParagraph.innerHTML = '';
  const replaceSpace = getInput.value.split(' ');
  const arrayInput = Array.from(replaceSpace);
  for (let i = getParagraph.children.length; i < arrayInput.length; i += 1) {
    if (arrayInput[i] !== '') {
      const createSpan = document.createElement('span');
      createSpan.innerText = `${arrayInput[i]}`;
      getParagraph.appendChild(createSpan);
    }
  }
  emptyInput();
  insertingClasses();
  countWords();
}

getButton.addEventListener('click', createLetter);
