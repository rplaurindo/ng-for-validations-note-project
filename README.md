
# NgFormValidationsNotifier

## Requirements

Angular 6 or higher.

## Installing

	$ npm i ng-form-validations-notifier --save

## Usage

Include the module in ```imports``` key of ```NgModule``` decorator.

	import * as NgFormValidationsNotifier from 'ng-form-validations-notifier';

Choose which component you want to use

>- app-form-validation;
>- app-form-uniq-validation;
>- app-form-validation-list.

To use anyone you must define the messages property binding like that

	<app-form-validation
	  [messages]="{
	    required: 'this field is required.'
	  }"
	></app-form-validation>

To use ```app-form-uniq-validation``` or ```app-form-validation-list``` you must define ```nameTranslations``` property binding.

	<app-form-uniq-validation
	  [nameTranslations]="{
	    name: 'Name',
		name2: 'Name 2'
	  }"
	></app-form-uniq-validation>

To use ```app-form-validation``` you must define ```control``` property binding.

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

So inject the service on your component and call the ```notifier``` method when you want to show the validation message in your application. If you want to use ```app-form-uniq-validation``` or ```app-form-validation-list```, you must pass ```NgForm``` of ```FormGroup``` object as argument.
