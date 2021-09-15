const inputText = document.getElementById('carta-texto')
const text = document.getElementById('carta-gerada')
const createLetterBtn = document.getElementById('criar-carta')
const spans = document.getElementsByTagName('span')

function randomClass (grupoClasse) {
  const index = Math.ceil(Math.random() * grupoClasse.length) - 1;
  return grupoClasse[index];
}

function addRamdomClasses(element) {
  const classesStyle = [`newspaper`, `magazine1`, `magazine2`];
  const classesTamano = [`medium`, `big`, `reallybig`];
  const classesRotateInclinate = [`rotateleft`, `rotateright`, `skewleft`, `skewright`];

  element.classList.add(randomClass(classesStyle));
  element.classList.add(randomClass(classesTamano));
  element.classList.add(randomClass(classesRotateInclinate));
}

function deleteExistentSpans() {
  while (text.firstChild) {
    text.removeChild(text.lastChild)
  }
}

function createLetter() {
  if (inputText.value === '' || inputText.value === ' ') {
    text.innerText = 'Por favor, digite o conteúdo da carta.'
  }
  else if (text.children.length > 0) {
    deleteExistentSpans()
  }else {
    const inputValue = inputText.value.split(' ')
    for (let i = 0; i < inputValue.length; i += 1) {
      let spanTag = document.createElement('span');
      addRamdomClasses(spanTag);
      text.appendChild(spanTag);
      spanTag.innerText = inputValue[i];
    }
  }
}

createLetterBtn.addEventListener('click', createLetter)