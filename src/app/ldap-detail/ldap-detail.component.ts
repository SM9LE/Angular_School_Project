import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../service/users.service";
import {UserLdap} from "../model/user-ldap";
import {Location} from "@angular/common";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.css']
})

export class LdapDetailComponent implements OnInit {

  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;

  userForm = this.fb.group({
    login: [''], // Valeur de départ vide
    nom: [''],
    prenom: [''],
    // Groupe de données imbriqués
    passwordGroup: this.fb.group({
      password: [''],
      confirmPassword: [''],
    }),
    mail: {value: '', disabled: true}
  })
  constructor(private route: ActivatedRoute, private usersService: UsersService, private fb: FormBuilder, private router: Router,){
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(login).subscribe(
      user => { this.user = user; console.log("LdapDetail getUser ="); console.log(user);}
    );
    console.log("getUser= " + login)
  }

  private formGetValue(name: string): any {
    return this.userForm.get(name).value;
  }

  goToLdap(): void {
    this.router.navigate(['/users/list']);
  }

  onSubmitForm(): void {
  // TODO : A faire après
  }

  updateLogin(): void {
    this.userForm.get('login').setValue((this.formGetValue('prenom') + '.' + this.formGetValue('nom')).toLowerCase());
  }
  updateMail(): void {
    this.userForm.get('mail').setValue(this.formGetValue('login').toLowerCase() + '@epsi.lan');
  }

  isFormValid(): boolean {
    return false;
  }
}
