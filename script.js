const cartaTexto = document.getElementById('carta-texto');
const cartaGerada = document.getElementById('carta-gerada');
const btnCriarCarta = document.getElementById('criar-carta');

btnCriarCarta.addEventListener('click', () => {
  const text = cartaTexto.value;
  cartaGerada.innerText = text;
});
