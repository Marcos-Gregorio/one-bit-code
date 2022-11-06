// Criando função para os inputs

function createLabel(text,htmlFor){
    const label = document.createElement('label')
    label.for = htmlFor
    label.innerText = text
    return label
}

function creatInput(id,value,name,type='text',placeholder =''){
    const inputs = document.createElement('input')
    inputs.id = id
    inputs.value = value
    inputs.name = name
    inputs.type = type
    inputs.placeholder = placeholder

    return inputs
}

// Var ambiente

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

// Eventos Btns

addTechBtn.addEventListener('click',function(ev){
    const stackINputs = document.getElementById('stackInputs')
    
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++ 
    newRow.id = `inputRow-${rowIndex}`
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('nome',`techName-${rowIndex}`)
    const techNameInput = creatInput(`techName-${rowIndex}`,null,'techName')

    const expLabel = createLabel('Experiencia:')
    
    const id1 = `expRadio-${rowIndex}.1`
    const expRadio1 = creatInput(id1,'0-2 anos',`techExp-${rowIndex}`,'radio')
    const expLabel1 = createLabel('0-2 anos', id1)

    const id2 =`expRadio${rowIndex}.2`
    const expRadio2 =creatInput(id2,'3-4 anos',`techExp-${rowIndex}`,'radio')
    const expLabel2 = createLabel('3-4 anos', id2)

    const id3 =`expRadio${rowIndex}.3`
    const expRadio3 =creatInput(id3,'5 + anos',`techExp-${rowIndex}`,'radio')
    const expLabel3 = createLabel('5 + anos', id3)
    
    const removeBtn = document.createElement('button')
    removeBtn.type = 'button'
    removeBtn.innerText = 'Remover'

    removeBtn.addEventListener('click',function(){
        stackINputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeBtn)
    stackINputs.appendChild(newRow)
     

    
})

form.addEventListener('submit',function(ev){
    ev.preventDefault()
    const fulllnameInput = document.getElementById('fullname')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []

    inputRows.forEach(function(row){
        // rowId input [name='techname]
        const techName = document.querySelector(`#${row.id} input[name='techName']`).value
        const techExp = document.querySelector(`#${row.id} input[type="radio"]:checked`).value
        technologies.push({name: techName,exp:techExp})
    })

    const newDev = {fullname:fulllnameInput.value,technologies:technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fulllnameInput.value=''
    inputRows.forEach(function(row){
        row.remove()
    })
})
console.log(developers)