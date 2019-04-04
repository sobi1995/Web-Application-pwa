import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'about-me', component: AboutComponent },
  { path: 'register-user', component: RegisterComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
