import {AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UserLdap} from "../model/user-ldap";
import {UsersService} from "../service/users.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit, AfterViewInit {

  // Colonnes permettant de faire le tableau dans ldap-list html
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero', 'employeNiveau'];
  // Je sais pas
  dataSource = new MatTableDataSource<UserLdap>([]);
  user: UserLdap;

  // Je sais pas ce qu'est ViewChild TODO : Faire la doc
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private usersService: UsersService, private router: Router) {}

  // A l'initialisation du projet, ça récupère la BDD
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getUsers();
  }

  // Je sais pas TODO : Savoir ce que c'est
  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator);
  }

  // TODO : COMMENTER
  unactiveSelected = false;

  // TODO : COMMENTER
  // Fonction permettant de récupérer toutes les données de la BDD
  private getUsers(): void {
    this.usersService.getUsers().subscribe(
      users => {
        if (this.unactiveSelected) {
          this.dataSource.data = users.filter(user => user.active === false);
        }
        else {
          this.dataSource.data = users
        }
      });
  }
// TODO : COMMENTER
  edit(login: string) {
    this.router.navigate(['/user', login]).then( (e) => {
      if (! e) {
        console.log("Navigation has failed!");
      }
    });
  }

  // TODO : COMMENTER
  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
  // TODO : A FAIRE !
  filterPredicate(data, filter): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  // TODO : A FAIRE !
  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
