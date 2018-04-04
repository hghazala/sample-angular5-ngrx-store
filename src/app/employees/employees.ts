import {Component, OnInit} from '@angular/core';
import {Employee} from './store/model/employee';
import {Store} from '@ngrx/store';
import {EmployeeState} from '../app.state';
import * as employeesReducer from './store/reducers/employees.reducer';
import {ADD_EMPLOYEE, EmployeeActions, LOAD_EMPLOYEES} from './store/actions/employee.actions';
import {Observable} from 'rxjs/Observable';
import {toPayload} from '@ngrx/effects';

@Component({
  selector: 'employees-details',
  templateUrl: './employees.html',
  styleUrls: ['./employees.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employee[]>;
  newEmployee = new Employee();

  constructor(private store: Store<EmployeeState>) {
  }

  public ngOnInit() {
    this.loadEmployees();
    this.employees = this.store.select(employeesReducer.getEmployees);
  }

  loadEmployees() {
    this.store.dispatch(new EmployeeActions(LOAD_EMPLOYEES));
  }

  public addEmployee() {
    const addEmployeeAction = new EmployeeActions(ADD_EMPLOYEE, this.newEmployee);
    this.store.dispatch(addEmployeeAction);
  }
}
