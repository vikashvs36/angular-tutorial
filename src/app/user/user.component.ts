import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedUser: User = null;

  private userList: User[] = null;

  isCreate: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findAll()
  }

  findAll(): void {
    this.userService.findAll().subscribe((users: User[]) => { this.userList = users} );
  }

  onClick(user: User): void {
    this.selectedUser = user;
    this.isCreate = false;
  }

  deleteUser(user: User): void {
    if (user === this.selectedUser) {
      this.selectedUser = null;
    }
    this.userService.deleteUser(user);
  }

  newUserBtn(){
    this.selectedUser = null;
    this.isCreate = true;
  }

  closeCreateUser() {
    this.isCreate = false;
  }


}
