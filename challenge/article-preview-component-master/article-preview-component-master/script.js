const actionShare = document.querySelector('.actionShare')
actionShare.addEventListener('click',function addModal() 
{
   actionShare.removeEventListener('click',addModal)
    const blockModal = document.querySelector('.contentShow')
    blockModal.removeAttribute('id')
    blockModal.innerHTML= `<p>F O L L O W</p><div>
    <a href="https://www.instagram.com/marcos_gregs/?hl=pt-br"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://github.com/marcos-gregs"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/marcos-gregorio-vieira/"><i class="fa-brands fa-linkedin"></i></a></div`

   
    actionShare.addEventListener('click',function close(){
    actionShare.addEventListener('click',addModal)
    const blockModal = document.querySelector('.contentShow')
    blockModal.id ='off'
})

})


