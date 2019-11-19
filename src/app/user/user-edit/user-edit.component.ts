import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../domain/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input() selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
