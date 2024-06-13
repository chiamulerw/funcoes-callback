// Função “shift” para remover elementos da array

function removeElementos(array, escolha) {
    if (escolha === "inicio") {
      array.shift();
    } else if (escolha === "final") {
      array.pop();
    } return array;
  }
  
  // Array de nomes
  let nomes = ["João", "Gabriel", "Letícia", "Daniel", "Alana", "Fernandes", "Guilherme", "Cleber"]
  
  // Removendo nome do início do array
  
  escolha = "inicio";
  nomes = removeElementos(nomes, escolha);
  console.log("Removendo no início: ", nomes);
  
  // Removendo nome do final do array
  escolha = "final";
  nomes = removeElementos(nomes, escolha);
  console.log("Removendo no final: ", nomes);
