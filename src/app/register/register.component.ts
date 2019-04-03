import { Component, OnInit } from '@angular/core';
import { UserDto } from '../dtos/user-dto';
import { FirebaseService } from '../Services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user;
  users;
  dataOnApi:any;
ngOnInit(): void {
//  this.getUsers();
  //this.getDataOnApi();
}
constructor() {//updates: SwUpdate, public _firebase:FirebaseService
   this.user=  {} as UserDto;
  this.users=   Array<UserDto>();
  // updates.available.subscribe(event => {
  //   updates.activateUpdate().then(() => document.location.reload());
  // })
}
  // addUser(){
  //   this._firebase.postUser(this.user).subscribe(res=>{
  //     alert("add New User")
  //     this.getUsers();
  //   })
  //       }

  //       getUsers(){
  //         this._firebase.getUsers().subscribe(res=>{
  //           this.users=res;
  //         })
  //       }

  //       getDataOnApi(){
  //         this._firebase.getDataOnApi().subscribe(res=>{
  //           this.dataOnApi=res;
  //         })
  //       }
}
