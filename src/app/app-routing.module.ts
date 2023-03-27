import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { DeletedComponent } from './deleted/deleted.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TodoComponent } from './todo/todo.component';
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // {path: 'login',component:LoginComponent, canActivate:[LoginAuthGuard]},
  // {path: '', component : LoginComponent, canActivate: [LoginAuthGuard]},
  {path: 'todos', component:TodoComponent, canActivate: [LoginAuthGuard]},
  {path: 'deleted',  component:  DeletedComponent, canActivate: [LoginAuthGuard]},
  {path: 'favorite',  component:  FavoriteComponent, canActivate: [LoginAuthGuard]},
  {path: 'done',  component:  DoneComponent, canActivate: [LoginAuthGuard]},


  {path: '**',  component:  NotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
