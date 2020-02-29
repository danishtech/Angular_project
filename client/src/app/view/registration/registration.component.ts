import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public isSchool = true;
  public isPublic = false;
  public isPrivate = false;

  constructor(private _formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }

  onChanged(val: any) {
    if(val === 'id01'){
      this.isPrivate = true;
      this.isPublic = false;
      this.isSchool = false
    } else if (val === 'id02'){
      this.isPublic = true;
      this.isPrivate = false;
      this.isSchool = false
    } else {
      this.isSchool = true;
      this.isPublic = false;
      this.isPrivate = false;
    }
  }

  onLogin() {
    this.router.navigateByUrl('/login')
  }


}
