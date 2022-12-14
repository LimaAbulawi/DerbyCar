import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/app/shared/components/store/country-data';
// import { Countries } from 'src/app/shared/interfaces/country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<boolean>();

  @Output() showRentalId = new EventEmitter<any>();
  @Output() firstname = new EventEmitter<any>();
  num: boolean = false;
  public countries: any = countries;

  selectedOption = "+971";

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(event: any) {

    this.selectedOption = event.target.value;
  }

  orderForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
  });

  // scroll(el: HTMLElement) {
  //   el.scrollIntoView({ behavior: 'smooth' });
  // }

  submited() {
    if (!this.orderForm.valid) {
      this.orderForm.markAllAsTouched();
    }

    this.orderForm.controls.phone.setValue(this.destroyMask( this.orderForm.controls.phone.value))
    console.log(this.orderForm.controls.phone.value);

    if (this.orderForm.valid) {
      this.showRentalId.emit("show");
      this.newItemEvent.emit(true);
      this.firstname.emit(this.orderForm.value.firstName);
      console.log(this.orderForm.value);
    }
    // el.scrollIntoView({behavior: 'smooth'});
  }
  placeholder: any | undefined;

  onInput(event: any) {
    event.target.value = this.destroyMask(event.target.value);
  }
    
  destroyMask(event: any) {
    return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }

}
    // if (event.target.value == "") {
    //   this.num = true;
    // }else{
    //   this.num = false;
    // }
    // event.target.value = this.createMask(this.placeholder);

      // createMask(event: any) {
  //   return event.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  // }