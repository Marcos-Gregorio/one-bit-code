/**
 * fim de representar empregados em uma firma, crie uma classe chamada Empregado que
inclui as três informações a seguir como atributos:
• um primeiro nome,
• um sobrenome, e
• um salário mensal.
Sua classe deve ter um construtor que inicializa os três atributos. Forneça um método set e get para cada
atributo. Se o salário mensal não for positivo, configure-o como 0.0. Escreva um aplicativo de teste que
demonstra as capacidades da classe. Crie duas instâncias da classe e exiba o salário anual de cada instância.
Então dê a cada empregado um aumento de 10% e exiba novamente o salário anual de cada empregado
 */
const listFunc = []
let chooseOptions 
do{
    chooseOptions = parseInt(prompt(`Bem vindo ao registro de funcionario.\nFuncionarios registrados:${listFunc.length}\nLista de operação:\n1.Novo Funcionario\n2.Lista de funcionarios\n3.Sair`))
    switch(chooseOptions){
        case 1:
            let nameFunc = String(prompt('Digite o 1 °nome do funcionario.'))
            let secondName= String(prompt('Digite o sobrenome.'))
            let salario = parseFloat(prompt('Digite o salario do funcionario'))
            createObject(nameFunc,secondName,salario,listFunc)
            break;
        case 2:
            for(let i = 0; i < listFunc.length;i++){
                alert(`${i +1 }° funcionario:\nNome:${listFunc[i].name}\nSobrenome:${listFunc[i].sobrenome}Salário:${listFunc[i].salario}`)
            }
                break;
        case 3:
            break;
        default:
            alert('Opção invalida')
            break;
    }
    
}while(chooseOptions !=3){}


function createObject(name,sobrenome,salario,listaFunc){
    if(salario<0){
        salario= 0
    }
    const funcionario={
        name,sobrenome,salario
    }
    const aceptRequire = confirm('Deseja registrar esse funcionario?')
    if(aceptRequire){
        alert('Funcionario salvo!')
        return listaFunc.push(funcionario)
    }else{
        alert('Operação cancelada')
    }
}