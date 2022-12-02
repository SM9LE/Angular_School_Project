import {Component, OnInit} from '@angular/core';
import {LdapDetailComponent} from "../ldap-detail/ldap-detail.component";
import {UsersService} from "../service/users.service";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-ldap-add',
  templateUrl: './ldap-add.component.html',
  styleUrls: ['./ldap-add.component.css']
})
export class LdapAddComponent extends LdapDetailComponent implements OnInit {
  constructor(private usersService: UsersService, fb: FormBuilder, router: Router){
    super(true, fb, router);
  }
  ngOnInit(): void{
    super.onInit();
  }
  validateForm(): void {
    console.log('LdapAddComponent - validateForm');
  }
}
