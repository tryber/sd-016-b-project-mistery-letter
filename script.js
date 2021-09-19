let generateBtn = document.getElementById('criar-carta');

function generateLetter() {
  let inputLetter = document.getElementById('carta-texto').value;
  let splitInput = inputLetter.split(' ');
  document.getElementById('carta-gerada').innerText = '';

  for (let index = 0; index < splitInput.length; index += 1) {
    let newWord = document.createElement('span');
    newWord.innerText = splitInput[index];
    document.getElementById('carta-gerada').appendChild(newWord);
  }

}

generateBtn.addEventListener('click', generateLetter);