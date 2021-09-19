let generateBtn = document.getElementById('criar-carta');

function generateLetter() {
  let inputLetter = document.getElementById('carta-texto').value;
  let splitInput = inputLetter.split(' ');
  let letter = document.getElementById('carta-gerada');
  letter.innerText = '';

  for (let index = 0; index < splitInput.length; index += 1) {
    if (splitInput[index] === '') {
      letter.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      let newWord = document.createElement('span');
      newWord.innerText = splitInput[index];
      document.getElementById('carta-gerada').appendChild(newWord);
    }
  }
}

generateBtn.addEventListener('click', generateLetter);
