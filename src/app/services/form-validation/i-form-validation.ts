import { ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";


export interface IFormValidation {

    foundMessageKeysOf(element: HTMLElement | string): Array<string>
    valid(element: HTMLElement | string, validationTypes: Array<string> | string): Boolean;

}
