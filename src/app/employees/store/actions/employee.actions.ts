import {Action} from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const LOAD_EMPLOYEES_SUCCESS = 'LOAD_EMPLOYEES_SUCCESS';

export class EmployeeActions implements Action {

  constructor(public type: string, public payload?: any) {}


  // loadEmployeesSuccess(employees: any) {
  //   return new EmployeeActions(LOAD_EMPLOYEES_SUCCESS, employees);
  // }
}
