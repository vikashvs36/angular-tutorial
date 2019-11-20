import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../domain/user';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  selectedUser: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.forEach((paramMap: ParamMap) => {
      let id = paramMap.get('id');
      if(id) { this.findOne(+id)};
    })
  }

  findOne(id: number): void {
    this.selectedUser = this.userService.findOne(id);
  }

}
