alert("Bem vindo ao conversor de distancia.");
let distly = parseFloat(prompt("Digite a distância em anos-luz"));
let casedist = parseInt(
  prompt(
    "Digite o numero correspondente a distancia desejada:\n1.Parsec(pc) 2.Unidade astronônima(AU) 3.Quilômetros(km)"
  )
);
let calc = 0;
let km = Math.pow(10, 12);
let message = "";

switch (casedist) {
  case 1:
    calc = distly * 0.306;
    message = `${calc} pc`;
    alert(
      `Distancia em Anos-Luz:${distly} l.y\nDistancia em Parsec:${message}`
    );
    break;
  case 2:
    calc = distly * 63241.1;
    message = `${calc} AU`;
    alert(
      `Distancia em Anos-Luz:${distly} l.y\nDistancia em Unidade Astronomica:${message}`
    );
    break;
  case 3:
    calc = distly * (9.5 * km);
    message = `${calc} km`;
    alert(
      `Distancia em Anos-Luz:${distly} l.y\nDistancia em quilometros:${message}`
    );
    break;
  default:
    alert(
      `Opção invalida\nDistancia em Anos-Luz:${distly} l.y\nUnidade não indentficado:Conversão fora do escopo\nFinalizando a operação.`
    );
}
