import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { FirebaseService } from './Services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit{
  api:any;
  ngOnInit(): void {


    if(this.swUpdate.isEnabled)
    {
      this.swUpdate.available.subscribe(()=> {

        if(confirm("New Version available.Load New Version?")){
          window.location.reload();
        }
      })
    }
 
  }
constructor(private swUpdate:SwUpdate){

}
}
