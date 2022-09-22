import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rental-term',
  templateUrl: './rental-term.component.html',
  styleUrls: ['./rental-term.component.scss']
})
export class RentalTermComponent implements OnInit {
  
  @Output() selectCarEvent = new EventEmitter<boolean>();
  @Output() selectCarId = new EventEmitter<any>();

  active: number = 1;
  RentalTermForm = new FormGroup({
    frequency: new FormControl('Daily', Validators.required),
    calendar: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submited() {
    console.log(this.RentalTermForm.value);

    if (!this.RentalTermForm.valid) {
      this.RentalTermForm.markAllAsTouched();
    }
 
    this.selectCarId.emit("selectcar");
    this.selectCarEvent.emit(true);

  }
}
