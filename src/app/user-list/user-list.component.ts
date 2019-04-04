import { Component, OnInit } from '@angular/core';
import { UserDto } from '../dtos/user-dto';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users;
  constructor(public _firebase:FirebaseService) { 
    this.users=   Array<UserDto>();
  }

  ngOnInit() {
    this._firebase.getUsers().subscribe(res=>{
                this.users=res;
              })
  }

}
