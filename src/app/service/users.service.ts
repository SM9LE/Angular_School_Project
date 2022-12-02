import { Injectable } from '@angular/core';
import {UserLdap} from "../model/user-ldap";
import {Observable, of, throwError} from "rxjs";
import {LDAP_USERS} from "../model/ldap-mock-data";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  static users: UserLdap[] = LDAP_USERS;

  getUsers(): Observable<UserLdap[]> {
    return of (UsersService.users);
  }

  addUser(user: UserLdap): Observable<UserLdap> {
    UsersService.users.push(user);
    return of (user);
  }

  updateUser(userToUpdate: UserLdap): Observable<UserLdap> {
    const user = UsersService.users.find(u => u.login === userToUpdate.login);
    if (user)
    {
      user.nom = userToUpdate.nom;
      user.prenom = userToUpdate.prenom;
      user.nomComplet = user.nom + ' ' + user.prenom;
      user.motDePasse = userToUpdate.motDePasse;
      return of (userToUpdate);
    }
    return throwError('Utilisateur non trouvé');
  }
  getUser(login: string): Observable<UserLdap> {
     return of (UsersService.users.find(user => user.login === login));
  }

  constructor() { }
}
