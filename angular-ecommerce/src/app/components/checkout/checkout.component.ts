import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Country} from "../../common/country";
import {FormshopService} from "../../services/formshop.service";
import {State} from "../../common/state";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;

  countries: Country[] = [];
  shippingAddressStates: State[] = [];

  constructor(private formBuilder: FormBuilder,
              private shopFormService: FormshopService) {
  }

  ngOnInit(): void {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
      shippingAddress: this.formBuilder.group({
        country: [''],
        state: ['']
      })
    });

    //populate countries
    this.shopFormService.getCountries().subscribe(
      data => {
        console.log("retrieved Countries" + JSON.stringify(data));
        this.countries = data;
      }
    )
  }

  onSubmit() {
    console.log("onSubmit in CheckOut")
    console.log(this.checkoutFormGroup.get("customer")?.value)
    console.log(this.checkoutFormGroup.get("shippingAddress")?.value)
  }

  getStates(formGroupName: string) {

    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup?.value.country.code;

    this.shopFormService.getStates(countryCode).subscribe(
      data => {
        if (formGroupName === 'shippingAddress') {
          this.shippingAddressStates = data;
        }
        // select first item by default
        formGroup?.get('state')?.setValue(data[0])
      }
    );
  }
}
