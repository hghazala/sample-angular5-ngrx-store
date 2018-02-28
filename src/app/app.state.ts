import {Employee} from './employees/store/model/employee';

//manage all app state
export interface AppState {
  employeeState: EmployeeState;
}

//employee state
export interface EmployeeState {
  employees: Employee[];
}
