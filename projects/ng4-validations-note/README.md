<h1 id="ng4validationsnote">Ng4ValidationsNote</h1>
<h2 id="requirements">Requirements</h2>
<blockquote>
<ul>
<li>@angular/common, @angular/core and @angular/forms 5 or higher;</li>
<li>rxjs 5Angular 6 or higher.</li>
</ul>
</blockquote>
<h2 id="installing">Installing</h2>
<pre><code>$ npm i ng4-validations-note --save
</code></pre>
<h2 id="usage">Usage</h2>
<p>Include the module into <code>imports</code> metadata key of <code>NgModule</code> decorator of your application importing <code>Ng4ValidationsNoteModule</code> from <code>ng4-validations-note</code>, like that.</p>
<pre class=" language-typescript"><code class="prism  language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> Ng4ValidationsNoteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'ng4-validations-note'</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    imports<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        Ng4ValidationsNoteModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre>
<p>Choose which component you want to use</p>
<blockquote>
<ul>
<li>lib-form-validation;</li>
<li>lib-form-uniq-validation-list;</li>
<li>lib-form-uniq-validation-list.</li>
</ul>
</blockquote>
<p>To use anyone you must define the <code>messages</code> property binding, like that</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lib-form-validation</span> 
	<span class="token attr-name">[messages]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{
		required: <span class="token punctuation">'</span>this field is required.<span class="token punctuation">'</span>
	}<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lib-form-validation</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>To use <code>lib-form-uniq-validation</code> or <code>lib-form-validation-list</code> you must define the <code>nameTranslations</code> property binding and define a variable to bind a property by <code>@ViewChild('')</code> of <code>NgForValidationsNote.Components.ListComponent</code> or <code>NgForValidationsNote.Components.UniqComponent</code> kind.</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lib-form-uniq-validation</span>
	<span class="token attr-name">#validator</span> 
	<span class="token attr-name">[nameTranslations]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{
		name: <span class="token punctuation">'</span>Name<span class="token punctuation">'</span>,
		name2: <span class="token punctuation">'</span>Name 2<span class="token punctuation">'</span>
	}<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lib-form-uniq-validation</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>To in your component you should to call the <code>validate(form: FormGroup | NgForm)</code> of <code>NgForValidationsNote.Components.ListComponent</code> or <code>NgForValidationsNote.Components.UniqComponent</code>.</p>
<p>To use <code>lib-app-form-validation</code> you must define the <code>control</code> property binding.</p>
<pre class=" language-html"><code class="prism  language-html"><span class="token comment">&lt;!-- on Reactive Forms --&gt;</span>
<span class="token comment">&lt;!-- on Template Driven --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span>
	<span class="token attr-name">[formGroup]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form<span class="token punctuation">"</span></span>
	<span class="token attr-name">#form</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ngForm<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>aName<span class="token punctuation">"</span></span><span class="token punctuation">/&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lib-form-validation</span>
		<span class="token attr-name">[control]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form.controls[<span class="token punctuation">'</span>aName<span class="token punctuation">'</span>]<span class="token punctuation">"</span></span>
	<span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lib-form-uniq-validation</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre>
<p>So inject the <code>Ng4ValidationsNote.Services.Notifier</code> service on your component importing <code>Ng4ValidationsNote</code> from <code>ng4-validations-note</code> and call the <code>notifier()</code> method when you want to show the validation message in your application. If you want to use <code>app-form-uniq-validation</code> or <code>app-form-validation-list</code>, you must pass a <code>NgForm</code> of <code>FormGroup</code> instance as argument to work.</p>

