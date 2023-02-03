document.getElementById('sessionBtn').addEventListener('click',function(){
    const input = document.getElementById('session')
    sessionStorage.setItem('info',input.value)
})
document.getElementById('readSession').addEventListener('click',function(){
    const info = sessionStorage.getItem('info')
    console.log('Arquivo Session Storage')
    console.log(info)
})

document.getElementById('localBtn').addEventListener('click',function(){
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value=''
})
document.getElementById('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('text')
    console.log('Local Storage')
    console.log(info)
})
document.getElementById('cookieBtn').addEventListener('click',function(){
    const input = document.getElementById('cookie')
    const nameCo = input.value
    // Criando um cookie
    // cookieName=value;expires=UTCStrongDate;path=/
    const cookie = 'info=' + input.value + ';'
    // 
    const expiration = 'expires='+ new Date(2022,9, 9) + ';'
    const path = 'path/=;'
    document.cookie = cookie + expiration + path
})