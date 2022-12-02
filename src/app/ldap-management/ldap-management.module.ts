import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "../app-material.module";
import {AppRoutingModule} from "../app-routing.module";
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapAddComponent} from "./ldap-add/ldap-add.component";
import {LdapEditComponent} from "./ldap-edit/ldap-edit.component";
import {AlertComponent} from "../share/alert/alert.component";
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
  declarations: [
    LdapListComponent,
    LdapAddComponent,
    LdapEditComponent,
    AlertComponent,
    NavbarComponent,
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LdapManagementRoutingModule,
  ]
})
export class LdapManagementModule { }
