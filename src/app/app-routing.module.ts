import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
  {
    path: '', component: LoginComponent 
  },
  {
    path: 'home', component: HomePageComponent 
  },
  {
    path: 'home/add', component: AddComponent 
  },
  {
    path: 'home/edit/:id', component: EditComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
