import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
 
import {AngularFireModule} from '@angular/fire';
 
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from './common/shared/shared.module';
import { FirebaseService } from './Services/firebase.service';
import { environment  as environmentFirebase } from './common/shared/environment';
import { UserListComponent } from './user-list/user-list.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent, RegisterComponent,AboutComponent, UserListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environmentFirebase.firebase),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
