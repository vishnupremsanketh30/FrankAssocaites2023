import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesprovidedComponent } from './servicesprovided/servicesprovided.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'services', component:ServicesprovidedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
