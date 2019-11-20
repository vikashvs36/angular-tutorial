import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../domain/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  createUser(user: User): void {
    this.userService.createUser(user);
    this.router.navigate(['users']);
  }

}
