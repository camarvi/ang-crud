import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';

  employees= [
    {name: 'Fazt', position: 'Manager', email: 'fazt@email.com'},
    {name: 'Isaac', position: 'Designer', email: 'isaac@email.com'},
    {name: 'Maria', position: 'Programer', email: 'maria@email.com'}
  ]

  model : any = {};
  model2:any = {};
  myValue: any ;
  msg : string= "";
  hideUpdate: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = "Dato Insertado";

  }

  deleteEmployee(i): void {
   if (confirm("Borrar definitivamente")) {
     this.employees.splice(i,1);
     this.msg= ' Dato Eliminado ';
   }
  }

  editEmployee(i): void {
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
    this.hideUpdate = false;
    
  }

  updateEmployee(): void {
   let i = this.myValue;
   for (let j=0; j < this.employees.length; j++) {
     if (i == j) {
       this.employees[i] = this.model2;
       this.model2 = {};
       this.msg = 'Registro actualizado';
       this.hideUpdate = true;
     }
   }

  }

  closeAlert(): void {
    this.msg = "";
  }

}
