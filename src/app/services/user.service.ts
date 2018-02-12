import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/';
import {User} from '../shared/model/user';
import {Http} from '@angular/http';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {

  user$: Observable<User> = Observable.of(UNKNOWN_USER);

  constructor(private http: Http) { }

  login(email: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('/api/login', {email, password})
      .subscribe(
        user => {

        },
        () => alert('Login Failed')
      );
  }

}
