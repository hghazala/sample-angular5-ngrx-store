import {Employee} from '../model/employee';
import {Action} from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export class EmployeeActions implements Action {

  readonly type = ADD_EMPLOYEE;

  constructor(public payload: Employee) {}
}
