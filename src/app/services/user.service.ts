import { Injectable } from '@angular/core';
import {User} from '../../domain/user';
import {Observable, of} from 'rxjs/index';
import {Users} from '../config/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private len: number;

  constructor() { }

  findAll(): Observable<User[]> {
    let index: number = Users.length;
    if(index > 0 ) this.len = index>0 ? Users[index-1].id : index;
    return of(Users);
  }

  createUser(user: User): void {
    console.log('User : ', user);
    Users.push({id: ++this.len, username: user.username, password: user.password});
  }

  editUser(obj: User): void {
    Users.forEach(function(user: User, index: number) {
      if (user.id == obj.id) {
        user.username = obj.username;
        user.password = obj.password;
      }
    });
  }

  deleteUser(deleteUser: User) : void {
    let index = Users.indexOf(deleteUser);
    Users.splice(index,1);
  }

  findOne(id: number): User {
    let user: User = null;

    this.findAll().forEach((users: User[]) => {
      users.filter((tempUser: User) => {
        if (tempUser.id === id) {
          user = tempUser;
        }
      })
    });

    return user;
  }

}
