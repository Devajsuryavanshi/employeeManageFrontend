import { Certificate } from "./certificate/certificate";
import { Skill } from "./skill/skill";

export class Employee {

    id!: number;
    name!: String;
    email!: String;
    password!: String;
    yearsOfExperience!: number;
    bio!:String;

    skills!:Skill[];

    certificates!:Certificate[];

    constructor(name:String, email:String, password:String, 
        yearsOfExperience:number, bio:String, id?:number){
            this.name = name;
            this.email = email;
            this.password = password;
            this.bio = bio;
            this.yearsOfExperience = yearsOfExperience
            if(id){
                this.id = id;
            }
    }

   setPassword(pass:String):void{
        this.password = this.password;
    }
    public getPassword():String{
        return this.password;
    }
    setId(id:number){
        this.id = id;
    }

}
