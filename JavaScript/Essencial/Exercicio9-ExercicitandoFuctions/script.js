let navName = String(prompt(`Digite o nome da sua nave:`));
let velocit = parseFloat(prompt(`Digite a velocidade da sua nave`));
let contadorVelocity = 0;
let menuBoard = parseInt(
  prompt(
    "Escolha uma opção:\n1.Acelerar\n2.Descalerar\n3.Menu de bordo\n4.Sair"
  )
);

menuOptions(menuBoard, navName, velocit);

function menuOptions(chooseOptions, name, velocity) {
  alert("funfo");
  while (chooseOptions !== 4) {
    switch (chooseOptions) {
      case 1:
        acelerar(velocity);
        alert(velocity);
        break;
      case 2:
        desacelerar(velocity);
        break;
      case 3:
        showInfo(name, velocity);

        break;
      default:
        chooseOptions = parseInt(
          prompt(
            "Escolha uma opção:\n1.Acelerar\n2.Descalerar\n3.Menu de bordo\n4.Sair"
          )
        );
        break;
    }
    chooseOptions = parseInt(
      prompt(
        "Escolha uma opção:\n1.Acelerar\n2.Descalerar\n3.Menu de bordo\n4.Sair"
      )
    );
  }
}

function acelerar(velocit) {
  velocit += 5;

  return velocit;
}
function desacelerar(velocit) {
  velocit -= 5;
  if (velocit <= 0) {
    velocit = 0;
    alert(`O veiculo não pode se encontrar a 0 kmn/s`);
  }
  return velocit;
}
function showInfo(name, velocit) {
  alert(`Nome da nave:${name}\nVelocidade atual:${velocit}`);
}
