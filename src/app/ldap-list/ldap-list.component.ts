import {AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {UserLdap} from "../model/user-ldap";


@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.css']
})
export class LdapListComponent implements OnInit, AfterViewInit {

  // Colonnes permettant de faire le tableau dans ldap-list html
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero', 'employeNiveau'];
  dataSource = new MatTableDataSource([]);

  // @ViewChild permet d'utiliser des directives, c'est un décorateur
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {}

  // A l'initialisation du projet, ça récupère la BDD
  ngOnInit(): void {
    console.log('Values on ngOnInit():');
    this.dataSource.paginator = this.paginator;
    // Permet de vérifier que l'utilisateur rechercher par une chaine de caractère est bien en BDD
    this.dataSource.filterPredicate = (data: UserLdap, filter: string) => this.filterPredicate(data, filter)
    this.getUsers();
    console.log("Mat Paginatoir:", this.paginator)
  }

  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator);
  }

  // Génère le booléen unactiveSelected à false, nous permettra plus tard de rechercher quelqu'un plus simplement
  unactiveSelected = false;

  // Fonction permettant de récupérer toutes les données de la BDD
  private getUsers(): void {
    this.dataSource.data = LDAP_USERS;
    // unactiveSelected étant à false, cela me permet de récupérer les users s'ils sont inactifs
    if (this.unactiveSelected) {
      this.dataSource.data = this.dataSource.data.filter(user => user.active === false);
    }
  }

  // Fonction permettant de checker l'état de l'utilisateur
  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
  // Fonction de recherche par rapport au nomComplet de l'utilisateur
  filterPredicate(data, filter): boolean {
    return !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }

  // Fonction de liaison entre la recherche et l'évènement "touche de clavier" de l'utilisateur
  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
