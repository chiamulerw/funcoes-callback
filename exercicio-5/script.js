// Função “filter” para filtrar palavras longas

function filtraPalavrasLongas(array, comprimento) {
    return array.filter(palavra => palavra.length > comprimento);
  }
  
  // Array de strings
  let palavras = ["curto", "palavra", "longa", "comprida", "enorme"];
  
  // Filtrando palavras com comprimento maior que 5
  let palavrasFiltradas = filtraPalavrasLongas(palavras, 5);
  
  console.log("Palavras filtradas:", palavrasFiltradas);
