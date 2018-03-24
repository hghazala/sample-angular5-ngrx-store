import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Employee} from './store/model/employee';

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) {
  }

  //Call my node-js backend
  loadAll(): Observable<any> {
    return this.http
      .get('http://localhost:3000/employees')
      .map(res => res);
  }
}
