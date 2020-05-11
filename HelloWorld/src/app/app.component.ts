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
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  public highlightColor = 'orange';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  public displayName = false;
  public color = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];

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
