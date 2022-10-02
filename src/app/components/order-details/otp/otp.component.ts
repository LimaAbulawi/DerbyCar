import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent implements OnInit {

  otpNumber: any;
  fullOtp: string = '';

  @Output() doneEvent = new EventEmitter<boolean>();
  @Output() doneId = new EventEmitter<any>();
  isRequired: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  otpForm = new FormGroup({
    otp0: new FormControl('', Validators.required),
    otp1: new FormControl('', Validators.required),
    otp2: new FormControl('', Validators.required),
    otp3: new FormControl('', Validators.required),
  });


  destroyMask(event: any) {
    return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }

  createMask(event: any) {
    return event.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }

  onInput(event: any) {
    this.otpNumber = this.destroyMask(event.target.value);
    event.target.value = this.createMask(this.otpNumber);
  }

  submited() {
    if (!this.otpForm.valid) {
      this.isRequired = true;
      this.otpForm.markAllAsTouched();

    } else {
      Object.entries(this.otpForm.value).forEach(
        ([value]: any[]) => {
          this.fullOtp += `${value}`;
        }
      )
      // this.fullOtp : we will send it to backend 
      console.log(this.fullOtp);

      this.doneEvent.emit(true);
      this.doneId.emit("done");
    }
  }
}
