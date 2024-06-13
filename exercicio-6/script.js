// Função “reduce” para contar ocorrências

function contaOcorrencias(array) {
    return array.reduce((contador, palavra) => {
      contador[palavra] = (contador[palavra] || 0) + 1;
      return contador;
    }, {});
  }
  
  // Array de strings
  let strings = ["melancia", "pêra", "laranja", "melancia", "pêra", "laranja",];
  
  // Contando ocorrências
  let ocorrencias = contaOcorrencias(strings);
  
  console.log("Ocorrências:", ocorrencias);
