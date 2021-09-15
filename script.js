const inputText = document.getElementById('carta-texto')
const text = document.getElementById('carta-gerada')
const createLetterBtn = document.getElementById('criar-carta')
const spans = document.getElementsByTagName('span')

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
  }
  const inputValue = inputText.value.split(' ')
  for (let i = 0; i < inputValue.length; i += 1) {
    let spanTag = document.createElement('span')
    text.appendChild(spanTag)
    spanTag.innerText = inputValue[i]
  }
}

createLetterBtn.addEventListener('click', createLetter)