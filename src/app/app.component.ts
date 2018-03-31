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
  styleUrls: ['./app.component.sass'],
  providers: [
    AuthService
  ]
})
export class AppComponent implements  OnInit,
                                      OnDestroy,
                                      OnChanges,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked {

  title = `Examples`;
  showMenuIf: Boolean;
  userAuthSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.userAuthSubscription.unsubscribe();
  }

  ngOnChanges() {
  }

  ngAfterContentInit() {
    this.userAuthSubscription = this.authService.getUserAuthSubject().subscribe(
      authenticated => {
        this.showMenuIf = authenticated;
      }
    );
  }

  ngAfterContentChecked() {
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

}
