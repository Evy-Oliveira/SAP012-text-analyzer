import analyzer from './analyzer.js';

//TODO: Ouça eventos DOM e invoque métodos do objeto `analyzer`
const areaTexto = document.querySelector("textarea")

const liWordCount = document.querySelector("li[data-testid='word-count']")

const liCharacterCount = document.querySelector("li[data-testid='character-count']")

const liCharacterNoSpacesCount = document.querySelector("li[data-testid='character-no-spaces-count']")

const liNumberCount = document.querySelector("li[data-testid='number-count']")

const liNumberSun = document.querySelector("li[data-testid='number-sum']")

const liWordLengthAverage = document.querySelector("li[data-testid='word-length-average']")

areaTexto.addEventListener("input", function () {
  liWordCount.textContent = "Palavras: " + analyzer.getWordCount(areaTexto.value)
  liCharacterCount.textContent = "Caracteres: " + analyzer.getCharacterCount(areaTexto.value)
  liCharacterNoSpacesCount.textContent = "Caracteres sem espaços: " + analyzer.getCharacterCountExcludingSpaces(areaTexto.value)
  liNumberCount.textContent = "Números: " + analyzer.getNumberCount(areaTexto.value)
  liNumberSun.textContent = "Soma dos números: " + analyzer.getNumberSum(areaTexto.value)
  liWordLengthAverage.textContent = "Comprimento médio das Palavras: " + analyzer.getAverageWordLength(areaTexto.value)
})

document.getElementById("reset-button").addEventListener("click", function () {
  areaTexto.value = ""
  areaTexto.dispatchEvent(new Event("input"));

//   Atraves do ID ele ta pegando o botão, o addEventListener(esta criando um observador para o botão) e sempre que clicar no botão o observador criado vai excutar a ação
})

areaTexto.dispatchEvent(new Event("input"));
// lança um evento do input()