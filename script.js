const buttonCreateText = document.getElementById('criar-carta');
const textArea = document.getElementById('carta-gerada');

function checkInput() {
  const inputText = document.getElementById('carta-texto').value;
  let countSpaces = 0;
  for (let index = 0; index < inputText.length; index += 1) {
    if (inputText[index] === ' ') {
      countSpaces += 1;
    }
  }
  if (countSpaces === inputText.length) {
    textArea.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

buttonCreateText.addEventListener('click', () => {
  const inputText = document.getElementById('carta-texto').value;
  textArea.innerText = '';
  checkInput();
  if (textArea.innerText === '') {
    const textoQuebrado = inputText.split(' ');
    for (let index = 0; index < textoQuebrado.length; index += 1) {
      const spanText = document.createElement('span');
      spanText.innerText = ` ${textoQuebrado[index]} `;
      textArea.appendChild(spanText);
    }
  }
});
