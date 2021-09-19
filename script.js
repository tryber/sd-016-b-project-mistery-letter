let criarCartaButton = document.querySelector('#criar-carta');
let cartaTexto = document.querySelector('#carta-texto');
let cartaGeradaP = document.querySelector('#carta-gerada');



criarCartaButton.addEventListener('click', () => {
  cartaGeradaP.innerHTML = '';
  let cartaTextoInput = cartaTexto.value;
  let span
  if (cartaTextoInput !== '') {
    let array = cartaTextoInput.split(" ");
    for (let i = 0; i < array.length; i += 1) {
      span = document.createElement('span');
      span.innerText = array[i]; 
      cartaGeradaP.appendChild(span);
    }
  } else {
    span = document.createElement('span');
    span.innerText = 'Por favor, digite o conteúdo da carta.';
    cartaGeradaP.appendChild(span);
  }
});