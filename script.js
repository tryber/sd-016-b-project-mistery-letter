const criarCartaButton = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGeradaP = document.querySelector('#carta-gerada');

function classes() {
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const inclination = ['skewleft', 'skewright'];

  const x = parseInt(Math.random() * 3, 10);
  const y = parseInt(Math.random() * 3, 10);
  const z = parseInt(Math.random() * 2, 10);
  const w = parseInt(Math.random() * 2, 10);

  const randonClass = `${style[x]} ${size[y]} ${rotation[z]} ${inclination[w]}`;

  return randonClass;
}

criarCartaButton.addEventListener('click', () => {
  cartaGeradaP.innerHTML = '';
  const cartaTextoInput = cartaTexto.value;
  if (cartaTextoInput !== '') {
    const array = cartaTextoInput.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = array[i];
      span.className = classes();
      cartaGeradaP.appendChild(span);
    }
  } else {
    cartaGeradaP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});

cartaGeradaP.addEventListener('click', (event) => {
  const click = event.target;
  click.className = classes();
});
