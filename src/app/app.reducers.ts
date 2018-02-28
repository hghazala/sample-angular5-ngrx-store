import {employeesReducer} from './employees/store/reducers/employees.reducer';
import {AppState} from './app.state';
import {ActionReducerMap} from '@ngrx/store';

export const reducers: ActionReducerMap<AppState> = {
  employeeState: employeesReducer
};
