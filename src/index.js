import analyzer from './analyzer.js';

//TODO: Ouça eventos DOM e invoque métodos do objeto `analyzer`
let botaoReset = document.getElementById("reset-button");

let areaTexto = document.querySelector("textarea")
// areaTexto.style.backgroundColor = "purple" isso é um teste para ver se funciona

let liWordCount = document.querySelector("li[data-testid='word-count']")

let liCharacterCount = document.querySelector("li[data-testid='character-count']")

let liCharacterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']")

let liNumberCount = document.querySelector("li[data-testid='number-count']")

let liNumberSun = document.querySelector("li[data-testid='number-sun']")

let liWordLengthAverage = document.querySelector("li[data-testid='word-length-average']")

botaoReset.addEventListener("click",()=>{
    console.log('aaa')
    areaTexto.textContent
})