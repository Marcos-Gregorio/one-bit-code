let navName = String(prompt(`Digite o nome da sua nave:`));
let velocit = parseFloat(prompt(`Digite a velocidade da sua nave`));
let menuBoard = parseInt(
  prompt(
    "Escolha uma opção:\n1.Acelerar\n2.Descalerar\n3.Menu de bordo\n4.Sair"
  )
);

menuOptions(menuBoard, navName, velocit);

function menuOptions(chooseOptions, name, velocity) {
  while (chooseOptions !== 4) {
    switch (chooseOptions) {
      case 1:
        velocity = acelerar(velocity);
        break;
      case 2:
        velocity = desacelerar(velocity);
        break;
      case 3:
        velocity = showInfo(name, velocity);
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

function acelerar(velocity) {
  let contVelo = velocity + 5;
  return contVelo;
}
function desacelerar(velocity) {
  let contVelo = velocity - 5;
  if (contVelo < 0) {
    contVelo = 0;
    alert(`O veiculo não pode se encontrar a menos que  0 kmn/s`);
  }
  return contVelo;
}
function showInfo(name, velocity) {
  alert(`Nome da nave:${name}\nVelocidade atual:${velocity}`);
}
