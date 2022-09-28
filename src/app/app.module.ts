import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailsComponent } from './components/order-details/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RentalTermComponent } from './components/order-details/rental-term/rental-term.component';
import { SelectCarComponent } from './components/order-details/select-car/select-car.component';
import { OTPComponent } from './components/order-details/otp/otp.component';
import { DoneComponent } from './components/order-details/done/done.component';
import { HomeModule } from './components/home/home.module';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderDetailsComponent,
    DetailsComponent,
    RentalTermComponent,
    SelectCarComponent,
    OTPComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule ,
    RouterModule ,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularTypewriterEffectModule 
    // HomeModule,
    // OrderDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
