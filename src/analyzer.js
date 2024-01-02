const analyzer = {
  getWordCount: (text) => {
    //TODO: Esta função deve retornar a contagem de palavras encontradas no parâmetro `text` do tipo `string`.
    if (text.length === 0) return 0
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
    // /[^0-9a-zA-Z]/gim,''.
  },
  getAverageWordLength: (text) => {
    //TODO: Esta função deve retornar o comprimento médio das palavras encontradas no parâmetro `text` do tipo `string.
    const palavras = text.split(' ');
    let total = 0;
    for (let i = 0; i < palavras.length; i++) {
      total += palavras[i].length;
    }
    const media = (total / palavras.length).toFixed(2);
    return Number(media);
  },
  getNumberCount: (text) => {
    //TODO: Esta função deve retornar quantos números estão no parâmetro `text` do tipo `string`.
    const listaNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    // console.log(listaNumeros)
    if (listaNumeros) {
      return listaNumeros.length;
    } else return 0;
  },
  getNumberSum: (text) => {
    //TODO: Esta função deve retornar a soma de todos os números encontrados no parâmetro `text` do tipo `string`.
    const listaNumeros = text.match(/\b\d+(\.\d+)?\b/g);
    
    if ((!listaNumeros) || (listaNumeros.length === 0)) return 0

    let resultado = 0;

    for (let i = 0; i < listaNumeros.length; i++) {

      resultado += Number(listaNumeros[i]);

    }
    return resultado;
  }
};

export default analyzer;
