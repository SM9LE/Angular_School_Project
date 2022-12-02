import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../service/users.service";
import {UserLdap} from "../model/user-ldap";
import {FormBuilder} from "@angular/forms";
import {ConfirmValidParentMatcher, passwordValidator} from "./passwords-validator.directive";

export abstract class LdapDetailComponent {

  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;
  passwordPlaceHolder: string;
  errorMessage = '';
  confirmValidParentMatcher = new ConfirmValidParentMatcher();

  userForm = this.fb.group({
    login: [''], // Valeur de départ vide
    nom: [''],
    prenom: [''],
    // Groupe de données imbriqués
    passwordGroup: this.fb.group({
      password: [''],
      confirmPassword: [''],
    }, {validators: passwordValidator}),
    mail: {value: '', disabled: true}
  })

  protected constructor(public addForm: boolean, private fb: FormBuilder, private router: Router,){
    this.passwordPlaceHolder = 'Mot de passe' + (this.addForm ? ' ' : ' (vide si inchangé)');
  }

  protected onInit(): void {
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
    if (this.addForm) {
      this.userForm.get('login').setValue((this.formGetValue('prenom') + '.' + this.formGetValue('nom')).toLowerCase());
      this.updateMail();
    }
  }
  updateMail(): void {
    if (this.addForm) {
      this.userForm.get('mail').setValue(this.formGetValue('login').toLowerCase() + '@epsi.lan');
    }
  }

  isFormValid(): boolean {
    return this.userForm.valid && (!this.addForm || this.formGetValue('passwordGroup.password') !== '');
  }
  abstract validateForm(): void;

  protected copyUserToFormControl(): void {
    this.userForm.get('login').setValue(this.user.login);
    this.userForm.get('nom').setValue(this.user.nom);
    this.userForm.get('prenom').setValue(this.user.prenom);
    this.userForm.get('mail').setValue(this.user.mail);
    /*this.userForm.get('employeNumero').setValue(this.user.employeNumero);
    this.userForm.get('employeNiveau').setValue(this.user.dateEmbauche);
    this.userForm.get('dateEmbauche').setValue(this.user.publishedId);
    this.userForm.get('active').setValue(this.user.active);*/
  }

  protected getUserFromFormControl(): UserLdap {
    return {
      login: this.userForm.get('login').value,
      nom: this.userForm.get('nom').value,
      prenom: this.userForm.get('prenom').value,
      nomComplet: this.userForm.get('nom').value + ' ' + this.userForm.get('prenom').value,
      mail: this.userForm.get('mail').value,
      employeNumero: 1,
      employeNiveau: 1,
      dateEmbauche: '2020-04-24',
      publishedId: 1,
      active: true,
      motDePasse: '',
      role: 'ROLE_USER',
    }
  }
}
