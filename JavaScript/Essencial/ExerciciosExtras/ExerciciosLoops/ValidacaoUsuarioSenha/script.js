let userName = String(prompt("Digite o nome do usario"));
let passwordUser = String(prompt("Digite a sua senha"));
validation(userName, passwordUser);

function validation(name, password) {
  while (name == password) {
    alert("Usario e senha iguais,tente novamente");
    name = String(prompt("Digite o nome do usario"));
    password = String(prompt("Digite a senha"));
  }
  alert(`Cadastro finalizado\nUsuario: ${name} Senha:${password}`);
}
