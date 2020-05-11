import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';
  public name = 'World';
  public greeting = '';
  public myId = "testId";
  public isDisabled = true;

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event.type);
    this.greeting = 'Welcome to Demo app';
  }

  logMessage(value) {
    console.log(value);
  }
}
