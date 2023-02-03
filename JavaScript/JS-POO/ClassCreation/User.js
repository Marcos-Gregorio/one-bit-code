class User {

    constructor(fullname,email,password ,ActionLogin = false){
        this.fullname = fullname,
        this.email = email,
        this.password = password,
        this.ActionLogin = false

    }

    VerificationLogin(email,password) {

        if(this.email === email && this.password == password){
            console.log('Login Realizado com sucesso')
            this.ActionLogin = true
        }else{
            console.log('Login Incorreto')
        }
        
    }

}

const firsUser = new User('marcos','marcosgrego@hotmail.com','aaaa')
console.log(firsUser)

firsUser.VerificationLogin('marcosgrego@hotmail.com','aaaa')
console.log(firsUser)

