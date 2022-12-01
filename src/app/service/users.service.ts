import { Injectable } from '@angular/core';
import {UserLdap} from "../model/user-ldap";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserLdap = LDAP_USERS;

  getUsers(login: string): Observable<UserLdap[]>{
    return of (this.users.find(user => user.login === login));
  }
  constructor() { }
}
