// Função “map” para dobrar os valores de uma array

function dobraValores(array) {
    return array.map(num => num * 2);
  }
  
  // Array de números aleatórios
  numeros = [7, 8, 3, -8, 1, 3, -9, 10, 5, -3];
  
  // Dobrar os valores
  let numerosD = dobraValores(numeros);
  
  console.log("Array original: ", numeros);
  console.log("Array dobrado: ", numerosD);
