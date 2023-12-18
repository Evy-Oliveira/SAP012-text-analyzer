import analyzer from './analyzer.js';

//TODO: Ouça eventos DOM e invoque métodos do objeto `analyzer`


let areaTexto = document.querySelector("textarea")
// areaTexto.style.backgroundColor = "purple" isso é um teste para ver se funciona

let liWordCount = document.querySelector("li[data-testid='word-count']")

let liCharacterCount = document.querySelector("li[data-testid='character-count']")

let liCharacterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']")

let liNumberCount = document.querySelector("li[data-testid='number-count']")

let liNumberSun = document.querySelector("li[data-testid='number-sun']")

let liWordLengthAverage = document.querySelector("li[data-testid='word-length-average']")


document.querySelector("textarea").addEventListener("input", function(){
    liWordCount.textContent = "Palavras: " + analyzer.getWordCount(areaTexto.value)
    liCharacterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(areaTexto.value)
    liCharacterNoSpacesCount.textContent = "Caracteres sem espaços: " + analyzer.getCharacterCountExcludingSpaces(areaTexto.value)
    liNumberCount.textContent = "Números: " + analyzer.getNumberCount(areaTexto.value)
    liNumberSun.textContent = "Soma dos números: " + analyzer.getNumberSum(areaTexto.value)
    liWordLengthAverage.textContent = "Comprimento médio das Palavras: " + analyzer.getAverageWordLength(areaTexto.value)
    

})

document.getElementById("reset-button").addEventListener("click",function(){
    areaTexto.value = ""
//   Atrave do ID ele ta pegando o botão, o addEventListener(esta criando um observador para o botão) e sempre que clicar no botão o observador criado vai excutar a ação
})
