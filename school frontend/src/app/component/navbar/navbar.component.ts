import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reg } from '../register/reg';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  a: any;
  b: any;
  arrReg: Reg[] = [];
  id: any;
  std: any;
  name: any;
  division: any;
  email: any;
  address: any;
  password: any;
  photo: any;
  rollno: any;
  dob: any;
  mobile: any;
  // register
  signupForm: FormGroup;
  arrAll: Reg[] = [];
  imgSrc: any;
  selectedImg: string;

  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    // reg start
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
    // reg end
    this.a = localStorage.getItem('mobile');
    this.b = localStorage.getItem('password');
    this._data.getAllRegisterById(this.a, this.b).subscribe((data: Reg[]) => {
      this.arrReg = data;
      for (let item of this.arrReg) {
        console.log(item);
        this.id = item.id;
        this.name = item.name;
        this.std = item.std;
        this.division = item.division;
        this.email = item.email;
        this.address = item.address;
        this.photo = item.photo;
        this.mobile = item.mobile;
        this.rollno = item.rollno;
        this.dob = item.dob;
        this.password = item.password;
        this.imgSrc = item.photo;
      }
    });
  }
  // reg
  onchange(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImg = event.target.files[0];
    }
  }
  onSignup() {
    // edit register profile
    alert('successfully edited');
    console.log('edit');
    var c = {
      ...this.signupForm.value,
      photo: this.imgSrc,
    };
    this._data.editRegister(this.id, c).subscribe((x) => {
      console.log('abc', c);
      this._router.navigate(['/component/navbar']);
    });
  }
}

// onchange(event: any) {
//     if (event.target.files && event.target.files[0]) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => (this.imgSrc = e.target.result);
//       reader.readAsDataURL(event.target.files[0]);
//       this.selectedImg = event.target.files[0];
//     }
//   }
