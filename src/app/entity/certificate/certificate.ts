import { Employee } from "../employee";

export class Certificate {

    id!:number;
    certificateName!:String;
    certificateNumber!:String;
    authority!:String;
    certificateDescription!:String;
    achiever!:Employee;

    setAchiever(emp:Employee){
        this.achiever = emp;
    }
}
