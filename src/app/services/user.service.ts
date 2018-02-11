import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../shared/model/user';

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {

  user$: Observable<User> = Observable.of(UNKNOWN_USER);

  constructor() { }

}
