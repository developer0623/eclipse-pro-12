import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    mainUrl = 'http://pro-alpha.amscontrols.com:8080';
    constructor(private http: HttpClient) {}
    getSession() {
        console.log('session')
        const httpOptions = {
            withCredentials: true
          };
        this.http.get(`${this.mainUrl}/_api/user/session`, httpOptions).subscribe(data => {
            console.log('data---', data)
        })
    }
    
}