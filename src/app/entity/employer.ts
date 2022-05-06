export class Employer {

    id!:number;
    name!:String;
    email!:String;
    private password!:String;
    company!:String;
    designation!:String;

    setPassword(pass:String){
        this.password = pass;
    }

    constructor(name:String, email:String, password:String, company:String, designation:String){
        this.name = name;
        this.email = email;
        this.password = password;
        this.company = company;
        this.designation = designation;
    }
}
