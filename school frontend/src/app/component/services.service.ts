import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url1: string = 'http://localhost:3000/register/';
  url2: string = 'http://localhost:3000/notice/';

  constructor(private _http: HttpClient) {}
  // register
  getAllRegisterById(val1: any, val2: any) {
    return this._http.get(`http://localhost:3000/register/${val1}/${val2}`);
  }
  deleteRegister(id: any) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    return this._http.delete(this.url1 + id, { headers: head });
  }
  addRegister(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: head });
  }
  getAllRegisterByName(mobile1: any, name1: any, std1: any) {
    return this._http.get(
      `http://localhost:3000/register/${mobile1}/${name1}/${std1}`
    );
  }
  getAllRegister() {
    return this._http.get(`http://localhost:3000/register/`);
  }
  editRegister(id: any, item) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + id, body, { headers: head });
  }
  // notiice
  getAllNotice() {
    return this._http.get(`http://localhost:3000/notice/`);
  }
  editBook(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + item.name, body, { headers: head });
  }

  // getAllReg(){
  //   return this._http.get(this.url1);
  // }
  // deleteBook(name){
  //   let head= new HttpHeaders().set('Content-Type', 'application/JSON');
  //   return this._http.delete(this.url+name,{headers:head});
  // }
  // addBook(item:Book1){
  //   let head= new HttpHeaders().set('Content-Type', 'application/JSON');
  //   let body=JSON.stringify(item);
  //   return this._http.post(this.url,body,{headers:head});
  // }
  // addReg(item:Register){
  //   let head= new HttpHeaders().set('Content-Type', 'application/JSON');
  //   let body=JSON.stringify(item);
  //   return this._http.post(this.url1,body,{headers:head});
  // }
  // getAllBookAddByName(){
  //   return this._http.get(this.url+name);
  // }
  // editBook(item:Book1){
  //   let head= new HttpHeaders().set('Content-Type', 'application/JSON');
  //   let body=JSON.stringify(item);
  //   return this._http.put(this.url+item.name,body,{headers:head});
  // }

  // getapiBook(val:any){
  //   // this.search=val;
  //   // return this._http.get(this.url4);
  //   return this._http.get(`https://openlibrary.org/search.json?q=${val}&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,author_name,name&mode=everything`);
  // }
}
