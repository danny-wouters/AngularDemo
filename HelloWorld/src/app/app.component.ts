import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';
  public name = 'World';
  public message = '';

  greetUser() {
    return 'Hello ' + this.name;
  }
}
