import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal_info/personal-info/personal-info.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"/personal_info",
    pathMatch:"full"
  },
  {
    path: "personal_info",
    component: PersonalInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
