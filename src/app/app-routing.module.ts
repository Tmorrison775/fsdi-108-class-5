import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ListUserComponent } from './list-user/list-user.component';


const routes: Routes = [

  //root page
  {path: '',component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'user/register', component: RegisterUserComponent},
  {path: 'user/listuser', component: ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
