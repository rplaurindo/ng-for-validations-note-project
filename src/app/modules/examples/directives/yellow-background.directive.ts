import { Directive, Renderer, ElementRef } from '@angular/core';

// selector syntax: selector[app<DirectiveName>]
@Directive({
  selector: '[appYellowBackground]'
})
export class YellowBackgroundDirective {

  constructor(private _renderer: Renderer,
    private _elementRef: ElementRef) {
    this._renderer.setElementStyle(this._elementRef.nativeElement,
      'background-color', 'yellow'
    );
  }

}
