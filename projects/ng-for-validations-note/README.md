# NgForValidationsNote

## Requirements

>- Angular 5 or higher.

## Installing

	$ npm i ng-for-validations-note --save

## Usage

Include the module into ```imports``` metadata key of ```NgModule``` decorator of your application importing ```NgForValidationsNoteModule``` from ```ng-for-validations-note```, like that.

```typescript
import { NgForValidationsNoteModule } from 'ng-for-validations-note';

@NgModule({
    imports: [
        NgForValidationsNoteModule.forRoot()
    ]
})
export class MyModule() { }
```

Choose which component you want to use

>- lib-form-validation;
>- lib-form-uniq-validation-list;
>- lib-form-uniq-validation-list.

To use anyone you must define the ```messages``` property binding, like that

```html
<lib-form-validation 
	[messages]="{
		required: 'this field is required.'
	}"
></lib-form-validation>
```

To use ```lib-form-uniq-validation``` or ```lib-form-validation-list``` you must define the ```nameTranslations``` property binding and define a variable to bind a property by ```@ViewChild('')``` of ```NgForValidationsNote.Components.ListComponent``` or ```NgForValidationsNote.Components.UniqComponent``` kind.

```html
<lib-form-uniq-validation
	#validator 
	[nameTranslations]="{
		name: 'Name',
		name2: 'Name 2'
	}"
></lib-form-uniq-validation>
```

To in your component you should to call the ```validate(form: FormGroup | NgForm)``` of ```NgForValidationsNote.Components.ListComponent``` or ```NgForValidationsNote.Components.UniqComponent```.

To use ```libuse ```app-form-validation``` you must define the ```control``` property binding.

```html
<!-- on Reactive Forms -->
<!-- on Template Driven -->
<form
	[formGroup]="form"
	#form="ngForm"
>
	<input name="aName"/>
	<lib-form-validation
		[control]="form.controls['aName']"
	></lib-form-uniq-validation>
</form>
```

So inject the ```NgForValidationsNote.Services.Notifier``` service on your component importing ```NgForValidationsNote``` from ```ng-for-validations-note``` and call the ```notifier()``` method when you want to show the validation message in your application. If you want to use ```app-form-uniq-validation``` or ```app-form-validation-list```, you must pass a ```NgForm``` of ```FormGroup``` instance as argument to work.

