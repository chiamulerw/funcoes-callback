// Função “forEach” para somar números positivos

function somaPos(array) {
    let soma = 0;
    array.forEach((num) => {
      if (num > 0) {
        soma += num;
      }
      console.log(num);
    });
    console.log("Soma dos números positivos: ", soma);
  }
  
  // Array de números aleatórios
  let numeros = [7, 8, 3, -8, 1, 3, -9, 10, 5, -3];
  
  // Chamando a função
  somaPos(numeros);
