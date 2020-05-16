import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
   declarations: [
      AppComponent,
      DemoComponent,
      EmployeeDetailComponent,
      EmployeeListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule
   ],
   providers: [
      EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
