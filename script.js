function gerarPalavra(texto) {
  const span = document.createElement('span');
  span.innerText = texto;
  return span;
}

function gerarCarta() {
  const cartaGerada = document.querySelector('#carta-gerada');
  let texto = `${document.querySelector('#carta-texto').value}`;
  // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
  if (!texto.length || !texto.replace(/\s/g, '').length) {
    texto = 'Por favor, digite o conteúdo da carta.';
    cartaGerada.innerText = texto;
    return;
  }
  texto = texto.split(' ');
  document.querySelector('#carta-contador').innerText = texto.length;
  cartaGerada.innerHTML = '';
  texto.forEach((i) => {
    cartaGerada.appendChild(gerarPalavra(i));
  });
}

function configurar() {
  document.querySelector('#criar-carta').addEventListener('click', gerarCarta);
}

window.onload = configurar;
// nova linha pra agradar o linter
