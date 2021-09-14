function createLetter() {
  const letterText = document.getElementById('carta-texto');
  const generatedLetter = document.getElementById('carta-gerada');
  generatedLetter.innerHTML = '';
  const words = letterText.value.split(' ').filter((word) => word !== '');
  words.forEach((word) => {
    const newSpan = document.createElement('span');
    newSpan.innerText = word;
    generatedLetter.append(newSpan);
  });
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
