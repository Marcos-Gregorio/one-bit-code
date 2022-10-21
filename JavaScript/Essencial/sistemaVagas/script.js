// Sistema de vagas de Emprego
/* Requisitos:


- Listar Vagas.

    A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candi
    -datos inscritos de todas as vagas.
    Feito.

- Criar Vagas.

    A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e u
    -ma data limite, e também deve pedir que o usuário confirme as informações antes
    de salvá-las.

- Vizualizar uma vaga.

   A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as infor
   mações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nom
   e dos candidatos.

- Inscrever um candidato em uma vaga.

    A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índ
    -ice da vaga e então uma confirmação exibindo as informações da vaga antes de sal
    -var o candidato na vaga.
- Sair
    
*/
console.log("Bem vindo o sistema de cadatro de vagas")

let listaVagas =[]

let menuOptions


while(menuOptions !== 6){
    menuOptions = parseInt(prompt('Bem vindo o sistema de cadatro de vagas\nMenu de tarefas:\n1.Listar Vagas\n2.Criar Vagas\n3.Vizualizar uma vaga.\n4.Inscrever um candidato em uma vaga\n5.excluir'))
        switch(menuOptions){

        //    Listando Vagas.
            case 1: 
                const showVagas= (lista)=>{
                    if(lista.length===0){
                        alert('Sem vagas Cadastradas')
                    }else{
                        const listarMenu = listaVagas.map(function(listVaga,indice){  
                            alert(`indice:${indice}\nnome:${listVaga.nome}\nInscritos:${listVaga.canditatos.length}`)
                            console.log(`indice:${indice}\nnome:${listVaga.nome}\nInscritos:${listVaga.canditatos.length }`)
                        return indice
                        })
                        return listarMenu
                    }
                
                }
                showVagas(listaVagas)
            break;

        //  Criando Vaga
            case 2:     
                const createVaga= (listVagas)=>{ 
                    const tabelaVaga = { }
                        tabelaVaga.nome = String(prompt("Digite o nome da vaga:"))
                        tabelaVaga.descricao = String(prompt('Digite a descrição a vaga.'))
                        tabelaVaga.dt_limite = String(prompt('Digte a data de vencimento da vaga.'))
                        tabelaVaga.canditatos =[]
                    const aceptQuets =confirm('Deseja confirma o salvamento da vaga.')
                        if(aceptQuets===true){
                            return listVagas.push(tabelaVaga)
                        }else{
                            alert('Operação cancelada.')

                        }
                    return tabelaVaga
                }
                createVaga(listaVagas)
            break;

        // Filtrando Vagas
            case 3:            
            const filterVag = (listvag) => {      
                let indice =parseInt(prompt('Digite o indice da vaga'))  
                    if (indice <= listvag.length){
                        let table= [listvag[indice-1]]
                        const filtervaga = table.filter(function(elemento){
                            alert(`Nome: ${elemento.nome}\nDescrição:${elemento.descricao}\nData Limite:${elemento.dt_limite}\nQuantida de Candidatos:${elemento.canditatos.length} Candidato:${elemento.canditatos}`)
                        })
                        filtervaga( )
                        return table
                    }else{
                        alert('Invalido')
                    }
                
            }
            filterVag(listaVagas)
            break;
        
        // Inscrevendo candidato
            case 4:
                const inscricao = (Listvaga) =>{
                    let indice= parseInt(prompt('Digite o numero do indice da vaga'))
                    if(indice>listaVagas.length){
                        alert('Indice inválido')
                    }else{
                        let nomeCand = toString(prompt('Digite seu nome para candidatura:'))
                        let confirmar = confirm('Se deseja continuar com a inscrição?')
                        if(confirmar){
                            alert('Inscrição concluida')
                           return Listvaga[indice-1].canditatos.push(nomeCand)
                        }else{
                            alert('Operação cancelada')
                        }
                        return confirmar
                     
                    }
                  
                    
                }
                inscricao(listaVagas)
            break;
            case 5:
                const excluirVaga = (lista) =>{
                    let indeice = parseInt(prompt('Digite o indice da vaga que deseja excluir.'))
                    if(indeice<= lista.length){
                       let confirma =confirm(`Deseja realmente exluir a seguinte vaga:\nNome:${lista[indeice].nome}\nDescrição:${lista[indeice].descricao}\nData Limite:${lista[indeice].dt_limite}\nQuantidades de inscritos:${lista[indeice].canditatos.length}`)
                        if(confirma){
                                alert('Exclução concluida')
                                return lista.splice(indeice,1)
                        }else{
                            alert('Exclução cancelada')
                        }
                        return confirma   
                    }

                }
                excluirVaga(listaVagas)
                break;

    }
}
 
