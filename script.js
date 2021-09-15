const getInput = document.getElementById('carta-texto');
const getButton = document.getElementById('criar-carta');

// ref: https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
function createLetter() {
  const getParagraph = document.getElementById('carta-gerada');
  const replaceSpace = getInput.value.split(' ');
  const arrayInput = Array.from(replaceSpace);
  for (let i = 0; i < arrayInput.length; i += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = `${arrayInput[i]}`;
    getParagraph.appendChild(createSpan);
  }
}

getButton.addEventListener('click', createLetter);
