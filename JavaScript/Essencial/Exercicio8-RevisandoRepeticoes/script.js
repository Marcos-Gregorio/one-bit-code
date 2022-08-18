alert("Array inverso");
let contPalavra = "";
let palavra = String(prompt("Digite uma palavra"));
let palavraBloq = "e";

for (let i = palavra.length - 1; i >= 0; i--) {
  if (palavra[i] == palavraBloq) {
    break;
  } else {
    contPalavra += palavra[i];
  }
}

alert(`Nome original:${palavra}\nNome reverso: ${contPalavra}`);
