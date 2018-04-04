import {ADD_EMPLOYEE, EmployeeActions, LOAD_EMPLOYEES_SUCCESS} from '../actions/employee.actions';
import {EmployeeState} from '../../../app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const initialState: EmployeeState = {
  employees: []
};

export function employeesReducer(state = initialState, action: EmployeeActions): EmployeeState {
  switch (action.type) {

    case ADD_EMPLOYEE:
      return {employees: state.employees.concat(action.payload)}

    case LOAD_EMPLOYEES_SUCCESS:
      return {employees: action.payload};

    default:
      return state;
  }
}

// Create the employee state
export const getEmployeesState = createFeatureSelector('employeeState');

// Project employeeState into variable employees of state
export const getEmployees = createSelector(
  getEmployeesState,
  (state: EmployeeState) => state.employees
);
