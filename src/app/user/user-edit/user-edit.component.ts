import {Component, OnInit} from '@angular/core';
import {User} from '../../../domain/user';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  selectedUser: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.forEach((params:ParamMap) => {
      let id = params.get('id');
      if(id) {this.editUser(this.findOne(+id))}
    })
  }

  editUser(user: User): void {
    this.selectedUser = user;
  }

  findOne(id: number): User {
    return this.userService.findOne(id);
  }

  updateUser(user: User): void {
    this.userService.editUser(user);
    this.router.navigate(['users']); // Redirect Url: '/users'
  }

}
