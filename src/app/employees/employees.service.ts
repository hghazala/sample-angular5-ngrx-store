import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Employee} from './store/model/employee';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  // Call my node-js backend
  loadAll(): Observable<any> {
    return this.http
      .get('http://localhost:3000/employees')
      // The pipe can be used here or in the effect.
      .pipe(
        catchError(this.handleError)
      );
  }

  addEmployee(employee: Employee) {
    return this.http
      .post('http://localhost:3000/employees/employee', employee)
      .pipe(
        catchError(this.handleError)
      );

  }

  private handleError(error: HttpErrorResponse) {
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
