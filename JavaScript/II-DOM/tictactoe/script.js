const tableArray = ['','','','','','','','','']

function tableBoard(table){
  let display = document.getElementById('boardGame')
  table.forEach((element,index) => {
    let createDiv = document.createElement('div')
    createDiv.innerText = element
    createDiv.id = index
    createDiv.class = 'tableRegion'
    display.appendChild(display)

  });
}
tableBoard(tableArray)
console.log(tableArray.length)