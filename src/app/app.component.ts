import { Component } from '@angular/core';
import {User} from "../domain/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Simple variable
  title = 'angular-tutorial';

  // Array of String type
  // userList: string[] = ['Vikash', 'Deepanker', 'Manish', 'Satish'];

  // Object type
  user: User = { id:0, username: 'Admin', password: 'Admin'};

  // Array of Object type
  userList: User[] = [
    {id:1, username:'Vikash', password:'Vikash'},
    {id:2, username: 'Deepanker', password: 'Deepanker'},
    {id:3, username: 'Manish', password: 'Manish'},
    {id:4, username: 'Satish', password: 'Satish'}
  ];

  selectedUser: User = null;

  onClick(user: User): void {
    this.selectedUser = user;
  }


}
