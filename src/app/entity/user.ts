export class User {

    id!:number;
    email!:String;
    password!:String;
    role!:String;

    constructor(email:String, password:String, role:String){
        this.email = email;
        this.password = password;
        this.role = role;
    }

    getEmail():String{
        return this.email;
    }

    getPassword():String{
        return this.password;
    }

}
