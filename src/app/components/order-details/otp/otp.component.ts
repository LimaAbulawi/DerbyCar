import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OTPComponent implements OnInit {

  otpNumber: any | undefined;
  @Output() doneEvent = new EventEmitter<boolean>();
  @Output() doneId = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

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
  submited(){
    this.doneEvent.emit(true);
    this.doneId.emit("done");
  }
}
