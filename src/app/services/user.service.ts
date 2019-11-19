import { Injectable } from '@angular/core';
import {User} from '../../domain/user';
import {Observable, of} from 'rxjs/index';
import {Users} from '../config/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  findAll(): Observable<User[]> {
    return of(Users);
  }
}
