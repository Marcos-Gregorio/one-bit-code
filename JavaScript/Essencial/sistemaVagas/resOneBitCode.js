const vagas = []

// 1°requisto:Listar Vagas. 

const listarVagas=()=>{
    if (vagas.length===0){
        alert('Lista vazia.')
    }else{
        const vagasEmTexto = vagas.reduce((textoFinal,vaga,indice)=>{
            textoFinal += indice + '.'
            textoFinal += vaga.nome
            textoFinal += `(${vaga.candidatos.length}° candidatos.\n)`
            return textoFinal
        },"")
        alert(vagasEmTexto)
    }
 
}

// 2°Requisito:Adicionar nova vaga.

const addVaga=()=>{
    const nome = prompt('Digite o nome da vaga.')
    const descricao = prompt("Informe a descrição da vaga")
    const dt_limite = prompt('Informe a data limite para inscrição:\ndd/mm/aaaa')
    const confirmacao = confirm(`Deseja criar uma nova vaga com essas informações.\nNome:${nome}\nDescrição:${descricao}\nData limite:${dt_limite}`)
    if(confirmacao){
        const novaVaga = {nome,descricao,dt_limite,candidatos:[]}
        vagas.push(novaVaga)
        alert("Vaga Criada")
    }else{
        alert('Operação cancelada.')
    }
}

// 3°Requisitos:Exibir Vagas.

const exibirVagas = () => {
    const indice = parseInt(prompt('Informe o indice da vaga que deseja consultar:'))
    const exibirVaga = vagas[indice]

    const candidatosEmTexto = exibirVaga.candidatos.reduce((textoFinal, candidato)=> `${textoFinal}\n${candidato}`)

    alert(`
            Vagas n°${indice}\n
            Nome:${vagas.nome}\n
            Descrição:${vagas.descricao}\n
            Quantidade de candidatos:${vagas.candidatos.length}\n
            Candidatos inscritos:${candidatosEmTexto}        
    `)
}

// 4°Requisitos:Inscrever candidato.

const inscreverVaga =() =>{
    const candidato = prompt('Informe o nome do(a) candidato(a):')
    const indice = prompt('Digite o valor do indice.')
    const vaga = vagas[indice]

    const confirmacao = confirm( `Deseja confirma sua inscrição ${candidato} na vaga de:${vaga.nome}`)
    
    if (confirmacao){
        vaga.candidatos.push(candidato)
        alert('Inscrição realizada.')
    }else{
        alert('Inscrição cancelada')
    }
}

// 5°Requisito:Excluir Vaga

const excluirVaga= ()=>{
    const indice = prompt('Digite o  indice da vaga.')
    const vaga = vagas[indice]

    const confirmacao = confirm(`Tem certeza que deseja excluir a vaga:\n${vaga.nome}`)
    if (confirmacao){
        vagas.splice(indice,1)
        alert('Vaga Excluida')
    }else{
        alert('Exclusão cancelada.')
    }
}

// Painel Menu


const exibirMenu= ()=>{
    const opcao = prompt(`Cadastro de Vagas de Empregos
                        \n\nEscolha uma das opções abaixo:
                        \n1. Listar Vagags.
                        \n2. Criar uma nova vaga
                        \n3. Vizualizar uma vaga
                        \n4.Inscrever um(a) candidato(a)
                        \n5. Excluir uma vaga
                        \n6. Sair`)
    return opcao
}

// Função de execução

const executarScript = ()=>{
    let opcao = exibirMenu()
    while(opcao !=6){
        switch(opcao){
            case "1":
                listarVagas()
                break
              case "2":
                addVaga()
                break
              case "3":
                exibirVaga()
                break
              case "4":
                inscreverCandidato()
                break
              case "5":
                excluirVaga()
              case "6":
                alert("Saindo...")
                break
              default:
                alert("Opção inválida.")
        }
    }
}

// Executando Script......

executarScript()

