const user ={
    nome:'John Doe',
    email:'doejohn@email.com',
    friends:[
        {
            name:'Mary',
            address:{
                street:"Some Street",
                number:45
            }
        }], 
        age: 42,
        phone: {
          countryCode: "+55",
          ddd: "22",
          number: "998765432"
        }

}
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)