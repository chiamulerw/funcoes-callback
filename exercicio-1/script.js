// Função “unshift” para adicionar elementos ao final e início de uma array

function adicionaElementos(array, nota, escolha) {
    if (escolha === "inicio") {
      array.unshift(nota);
    } else if (escolha === "final") {
      array.push(nota);
   } return array;
  }
  
  // Array de notas
  let notas = [6, 9.4, 5, 8, 7.3];
  
  // Adicionando nota no início do array
  let escolha = "inicio";
  notas = adicionaElementos(notas, 4, escolha);
  console.log("Adicionando no início: ", notas);
  
  // Adicionando nota no final do array
  escolha = "final";
  notas = adicionaElementos(notas, 6.5, escolha);
  console.log("Adicionando no final: ", notas);
