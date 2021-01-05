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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  arrReg: Reg[] = [];
  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._data.getAllRegister().subscribe((data: Reg[]) => {
      this.arrReg = data;
      console.log(this.arrReg);
    });
  }
}
