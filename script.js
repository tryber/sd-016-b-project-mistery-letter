const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];

function getRandomClass(group) {
  const index = Math.ceil(Math.random() * group.length) - 1;
  return group[index];
}

function createLetter() {
  const letterText = document.getElementById('carta-texto');
  const generatedLetter = document.getElementById('carta-gerada');
  generatedLetter.innerHTML = '';
  if (letterText.value.trim() === '') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const words = letterText.value.split(' ').filter((word) => word !== '');
    words.forEach((word) => {
      const newSpan = document.createElement('span');
      newSpan.innerText = word;
      newSpan.classList.add(getRandomClass(styleGroup));
      newSpan.classList.add(getRandomClass(sizeGroup));
      newSpan.classList.add(getRandomClass(rotateGroup));
      newSpan.classList.add(getRandomClass(skewGroup));
      generatedLetter.append(newSpan);
    });
  }
}

function addCreateLetterButtonEvents() {
  const createLetterButton = document.getElementById('criar-carta');
  createLetterButton.addEventListener('click', createLetter);
}

function addEvents() {
  addCreateLetterButtonEvents();
}

window.onload = () => {
  addEvents();
};
