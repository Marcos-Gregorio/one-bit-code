alert("Bem vindo ao filtro de letra");
let palabra = String(prompt("Digite uma palavra"));
let palavraFiltra = String(prompt("Letra para retirar a palavra"));
let palavraDesejada = String(
  prompt("Digite a palavra que deseja incluir no luygar da outra")
);
let contPalavras = "";
for (let i = 0; i < palabra.length; i++) {
  if (palabra[i] == palavraFiltra) {
    contPalavras += palavraDesejada;
  } else {
    contPalavras += palabra[i];
  }
}
alert(`Palavra: ${palabra}\nNova Palavra: ${contPalavras}`);
