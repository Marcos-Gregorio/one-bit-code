let numberloop = parseInt(prompt("Digite um numero entre zero e dez:"));
loop(numberloop);
function loop(numero) {
  while (0 < numero && numero >= 10) {
    alert(`Digite um numero valido`);
    numero = parseInt(
      prompt(`Numero digitado: ${numero}.\nDigite um nuemro de 0 a 10:`)
    );
  }
  alert(`Numero digitado: ${numero} `);
}
