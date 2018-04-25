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
import { Subject } from 'rxjs/Subject';

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
  showMenuIf: Boolean;

  private authSubscription: Subject<Boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.authSubscription = this.authService.getUserAuth();

    this.authSubscription.subscribe(
      authenticated => {
        this.showMenuIf = authenticated;
      }
    );
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
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
