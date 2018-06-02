<h1 id="ngformvalidationsnotifier">NgFormValidationsNotifier</h1>
<h2 id="requirements">Requirements</h2>
<p>Angular 6 or higher.</p>
<h2 id="installing">Installing</h2>
<pre><code>$ npm i ng-form-validations-notifier --save
</code></pre>
<h2 id="usage">Usage</h2>
<p>Include the module into <code>imports</code> metadata key of <code>NgModule</code> decorator of your application.</p>
<pre><code>import * as NgFormValidationsNotifier from 'ng-form-validations-notifier';
</code></pre>
<hr>
<pre><code>@NgModule({
    imports: [
        NgFormValidationsNotifier.Module
    ]
})
</code></pre>
<p>Choose which component you want to use</p>
<blockquote>
<ul>
<li>app-form-validation;</li>
<li>app-form-uniq-validation;</li>
<li>app-form-validation-list.</li>
</ul>
</blockquote>
<p>To use anyone you must define <code>messages</code> property binding like that</p>
<pre><code>&lt;app-form-validation
  [messages]="{
    required: 'this field is required.'
  }"
&gt;&lt;/app-form-validation&gt;
</code></pre>
<p>To use <code>app-form-uniq-validation</code> or <code>app-form-validation-list</code> you must define <code>nameTranslations</code> property binding.</p>
<pre><code>&lt;app-form-uniq-validation
  [nameTranslations]="{
    name: 'Name',
	name2: 'Name 2'
  }"
&gt;&lt;/app-form-uniq-validation&gt;
</code></pre>
<p>To use <code>app-form-validation</code> you must define <code>control</code> property binding.</p>
<pre><code>&lt;form
  &lt;!-- on Reactive Forms --&gt;
  [formGroup]="form"
  &lt;!-- on Template Driven --&gt;
  #form="ngForm"
&gt;
&lt;input name="aName"/&gt;
&lt;app-form-validation
  [control]="form.controls['aName']"
&gt;&lt;/app-form-uniq-validation&gt;
</code></pre>
<p>So inject the service on your component and call the <code>notifier</code> method when you want to show the validation message in your application. If you want to use <code>app-form-uniq-validation</code> or <code>app-form-validation-list</code>, you must pass <code>NgForm</code> of <code>FormGroup</code> object as argument.</p>

