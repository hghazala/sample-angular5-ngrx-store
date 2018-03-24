import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {reducersManager} from './app.reducers';
import {EffectsModule} from '@ngrx/effects';
import {EmployeesEffects} from './employees/store/effects/employees.effects';
import {EmployeesService} from './employees/employees.service';
import {HttpClientModule} from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducersManager),
    StoreDevtoolsModule.instrument({
      maxAge: 30
    }),
    EffectsModule.forRoot([
      EmployeesEffects
    ])
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
