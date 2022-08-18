alert("Bem-Vindo!A seguir pediremos que informe alguns dados");
let nam = String(prompt("Digite seu nome:"));
let idade = parseInt(prompt("Digite sua idade:"));
let conf = confirm(`Você tem ${idade} anos`);
alert(`Nome:${nam}\n Idade:${idade}\n Confirmação: ${conf}`);
