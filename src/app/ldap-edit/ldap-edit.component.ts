import {Component, OnInit} from '@angular/core';
import {LdapDetailComponent} from "../ldap-detail/ldap-detail.component";
import {UsersService} from "../service/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-ldap-edit',
  templateUrl: './ldap-edit.component.html',
  styleUrls: ['./ldap-edit.component.css']
})
export class LdapEditComponent extends LdapDetailComponent implements OnInit {
  constructor(private usersService: UsersService, private route: ActivatedRoute, fb: FormBuilder, router: Router)
  {
    super(false, fb, router);
  }}

  ngOnInit(): void {
   super.onInit();
  }

  validateForm(): void {
    console.log('LdapEditComponent - validateForm');
  }
}
