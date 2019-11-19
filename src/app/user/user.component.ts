import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../domain/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  selectedUser: User = null;

  @Input() userList: User[];

  constructor() { }

  ngOnInit() {
  }

  onClick(user: User): void {
    this.selectedUser = user;
  }



}
