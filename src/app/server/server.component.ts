import { Component } from "@angular/core";


@Component({
    selector : 'server',
    templateUrl : './server.component.html',
    styles : [ ' h1{color:red;text-align:center;} ']

})
export class ServerComponent{
    userName:string = ' ';
    employeeName:string= " ";
    employees = ['Mehreen','Suliman'];
    displayUser(event: Event){
        this.userName = (<HTMLInputElement>event.target).value;
    }
    createArray(){
            this.employees.push(this.employeeName);
            this.employeeName =' ';
    }
} 