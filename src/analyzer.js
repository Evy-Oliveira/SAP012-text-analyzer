const analyzer = {  
  getWordCount: (text) => {
    //TODO: Esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`.
    return text.trim().split(' ').length
  },
  getCharacterCount: (text) => {
    //TODO: Esta função deve retornar a contagem de caracteres encontrados no parâmetro `text` do tipo `string`.
    return text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta função deve retornar a contagem de caracteres excluindo espaços e sinais de pontuação encontrados no parâmetro `text` do tipo `string`.
    // o que esta dentro de () depois de replace tira o espaço e pontuações, se quisesse tirar só os espaços poderia usar(' ', '')/(/ /g, '')/(/\s/g,'')
    return text.replace(/[^\w]/g,'').length
  },
  getAverageWordLength: (text) => {    
    //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string.
    let palavras = analyzer.getWordCount(text);
    let caracteresSemEspaco = analyzer.getCharacterCountExcludingSpaces(text);
    let total = (caracteresSemEspaco/palavras);
    let media = total.toFixed(2);
    return media
  },
  getNumberCount: (text) => {
    //TODO: Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
   let numero = text.replace(/[^0-9]/g,'');
    return parseInt(numero)
  
  },
  getNumberSum: (text) => {
    //TODO: Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
   //  if (!isNaN()) (parseInt(numero)) && isFinite(numero);
    let somaNumeros = analyzer.getNumberCount(text);
    let result = ""

    for(let i = 0; i < somaNumeros.length; i++) {
      if(somaNumeros){
        result += somaNumeros[i] + somaNumeros[i];
        return result;
      }else{
        return 0;
      }
    }
  },
};

export default analyzer;
