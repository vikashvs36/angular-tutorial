import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {UserService} from "../services/user.service";
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private userList: User[] = null;

  constructor(private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.findAll();

    this.router.paramMap.forEach((paramsMap: ParamMap) => {
      let id = paramsMap.get('id');
      if (id) {
        this.deleteUser(this.findOne(+id));
      }
    });
  }

  findAll(): void {
    this.userService.findAll().subscribe((users: User[]) => { this.userList = users} );
  }

  findOne(id: number): User {
    return this.userService.findOne(id);
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }

}
