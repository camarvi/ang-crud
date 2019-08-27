import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Crud';

  employees= [
    {name: 'Fazt', position: 'Manager'},
    {name: 'Isaac', position: 'Designer'},
    {name: 'Maria', position: 'Programer'}
  ]
}
