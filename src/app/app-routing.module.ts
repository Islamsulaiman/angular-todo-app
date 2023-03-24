import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeletedComponent } from './deleted/deleted.component';
import { FavoriteComponent } from './favorite/favorite.component';

const routes: Routes = [
  {path: 'login',component:LoginComponent, canActivate:[LoginAuthGuard]},
  {path: '', component : LoginComponent, canActivate: [LoginAuthGuard]},
  {path: 'deleted',  component:  DeletedComponent},
  {path: 'favorite',  component:  FavoriteComponent},


  {path: '**',  component:  NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
