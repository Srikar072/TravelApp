import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})

export class CustomerComponent implements OnInit {
  customerForm:FormGroup = new FormGroup({});
  
  ngOnInit(): void {
  this.customerForm = new FormGroup({
    name:new FormControl('',
    [Validators.required,
     Validators.minLength(4)]),
     email:new FormControl('',
     [Validators.required
      ]),
 
  });
  }

  get name(){return this.customerForm.get('name');}
  get email(){return this.customerForm.get('email');}

  onSave()
  {
    console.log(this.customerForm.value)
  }
}
