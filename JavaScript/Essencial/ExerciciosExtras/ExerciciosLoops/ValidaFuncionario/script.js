let nameFuncionario = String(prompt("Digite seu nome:"));
let idadeFuncionario = parseInt(prompt("Digite sua idade:"));
let salarioFuncioario = parseFloat(prompt("Digite seu salario:"));
let sexoFunci = String(
  prompt("Escolha o seu sexo:\n[f]-Femino\n[m]-Masculino")
);
let estadoCivil = String(
  prompt(
    "Escolha seu estado civil abaixo\n[s]-solteiro\n[c]casado\n[v]- viuvo\n[d]- divorciado:"
  )
);
validationFuncionario(
  nameFuncionario,
  idadeFuncionario,
  salarioFuncioario,
  sexoFunci,
  estadoCivil
);

function validationFuncionario(name, idade, salario, sexo, estadoCivil) {
  while (name.length < 3) {
    alert("Nome invalido,para ser valido necessita de no minimo 3 caracteres");
    name = String(prompt("Digite novamente seu nome:"));
  }
  while (0 > idade || idade > 150) {
    alert("Idade entre 1 a 150");
    idade = parseInt(prompt("Digite sua idade:"));
  }
  while (salario <= 0) {
    alert("Salario não pode ser menor que zero");
    salario = parseFloat(prompt("Digite seu salario:"));
  }
  while (sexo !== "f" || sexo !== !"m" || sexo !== "F" || sexo !== "M") {
    alert("Valido somente as inicias");
    sexo = String(prompt("Escolha o seu sexo:\n[f]-Femino\n[m]-Masculino"));
  }
  while (
    estadoCivil !== "s" ||
    estadoCivil !== "S" ||
    estadoCivil !== "c" ||
    estadoCivil !== "C" ||
    estadoCivil !== "v" ||
    estadoCivil !== "V" ||
    estadoCivil !== "d" ||
    estadoCivil !== "D"
  ) {
    alert("Valido somente as inicias");
    estadoCivil = String(
      prompt(
        "Escolha seu estado civil abaixo\n[s]-solteiro\n[c]casado\n[v]- viuvo\n[d]- divorciado:"
      )
    );
  }
  alert(
    `Nome funcionario: ${name}\nIdade: ${idade}\nSalario: ${salario}\nSexo: ${sexo}\nEstado civel:${estadoCivil}`
  );
}
