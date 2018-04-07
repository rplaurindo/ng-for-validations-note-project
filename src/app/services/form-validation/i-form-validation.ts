import { NgForm } from "@angular/forms";


export interface IFormValidation {

    foundMessageKeysOf(propertyName: string): Array<string>
    valid(propertyName: string, validationTypes: Array<string> | string): Boolean;

}
