import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {EmployeesService} from '../../employees.service';
import {EmployeeActions, LOAD_EMPLOYEES, LOAD_EMPLOYEES_SUCCESS} from '../actions/employee.actions';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';

@Injectable()
export class EmployeesEffects {

  constructor(private actions$: Actions,
              private employeeService: EmployeesService) {
  }

  // I use effects sush as middelware, here to load data from back-end
  // An effect intercept LOAD_EMPLOYEES action, and call back-end service
  // after collecting data it dispatch new action to tell reducer that loading
  // data is finished with success.
  @Effect()
  loadEmployees$: Observable<Action> = this.actions$
    .ofType(LOAD_EMPLOYEES)
    .switchMap(() => this.employeeService.loadAll())
    .map(employees => new EmployeeActions(LOAD_EMPLOYEES_SUCCESS, employees));
}
