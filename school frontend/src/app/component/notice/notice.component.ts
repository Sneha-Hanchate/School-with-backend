import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Notice1 } from './notice';
import {
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  arrNotice: Notice1[] = [];
  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._data.getAllNotice().subscribe((data: Notice1[]) => {
      this.arrNotice = data;
      console.log(this.arrNotice);
    });
  }
}
