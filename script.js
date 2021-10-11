function gerarCarta() {
  let texto = document.querySelector('#carta-texto').value;
  // https://stackoverflow.com/questions/10261986/how-to-detect-string-which-contains-only-spaces
  if (!texto.length || !texto.replace(/\s/g, '').length) {
    texto = 'Por favor, digite o conteúdo da carta.';
  }
  document.querySelector('#carta-gerada').innerText = texto;
}

function configurar() {
  document.querySelector('#criar-carta').addEventListener('click', gerarCarta);
}

window.onload = configurar;
// nova linha pra agradar o linter
