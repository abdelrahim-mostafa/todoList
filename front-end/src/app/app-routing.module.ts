import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path : 'login' , component : LoginComponent } ,
  { path : 'signup' , component : SignupComponent } ,
  { path : '' , redirectTo : '/home' , pathMatch : 'full' } ,
  { 
    path : 'home' ,
    component : HomeComponent,
    canActivate : [AuthGuard] ,
    children : [
      { 
        path : '' ,
        canActivateChild : [AuthGuard],
        children : [
          { path : '' , component : TasksComponent } ,
          { path : 'tasks' , component : TasksComponent } ,
          { path : 'new' , component : NewTaskComponent } ,
          { path : 'updateTask/:id' , component : NewTaskComponent } ,
          { path : 'updateUserInfo' , component : SignupComponent } ,
        ]
      } ,
    ]
  } ,
  { path : '**' , component : NotFoundComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
