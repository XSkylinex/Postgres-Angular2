import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpToBackend: HttpClient, private router: Router) {}

  createUser(a , b, c ):void{
    const data = {
      title: a,
      description: b,
      published: c
    }
    this.httpToBackend.post("http://localhost:4000/user/cr",data).subscribe(p => {
      console.log(p);
    },err => {
      console.log(err);
    })
  }
}
