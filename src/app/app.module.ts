import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LdapListComponent } from './ldap-management/ldap-list/ldap-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppMaterialModule } from './app-material.module';
import { NavbarComponent } from './ldap-management/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LdapEditComponent } from './ldap-management/ldap-edit/ldap-edit.component';
import { LdapAddComponent } from './ldap-management/ldap-add/ldap-add.component';
import { AlertComponent } from './share/alert/alert.component';
import {LdapManagementModule} from "./ldap-management/ldap-management.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    LdapManagementModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
