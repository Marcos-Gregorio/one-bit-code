alert(
  "Bem vindo,ao simulador do sistema de navegação de uma nave interagindo com o usuário"
);
let namePiloto = String(prompt("Digite seu nome:"));
let veloNave = 0;
veloNave = parseFloat(prompt("Digite a velocidade que deseja acelerar:"));
let newVelo = Boolean(confirm(`A nave esta a ${veloNave}km/s,deseja alterar`));
if (newVelo === true) {
  veloNave = parseFloat(prompt("Digite o novo valor"));
}

if (veloNave <= 0) {
  alert("Nave esta parada.Considere partir e aumentar a velocidade");
} else if (veloNave < 40) {
  alert("Você está devagar,podemos aumentar mais");
} else if (veloNave >= 40 && veloNave < 80) {
  alert("Parece uma boa velocidade para manter");
} else if (veloNave >= 80 && veloNave < 100) {
  alert("Velocidade alta.Considere diminuir");
} else {
  alert("Velocidae perigosa.Controle automatico forçado.");
}
alert(`Piloto: ${namePiloto}| Velocidade:${veloNave}`);
