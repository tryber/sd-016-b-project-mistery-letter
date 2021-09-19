const criarCartaButton = document.querySelector('#criar-carta');
const cartaTexto = document.querySelector('#carta-texto');
const cartaGeradaP = document.querySelector('#carta-gerada');

criarCartaButton.addEventListener('click', () => {
  cartaGeradaP.innerHTML = '';
  const cartaTextoInput = cartaTexto.value;
  if (cartaTextoInput !== '') {
    const array = cartaTextoInput.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      const span = document.createElement('span');
      span.innerText = array[i];
      cartaGeradaP.appendChild(span);
    }
  } else {
    cartaGeradaP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
});
