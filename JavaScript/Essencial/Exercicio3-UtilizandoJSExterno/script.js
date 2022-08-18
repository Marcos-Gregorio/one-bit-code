alert("Diferença de idade entre duas pessoas");
let oldName = String(prompt("Digite o Nome da pessoa mais velha:"));
let oldAge = parseInt(prompt("Digite a idade da pessoa mais velha:"));
let newName = String(prompt("Digite o Nome da pessoa mais nova:"));
let newAge = parseInt(prompt("Digite a idade da pessoa mais nova:"));
let calcAge = oldAge - newAge;
alert(
  `Name: ${oldName} | Age:${oldAge} \nName: ${newName}| Age: ${newAge}\nDifference: ${calcAge}`
);
