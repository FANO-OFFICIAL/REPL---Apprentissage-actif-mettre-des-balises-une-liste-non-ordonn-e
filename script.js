var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = '<ul>\n'+
      '<li>Films</li>\n'+
      '<li>Séries</li>\n'+
      '<li>Court-métrage</li>\n'+
      '<li>Bande-annonce</li>\n'+
    '</ul>';
var htmlCodeInit = 
    'Films\n'+
    'Séries\n'+
    'Court-métrage\n'+
    'Bande-annonce';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);