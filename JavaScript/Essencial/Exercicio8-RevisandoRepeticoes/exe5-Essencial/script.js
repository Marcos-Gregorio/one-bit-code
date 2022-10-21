
let travelList = []
let contCity = 0

let nameUser = String(prompt('Digite o seu nome:'))
let travelOption = Boolean(confirm('O senhor ja visitou algumas cidada,se sim aperte no "Ok",se não em "cancel."'))
let listCity = String(prompt('Digite a cidade visitada'))
travelList.unshift(listCity)
contCity+=1

while(travelOption == true){
    travelOption= Boolean(confirm(`${nameUser} caso o senhor tenha visitado mais cidades,repetir o processo anterior.`))
    if(travelOption ==false){
        break
    }
    listCity = String(prompt('Digite o nome da outra cidade visitada'))
    travelList.unshift(listCity)
    contCity += 1
}

alert(`${nameUser},realizou ${contCity} visitas,nessas seguintes cidades:\n ${travelList}`)
// function actionScript(name,optionTravel,city,listCity){
//     city = String(prompt('Digite a cidade visitada'))
//     listCity.unshift(city)
//     while (optionTravel = true){
//         cityVar
//         listCity.unshift(cityVar)

//     }
//     return
// }
