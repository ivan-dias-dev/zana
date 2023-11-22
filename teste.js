let palavras = ["javascript", "html", "css", "react", "node"];

function tamanhoMedio(todasaspalavrasemarray) {
  // Seu código aqui
  let somaComprimento = todasaspalavrasemarray.reduce(
    (oacumulador, palavra) => oacumulador + palavra.length,
    0
  );

  // Calcular a média dividindo a soma pelo número de palavras
  let media = somaComprimento / todasaspalavrasemarray.length;
  return media;
}

let media = tamanhoMedio(palavras);
console.log(media); // Deveria imprimir a média do comprimento das palavras
