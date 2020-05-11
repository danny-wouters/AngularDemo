import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public name = 'World';
  public greeting = '';
  public myId = 'testId';
  public isDisabled = true;
  public successClass = 'text-success';
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

  onClick(event) {
    console.log(event.type);
    this.greeting = 'Welcome to Demo app';
  }

  logMessage(value) {
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
