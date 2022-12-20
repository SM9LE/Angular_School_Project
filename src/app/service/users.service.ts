import { Injectable } from '@angular/core';
import {UserLdap} from "../model/user-ldap";
import {Observable, of, throwError} from "rxjs";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  static users: UserLdap[] = LDAP_USERS;
  private usersUrl = 'api/users';
  private httpOptions = new HttpHeaders({'Content-Type': 'application/json'});

  getUsers(): Observable<UserLdap[]> {
    return this.http.get<UserLdap[]>(this.usersUrl);
  }

  addUser(user: UserLdap): Observable<UserLdap> {
    return this.http.post<UserLdap>(this.usersUrl, user, { headers: this.httpOptions });
  }

  updateUser(user: UserLdap): Observable<UserLdap> {
    return this.http.put<UserLdap>(this.usersUrl + '/' + user.id, user, {headers: this.httpOptions});
  }

  deleteUser(id: number): Observable<UserLdap> {
    return this.http.delete<UserLdap>(this.usersUrl + '/' + id, {headers: this.httpOptions});
  }

  getUser(id: number): Observable<UserLdap> {
     return this.http.get<UserLdap>(this.usersUrl + '/' + id);
  }

  constructor(private http: HttpClient) {
  }
}
