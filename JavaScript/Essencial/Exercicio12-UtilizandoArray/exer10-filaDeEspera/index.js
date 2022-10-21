const pacientes = ['1. Marcos\n','2. Lucas\n','3. Luisa']
alert(`Lista de pacientes atuais:\n${pacientes}`)
let chooseOptions = parseInt(prompt('Digite um numero para realizar as operações abaixos.\n1.Novo paciente\n2.Consultar paciente\n3.Sair'))

const consult = []
let userPaciente 
while(chooseOptions !==3){
    switch(chooseOptions){
        case 1:
            addPacient(userPaciente,pacientes)
            chooseOptions=parseInt(prompt('Digite um numero para realizar as operações abaixos.\n1.Novo paciente\n2.Consultar paciente\n3.Sair'))          
            break;
        case 2:
            removePacient(pacientes,consult)
            chooseOptions=parseInt(prompt('Digite um numero para realizar as operações abaixos.\n1.Novo paciente\n2.Consultar paciente\n3.Sair'))          
            break;
        case 3:
            alert('Finalizando a operação')
            break;
        default:
            chooseOptions=parseInt(prompt('Digite um numero para realizar as operações abaixos.\n1.Novo paciente\n2.Consultar paciente\n3.Sair'))    
            alert('Opção Invalida')
            break;

    }
}
alert(`Lista de pacientes:\n${pacientes}\nLista de consulta:\n${consult}`)
function addPacient(pacient,listpaciente){
    pacient=String(prompt('Digite o nome do paciente'))
    listpaciente.push(`${(listpaciente.length)+1}. ${pacient}`)
    alert(`O paciente foi ${pacient},Registrado com Sucesso!!`)
    return
}

function removePacient(listPaciente,listConsult){
    let addConsult = listPaciente.shift()
    listConsult.push(`${addConsult}`)
    alert(`Consuta Relizada\nPaciente: ${addConsult}`)
    return
}



