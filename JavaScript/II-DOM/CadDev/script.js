/*
## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para
     testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

// ListaDev
const ListaDev = []

// Mostrando o form.

// Var ambientes.
const showForm = document.getElementById('shown-btn')
const removeCard = document.getElementById('removeDev')

// Função pra cria o form e para cadastrar o dev
showForm.addEventListener('click', function register(){
    
    showForm.removeEventListener('click',register)
 
    const btnShow = document.getElementById('showForm')
    
    // Criando Form
   
    const form =document.createElement('form')
    form.id = 'element-form'
    form.addEventListener('submit',(ev)=>{
        ev.preventDefault()
    })
   
    btnShow.appendChild(form)

    // Criando campo Nome

    const labelName = document.createElement('label')
    labelName.for ='username'
    labelName.innerText = 'Digite seu nome aqui'

    const inputName = document.createElement('input')
    inputName.id = 'username'
    inputName.placeholder='Nome aqui'
    form.appendChild(labelName)
    form.appendChild(inputName)
    
    // Criando campo nome Tecnologia
   
    const labelTec = document.createElement('label')
    labelTec.for = 'nameTec'
    labelTec.innerText= 'Nome da tecnologia'
   
    const inputTec = document.createElement('input')
    inputTec.type = 'text'
    inputTec.placeholder ='Nome da tecnologia aqui'
    inputTec.id = 'nameTec'

    form.appendChild(labelTec)
    form.appendChild(inputTec)
    
    // Criando form tempo de experiencia 
   
    const labelTempoExp =document.createElement('label')
    labelTempoExp.for = 'tempoExp'
    labelTempoExp.innerText = 'Tempo de experiencia'
    
    form.appendChild(labelTempoExp)

    // Tempo experiencia 1
    const inputTime = document.createElement('input')
    inputTime.type = 'radio'
    inputTime.name='tempoExp'
    inputTime.value='Trainee'
    inputTime.id ='time1'

    const labelInput1 = document.createElement('label')
    labelInput1.for = 'time1'
    labelInput1.innerText = 'De 1 a 2 anos'

    form.appendChild(inputTime)
    form.appendChild(labelInput1)

    // Tempo de experiencia 2
    
    const inputTime2 = document.createElement('input')
    inputTime2.type=  'radio'
    inputTime2.name = 'tempoExp'
    inputTime2.value = 'Junior'
    inputTime2.id = 'time2'
    
    const labelInput2 = document.createElement('label')
    labelInput2.for = 'time2'
    labelInput2.innerText = 'Da 1 a 5 anos'

    form.appendChild(inputTime2)
    form.appendChild(labelInput2)

    // Tempo experiencia 3

    const inputTime3 = document.createElement('input')
    inputTime3.type = 'radio'
    inputTime3.name = 'tempoExp'
    inputTime3.value = 'Pleno'
    inputTime3.id = 'time3'

    const labelInput3 = document.createElement('label')
    labelInput3.for= 'time3'
    labelInput3.innerText ='de 6 a 9 anos'

    form.appendChild(inputTime3)
    form.appendChild(labelInput3)

    // Tempo de experienca 4

    const inputTime4 = document.createElement('input')
    inputTime4.type = 'radio'
    inputTime4.name= 'tempoExp'
    inputTime4.value='Senior'
    inputTime4.id= 'time4'

    const labelInput4 = document.createElement('label')
    labelInput4.for = 'time4'
    labelInput4.innerText = '10+ anos' 

    form.appendChild(inputTime4)
    form.appendChild(labelInput4)
       
 

    // Cancelando o cadastro

    const cancelBtn = document.createElement('button')
    cancelBtn.innerText='Cancelando o cadastro'
    
    form.appendChild(cancelBtn)
    cancelBtn.addEventListener('click',()=>{
        form.remove()
        alert('Cadastro Cancelado')
        showForm.addEventListener('click',register)
    })

    const butonAdd = document.createElement('button')
    butonAdd.id = 'btn-Add'
    butonAdd.innerText = 'Adicionar Dev'
    form.appendChild(butonAdd)   
    
    const addDev= document.getElementById('btn-Add')
   
    addDev.addEventListener('click',function(){
    const getName = document.getElementById('username').value
    const getTec = document.getElementById('nameTec').value
    const getExp = document.querySelector('input[name="tempoExp"]').value
     
    const dev = {getName,getTec,getExp}
    ListaDev.push(dev)
   
    // Criando Content Dev
    const conectSection = document.getElementById('showdev')
    const div = document.createElement('div')
    div.id = `dev-${dev.getName}`

    // Conexão da div com o container no html.
    conectSection.appendChild(div)
    
    // Criando elemento card
    // Name
    const pName = document.createElement('p')
    pName.innerText = `Nome = ${dev.getName}`
    
    div.appendChild(pName)

    // Stacks
    const pTec = document.createElement('p')
    pTec.innerHTML =`Stacks = ${dev.getTec}`

    div.appendChild(pTec)
    
    //Senioridade 
    const pNivel = document.createElement('p')
    pNivel.innerText =`Nivel = ${dev.getExp}`

    div.appendChild(pNivel)

    btnShow.removeChild(form)
    showForm.addEventListener('click',register)
        document.getElementById('username').value=''

  

})

})

removeCard.addEventListener('click',()=>{

    const removeDev = document.getElementById('valuefilter').value
    const getRemove = document.getElementById(`dev-${removeDev}`)
    getRemove.remove()
    console.log(getRemove,removeDev)

})

