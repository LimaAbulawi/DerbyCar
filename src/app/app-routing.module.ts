import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { SelectCarComponent } from './components/order-details/select-car/select-car.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  // { path: "ourcars", component: SelectCarComponent },

  {
    //lazyloding the protected module
    path: "details",
    component: OrderDetailsComponent,
    // loadChildren: () => import('./components/order-details/order-details.module').then(m=>m.OrderDetailsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
