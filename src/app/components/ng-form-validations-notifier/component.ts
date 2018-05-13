import {
    Component,
    Input,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    NgForm
} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { NgFormValidations } from './services/ng-form-validations';



@Component({
    selector: 'app-form-validation-msgs',
    templateUrl: './component.html',
    styleUrls: ['./component.sass']
})
export class ValidationComponent implements OnInit,
                                            OnDestroy {

    canShow: Boolean = false;
    errorMessages: Array<String> = [];

    private validationSubscription: Subscription;
    private guidedValidationSubscription: Subscription;

    @Input()
    control: FormControl;

    @Input()
    messages: Object;

    @Input()
    propertyTranslates: Object;
    // {name: 'nome'...}

    constructor(private validator: NgFormValidations) {}

    validationTypeKeys(): Array<string> {
        const
            keys: Array<string> = [];

        Object.keys(this.messages).forEach((k) => {
            keys.push(k);
        });

        return keys;
    }

    ngOnInit() {
        let
            mappedErrorKey: string;

        this.validationSubscription = this.validator.getValidation().subscribe(
            () => {
                mappedErrorKey = this.validator.getValidationErrorFor(
                    this.control,
                    this.validationTypeKeys()
                );
                this.errorMessages = [];
                if (mappedErrorKey) {
                    this.canShow = true;
                    this.errorMessages.push(this.messages[mappedErrorKey]);
                } else {
                    this.errorMessages = [];
                    this.canShow = false;
                }
            }
        );

        this.guidedValidationSubscription = this.validator
            .getGuidedValidation().subscribe(
            (form: NgForm | FormGroup) => {
                const
                    controls: Object = form.controls;

                let
                    control: FormControl;

                for (let k of Object.keys(form.controls)) {
                    control = controls[k];
                    mappedErrorKey = this.validator.getValidationErrorFor(
                        control,
                        this.validationTypeKeys()
                    );
                    this.errorMessages = [];
                    if (mappedErrorKey) {
                        this.canShow = true;
                        // ver como definir uma classe para o campo para que ele possa receber um destaque
                        this.errorMessages.push(this.messages[mappedErrorKey]);
                        // no caso de mostrar os erros correntes de todos os elementos do formulário, não fazer break
                        break;
                    }
                }
            }
        );

    }

    ngOnDestroy() {
        this.validationSubscription.unsubscribe();
        this.guidedValidationSubscription.unsubscribe();
    }

}
