let caixa = document.getElementById('caixa');

let inputTopLeft = document.getElementById('inputTopLeft');
let inputTopRight = document.getElementById('inputTopRight');
let inputBottomRight = document.getElementById('inputBottomRight');
let inputBottomLeft = document.getElementById('inputBottomLeft');

let botaoCopiar = document.getElementById('botaoCopiar');

let botaoIgualarBordas = document.getElementById('botaoIgualarBordas')

inputTopLeft.onchange = atualizarPreviewer;
inputTopRight.onchange = atualizarPreviewer;
inputBottomRight.onchange = atualizarPreviewer;
inputBottomLeft.onchange = atualizarPreviewer;

botaoCopiar.onclick = copiarPropriedade; 
botaoIgualarBordas.onclick = igualarBordas;

function atualizarPreviewer() {
    validarCampos()
    let propriedade = "border-radius: " + inputTopLeft.value + "px " + inputTopRight.value + "px " + inputBottomRight.value + "px " + inputBottomLeft.value + "px;";
    caixa.style = propriedade;
    document.getElementById('textoCopiar').value = propriedade;
    console.log('Propriedade: ' + propriedade);
}

function validarCampos() {
    let inputs = [
        inputTopLeft, 
        inputTopRight,
        inputBottomLeft,
        inputBottomRight
    ];
    for(valor of inputs) {
        if(valor.value.lenght === 0 || valor.value < 0)
            valor.value = 0;
        else if(valor.value > 200)
            valor.value = 200;
    }
}

function copiarPropriedade() {
    let textoCopiar = document.getElementById('textoCopiar');
    if(textoCopiar.value.lenght === 0) return;

    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert('Propriedade copiada: ' + textoCopiar.value)
}




