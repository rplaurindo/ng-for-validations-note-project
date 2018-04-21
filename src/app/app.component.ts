import {
  Component,
  OnInit,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnChanges
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements  OnInit,
                                      AfterContentInit,
                                      OnDestroy,
                                      OnChanges,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked {

  title = `Examples`;
  showMenuIf: boolean;
  userAuthSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.authService.susbscribeOverAuthentication(
      authenticated => {
        this.showMenuIf = authenticated;
      }
    );
  }

  ngOnDestroy() {
    this.authService.unsusbscribeOverAuthentication();
  }

  ngOnChanges() {
  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

}
