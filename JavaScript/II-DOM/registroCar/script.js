function addCar(){
    const fabricant = document.getElementById('marca').value
    const modelo = document.getElementById('modelo').value
    const placa = document.getElementById('placa').value

    // varivel do container
    const sectionId = document.getElementById('content-car')
    const li = document.createElement('li')
    li.id = `placa-${placa}`;
    li.innerText= `Modelo do carro:\n${modelo}\nFabricante:\n${fabricant}\nPlaca do carro:\n${placa}`
    const confirmar =confirm(`Deseja confirmar a excusão do ${li.innerText}`)
    if(confirmar){  sectionId.appendChild(li)
    }

    document.getElementById('marca').value=''
    document.getElementById('modelo').value=''
    document.getElementById('placa').value=''

}

function removerCar(){
    const reqUser = document.getElementById('reqUser').value
    const removeContent = document.getElementById(`placa-${reqUser}`)
    const sectionId= document.getElementById('content-car')
    const confirmar =confirm(`Deseja confirmar a excusão do ${removeContent.innerText}`)
    if(confirmar){ 
          sectionId.removeChild(removeContent)
        }else{
            alert('Operação cancelada')
        }
 
}