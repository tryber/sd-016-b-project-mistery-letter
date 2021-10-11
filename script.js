const modelo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

const sorteia = (l) => l[Math.ceil(Math.random() * l.length) - 1];

function aplicarEstilo(s) {
  s.classList.add(sorteia(modelo));
  s.classList.add(sorteia(tamanho));
  s.classList.add(sorteia(rotacao));
  s.classList.add(sorteia(inclinacao));
}

function gerarPalavra(texto) {
  const span = document.createElement('span');
  span.innerText = texto;
  aplicarEstilo(span);
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
  texto = texto.split(' ').filter((t) => t !== ''); //                    separa palavras e tira vazias
  document.querySelector('#carta-contador').innerText = texto.length; //  atualiza contador
  cartaGerada.innerHTML = ''; //                                          limpa conteúdo antigo
  texto.forEach((i) => cartaGerada.appendChild(gerarPalavra(i))); //      adiciona as palavras
}

function configurar() {
  document.querySelector('#criar-carta').addEventListener('click', gerarCarta);
}

window.onload = configurar;
// nova linha pra agradar o linter
