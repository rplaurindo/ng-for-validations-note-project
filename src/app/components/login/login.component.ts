import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
  // Injectable,
  AfterViewInit
} from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [AuthService]
})
export class LoginComponent implements  OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.authService.getUserAuthSubject().subscribe(
      authenticated => {
        console.log(`authenticated in login: ${authenticated}`)
      }
    );
  }

  signIn() {
    this.authService.signIn();
  }

  signOut() {
    this.authService.signOut();
  }

}
