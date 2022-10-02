import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  isShown: boolean = false;
  Order: boolean = false;
  select: boolean = false;
  showotp: boolean | undefined;
  showDone: boolean | undefined;
  name: string | undefined;
  margin: boolean = false;
  margin1: boolean= false;
  margin2: boolean= false;
  margin3: boolean= false;

  constructor() {

  }

  ngOnInit(): void {

  }

  addItem(done: boolean) {
    this.Order = done;
    
  }
  selectCar(select: boolean) {
    this.select = select;
  }
  showOtp(show: boolean) {
    this.showotp = show;
  }
  showdone(show: boolean) {
    this.showDone = show;
  }

  rentalTermId(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 0)
    setTimeout(() => {
      this.margin = false
    }, 1000)
  }

  selectcarId(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 0)
    setTimeout(() => {
      this.margin1 = false
    }, 1000)
  }

  OtpId(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    setTimeout(() => {
      this.margin2 = false
    }, 1000)
  }

  doneId(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    setTimeout(() => {
      this.margin3 = false
    }, 1000)
  }
  
  firstname(name: string) {
    this.name = name;
  }

}
