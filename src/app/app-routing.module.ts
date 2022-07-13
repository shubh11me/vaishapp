import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllcardsComponent } from './allcards/allcards.component';
import { NewComponent } from './new/new.component';
import {LoginComponent} from './login/login.component'
import {AuthGuard} from './auth.guard'
const routes: Routes = [
  {path:'',component:AllcardsComponent,canActivate:[AuthGuard]},
  {path:'new',component:NewComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
