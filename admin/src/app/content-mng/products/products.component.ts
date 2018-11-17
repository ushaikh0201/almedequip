import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { EmailValidator } from '@angular/forms';
@Component({
  selector: 'cdk-reactive-forms',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public profileForm:FormGroup;
submitted = false;
hide;
  constructor(public form: FormBuilder) { 
  		this.profileForm = this.form.group({
            name:['',{validators: [Validators.minLength(6)], updateOn: 'blur'}],
            code:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            price:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            category:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            offer:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            description:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            tech_spec:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}],
            main_content:[ '',{validators: [Validators.minLength(10)], updateOn: 'blur'}]
         });

  }
  // checkUserExists() {
    
       
  //         this.profileForm.value.userName.setErrors({ userExists: `User Name  already exists` });
       
  // }
 onSubmit() { 
 	console.log('');
 	this.submitted = true; }
  ngOnInit() {
  }

}
