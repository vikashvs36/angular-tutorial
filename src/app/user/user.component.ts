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

  // @Input() userList: User[];
  private userList: User[] = null;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findAll()
  }

  findAll(): void {
    this.userList = this.userService.findAll();
  }

  onClick(user: User): void {
    this.selectedUser = user;
  }



}
