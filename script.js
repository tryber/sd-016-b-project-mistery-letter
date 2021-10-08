const randomClass = () => {
  const arrStyle = ['newspaper', 'magazine1', 'magazine2'];
  const arrSize = ['medium', 'big', 'reallybig'];
  const arrInclination = ['skewleft', 'skewright'];
  const arrRotation = ['rotateleft', 'rotateright'];
  const math3 = Math.floor(Math.random() * 3);
  const math2 = Math.floor(Math.random() * 2);
  const classes = [arrStyle[math3], arrSize[math3], arrInclination[math2], arrRotation[math2]];
  return classes;
};

const transformInMistery = () => {
  const span = document.getElementsByTagName('span');
  for (let index = 0; index < span.length; index += 1) {
    for (let index1 = 0; index1 < 4; index1 += 1) {
      span[index].classList.add(randomClass()[index1]);
    }
  }
};

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
    transformInMistery();
  }
};

const createBtn = () => {
  const createLetter = document.getElementById('criar-carta');
  createLetter.addEventListener('click', createParagraphText);
};

window.onload = () => {
  createBtn();
};
