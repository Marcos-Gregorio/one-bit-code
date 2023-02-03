const ObjTest = {
    FirstName:'John',
    LastName:'Doe',
    birthday:'1997-05-25T03:00:00.000Z'
}
const ListPilot=[
    {
    FirstName:'John',
    LastName:'Doe',
    birthday:'1997-05-25T03:00:00.000Z'
    },
    {
    FirstName:'Hal',
    LastName:'Jordan',
    birthday:'1995-05-02T03:00:00.000Z'
    },
    {
    FirstName:'Carol',
    LastName:'Danvers',
    birthday:'1968-09-17T03:00:00.000Z'
    },
    {
    FirstName:'Poe',
    LastName:'Dameron',
    birthday:'1979-03-09T03:00:00.000Z'
    },
    {
    FirstName:'Marcos',
    LastName:'Gregorio',
    birthday:'1997-03-28T03:00:00.000Z'
    }

]
ListPilot.forEach((element,index) =>{
    console.log(`${index +1}°Cadatro:`)
    flyingLicense(element)
})

function flyingLicense(cadPilot){
    let firstName = `${cadPilot.FirstName[0].toLowerCase()}`
   let lastName = `${cadPilot.LastName.toUpperCase()}`
    while(lastName.length <= 5){
        lastName += '9'
    }
    let year = `${cadPilot.birthday.slice(2,4)}${cadPilot.birthday.slice(5,7)}${cadPilot.birthday.slice(3,4)}`
  
    
    cadPilot.flyingLicense = `${lastName.slice(0,5)}-${year}.${firstName}`
    console.log(`First Name:\n${cadPilot.FirstName}\nLastName:\n${cadPilot.LastName}\nBirthDay:\n${cadPilot.birthday}\nLicense:\n${cadPilot.flyingLicense}
    `)
   
}
flyingLicense(ObjTest)
