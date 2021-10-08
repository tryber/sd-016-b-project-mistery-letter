const createParagraphText = () => {
  const textInput = document.getElementById('carta-texto');
  const paragraph = document.getElementById('carta-gerada');
  const textValue = textInput.value.split(' ');

  if (textInput.value.trim().length === 0) {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragraph.innerHTML = '';
    for (let index = 0; index < textValue.length; index += 1) {
      const createSpan = document.createElement('span');
      createSpan.innerText = textValue[index];
      paragraph.appendChild(createSpan);
    }
  }
};

const createBtn = () => {
  const createLetter = document.getElementById('criar-carta');
  createLetter.addEventListener('click', createParagraphText);
};

window.onload = () => {
  createBtn();
};
