const input = document.getElementById('carta-texto');
const btnLetter = document.getElementById('criar-carta');
const pLetter = document.getElementById('carta-gerada');

const makeArrMessage = (params) => {
  const arr = [];
  const stringSplit = params.split(' ');
  for (let i = 0; i < stringSplit.length; i += 1) {
    arr.push(stringSplit[i]);
  }
  return arr;
};

btnLetter.addEventListener('click', () => {
  pLetter.innerHTML = '';
  const iMessage = input.value;
  const arrString = makeArrMessage(iMessage);
  for (let i = 0; i < arrString.length; i += 1) {
    const makeMessage = document.createElement('span');
    pLetter.appendChild(makeMessage);
    makeMessage.textContent = arrString[i];
  }
});
