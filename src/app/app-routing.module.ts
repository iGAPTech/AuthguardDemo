import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"", component:LoginComponent, pathMatch:"full"},
  {path:"admin", canActivate:[authGuard], loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"**" , component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
