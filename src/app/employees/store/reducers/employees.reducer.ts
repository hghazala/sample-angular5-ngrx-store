import {ADD_EMPLOYEE, EmployeeActions} from '../actions/employee.actions';
import {EmployeeState} from '../../../app.state';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const initialState: EmployeeState = {
  employees: []
};

export function employeesReducer(state = initialState, action: EmployeeActions): EmployeeState {

  switch (action.type) {
    case ADD_EMPLOYEE:
      initialState.employees.push(action.payload);
      return initialState;

    default:
      return initialState;
  }
}

export const getEmployeesState = createFeatureSelector<EmployeeState>('employeeState');

export const getEmployees = createSelector(getEmployeesState, (state: EmployeeState) => state.employees);

