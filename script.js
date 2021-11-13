const input = document.getElementById('carta-texto');
const btnLetter = document.getElementById('criar-carta');
const pLetter = document.getElementById('carta-gerada');
const uniqueRandoms = [];
const count = document.getElementById('carta-contador');

const makeArrMessage = (params) => {
  const arr = [];
  const stringSplit = params.split(' ');
  count.textContent = stringSplit.length;
  for (let i = 0; i < stringSplit.length; i += 1) {
    arr.push(stringSplit[i]);
  }
  return arr;
};

const random = (params) => {
  if (!uniqueRandoms.length) {
    for (let i = 0; i < params; i += 1) {
      uniqueRandoms.push(i);
    }
  }
  const index = Math.floor(Math.random() * uniqueRandoms.length);
  const arr = uniqueRandoms[index];
  uniqueRandoms.splice(index, 1);
  return arr;
};

const createClass = () => {
  const arr = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i][random(arr[i].length)]);
    if (i >= 0) {
      return arr[random(arr.length)][random(arr[i].length)];
    }
  }
};

btnLetter.addEventListener('click', () => {
  if (input.value === '' || input.value === ' ') {
    pLetter.textContent = 'Por favor, digite o conteúdo da carta.';
  } else {
    pLetter.innerHTML = '';
    const iMessage = input.value;
    const arrString = makeArrMessage(iMessage);
    for (let i = 0; i < arrString.length; i += 1) {
      const makeMessage = document.createElement('span');
      pLetter.appendChild(makeMessage);
      makeMessage.textContent = arrString[i];
      makeMessage.classList.add(createClass());
    }
  }
});
