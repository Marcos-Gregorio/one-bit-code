function register(element){
    const username = element.children.username.value
    const password = element.children.passoword.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(`Usuário ${username} registrado com sucesso`)
    }else{
        alert('As senhas não conferem.')
    }
}