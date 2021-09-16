function createInput(){
    const parent = document.getElementsByTagName('body')[0];
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'carta-texto';
    input.placeholder = 'Dígiti sua carta';
    parent.appendChild(input);
}
createInput();

function createParagraph(){
    const parent = document.getElementsByTagName('body')[0];
    const paragrph = document.createElement('p');
    paragrph.id = 'carta-gerada';
    parent.appendChild(paragrph);
}
createParagraph();