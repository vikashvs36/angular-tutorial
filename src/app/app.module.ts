import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginUserComponent } from './user/login-user/login-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserComponent,
    UserEditComponent,
    CreateUserComponent,
    DashboardComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
