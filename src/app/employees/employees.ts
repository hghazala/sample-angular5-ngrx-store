import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Employee} from './store/model/employee';
import {Store} from '@ngrx/store';
import {EmployeeState} from '../app.state';
import * as employeesReducer from './store/reducers/employees.reducer';
import {EmployeeActions} from './store/actions/employee.actions';

@Component({
  selector: 'employees',
  templateUrl: './employees.html',
  styleUrls: ['./employees.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;
  newEmployee = new Employee();

  constructor(private store: Store<EmployeeState>) {}

  public ngOnInit() {
    this.employees = this.store.select(employeesReducer.getEmployees);
  }

  public addEmployee() {
    this.store.dispatch(
     new EmployeeActions(new Employee(this.newEmployee.name, this.newEmployee.age))
    );
  }
}
