import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  public demoName = 'Demo Test';
  public message = 'Welcome to code demo';
  public person = {
    firstName: 'John',
    lastName: 'Doe'
  };
  public demoDate = new Date();

  public greeting = '';
  public twowayBind = 'Mars';
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

  fireEvent() {
    this.childEvent.emit('Hey Demo');
  }

  constructor() { }

  ngOnInit() {
  }

}
