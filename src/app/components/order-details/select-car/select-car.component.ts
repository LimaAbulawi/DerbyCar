import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss']
})
export class SelectCarComponent implements OnInit {

  @Output() OtpEvent = new EventEmitter<boolean>();
  @Output() OtpId = new EventEmitter<any>();
  isRequired: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  selectCar = new FormGroup({
    car: new FormControl('', Validators.required),
  });

  customOptions: OwlOptions = {
    loop: true,
    // center: true,
    dots: false,
    nav: false,
    autoWidth: true,
    items: 5,
    margin: 10,
    stagePadding: 50,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        items: 2.2,
      },
      600: {
        items: 3.3,
      },
      1000: {
        items: 4.5,
      },
    },
  };

  submited() {
   
    if (!this.selectCar.valid) {
      debugger
      this.isRequired = true
      this.selectCar.markAllAsTouched();
    }else{
      this.OtpEvent.emit(true);
      this.OtpId.emit("otp");
    }

  }
  
  onClick(event: any) {
    // the style
    console.log(event.target.attributes.style.value)
    // the value we will bind it
    console.log(event.target.attributes.value.value)
    this.isRequired = false
    this.selectCar.controls.car.setValue(event.target.attributes.value.value)

  }
}
