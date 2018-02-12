import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/';
import {User} from '../shared/model/user';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {

  private subject = new BehaviorSubject(UNKNOWN_USER);

  user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) { }

  login(email: string, password: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/login', {email, password})
      .map(res => res.json())
      .do(user => console.log(user))
      .do(user => this.subject.next(user))
      .publishLast().refCount()
  }

}
