import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  @Output() showRentalId = new EventEmitter<any>();
  @Output() firstname = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  orderForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
  });

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }

  submited() {
    if (!this.orderForm.valid) {
      debugger
      console.log(this.orderForm.value);
      this.orderForm.markAllAsTouched();
    }
    this.showRentalId.emit("show");

    this.newItemEvent.emit(true);
    this.firstname.emit(this.orderForm.value.firstName);
    
    console.log(this.orderForm.value);
    // el.scrollIntoView({behavior: 'smooth'});
  }
}  
