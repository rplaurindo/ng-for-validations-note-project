# NgForValidationsNote

## Requirements

Angular 6 or higher.

## Installing

	$ npm i ng-for-validations-note --save

## Usage

Include the module into ```imports``` metadata key of ```NgModule``` decorator of your application.

```typescript
import { NgForValidationsNote } from 'ng-for-validations-note';

@NgModule({
    imports: [
        NgForValidationsNote.Module
    ]
})
```

Choose which component you want to use

>- app-form-validation;
>- app-form-uniq-validation;
>- app-form-validation-list.

To use anyone you must tdefine the ```messages``` property binding like that

```html
<app-form-validation
  [messages]="{
    required: 'this field is required.'
  }"
></app-form-validation>
```

To use ```app-form-uniq-validation``` or ```app-form-validation-list``` you must define the ```nameTranslations``` property binding.

```html
<app-form-uniq-validation
  [nameTranslations]="{
    name: 'Name',
	name2: 'Name 2'
  }"
></app-form-uniq-validation>
```

To use ```app-form-validation``` you must define the ```control``` property binding.

```html
<form
  <!-- on Reactive Forms -->
  [formGroup]="form"
  <!-- on Template Driven -->
  #form="ngForm"
>
<input name="aName"/>
<app-form-validation
  [control]="form.controls['aName']"
></app-form-uniq-validation>
```

So inject the service on your component and call the ```notifier``` method when you want to show the validation message in your application. If you want to use ```app-form-uniq-validation``` or ```app-form-validation-list```, you must pass ```NgForm``` of ```FormGroup``` object as argument to use it.

