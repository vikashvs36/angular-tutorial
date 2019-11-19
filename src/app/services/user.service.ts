import { Injectable } from '@angular/core';
import {User} from '../../domain/user';
import {Users} from '../config/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  findAll(): User[] {
    return Users;
  }
}
