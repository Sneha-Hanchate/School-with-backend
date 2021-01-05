import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reg } from '../register/reg';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  arrReg: Reg[] = [];
  signupForm: FormGroup;
  arrAll: Reg[] = [];
  // arrBasicInfo: Reg[] = [];

  taskID;
  count;
  res;
  imgSrc: string =
    'https://www.uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg';
  selectedImg: string;
  m: any;
  n: any;
  s: any;
  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      std: new FormControl(null, [Validators.required]),
      division: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      rollno: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      photo: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSignup() {
    this.n = this.signupForm.get('name').value;
    this.m = this.signupForm.get('mobile').value;
    this.s = this.signupForm.get('std').value;
    console.log('hgfgj');
    this._data
      .getAllRegisterByName(this.m, this.n, this.s)
      .subscribe((data: Reg[]) => {
        this.arrReg = data;
        console.log(this.arrReg);

        if (this.arrReg.length >= 1) {
          alert('this name and number already registered');
        } else {
          console.log(this.signupForm);
          debugger;
          alert('successfully added');
          var c = {
            ...this.signupForm.value,
            photo: this.imgSrc,
          };
          console.log(c);
          this._data.addRegister(c).subscribe((x: any) => {
            if (x.affectedValue == 1) {
              this.arrReg.push(this.signupForm.value);
            }
          });

          this._router.navigate(['/']);
        }
      });
  }

  onchange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    }
  }
}
