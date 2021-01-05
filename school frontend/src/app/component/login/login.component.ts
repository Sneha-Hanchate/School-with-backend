import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reg } from '../register/reg';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  a: any;
  b: any;
  arrReg: Reg[] = [];
  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }
  //
  login() {
    this._data.getAllRegisterById(this.a, this.b).subscribe((data: Reg[]) => {
      this.arrReg = data;

      if (this.arrReg.length >= 1) {
        alert('Successfully Logged in');
        window.localStorage.setItem('mobile', this.a);
        window.localStorage.setItem('password', this.b);
        console.log(localStorage);

        this._router.navigate(['/component/navbar']);
      } else {
        alert('Try Again');
      }
    });
  }
}

//

// ngOnInit(): void {
//   this._data.getAllReg().subscribe(
//     (data:Register[])=>{
//       this.arrBooks=data;
//     }
//   );
// }

// login(){
//   let count:number=1;
//   for( let item of this.arrBooks){
//     if(this.a == item.email && this.b== item.password){
//       alert('Successfully Logged in');
//       this._router.navigate(['/view-card']);
//       break;
//     }
//     count++;
//   }

//   if(count-1==this.arrBooks.length)
//     {
//       alert('Something is wrong, Try again');

//     }

// }
