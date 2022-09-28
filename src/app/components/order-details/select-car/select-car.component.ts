import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.scss']
})
export class SelectCarComponent implements OnInit {

  @Output() OtpEvent = new EventEmitter<boolean>();
  @Output() OtpId = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    // center: true,
    dots: false,
    nav: false,
    autoWidth: true,
    items:5,
    margin : 10,
    stagePadding: 50,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items:1.5,
      },
      400: {
        items:2.2,
      },
      600: {
        items: 3.3,
      },
      1000: {
        items: 4.5,
      },
    },
  };
  
  submited(){
    this.OtpEvent.emit(true);
    this.OtpId.emit("otp");
  }
}
