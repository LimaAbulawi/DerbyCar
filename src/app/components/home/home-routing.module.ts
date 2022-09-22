import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeDetailsComponent } from './home-details/home-details.component';

const routes: Routes = [

  {path:'home-details' , component:HomeDetailsComponent},
  {path:'' , component:HomeDetailsComponent},
  {path:'aboutus' , component:AboutUsComponent},
  {path:'contactus' , component:ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
