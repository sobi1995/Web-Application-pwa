import { Component, OnInit } from '@angular/core';
import { UserDto } from '../dtos/user-dto';
import { FirebaseService } from '../Services/firebase.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user;

  dataOnApi:any;
ngOnInit(): void {
//  this.getUsers();
  //this.getDataOnApi();
}
constructor(public _firebase:FirebaseService) {//updates: SwUpdate, public _firebase:FirebaseService
   this.user=  {} as UserDto;
 
  // updates.available.subscribe(event => {
  //   updates.activateUpdate().then(() => document.location.reload());
  // })
}
  addUser(){
    this._firebase.postUser(this.user).subscribe(res=>{
      alert("add New User")
     // this.getUsers();
     this.clearForm();
    })
        }
clearForm(){
  this.user=empty;
}
 
  //       getDataOnApi(){
  //         this._firebase.getDataOnApi().subscribe(res=>{
  //           this.dataOnApi=res;
  //         })
  //       }
}
