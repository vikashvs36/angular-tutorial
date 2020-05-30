import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;

  validationMessage= {
    'userName':{
      'required': 'UserName is required',
      'minlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "userName Name Must be equals or more than 2 character or equals or less than 8 character."
    },
    'password': {
      'required': 'password is required',
      'minlength': "password Must be equals or more than 2 character or equals or less than 8 character.",
      'maxlength': "password Must be equals or more than 2 character or equals or less than 8 character."
    }
  };
  formErrors = {
    'userName': '',
    'password': ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required, Validators.minLength(2), Validators.maxLength(8)],
      password: ['', Validators.required, Validators.minLength(2), Validators.maxLength(8)],
    })
  }


  logKeyValuePair(group: FormGroup): void {
    Object.keys(group.controls).forEach((key:string) => {
      const absControl = group.get(key);
      console.log('key : '+key+", value : "+absControl.value)
      this.formErrors[key]='';
      if(absControl && !absControl.valid) {
        const message = this.validationMessage[key];
        
        for(const errorKey in absControl.errors ) {
          if(errorKey) {
            this.formErrors[key] += message[errorKey] +' ';  
          }
        }
      }
    });
  }

  onSubmit(): void {
    this.logKeyValuePair(this.loginForm);
    console.log('Error :', this.formErrors); 
  }

}
