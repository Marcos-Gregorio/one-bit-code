alert("Bem vindo a interação a uma nave com dobra espacial");
let nameSpace = String(prompt("Digite o nome da nave espacial:"));
let condition = confirm("Deseja entrar um dobra espacial ?");
let contDobra = 0;
while (condition !== false) {
  contDobra += 1;
  condition = confirm("Deseja entrar em mais uma dobra espacial?");
}
alert(
  `A nave espacial:${nameSpace}\nQuantidade de dobras realizadas:${contDobra}`
);
