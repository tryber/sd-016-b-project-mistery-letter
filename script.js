// Repositorio Avaliativo: https: //github.com/tryber/sd-016-b-project-mistery-letter/pull/2
// Repositorio Descritivo: https: //github.com/tryber/sd-016-b-project-mistery-letter
// FONTE PESQUISA
// Implementações: Tonis Torres
// Contribuição:Gabriel Pinheiro

const buttonGenerate = document.querySelector('#criar-carta');
const letterContent = document.querySelector('#carta-texto');

// eslint-disable-next-line no-unused-vars
function generateLetter() {
    let letterContent = document.getElementById('carta-texto');
    let resultLetterContent = letterContent.value.split(" ");
    let containerFather = document.getElementById('carta-gerada');
    for (let i = 0; i < resultLetterContent.length; i += 1) {
        let createSpan = document.createElement('span');
        createSpan.setAttribute("class", "popular")
        containerFather.appendChild(createSpan);
    }
    popularSpan();
}

function popularSpan() {
    let captureContentSpan = document.getElementsByClassName('popular');
    let letterContent = document.getElementById('carta-texto');
    let resultLetterContent = letterContent.value.split(" ");
    for (let i = 0; i < resultLetterContent.length; i++) {
        captureContentSpan[i].innerText = resultLetterContent[i];
    }
}

function validationLetter(str) {
    //Documentação:https://www.w3schools.com/jsref/jsref_trim_string.asp
    //Remova os espaços em branco de ambos os lados de uma string:
    const filterString = str.value.trim();
    if ((filterString === "") || (filterString === " ")) {
        inforUser();
    } else {
        createrContainerPhrases(filterString);
        countPhrases();

    }

}

function inforUser() {
    let response = document.querySelector('#carta-gerada');
    let input = document.querySelector('#carta-texto');
    input.focus();
    input.value = "";
    input.style.background = "yellow";
    response.innerText = "Por favor, digite o conteúdo da carta.";

}


function createrContainerPhrases(str) {
    //Documentação:https://www.w3schools.com/jsref/jsref_trim_string.asp
    //Remova os espaços em branco de ambos os lados de uma string:
    let input = document.querySelector('#carta-texto');
    const phrasesArray = str.split(" ");
    let containerPhrasesGenerated = document.querySelector('#carta-gerada');
    containerPhrasesGenerated.innerHTML = "";
    for (let i = 0; i < phrasesArray.length; i += 1) {
        let createSpan = document.createElement('span');
        const classGroupStyle = ['newspaper', 'magazine1', 'magazine2'];
        const classGroupSize = ['medium', 'big', 'reallybig'];
        const classGroupRatiton = ['rotateleft', 'rotateright'];
        const classGroupInclination = ['skewleft', 'skewright'];
        //https://www.w3schools.com/jsref/jsref_random.asp
        //https://stackoverflow.com/questions/33731154/add-random-css-classes-to-random-elements-with-javascript-jquery
        let randomClassGroupStyle = classGroupStyle[Math.floor(Math.random() * 3)];
        let randomclassGroupSize = classGroupSize[Math.floor(Math.random() * 3)];
        let randomClassGroupRatation = classGroupRatiton[Math.floor(Math.random() * 2)];
        let randomClassGroupIclination = classGroupInclination[Math.floor(Math.random() * 2)];
        createSpan.innerText = phrasesArray[i];
        createSpan.classList.add(randomClassGroupStyle, randomclassGroupSize, randomClassGroupRatation, randomClassGroupIclination);
        createSpan.addEventListener("click", styleChange);
        containerPhrasesGenerated.appendChild(createSpan);

    }
    input.style.background = "white";
}

buttonGenerate.addEventListener("click", (evt) => {
    //Documentação:https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    evt.preventDefault();
    validationLetter(letterContent);
});


function styleChange(evt) {
    const classGroupStyle = ['newspaper', 'magazine1', 'magazine2'];
    const classGroupSize = ['medium', 'big', 'reallybig'];
    const classGroupRatiton = ['rotateleft', 'rotateright'];
    const classGroupInclination = ['skewleft', 'skewright'];
    //https://www.w3schools.com/jsref/jsref_random.asp
    //https://stackoverflow.com/questions/33731154/add-random-css-classes-to-random-elements-with-javascript-jquery
    let randomClassGroupStyle = classGroupStyle[Math.floor(Math.random() * 3)];
    let randomclassGroupSize = classGroupSize[Math.floor(Math.random() * 3)];
    let randomClassGroupRatation = classGroupRatiton[Math.floor(Math.random() * 2)];
    let randomClassGroupIclination = classGroupInclination[Math.floor(Math.random() * 2)];
    evt.currentTarget.classList.add(randomClassGroupStyle, randomclassGroupSize, randomClassGroupRatation, randomClassGroupIclination);

}

function countPhrases() {
    let counter = document.querySelector('#carta-contador');
    const filhas = document.querySelectorAll('span');
    // eslint-disable-next-line no-unused-vars
    let contador = 0;
    for (let i = 0; i < filhas.length; i++) {
        console.log(filhas[i].innerText);
        contador += 1;

    }
    counter.innerText = contador.toString();
}