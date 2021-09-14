let botaoCriar = document.getElementById('criar-carta');
let input = document.getElementById('carta-texto');
let carta = document.getElementById('carta-gerada');
let contador = document.getElementById('carta-contador');

botaoCriar.addEventListener('click', function() {
  for (let index = 0; index < carta.children.length; index = 0) {
    carta.children[index].remove();
  }
  let palavras = input.value.trim().split(' ');
  console.log(palavras.length);
  if (palavras.length > 1) {
    for (let index = 0; index < palavras.length; index++) {
      let palavra = document.createElement('span');
      palavra.innerText = palavras[index];
      setClasses(palavra);
      carta.appendChild(palavra);
    }
  } else {
    let palavra = document.createElement('p');
    palavra.innerText = 'Por favor, digite o conteúdo da carta.';
    carta.appendChild(palavra);
  }
  contador.innerText = palavras.length;
})

function setClasses(elemento) {

  let estilo = ['newspaper', 'magazine1', 'magazine2'];
  let numEstilo = Math.floor(Math.random() * 2);

  let tamanho = ['medium', 'big', 'reallybig'];
  let numTamanho = Math.floor(Math.random() * 2);

  let rotacao = ['rotateleft', 'rotaterigth'];
  let numRotacao = Math.floor(Math.random() * 1);

  let inclinacao = ['skewleft', 'skewright'];
  let numInclinacao = Math.floor(Math.random() * 1);

  elemento.classList.add(estilo[numEstilo]);
  elemento.classList.add(tamanho[numTamanho]);
  elemento.classList.add(rotacao[numRotacao]);
  elemento.classList.add(inclinacao[numInclinacao]);
}