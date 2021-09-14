const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotateGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];

function getRandomClass(group) {
  const index = Math.ceil(Math.random() * group.length) - 1;
  return group[index];
}

function addClassesTo(element) {
  element.classList.add(getRandomClass(styleGroup));
  element.classList.add(getRandomClass(sizeGroup));
  element.classList.add(getRandomClass(rotateGroup));
  element.classList.add(getRandomClass(skewGroup));
}

function createLetter() {
  const letterText = document.getElementById('carta-texto');
  const generatedLetter = document.getElementById('carta-gerada');
  const letterCounter = document.getElementById('carta-contador');
  generatedLetter.innerHTML = '';
  if (letterText.value.trim() === '') {
    generatedLetter.innerText = 'Por favor, digite o conteúdo da carta.';
    letterCounter.innerHTML = '';
  } else {
    const words = letterText.value.split(' ').filter((word) => word !== '');
    letterCounter.innerText = words.length;
    words.forEach((word) => {
      const newSpan = document.createElement('span');
      newSpan.innerText = word;
      addClassesTo(newSpan);
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
