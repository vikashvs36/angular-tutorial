import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../domain/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() selectedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
