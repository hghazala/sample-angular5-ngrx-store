import {employeesReducer} from './employees/store/reducers/employees.reducer';
import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';

export const reducersManager: ActionReducerMap<AppState> = {
  employeeState: employeesReducer
};
