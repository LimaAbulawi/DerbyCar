import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import Typewriter from 't-writer.js';
// import ngtypewriter from '';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  list = ['Daily','Weekly ', 'Monthly' ]

 // owl-carousel 
 customOptions: OwlOptions = {
  loop: true,
  // center: true,
  dots: false,
  nav: false,
  autoWidth: true,
  items:5,
  margin:6,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items:1.2,
    },
    300: {
      items:1.4,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 2.5,
    },
  },
};

frequency: OwlOptions = {
  loop: true,
  // center: true,
  dots: false,
  nav: false,
  autoWidth: true,
  items:3,
  margin:5,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items:1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

RrentNow(){
  this.router.navigate(['/details']);
 
}

}
