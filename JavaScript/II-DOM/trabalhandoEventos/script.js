const evenList = document.getElementById('register-buton')
const removeEvent = document.getElementById('remove-event')
evenList.addEventListener('click',register)
function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(`Usuário:${username} registrado!`)
    }else{
        alert('Senhas incompativeis.')
    }

}

removeEvent.addEventListener('click',(ev)=>{
    evenList.removeEventListener('click',register)
    alert('Event Removido')
})

evenList.addEventListener('mouseover',(ev)=>{
    console.log(ev)
})