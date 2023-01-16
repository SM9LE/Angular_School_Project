import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthenticationService} from "../../security/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // TODO : Commenter
  isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private authenticationService: AuthenticationService, private router: Router) {}

  // Fonction permettant de déconnecter l'utilisateur TODO : Reste à faire
  logout()
  {
    AuthenticationService.logout();
    this.router.navigate(['/login']);
  }
}
