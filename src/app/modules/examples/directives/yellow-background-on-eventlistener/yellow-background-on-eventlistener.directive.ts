import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appYellowBackgroundOnEventlistener]'
})
export class YellowBackgroundOnEventlistenerDirective {

  private backgroundColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'initial';
  }

  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.backgroundColor;
  }

  constructor() { }

}
