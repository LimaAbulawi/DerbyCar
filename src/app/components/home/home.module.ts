import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

@NgModule({
  declarations: [
    HomeDetailsComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    AngularTypewriterEffectModule 
  ]
})
export class HomeModule { }
