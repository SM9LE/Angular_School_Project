import { Injectable } from '@angular/core';
import {UserLdap} from "../model/user-ldap";
import {Observable, of} from "rxjs";
import {LDAP_USERS} from "../model/ldap-mock-data";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserLdap[] = LDAP_USERS;

  getUsers(): Observable<UserLdap[]> {
    return of (this.users);
  }

  getUser(login: string): Observable<UserLdap> {
     return of (this.users.find(user => user.login === login));
  }

  constructor() { }
}
