import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { DetailsComponent } from './details/details.component';
import { RentalTermComponent } from './rental-term/rental-term.component';
import { SelectCarComponent } from './select-car/select-car.component';
import { OTPComponent } from './otp/otp.component';
import { DoneComponent } from './done/done.component';


@NgModule({
  declarations: [
    DetailsComponent,
    RentalTermComponent,
    SelectCarComponent,
    OTPComponent,
    DoneComponent
  ],
  imports: [
    CommonModule,
    OrderDetailsRoutingModule
  ]
})
export class OrderDetailsModule { }
