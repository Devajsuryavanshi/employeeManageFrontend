import { Employee } from "../employee";

export class Skill {

    id!:number;
    skillName!:String;
    skillDescription!:String;
    private employee!:Employee;

    setEmployee(emp:Employee){
        this.employee = emp;
    }
}
