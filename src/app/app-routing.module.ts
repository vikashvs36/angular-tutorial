import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {CreateUserComponent} from './user/create-user/create-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'showUser/:id', component: UserDetailsComponent},
  { path: 'editUser/:id', component: UserEditComponent},
  { path: 'deleteUser/:id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
