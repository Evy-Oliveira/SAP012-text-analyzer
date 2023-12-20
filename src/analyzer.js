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
    return text.replace(/[^\w]/g, '').length
  },
  getAverageWordLength: (text) => {
    //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string.
    const palavras = analyzer.getWordCount(text);
    const caracteresSemEspaco = analyzer.getCharacterCountExcludingSpaces(text);
    const total = (caracteresSemEspaco / palavras);
    const media = total.toFixed(2);
    return media
  },
  getNumberCount: (text) => {
    //TODO: Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
    const numero = text.replace(/[^0-9]/g, '');
    if (numero.length > 0)
      return numero
    else return 0

  },
  getNumberSum: (text) => {
    //TODO: Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.

    const algarismosDoTexto = analyzer.getNumberCount(text);
    let resultado = 0;

    for (let i = 0; i < algarismosDoTexto.length; i++) {

      resultado += parseInt(algarismosDoTexto[i]);

    }
    return resultado;
  },
};

export default analyzer;
